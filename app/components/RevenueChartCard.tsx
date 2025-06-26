import React from "react";
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

// 🎯 Sample Data
const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 14500 },
  { month: "Mar", revenue: 9800 },
  { month: "Apr", revenue: 16300 },
  { month: "May", revenue: 14300 },
  { month: "Jun", revenue: 17800 },
  { month: "Jul", revenue: 19400 },
  { month: "Aug", revenue: 15500 },
  { month: "Sep", revenue: 17000 },
  { month: "Oct", revenue: 21000 },
  { month: "Nov", revenue: 19000 },
  { month: "Dec", revenue: 23000 },
];

const memberData = [
  { month: "Jan", members: 120 },
  { month: "Feb", members: 140 },
  { month: "Mar", members: 135 },
  { month: "Apr", members: 160 },
  { month: "May", members: 175 },
  { month: "Jun", members: 200 },
];

const statusData = [
  { name: "Active", value: 300 },
  { name: "Inactive", value: 100 },
];

const newVsReturningData = [
  { month: "Jan", new: 60, returning: 40 },
  { month: "Feb", new: 80, returning: 60 },
  { month: "Mar", new: 75, returning: 50 },
  { month: "Apr", new: 90, returning: 70 },
  { month: "May", new: 110, returning: 60 },
  { month: "Jun", new: 130, returning: 70 },
];

const COLORS = ["#22c55e", "#ef4444"]; // Active / Inactive

const ChartCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
    <h3 className="text-lg font-semibold text-white mb-4 text-center">
      {title}
    </h3>
    <div className="h-64">{children}</div>
  </div>
);

const RevenueChartCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Revenue Line Chart */}
      <ChartCard title="Monthly Revenue">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="month" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#4b5563", color: "#fff" }} />
            <Line type="monotone" dataKey="revenue" stroke="#f97316" strokeWidth={3} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Members Bar Chart */}
      <ChartCard title="Total Members Growth">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={memberData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="month" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#4b5563", color: "#fff" }} />
            <Bar dataKey="members" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Pie Chart */}
      <ChartCard title="Active vs Inactive Members">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={statusData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
              dataKey="value"
              stroke="#1f2937"
            >
              {statusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#4b5563", color: "#fff" }} />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Area Chart */}
      <ChartCard title="New vs Returning Members">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={newVsReturningData}>
            <defs>
              <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorReturning" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="month" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#4b5563", color: "#fff" }} />
            <Legend />
            <Area
              type="monotone"
              dataKey="new"
              stroke="#f97316"
              fill="url(#colorNew)"
              fillOpacity={1}
            />
            <Area
              type="monotone"
              dataKey="returning"
              stroke="#6366f1"
              fill="url(#colorReturning)"
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
};

export default RevenueChartCard;
