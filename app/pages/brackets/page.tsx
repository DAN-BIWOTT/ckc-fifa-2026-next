"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { rounds } from "@/data/matches";

export default function BracketsPage() {
  const MatchCard = ({
    p1,
    s1,
    p2,
    s2,
    winner,
  }: {
    p1: string;
    s1: number | string;
    p2: string;
    s2: number | string;
    winner: string;
  }) => {
    const loserStyle =
      "relative text-gray-400 line-through decoration-2 decoration-red-500/60 text-xs sm:text-sm";
    const winnerStyle =
      "text-yellow-300 font-bold text-xs sm:text-sm drop-shadow-[0_0_5px_rgba(255,215,0,0.6)]";

    return (
      <motion.div whileHover={{ scale: 1.03 }}>
        <Card className="bg-[#0a1735]/70 border border-yellow-300/20 px-2 sm:px-3 py-2 rounded-md shadow-md relative w-36 sm:w-44 md:w-48">
          <div className="flex flex-col text-left leading-tight">
            <span className={winner === p1 ? winnerStyle : loserStyle}>
              {p1}{" "}
              <span className="float-right text-white/70 text-[11px] sm:text-xs">
                {s1}
              </span>
            </span>
            <span className={winner === p2 ? winnerStyle : loserStyle}>
              {p2}{" "}
              <span className="float-right text-white/70 text-[11px] sm:text-xs">
                {s2}
              </span>
            </span>
          </div>
          {winner !== "?" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-yellow-400 via-yellow-200 to-transparent"
            />
          )}
        </Card>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#030b1b] via-[#0a1740] to-[#08142d] text-white font-sans overflow-x-auto">
      <header className="text-center py-8 sm:py-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-yellow-400 leading-tight"
        >
          CKC FIFA 26 TOURNAMENT
        </motion.h1>
        <p className="text-yellow-200 mt-2 text-xs sm:text-sm tracking-wider">
          Powered by Cambridge Kids Club
        </p>
        <Link
          href="/"
          className="inline-block mt-3 sm:mt-4 text-yellow-400 underline text-xs sm:text-sm hover:text-yellow-200"
        >
          ← Back to Home
        </Link>
      </header>

      {/* 🏆 Tournament Layout */}
      <div
        className="
          relative flex flex-row justify-start md:justify-center 
          gap-8 sm:gap-12 md:gap-20 
          px-4 sm:px-6 md:px-10 pb-10 md:pb-20 
          overflow-x-auto snap-x snap-mandatory
        "
      >
        {/* === COLUMN 1: Round 1 === */}
        <div className="flex flex-col justify-around gap-3 sm:gap-4 md:gap-6 relative snap-center shrink-0">
          {rounds.round1.map((m) => (
            <MatchCard key={m.id} {...m} />
          ))}
          <div className="hidden md:block absolute top-0 right-[-30px] h-full w-[2px] bg-gradient-to-b from-blue-500 via-cyan-300 to-blue-500 rounded-full animate-pulse" />
        </div>

        {/* === COLUMN 2: Quarter Finals === */}
        <div className="flex flex-col justify-around gap-6 sm:gap-10 md:gap-12 relative snap-center shrink-0">
          {rounds.quarters.map((m) => (
            <MatchCard key={m.id} {...m} />
          ))}
          <svg
            className="hidden md:block absolute right-[-50px] top-0 h-full w-[50px]"
            viewBox="0 0 60 600"
            preserveAspectRatio="none"
          >
            <path
              d="M2 50 C30 80, 30 120, 58 150
                 M2 250 C30 280, 30 320, 58 350
                 M2 450 C30 480, 30 520, 58 550"
              stroke="url(#grad1)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00C6FF" />
                <stop offset="100%" stopColor="#0072FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* === COLUMN 3: Semi Finals === */}
        <div className="flex flex-col justify-around gap-10 sm:gap-14 md:gap-20 relative snap-center shrink-0">
          {rounds.semis.map((m) => (
            <MatchCard key={m.id} {...m} />
          ))}
          <div className="hidden md:block absolute top-[45%] right-[-40px] w-[40px] h-[3px] bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full animate-pulse" />
        </div>

        {/* === COLUMN 4: Final === */}
        <div className="flex flex-col justify-center relative snap-center shrink-0">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative text-center"
          >
            <Card className="bg-yellow-400 text-black font-extrabold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl shadow-[0_0_25px_rgba(255,215,0,0.5)] border border-yellow-200 w-40 sm:w-52 md:w-60">
              🏆 {rounds.final.p1} {rounds.final.s1} – {rounds.final.s2}{" "}
              {rounds.final.p2}
            </Card>
            <p className="mt-3 sm:mt-4 text-yellow-100 font-semibold text-sm sm:text-base">
              Champion: {rounds.final.winner}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
