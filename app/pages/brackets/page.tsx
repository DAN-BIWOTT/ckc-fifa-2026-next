"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function BracketsPage() {
  const rounds = {
    round1: [
      { id: 1, p1: "Elbin 🇫🇷", s1: 0, p2: "Patrick 🇧🇪", s2: 1, winner: "Patrick 🇧🇪" },
      { id: 2, p1: "Tomas 🇪🇸", s1: 0, p2: "Alexi 🇦🇷", s2: 0, winner: "Alexi 🇦🇷" },
      { id: 3, p1: "Leo 🇧🇷", s1: 4, p2: "William 🏴", s2: 1, winner: "Leo 🇧🇷" },
      { id: 4, p1: "Nicolas 🇩🇪", s1: 1, p2: "Austin 🇮🇹", s2: 2, winner: "Austin 🇮🇹" },
      { id: 6, p1: "Matteo 🇨🇦", s1: 1, p2: "Jakub 🇧🇷", s2: 2, winner: "Jakub 🇧🇷" },
    ],
    quarters: [
      { id: 1, p1: "Patrick 🇧🇪", s1: 1, p2: "Alexi 🇦🇷", s2: 0, winner: "Patrick 🇧🇪" },
      { id: 2, p1: "", s1: "", p2: "Austin 🇺🇸 vs Leo 🇧🇷", s2: "", winner: "Austin 🇺🇸 vs Leo 🇧🇷" },
      { id: 3, p1: "", s1: "", p2: "Jakub 🇧🇷 vs ??", s2: "", winner: "Jakub 🇧🇷 vs ??" },
    ],
    semis: [
      { id: 1, p1: "Patrick 🇧🇪 vs ??", s1: "", p2: "", s2: "", winner: "Patrick 🇧🇪 vs ??" },
      { id: 2, p1: "?? vs ??", s1: "", p2: "", s2: "", winner: "?? vs ??" },
    ],
    final: { p1: "??? VS ???", s1: "", p2: "", s2: "", winner: "??? 🏆" },
  };

  const MatchCard = ({
    p1, s1, p2, s2, winner,
  }: {
    p1: string; s1: number | string; p2: string; s2: number | string; winner: string;
  }) => {
    const loserStyle =
      "relative text-gray-400 line-through decoration-2 decoration-red-500/60 text-sm";
    const winnerStyle =
      "text-yellow-300 font-bold text-sm drop-shadow-[0_0_5px_rgba(255,215,0,0.6)]";

    return (
      <motion.div whileHover={{ scale: 1.03 }}>
        <Card className="bg-[#0a1735]/70 border border-yellow-300/20 px-3 py-2 rounded-md shadow-md relative w-48">
          <div className="flex flex-col text-left leading-tight">
            <span className={winner === p1 ? winnerStyle : loserStyle}>
              {p1} <span className="float-right text-white/70">{s1}</span>
            </span>
            <span className={winner === p2 ? winnerStyle : loserStyle}>
              {p2} <span className="float-right text-white/70">{s2}</span>
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
      <header className="text-center py-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-yellow-400"
        >
          CKC FIFA 26 TOURNAMENT
        </motion.h1>
        <p className="text-yellow-200 mt-2 text-sm tracking-wider">Powered by Cambridge Kids Club</p>
        <Link href="/" className="inline-block mt-4 text-yellow-400 underline text-sm hover:text-yellow-200">
          ← Back to Home
        </Link>
      </header>

      {/* Tournament Layout */}
     {/* Tournament Layout with Connector Lines */}
<div className="relative flex justify-center gap-20 px-10 pb-20">

  {/* === COLUMN 1: Round 1 === */}
  <div className="flex flex-col justify-around gap-4 relative">
    {rounds.round1.map((m) => (
      <MatchCard key={m.id} {...m} />
    ))}
    {/* right connector to Quarter Finals */}
    <div className="absolute top-0 right-[-40px] h-full w-[2px] bg-gradient-to-b from-blue-500 via-cyan-300 to-blue-500 rounded-full animate-pulse" />
  </div>

  {/* === COLUMN 2: Quarter Finals === */}
  <div className="flex flex-col justify-around gap-12 relative">
    {rounds.quarters.map((m) => (
      <MatchCard key={m.id} {...m} />
    ))}
    {/* connecting arcs to Semi Finals */}
    <svg
      className="absolute right-[-60px] top-0 h-full w-[60px]"
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
  <div className="flex flex-col justify-around gap-20 relative">
    {rounds.semis.map((m) => (
      <MatchCard key={m.id} {...m} />
    ))}
    {/* short connector line to Final */}
    <div className="absolute top-[45%] right-[-50px] w-[50px] h-[3px] bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full animate-pulse" />
  </div>

  {/* === COLUMN 4: Final === */}
  <div className="flex flex-col justify-center relative">
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="relative text-center"
    >
      <Card className="bg-yellow-400 text-black font-extrabold text-lg px-8 py-6 rounded-xl shadow-[0_0_30px_rgba(255,215,0,0.6)] border border-yellow-200">
        🏆 {rounds.final.p1} {rounds.final.s1} – {rounds.final.s2} {rounds.final.p2}
      </Card>
      <p className="mt-4 text-yellow-100 font-semibold text-base">
        Champion: {rounds.final.winner}
      </p>
    </motion.div>
  </div>
</div>

    </div>
  );
}
