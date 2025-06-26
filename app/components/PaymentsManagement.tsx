import React, { useState } from "react";
import {
  FiSearch,
  FiX,
  FiEdit2,
  FiTrash2,
  FiDollarSign,
  FiCalendar,
  FiCheck,
  FiXCircle,
  FiDownload,
} from "react-icons/fi";
import { RiVisaLine, RiMastercardFill, RiPaypalFill } from "react-icons/ri";
import { SiBankofamerica } from "react-icons/si";
import { IoMdClose } from "react-icons/io";
import { HiCurrencyRupee } from "react-icons/hi";
import { FaRupeeSign } from "react-icons/fa";

const PaymentsManagement = () => {
  const [payments, setPayments] = useState([
    {
      id: 1,
      memberId: 1,
      memberName: "Kumar Satyam",
      amount: 1199,
      date: "2023-05-15",
      method: "UPI",
      status: "completed",
      subscription: "Premium (6 months)",
    },
    {
      id: 2,
      memberId: 2,
      memberName: "Yash Champawat",
      amount: 799,
      date: "2023-05-20",
      method: "Bank Transfer",
      status: "completed",
      subscription: "Basic (3 months)",
    },
    {
      id: 3,
      memberId: 3,
      memberName: "Kundan Jha",
      amount: 2999,
      date: "2023-05-22",
      method: "Credit Card",
      status: "completed",
      subscription: "Ultimate (12 months)",
    },
    {
      id: 4,
      memberId: 4,
      memberName: "Geetanjali Kashyap",
      amount: 1199,
      date: "2023-04-10",
      method: "Wallet (PhonePe)",
      status: "completed",
      subscription: "Premium (6 months)",
    },
    {
      id: 5,
      memberId: 5,
      memberName: "Mukesh Kumar",
      amount: 799,
      date: "2023-03-15",
      method: "Credit Card",
      status: "completed",
      subscription: "Basic (3 months)",
    },
    {
      id: 6,
      memberId: 6,
      memberName: "Priya Singh",
      amount: 2000,
      date: "2023-06-01",
      method: "Bank Transfer",
      status: "pending",
      subscription: "Premium (6 months)",
    }
  ]
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("All Methods");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [showRecordModal, setShowRecordModal] = useState(false);
  const [newPayment, setNewPayment] = useState({
    memberId: "",
    memberName: "",
    amount: "",
    date: new Date().toISOString().split("T")[0],
    method: "Credit Card",
    subscription: "",
  });

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.id.toString().includes(searchTerm) ||
      payment.memberId.toString().includes(searchTerm);
    const matchesMethod =
      selectedMethod === "All Methods" || payment.method === selectedMethod;
    const matchesStatus =
      selectedStatus === "All Status" ||
      payment.status === selectedStatus.toLowerCase();
    return matchesSearch && matchesMethod && matchesStatus;
  });

  const handleRecordPayment = () => {
    const payment = {
      id: payments.length + 1,
      ...newPayment,
      status: "completed",
      amount: parseFloat(newPayment.amount),
    };
    setPayments([...payments, payment]);
    setShowRecordModal(false);
    setNewPayment({
      memberId: "",
      memberName: "",
      amount: "",
      date: new Date().toISOString().split("T")[0],
      method: "Credit Card",
      subscription: "",
    });
  };

  const handlePaymentStatus = (id, status) => {
    setPayments(
      payments.map((payment) =>
        payment.id === id ? { ...payment, status } : payment
      )
    );
  };

  const getMethodIcon = (method) => {
    switch (method) {
      case "Credit Card":
        return <RiVisaLine className="text-blue-500" />;
      case "Bank Transfer":
        return <SiBankofamerica className="text-blue-400" />;
      case "PayPal":
        return <RiPaypalFill className="text-blue-300" />;
      default:
        return <FaRupeeSign className="text-green-500" />;
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <span></span>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Payments Management
        </h2>
        <button
          onClick={() => setShowRecordModal(true)}
          className="flex items-center bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
        >
          <HiCurrencyRupee size={20} className="mr-2" />
          Record Payment
        </button>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search payments..."
            className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex space-x-2">
          <select
            className="w-full bg-gray-900 border border-gray-800 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={selectedMethod}
            onChange={(e) => setSelectedMethod(e.target.value)}
          >
            <option className="bg-gray-900">All Methods</option>
            <option className="bg-gray-900">Credit Card</option>
            <option className="bg-gray-900">Bank Transfer</option>
            <option className="bg-gray-900">PayPal</option>
            <option className="bg-gray-900">Cash</option>
          </select>
          <select
            className="w-full bg-gray-900 border border-gray-800 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option className="bg-gray-900">All Status</option>
            <option className="bg-gray-900">Completed</option>
            <option className="bg-gray-900">Pending</option>
            <option className="bg-gray-900">Failed</option>
          </select>
        </div>
        <div className="flex items-center justify-end">
          <span className="text-gray-600 mr-2">Total Revenue:</span>
          <span className="font-bold text-gray-900">
          ₹{payments.reduce((sum, payment) => sum + payment.amount, 0)}
          </span>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Payment
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Member
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Method
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Subscription
                </th>
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-900 divide-y divide-gray-800">
              {filteredPayments.map((payment) => (
                <tr
                  key={payment.id}
                  className="hover:bg-gray-800/50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-white">
                      #{payment.id}
                    </div>
                    <div className="flex items-center text-xs text-gray-400">
                      <FiCalendar className="mr-1 text-orange-500" />
                      {payment.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-orange-500 font-bold">
                        {payment.memberName.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-white">
                          {payment.memberName}
                        </div>
                        <div className="text-xs text-gray-400">
                          ID: {payment.memberId}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FaRupeeSign className="text-green-500 mr-1" />
                      <span className="text-sm font-bold text-white">
                        {payment.amount}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getMethodIcon(payment.method)}
                      <span className="ml-2 text-sm text-gray-300">
                        {payment.method}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        payment.status === "completed"
                          ? "bg-green-900/30 text-green-400"
                          : payment.status === "pending"
                          ? "bg-yellow-900/30 text-yellow-400"
                          : "bg-red-900/30 text-red-400"
                      }`}
                    >
                      {payment.status.charAt(0).toUpperCase() +
                        payment.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {payment.subscription}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      {payment.status === "pending" && (
                        <>
                          <button
                            onClick={() =>
                              handlePaymentStatus(payment.id, "completed")
                            }
                            className="text-green-500 hover:text-green-400 transition-colors"
                            title="Approve"
                          >
                            <FiCheck />
                          </button>
                          <button
                            onClick={() =>
                              handlePaymentStatus(payment.id, "failed")
                            }
                            className="text-red-500 hover:text-red-400 transition-colors"
                            title="Reject"
                          >
                            <FiXCircle />
                          </button>
                        </>
                      )}
                      <button
                        className="text-orange-500 hover:text-orange-400 transition-colors"
                        title="Download Receipt"
                      >
                        <FiDownload />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Record Payment Modal */}
      {showRecordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-xl border border-gray-800 shadow-2xl w-full max-w-lg">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-white">
                  Record New Payment
                </h3>
                <button
                  onClick={() => setShowRecordModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <IoMdClose className="text-xl" />
                </button>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Member ID
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      value={newPayment.memberId}
                      onChange={(e) =>
                        setNewPayment({
                          ...newPayment,
                          memberId: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Member Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      value={newPayment.memberName}
                      onChange={(e) =>
                        setNewPayment({
                          ...newPayment,
                          memberName: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Amount ($)
                  </label>
                  <input
                    type="number"
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={newPayment.amount}
                    onChange={(e) =>
                      setNewPayment({ ...newPayment, amount: e.target.value })
                    }
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Payment Method
                    </label>
                    <select
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      value={newPayment.method}
                      onChange={(e) =>
                        setNewPayment({ ...newPayment, method: e.target.value })
                      }
                    >
                      <option value="Credit Card" className="bg-gray-900">
                        Credit Card
                      </option>
                      <option value="Bank Transfer" className="bg-gray-900">
                        Bank Transfer
                      </option>
                      <option value="PayPal" className="bg-gray-900">
                        PayPal
                      </option>
                      <option value="Cash" className="bg-gray-900">
                        Cash
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      value={newPayment.date}
                      onChange={(e) =>
                        setNewPayment({ ...newPayment, date: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Subscription Plan
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g. Premium (6 months)"
                    value={newPayment.subscription}
                    onChange={(e) =>
                      setNewPayment({
                        ...newPayment,
                        subscription: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-end space-x-3">
                <button
                  onClick={() => setShowRecordModal(false)}
                  className="px-6 py-2 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleRecordPayment}
                  className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                >
                  Record Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentsManagement;
