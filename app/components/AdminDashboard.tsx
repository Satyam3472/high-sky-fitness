import React, { useState } from "react";
import {
  FiUsers,
  FiDollarSign,
  FiCalendar,
  FiPieChart,
  FiSettings,
  FiBell,
} from "react-icons/fi";
import SubscriptionsManagement from "./SubscriptionsManagement";
import PaymentsManagement from "./PaymentsManagement";
import DashboardOverview from "./DashboardOverview";
import MembersManagement from "./MembersManagement";
import SettingsPanel from "./SettingPanel";
import { BiHome } from "react-icons/bi";
import { HiCurrencyRupee } from "react-icons/hi";
import Image from "next/image";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

const AdminDashboard = ({ setAdminView, adminView }) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      <div
        className={`${
          sidebarOpen ? "w-48" : "w-20"
        } bg-black text-white transition-all duration-300 flex flex-col justify-between items-center`}
      >
        <div className="p-2 flex items-center justify-between border-b border-gray-700 relative">
          <div className="flex items-center space-x-1">
            <div className="h-10 w-auto sm:h-12">
              <Image
                src="/assets/GYM_LOGO.png" 
                alt="High Sky Fitness Logo" 
                width={100}
                height={100}
                className="h-10 w-auto sm:h-12"
              />
            </div>
            { sidebarOpen && 
              <h1 className="text-l sm:text-xl flex-1 font-extrabold text-white leading-none">
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">HIGH SKY</span> FITNESS
              </h1>
            }

          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-900 absolute hover:border-orange-900 hover:scale-90 -right-12 py-1 px-2 bg-gray-300"
          >
            {sidebarOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
          </button>
        </div>
        <nav className="w-full">
          <NavItem
            icon={<FiPieChart size={20} />}
            text="Dashboard"
            active={activeTab === "dashboard"}
            onClick={() => setActiveTab("dashboard")}
            sidebarOpen={sidebarOpen}
          />
          <NavItem
            icon={<FiUsers size={20} />}
            text="Members"
            active={activeTab === "members"}
            onClick={() => setActiveTab("members")}
            sidebarOpen={sidebarOpen}
          />
          <NavItem
            icon={<HiCurrencyRupee size={20} />}
            text="Payments"
            active={activeTab === "payments"}
            onClick={() => setActiveTab("payments")}
            sidebarOpen={sidebarOpen}
          />
          <NavItem
            icon={<FiCalendar size={20} />}
            text="Subscriptions"
            active={activeTab === "subscriptions"}
            onClick={() => setActiveTab("subscriptions")}
            sidebarOpen={sidebarOpen}
          />
          <NavItem
            icon={<FiSettings size={20} />}
            text="Settings"
            active={activeTab === "settings"}
            onClick={() => setActiveTab("settings")}
            sidebarOpen={sidebarOpen}
          />
        </nav>

        <button
          onClick={() => {
            setAdminView(!adminView);
          }}
          className="text-center flex m-4 justify-center items-center gap-1 text-sm mt-2 px-3 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-md shadow hover:scale-105 transition"
        >
          <BiHome className="font-bold text-lg" /> {sidebarOpen ? "Home" : null}
        </button>
      </div>
      <div className="flex-1 overflow-auto">
        <main className="p-6">
          {activeTab === "dashboard" && <DashboardOverview />}
          {activeTab === "members" && <MembersManagement />}
          {activeTab === "payments" && <PaymentsManagement />}
          {activeTab === "subscriptions" && <SubscriptionsManagement />}
          {activeTab === "settings" && <SettingsPanel />}
        </main>
      </div>
    </div>
  );
};

const NavItem = ({ icon, text, active, onClick, sidebarOpen }) => {
  return (
    <div
      className={`flex items-center px-4 py-3 cursor-pointer rounded-md m-4 ${
        active
          ? "bg-gradient-to-r from-orange-500 to-red-600"
          : "hover:bg-gray-700"
      }`}
      onClick={onClick}
    >
      <div className="mr-3">{icon}</div>
      {sidebarOpen && <span>{text}</span>}
    </div>
  );
};

export default AdminDashboard;
