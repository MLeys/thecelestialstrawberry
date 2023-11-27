import { useState } from 'react'
import * as React from 'react';
import { Route, Routes, useNavigate} from "react-router-dom";

import IntroSection from './sections/IntroSection';
import LandingPage from './pages/LandingPage/LandingPage';
import IntroSection from './sections/IntroSection';

export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<IntroSection />} >

        
      </Route>
    
    </Routes>
  );
};
