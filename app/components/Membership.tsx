import React from "react";

const Membership = () => {
  return (
    <section id="membership" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-14 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            Membership
          </span>{" "}
          Plans
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Easy Start Plan */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-orange-500 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-center mb-4">Easy Start</h3>
            <div className="text-center text-white mb-6">
              <p className="text-lg text-gray-300 mb-1">₹200 registration +</p>
              <span className="text-4xl font-bold">₹700</span>
              <span className="text-gray-400 text-sm"> / month</span>
            </div>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-center text-gray-300">
                ✅ Access to all workout equipment
              </li>
              <li className="flex items-center text-gray-300">
                ✅ Free personal locker
              </li>
              <li className="flex items-center text-gray-300">
                ✅ Fitness & BMI assessment
              </li>
              <li className="flex items-center text-red-400">
                ❌ Personal training not included
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105">
              Join Now
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gray-900 overflow-hidden p-8 rounded-2xl border-2 border-orange-500 transform scale-[1.03] hover:scale-[1.05] transition duration-300 relative shadow-xl">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 text-xs font-bold rounded-bl-xl">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">Premium</h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold">₹1800</span>
              <span className="text-gray-400 text-sm"> / 3 months</span>
            </div>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-center text-gray-300">
                ✅ Includes all Easy Start benefits
              </li>
              <li className="flex items-center text-gray-300">
                ✅ 4 Personal training sessions
              </li>
              <li className="flex items-center text-gray-300">
                ✅ Access to all group classes (Zumba, HIIT, Yoga)
              </li>
              <li className="flex items-center text-gray-300">
                ✅ Diet consultation with expert
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-md shadow-orange-400/30">
              Join Now
            </button>
          </div>

          {/* Ultimate Plan */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-orange-500 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-center mb-4">Ultimate</h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold">₹6000</span>
              <span className="text-gray-400 text-sm"> / year</span>
            </div>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-center text-gray-300">
                ✅ All Premium benefits
              </li>
              <li className="flex items-center text-gray-300">
                ✅ Unlimited personal training
              </li>
              <li className="flex items-center text-gray-300">
                ✅ VIP locker room & priority support
              </li>
              <li className="flex items-center text-gray-300">
                ✅ Spa & recovery access included
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
