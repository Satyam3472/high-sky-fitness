"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                High Sky Fitness
              </span>
            </h2>
            <p className="text-base md:text-lg mb-4 text-gray-300 leading-relaxed">
              High Sky Fitness is a premier fitness destination located in the
              heart of the city, known for world-class equipment and elite
              coaching tailored for Indian fitness goals.
            </p>
            <p className="text-base md:text-lg mb-4 text-gray-300 leading-relaxed">
              From personalized training to outdoor summer sessions and group
              activities like Zumba, CrossFit, and Yoga — we’ve got something
              for everyone.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Our certified trainers and friendly staff are here to help you
              achieve transformation — both physically and mentally.
            </p>
            <button className="mt-8 flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 hover:scale-105 shadow-lg shadow-orange-400/30">
              <FaUsers />
              Meet Our Team
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl blur opacity-25 z-0 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1170&q=80"
              alt="Gym trainers"
              className="relative rounded-xl shadow-2xl w-full h-auto border-2 border-gray-800 z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
