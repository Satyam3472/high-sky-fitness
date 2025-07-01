import { CgGym } from "react-icons/cg";
import { FaUserCheck } from "react-icons/fa";
import { FaTableCellsColumnLock } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";


export const GYM_NAME = 'Gym Bro';

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