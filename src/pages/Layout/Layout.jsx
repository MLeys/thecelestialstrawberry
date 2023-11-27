import { Outlet } from "react-router-dom";
import { useEffect, useContext} from "react";

import Box from "@mui/material/Box";

import TopMenu from "../../components/TopMenu/TopMenu";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";

function Layout() {


  useEffect(() => {
  }, []); 

  return (
    <Box width={'100dvw'} minHeight={'100dvh'} bgcolor={'white'} >
      <ResponsiveAppBar >
          <Outlet />
          
      </ResponsiveAppBar>
    </Box> 
  )
}

export default Layout;