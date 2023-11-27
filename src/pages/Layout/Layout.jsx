import { Outlet } from "react-router-dom";
import { useEffect, useContext} from "react";

import Box from "@mui/material/Box";

import TopMenu from "../../components/TopMenu/TopMenu";


function Layout() {
  const ctx = useContext(SkillsContext)

  useEffect(() => {
  }, []); 

  return (
    <Box width={'100dvw'} minHeight={'100dvh'} bgcolor={'blueGrayLight.light'} >
      <TopMenu >
          <Outlet />
      </TopMenu>
    </Box> 
  )
}

export default Layout;