import React, { useState } from "react";
import {
  FiSettings,
  FiPlus,
  FiX,
  FiEdit2,
  FiTrash2,
  FiClock,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCheck,
  FiUser,
} from "react-icons/fi";
import {
  RiVipCrownFill,
  RiUserStarFill,
  RiUserHeartFill,
} from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const SettingsPanel = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [gymInfo, setGymInfo] = useState({
    name: "High Sky Fitness",
    address: "123 Fitness St, City, Country",
    phone: "(123) 456-7890",
    email: "info@highskyfitness.com",
    openingHours: "Mon-Fri: 6:00 AM - 10:00 PM\nSat-Sun: 8:00 AM - 8:00 PM",
  });

  const [plans, setPlans] = useState([
    {
      id: 1,
      name: "Basic",
      price: 79,
      duration: "1 month",
      features: ["Gym Access", "Locker Usage"],
    },
    {
      id: 2,
      name: "Premium",
      price: 119,
      duration: "1 month",
      features: [
        "Gym Access",
        "Locker Usage",
        "4 PT Sessions",
        "Group Classes",
      ],
    },
    {
      id: 3,
      name: "Ultimate",
      price: 299,
      duration: "1 month",
      features: [
        "Gym Access",
        "VIP Locker",
        "Unlimited PT",
        "All Classes",
        "Spa Access",
      ],
    },
  ]);

  const [newPlan, setNewPlan] = useState({
    name: "",
    price: "",
    duration: "1 month",
    features: [],
  });

  const [newFeature, setNewFeature] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });
  const [editMode, setEditMode] = useState(false);
  const [currentPlanId, setCurrentPlanId] = useState(null);

  // Feature Management
  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setNewPlan((prev) => ({
        ...prev,
        features: [...prev.features, newFeature.trim()],
      }));
      setNewFeature("");
    }
  };

  const removeFeature = (index) => {
    setNewPlan({
      ...newPlan,
      features: newPlan.features.filter((_, i) => i !== index),
    });
  };

  // Plan Management
  const handleSavePlan = () => {
    if (!newPlan.name || !newPlan.price || newPlan.features.length === 0) {
      setMessage({ text: "Please complete all plan fields.", type: "error" });
      return;
    }

    if (editMode) {
      const updatedPlans = plans.map((plan) =>
        plan.id === currentPlanId ? { ...newPlan, id: currentPlanId } : plan
      );
      setPlans(updatedPlans);
      setMessage({ text: "Plan updated successfully!", type: "success" });
    } else {
      const plan = {
        id: plans.length + 1,
        ...newPlan,
        price: parseFloat(newPlan.price),
      };
      setPlans([...plans, plan]);
      setMessage({ text: "New plan added successfully!", type: "success" });
    }

    resetPlanForm();
    setActiveTab("plans");
    setTimeout(() => setMessage({ text: "", type: "" }), 3000);
  };

  const handleEditPlan = (plan) => {
    setNewPlan({
      name: plan.name,
      price: plan.price,
      duration: plan.duration,
      features: [...plan.features],
    });
    setCurrentPlanId(plan.id);
    setEditMode(true);
    setActiveTab("add-plan");
  };

  const handleRemovePlan = (id) => {
    if (window.confirm("Are you sure you want to delete this plan?")) {
      setPlans(plans.filter((plan) => plan.id !== id));
      setMessage({ text: "Plan deleted successfully!", type: "success" });
      setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    }
  };

  const resetPlanForm = () => {
    setNewPlan({ name: "", price: "", duration: "1 month", features: [] });
    setEditMode(false);
    setCurrentPlanId(null);
  };

  // UI Components
  const TabButton = ({ tab, label, icon }) => (
    <button
      className={`flex items-center px-4 py-3 font-medium transition-all duration-200 rounded-t-lg ${
        activeTab === tab
          ? "text-orange-500 bg-gray-800 border-t-2 border-orange-500"
          : "text-gray-400 hover:text-orange-400 hover:bg-gray-800/50"
      }`}
      onClick={() => setActiveTab(tab)}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );

  const SectionHeader = ({ title, icon }) => (
    <div className="flex items-center mb-6">
      {icon && <span className="mr-3 text-orange-500">{icon}</span>}
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
  );

  const getPlanIcon = (planName) => {
    switch (planName) {
      case "Premium":
        return <RiVipCrownFill className="text-purple-500" />;
      case "Ultimate":
        return <RiUserStarFill className="text-blue-500" />;
      default:
        return <RiUserHeartFill className="text-green-500" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center w-full justify-center mb-8">
        <FiSettings className="text-3xl mr-3 text-orange-500" />
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Gym Settings
        </h2>
      </div>

      {/* Tabs Navigation */}
      <div className="flex space-x-1 bg-gray-900 rounded-t-lg p-1">
        <TabButton tab="general" label="General" icon={<FiSettings />} />
        <TabButton tab="plans" label="Plans" icon={<RiVipCrownFill />} />
        <TabButton tab="staff" label="Staff" icon={<FiUser />} />
      </div>

      {/* Message Alert */}
      {message.text && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            message.type === "success"
              ? "bg-green-900/30 text-green-400 border border-green-800"
              : "bg-red-900/30 text-red-400 border border-red-800"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* General Settings */}
      {activeTab === "general" && (
        <div className="bg-gray-900 p-8 rounded-b-lg rounded-tr-lg border border-gray-800 shadow-xl">
          <SectionHeader title="Gym Information" icon={<FiSettings />} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Gym Name
              </label>
              <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg px-4 py-3">
                <input
                  type="text"
                  className="w-full bg-transparent text-white focus:outline-none"
                  value={gymInfo.name}
                  onChange={(e) =>
                    setGymInfo({ ...gymInfo, name: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg px-4 py-3">
                <FiMail className="text-gray-500 mr-2" />
                <input
                  type="email"
                  className="w-full bg-transparent text-white focus:outline-none"
                  value={gymInfo.email}
                  onChange={(e) =>
                    setGymInfo({ ...gymInfo, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Address
              </label>
              <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg px-4 py-3">
                <FiMapPin className="text-gray-500 mr-2" />
                <input
                  type="text"
                  className="w-full bg-transparent text-white focus:outline-none"
                  value={gymInfo.address}
                  onChange={(e) =>
                    setGymInfo({ ...gymInfo, address: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Phone
              </label>
              <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg px-4 py-3">
                <FiPhone className="text-gray-500 mr-2" />
                <input
                  type="tel"
                  className="w-full bg-transparent text-white focus:outline-none"
                  value={gymInfo.phone}
                  onChange={(e) =>
                    setGymInfo({ ...gymInfo, phone: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Opening Hours
            </label>
            <div className="flex bg-gray-800 border border-gray-700 rounded-lg px-4 py-3">
              <FiClock className="text-gray-500 mr-2 mt-1" />
              <textarea
                className="w-full bg-transparent text-white focus:outline-none resize-none"
                rows="3"
                value={gymInfo.openingHours}
                onChange={(e) =>
                  setGymInfo({ ...gymInfo, openingHours: e.target.value })
                }
              />
            </div>
          </div>

          <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/20">
            Save Gym Information
          </button>
        </div>
      )}

      {/* Membership Plans */}
      {activeTab === "plans" && (
        <div className="bg-gray-900 p-8 rounded-b-lg rounded-tr-lg border border-gray-800 shadow-xl">
          <div className="flex justify-between items-center mb-8">
            <SectionHeader title="Membership Plans" icon={<RiVipCrownFill />} />
            <button
              className="flex items-center bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
              onClick={() => {
                resetPlanForm();
                setActiveTab("add-plan");
              }}
            >
              <FiPlus className="mr-2" /> New Plan
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-colors group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    {getPlanIcon(plan.name)}
                    <h4 className="text-xl font-bold text-white ml-2">
                      {plan.name}
                    </h4>
                  </div>
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleEditPlan(plan)}
                      className="text-blue-500 hover:text-blue-400 transition-colors"
                      title="Edit Plan"
                    >
                      <FiEdit2 />
                    </button>
                    <button
                      onClick={() => handleRemovePlan(plan.id)}
                      className="text-red-500 hover:text-red-400 transition-colors"
                      title="Delete Plan"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>

                <div className="text-3xl font-bold text-white mb-4">
                  ${plan.price}
                  <span className="text-sm font-normal text-gray-400">
                    {" "}
                    / {plan.duration}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-xs text-gray-500">Plan ID: {plan.id}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add/Edit Plan */}
      {activeTab === "add-plan" && (
        <div className="bg-gray-900 p-8 rounded-b-lg rounded-tr-lg border border-gray-800 shadow-xl">
          <div className="flex justify-between items-center mb-8">
            <SectionHeader
              title={editMode ? `Edit ${newPlan.name} Plan` : "Create New Plan"}
              icon={editMode ? <FiEdit2 /> : <FiPlus />}
            />
            <button
              onClick={() => {
                resetPlanForm();
                setActiveTab("plans");
              }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <IoMdClose className="text-xl" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Plan Name
              </label>
              <input
                type="text"
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={newPlan.name}
                onChange={(e) =>
                  setNewPlan({ ...newPlan, name: e.target.value })
                }
                placeholder="e.g. Premium Plus"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Price ($)
                </label>
                <input
                  type="number"
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={newPlan.price}
                  onChange={(e) =>
                    setNewPlan({ ...newPlan, price: e.target.value })
                  }
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Duration
                </label>
                <select
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={newPlan.duration}
                  onChange={(e) =>
                    setNewPlan({ ...newPlan, duration: e.target.value })
                  }
                >
                  <option value="1 month" className="bg-gray-900">
                    1 Month
                  </option>
                  <option value="3 months" className="bg-gray-900">
                    3 Months
                  </option>
                  <option value="6 months" className="bg-gray-900">
                    6 Months
                  </option>
                  <option value="12 months" className="bg-gray-900">
                    12 Months
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Plan Features
            </label>
            <div className="flex mb-3">
              <input
                type="text"
                className="flex-grow bg-gray-800 border border-gray-700 text-white rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                placeholder="Add feature (e.g. 'Sauna Access')"
                onKeyPress={(e) => e.key === "Enter" && handleAddFeature()}
              />
              <button
                onClick={handleAddFeature}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-4 py-3 rounded-r-lg transition-all duration-300"
              >
                Add
              </button>
            </div>

            {newPlan.features.length > 0 && (
              <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                <h4 className="text-sm font-medium text-gray-400 mb-2">
                  Current Features:
                </h4>
                <ul className="space-y-2">
                  {newPlan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center bg-gray-800 px-4 py-2 rounded-lg"
                    >
                      <div className="flex items-center">
                        <FiCheck className="text-green-500 mr-2" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                      <button
                        onClick={() => removeFeature(index)}
                        className="text-red-500 hover:text-red-400 transition-colors"
                      >
                        <FiX />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-3">
            <button
              onClick={() => {
                resetPlanForm();
                setActiveTab("plans");
              }}
              className="px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSavePlan}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/20"
            >
              {editMode ? "Update Plan" : "Create Plan"}
            </button>
          </div>
        </div>
      )}

      {/* Staff Management */}
      {activeTab === "staff" && (
        <div className="bg-gray-900 p-8 rounded-b-lg rounded-tr-lg border border-gray-800 shadow-xl">
          <SectionHeader title="Staff Management" icon={<FiUser />} />

          <div className="bg-gray-800/50 rounded-lg p-8 border-2 border-dashed border-gray-700 flex flex-col items-center justify-center text-center">
            <FiUser className="text-4xl text-gray-500 mb-4" />
            <h3 className="text-xl font-medium text-gray-400 mb-2">
              Staff Management Coming Soon
            </h3>
            <p className="text-gray-500 max-w-md">
              We're working on a comprehensive staff management system to help
              you manage trainers, schedules, and permissions.
            </p>
            <button className="mt-6 px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
              Notify Me When Ready
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPanel;
