import { useState } from "react";

function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly"); // monthly or annual

  const pricingPlans = [
    {
      name: "Basic",
      description: "Perfect for beginners starting their fitness journey",
      monthlyPrice: 29,
      annualPrice: 290, // 2 months free
      features: [
        "Access to cardio equipment",
        "Locker room facilities",
        "Basic fitness assessment",
        "2 group classes per month",
        "Mobile app access"
      ],
      notIncluded: [
        "Personal training",
        "Premium classes",
        "Pool & sauna access",
        "Nutrition planning"
      ],
      popular: false,
      color: "gray"
    },
    {
      name: "Pro",
      description: "Our most popular plan for regular fitness enthusiasts",
      monthlyPrice: 59,
      annualPrice: 590, // 2 months free
      features: [
        "Everything in Basic",
        "Unlimited group classes",
        "Pool & sauna access",
        "Advanced equipment access",
        "5% discount on personal training",
        "Fitness tracking",
        "Priority booking"
      ],
      notIncluded: [
        "Personal training sessions",
        "Advanced nutrition planning",
        "Physical therapy"
      ],
      popular: true,
      color: "red"
    },
    {
      name: "Elite",
      description: "Complete fitness solution with personalized coaching",
      monthlyPrice: 99,
      annualPrice: 990, // 2 months free
      features: [
        "Everything in Pro",
        "4 personal training sessions/month",
        "Custom nutrition plan",
        "Physical therapy access",
        "25% discount on additional sessions",
        "Bring a friend twice monthly",
        "Elite locker",
        "24/7 gym access"
      ],
      notIncluded: [],
      popular: false,
      color: "purple"
    }
  ];

  const savings = {
    Basic: "2 months free",
    Pro: "2 months free + extra benefits",
    Elite: "2 months free + premium benefits"
  };

  return (
    <div id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-8">
            Choose the perfect plan for your fitness goals. All plans include access to our state-of-the-art facilities.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg font-medium ${billingCycle === "monthly" ? "text-gray-900" : "text-gray-500"}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
              className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              role="switch"
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  billingCycle === "annual" ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${billingCycle === "annual" ? "text-gray-900" : "text-gray-500"}`}>
              Annual <span className="text-sm text-red-600 ml-1">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl ${
                plan.popular ? "ring-2 ring-red-500 transform scale-105" : "ring-1 ring-gray-200"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name & Description */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      ${billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{billingCycle === "monthly" ? "month" : "year"}
                    </span>
                  </div>
                  {billingCycle === "annual" && (
                    <p className="text-green-600 text-sm font-medium mt-2">
                      Save ${plan.monthlyPrice * 12 - plan.annualPrice} • {savings[plan.name]}
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition duration-300 mb-8 ${
                    plan.popular
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </button>

                {/* Features List */}
                <ul className="space-y-4 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Not Included (for Basic and Pro) */}
                {plan.notIncluded.length > 0 && (
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-sm font-medium text-gray-500 mb-3">Not included:</h4>
                    <ul className="space-y-2">
                      {plan.notIncluded.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-sm">
                          <svg
                            className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          <span className="text-gray-500">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can I change plans later?</h4>
              <p className="text-gray-600 text-sm">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Is there a cancellation fee?</h4>
              <p className="text-gray-600 text-sm">
                No cancellation fees. You can cancel your membership anytime with 30 days notice.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer student discounts?</h4>
              <p className="text-gray-600 text-sm">
                Yes! Students get 15% off any plan. Contact us with your student ID for verification.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Are personal trainers included?</h4>
              <p className="text-gray-600 text-sm">
                Personal training sessions are included in the Elite plan. Other plans offer discounted rates.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <div className="space-x-4">
            <button className="bg-red-600 text-white px-8 py-3 m-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
              Contact Sales
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition duration-300">
              Schedule a Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;