"use client";
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "IT Professional, Jamshedpur",
    review:
      "This GYM transformed my routine. The certified trainers really know Indian body types. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sneha Verma",
    role: "College Student, Ranchi",
    review:
      "I joined mainly for the Zumba and Bollywood dance classes. It's super fun and helps me stay fit!",
    rating: 4,
  },
  {
    name: "Amit Patel",
    role: "Businessman, Dhanbad",
    review:
      "Loved the personalized Indian diet plans and the premium equipment. It’s the best gym in town.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-black text-white relative z-10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-14 tracking-tight"
        >
          What Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            Members Say
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-md hover:shadow-orange-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              <FaQuoteLeft className="text-orange-500 text-2xl mb-4" />
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                "{item.review}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-md font-semibold text-white">{item.name}</h4>
                  <p className="text-xs text-gray-400">{item.role}</p>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="mr-1" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
