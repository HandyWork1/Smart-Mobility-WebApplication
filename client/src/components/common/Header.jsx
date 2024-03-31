import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import LogoutModal from '../modals/LogoutModal';

function Header({ hasBackgroundImage, isAuthenticated }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('');
  const { logout } = useAuth();
  const { userDetails } = useAuth();
  const location = useLocation();
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

  useEffect(() => {
    // Extract the pathname from the location object
    const { pathname } = location;
    // Set the activeNavItem state based on the current pathname
    setActiveNavItem(pathname);
  }, [location]);

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
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className={`flex items-center justify-between h-16 text-white ${hasBackgroundImage ? 'bg-transparent' : 'bg-green-600'}`}>
        <div className="flex items-center ml-8 space-x-4">
          <i className="fas fa-home text-xl"></i>
          <h1 className="text-xl font-bold">Smart Mobility</h1>
        </div>

        <nav className="hidden md:flex items-center justify-end pr-8 space-x-4">
          <NavLink to="/" className={`nav-link hover:text-green-300 transition duration-300 transform hover:scale-105 ${activeNavItem === '/' ? 'text-green-300' : 'text-white'}`} activeClassName="text-green-300" onClick={() => setActiveNavItem('/')}>Home</NavLink>
          <NavLink to="/challenges-tips" className={`nav-link hover:text-green-300 transition duration-300 transform hover:scale-105 ${activeNavItem === '/challenges-tips' ? 'text-green-300' : 'text-white'}`} activeClassName="text-green-300" onClick={() => setActiveNavItem('/challenges-tips')}>Challenges/Tips</NavLink>
          <NavLink to="/carbon-footprint" className={`nav-link hover:text-green-300 transition duration-300 transform hover:scale-105 ${activeNavItem === '/carbon-footprint' ? 'text-green-300' : 'text-white'}`} activeClassName="text-green-300" onClick={() => setActiveNavItem('/carbon-footprint')}>Carbon Footprint</NavLink>
          <NavLink to="/route-planning" className={`nav-link hover:text-green-300 transition duration-300 transform hover:scale-105 ${activeNavItem === '/route-planning' ? 'text-green-300' : 'text-white'}`} activeClassName="text-green-300" onClick={() => setActiveNavItem('/route-planning')}>Route Planning</NavLink>

          {isAuthenticated ? (
            <div className="relative inline-block text-left ml-10">
              <button 
                className="nav-link flex items-center transition duration-300 transform hover:scale-105" 
                onClick={toggleProfileDropdown}
              >
                <i className="fas fa-user-circle text-xl mr-2"></i>
                <span className="text-base">{userDetails.fullName}</span>
                {/* Arrow icon pointing down */}
                <i className="fas fa-chevron-down ml-2"></i>
              </button>
              {isProfileDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <NavLink to="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleProfileDropdown}>
                      <i className="fas fa-user-circle px-2"></i>
                        Account
                    </NavLink>
                    <button
                      className="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        toggleProfileDropdown();
                        setLogoutModalOpen(true);
                      }}
                    >
                      <i className="fas fa-sign-in-alt px-2"></i>
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex space-x-4">
              <NavLink to="/login" className="nav-link hover:text-green-300 transition duration-300 transform hover:scale-105">Login</NavLink>
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
                className="text-white focus:outline-none hover:text-green-300 transition duration-300"
                onClick={toggleMobileMenu}
              >
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>

            <div className="flex flex-col items-center mt-16 space-y-4">
              <NavLink to="/" className="mobile-nav-link hover:text-green-300 transition duration-300 transform hover:scale-105" activeClassName="text-green-300" onClick={toggleMobileMenu}>Home</NavLink>
              <NavLink to="/challenges-tips" className="mobile-nav-link hover:text-green-300 transition duration-300 transform hover:scale-105" activeClassName="text-green-300" onClick={toggleMobileMenu}>Challenges/Tips</NavLink>
              <NavLink to="/carbon-footprint" className="mobile-nav-link hover:text-green-300 transition duration-300 transform hover:scale-105" activeClassName="text-green-300" onClick={toggleMobileMenu}>Carbon Footprint</NavLink>
              <NavLink to="/route-planning" className="mobile-nav-link hover:text-green-300 transition duration-300 transform hover:scale-105" activeClassName="text-green-300" onClick={toggleMobileMenu}>Route Planning</NavLink>
              {isAuthenticated ? (
                <>
                  <NavLink to="/account" className="mobile-nav-link hover:text-green-300 transition duration-300 focus:outline-none" onClick={toggleMobileMenu}>
                    <i className="fas fa-user-circle px-2"></i>
                      Account
                  </NavLink>
                  <button
                    className="mobile-nav-link w-full hover:text-green-300 transition duration-300 transform hover:scale-105 focus:outline-none"
                    onClick={() => {
                      toggleMobileMenu();
                      setLogoutModalOpen(true);
                    }}
                  >
                    <i className="fas fa-sign-in-alt px-2"></i>
                      Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col space-y-4">
                  <NavLink to="/login" className="mobile-nav-link" onClick={toggleMobileMenu}>Login</NavLink>
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
