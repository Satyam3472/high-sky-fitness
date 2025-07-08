import React, { useState } from "react";
import {
  FiUsers,
  FiPieChart,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import { HiCurrencyRupee } from "react-icons/hi";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { BiHome } from "react-icons/bi";
import Image from "next/image";

import DashboardOverview from "./DashboardOverview";
import MembersManagement from "./MembersManagement";
import PaymentsManagement from "./PaymentsManagement";
import SubscriptionsManagement from "./SubscriptionsManagement";
import SettingsPanel from "./SettingPanel";

import { GYM_NAME } from "../assets/data";

const AdminDashboard = ({ setAdminView, adminView }) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menu = {
    'Dashboard' :<FiPieChart/>,
    'Members' : <FiUser/>,
    'Payments':<HiCurrencyRupee/>,
    'Settings':<FiSettings/>
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-gray-100">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex">
        <div
          className={`h-screen ${
            sidebarOpen ? "w-48" : "w-20"
          } bg-black text-white transition-all duration-300 flex flex-col justify-between`}
        >
          {/* Logo */}
          <div className="p-2 flex items-center justify-between border-b border-gray-700 relative">
            <div className="flex items-center space-x-1">
              <Image
                src="/assets/GYM_LOGO.png"
                alt="GYM Fitness Logo"
                width={100}
                height={100}
                className="h-10 w-auto sm:h-12"
              />
              {sidebarOpen && (
                <h1 className="text-l sm:text-xl flex-1 font-extrabold text-white leading-none">
                  <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                    {GYM_NAME.toUpperCase()}
                  </span>{" "}
                  FITNESS
                </h1>
              )}
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
              icon={<FiSettings size={20} />}
              text="Settings"
              active={activeTab === "settings"}
              onClick={() => setActiveTab("settings")}
              sidebarOpen={sidebarOpen}
            />
          </nav>

          <button
            onClick={() => setAdminView(!adminView)}
            className="text-center flex m-4 justify-center items-center gap-1 text-sm mt-2 px-3 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-md shadow hover:scale-105 transition"
          >
            <BiHome className="font-bold text-lg" />{" "}
            {sidebarOpen ? "Home" : null}
          </button>
        </div>
      </div>

      <div className="p-2 flex md:hidden items-center justify-between border-b border-gray-700 relative bg-black">
        <div className="flex items-center space-x-1">
          <Image
            src="/assets/GYM_LOGO.png"
            alt="GYM Fitness Logo"
            width={100}
            height={100}
            className="h-10 w-auto sm:h-12"
          />
          {sidebarOpen && (
            <h1 className="text-l sm:text-xl flex-1 font-extrabold text-white leading-none">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                {GYM_NAME.toUpperCase()}
              </span>{" "}
              FITNESS
            </h1>
          )}
        </div>
        <button
            onClick={() => setAdminView(!adminView)}
            className="text-center scale-75 sm:scale-90 md:scale-100 flex md:m-4 justify-center items-center gap-1 text-sm mt-2 px-3 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-md shadow hover:scale-105 transition"
          >
            <BiHome className="font-bold text-lg" />{" "}
            {sidebarOpen ? "Home" : null}
          </button>
      </div>

      <div className="flex-1 overflow-auto pt-4 pb-20 md:pb-0 px-4 md:px-6">
        {activeTab === "dashboard" && <DashboardOverview />}
        {activeTab === "members" && <MembersManagement />}
        {activeTab === "payments" && <PaymentsManagement />}
        {activeTab === "subscriptions" && <SubscriptionsManagement />}
        {activeTab === "settings" && <SettingsPanel />}
      </div>

      <div className="fixed md:hidden bottom-0 w-full bg-black border-t border-gray-800 z-50">
        <div className="flex justify-around py-2 text-white">
          {
            Object.keys(menu).map((item) =>           
              <MobileTab
              key={item}
              icon={menu[item]}
              label={item}
              active={activeTab === item.toLowerCase()}
              onClick={() => setActiveTab(item.toLowerCase())}
            />)
          }
        </div>
      </div>
    </div>
  );
};

// Desktop Nav Item
const NavItem = ({ icon, text, active, onClick, sidebarOpen }) => (
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

const MobileTab = ({ icon, label, active, onClick }) => {
  const baseStyles = "flex flex-col items-center text-xs px-2 py-1";
  const activeStyles = "bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg shadow-xl";
  const inactiveStyles = "text-gray-400 scale-90";
  const buttonStyles = `${baseStyles} ${active ? activeStyles : inactiveStyles}`;
  return (
    <button onClick={onClick} className={buttonStyles}>
      <div className="text-xl">{icon}</div>
      <span>{label}</span>
    </button>
  );
};


export default AdminDashboard;
