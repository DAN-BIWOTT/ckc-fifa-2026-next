"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import garland from "@/images/right.png"
import star from "@/images/star.png"
import tree from "@/images/xmastree.png"
export default function ChampionshipLanding() {
  // 🕒 Next Match Info
  const nextMatch = {
    teams: "Austin 🇮🇹 vs Leo 🇧🇷",
    time: "Today • 3:45 PM",
    stage: "Quarter Final",
  };

  return (
    <div className="relative min-h-screen overflow-hidden font-sans text-white">
      {/* 🔥 Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00152E] via-[#011B44] to-[#122860]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.2)_0%,transparent_70%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_90%,rgba(255,0,0,0.2)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.07)_0%,transparent_60%),linear-gradient(-115deg,rgba(255,255,255,0.07)_0%,transparent_60%)] opacity-60" />

      {/* ✨ Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-4 sm:py-28 md:py-32">
           {/* 🎀 Corner Decorations */}
   
      <img
        src={garland.src}
        alt="Christmas Garland Right"
        className="absolute top-0 right-0 w-40 sm:w-60 lg:w-72 opacity-95 scale-x-[-1] select-none pointer-events-none"
      />
          {/* ✨ Gold Star Accent */}
        <img
          src={star.src}
          alt="Star Accent"
          className="absolute top-[12%] sm:top-[10%] w-5 sm:w-6 animate-pulse opacity-80"
        />
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white to-yellow-500 drop-shadow-[0_0_20px_rgba(255,215,0,0.7)] leading-tight"
        >
          CKC FIFA 2026
          <br />
          <span className="text-yellow-400">CHAMPIONSHIP</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-yellow-100 max-w-xl sm:max-w-2xl px-4"
        >
          Cambridge Kids Club brings the magic of the FIFA 26 World Cup to our young stars! 🌍
          <br />
          Dream big. Play fair. Celebrate like legends.
        </motion.p>

        {/* 🕓 Next Match Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-10 sm:mt-12 text-center bg-white/10 backdrop-blur-lg border border-yellow-300/30 rounded-2xl p-5 sm:p-6 w-[90%] max-w-xs sm:max-w-sm shadow-[0_0_25px_rgba(255,215,0,0.3)]"
        >
          <p className="text-xs sm:text-sm uppercase text-yellow-400 tracking-widest font-semibold">
            Next Match
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-yellow-200 mt-2 drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] break-words">
            {nextMatch.teams}
          </p>
          <p className="text-yellow-100 mt-1 text-sm sm:text-base font-medium">{nextMatch.stage}</p>
          <p className="text-gray-300 mt-1 text-xs sm:text-sm">{nextMatch.time}</p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-8 sm:mt-10 flex flex-wrap gap-4 sm:gap-6 justify-center"
        >
          <Link href="/pages/brackets">
            <button className="bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-yellow-300 transition transform hover:scale-105 shadow-[0_0_20px_rgba(255,215,0,0.6)]">
              View Brackets
            </button>
          </Link>
        </motion.div>

        {/* ⚡ Stadium Glow Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] left-[45%] w-[400px] sm:w-[600px] md:w-[700px] h-[400px] sm:h-[600px] md:h-[700px] rounded-full bg-[radial-gradient(circle,rgba(255,215,0,0.25)_0%,transparent_70%)] blur-[80px] sm:blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.8, 0.3], rotate: [0, -12, 12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[20%] right-[20%] sm:right-[30%] w-[350px] sm:w-[500px] md:w-[600px] h-[350px] sm:h-[500px] md:h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,150,255,0.3)_0%,transparent_70%)] blur-[90px] sm:blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[25%] left-[20%] sm:left-[25%] w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] rounded-full bg-[radial-gradient(circle,rgba(255,0,0,0.25)_0%,transparent_70%)] blur-[90px] sm:blur-[120px]"
          />
        </div>
      </section>

      {/* 🏟️ Details Section */}
      <section className="relative z-10 bg-gradient-to-t from-white to-yellow-50 text-black py-16 sm:py-20 text-center rounded-t-[2rem] sm:rounded-t-[3rem] shadow-[0_-5px_30px_rgba(0,0,0,0.2)]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-12 text-yellow-700 uppercase">
          Tournament Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-6 sm:px-8 max-w-6xl mx-auto">
          <div className="p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-yellow-500/30 transition border border-yellow-100">
            <h3 className="text-lg sm:text-xl font-bold text-yellow-700 mb-2">Age Groups</h3>
            <p className="text-gray-700 text-sm sm:text-base">U8 • U10 • U12 • U14</p>
          </div>
          <div className="p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-yellow-500/30 transition border border-yellow-100">
            <h3 className="text-lg sm:text-xl font-bold text-yellow-700 mb-2">Match Format</h3>
            <p className="text-gray-700 text-sm sm:text-base">5-a-side • 10 minute halves</p>
          </div>
          <div className="p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-yellow-500/30 transition border border-yellow-100">
            <h3 className="text-lg sm:text-xl font-bold text-yellow-700 mb-2">Prizes</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              🏆 Trophies • 🥇 Medals • 🎖️ Certificates
            </p>
          </div>
        </div>

         {/* 🎄 Decorative tree */}
        <div className="flex justify-center mt-6">
          <img
            src={tree.src}
            alt="Christmas Tree"
            className="w-16 sm:w-24 opacity-90"
          />
        </div>
        <div className="mt-8 sm:mt-5 text-base sm:text-lg text-yellow-700 font-semibold px-4">
          🎄Join the excitement this Chrismas season!🎄
        </div>
      </section>

      <footer className="py-4 sm:py-6 bg-black text-gray-400 text-xs sm:text-sm text-center">
        © 2026 Cambridge Kids Club • FIFA World Cup Kids Edition
      </footer>
    </div>
  );
}
