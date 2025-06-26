import Image from "next/image";
import React from "react";
import { FaArrowRight, FaInfoCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative bg-black overflow-hidden py-20 px-2" id="Home">
      <div className="absolute inset-0 z-0 left-1/2 w-1/2">
        <Image
          src="/assets/hero.png"
          alt="Fitness Background"
          layout="fill" 
          className="object-cover object-center opacity-80 rounded-xl"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent rounded-3xl"></div>
      </div>

      {/* Glowing top gradient */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[140%] h-72 bg-gradient-to-br from-[#d0d0d075] to-[#3d3d3d87] opacity-20 blur-2xl animate-pulse z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 md:py-28 text-center md:text-left">
        <div className="max-w-2xl mx-auto md:mx-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow">
            Transform Your Body,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Transform Your Life
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Join{" "}
            <span className="text-white font-semibold">High Sky Fitness</span>{" "}
            and unlock your full potential with elite coaching, immersive
            energy, and top-tier equipment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl shadow-xl shadow-orange-500/30">
              Get Started <FaArrowRight />
            </button>
            <button className="flex items-center gap-2 border border-gray-600 hover:border-orange-500 text-gray-100 hover:text-orange-400 font-semibold py-3 px-6 rounded-xl transition transform hover:scale-105">
              Learn More <FaInfoCircle />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
