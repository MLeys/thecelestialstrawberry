import React from "react";
import { Outlet } from "react-router-dom";

import Box from '@mui/material/Box';


import Footer from "../../components/Footer/Footer";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";

function Layout() {
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