import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Recommendations from './pages/Recommendations';
import Store from './pages/Store';
import Resources from './pages/resources';
import Contact from './pages/Contact';

// Theme configuration based on EcoLix+ logo colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#424242', // Dark gray
      light: '#616161',
      dark: '#212121',
    },
    secondary: {
      main: '#FFC107', // Yellow from sun in logo
      light: '#FFD54F',
      dark: '#FFA000',
    },
    accent: {
      main: '#8D6E63', // Brown from soil in logo
      light: '#A1887F',
      dark: '#6D4C41',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#E0E0E0',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
  },
  typography: {
    fontFamily: '"Baloo 2", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #424242, #212121)',
          position: 'relative'
        }}
      >
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;