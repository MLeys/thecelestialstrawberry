import { Outlet } from "react-router-dom";
import { useEffect, useContext} from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import TopMenu from "../../components/TopMenu/TopMenu";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";

function Layout() {


  useEffect(() => {
  }, []); 

  return (
    <>
      <ResponsiveAppBar >
          <Outlet />
      </ResponsiveAppBar>
    </> 
  )
}

export default Layout;