import React from "react";

const Gallery = () => {
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
      "https://plus.unsplash.com/premium_photo-1726614200880-b4c9b8b88a7b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwZ3ltfGVufDB8fDB8fHww",
      "https://plusfitness-production.s3.amazonaws.com/media/images/Blog__Media_2_xzxFj8t.width-1200.png",
    ],
    [
      "https://cbx-prod.b-cdn.net/COLOURBOX61601358.jpg?width=800&height=800&quality=70",
      "https://www.iias.asia/sites/default/files/10_IIAS_77_Page_1_Image_0001.jpg",
      "https://images.indianexpress.com/2025/04/woman-workout-gym.jpg?w=414",
    ],
  ];

  return (
    <div className="p-4 sm:p-16 bg-black" id="gallery">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Gym{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
          Gallery
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
        {imageGroups.map((group, index) => (
          <div key={index} className="flex justify-center gap-4 px-2 flex-col">
            {group.map((src, imgIndex) => (
              <img
                key={imgIndex}
                src={src}
                alt={`Gallery image ${index * 3 + imgIndex + 1}`}
                className="w-full h-auto rounded-lg hover:scale-105 border border-gray-800 hover:border-orange-500 transition-transform duration-300"
                loading="lazy"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
