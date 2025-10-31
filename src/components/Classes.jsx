import { useState } from "react";
// import image
import image1 from "../assets/Classes/image1.png"
import image2 from "../assets/Classes/image2.png"
import image3 from "../assets/Classes/image3.png"
import image4 from "../assets/Classes/image4.png"
import image5 from "../assets/Classes/image5.png"
import image6 from "../assets/Classes/image6.png"
import image7 from "../assets/Classes/image7.png"
import image8 from "../assets/Classes/image8.png"
import image9 from "../assets/Classes/image9.png"
import image10 from "../assets/Classes/image10.png"
import image11 from "../assets/Classes/image11.png"
import image12 from "../assets/Classes/image12.png"
import image13 from "../assets/Classes/image13.png"
import image14 from "../assets/Classes/image14.png"
import image15 from "../assets/Classes/image15.png"
import image16 from "../assets/Classes/image16.png"
import image17 from "../assets/Classes/image17.png"
import image18 from "../assets/Classes/image18.png"
import image19 from "../assets/Classes/image19.png"
import image20 from "../assets/Classes/image20.png"
import image21 from "../assets/Classes/image21.png"
import image22 from "../assets/Classes/image22.png"
import image23 from "../assets/Classes/image23.png"
import image24 from "../assets/Classes/image24.png"

function Classes() {
  const classCategory = [
    "All",
    "Cardio",
    "Strength",
    "Flexibility",
    "Mind & Body"
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const classList = [
    
  {
    name: "Morning Run",
    category: "Cardio",
    image : image1,
    duration: "45 min",
    instructor: "John Smith",
    time: "7:00 AM"
  },
  {
    name: "HIIT Cardio",
    category: "Cardio",
    image: image2,
    duration: "30 min",
    instructor: "Mike Davis",
    time: "8:00 AM"
  },
  {
    name: "Spin Cycle",
    category: "Cardio",
    image: image3,
    duration: "50 min",
    instructor: "Jessica Taylor",
    time: "6:00 PM"
  },
  {
    name: "Dance Aerobics",
    category: "Cardio",
    image: image4,
    duration: "55 min",
    instructor: "Maria Garcia",
    time: "5:30 PM"
  },
  {
    name: "Kickboxing",
    category: "Cardio",
    image: image5,
    duration: "45 min",
    instructor: "Carlos Rodriguez",
    time: "7:30 AM"
  },

  // Strength Classes
  {
    name: "Power Lifting",
    category: "Strength",
    image: image6,
    duration: "60 min",
    instructor: "Sarah Johnson",
    time: "9:00 AM"
  },
  {
    name: "Pilates Core",
    category: "Strength",
    image: image7,
    duration: "55 min",
    instructor: "David Lee",
    time: "10:00 AM"
  },
  {
    name: "Bodyweight Training",
    category: "Strength",
    image: image8,
    duration: "40 min",
    instructor: "James Wilson",
    time: "4:00 PM"
  },
  {
    name: "Kettlebell Fundamentals",
    category: "Strength",
    image: image9,
    duration: "50 min",
    instructor: "Robert Brown",
    time: "11:00 AM"
  },
  {
    name: "CrossFit Basics",
    category: "Strength",
    image: image10,
    duration: "60 min",
    instructor: "Amanda Clark",
    time: "6:30 AM"
  },

  // Flexibility Classes
  {
    name: "Stretch & Relax",
    category: "Flexibility",
    image: image11,
    duration: "40 min",
    instructor: "Lisa Brown",
    time: "5:00 PM"
  },
  {
    name: "Deep Stretch",
    category: "Flexibility",
    image: image12,
    duration: "35 min",
    instructor: "Sophie Martin",
    time: "8:00 PM"
  },
  {
    name: "Mobility Flow",
    category: "Flexibility",
    image:image13,
    duration: "45 min",
    instructor: "Kevin Harris",
    time: "7:00 PM"
  },
  {
    name: "Flexibility for Runners",
    category: "Flexibility",
    image:image14,
    duration: "30 min",
    instructor: "Jennifer White",
    time: "4:30 PM"
  },

  // Mind & Body Classes
  {
    name: "Yoga Flow",
    category: "Mind & Body",
    image: image15,
    duration: "50 min",
    instructor: "Emma Wilson",
    time: "6:00 PM"
  },
  {
    name: "Morning Meditation",
    category: "Mind & Body",
    image: image16,
    duration: "25 min",
    instructor: "Priya Patel",
    time: "6:30 AM"
  },
  {
    name: "Tai Chi Basics",
    category: "Mind & Body",
    image: image17,
    duration: "45 min",
    instructor: "Chen Wang",
    time: "8:00 AM"
  },
  {
    name: "Restorative Yoga",
    category: "Mind & Body",
    image: image18,
    duration: "60 min",
    instructor: "Maya Roberts",
    time: "7:30 PM"
  },
  {
    name: "Breathwork Session",
    category: "Mind & Body",
    image: image19,
    duration: "30 min",
    instructor: "Daniel Kim",
    time: "12:00 PM"
  },
  {
    name: "Vinyasa Yoga",
    category: "Mind & Body",
    image: image20,
    duration: "55 min",
    instructor: "Olivia Green",
    time: "9:30 AM"
  },

  // Additional Mixed Classes
  {
    name: "Bootcamp",
    category: "Cardio",
    image: image21,
    duration: "60 min",
    instructor: "Chris Thompson",
    time: "7:00 AM"
  },
  {
    name: "Barre Strength",
    category: "Strength",
    image: image22,
    duration: "45 min",
    instructor: "Natalie Scott",
    time: "10:30 AM"
  },
  {
    name: "Aqua Fitness",
    category: "Cardio",
    image: image23,
    duration: "40 min",
    instructor: "Michelle Adams",
    time: "11:30 AM"
  },
  {
    name: "Senior Stretch",
    category: "Flexibility",
    image: image24,
    duration: "35 min",
    instructor: "Barbara Miller",
    time: "10:00 AM"
  }
];
  

  const filterClasses = activeCategory === "All" 
    ? classList 
    : classList.filter((cls) => cls.category === activeCategory);

  return (
    <div id="classes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Classes
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            From high-intensity workouts to mindful practices, find the perfect class for your fitness journey.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {classCategory.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full transition duration-300 
                ${activeCategory === category 
                  ? "bg-red-600 text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterClasses.map((cls, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={cls.image} 
                  alt={cls.name}
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-red-600 bg-red-100 px-3 py-1 rounded-full">
                    {cls.category}
                  </span>
                  <span className="text-sm text-gray-600">{cls.duration}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{cls.name}</h3>
                <p className="text-gray-600 mb-4">Instructor: {cls.instructor}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <svg 
                    className="w-4 h-4 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                  {cls.time}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-md font-medium transition duration-300"
          >
            View full Schedule
          </a>
        </div>
      </div>
    </div>
  );
}

export default Classes;