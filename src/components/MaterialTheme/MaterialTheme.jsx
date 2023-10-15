import { createTheme } from "@mui/material";

function MaterialTheme() {
    let theme = createTheme({
      palette: {
        primary: {
          main: '#B8CA30'
        },
        secondary: {
          main: '#FFEBC8',
        },
        error: {
          main: '#ff312e',
        },
        warning: {
          main: '#BF6900',
        },
        info: {
          main: '#3A3335',
        },
        success: {
          main: '#276FBF'
        },
        contrastThreshold: 4.5,
        tonalOffset: 0.4,
      },
      typography: {
        fontFamily: [
          'ui-monospace',
          'Menlo',
          'Monaco',
          '"Cascadia Mono"',
          '"Segoe UI Mono"',
          '"Roboto Mono"',
          '"Oxygen Mono"',
          '"Ubuntu Monospace"',
          '"Source Code Pro"',
          '"Fira Mono"',
          '"Droid Sans Mono"',
          '"Courier New"',
          'monospace',
        ].join(','),
    }
  });
  
    theme = createTheme(theme, {
      // Custom colors created with augmentColor 
      palette: {
        pink: theme.palette.augmentColor({
          color: {
            main: '#FFEBC8',
          },
          name: 'background',
        }),
      },
    });
    return theme;

    

  }
  
export default MaterialTheme  