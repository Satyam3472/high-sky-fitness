import React, { useState, useEffect } from "react";

const bodyParts = ["back", "chest", "shoulders", "legs", "core", "biceps", "triceps"];

const Exercises = () => {
  const [activeTab, setActiveTab] = useState("back");
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchExercises = async (part: string) => {
    setLoading(true);
    try {

        const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${part}?limit=5&offset=0`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '7f922050ffmsh2bd7ed607fd3713p126141jsn7f25826aad72',
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
            }
        };

        const response = await fetch(url, options);
        const data = await response.json();

      setExercises(data);
    } catch (error) {
      console.error("Failed to fetch exercises:", error);
      setExercises([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExercises(activeTab);
  }, [activeTab]);

  return (
    <section id="exercises" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-10 tracking-tight">
          Explore {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            Exercises
          </span>{" "}
          by Body Part
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {bodyParts.map((part) => (
            <button
              key={part}
              onClick={() => setActiveTab(part)}
              className={`capitalize px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === part
                  ? "bg-gradient-to-r from-orange-500 to-red-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {part}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-center text-gray-400">Loading exercises...</p>
        ) : (
          <div className="overflow-x-auto">
            <div className="flex gap-6 px-2 sm:px-0">
              {
                Array.isArray(exercises) && exercises.map((ex: any, index) => (
                    <div
                    key={index}
                    className="min-w-[220px] bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-md hover:shadow-orange-500/30 transition-all duration-300"
                    >
                    <img
                        src={ex.gifUrl}
                        alt={ex.name}
                        className="w-full h-40 object-cover rounded-md mb-3"
                        loading="lazy"
                    />
                    <h4 className="text-md font-bold text-center capitalize mb-1">{ex.name}</h4>
                    <div className="text-xs text-gray-400 text-center">
                        <p>🎯 Target: <span className="capitalize">{ex.target}</span></p>
                        <p>🏋️ Equipment: <span className="capitalize">{ex.equipment}</span></p>
                        <p>⚙️ Difficulty: <span className="capitalize">{ex.difficulty || "N/A"}</span></p>
                    </div>
                    </div>
                ))
              }
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Exercises;
