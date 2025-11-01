import { Dumbbell, Users, Award, HeartPulse } from "lucide-react"; // optional icons
import image1 from "../assets/About/image1.png"
function About() {
  return (
    <div id="about" className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_30%,#ef4444,transparent_40%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left Section */}
          <div className="order-2 lg:order-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              About <span className="text-red-600">FitElitle</span>
            </h2>

            <p className="text-lg text-gray-600">
              At <span className="font-semibold text-gray-900">FitElite</span>, we believe
              fitness is more than a goal—it’s a lifestyle. Our modern gym combines
              cutting-edge equipment, personalized training, and a supportive
              community to help you become your strongest self.
            </p>

            <p className="text-lg text-gray-600">
              Whether you’re new to fitness or a professional athlete, our expert
              trainers and motivating environment ensure every workout moves you
              closer to your goals.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 text-center sm:text-left">
              <div className="flex items-center space-x-3">
                <Dumbbell className="text-red-600 w-6 h-6" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <p className="text-gray-600 text-sm">Years Experience</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="text-red-600 w-6 h-6" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <p className="text-gray-600 text-sm">Expert Trainers</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="text-red-600 w-6 h-6" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <p className="text-gray-600 text-sm">Weekly Classes</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <HeartPulse className="text-red-600 w-6 h-6" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">5000+</div>
                  <p className="text-gray-600 text-sm">Happy Members</p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white 
              px-8 py-4 rounded-full font-semibold shadow-md transition-all duration-300 
              hover:scale-105"
            >
              Learn More
              <svg
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right Section (Image) */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative group">
              <img
                src={image1}
                alt="Fitlife Gym"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <div className="text-2xl font-bold">Premium Facility</div>
                <p className="text-sm">1500 sq ft of advanced workout space</p>
              </div>
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
