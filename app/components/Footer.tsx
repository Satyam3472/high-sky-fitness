import React from "react";
import { FaChevronRight, FaFacebook, FaInstagram, FaMapMarkerAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 sm:p-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                HIGH SKY
              </span>{" "}
              FITNESS
            </h3>
            <p className="text-gray-400 mb-4">
              Your premier fitness destination with state-of-the-art facilities and expert trainers.
            </p>
            <div className="flex space-x-4 mt-4">
              {[
                { icon: <FaFacebook className="text-2xl"/>, link: "#" },
                { icon: <FaInstagram className="text-2xl"/>, link: "#" },
                { icon: <FaTwitter className="text-2xl"/>, link: "#" },
                { icon: <FaYoutube className="text-2xl"/>, link: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { text: "Home", href: "#hero" },
                { text: "Features", href: "#features" },
                { text: "Membership", href: "#membership" },
                { text: "About Us", href: "#about" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center"
                  >
                    <FaChevronRight className="text-xs mr-2 text-orange-500" />
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              {[
                { icon: <FaMapMarkerAlt className="mt-1" />, text: "Bhubaneshwari Plaza, 3'rd Floor, Near Plaza Market, Telco Colony" },
                { icon: <FaSquarePhone className="mt-1" />, text: "+91 9262806356" },
                { icon: <IoMail className="mt-1" />, text: "info@highskyfitness.com" },
              ].map((contact, index) => (
                <li key={index} className="flex items-start">
                  {contact.icon}
                  <span className="text-gray-400 ml-3">{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on special offers and fitness tips.
            </p>
            <div className="flex mb-6">
              <input
                type="number"
                placeholder="Your Phone Number"
                className="bg-gray-800 text-white px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
              />
              <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-3 rounded-r-lg transition-all duration-300">
                <IoIosSend className="w-8 h-8" />
              </button>
            </div>
            <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-orange-500/20">
              Free Trial Session
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} High Sky Fitness. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            {[
              { text: "Privacy Policy", link: "#" },
              { text: "Terms of Service", link: "#" },
              { text: "Sitemap", link: "#" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-gray-500 hover:text-orange-500 transition-colors duration-300 text-sm"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
