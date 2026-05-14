import { motion } from "motion/react";
import { candidates as candidateData, questions } from "../data/quizData";
import { Award, RotateCcw, ChevronLeft } from "lucide-react";

interface ResultCardProps {
  scores: Record<string, number>;
  userAnswers: Record<number, string>;
  totalQuestions: number;
  onRestart: () => void;
  onBack: () => void;
}

export default function ResultCard({ scores, userAnswers, totalQuestions, onRestart, onBack }: ResultCardProps) {
  const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const maxScore = sortedScores[0][1];
  const tiedCandidates = sortedScores.filter(s => s[1] === maxScore);
  const isTie = tiedCandidates.length > 1;

  const getCandidateForQuestion = (index: number) => {
    const candidateId = userAnswers[index];
    return candidateData[candidateId];
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100"
    >
      <div className="bg-slate-900 p-8 text-center text-white relative overflow-hidden">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative z-10"
        >
          <Award className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">
            {isTie ? "Your Top Matches" : "Your Top Match"}
          </h2>
          <h3 className="text-4xl font-extrabold mb-1">
            {tiedCandidates.map(s => candidateData[s[0]].name).join(" & ")}
          </h3>
          {!isTie && <p className="text-slate-400 italic">"{candidateData[tiedCandidates[0][0]].tagline}"</p>}
        </motion.div>
        
        {/* Background Decorative Circles */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />
      </div>

      <div className="p-8">
        <div className="space-y-6 mb-8 border-b border-slate-100 pb-8">
          {tiedCandidates.map(([id]) => (
            <div key={id} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              {isTie && <span className="text-xs font-bold text-blue-600 uppercase tracking-tighter block mb-1">{candidateData[id].name} Match:</span>}
              <p className="text-slate-600 text-lg leading-relaxed">
                {candidateData[id].description}
              </p>
            </div>
          ))}
        </div>

        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Your Choices by Category</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {questions.map((q, index) => {
            const match = getCandidateForQuestion(index);
            return (
              <div key={q.id} className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-1">{q.category}</span>
                  <p className="text-sm text-slate-500 italic mb-2 line-clamp-2">"{q.answers.find(a => a.id === userAnswers[index])?.text}"</p>
                </div>
                <div className="flex items-center space-x-2 pt-2 border-t border-slate-200 mt-auto">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-sm font-semibold text-slate-700">{match.name}</span>
                </div>
              </div>
            );
          })}
        </div>

        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Overall Ranking</h4>
        <div className="space-y-4 mb-10">
          {sortedScores.map(([id, score]) => {
            const candidate = candidateData[id];
            const percentage = Math.round((score / totalQuestions) * 100);
            
            return (
              <div key={id} className="relative group">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-slate-700">{candidate.name}</span>
                  <span className="text-slate-500 font-mono text-sm">{percentage}%</span>
                </div>
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full rounded-full ${
                      score === maxScore ? "bg-blue-600" : "bg-slate-300"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onBack}
            className="flex-1 flex items-center justify-center space-x-2 py-4 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-colors group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Previous Question</span>
          </button>
          <button
            onClick={onRestart}
            className="flex-1 flex items-center justify-center space-x-2 py-4 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors group"
          >
            <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            <span>Retake Quiz</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
