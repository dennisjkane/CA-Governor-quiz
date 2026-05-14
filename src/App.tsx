/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { questions } from "./data/quizData";
import QuizCard from "./components/QuizCard";
import ResultCard from "./components/ResultCard";
import { ShieldCheck, Vote, Users } from "lucide-react";

type View = "landing" | "quiz" | "result";

export default function App() {
  const [view, setView] = useState<View>("landing");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});

  const handleStart = () => {
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setView("quiz");
  };

  const handleAnswer = (candidateId: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: candidateId,
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setView("result");
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else {
      setView("landing");
    }
  };

  const calculateScores = () => {
    const scores: Record<string, number> = {
      porter: 0,
      steyer: 0,
      becerra: 0,
      hilton: 0,
      bianco: 0,
    };
    Object.values(userAnswers).forEach((candidateId: string) => {
      if (candidateId in scores) {
        scores[candidateId]++;
      }
    });
    return scores;
  };

  const restart = () => setView("landing");

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <main className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[90vh]">
        <AnimatePresence mode="wait">
          {view === "landing" && (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl w-full"
            >
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="w-20 h-20 bg-blue-600 rounded-3xl mx-auto flex items-center justify-center shadow-2xl shadow-blue-200 mb-8"
                >
                  <Vote className="w-10 h-10 text-white" />
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                  Who is your <span className="text-blue-600">CA candidate Match?</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  Compare the specific policies of the 2026 California Gubernatorial candidates. 
                  No names, no noise—just pure policy.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: ShieldCheck, title: "Unbiased", desc: "Names are hidden until the end to ensure a values-driven match." },
                  { icon: Users, title: "Policy-First", desc: "Actual policy statements and quotes from verified campaigns." },
                  { icon: Vote, title: "2026 Ready", desc: "Updated for the current political landscape and primary race." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm"
                  >
                    <item.icon className="w-8 h-8 text-blue-500 mb-4" />
                    <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={handleStart}
                  className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-xl hover:bg-slate-800 transition-all hover:shadow-2xl hover:scale-[1.02] transform active:scale-95 shadow-xl shadow-slate-200"
                >
                  Start Values Quiz
                </button>
                <p className="mt-6 text-slate-400 text-sm font-medium">8 Questions • Approximately 3 minutes</p>
              </div>
            </motion.div>
          )}

          {view === "quiz" && (
            <div key="quiz" className="w-full flex justify-center">
              <QuizCard
                question={questions[currentQuestionIndex]}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={questions.length}
                onAnswer={handleAnswer}
                onBack={handleBack}
                initialSelectedId={userAnswers[currentQuestionIndex]}
              />
            </div>
          )}

          {view === "result" && (
            <div key="result" className="w-full flex justify-center">
              <ResultCard
                scores={calculateScores()}
                userAnswers={userAnswers}
                totalQuestions={questions.length}
                onRestart={restart}
                onBack={() => setView("quiz")}
              />
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Branding */}
      <footer className="py-8 text-center text-slate-400 text-sm font-medium border-t border-slate-100">
        <p>© 2026 California Values Initiative • Non-Partisan Voter Guide</p>
      </footer>
    </div>
  );
}

