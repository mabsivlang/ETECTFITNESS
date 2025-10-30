import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "email",
    interest: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        preferredContact: "email",
        interest: ""
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm",
      action: "tel:+15551234567"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      details: "hello@fitnessstudio.com",
      description: "We'll respond within 24 hours",
      action: "mailto:hello@fitnessstudio.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      details: "123 Fitness Street, Suite 100",
      description: "New York, NY 10001",
      action: "https://maps.google.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Business Hours",
      details: "Mon-Sun: 5am - 11pm",
      description: "Open 7 days a week",
      action: null
    }
  ];

  const locations = [
    {
      id: 1,
      name: "Downtown Studio",
      address: "123 Fitness Street, Suite 100",
      city: "New York, NY 10001",
      phone: "+1 (555) 123-4567",
      hours: {
        weekdays: "5:00 AM - 11:00 PM",
        weekends: "6:00 AM - 10:00 PM"
      },
      amenities: ["Parking", "Locker Rooms", "Showers", "Childcare"],
      image: "/images/locations/downtown.jpg"
    },
    {
      id: 2,
      name: "Uptown Fitness Center",
      address: "456 Wellness Avenue",
      city: "New York, NY 10028",
      phone: "+1 (555) 123-4568",
      hours: {
        weekdays: "5:00 AM - 10:00 PM",
        weekends: "6:00 AM - 9:00 PM"
      },
      amenities: ["Parking", "Pool", "Sauna", "Cafe"],
      image: "/images/locations/uptown.jpg"
    },
    {
      id: 3,
      name: "Brooklyn Wellness Hub",
      address: "789 Health Boulevard",
      city: "Brooklyn, NY 11201",
      phone: "+1 (555) 123-4569",
      hours: {
        weekdays: "5:30 AM - 10:30 PM",
        weekends: "7:00 AM - 8:00 PM"
      },
      amenities: ["Yoga Studio", "Meditation Room", "Juice Bar", "Parking"],
      image: "/images/locations/brooklyn.jpg"
    }
  ];

  const interests = [
    "Personal Training",
    "Group Classes",
    "Nutrition Coaching",
    "Membership",
    "Corporate Wellness",
    "Physical Therapy",
    "General Inquiry"
  ];

  const faqs = [
    {
      question: "Do you offer free trial sessions?",
      answer: "Yes! We offer a free 3-day trial for new members to experience our facilities and classes."
    },
    {
      question: "What's your cancellation policy?",
      answer: "You can cancel your membership with 30 days notice. No cancellation fees apply."
    },
    {
      question: "Do you have parking available?",
      answer: "All our locations offer complimentary parking for members during their visits."
    },
    {
      question: "Can I freeze my membership?",
      answer: "Yes, you can freeze your membership for up to 3 months per year for medical or travel reasons."
    }
  ];

  return (
    <div id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Ready to start your fitness journey? We're here to help you every step of the way.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition duration-300"
            >
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mx-auto mb-4">
                {method.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-gray-900 font-medium mb-1">{method.details}</p>
              <p className="text-gray-600 text-sm mb-4">{method.description}</p>
              {method.action && (
                <a
                  href={method.action}
                  className="text-red-600 hover:text-red-700 font-medium text-sm"
                >
                  Contact Now →
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-green-800 font-medium">Thank you! Your message has been sent successfully.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                      I'm interested in
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300"
                    >
                      <option value="">Select an option</option>
                      {interests.map((interest, index) => (
                        <option key={index} value={interest}>{interest}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300 resize-none"
                    placeholder="Tell us about your fitness goals and how we can help..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === "email"}
                        onChange={handleChange}
                        className="text-red-600 focus:ring-red-500"
                      />
                      <span className="ml-2 text-gray-700">Email</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === "phone"}
                        onChange={handleChange}
                        className="text-red-600 focus:ring-red-500"
                      />
                      <span className="ml-2 text-gray-700">Phone</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Locations & Map */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Locations</h2>
            <div className="space-y-6">
              {locations.map((location) => (
                <div key={location.id} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img
                        src={location.image}
                        alt={location.name}
                        className="w-32 h-32 rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{location.name}</h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {location.address}
                        </p>
                        <p className="ml-6">{location.city}</p>
                        <p className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {location.phone}
                        </p>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Hours</h4>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>Weekdays: {location.hours.weekdays}</p>
                          <p>Weekends: {location.hours.weekends}</p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Amenities</h4>
                        <div className="flex flex-wrap gap-2">
                          {location.amenities.map((amenity, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full"
                            >
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 flex space-x-3">
                        <a
                          href={`tel:${location.phone}`}
                          className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:bg-red-700 transition duration-300"
                        >
                          Call Now
                        </a>
                        <a
                          href={contactMethods[2].action}
                          className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-center text-sm font-medium hover:border-gray-400 transition duration-300"
                        >
                          Get Directions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-red-600 rounded-2xl p-12 text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Join our community today and take the first step towards a healthier, happier you.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-red-600 px-8 py-3 m-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition duration-300">
              Schedule Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;