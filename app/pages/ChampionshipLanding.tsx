"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ChampionshipLanding() {
  return (
    <div className="relative min-h-screen overflow-hidden font-sans text-white">
      {/* 🔥 Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00152E] via-[#011B44] to-[#122860]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.2)_0%,transparent_70%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_90%,rgba(255,0,0,0.2)_0%,transparent_70%)]" />

      {/* 🎆 Stadium light beams */}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.07)_0%,transparent_60%),linear-gradient(-115deg,rgba(255,255,255,0.07)_0%,transparent_60%)] opacity-60" />

      {/* ✨ Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center py-32 px-6">
        {/* Shining Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white to-yellow-500 drop-shadow-[0_0_20px_rgba(255,215,0,0.7)]"
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
          className="mt-6 text-xl md:text-2xl text-yellow-100 max-w-2xl"
        >
          Cambridge Kids Club brings the magic of the FIFA 26 World Cup to our young
          stars! 🌍
          <br />
          Dream big. Play fair. Celebrate like legends.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-wrap gap-6 justify-center"
        >
          <Link href="pages/brackets">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105 shadow-[0_0_20px_rgba(255,215,0,0.6)]">
              View Brackets
            </button>
          </Link>
        </motion.div>

        {/* ⚡ Stadium Spark & Confetti Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Golden shimmer waves */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.5, 0.9, 0.5],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[15%] left-[45%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(255,215,0,0.25)_0%,transparent_70%)] blur-[100px]"
          />

          {/* Blue & red flares for team color ambience */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, -12, 12, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[20%] right-[30%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,150,255,0.3)_0%,transparent_70%)] blur-[120px]"
          />

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[25%] left-[25%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(255,0,0,0.25)_0%,transparent_70%)] blur-[120px]"
          />
        </div>
      </section>

      {/* 🏟️ Details Section */}
      <section className="relative z-10 bg-gradient-to-t from-white to-yellow-50 text-black py-20 text-center rounded-t-[3rem] shadow-[0_-5px_30px_rgba(0,0,0,0.2)]">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-yellow-700 uppercase">
          Tournament Details
        </h2>
        <div className="grid md:grid-cols-3 gap-10 px-8 max-w-6xl mx-auto">
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-yellow-500/30 transition border border-yellow-100">
            <h3 className="text-xl font-bold text-yellow-700 mb-2">Age Groups</h3>
            <p className="text-gray-700">U8 • U10 • U12 • U14</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-yellow-500/30 transition border border-yellow-100">
            <h3 className="text-xl font-bold text-yellow-700 mb-2">Match Format</h3>
            <p className="text-gray-700">5-a-side • 10 minute halves</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-yellow-500/30 transition border border-yellow-100">
            <h3 className="text-xl font-bold text-yellow-700 mb-2">Prizes</h3>
            <p className="text-gray-700">🏆 Trophies • 🥇 Medals • 🎖️ Certificates</p>
          </div>
        </div>

        <div className="mt-16 text-lg text-yellow-700 font-semibold">
          ⚡ Join the excitement this summer and make CKC history! ⚡
        </div>
      </section>

      <footer className="py-6 bg-black text-gray-400 text-sm text-center">
        © 2026 Cambridge Kids Club • FIFA World Cup Kids Edition
      </footer>
    </div>
  );
}
