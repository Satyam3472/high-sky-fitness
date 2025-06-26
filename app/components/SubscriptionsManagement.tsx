import React, { useState } from "react";
import {
  FiSearch,
  FiRefreshCw,
  FiEye,
  FiCalendar,
  FiUser,
  FiCreditCard,
} from "react-icons/fi";
import {
  RiVipCrownFill,
  RiUserStarFill,
  RiUserHeartFill,
} from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const SubscriptionsManagement = () => {
  const [subscriptions, setSubscriptions] = useState([
    {
      id: 1,
      memberId: 1,
      memberName: "Kumar Satyam",
      plan: "Premium",
      startDate: "2023-05-15",
      endDate: "2023-11-15",
      status: "active",
      paymentStatus: "paid",
    },
    {
      id: 2,
      memberId: 2,
      memberName: "Yash Champawat",
      plan: "Basic",
      startDate: "2023-05-20",
      endDate: "2023-08-20",
      status: "active",
      paymentStatus: "paid",
    },
    {
      id: 3,
      memberId: 3,
      memberName: "Kundan Jha",
      plan: "Ultimate",
      startDate: "2023-05-22",
      endDate: "2024-05-22",
      status: "active",
      paymentStatus: "paid",
    },
    {
      id: 4,
      memberId: 4,
      memberName: "Geetanjali Kashyap",
      plan: "Premium",
      startDate: "2023-04-10",
      endDate: "2023-10-10",
      status: "active",
      paymentStatus: "paid",
    },
    {
      id: 5,
      memberId: 5,
      memberName: "Mukesh Kumar",
      plan: "Basic",
      startDate: "2023-03-15",
      endDate: "2023-06-15",
      status: "expired",
      paymentStatus: "paid",
    },
    {
      id: 6,
      memberId: 6,
      memberName: "Priya Singh",
      plan: "Premium",
      startDate: "2023-06-01",
      endDate: "2023-12-01",
      status: "active",
      paymentStatus: "pending",
    }
  ]
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedPaymentStatus, setSelectedPaymentStatus] =
    useState("All Payment Status");
  const [showRenewModal, setShowRenewModal] = useState(false);
  const [renewSubscription, setRenewSubscription] = useState({
    id: null,
    memberName: "",
    plan: "Basic",
    duration: "1",
    startDate: "",
    endDate: "",
  });

  const filteredSubscriptions = subscriptions.filter((sub) => {
    const matchesSearch =
      sub.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.plan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.id.toString().includes(searchTerm);
    const matchesStatus =
      selectedStatus === "All Status" ||
      sub.status === selectedStatus.toLowerCase();
    const matchesPaymentStatus =
      selectedPaymentStatus === "All Payment Status" ||
      sub.paymentStatus === selectedPaymentStatus.toLowerCase();
    return matchesSearch && matchesStatus && matchesPaymentStatus;
  });

  const handleRenew = (sub) => {
    setRenewSubscription({
      id: sub.id,
      memberName: sub.memberName,
      plan: sub.plan,
      duration: "1",
      startDate: new Date().toISOString().split("T")[0],
      endDate: new Date(new Date().setMonth(new Date().getMonth() + 1))
        .toISOString()
        .split("T")[0],
    });
    setShowRenewModal(true);
  };

  const handleRenewSubmit = () => {
    const updatedSubscriptions = subscriptions.map((sub) => {
      if (sub.id === renewSubscription.id) {
        return {
          ...sub,
          status: "active",
          startDate: renewSubscription.startDate,
          endDate: renewSubscription.endDate,
          paymentStatus: "pending",
        };
      }
      return sub;
    });
    setSubscriptions(updatedSubscriptions);
    setShowRenewModal(false);
  };

  const handleDurationChange = (e) => {
    const duration = e.target.value;
    const startDate = new Date().toISOString().split("T")[0];
    const endDate = new Date(
      new Date().setMonth(new Date().getMonth() + parseInt(duration))
    )
      .toISOString()
      .split("T")[0];

    setRenewSubscription({
      ...renewSubscription,
      duration,
      endDate,
    });
  };

  const getPlanIcon = (plan) => {
    switch (plan) {
      case "Premium":
        return <RiVipCrownFill className="text-purple-500" />;
      case "Ultimate":
        return <RiUserStarFill className="text-blue-500" />;
      default:
        return <RiUserHeartFill className="text-green-500" />;
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl w-full text-center font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Subscriptions Management
        </h2>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search subscriptions..."
            className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex space-x-2">
          <select
            className="w-full bg-gray-900 border border-gray-800 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option className="bg-gray-900">All Status</option>
            <option className="bg-gray-900">Active</option>
            <option className="bg-gray-900">Expired</option>
          </select>
          <select
            className="w-full bg-gray-900 border border-gray-800 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={selectedPaymentStatus}
            onChange={(e) => setSelectedPaymentStatus(e.target.value)}
          >
            <option className="bg-gray-900">All Payment Status</option>
            <option className="bg-gray-900">Paid</option>
            <option className="bg-gray-900">Pending</option>
          </select>
        </div>
        <div className="flex items-center justify-end">
          <span className="text-gray-600 mr-2">Active:</span>
          <span className="font-bold text-gray-900">
            {subscriptions.filter((s) => s.status === "active").length} Members
          </span>
        </div>
      </div>

      {/* Subscriptions Table */}
      <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Member
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Plan
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Dates
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Payment
                </th>
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-900 divide-y divide-gray-800">
              {filteredSubscriptions.map((sub) => (
                <tr
                  key={sub.id}
                  className="hover:bg-gray-800/50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-orange-500 font-bold">
                        {sub.memberName.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-white">
                          {sub.memberName}
                        </div>
                        <div className="text-xs text-gray-400">
                          ID: {sub.memberId}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getPlanIcon(sub.plan)}
                      <span
                        className={`ml-2 text-sm ${
                          sub.plan === "Premium"
                            ? "text-purple-400"
                            : sub.plan === "Ultimate"
                            ? "text-blue-400"
                            : "text-green-400"
                        }`}
                      >
                        {sub.plan}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-300">
                      <FiCalendar className="mr-1 text-orange-500" />
                      {sub.startDate}
                    </div>
                    <div className="flex items-center text-xs text-gray-400">
                      <FiCalendar className="mr-1 text-orange-500" />
                      {sub.endDate}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        sub.status === "active"
                          ? "bg-green-900/30 text-green-400"
                          : "bg-red-900/30 text-red-400"
                      }`}
                    >
                      {sub.status.charAt(0).toUpperCase() + sub.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        sub.paymentStatus === "paid"
                          ? "bg-green-900/30 text-green-400"
                          : "bg-yellow-900/30 text-yellow-400"
                      }`}
                    >
                      {sub.paymentStatus.charAt(0).toUpperCase() +
                        sub.paymentStatus.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      {sub.status === "expired" && (
                        <button
                          onClick={() => handleRenew(sub)}
                          className="text-orange-500 hover:text-orange-400 transition-colors"
                          title="Renew"
                        >
                          <FiRefreshCw />
                        </button>
                      )}
                      <button
                        className="text-blue-500 hover:text-blue-400 transition-colors"
                        title="View Details"
                      >
                        <FiEye />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Renew Subscription Modal */}
      {showRenewModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-xl border border-gray-800 shadow-2xl w-full max-w-lg">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-white">
                  Renew Subscription
                </h3>
                <button
                  onClick={() => setShowRenewModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <IoMdClose className="text-xl" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Member
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none"
                    value={renewSubscription.memberName}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Plan
                  </label>
                  <select
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={renewSubscription.plan}
                    onChange={(e) =>
                      setRenewSubscription({
                        ...renewSubscription,
                        plan: e.target.value,
                      })
                    }
                  >
                    <option value="Basic" className="bg-gray-900">
                      Basic
                    </option>
                    <option value="Premium" className="bg-gray-900">
                      Premium
                    </option>
                    <option value="Ultimate" className="bg-gray-900">
                      Ultimate
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Duration
                  </label>
                  <select
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={renewSubscription.duration}
                    onChange={handleDurationChange}
                  >
                    <option value="1" className="bg-gray-900">
                      1 Month
                    </option>
                    <option value="3" className="bg-gray-900">
                      3 Months
                    </option>
                    <option value="6" className="bg-gray-900">
                      6 Months
                    </option>
                    <option value="12" className="bg-gray-900">
                      12 Months
                    </option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Start Date
                    </label>
                    <div className="flex items-center bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2">
                      <FiCalendar className="mr-2 text-orange-500" />
                      {renewSubscription.startDate}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      End Date
                    </label>
                    <div className="flex items-center bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2">
                      <FiCalendar className="mr-2 text-orange-500" />
                      {renewSubscription.endDate}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end space-x-3">
                <button
                  onClick={() => setShowRenewModal(false)}
                  className="px-6 py-2 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleRenewSubmit}
                  className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                >
                  Renew Subscription
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionsManagement;
