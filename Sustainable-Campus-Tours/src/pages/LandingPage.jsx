import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="relative h-screen bg-gradient-to-br from-green-100 via-white to-green-200 overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-6">
        <h2 className="text-2xl font-bold text-green-900 tracking-wide">
          Sustainable<span className="text-green-700">Tours</span>
        </h2>
        <div className="text-3xl text-green-800 hover:text-green-900 cursor-pointer transition">
          <FaUserCircle title="User Login" />
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center h-full text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-4 drop-shadow-md">
          Explore Your Campus Sustainably
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-10">
          Take a guided eco-friendly tour of your campus — learn about green
          spaces, sustainable initiatives, and eco-points, all from an
          interactive map.
        </p>

        <Link
          to="/map"
          className="px-8 py-3 bg-green-700 text-white rounded-full shadow-lg hover:bg-green-800 transition-all text-lg font-medium"
        >
          🌎 Start Exploring
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
