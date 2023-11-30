import React, { createContext, useState, useContext, useEffect } from 'react';


// Create a new context for authentication
export const AuthContext = createContext();

// AuthProvider component to manage authentication state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate authentication check on mount (replace with your actual authentication logic)
  

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to consume the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
