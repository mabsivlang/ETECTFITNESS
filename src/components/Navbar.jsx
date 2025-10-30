import { useState, useEffect } from "react";

function Navbar({ activeSection }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authMode, setAuthMode] = useState("signin"); // "signin" or "signup"

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const openAuthModal = (mode = "signin") => {
        setAuthMode(mode);
        setShowAuthModal(true);
        setIsOpen(false); // Close mobile menu if open
    };

    const closeAuthModal = () => {
        setShowAuthModal(false);
    };

    const navLinks = [
        { name: "Home", href: "#home", id: "home" },
        { name: "Features", href: "#features", id: "features" },
        { name: "About", href: "#about", id: "about" },
        { name: "Classes", href: "#classes", id: "classes" },
        { name: "Pricing", href: "#pricing", id: "pricing" },
        { name: "Trainers", href: "#trainers", id: "trainers" },
        { name: "Testimonials", href: "#testimonials", id: "testimonials" },
        { name: "Contact", href: "#contact", id: "contact" },
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scroll ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"} `}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex items-center">
                                <span className={`text-2xl font-extrabold ${scroll ? "text-gray-900" : "text-white"}`}>
                                    FIT<span className="text-red-600">ELITE</span>
                                </span>
                                <div className={`ml-2 w-2 h-2 rounded-full animate-pulse ${scroll ? "bg-red-600" : "bg-white"}`}></div>
                            </div>
                        </div>
                        
                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <a 
                                    href={link.href}
                                    key={link.id}
                                    className={`px-3 py-2 mx-1 text-sm font-medium transition-all duration-300 relative group ${
                                        scroll ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"
                                    }`}
                                >
                                    {link.name}
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-300`}></span>
                                </a>
                            ))}
                            <button 
                                onClick={() => openAuthModal("signup")}
                                className={`ml-3 px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:translate-y-[-2px] ${
                                    scroll 
                                        ? "bg-red-600 text-white hover:bg-red-700 hover:shadow-lg" 
                                        : "bg-white text-red-700 hover:bg-gray-100"
                                }`}
                            >
                                Join Now
                            </button>
                        </div>
                        
                        {/* Mobile menu button */}
                        <div className="lg:hidden flex items-center">
                            <button 
                                className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 ${
                                    scroll ? "text-gray-800" : "text-white"
                                }`} 
                                onClick={toggleMenu}
                            >
                                <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Mobile Menu */}
                <div className={`lg:hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}>
                    <div className="px-3 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100">
                        {navLinks.map((link) => (
                            <a 
                                key={link.id}
                                href={link.href}
                                className="block px-4 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-2 pb-1 px-4">
                            <button 
                                onClick={() => openAuthModal("signup")}
                                className="w-full bg-red-600 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 transform hover:translate-y-[-2px] hover:bg-red-700 hover:shadow-lg"
                            >
                                Join Now
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Authentication Modal */}
            {showAuthModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[60]">
                    <div className="bg-white  max-w-md w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-8">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {authMode === "signin" ? "Welcome Back" : "Join FitElite"}
                                </h2>
                                <button 
                                    onClick={closeAuthModal}
                                    className="text-gray-400 hover:text-gray-600 text-2xl"
                                >
                                    &times;
                                </button>
                            </div>

                            {/* Tabs */}
                            <div className="flex border-b border-gray-200 mb-6">
                                <button
                                    onClick={() => setAuthMode("signin")}
                                    className={`flex-1 py-3 text-center font-medium transition-all duration-300 ${
                                        authMode === "signin"
                                            ? "text-red-600 border-b-2 border-red-600"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    Sign In
                                </button>
                                <button
                                    onClick={() => setAuthMode("signup")}
                                    className={`flex-1 py-3 text-center font-medium transition-all duration-300 ${
                                        authMode === "signup"
                                            ? "text-red-600 border-b-2 border-red-600"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    Sign Up
                                </button>
                            </div>

                            {/* Social Login */}
                            <div className="mb-6">
                                <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 py-3 px-4  font-medium hover:bg-gray-50 transition duration-300 mb-3">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                    </svg>
                                    Continue with Google
                                </button>
                                <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 py-3 px-4 font-medium hover:bg-gray-50 transition duration-300">
                                    <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                    Continue with Facebook
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="relative mb-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                                </div>
                            </div>

                            {/* Form */}
                            <form className="space-y-4">
                                {authMode === "signup" && (
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300"
                                                placeholder=""
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300"
                                                placeholder=""
                                            />
                                        </div>
                                    </div>
                                )}

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300"
                                        placeholder="••••••••"
                                    />
                                </div>

                                {authMode === "signup" && (
                                    <div>
                                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                )}

                                {authMode === "signin" && (
                                    <div className="flex items-center justify-between">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="text-red-600 focus:ring-red-500" />
                                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                                        </label>
                                        <a href="#" className="text-sm text-red-600 hover:text-red-700 font-medium">
                                            Forgot password?
                                        </a>
                                    </div>
                                )}

                                {authMode === "signup" && (
                                    <label className="flex items-start">
                                        <input type="checkbox" className="text-red-600 focus:ring-red-500 mt-1" />
                                        <span className="ml-2 text-sm text-gray-600">
                                            I agree to the{" "}
                                            <a href="#" className="text-red-600 hover:text-red-700 font-medium">
                                                Terms of Service
                                            </a>{" "}
                                            and{" "}
                                            <a href="#" className="text-red-600 hover:text-red-700 font-medium">
                                                Privacy Policy
                                            </a>
                                        </span>
                                    </label>
                                )}

                                <button
                                    type="submit"
                                    className="w-full bg-red-600 text-white py-3 px-4  font-semibold hover:bg-red-700 transition duration-300 transform hover:translate-y-[-1px]"
                                >
                                    {authMode === "signin" ? "Sign In" : "Create Account"}
                                </button>
                            </form>

                            {/* Footer */}
                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-600">
                                    {authMode === "signin" ? "Don't have an account? " : "Already have an account? "}
                                    <button
                                        onClick={() => setAuthMode(authMode === "signin" ? "signup" : "signin")}
                                        className="text-red-600 hover:text-red-700 font-medium"
                                    >
                                        {authMode === "signin" ? "Sign up" : "Sign in"}
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;