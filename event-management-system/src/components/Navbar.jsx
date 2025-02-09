import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0D162E] p-4 shadow-md ">
      <div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto relative">
        <div className="text-white text-xl lg:text-3xl font-bold">
          <a href="/" className="px-10">
            SpotLight{" "}
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="space-x-8 hidden px-10 md:flex">
        <Link to="/events" className="text-white hover:text-blue-300">Explore</Link>
        <Link to="/login" className="text-white hover:text-blue-300">Login</Link>
        <Link to="/signup" className="text-white hover:text-blue-300">Signup</Link>
          {/* <a href="/login" className="text-white hover:text-blue-300">
            Login
          </a>
          <a href="/signup" className="text-white hover:text-blue-300">
            Signup
          </a> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-700 p-4 space-y-4">
          <a href="/explore" className="text-white hover:text-gray-300">
            Explore
          </a>
          <a href="/login" className="text-white hover:text-gray-300">
            Login
          </a>
          <a href="/signup" className="text-white hover:text-gray-300">
            Signup
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
