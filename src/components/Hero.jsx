// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import "./App.css"; // your styles (optional extra global CSS)
function Hero() {
  // Current background index
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Background images (make sure your folder name matches)
  const heroBackground = [
    "/Image/Image-1.png",
    "/Image/Image-2.png",
    "/Image/Image-3.png", // optional extra
    "/Image/Image-4.png", // optional extra
    "/Image/Image-5.png", // optional extra
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) =>
        prevIndex === heroBackground.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  
  return (
    <section id="home" className="relative h-screen overflow-hidden pt-28">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/40 z-10" />

      {/* Background Images (fade + Ken Burns animation) */}
      {heroBackground.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentBgIndex ? "opacity-100 animate-kenburns" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
      ))}

      

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 w-full py-20 flex flex-col lg:flex-row gap-8 items-center justify-between">

          {/* Left Content */}
          <div className="text-center lg:text-left transition-all duration-300 transform">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="block">Transform</span>
              <span className="block">
                Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">
                  Body
                </span>
              </span>
              <span className="block">
                Transform Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">
                  Life
                </span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0">
              Join <strong>FITNESSPRO</strong> and experience premium training with modern
              facilities, expert coaches, and a community dedicated to your success.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a
                href="#classes"
                className="group relative overflow-hidden rounded-full delete bg-red-600 px-8 py-4 text-white font-medium text-lg inline-flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="relative z-10">Explore Classes</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 transform scale-x-0 group-hover:scale-100 transition-all duration-300 origin-left"></div>
              </a>

              <a
                href="#pricing"
                className="group relative overflow-hidden rounded-full border-2 border-white px-8 py-4 text-white font-medium text-lg inline-flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="relative z-10">View Memberships</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 transform scale-x-0 group-hover:scale-100 transition-all duration-300 origin-left"></div>
              </a>
            </div>
          </div>

          {/* Right Info Card */}
          <div className="hidden lg:block w-full max-w-md bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl relative overflow-hidden">
            {/* Decorative Blur Circles */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/20 rounded-full blur-2xl transform translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-400/20 rounded-full blur-2xl transform -translate-x-16 translate-y-16"></div>

            {/* Card Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us</h3>

              <div className="space-y-6">
                <Feature
                  title="Premium Equipment"
                  desc="Access to the latest high-end machines and tools."
                />
                <Feature
                  title="Expert Trainers"
                  desc="Guidance from certified professionals who care."
                />
                <Feature
                  title="Flexible Hours"
                  desc="Open 24/7 to match your busy schedule."
                />
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="#features"
                  className="inline-flex items-center text-red-400 font-medium group"
                >
                  Discover all features
                  <svg
                    className="w-5 h-5 ml-2 text-red-400 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Small reusable Feature component
const Feature = ({ title, desc }) => (
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
      <svg
        className="w-6 h-6 text-red-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    </div>
    <div>
      <h4 className="text-white font-semibold text-lg">{title}</h4>
      <p className="text-gray-300 text-sm mt-1">{desc}</p>
    </div>
  </div>
);

export default Hero;
