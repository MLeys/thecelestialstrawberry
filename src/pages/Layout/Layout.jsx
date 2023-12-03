import { Outlet } from "react-router-dom";
import { useEffect, useContext} from "react";

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