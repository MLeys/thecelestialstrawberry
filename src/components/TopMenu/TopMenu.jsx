import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';


const pages = ['Products', 'Readings', 'Laura'];

export default function TopMenu({ children }) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const toggleNavMenu = (event) => {
    if (event) {
      setAnchorElNav(event.currentTarget);
    } else {
      setAnchorElNav(null);
    }
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, mt: 1, letterSpacing: '.1rem', fontWeight: 800, fontFamily: 'fantasy' }}>
            The Celestial Strawberry
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page} onClick={() => toggleNavMenu()} color="inherit">
                {page}
              </Button>
            ))}
          </Box>
          <Typography variant="h6" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, letterSpacing: '.1rem', fontWeight: 800 }}>
            Logo
          </Typography>
          <IconButton color="primary" onClick={toggleNavMenu} sx={{ color: 'primary.contrastText', height: 60 }}>
            Menu
          </IconButton>
          <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left' }} open={Boolean(anchorElNav)} onClose={() => toggleNavMenu()}>
            {pages.map((page) => (
              <MenuItem key={page} onClick={() => toggleNavMenu()}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
      
      <Grid container component="main" sx={{ flexGrow: 1, marginTop: 50, pt: 50, p: 30}}>
        <Toolbar />
        {children}
      </Grid>
    </>
  );
};
