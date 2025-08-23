import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Business", path: "/business" },
    { name: "Entertainment", path: "/entertainment" },
    { name: "General", path: "/general" },  
    { name: "Health", path: "/health" },
    { name: "Science", path: "/science" },
    { name: "Sports", path: "/sports" },
    { name: "Technology", path: "/technology" },
  ];

  const isActiveLink = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const getDesktopLinkClasses = (path) => {
    const baseClasses = "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300";
    
    if (isActiveLink(path)) {
      return `${baseClasses} text-white bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20`;
    }
    
    return `${baseClasses} text-gray-300 hover:text-white hover:bg-white/10`;
  };

  const getMobileLinkClasses = (path) => {
    const baseClasses = "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300";
    
    if (isActiveLink(path)) {
      return `${baseClasses} text-white bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600/30`;
    }
    
    return `${baseClasses} text-gray-300 hover:text-white hover:bg-white/10`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 backdrop-blur-lg border-b border-slate-700/50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all duration-300"
            >
              NewsNow
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={getDesktopLinkClasses(link.path)}
                  onClick={closeNavbar}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
           <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 relative flex flex-col justify-center">
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? 'rotate-45' : '-translate-y-1.5'
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? '-rotate-45' : 'translate-y-1.5'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-lg border-t border-slate-700/50">
          {navLinks.map((link) => (
            <Link
              key={`mobile-${link.name}`}
              to={link.path}
              className={getMobileLinkClasses(link.path)}
              onClick={closeNavbar}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;