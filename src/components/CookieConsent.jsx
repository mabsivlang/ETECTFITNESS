import { useState, useEffect } from "react";

function CookieConsent() {
  const [showCookieModal, setShowCookieModal] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show modal after a short delay for better UX
      const timer = setTimeout(() => {
        setShowCookieModal(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const preferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowCookieModal(false);
    initializeCookies(preferences);
  };

  const handleAcceptSelected = () => {
    const preferences = {
      ...cookiePreferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowCookieModal(false);
    initializeCookies(preferences);
  };

  const handleRejectAll = () => {
    const preferences = {
      necessary: true, // Necessary cookies cannot be rejected
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowCookieModal(false);
    initializeCookies(preferences);
  };

  const initializeCookies = (preferences) => {
    // Initialize Google Analytics if accepted
    if (preferences.analytics) {
      console.log('Initializing analytics cookies...');
      // Add your analytics initialization code here
      // gtag('config', 'GA_MEASUREMENT_ID');
    }

    // Initialize marketing cookies if accepted
    if (preferences.marketing) {
      console.log('Initializing marketing cookies...');
      // Add your marketing cookies initialization here
    }

    // Necessary cookies are always initialized
    console.log('Necessary cookies initialized');
  };

  const togglePreference = (type) => {
    if (type === 'necessary') return; // Necessary cookies cannot be toggled
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showCookieModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center p-4 z-[100] sm:items-center sm:p-6">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Cookie Preferences</h2>
            </div>
            <button 
              onClick={() => setShowCookieModal(false)}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              &times;
            </button>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                At <span className="font-semibold text-red-600">FitElite</span>, we use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
              <a 
                href="/privacy-policy" 
                className="text-red-600 hover:text-red-700 font-medium text-sm"
              >
                Learn more in our Privacy Policy
              </a>
            </div>

            {/* Cookie Preferences */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Necessary Cookies</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Essential for the website to function properly. Cannot be disabled.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.necessary}
                    disabled
                    className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.analytics}
                    onChange={() => togglePreference('analytics')}
                    className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Marketing Cookies</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Used to track visitors across websites for marketing purposes.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.marketing}
                    onChange={() => togglePreference('marketing')}
                    className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={handleRejectAll}
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition duration-300"
              >
                Reject All
              </button>
              <button
                onClick={handleAcceptSelected}
                className="flex-1 px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition duration-300"
              >
                Accept Selected
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition duration-300"
              >
                Accept All
              </button>
            </div>

            {/* Footer Note */}
            <p className="text-xs text-gray-500 text-center">
              You can change your preferences at any time by clicking the "Cookie Settings" link in our website footer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;