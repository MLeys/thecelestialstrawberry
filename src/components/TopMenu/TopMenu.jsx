
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CssBaseline from '@mui/material/CssBaseline';

const pages = ['Products', 'Readings', 'Laura'];

function TopMenu({ children }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box  sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="static" >
        <Toolbar sx={{my: .5, minHeight: '20px !important'}}>
          <Typography
            variant="h4"
            mt={1}
            noWrap
            fontFamily={'fantasy'}
            flexGrow={1}
            letterSpacing={'.1rem'}
            fontWeight={800}
            display={{xs: 'none', md: 'flex'}}
          >
          The Celestial Strawberry
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                color='inherit'
              >
                {page} 
              </Button>
            ))}
          </Box>

          <Typography
            variant="h6"
            noWrap
            flexGrow={1}
            letterSpacing={'.1rem'}
            fontWeight={800}
            display={{ xs: 'flex', md: 'none' }}
          >
          Logo 
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              color={'primary.light'}
              
              sx={{color: 'primary.contrastText', height: 60}}
              size="large"
              onClick={handleOpenNavMenu}
            >
              Menu
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box width={'100%'}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
export default TopMenu;