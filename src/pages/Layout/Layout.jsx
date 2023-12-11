import React, {useEffect} from "react";
import { Outlet, useLocation } from "react-router-dom";

import Box from '@mui/material/Box';

import Footer from "../../components/Footer/Footer";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";

function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Box component={'main'} display={'flex'} flexDirection={'column'} >
      <ResponsiveAppBar >
        <Outlet />
      </ResponsiveAppBar>
      <Footer />
    </Box> 
  )
}

export default Layout;