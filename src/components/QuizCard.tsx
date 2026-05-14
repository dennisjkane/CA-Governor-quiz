import { motion } from "motion/react";
import { CheckCircle2, ChevronLeft } from "lucide-react";
import { Answer, Question } from "../data/quizData";
import { useState, useEffect } from "react";
import { shuffle } from "../lib/utils";

interface QuizCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answerId: string) => void;
  onBack: () => void;
  initialSelectedId?: string;
}

export default function QuizCard({ 
  question, 
  questionNumber, 
  totalQuestions, 
  onAnswer, 
  onBack,
  initialSelectedId 
}: QuizCardProps) {
  const [shuffledAnswers, setShuffledAnswers] = useState<Answer[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    setShuffledAnswers(shuffle(question.answers));
    setSelectedId(initialSelectedId || null);
  }, [question, initialSelectedId]);

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border border-slate-100"
    >
      <div className="flex justify-end items-center mb-6">
        <div className="flex items-center space-x-3">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold uppercase tracking-wider">
            {question.category}
          </span>
          <span className="text-slate-400 text-sm font-medium">
            {questionNumber} / {totalQuestions}
          </span>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mb-8 leading-tight">
        {question.text}
      </h2>

      <div className="space-y-4">
        {shuffledAnswers.map((answer) => (
          <button
            key={answer.id}
            onClick={() => setSelectedId(answer.id)}
            className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 group flex items-start space-x-3 ${
              selectedId === answer.id
                ? "border-blue-500 bg-blue-50 ring-2 ring-blue-200"
                : "border-slate-100 hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              selectedId === answer.id ? "bg-blue-500 border-blue-500 text-white" : "border-slate-300"
            }`}>
              {selectedId === answer.id && <CheckCircle2 className="w-4 h-4" />}
            </div>
            <span className={`text-lg transition-colors ${
              selectedId === answer.id ? "text-blue-900 font-medium" : "text-slate-600"
            }`}>
              {answer.text}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <button
          onClick={onBack}
          className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 text-slate-500 font-bold rounded-lg hover:bg-slate-50 transition-all group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Previous {questionNumber === 1 ? "Page" : "Question"}</span>
        </button>
        
        <button
          disabled={!selectedId}
          onClick={() => selectedId && onAnswer(selectedId)}
          className={`w-full sm:w-auto px-10 py-3 rounded-lg font-bold transition-all duration-300 transform active:scale-95 ${
            selectedId
              ? "bg-slate-800 text-white hover:bg-slate-900 shadow-lg hover:shadow-xl"
              : "bg-slate-100 text-slate-400 cursor-not-allowed"
          }`}
          style={{ cursor: selectedId ? 'pointer' : 'not-allowed' }}
        >
          {questionNumber === totalQuestions ? "View Results" : "Next Question"}
        </button>
      </div>
    </motion.div>
  );
}
