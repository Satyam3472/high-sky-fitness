"use client";
import React, { useState, useEffect } from "react";

const bodyParts = ["back", "chest", "shoulders", "legs", "core", "biceps", "triceps"];

const Exercises = () => {
  const [activeTab, setActiveTab] = useState("back");
  const [exercises, setExercises] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchExercises = async (part: string) => {
    setLoading(true);
    try {
      const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${part}?limit=5&offset=0`;

      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "7f922050ffmsh2bd7ed607fd3713p126141jsn7f25826aad72",
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        },
      };

      const res = await fetch(url, options);
      const data = await res.json();
      setExercises(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching exercises:", error);
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
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-tight">
          Exercises by{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            Body Part
          </span>
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {bodyParts.map((part) => (
            <button
              key={part}
              onClick={() => setActiveTab(part)}
              className={`capitalize px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === part
                  ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-md"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {part}
            </button>
          ))}
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex gap-4 justify-center overflow-x-auto px-2 animate-pulse">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="min-w-[220px] h-[280px] bg-gray-800 rounded-xl p-4 flex flex-col gap-4"
              >
                <div className="bg-gray-700 h-40 w-full rounded-lg" />
                <div className="bg-gray-700 h-4 w-3/4 rounded" />
                <div className="bg-gray-700 h-3 w-1/2 rounded" />
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <div className="flex gap-6 px-2 sm:px-0">
              {exercises.map((ex, index) => (
                <div
                  key={index}
                  className="min-w-[220px] bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-md hover:shadow-orange-500/30 transition-transform hover:-translate-y-1 duration-300"
                >
                  <img
                    src={ex.gifUrl}
                    alt={ex.name}
                    className="w-full h-40 object-cover rounded-md mb-3"
                    loading="lazy"
                  />
                  <h4 className="text-md font-bold text-center capitalize mb-1">
                    {ex.name}
                  </h4>
                  <div className="text-xs text-gray-400 text-center space-y-1">
                    <p>🎯 Target: <span className="capitalize">{ex.target}</span></p>
                    <p>🏋️ Equipment: <span className="capitalize">{ex.equipment}</span></p>
                    <p>⚙️ Difficulty: <span className="capitalize">{ex.difficulty || "N/A"}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Exercises;
