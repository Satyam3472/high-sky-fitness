"use client";
import React from "react";
import { motion } from "framer-motion";

import { plans } from "../assets/data";

const Membership = () => {
  return (
    <section id="membership" className="py-10 sm:py-20 bg-black text-white relative z-10">
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-orange-500/5 to-red-500/5 blur-2xl opacity-10 -z-10" />

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-14 text-white tracking-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            Membership
          </span>{" "}
          Plans
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-gray-900 p-8 rounded-2xl border overflow-hidden ${
                plan.isPopular ? "border-orange-500 scale-[1.03]" : "border-gray-800"
              } hover:border-orange-500 hover:shadow-xl transition-all duration-300`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 text-xs font-bold rounded-bl-xl z-10">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-semibold text-center mb-4">{plan.name}</h3>

              <div className="text-center mb-6">
                {plan.regFee && (
                  <p className="text-lg text-gray-300 mb-1">{plan.regFee}</p>
                )}
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm text-gray-400"> {plan.duration}</span>
              </div>

              <ul className="space-y-3 mb-8 text-sm">
                {plan.features.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    ✅ {item}
                  </li>
                ))}
                {plan.exclude?.map((item, i) => (
                  <li key={i} className="flex items-center text-red-400">
                    ❌ {item}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full bg-gradient-to-r ${plan.gradient} hover:brightness-110 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 hover:scale-105 shadow-md ${
                  plan.isPopular ? "shadow-orange-400/30" : ""
                }`}
              >
                Join Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
