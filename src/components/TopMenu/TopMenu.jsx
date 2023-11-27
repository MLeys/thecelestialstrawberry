import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Button, MenuItem, CssBaseline } from '@mui/material';

const pages = ['Products', 'Readings', 'Laura'];

function TopMenu({ children }) {
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
      <CssBaseline />
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
      <Toolbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
    </>
  );
}

export default TopMenu;
