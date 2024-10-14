import * as React from 'react';
import { useNavigate } from "react-router-dom";
import theme from '../../theme';

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
import ImageIcon from '../ImageIcon/ImageIcon';

const appBarTitle = "The Celestial Strawberry";
const drawerWidth = 290;
const logo = 'logos/tcs_logo.png';

const logoSize = 56;

const navItems = [
  {
    title: 'Home', link: '/'
  },{
    title: 'About', link: '/about'
  },{
    title: 'Services', link: '/services'
  }
]
  

function ResponsiveAppBar({ children }) {
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box bgcolor={theme.palette.primary.light} height={'100%'} onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <ImageIcon size={logoSize * 3} src={logo}/>
      <Typography variant="h4" sx={{ my: 2, fontFamily: 'fantasy', fontWeight: 900 }}> {appBarTitle} </Typography>
      <Divider />
      <List sx={{ mt: 3}}>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding  >
            <ListItemButton sx={{ textAlign: 'center'}} onClick={() => navigate(item.link)}>
              <ListItemText  >
                <Typography variant='h5' sx={{backgroundColor: theme.palette.secondary.main, borderRadius: '10px', p: 2}} >
                  {item.title}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const menuItemFontSizes = {fontSize: { xs: '1rem', md:'1.4rem' } }
 
  const appBarTitleStyle = { 
    display: 'flex',
    flexGrow: 1, 
    flexWrap: 'nowrap',

    letterSpacing: { xs: '0rem', md:'0.1rem' },
    fontFamily: 'fantasy',
    fontSize: { xs: '2rem', sm: '2rem', md: '2.5rem' },
    my: { xs: 2, sm: 2, md: 1.5 },
    py: { xs: 1, sm: 1, md: 2 },
    mx: { xs: 0, md: 1.5 },
    px: { xs: 0, md: 2.5 },
    justifyContent: 'center',
  };

  return (
    <Box  sx={{ mt: { xs: 13, sm: 8, md: 13 } }} >
      <CssBaseline />
      <AppBar component="nav" sx={{ mb: 3 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { sm: 'none' } }}
          >
            =
          </IconButton>

          <Typography sx={{ ...appBarTitleStyle, display: { xs: 'flex', sm: 'none' }, maxWidth: '80%' }}> {appBarTitle} </Typography>
          <Button sx={{m: 0, p: 0}} onClick={() => navigate('/')} >
            <ImageIcon size={{xs: logoSize, sm: logoSize+10,  md: logoSize+25, lg: logoSize+50 }} src={logo}/>

          </Button>

          <Typography sx={{ ...appBarTitleStyle, display: { xs: 'none', sm: 'flex' }, flexWrap: 'nowrap', maxWidth: '80%' }}> {appBarTitle} </Typography>

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
          keepMounted: true, 
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
