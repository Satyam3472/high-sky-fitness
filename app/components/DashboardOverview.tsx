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

import { revenueData, statusData, memberData, newVsReturningData } from "../assets/data";

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
    <div className="min-h-screen px-4 sm:px-6 text-white">
      {/* Heading */}
      <div className="text-center mb-4 sm:mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
          Gym Dashboard
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group bg-gray-900 border border-gray-800 rounded-xl p-3 sm:p-4 hover:border-orange-500 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start justify-between space-x-2">
              <div className="min-w-0">
                <h4 className="text-[0.65rem] xs:text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wide truncate">
                  {stat.title}
                </h4>
                <p className="mt-1 text-base sm:text-xl font-bold text-white truncate">
                  {stat.value}
                </p>
              </div>
              <div
                className={`flex-shrink-0 text-lg sm:text-xl p-1 sm:p-2 rounded-lg ${
                  stat.trend === "up"
                    ? "bg-green-900/30 text-green-400"
                    : "bg-red-900/30 text-red-400"
                }`}
              >
                {stat.icon}
              </div>
            </div>

            <div
              className={`flex items-center gap-1 mt-2 text-xs sm:text-sm font-medium ${
                stat.trend === "up" ? "text-green-400" : "text-red-400"
              }`}
            >
              {stat.trend === "up" ? (
                <FiArrowUp className="text-xs sm:text-sm" />
              ) : (
                <FiArrowDown className="text-xs sm:text-sm" />
              )}
              <span className="truncate">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <RevenueChartCard revenueData={revenueData} statusData={statusData} memberData={memberData} newVsReturningData={newVsReturningData} />
    </div>
  );
};

export default DashboardOverview;
