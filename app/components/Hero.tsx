"use client";
import Image from "next/image";
import React from "react";
import { FaArrowRight, FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-black overflow-hidden py-2 sm:py-20 px-2" id="Home">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 sm:left-1/2 w-full sm:w-1/2">
        <Image
          src="/assets/hero.png"
          alt="Fitness Background"
          layout="fill"
          className="object-cover object-center opacity-80 rounded-xl"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent rounded-3xl"></div>
      </div>

      {/* Top Glow Gradient */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[140%] h-72 bg-gradient-to-br from-[#d0d0d075] to-[#3d3d3d87] opacity-20 blur-2xl animate-pulse z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 md:py-28 text-center md:text-left">
        <motion.div
          className="max-w-2xl mx-auto md:mx-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Transform Your Body,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Transform Your Life
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-gray-300 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Join{" "}
            <span className="text-white font-semibold">High Sky Fitness</span>{" "}
            and unlock your full potential with elite coaching, immersive
            energy, and top-tier equipment.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl shadow-xl shadow-orange-500/30 animate-pulse"
            >
              Get Started <FaArrowRight />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
