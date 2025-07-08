"use client";
import React, { useEffect, useState } from "react";
import {
  FiSearch,
  FiCheck,
  FiXCircle,
  FiDownload,
  FiCalendar,
} from "react-icons/fi";
import {
  RiVisaLine,
  RiPaypalFill,
  RiMastercardFill,
  RiBankFill,
} from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { HiCurrencyRupee } from "react-icons/hi";
import { FaRupeeSign } from "react-icons/fa";
import {motion} from 'framer-motion'
import { IoPhonePortrait } from "react-icons/io5";
import { PaymentsData } from "../assets/data";

const PaymentsManagement = () => {
  const [payments, setPayments] = useState(PaymentsData);
  const [isMobile, setIsMobile] = useState(false);
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

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);


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
    switch (method.toLowerCase()) {
      case "credit card":
        return <RiVisaLine className="text-blue-400" />;
      case "bank transfer":
        return <RiBankFill className="text-blue-300" />;
      case "paypal":
        return <RiPaypalFill className="text-blue-400" />;
      default:
        return <IoPhonePortrait className="text-green-500" />;
    }
  };

  const filteredPayments = payments.filter((payment) => {
    const matchSearch =
      payment.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.id.toString().includes(searchTerm) ||
      payment.memberId.toString().includes(searchTerm);
    const matchMethod =
      selectedMethod === "All Methods" || payment.method === selectedMethod;
    const matchStatus =
      selectedStatus === "All Status" ||
      payment.status === selectedStatus.toLowerCase();
    return matchSearch && matchMethod && matchStatus;
  });

  return (
    <div className="p-4 md:p-6 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
          Payments Management
        </h2>
        <button
          onClick={() => setShowRecordModal(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all"
        >
          <HiCurrencyRupee /> Record Payment
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <select
          value={selectedMethod}
          onChange={(e) => setSelectedMethod(e.target.value)}
          className="bg-gray-900 text-white px-4 py-2 border border-gray-800 rounded-lg focus:ring-2 focus:ring-orange-500"
        >
          {["All Methods", "Credit Card", "Bank Transfer", "PayPal", "UPI", "Cash"].map((m) => (
            <option key={m} className="bg-gray-900">{m}</option>
          ))}
        </select>
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="bg-gray-900 text-white px-4 py-2 border border-gray-800 rounded-lg focus:ring-2 focus:ring-orange-500"
        >
          {["All Status", "Completed", "Pending", "Failed"].map((s) => (
            <option key={s} className="bg-gray-900">{s}</option>
          ))}
        </select>
      </div>

      {isMobile ? (
        <div className="space-y-3">
        {filteredPayments.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-800 rounded-2xl p-4 sm:p-5 shadow-xl hover:shadow-orange-500/30 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            {/* Header: Avatar + Name + Amount + Date */}
            <div className="flex justify-between items-start mb-4">
              {/* Avatar and Member Info */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-orange-600/30 text-orange-400 font-extrabold text-lg flex items-center justify-center shadow-lg border border-orange-500/40">
                  {p.memberName.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-white text-base sm:text-lg hover:text-orange-300 cursor-pointer transition-colors duration-200">
                    {p.memberName}
                  </h3>
                  <p className="text-xs text-gray-400">ID: {p.memberId}</p>
                </div>
              </div>

              {/* Payment Amount and Date */}
              <div className="flex flex-col items-end gap-0.5">
                <div className="flex items-center gap-1 text-green-400 font-bold text-base sm:text-lg">
                  <FaRupeeSign className="text-green-500" />
                  <span>{p.amount}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <FiCalendar className="text-orange-400" />
                  <span>{p.date}</span>
                </div>
              </div>
            </div>

            {/* Payment Info Section (Method, Subscription, Status) */}
            <div className="flex justify-between items-center text-sm text-gray-300 border-t border-gray-800 pt-3">
              <div className="flex items-center gap-2">
                {getMethodIcon(p.method)}
                <span className="capitalize font-medium">{p.method}</span>
              </div>
              <div className="flex items-center col-span-1 sm:col-span-2 text-xs text-gray-400">
                <span className="bg-gray-800 px-2.5 py-0.5 rounded-full text-gray-300 border border-gray-700">
                  {p.subscription}
                </span>
              </div>
              <div className="col-span-full sm:col-span-1 flex justify-start sm:justify-end">
                <span
                  className={`text-xs font-extrabold px-2.5 py-1 rounded-full shadow-md ${
                    p.status === "completed"
                      ? "bg-green-800/40 text-green-300 border border-green-700"
                      : p.status === "pending"
                      ? "bg-yellow-800/40 text-yellow-300 border border-yellow-700"
                      : "bg-red-800/40 text-red-300 border border-red-700"
                  }`}
                >
                  {p.status.toUpperCase()}
                </span>
              </div>
              <div className="flex justify-end gap-3">
              {p.status === "pending" && (
                <>
                  <motion.button
                    whileHover={{ scale: 1.15, backgroundColor: "#22C55E" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handlePaymentStatus(p.id, "completed")}
                    className="text-green-400 hover:text-white bg-green-700/20 p-1.5 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                    title="Approve Payment"
                  >
                    <FiCheck className="text-base" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.15, backgroundColor: "#EF4444" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handlePaymentStatus(p.id, "failed")}
                    className="text-red-400 hover:text-white bg-red-700/20 p-1.5 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                    title="Reject Payment"
                  >
                    <FiXCircle className="text-base" />
                  </motion.button>
                </>
              )}
              <motion.button
                whileHover={{ scale: 1.15, backgroundColor: "#F97316" }}
                whileTap={{ scale: 0.9 }}
                title="Download Receipt"
                className="text-orange-400 hover:text-white bg-orange-700/20 p-1.5 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <FiDownload className="text-base" />
              </motion.button>
            </div>
            </div>
          </motion.div>
        ))}
        </div>
      ) : (
        <div className="overflow-auto rounded-xl border border-gray-800 bg-gray-900">
        <table className="min-w-full text-sm divide-y divide-gray-800">
          <thead className="bg-gray-800 text-gray-400 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-4 text-left">#</th>
              <th className="px-6 py-4 text-left">Member</th>
              <th className="px-6 py-4 text-left">Amount</th>
              <th className="px-6 py-4 text-left">Method</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Subscription</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {filteredPayments.map((payment) => (
              <tr key={payment.id} className="hover:bg-gray-800/60">
                <td className="px-6 py-4 text-white">#{payment.id}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-orange-500/20 text-orange-500 font-bold flex items-center justify-center rounded-full">
                      {payment.memberName.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{payment.memberName}</p>
                      <p className="text-xs text-gray-400">ID: {payment.memberId}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-green-400  items-center gap-1">
                  <FaRupeeSign /> {payment.amount}
                </td>
                <td className="px-6 py-4  items-center gap-2 text-sm text-gray-300">
                  {getMethodIcon(payment.method)} {payment.method}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    payment.status === "completed" ? "bg-green-900/30 text-green-400"
                    : payment.status === "pending" ? "bg-yellow-900/30 text-yellow-400"
                    : "bg-red-900/30 text-red-400"
                  }`}>
                    {payment.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-300 text-sm">{payment.subscription}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end items-center gap-2">
                    {payment.status === "pending" && (
                      <>
                        <button
                          onClick={() => handlePaymentStatus(payment.id, "completed")}
                          className="text-green-500 hover:text-green-400"
                          title="Approve"
                        >
                          <FiCheck />
                        </button>
                        <button
                          onClick={() => handlePaymentStatus(payment.id, "failed")}
                          className="text-red-500 hover:text-red-400"
                          title="Reject"
                        >
                          <FiXCircle />
                        </button>
                      </>
                    )}
                    <button className="text-orange-500 hover:text-orange-400" title="Download">
                      <FiDownload />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}
      {/* Record Payment Modal */}
      {showRecordModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl border border-gray-800 w-full max-w-xl shadow-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">Record New Payment</h3>
              <button onClick={() => setShowRecordModal(false)} className="text-white">
                <IoMdClose size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <InputField label="Member ID" value={newPayment.memberId} onChange={(v) => setNewPayment({ ...newPayment, memberId: v })} />
                <InputField label="Member Name" value={newPayment.memberName} onChange={(v) => setNewPayment({ ...newPayment, memberName: v })} />
              </div>
              <InputField label="Amount (₹)" type="number" value={newPayment.amount} onChange={(v) => setNewPayment({ ...newPayment, amount: v })} />
              <div className="grid grid-cols-2 gap-4">
                <SelectField label="Payment Method" value={newPayment.method} options={["Credit Card", "Bank Transfer", "PayPal", "Cash"]} onChange={(v) => setNewPayment({ ...newPayment, method: v })} />
                <InputField label="Date" type="date" value={newPayment.date} onChange={(v) => setNewPayment({ ...newPayment, date: v })} />
              </div>
              <InputField label="Subscription Plan" value={newPayment.subscription} onChange={(v) => setNewPayment({ ...newPayment, subscription: v })} />
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => setShowRecordModal(false)} className="border border-gray-700 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-800">Cancel</button>
              <button onClick={handleRecordPayment} className="bg-gradient-to-r from-orange-500 to-red-600 px-6 py-2 rounded-lg text-white font-semibold hover:from-orange-600 hover:to-red-700 transition">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Reusable input field
const InputField = ({ label, type = "text", value, onChange }) => (
  <div>
    <label className="block text-sm text-gray-400 mb-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-500"
    />
  </div>
);

// Reusable select field
const SelectField = ({ label, value, options, onChange }) => (
  <div>
    <label className="block text-sm text-gray-400 mb-1">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-500"
    >
      {options.map((opt) => (
        <option key={opt} className="bg-gray-900">
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default PaymentsManagement;
