import * as React from 'react';
import { Route, Routes, useNavigate} from "react-router-dom";

import IntroSection from './sections/IntroSection';
import LandingPage from './pages/LandingPage/LandingPage';
import Layout from './pages/Layout/Layout';
import AboutPage from './pages/AboutPage/AboutPage';

export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

