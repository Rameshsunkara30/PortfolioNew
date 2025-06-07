import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="h-20 container mx-auto flex justify-between items-center">
        {/* Logo / Brand Name */}
        <a href="#" className="text-xl font-bold">My Portfolio</a>

        {/* Full Navbar (Visible on Large Screens) */}
        <div id="navbar" className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#skills" className="hover:text-gray-400">Skills</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
       font-bol 
        {/* Mobile Menu Button (Visible on Small Screens) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          ☰ {/* Hamburger Icon */}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-center">
          <a href="#about" className="block py-2 hover:bg-gray-700">About</a>
          <a href="#skills" className="block py-2 hover:bg-gray-700">Skills</a>
          <a href="#projects" className="block py-2 hover:bg-gray-700">Projects</a>
          <a href="#contact" className="block py-2 hover:bg-gray-700">Contact</a>
        </div>
      )}
    </nav>
  );
}