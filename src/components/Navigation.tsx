import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Instagram, MessageCircle } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Studio", path: "/about" },
  { label: "Work", path: "/portfolio" },
  { label: "Expertise", path: "/services" },
  { label: "Contact", path: "/contact" },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-neutral-800" : "bg-transparent py-8"}`}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 items-center">
          {/* Left: Desktop Nav Items */}
          <div className="hidden md:flex justify-start space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-300 hover:text-gray-400
                   after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-[-4px] after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left
                   ${isActive ? "text-white after:scale-x-100" : "text-neutral-400"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Center: Logo */}
          <div className="flex justify-start md:justify-center">
            <NavLink
              to="/"
              className="text-2xl font-bold tracking-tighter uppercase font-sans z-50 text-white group relative"
            >
              DYUTHI
              <span className="text-neutral-500 group-hover:text-white transition-colors">
                .
              </span>
            </NavLink>
          </div>

          {/* Right: Social Icons & Mobile Burger */}
          <div className="flex justify-end items-center">
            {/* Desktop Socials */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="text-white hover:text-neutral-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="text-white hover:text-neutral-400 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} strokeWidth={1.5} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-50 text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}
      >
        {navItems.map((item, idx) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="text-4xl font-serif mb-8 text-white hover:tracking-widest transition-all duration-300"
            style={{ transitionDelay: `${idx * 50}ms` }}
          >
            {item.label}
          </NavLink>
        ))}
        {/* Socials in Mobile Menu */}
        <div
          className="flex space-x-8 mt-8 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="#"
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a
            href="#"
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </>
  );
};
