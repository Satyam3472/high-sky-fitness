import React, { useEffect, useState } from "react";
import {
  FiSearch,
  FiUserPlus,
  FiCalendar,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";
import {
  RiVipCrownFill,
  RiUserStarFill,
  RiUserHeartFill,
} from "react-icons/ri";
import { IoIosMail, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { BsInboxFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import SkeletonLoader from "./SkeletonLoader";
import { MembersData } from "../assets/data";


const initialForm = {
  name: "",
  email: "",
  phone: "",
  plan: "Basic",
  startDate: "",
  expiryDate: "",
};

const MembersManagement = () => {
  const [members, setMembers] = useState(MembersData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("All Plans");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [showAddModal, setShowAddModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newMember, setNewMember] = useState(initialForm);

  const [selectedMember, setSelectedMember] = useState({});
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    fetchMembers();
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const fetchMembers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/members");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log("Fetched members:", data);
      setMembers(data);
    } catch (err) {
      console.error("Failed to fetch members:", err.message || err);
    } finally {
      setLoading(false);
    }
  };


  const handleAddMember = async () => {
    try {
      const res = await fetch("/api/members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...newMember, status: "active" }),
      });

      if (res.ok) {
        fetchMembers();
        setNewMember(initialForm);
        setShowAddModal(false);
      } else {
        alert("Failed to add member.");
      }
    } catch (err) {
      console.error("Add member error:", err);
    }
  };

  const handleDeleteMember = async (id) => {
    try {
      const res = await fetch(`/api/members/${id}`, {
        method: "DELETE",
      });
      if (res.ok) fetchMembers();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const getPlanIcon = (plan) =>
    plan === "Premium" ? (
      <RiVipCrownFill className="mr-2 text-purple-400" />
    ) : plan === "Ultimate" ? (
      <RiUserStarFill className="mr-2 text-blue-400" />
    ) : (
      <RiUserHeartFill className="mr-2 text-green-400" />
    );

  const filteredMembers = members.filter((member) => {
    const matchSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.phone.includes(searchTerm);
    const matchPlan =
      selectedPlan === "All Plans" || member.plan === selectedPlan;
    const matchStatus =
      selectedStatus === "All Status" ||
      member.status === selectedStatus.toLowerCase();
    return matchSearch && matchPlan && matchStatus;
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <span></span>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Members Management
        </h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium py-2 px-4 rounded-lg hover:from-orange-600 hover:to-red-700 transition"
        >
          <FiUserPlus className="mr-2" /> Add New Member
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-8">
        <div className="relative w-1/3">
          <FiSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-orange-500"
            placeholder="Search members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="bg-gray-900 w-[150px] text-white rounded-lg px-3 py-2 border border-gray-800 focus:ring-2 focus:ring-orange-500"
          value={selectedPlan}
          onChange={(e) => setSelectedPlan(e.target.value)}
        >
          {["All Plans", "Basic", "Premium", "Ultimate"].map((p) => (
            <option key={p} className="bg-gray-900">
              {p}
            </option>
          ))}
        </select>
        <select
          className="bg-gray-900 w-[150px] text-white rounded-lg px-3 py-2 border border-gray-800 focus:ring-2 focus:ring-orange-500"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          {["All Status", "Active", "Expired"].map((s) => (
            <option key={s} className="bg-gray-900">
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="rounded-xl  overflow-x-auto">
        {loading ? <SkeletonLoader/> : isMobile ?
        filteredMembers.map((member) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-800 rounded-2xl px-5 py-4 mb-4 shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            {/* Header Section */}
            <div className="flex items-center justify-between gap-4">
              {/* Avatar + Name/Email */}
              <div className="flex items-center gap-4 flex-1 min-w-0"> {/* Added min-w-0 for text truncation */}
                <div className="h-10 w-10 rounded-full bg-orange-600/30 text-orange-400 font-extrabold text-lg flex items-center justify-center shadow-lg border border-orange-500/40">
                  {member.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0"> {/* Added min-w-0 for text truncation */}
                  <h3 className="text-sm sm:text-base font-semibold mb-1 text-white hover:text-orange-400 transition cursor-pointer leading-tight truncate"> {/* Added truncate */}
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-400 flex items-center truncate"> {/* Added truncate */}
                    <IoIosMail className="mr-1 text-base flex-shrink-0" /> {/* Adjusted icon size and flexibility */}
                    {member.email}
                  </p>
                </div>
              </div>
        
              {/* Status + Phone */}
              <div className="flex flex-col items-end gap-2 text-xs text-right flex-shrink-0"> {/* Added flex-shrink-0 */}
                <span
                  className={`px-2.5 py-0.5 rounded-full font-semibold tracking-wide text-xs ${
                    member.status === "active"
                      ? "bg-green-800/30 text-green-400"
                      : "bg-red-800/30 text-red-400"
                  }`}
                >
                  {member.status.toUpperCase()} {/* Uppercase status for consistency */}
                </span>
                <div className="text-gray-400 flex items-center gap-1">
                  <FaPhoneAlt className="text-sm" /> {/* Adjusted icon size */}
                  <span className="text-gray-300">{member.phone}</span> {/* Made phone number stand out slightly */}
                </div>
              </div>
            </div>
        
            {/* Plan, Dates, Actions Section */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-gray-800 pt-3 text-xs text-gray-300">
              <div className="flex flex-wrap justify-between items-center gap-x-4 gap-y-2"> {/* Adjusted gap for better wrapping */}
                {/* Plan */}
                <span
                  className={`flex items-center font-semibold text-sm ${ // Increased font size for plan
                    member.plan === "Premium"
                      ? "text-purple-400"
                      : member.plan === "Ultimate"
                      ? "text-blue-400"
                      : "text-green-400"
                  }`}
                >
                  {getPlanIcon(member.plan)}
                  <span className="ml-1">{member.plan}</span> {/* Added margin to plan text */}
                </span>
        
                {/* Dates */}
                <span className="flex items-center gap-1 text-gray-400 text-sm"> {/* Increased font size for dates */}
                  <FiCalendar className="text-orange-400 text-base" /> {/* Adjusted icon size */}
                  {member.startDate} <span className="mx-0.5 text-gray-500">→</span> {member.expiryDate} {/* Added arrow styling */}
                </span>

                <div className="flex justify-end gap-2"> {/* Adjusted gap for buttons */}
                  <motion.button
                    whileHover={{ scale: 1.15, backgroundColor: "rgba(251, 146, 60, 0.2)" }} // Added background hover
                    whileTap={{ scale: 0.95 }}
                    className="text-orange-500 hover:text-orange-400 p-1.5 rounded-full transition-all duration-200" // Added padding and border-radius
                    title="Edit Member"
                  >
                    <FiEdit2 size={16} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.15, backgroundColor: "rgba(239, 68, 68, 0.2)" }} // Added background hover
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDeleteMember(member.id)}
                    className="text-red-500 hover:text-red-400 p-1.5 rounded-full transition-all duration-200" // Added padding and border-radius
                    title="Delete Member"
                  >
                    <FiTrash2 size={16} />
                  </motion.button>
                </div>
              </div>
        
              {/* Actions */}

            </div>
          </motion.div>
        )) :
          (
            <table className="min-w-full text-sm text-white divide-y divide-gray-800 bg-gray-900  border border-gray-800">
              <thead className="bg-gray-800">
                <tr>
                  {["Member", "Contact", "Plan", "Dates", "Status", "Actions"].map(
                    (head) => (
                      <th
                        key={head}
                        className="px-6 py-4 text-left font-medium text-gray-400 uppercase tracking-wider"
                      >
                        {head}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {filteredMembers && filteredMembers.map((member) => (
                  <tr
                    key={member.id}
                    className="hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap cursor-pointer">
                      <div className="flex items-center" onClick={() => {
                        setSelectedMember(member);
                        setShowProfileModal(true);
                      }}>
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-orange-500 font-bold">
                          {member.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-white underline hover:text-orange-400">
                            {member.name}
                          </div>
                          <div className="text-xs text-gray-400">ID: {member.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>{member.email}</div>
                      <div className="text-xs text-gray-400">{member.phone}</div>
                    </td>
                    <td className="px-6 py-4 flex items-center">
                      {getPlanIcon(member.plan)}
                      {member.plan}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center text-sm text-gray-300">
                        <FiCalendar className="mr-1 text-orange-500" />
                        {member.startDate}
                      </div>
                      <div className="flex items-center text-xs text-gray-400">
                        <FiCalendar className="mr-1 text-orange-500" />
                        {member.expiryDate}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${member.status === "active"
                          ? "bg-green-900/30 text-green-400"
                          : "bg-red-900/30 text-red-400"
                          }`}
                      >
                        {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button className="text-orange-500 hover:text-orange-400">
                        <FiEdit2 />
                      </button>
                      <button
                        onClick={() => handleDeleteMember(member.id)}
                        className="text-red-500 hover:text-red-400"
                      >
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
      </div>

      {/* Add Member Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl border border-gray-800 shadow-lg w-full max-w-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-white">Add New Member</h3>
              <button onClick={() => setShowAddModal(false)} className="text-white">
                <IoMdClose size={20} />
              </button>
            </div>

            <div className="space-y-4">
              {["name", "email", "phone"].map((field) => (
                <div key={field}>
                  <label className="block text-sm text-gray-400 capitalize mb-1">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500"
                    value={newMember[field]}
                    onChange={(e) =>
                      setNewMember({ ...newMember, [field]: e.target.value })
                    }
                  />
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4">
                {["startDate", "expiryDate"].map((field) => (
                  <div key={field}>
                    <label className="block text-sm text-gray-400 mb-1">
                      {field === "startDate" ? "Join Date" : "Expiry Date"}
                    </label>
                    <input
                      type="date"
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500"
                      value={newMember[field]}
                      onChange={(e) =>
                        setNewMember({ ...newMember, [field]: e.target.value })
                      }
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Plan</label>
                <select
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500"
                  value={newMember.plan}
                  onChange={(e) =>
                    setNewMember({ ...newMember, plan: e.target.value })
                  }
                >
                  {["Basic", "Premium", "Ultimate"].map((p) => (
                    <option key={p} value={p} className="bg-gray-900">
                      {p}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleAddMember}
                className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition"
              >
                Add Member
              </button>
            </div>
          </div>
        </div>
      )}

      {showProfileModal && selectedMember && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-800 rounded-xl max-w-md w-full p-6 relative shadow-xl">
            <button
              className="absolute top-3 right-3 text-white hover:text-red-400"
              onClick={() => setShowProfileModal(false)}
            >
              <IoMdClose size={22} />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="h-20 w-20 bg-gray-700 rounded-full flex items-center justify-center text-2xl text-orange-500 font-bold mb-4">
                {selectedMember.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{selectedMember.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{selectedMember.email}</p>

              <ul className="text-sm text-gray-300 space-y-2 w-full text-left">
                <li><strong>Phone:</strong> {selectedMember.phone}</li>
                <li><strong>Plan:</strong> {selectedMember.plan}</li>
                <li><strong>Join Date:</strong> {selectedMember.joinDate || selectedMember.startDate}</li>
                <li><strong>Expiry Date:</strong> {selectedMember.expiry || selectedMember.expiryDate}</li>
                <li><strong>Status:</strong> {selectedMember.status}</li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default MembersManagement;
