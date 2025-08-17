import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white shadow-lg fixed w-full top-0 z-50 backdrop-blur-md bg-opacity-80">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="text-3xl font-bold tracking-tight transition-transform duration-300 hover:scale-105">
          <NavLink to="/" className="flex items-center space-x-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-200">
              Brand
            </span>
          </NavLink>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none focus:ring-2 focus:ring-pink-300 rounded-lg p-2 transition-transform duration-200 hover:scale-110"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`md:flex md:items-center md:space-x-10 w-full md:w-auto transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          } md:block absolute md:static top-full left-0 bg-pink-400 bg-opacity-10 backdrop-blur-lg md:bg-transparent p-6 md:p-0 mt-2 md:mt-0 rounded-b-2xl md:rounded-none shadow-lg md:shadow-none`}
        >
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block w-full md:w-auto text-center py-3 px-6 text-lg md:text-base font-semibold rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-pink-500 md:bg-transparent md:text-yellow-300 font-bold'
                    : 'hover:bg-pink-600 md:hover:bg-transparent md:hover:text-yellow-300 hover:shadow-md'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block w-full md:w-auto text-center py-3 px-6 text-lg md:text-base font-semibold rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-pink-500 md:bg-transparent md:text-yellow-300 font-bold'
                    : 'hover:bg-pink-600 md:hover:bg-transparent md:hover:text-yellow-300 hover:shadow-md'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block w-full md:w-auto text-center py-3 px-6 text-lg md:text-base font-semibold rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-pink-500 md:bg-transparent md:text-yellow-300 font-bold'
                    : 'hover:bg-pink-600 md:hover:bg-transparent md:hover:text-yellow-300 hover:shadow-md'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;