import { useState } from "react";
// import image
import image1 from "../assets/Testimonial/image1.png"
import image2 from "../assets/Testimonial/image2.png"
import image3 from "../assets/Testimonial/image3.png"
import image4 from "../assets/Testimonial/image4.png"
import image5 from "../assets/Testimonial/image5.png"
import image6 from "../assets/Testimonial/image6.png"
function Testimonials() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTestimonial, setActiveTestimonial] = useState(null); // Changed from 0 to null

  const categories = [
    "All",
    "Weight Loss",
    "Strength Training",
    "Yoga & Pilates",
    "Nutrition",
    "Rehabilitation"
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      age: 34,
      location: "New York, NY",
      category: "Weight Loss",
      rating: 5,
      duration: "6 months",
      beforeWeight: "185 lbs",
      afterWeight: "145 lbs",
      image: image1,
      video: "/videos/testimonials/sarah-journey.mp4",
      quote: "I never thought I could lose 40 pounds and keep it off. The trainers here changed my life completely!",
      story: "After having two kids, I struggled with my weight for years. The personalized nutrition plan and consistent support helped me not only lose weight but build healthy habits that last. I've never felt better!",
      trainer: "Sarah Johnson",
      achievements: ["Lost 40 pounds", "Reduced blood pressure", "Ran first 5K", "Gained confidence"]
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 28,
      location: "San Francisco, CA",
      category: "Strength Training",
      rating: 5,
      duration: "8 months",
      beforeWeight: "160 lbs",
      afterWeight: "180 lbs",
      image: image2,
      video: "/videos/testimonials/michael-strength.mp4",
      quote: "Gained 20 pounds of muscle and finally feel confident in my own skin! I struggled with my weight for years.",
      story: "As a software engineer, I spent most of my day sitting. I was skinny and lacked confidence. The strength training program transformed my body and mindset. Now I have energy throughout the day!",
      trainer: "Marcus Rodriguez",
      achievements: ["Gained 20 lbs muscle", "Bench press 225 lbs", "Improved posture", "Better sleep quality"]
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      age: 42,
      location: "Miami, FL",
      category: "Yoga & Pilates",
      rating: 5,
      duration: "1 year",
      beforeWeight: "N/A",
      afterWeight: "N/A",
      image: image3,
      video: "/videos/testimonials/emily-yoga.mp4",
      quote: "Yoga here healed my chronic back pain and brought peace to my busy life. I struggled with my weight for years. I thought my active life was over. They proved me wrong!",
      story: "Years of desk work left me with terrible back pain. After trying everything, I found Mike's yoga classes. The pain is gone, and I've found a practice that keeps me centered.",
      trainer: "Mike Chen",
      achievements: ["No back pain", "Improved flexibility", "Stress management", "Better mindfulness"]
    },
    {
      id: 4,
      name: "David Thompson",
      age: 55,
      location: "Chicago, IL",
      category: "Rehabilitation",
      rating: 5,
      duration: "4 months",
      beforeWeight: "N/A",
      afterWeight: "N/A",
      image: image4,
      video: "/videos/testimonials/david-rehab.mp4",
      quote: "After my knee surgery, I thought my active life was over. They proved me wrong!  I thought my active life was over. They proved me wrong!",
      story: "Post-surgery rehabilitation with Dr. Gonzalez got me back on my feet faster than expected. The careful progression and expert guidance made all the difference. ",
      trainer: "Dr. Maria Gonzalez",
      achievements: ["Full knee recovery", "Returned to hiking", "Improved mobility", "Pain-free movement"]
    },
    {
      id: 5,
      name: "Jessica Park",
      age: 31,
      location: "Seattle, WA",
      category: "Nutrition",
      rating: 5,
      duration: "3 months",
      beforeWeight: "170 lbs",
      afterWeight: "150 lbs",
      image:image5,
      video: "/videos/testimonials/jessica-nutrition.mp4",
      quote: "The nutrition coaching helped me understand food in a whole new way. No more diets!",
      story: "I was stuck in the diet cycle for years. Dr. Park taught me about sustainable nutrition. I've lost 20 pounds without feeling deprived and have more energy than ever.",
      trainer: "Dr. David Park",
      achievements: ["Lost 20 pounds", "Improved energy levels", "Better relationship with food", "Consistent weight maintenance"]
    },
    {
      id: 6,
      name: "Robert Johnson",
      age: 45,
      location: "Austin, TX",
      category: "Strength Training",
      rating: 4,
      duration: "1 year",
      beforeWeight: "220 lbs",
      afterWeight: "195 lbs",
      image: image6,
      video: "/videos/testimonials/robert-transformation.mp4",
      quote: "At 45, I'm in the best shape of my life. The trainers understand adult fitness needs. I thought my active life was over. ",
      story: "I thought my best years were behind me. The program designed for my age group helped me lose fat, gain muscle, and feel younger than I did in my 30s.",
      trainer: "James Wilson",
      achievements: ["Lost 25 lbs", "Gained muscle mass", "Improved cholesterol", "More energy"]
    },
   
  ];

  const filteredTestimonials = activeCategory === "All" 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === activeCategory);

  const renderStars = (rating) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const stats = {
    totalTransformations: "1,500+",
    averageWeightLoss: "28 lbs",
    successRate: "95%",
    memberSatisfaction: "4.9/5"
  };

  return (
    <div id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Stories, Real Results
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Discover how our members transformed their lives through fitness and wellness.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">{stats.totalTransformations}</div>
            <div className="text-gray-600">Successful Transformations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">{stats.averageWeightLoss}</div>
            <div className="text-gray-600">Average Weight Loss</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">{stats.successRate}</div>
            <div className="text-gray-600">Program Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">{stats.memberSatisfaction}</div>
            <div className="text-gray-600">Member Satisfaction</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition duration-300 ${
                activeCategory === category
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Testimonial Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.category}
                </div> */}
              </div>

              {/* Testimonial Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">
                      {testimonial.age} • {testimonial.location}
                    </p>
                  </div>
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 italic mb-4 border-l-4 border-red-600 pl-4">
                  "{testimonial.quote}"
                </blockquote>

                {/* Results */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Duration:</span>
                    <span className="font-semibold">{testimonial.duration}</span>
                  </div>
                  {testimonial.beforeWeight !== "N/A" && (
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Results:</span>
                      <span className="font-semibold text-green-600">
                        {testimonial.beforeWeight} → {testimonial.afterWeight}
                      </span>
                    </div>
                  )}
                </div>

                {/* Trainer */}
                <div className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Trainer:</span> {testimonial.trainer}
                </div>

                {/* Key Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                  <div className="flex flex-wrap gap-1">
                    {testimonial.achievements.slice(0, 2).map((achievement, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded"
                      >
                        {achievement}
                      </span>
                    ))}
                    {testimonial.achievements.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        +{testimonial.achievements.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Read More Button */}
                <button
                  onClick={() => setActiveTestimonial(index)}
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-red-700 transition duration-300"
                >
                  Read Full Story
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial Modal */}
        {activeTestimonial !== null && filteredTestimonials[activeTestimonial] && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <>
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {filteredTestimonials[activeTestimonial].name}'s Transformation
                      </h3>
                      <p className="text-gray-600">
                        {filteredTestimonials[activeTestimonial].age} • {filteredTestimonials[activeTestimonial].location}
                      </p>
                    </div>
                    <button 
                      onClick={() => setActiveTestimonial(null)}
                      className="text-gray-400 hover:text-gray-600 text-2xl"
                    >
                      &times;
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Visuals */}
                    <div>
                      <div className="rounded-lg overflow-hidden mb-4">
                        <img
                          src={filteredTestimonials[activeTestimonial].image}
                          alt={filteredTestimonials[activeTestimonial].name}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      {filteredTestimonials[activeTestimonial].video && (
                        <div className="bg-gray-100 rounded-lg p-4 text-center">
                          <p className="text-gray-600 mb-2">Watch their journey video</p>
                          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300">
                            Play Video
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Right Column - Details */}
                    <div>
                      {/* Category & Rating */}
                      <div className="flex justify-between items-center mb-6">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                          {filteredTestimonials[activeTestimonial].category}
                        </span>
                        <div className="flex items-center">
                          {renderStars(filteredTestimonials[activeTestimonial].rating)}
                          <span className="ml-2 text-gray-600">({filteredTestimonials[activeTestimonial].rating}.0)</span>
                        </div>
                      </div>

                      {/* Main Quote */}
                      <blockquote className="text-xl text-gray-800 italic mb-6 border-l-4 border-red-600 pl-4">
                        "{filteredTestimonials[activeTestimonial].quote}"
                      </blockquote>

                      {/* Full Story */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Their Story</h4>
                        <p className="text-gray-700 leading-relaxed">
                          {filteredTestimonials[activeTestimonial].story}
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-red-600">{filteredTestimonials[activeTestimonial].duration}</div>
                          <div className="text-sm text-gray-600">Program Duration</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-red-600">{filteredTestimonials[activeTestimonial].trainer}</div>
                          <div className="text-sm text-gray-600">Trainer</div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {filteredTestimonials[activeTestimonial].achievements.map((achievement, index) => (
                            <div key={index} className="flex items-center text-sm">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                              <span className="text-gray-700">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
                        Start Your Transformation
                      </button>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center bg-white rounded-2xl p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of members who have transformed their lives. Your journey to better health starts today.
          </p>
          <div className="space-x-4">
            <button className="bg-red-600 text-white m-3 px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition duration-300">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;