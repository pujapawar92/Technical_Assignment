// components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-100 py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">SSA</div>
        <ul className="flex gap-6 text-gray-600 font-medium">
          <li><a href="#about" className="hover:text-green-600">About</a></li>
          <li><a href="#services" className="hover:text-green-600">Services</a></li>
          <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
