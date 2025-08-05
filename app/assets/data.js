import { CgGym } from "react-icons/cg";
import { FaUserCheck } from "react-icons/fa";
import { FaTableCellsColumnLock } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";


export const GYM_NAME = 'Tiger Hill Gym';

export const MembersData = [
    {
        "id": 3,
        "name": "Kumar Satyam",
        "phone": "8298380149",
        "email": "ksatyam4199@gmail.com",
        "plan": "Basic",
        "startDate": "25-06-2025",
        "expiryDate": "25-07-2025",
        "joinedAt": "2025-06-25T17:44:39.394Z",
        "status": "active"
    },
    {
        "id": 4,
        "name": "Yash Champawat",
        "phone": "8923912322",
        "email": "yash.ttl@email.com",
        "plan": "Premium",
        "startDate": "2025-06-26",
        "expiryDate": "2025-06-28",
        "joinedAt": "2025-06-26T15:32:02.657Z",
        "status": "active"
    },
    {
        "id": 5,
        "name": "Geetanjali Kashyap",
        "phone": "8787248716",
        "email": "geetkashyap123@gmail.com",
        "plan": "Premium",
        "startDate": "2025-07-01",
        "expiryDate": "2025-07-31",
        "joinedAt": "2025-06-26T16:22:09.416Z",
        "status": "active"
    }
];

export const PaymentsData = [
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
  },
];

export const featuresList = [
  {
    icon: <FaUserCheck />,
    title: "Certified Trainers",
    description: "Trained professionals with experience in Indian body types & goals",
  },
  {
    icon: <CgGym />,
    title: "18,000 sq.m. Space",
    description: "Massive training area with premium equipment",
  },
  {
    icon: <IoFastFood />,
    title: "Indian Diet Plans",
    description: "Customised vegetarian & non-veg meal plans for Indian lifestyles",
  },
  {
    icon: <FaTableCellsColumnLock />,
    title: "Secure Lockers",
    description: "Safe and personal lockers available for all members",
  },
];

export const plans = [
    {
      name: "Easy Start",
      price: "₹700",
      duration: "/ month",
      regFee: "₹200 registration +",
      features: [
        "Access to all workout equipment",
        "Free personal locker",
        "Fitness & BMI assessment",
      ],
      exclude: ["Personal training not included"],
      gradient: "from-gray-700 to-gray-800",
    },
    {
      name: "Premium",
      price: "₹2000",
      duration: "/ 3 months",
      features: [
        "Includes all Easy Start benefits",
        "4 Personal training sessions",
        "Access to group classes (Zumba, HIIT, Yoga)",
        "Diet consultation with expert",
      ],
      isPopular: true,
      gradient: "from-orange-500 to-red-600",
    },
    {
      name: "Ultimate",
      price: "₹6000",
      duration: "/ year",
      features: [
        "All Premium benefits",
        "Unlimited personal training",
        "VIP locker room & priority support",
        "Spa & recovery access included",
      ],
      gradient: "from-gray-700 to-gray-800",
    },
  ];

  // 🎯 Sample Data
export const revenueData = [
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
  
export const memberData = [
    { month: "Jan", members: 120 },
    { month: "Feb", members: 140 },
    { month: "Mar", members: 135 },
    { month: "Apr", members: 160 },
    { month: "May", members: 175 },
    { month: "Jun", members: 200 },
  ];
  
export const statusData = [
    { name: "Active", value: 300 },
    { name: "Inactive", value: 100 },
  ];
  
export const newVsReturningData = [
    { month: "Jan", new: 60, returning: 40 },
    { month: "Feb", new: 80, returning: 60 },
    { month: "Mar", new: 75, returning: 50 },
    { month: "Apr", new: 90, returning: 70 },
    { month: "May", new: 110, returning: 60 },
    { month: "Jun", new: 130, returning: 70 },
  ];