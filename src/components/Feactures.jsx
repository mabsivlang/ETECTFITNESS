import React, { useState } from "react";
import { Dumbbell, Clock, Users, Building } from "lucide-react"; // install with: npm i lucide-react
// import image
import image1 from "../assets/Feactures/image1.png";
import image2 from "../assets/Feactures/image2.png";
import image3 from "../assets/Feactures/image3.png";
import image4 from "../assets/Feactures/image4.png";


function Features() {
  const [activeFeature, setActiveFeature] = useState(1);

  const features = [
    {
      id: 1,
      title: "Cutting-Edge Equipment",
      description:
        "Experience fitness with our state-of-the-art equipment featuring the latest technology, ergonomic design, and premium quality for optimal performance.",
      image:image1,
      icon: <Dumbbell className="w-6 h-6 text-red-600" />,
    },
    {
      id: 2,
      title: "Flexible Hours",
      description:
        "Work out anytime! Our gym is open 24/7 to fit your busy schedule, so you can train whenever it suits you best.",
      image:image2,
      icon: <Clock className="w-6 h-6 text-red-600" />,
    },
    {
      id: 3,
      title: "Expert Trainers",
      description:
        "Get personalized guidance from certified trainers to help you reach your fitness goals safely and efficiently.",
      image:image3,
      icon: <Users className="w-6 h-6 text-red-600" />,
    },
    {
      id: 4,
      title: "Modern Facilities",
      description:
        "Train in a clean, inspiring, and fully air-conditioned environment designed to enhance your experience.",
      image:
        image4,
      icon: <Building className="w-6 h-6 text-red-600" />,
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-gray-50 opacity-70 -z-10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-3xl opacity-10 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-400 rounded-full blur-3xl opacity-10 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Why Choose <span className="text-red-600 drop-shadow-sm">FITELITLE</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We combine luxury amenities with professional guidance to create the ultimate fitness experience.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-10 items-stretch">
          {/* Left Features List */}
          <div className="flex flex-col justify-between bg-white/80 backdrop-blur-sm  shadow-md p-6 border border-gray-100">
            {features.map((feature) => (
              <div
                key={feature.id}
                onMouseEnter={() => setActiveFeature(feature.id)}
                className={`p-4 rounded-xl flex items-start gap-4 cursor-pointer transition-all mt-5 duration-300 ${
                  activeFeature === feature.id
                    ? "bg-gradient-to-r from-red-600/10 to-transparent border-l-4 border-red-600 shadow-lg"
                    : "hover:bg-gray-100"
                }`}
              >
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3
                    className={`text-lg font-semibold mb-1 transition-colors duration-300 ${
                      activeFeature === feature.id ? "text-red-600" : "text-gray-900"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image Section */}
          <div className="lg:col-span-2 relative overflow-hidden shadow-2xl transition-all duration-700">
            {/* Fade transition between images */}
            {features.map((feature) => (
              <img
                key={feature.id}
                src={feature.image}
                alt={feature.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  activeFeature === feature.id ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">
                {features.find((f) => f.id === activeFeature)?.title}
              </h3>
              <p className="text-gray-200 max-w-xl">
                {features.find((f) => f.id === activeFeature)?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
