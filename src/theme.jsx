import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar } from '@mui/material';

// Define a more elaborate color palette
const customPalette = {
  primary: {
    light: '#6272a4', // Twilight lavender, reminiscent of dusk and dawn
    main: '#191d3a', // Deep midnight blue for the vast night sky
    dark: '#100e23', // The dark abyss of space
    contrastText: '#e0e0e0', // Soft moonlight contrast
  },
  secondary: {
    light: '#ff79c6', // Light pink of a nebula
    main: '#bd93f9', // Amethyst purple for spiritual intuition
    dark: '#4b0082', // Deep indigo of the deep universe
    contrastText: '#f8f8f2', // Bright stars against the night sky
  },
  error: {
    light: '#e57373', // Soft red for a gentler warning
    main: '#ff5555', // Fiery comet red
    dark: '#d32f2f', // Dark red of a lunar eclipse
    contrastText: '#ffffff', // Visibility against the red
  },
  warning: {
    light: '#ffb86c', // Warmth of a guiding light
    main: '#ff9800', // The burning orange of a guiding star
    dark: '#ff5722', // The dusky tones of a sunset
    contrastText: '#000000', // Readability on warning colors
  },
  info: {
    light: '#8be9fd', // Clear skies
    main: '#00bcd4', // The color of the daytime sky
    dark: '#0097a7', // Depth of the ocean reflecting the sky
    contrastText: '#000000', // Against the clear sky
  },
  success: {
    light: '#50fa7b', // New life green
    main: '#2ecc71', // The lush green of a vibrant earth
    dark: '#1b5e20', // Deep forest green, where the earth's energy gathers
    contrastText: '#ffffff', // To stand out on success color
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
};

const customTypography = {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
}

// Create a custom theme
const theme = createTheme({
  palette: customPalette,
  components: {
    MuiAppBar: {
      defaultProps: {
        
      },
      styleOverrides: {
        root: {
          // boxShadow: 'none', // Remove shadow for a flat mystical feel
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '0 !important', // Override min-height for Toolbar
          '@media (min-width:600px)': {
            minHeight: '0 !important', // Override for specific media query
          },
        },
      },
    },
    // Define other component overrides as necessary
  },
});

export default theme;