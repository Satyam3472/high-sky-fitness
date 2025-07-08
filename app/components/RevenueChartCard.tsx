import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  Legend,
} from "recharts";

const COLORS = ["#22c55e", "#ef4444"];

const ChartCard = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-900 p-3 rounded-xl border border-gray-800 shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
  >
    <h3 className="text-xs sm:text-sm font-semibold text-white mb-1 sm:mb-2 text-center">
      {title}
    </h3>
    <div className="h-[180px] md:h-[250px] w-full">
      {children}
    </div>
  </motion.div>
);

const RevenueChartCard = ({ revenueData, memberData, statusData, newVsReturningData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);

  const charts = [
    {
      title: "Monthly Revenue",
      component: (
        <ResponsiveContainer width="100%" height="100%" debounce={1}>
          <LineChart
            data={revenueData}
            margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis 
              dataKey="month" 
              stroke="#aaa" 
              fontSize={10}
              interval="preserveStartEnd"
              minTickGap={5}
            />
            <YAxis 
              stroke="#aaa" 
              fontSize={10}
              width={30}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "#1f2937", 
                borderColor: "#4b5563", 
                color: "#fff", 
                fontSize: 10,
                padding: '4px 8px'
              }} 
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#f97316" 
              strokeWidth={1.5} 
              dot={{ r: 2 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "Members Growth",
      component: (
        <ResponsiveContainer width="100%" height="100%" debounce={1}>
          <BarChart
            data={memberData}
            margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis 
              dataKey="month" 
              stroke="#aaa" 
              fontSize={10}
              interval="preserveStartEnd"
              minTickGap={5}
            />
            <YAxis 
              stroke="#aaa" 
              fontSize={10}
              width={30}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "#1f2937", 
                borderColor: "#4b5563", 
                color: "#fff", 
                fontSize: 10,
                padding: '4px 8px'
              }} 
            />
            <Bar 
              dataKey="members" 
              fill="#10b981" 
              radius={[2, 2, 0, 0]} 
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "Active Members",
      component: (
        <ResponsiveContainer width="100%" height="100%" debounce={1}>
          <PieChart>
            <Pie
              data={statusData}
              cx="50%"
              cy="50%"
              outerRadius={50}
              innerRadius={30}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              labelLine={false}
              dataKey="value"
              stroke="#1f2937"
            >
              {statusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "#1f2937", 
                borderColor: "#4b5563", 
                color: "#fff", 
                fontSize: 10,
                padding: '4px 8px'
              }} 
            />
          </PieChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "New vs Returning",
      component: (
        <ResponsiveContainer width="100%" height="100%" debounce={1}>
          <AreaChart
            data={newVsReturningData}
            margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f97316" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorReturning" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis 
              dataKey="month" 
              stroke="#aaa" 
              fontSize={10}
              interval="preserveStartEnd"
              minTickGap={5}
            />
            <YAxis 
              stroke="#aaa" 
              fontSize={10}
              width={30}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "#1f2937", 
                borderColor: "#4b5563", 
                color: "#fff", 
                fontSize: 10,
                padding: '4px 8px'
              }} 
            />
            <Legend 
              wrapperStyle={{ 
                fontSize: 10,
                paddingTop: 10
              }} 
            />
            <Area 
              type="monotone" 
              dataKey="new" 
              stroke="#f97316" 
              fill="url(#colorNew)" 
              fillOpacity={1} 
              strokeWidth={1.5}
            />
            <Area 
              type="monotone" 
              dataKey="returning" 
              stroke="#6366f1" 
              fill="url(#colorReturning)" 
              fillOpacity={1} 
              strokeWidth={1.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      )
    }
  ];

  const navigate = (dir) => {
    clearTimeout(timerRef.current);
    setDirection(dir);
    
    if (dir === 1) {
      setCurrentIndex(prev => (prev + 1) % charts.length);
    } else {
      setCurrentIndex(prev => (prev - 1 + charts.length) % charts.length);
    }
    
    timerRef.current = setTimeout(() => {
      setDirection(1);
    }, 5000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prev => (prev + 1) % charts.length);
    }, 5000);

    return () => clearInterval(timerRef.current);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: { duration: 0.4 }
    })
  };

  return (
    <div className="mb-4 relative">
      {/* Mobile Carousel */}
      <div className="block md:hidden overflow-hidden relative h-[280px]">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-full"
          >
            <ChartCard title={charts[currentIndex].title}>
              {charts[currentIndex].component}
            </ChartCard>
          </motion.div>
        </AnimatePresence>

        {/* Navigation and Dot Indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-4 px-2">
          <button 
            onClick={() => navigate(-1)}
            className="bg-gray-800/80 hover:bg-gray-700/90 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md"
            aria-label="Previous chart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex space-x-2">
            {charts.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-orange-500 w-3' : 'bg-gray-600'}`}
                aria-label={`Go to chart ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={() => navigate(1)}
            className="bg-gray-800/80 hover:bg-gray-700/90 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md"
            aria-label="Next chart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
        {charts.map((chart, index) => (
          <ChartCard key={index} title={chart.title}>
            {chart.component}
          </ChartCard>
        ))}
      </div>
    </div>
  );
};

export default RevenueChartCard;
