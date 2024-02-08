import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header({ hasBackgroundImage }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    const header = document.querySelector('header');
    if (header) {
      const scrolled = window.scrollY;
      if (scrolled > 50 && hasBackgroundImage) {
        header.classList.add('bg-green-900');
        header.classList.add('opacity-90');
      } else {
        header.classList.remove('bg-green-900');
        header.classList.remove('opacity-90');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasBackgroundImage]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-10">
      <div className={`flex items-center justify-between h-16 text-white transition duration-500 ease-in-out ${hasBackgroundImage ? 'bg-transparent' : 'bg-green-900'}`}>
        <div className="flex items-center ml-8">
          <i className="fas fa-home text-xl mr-2"></i>
          <h1 className="text-2xl font-bold">Smart Mobility</h1>
        </div>

        <nav className="hidden md:flex items-center justify-end pr-8">
          <Link to="/" className="text-lg text-white hover:text-gray-300 mx-4">
            Home
          </Link>
          <Link to="/route-planning" className="text-lg text-white hover:text-gray-300 mx-4">
            Route Planning
          </Link>
          <Link to="/public-transportation" className="text-lg text-white hover:text-gray-300 mx-4">
            Public Transportation
          </Link>
          <Link to="/profile" className="text-lg text-white hover:text-gray-300 mx-4">
            Profile
          </Link>
          <Link to="/logout" className="text-lg text-white hover:text-gray-300 mx-4">
            Logout
          </Link>
        </nav>

        <div className="md:hidden flex items-center mx-3">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <i className="fas fa-route text-xl"></i>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 w-full h-full bg-green-500 bg-opacity-90 z-50">
            <div className="flex justify-end p-4">
              <button
                className="text-white focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>

            <div className="flex flex-col items-center mt-16">
              <Link to="/" className="text-xl text-white hover:text-gray-300 mb-4">
                Home
              </Link>
              <Link to="/route-planning" className="text-xl text-white hover:text-gray-300 mb-4">
                Route Planning
              </Link>
              <Link to="/public-transportation" className="text-xl text-white hover:text-gray-300 mb-4">
                Public Transportation
              </Link>
              <Link to="/profile" className="text-xl text-white hover:text-gray-300 mb-4">
                Profile
              </Link>
              <Link to="/logout" className="text-xl text-white hover:text-gray-300 mb-4">
                Logout
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
