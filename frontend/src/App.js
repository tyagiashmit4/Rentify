import React, { createContext, useState } from 'react';
import {  Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AddPropertyPage from './pages/AddPropertyPage';
import ViewProperties from './components/property/ViewProperties';
import PostPropertyForm from './components/form/PostPropertyForm';
import BuyerInteraction from './components/BuyerInteraction';
import Navbar from './components/navbar/Navbar';

// Create AuthContext
export const AuthContext = createContext();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Login function
  const login = () => {
    // Perform actual login logic (e.g., API call, authentication)
    // For demonstration purposes, we'll simply set isAuthenticated to true
    setIsAuthenticated(true);
  };

  // Logout function
  const logout = () => {
    // Perform actual logout logic (e.g., clearing tokens, state)
    // For demonstration purposes, we'll simply set isAuthenticated to false
    setIsAuthenticated(false);
  };

  return (
    <>
      {/* Provide AuthContext to components */}
      <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        <Navbar isLoggedIn={isAuthenticated} />
        <Routes>
          {/* Redirect authenticated users to home/dashboard */}
          {isAuthenticated ? (
            <Route path="/" element={<Navigate to="/home" />} />
          ) : (
            <>
              <Route exact path="/" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </>
          )}
          {/* Protected routes */}
          {isAuthenticated && (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/add-property" element={<AddPropertyPage />} />
              <Route path="/view-properties" element={<ViewProperties />} />
              <Route path="/post-property" element={<PostPropertyForm />} />
              <Route path="/buyer-interaction" element={<BuyerInteraction />} />
            </>
          )}
        </Routes>
      </AuthContext.Provider>
    </>
  );
};

export default App;
