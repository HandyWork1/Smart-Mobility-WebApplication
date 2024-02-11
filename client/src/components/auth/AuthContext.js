import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  // Check if user details exist in localStorage on component mount
  useEffect(() => {
    const storedUserDetails = localStorage.getItem('userDetails');

    if (storedUserDetails) {
      const parsedUserDetails = JSON.parse(storedUserDetails);
      setIsAuthenticated(true);
      setUserDetails(parsedUserDetails);
    }
  }, []);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUserDetails(userData);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserDetails(null);

    // Clear user details from localStorage on logout
    localStorage.removeItem('userDetails');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userDetails, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

