import React from "react";
import {
  FiArrowUp,
  FiArrowDown,
  FiUserPlus,
} from "react-icons/fi";
import {
  RiVipCrownFill,
  RiUserStarFill,
  RiUserHeartFill,
} from "react-icons/ri";
import RevenueChartCard from "./RevenueChartCard";

const DashboardOverview = () => {
  const stats = [
    {
      title: "Total Members",
      value: "248",
      change: "12%",
      trend: "up",
      icon: <RiUserHeartFill />,
    },
    {
      title: "Active Subscriptions",
      value: "189",
      change: "5%",
      trend: "up",
      icon: <RiVipCrownFill />,
    },
    {
      title: "Expiring Soon",
      value: "23",
      change: "3",
      trend: "up",
      icon: <FiUserPlus />,
    },
    {
      title: "Monthly Revenue",
      value: "₹12,845",
      change: "8%",
      trend: "up",
      icon: <RiUserStarFill />,
    },
  ];

  return (
    <div className="px-6 min-h-screen text-white">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl w-full text-center font-bold bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
          Gym Dashboard
        </h2>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group bg-gray-900 rounded-2xl border border-gray-800 p-6 shadow-sm hover:border-orange-500 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                  {stat.title}
                </h4>
                <p className="mt-2 text-3xl font-bold text-white">
                  {stat.value}
                </p>
              </div>
              <div
                className={`text-2xl p-2 rounded-xl ${
                  stat.trend === "up"
                    ? "bg-green-900/30 text-green-400 group-hover:shadow-green-500/20"
                    : "bg-red-900/30 text-red-400 group-hover:shadow-red-500/20"
                }`}
              >
                {stat.icon}
              </div>
            </div>

            <div
              className={`flex items-center gap-1 mt-4 text-sm font-medium ${
                stat.trend === "up" ? "text-green-400" : "text-red-400"
              }`}
            >
              {stat.trend === "up" ? (
                <FiArrowUp className="text-base" />
              ) : (
                <FiArrowDown className="text-base" />
              )}
              <span>{stat.change}</span>
            </div>
          </div>
        ))}
      </div>
      <RevenueChartCard />
    </div>
  );
};

export default DashboardOverview;
