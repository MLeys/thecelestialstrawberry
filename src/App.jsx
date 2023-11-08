import { useState } from 'react'
import * as React from 'react';
import { Route, Routes, useNavigate} from "react-router-dom";


import LandingPage from './pages/LandingPage/LandingPage';

export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={navigate('/')} />
       
    
    </Routes>
  );
};
