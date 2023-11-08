
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';

import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


const pages = ['Products', 'Schedule', 'About'];


function TopMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" >
      <Toolbar sx={{my: .5, p: 0, minHeight: '20px !important'}}>
        {/* MMMMMMMMMMMM */}
        <Typography
          variant='h4'
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
        {/* MMMMMMMMMMMM */}

        {/* SX SX SX SX */}
        <Typography
          variant="h6"
          noWrap

          flexGrow={1}
          letterSpacing={'.1rem'}
          fontWeight={800}
          display={{ xs: 'flex', md: 'none' }}
          text
        >
         Logo 
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            sx={{m: 0, p: 0, height:40}}
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

        {/* SX SX SX SX */}

      </Toolbar>
    </AppBar>
  );
}
export default TopMenu;