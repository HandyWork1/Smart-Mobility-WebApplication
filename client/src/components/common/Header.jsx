import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import LogoutModal from '../modals/LogoutModal';

function Header({ hasBackgroundImage, isAuthenticated }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  // Handle transparent navbar
  const handleScroll = () => {
    const header = document.querySelector('header');
    if (header) {
      const scrolled = window.scrollY;
      if (scrolled > 50 && hasBackgroundImage) {
        header.classList.add('bg-green-900', 'opacity-90', 'transition', 'ease-in-out', 'duration-300');
      } else {
        header.classList.remove('bg-green-900', 'opacity-90', 'transition', 'ease-in-out', 'duration-300');
      }
    }
  };

  // Logout Handling
  const handleLogout = () => {
    // Logout logic, calling the logout function from your context
    logout();
    setLogoutModalOpen(false);

    // Redirect to the home page or another appropriate page after logout
    navigate('/');
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

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <header className="sticky top-0 z-10">
      <div className={`flex items-center justify-between h-16 text-white ${hasBackgroundImage ? 'bg-transparent' : 'bg-green-600'}`}>
        <div className="flex items-center ml-8 space-x-4">
          <i className="fas fa-home text-xl"></i>
          <h1 className="text-2xl font-bold">Smart Mobility</h1>
        </div>

        <nav className="hidden md:flex items-center justify-end pr-8 space-x-4">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/route-planning" className="nav-link">Route Planning</Link>
          <Link to="/public-transportation" className="nav-link">Public Transportation</Link>
          <Link to="/carbon-footprint" className="nav-link">Carbon Footprint</Link>

          {isAuthenticated ? (
            <div className="relative inline-block text-left">
              <button className="nav-link" onClick={toggleProfileDropdown}>
                <i className="fas fa-user-circle text-xl"></i>
              </button>
              {isProfileDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Link to="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleProfileDropdown}>
                      Account
                    </Link>
                    <button
                      className="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        toggleProfileDropdown();
                        setLogoutModalOpen(true);
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link to="/login" className="nav-link">Login</Link>
            </div>
          )}
        </nav>

        <div className="md:hidden flex items-center mx-3">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-route'} text-xl`}></i>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 w-full h-full bg-green-800 bg-opacity-90 z-50">
            <div className="flex justify-end p-4">
              <button
                className="text-white focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>

            <div className="flex flex-col items-center mt-16 space-y-4">
              <Link to="/" className="mobile-nav-link" onClick={toggleMobileMenu}>Home</Link>
              <Link to="/route-planning" className="mobile-nav-link" onClick={toggleMobileMenu}>Route Planning</Link>
              <Link to="/public-transportation" className="mobile-nav-link" onClick={toggleMobileMenu}>Public Transportation</Link>
              <Link to="/carbon-footprint" className="mobile-nav-link" onClick={toggleMobileMenu}>Carbon Footprint</Link>

              {isAuthenticated ? (
                <>
                  <Link to="/account" className="mobile-nav-link" onClick={toggleMobileMenu}>Account</Link>
                  <button
                    className="mobile-nav-link w-full"
                    onClick={() => {
                      toggleMobileMenu();
                      setLogoutModalOpen(true);
                    }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col space-y-4">
                  <Link to="/login" className="mobile-nav-link" onClick={toggleMobileMenu}>Login</Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onRequestClose={() => setLogoutModalOpen(false)}
        onLogout={handleLogout}
      />
    </header>
  );
}

export default Header;
