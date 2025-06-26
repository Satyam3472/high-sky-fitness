'use client'
import Image from "next/image";
import Header from "./components/Header";
import { useState } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Membership from "./components/Membership";
import About from "./components/About";
import Footer from "./components/Footer";
import AdminDashboard from "./components/AdminDashboard";
import Testimonials from "./components/Testimonials";
import Exercises from "./components/Exercises";

export default function Home() {

  const [adminView, setAdminView] = useState(false);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {adminView ? (
        <AdminDashboard setAdminView={setAdminView} adminView={adminView} />
      ) : (
        <>
          <Header setAdminView={setAdminView} adminView={adminView} />
          <Hero />
          <Features />
          <Gallery />
          <Membership />
          <Testimonials />
          <Exercises />
          <About />
          <Footer />
        </>
      )}
    </div>
  );
}
