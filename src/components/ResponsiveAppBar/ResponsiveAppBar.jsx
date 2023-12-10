import * as React from 'react';
import { useNavigate } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;

const navItems = [
  {
    title: 'Home', link: '/'
  },{
    title: 'About', link: 'about'
  },{
    title: 'Services', link: 'services'
  }
]
  

function ResponsiveAppBar({ children }) {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontFamily: 'fantasy' }}>
        The Celestial Strawberry
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => navigate(item.link)}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const menuItemFontSizes = {
    fontSize: { xs: '1rem', md:'1.25rem' },
  }

  const appBarTitle = "The Celestial Strawberry";
  const appBarTitleStyle = { 
    flexGrow: 1, 
    letterSpacing: '0.1rem', 
    fontFamily: 'fantasy',
    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
    py: { xs: 1, sm: 2, md: 2.5 }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            =
          </IconButton>
          {/* AppBar Title for mobile and desktop */}
          <Typography
            component="div"
            sx={{ ...appBarTitleStyle, display: { xs: 'flex', sm: 'none' }, justifyContent: 'center' }} >
            {appBarTitle}
          </Typography>
          <Typography
            component="div"
            sx={{ ...appBarTitleStyle, display: { xs: 'none', sm: 'flex' }, flexWrap: 'nowrap' }}
          >
            {appBarTitle}
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {navItems.map(item => (
              <Button 
                key={item.title} 
                onClick={() => navigate(item.link)}
                sx={{ color: '#fff', fontFamily: 'fantasy', ...menuItemFontSizes }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        component={'nav'}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

        {children}

    </Box>
  );
}

export default ResponsiveAppBar;
