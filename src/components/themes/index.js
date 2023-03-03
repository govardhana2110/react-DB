import { createTheme } from '@mui/material/styles';

// import NexaUrl from '/static/fonts/Nexa.ttf';

const nexa = {
  fontFamily: 'Nexa1',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  src: `
    local('TitillumWeb'),
    local('TitillumWeb-SemiBold'),
    url('/static/fonts/Nexa-Book.ttf') format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: ['Nexa'],
  },
  palette: {
    primary: {
      main: '#163E63',
    },
    secondary: {
      main: '#3471AD',
    },
    error: {
      main: '#FF6347',
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [nexa],
      },
    },
  },
});

export default theme;
