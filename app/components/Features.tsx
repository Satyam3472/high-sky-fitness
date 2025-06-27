"use client";
import React from "react";
import { motion } from "framer-motion";
import { CgGym } from "react-icons/cg";
import { FaUserCheck } from "react-icons/fa";
import { FaTableCellsColumnLock } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";

const featuresList = [
  {
    icon: <FaUserCheck />,
    title: "Certified Trainers",
    description: "Trained professionals with experience in Indian body types & goals",
  },
  {
    icon: <CgGym />,
    title: "18,000 sq.m. Space",
    description: "Massive training area with premium equipment",
  },
  {
    icon: <IoFastFood />,
    title: "Indian Diet Plans",
    description: "Customised vegetarian & non-veg meal plans for Indian lifestyles",
  },
  {
    icon: <FaTableCellsColumnLock />,
    title: "Secure Lockers",
    description: "Safe and personal lockers available for all members",
  },
];

const Features = () => {
  return (
    <section id="advantages" className=" py-4 sm:py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-14 text-white tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Why Choose{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            High Sky Fitness
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10 px-4">
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 border border-gray-800 p-4 sm:p-6 rounded-xl text-center hover:shadow-xl hover:border-orange-500 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center items-center text-5xl text-orange-500 mb-5">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
