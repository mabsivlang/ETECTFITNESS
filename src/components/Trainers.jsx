import { useState } from "react";

function Trainers() {
  const [activeSpecialty, setActiveSpecialty] = useState("All");
  const [activeModal, setActiveModal] = useState(null);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const specialties = [
    "All",
    "Strength Training",
    "Yoga & Pilates",
    "Cardio",
    "Nutrition",
    "Rehabilitation",
    "CrossFit"
  ];

  const trainers = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Head Strength Coach",
    specialty: ["Strength Training", "CrossFit"],
    image: "/images/trainers/sarah-johnson.jpg",
    experience: "8 years",
    certification: ["NASM-CPT", "CrossFit L2", "Precision Nutrition L1"],
    bio: "Sarah specializes in strength training and functional movement. She's helped over 200 clients transform their bodies and build confidence.",
    achievements: [
      "2023 Regional Strength Coach of the Year",
      "500+ clients trained",
      "Specialist in women's strength training"
    ],
    focusAreas: ["Weight Loss", "Muscle Building", "Functional Strength"],
    rating: 4.9,
    clients: 284,
    email: "sarah@fitness.com",
    phone: "+1 (555) 123-4567",
    availability: ["Mon-Wed: 6AM-2PM", "Thu-Fri: 8AM-4PM", "Sat: 7AM-12PM"]
  },
  {
    id: 2,
    name: "Mike Chen",
    title: "Yoga & Mindfulness Expert",
    specialty: ["Yoga & Pilates", "Rehabilitation"],
    image: "/images/trainers/mike-chen.jpg",
    experience: "12 years",
    certification: ["E-RYT 500", "Yoga Therapy Certified", "Pilates Instructor"],
    bio: "Mike combines traditional yoga with modern science to create transformative mind-body experiences.",
    achievements: [
      "Lead Instructor at International Yoga Festival",
      "Published 2 books on mindful movement"
    ],
    focusAreas: ["Stress Reduction", "Flexibility", "Injury Prevention"],
    rating: 4.8,
    clients: 192,
    email: "mike@fitness.com",
    phone: "+1 (555) 123-4568",
    availability: ["Mon-Tue: 7AM-3PM", "Wed-Fri: 9AM-5PM", "Sat: 8AM-1PM"]
  },
  {
    id: 3,
    name: "Jessica Martinez",
    title: "Cardio & HIIT Specialist",
    specialty: ["Cardio", "Strength Training"],
    image: "/images/trainers/jessica-martinez.jpg",
    experience: "6 years",
    certification: ["ACE-CPT", "HIIT Specialist", "TRX Certified"],
    bio: "Jessica's high-energy sessions will push you to new limits.",
    achievements: [
      "Marathon runner (Boston qualified)",
      "Created popular HIIT program"
    ],
    focusAreas: ["Endurance Training", "Fat Loss", "Metabolic Conditioning"],
    rating: 4.7,
    clients: 173,
    email: "jessica@fitness.com",
    phone: "+1 (555) 123-4569",
    availability: ["Mon-Wed: 5AM-1PM", "Thu-Sat: 7AM-3PM"]
  },
  {
    id: 4,
    name: "Dr. David Park",
    title: "Sports Nutritionist & Coach",
    specialty: ["Nutrition", "Strength Training"],
    image: "/images/trainers/david-park.jpg",
    experience: "10 years",
    certification: ["PhD Sports Nutrition", "CSCS", "ISSA Certified"],
    bio: "David combines scientific nutrition with practical training methods.",
    achievements: [
      "PhD in Sports Nutrition",
      "Published 15+ research papers"
    ],
    focusAreas: ["Sports Performance", "Body Composition", "Gut Health"],
    rating: 5.0,
    clients: 156,
    email: "david@fitness.com",
    phone: "+1 (555) 123-4570",
    availability: ["Tue-Thu: 8AM-4PM", "Fri: 10AM-6PM", "Sat: 9AM-2PM"]
  },
  {
    id: 5,
    name: "Marcus Rodriguez",
    title: "Olympic Weightlifting Coach",
    specialty: ["Strength Training", "CrossFit"],
    image: "/images/trainers/marcus-rodriguez.jpg",
    experience: "9 years",
    certification: ["USAW Level 2", "CrossFit L3", "NASM-CES"],
    bio: "Marcus specializes in Olympic weightlifting and powerlifting techniques. He has coached several national-level athletes.",
    achievements: [
      "National Weightlifting Champion 2022",
      "Coached 3 athletes to national competitions",
      "USAW Certified Senior Coach"
    ],
    focusAreas: ["Olympic Lifting", "Powerlifting", "Strength Programming"],
    rating: 4.9,
    clients: 218,
    email: "marcus@fitness.com",
    phone: "+1 (555) 123-4571",
    availability: ["Mon-Fri: 5AM-1PM", "Sat: 6AM-11AM"]
  },
  {
    id: 6,
    name: "Priya Patel",
    title: "Holistic Wellness Coach",
    specialty: ["Yoga & Pilates", "Nutrition", "Mind & Body"],
    image: "/images/trainers/priya-patel.jpg",
    experience: "11 years",
    certification: ["RYT 500", "Integrative Nutrition Coach", "Meditation Teacher"],
    bio: "Priya takes a holistic approach to fitness, combining yoga, nutrition, and mindfulness for complete wellness transformation.",
    achievements: [
      "Featured in Wellness Magazine Top 100",
      "5000+ hours of teaching experience",
      "Corporate wellness program developer"
    ],
    focusAreas: ["Holistic Health", "Stress Management", "Mindful Movement"],
    rating: 4.8,
    clients: 267,
    email: "priya@fitness.com",
    phone: "+1 (555) 123-4572",
    availability: ["Mon-Wed: 8AM-4PM", "Thu-Fri: 9AM-5PM", "Sat: 7AM-12PM"]
  },
  {
    id: 7,
    name: "Alex Thompson",
    title: "Senior Fitness Specialist",
    specialty: ["Rehabilitation", "Strength Training"],
    image: "/images/trainers/alex-thompson.jpg",
    experience: "14 years",
    certification: ["ACE Senior Fitness", "Physical Therapy Aide", "Balance Training"],
    bio: "Alex specializes in helping older adults maintain mobility, strength, and independence through safe and effective exercise programs.",
    achievements: [
      "Senior Fitness Association Award 2023",
      "Developed fall prevention programs",
      "1000+ seniors trained"
    ],
    focusAreas: ["Senior Fitness", "Mobility", "Joint Health", "Balance"],
    rating: 5.0,
    clients: 325,
    email: "alex@fitness.com",
    phone: "+1 (555) 123-4573",
    availability: ["Mon-Fri: 9AM-3PM", "Sat: 10AM-2PM"]
  },
  {
    id: 8,
    name: "Chloe Williams",
    title: "Dance Fitness Instructor",
    specialty: ["Cardio", "Mind & Body"],
    image: "/images/trainers/chloe-williams.jpg",
    experience: "7 years",
    certification: ["Zumba Instructor", "Dance Fitness Pro", "ACE Group Fitness"],
    bio: "Chloe brings energy and joy to fitness through dance. Her classes are known for being fun, inclusive, and highly effective.",
    achievements: [
      "Regional Dance Fitness Champion",
      "Trained 50+ dance instructors",
      "Community fitness award winner"
    ],
    focusAreas: ["Dance Cardio", "Coordination", "Fun Fitness", "Weight Management"],
    rating: 4.7,
    clients: 189,
    email: "chloe@fitness.com",
    phone: "+1 (555) 123-4574",
    availability: ["Mon-Tue: 4PM-8PM", "Wed-Fri: 5PM-9PM", "Sat: 9AM-1PM"]
  },
  {
    id: 9,
    name: "Dr. Maria Gonzalez",
    title: "Physical Therapist & Rehab Specialist",
    specialty: ["Rehabilitation", "Yoga & Pilates"],
    image: "/images/trainers/maria-gonzalez.jpg",
    experience: "15 years",
    certification: ["DPT", "Corrective Exercise Specialist", "Yoga for Therapy"],
    bio: "Maria is a Doctor of Physical Therapy who specializes in injury prevention and rehabilitation through targeted exercise programs.",
    achievements: [
      "Doctor of Physical Therapy",
      "Published research on sports injuries",
      "Consultant for professional sports teams"
    ],
    focusAreas: ["Injury Recovery", "Postural Correction", "Pain Management", "Prehab"],
    rating: 4.9,
    clients: 278,
    email: "maria@fitness.com",
    phone: "+1 (555) 123-4575",
    availability: ["Mon-Wed: 7AM-3PM", "Thu-Fri: 8AM-4PM"]
  },
  {
    id: 10,
    name: "James Wilson",
    title: "Sports Performance Coach",
    specialty: ["Strength Training", "Cardio", "CrossFit"],
    image: "/images/trainers/james-wilson.jpg",
    experience: "12 years",
    certification: ["CSCS", "NASM-PES", "USA Track & Field"],
    bio: "James works with athletes of all levels to improve performance, speed, and agility through scientifically-backed training methods.",
    achievements: [
      "Coached college athletes to championships",
      "Speed and agility specialist",
      "Sports performance researcher"
    ],
    focusAreas: ["Athletic Performance", "Speed Training", "Agility", "Sport-Specific Training"],
    rating: 4.8,
    clients: 234,
    email: "james@fitness.com",
    phone: "+1 (555) 123-4576",
    availability: ["Mon-Fri: 6AM-2PM", "Sat: 7AM-12PM"]
  },
  {
    id: 11,
    name: "Lisa Brown",
    title: "Pre & Postnatal Fitness Expert",
    specialty: ["Rehabilitation", "Strength Training", "Mind & Body"],
    image: "/images/trainers/lisa-brown.jpg",
    experience: "8 years",
    certification: ["Pre/Postnatal Certified", "Pelvic Floor Specialist", "Yoga for Pregnancy"],
    bio: "Lisa specializes in safe and effective fitness programs for expecting and new mothers, focusing on strength and recovery.",
    achievements: [
      "Pre/Postnatal fitness certification",
      "Mom & Baby fitness program creator",
      "Women's health advocate"
    ],
    focusAreas: ["Prenatal Fitness", "Postpartum Recovery", "Core Restoration", "Pelvic Health"],
    rating: 4.9,
    clients: 195,
    email: "lisa@fitness.com",
    phone: "+1 (555) 123-4577",
    availability: ["Mon-Wed: 9AM-2PM", "Thu-Fri: 10AM-3PM", "Sat: 8AM-12PM"]
  },
  {
    id: 12,
    name: "Carlos Mendez",
    title: "Boxing & Martial Arts Coach",
    specialty: ["Cardio", "Strength Training"],
    image: "/images/trainers/carlos-mendez.jpg",
    experience: "10 years",
    certification: ["Boxing Coach Level 3", "Muay Thai Instructor", "Strength & Conditioning"],
    bio: "Carlos combines boxing techniques with fitness training for high-intensity workouts that build strength, endurance, and confidence.",
    achievements: [
      "Professional boxing coach",
      "Self-defense program developer",
      "Youth fitness program director"
    ],
    focusAreas: ["Boxing Fitness", "Self-Defense", "HIIT", "Coordination"],
    rating: 4.7,
    clients: 276,
    email: "carlos@fitness.com",
    phone: "+1 (555) 123-4578",
    availability: ["Mon-Fri: 4PM-9PM", "Sat: 8AM-2PM"]
  }
];

  const filteredTrainers = activeSpecialty === "All" 
    ? trainers 
    : trainers.filter(trainer => trainer.specialty.includes(activeSpecialty));

  // FIX: Always find the trainer from the original trainers array by ID
  const openModal = (modalType, trainer) => {
    // Find the complete trainer data from the original array
    const completeTrainer = trainers.find(t => t.id === trainer.id);
    setSelectedTrainer(completeTrainer);
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
    setSelectedTrainer(null);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  return (
    <div id="trainers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Trainers
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Our certified professionals are here to guide you on your fitness journey.
          </p>
        </div>

        {/* Specialty Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {specialties.map((specialty, index) => (
            <button
              key={index}
              onClick={() => setActiveSpecialty(specialty)}
              className={`px-6 py-3 rounded-full transition duration-300 ${
                activeSpecialty === specialty
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {specialty}
            </button>
          ))}
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredTrainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Trainer Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              {/* Trainer Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{trainer.name}</h3>
                    <p className="text-red-600 font-medium">{trainer.title}</p>
                  </div>
                  {renderStars(trainer.rating)}
                </div>

                {/* Experience & Clients */}
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>{trainer.experience} experience</span>
                  <span>{trainer.clients} clients</span>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {trainer.specialty.map((spec, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {trainer.bio}
                </p>

                {/* CTA Buttons */}
                <div className="flex space-x-3">
                  <button 
                    onClick={() => openModal('book', trainer)}
                    className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-red-700 transition duration-300"
                  >
                    Book Session
                  </button>
                  <button 
                    onClick={() => openModal('profile', trainer)}
                    className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:border-gray-400 transition duration-300"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Book Session Modal */}
        {activeModal === 'book' && selectedTrainer && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Book a Session</h3>
                  <button 
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    &times;
                  </button>
                </div>

                {/* Trainer Info */}
                <div className="flex items-center mb-6 p-4 bg-gray-50 rounded-lg">
                  <img 
                    src={selectedTrainer.image} 
                    alt={selectedTrainer.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{selectedTrainer.name}</h4>
                    <p className="text-red-600 text-sm">{selectedTrainer.title}</p>
                    <p className="text-gray-600 text-sm">{selectedTrainer.specialty.join(", ")}</p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center">
                      <span className="text-gray-600 w-20">Email:</span>
                      <span className="text-gray-900">{selectedTrainer.email}</span>
                    </p>
                    <p className="flex items-center">
                      <span className="text-gray-600 w-20">Phone:</span>
                      <span className="text-gray-900">{selectedTrainer.phone}</span>
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Availability</h4>
                  <div className="space-y-2">
                    {selectedTrainer.availability.map((slot, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{slot}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Session Type */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Session Type</h4>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    <option>Initial Consultation (60 min)</option>
                    <option>Personal Training (60 min)</option>
                    <option>Group Session (45 min)</option>
                    <option>Nutrition Coaching (30 min)</option>
                  </select>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input 
                      type="date" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                    <input 
                      type="time" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex space-x-3">
                  <button 
                    onClick={closeModal}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition duration-300"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition duration-300">
                    Confirm Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View Profile Modal */}
        {activeModal === 'profile' && selectedTrainer && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <img 
                      src={selectedTrainer.image} 
                      alt={selectedTrainer.name}
                      className="w-20 h-20 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{selectedTrainer.name}</h3>
                      <p className="text-red-600 font-medium">{selectedTrainer.title}</p>
                      {renderStars(selectedTrainer.rating)}
                    </div>
                  </div>
                  <button 
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    &times;
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{selectedTrainer.experience}</div>
                    <div className="text-sm text-gray-600">Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{selectedTrainer.clients}+</div>
                    <div className="text-sm text-gray-600">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{selectedTrainer.rating}</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTrainer.specialty.map((spec, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">About</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedTrainer.bio}</p>
                </div>

                {/* Certifications */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Certifications</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedTrainer.certification.map((cert, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => {
                    closeModal();
                    openModal('book', selectedTrainer);
                  }}
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition duration-300"
                >
                  Book Session with {selectedTrainer.name}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Trainers;