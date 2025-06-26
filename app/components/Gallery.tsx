"use client";
import React from "react";
import { motion } from "framer-motion";

const imageGroups = [
  [
    "https://t4.ftcdn.net/jpg/00/99/82/15/360_F_99821575_nVEHTBXzUnTcLIKN6yOymAWAnFwEybGb.jpg",
    "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?cs=srgb&dl=pexels-willpicturethis-1954524.jpg&fm=jpg",
    "https://media.istockphoto.com/id/2075354173/photo/fitness-couple-is-doing-kettlebell-twist-in-a-gym-togehter.jpg?s=612x612&w=0&k=20&c=lfs1V1d0YB33tn72myi6FElJnylPJYYM9lW5ZhlnYqY=",
  ],
  [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXE900myl5BCOb5THQO1IFHCHjIyU9ldLoug&s",
    "https://i.pinimg.com/736x/4e/15/2e/4e152e3e679dafd966bfbdbf3fe2aa4a.jpg",
    "https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png",
  ],
  [
    "https://media.istockphoto.com/id/1427221641/photo/man-training-with-battle-rope-in-gym-gym.jpg?s=612x612&w=0&k=20&c=sh4m1EyXibIqPKPyFFeKGpmNhcg5eNtDBxXraG_uDDo=",
    "https://plus.unsplash.com/premium_photo-1726614200880-b4c9b8b88a7b?fm=jpg&q=60&w=3000",
    "https://plusfitness-production.s3.amazonaws.com/media/images/Blog__Media_2_xzxFj8t.width-1200.png",
  ],
  [
    "https://cbx-prod.b-cdn.net/COLOURBOX61601358.jpg?width=800&height=800&quality=70",
    "https://www.iias.asia/sites/default/files/10_IIAS_77_Page_1_Image_0001.jpg",
    "https://images.indianexpress.com/2025/04/woman-workout-gym.jpg?w=414",
  ],
];

const Gallery = () => {
  return (
    <div className="px-4 py-20 sm:px-16 bg-black" id="gallery">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-16 text-white tracking-tight"
      >
        Gym{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
          Gallery
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {imageGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="flex flex-col gap-6">
            {group.map((src, imgIndex) => (
              <motion.img
                key={imgIndex}
                src={src}
                alt={`Gallery ${groupIndex * 3 + imgIndex + 1}`}
                loading="lazy"
                className="w-full h-auto rounded-xl border border-gray-800 shadow-sm hover:shadow-orange-500/30 transition-transform hover:scale-105 duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: imgIndex * 0.15 }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
