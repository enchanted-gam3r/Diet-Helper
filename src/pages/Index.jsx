
import React from 'react';
import { Navigate } from 'react-router-dom';

const Index = () => {
  // Redirect to the landing page instead of "/"
  return <Navigate to="/home" replace />;
};

export default Index;
