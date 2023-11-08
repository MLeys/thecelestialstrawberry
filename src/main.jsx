import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import './index.css';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
    
  </React.StrictMode>,
)
