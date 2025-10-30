// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-16 overflow-hidden">
      {/* Decorative blurred shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/20 rounded-full blur-3xl -translate-x-32 -translate-y-32 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-400/20 rounded-full blur-3xl translate-x-32 translate-y-32 animate-pulse-slow"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 pb-10 border-b border-gray-700">
          {/* Brand */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-4 animate-pulse-slow">FITNESSPRO</h2>
            <p className="text-gray-400 max-w-sm mb-4">
              Empower your body and mind with modern fitness programs, premium equipment, and expert trainers.
            </p>
            <div className="flex mt-2 space-x-4">
              {/* Animated Social Icons */}
              {["facebook", "twitter", "instagram", "linkedin"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition transform hover:scale-110"
                >
                  <i className={`fab fa-${icon} text-white`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Links + Newsletter */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {["About Us", "Our Team", "Careers", "Blog"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-red-500 transition relative group"
                    >
                      {link}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                {["FAQ", "Contact Us", "Help Center", "Terms & Privacy"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-red-500 transition relative group"
                    >
                      {link}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-3">Get the latest updates and offers.</p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition transform hover:-translate-y-1"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} FITNESSPRO. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
