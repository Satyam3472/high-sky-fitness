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
      change: "3%",
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
    <div className="min-h-screen px-4 sm:px-6 py-6 text-white">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
          Gym Dashboard
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group bg-gray-900 border border-gray-800 rounded-2xl p-5 shadow-sm hover:border-orange-500 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                  {stat.title}
                </h4>
                <p className="mt-2 text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </p>
              </div>
              <div
                className={`text-xl p-2 rounded-xl transition-all duration-300 ${
                  stat.trend === "up"
                    ? "bg-green-900/30 text-green-400 group-hover:shadow-green-400/20"
                    : "bg-red-900/30 text-red-400 group-hover:shadow-red-400/20"
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

      {/* Revenue Chart */}
      <RevenueChartCard />
    </div>
  );
};

export default DashboardOverview;
