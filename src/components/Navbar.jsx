import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import AuthModal from "../Pages/Auth/AuthModal";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor(true);
      } else {
        setBgColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showNav = () => {
    setToggle(!toggle);
  };

  const navbarData = [
    { title: "Home", href: "/" },
    { title: "About us", href: "/about-us" },
    { title: "Dealers", href: "/dealers" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed z-50 top-0 left-0 w-full h-20 px-5 md:px-20
      flex justify-between items-center
      transition-all duration-300
      ${
        bgColor
          ? "bg-transparent shadow-none"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <img
        className="md:h-14 h-12 cursor-pointer hover:opacity-90 transition-opacity"
        src="/LOGO.png"
        alt="Logo"
      />

      {/* Mobile Menu Icon - Using Lucide React Menu icon */}
      <Menu
        onClick={() => setToggle(!toggle)}
        className="md:hidden h-7 w-7 text-white cursor-pointer hover:text-purple-300 transition-colors"
      />

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-10 font-medium">
        {navbarData.map((link, index) => (
          <Link
            key={index}
            className="text-white hover:text-purple-300 transition-colors cursor-pointer font-sans text-lg hover:scale-105 transform transition-transform"
            to={link.href}
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* Login & Playstore Icon */}
      <div className="hidden md:flex items-center gap-6">
        <button
          className="flex border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white font-medium px-5 py-2 rounded-lg cursor-pointer transition-all hover:scale-105 transform shadow-md hover:shadow-purple-500/30"
          onClick={() => setModalOpen(true)}
        >
          Login
        </button>

        <img
          className="h-12 cursor-pointer hover:scale-105 transform transition-transform hover:shadow-lg hover:shadow-white/20 rounded-lg"
          src="/PlayStore Png.png"
          alt="Playstore Logo"
        />
      </div>

      {/* Mobile Menu - Background color based on scroll */}
      {toggle && (
        <div
    className={`absolute top-[80px] left-0 w-full
    text-white flex flex-col items-center space-y-4 py-5
    md:hidden transition-all duration-300
    bg-black/50 backdrop-blur-md`}
  >
          {navbarData.map((link, index) => (
            <Link
              key={index}
              className="w-full text-center py-3 hover:bg-purple-700 cursor-pointer font-medium text-lg transition-all hover:pl-4"
              to={link.href}
              onClick={() => setToggle(false)}
            >
              {link.title}
            </Link>
          ))}

          <button
            className="w-3/4 border-2 border-white py-3 text-white hover:bg-white hover:text-purple-500 rounded-lg cursor-pointer font-medium mt-2 transition-all hover:scale-[1.02]"
            onClick={() => {
              setModalOpen(true);
              setToggle(false);
            }}
          >
            Login
          </button>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </nav>
  );
};

export default Navbar;