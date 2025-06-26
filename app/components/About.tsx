import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                High Sky Fitness
              </span>
            </h2>
            <p className="text-lg mb-6 text-gray-300">
              High Sky Fitness is a premier fitness center located in the heart
              of the city, offering world-class facilities and services
              year-round.
            </p>
            <p className="text-lg mb-6 text-gray-300">
              During the summer months, we expand our offerings with outdoor
              training spaces and special seasonal programs to help you achieve
              your fitness goals.
            </p>
            <p className="text-lg text-gray-300">
              Our dedicated team of professional trainers is committed to
              optimizing your workout experience and helping you reach your full
              potential.
            </p>
            <button className="mt-8 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/20">
              Meet Our Team
            </button>
          </div>

          {/* Image */}
          <div className="md:w-1/2 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl blur opacity-20 z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Gym trainers"
              className="relative rounded-xl shadow-2xl w-full h-auto border-2 border-gray-800 z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
