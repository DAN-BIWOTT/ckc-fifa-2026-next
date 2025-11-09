"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function brackets() {
  const quarterFinals = [
    { id: 1, p1: "Patrick 🇫🇷", p2: "Toma 🇪🇸", winner: "Patrick 🇫🇷" },
    { id: 2, p1: "Leo P 🇧🇷", p2: "Alexi 🇦🇷", winner: "Leo P 🇧🇷" },
    { id: 3, p1: "Nicolas 🇩🇪", p2: "Austin 🏴", winner: "Nicolas 🇩🇪" },
    { id: 4, p1: "X 🇯🇵", p2: "Jude 🇮🇹", winner: "X 🇯🇵" },
  ];

  const semiFinals = [
    { id: 1, p1: "Patrick 🇫🇷", p2: "Leo P 🇧🇷", winner: "Patrick 🇫🇷" },
    { id: 2, p1: "Nicolas 🇩🇪", p2: "X 🇯🇵", winner: "X 🇯🇵" },
  ];

  const final = { p1: "?", p2: "X 🇯🇵", winner: "?" };

  const MatchCard = ({
    p1,
    p2,
    winner,
  }: {
    p1: string;
    p2: string;
    winner: string;
  }) => {
    const loserStyle =
      "relative text-gray-400 line-through decoration-2 decoration-red-500/60";
    const winnerStyle =
      "text-yellow-300 font-bold drop-shadow-[0_0_8px_rgba(255,215,0,0.7)]";

    return (
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 250 }}
      >
        <Card className="bg-gradient-to-r from-[#ffffff0d] to-[#ffffff1a] backdrop-blur-sm border border-white/10 p-4 rounded-xl shadow-md hover:border-yellow-300/30 transition relative overflow-hidden">
          <div className="flex flex-col gap-1 text-lg text-left">
            <span className={winner === p1 ? winnerStyle : loserStyle}>{p1}</span>
            <span className={winner === p2 ? winnerStyle : loserStyle}>{p2}</span>
          </div>

          {winner !== "?" && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-yellow-400 via-yellow-200 to-transparent"
            />
          )}
        </Card>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden text-white font-sans">
      {/* Background lights */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030b1b] via-[#0a1740] to-[#08142d]" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[200px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-yellow-400/20 rounded-full blur-[200px] animate-pulse" />

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center px-8 pt-6 mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-yellow-400 drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
        >
          CKC FIFA 2026 BRACKETS
        </motion.h1>

        <Link
          href="/"
          className="text-yellow-300 font-semibold hover:text-yellow-200 transition underline"
        >
          ← Back
        </Link>
      </header>

      {/* Brackets Grid */}
      <div className="relative z-10 flex justify-center items-start">
        <div className="grid grid-cols-3 gap-20 min-w-[1000px] text-center">
          {/* Quarter Finals */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-yellow-300 uppercase tracking-widest">
              Quarter Finals
            </h2>
            <div className="space-y-6">
              {quarterFinals.map((q) => (
                <MatchCard key={q.id} p1={q.p1} p2={q.p2} winner={q.winner} />
              ))}
            </div>
          </div>

          {/* Semi Finals */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-yellow-300 uppercase tracking-widest">
              Semi Finals
            </h2>
            <div className="space-y-16 mt-8">
              {semiFinals.map((s) => (
                <MatchCard key={s.id} p1={s.p1} p2={s.p2} winner={s.winner} />
              ))}
            </div>
          </div>

          {/* Final */}
          <div className="flex flex-col items-center justify-center mt-10">
            <h2 className="text-2xl font-bold mb-8 text-yellow-300 uppercase tracking-widest">
              Final
            </h2>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-8 bg-[conic-gradient(from_0deg,rgba(255,255,255,0.1),rgba(255,215,0,0.3),transparent_80%)] blur-[80px] animate-spin-slow rounded-full" />

              <Card className="relative z-10 bg-yellow-500 text-black p-10 rounded-2xl text-3xl font-extrabold shadow-[0_0_30px_rgba(255,215,0,0.6)] border border-yellow-200">
                🏆 {final.p1} vs {final.p2}
              </Card>

              <p className="mt-6 text-yellow-100 text-xl font-semibold tracking-wide">
                Champion: {final.winner}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
