// components/layout/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Customize your primary color here
    },
    secondary: {
      main: '#dc004e', // Customize your secondary color here
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Use custom fonts
  },
});

export default theme;
