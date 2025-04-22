import { theme } from "../components/themes/Gray/Gray";

export const theme = {
    space: [0, 4, 8, 16, 32, 64],
    colors: {
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
    },
    variants: {
      iconButton: {
        primary: {
          backgroundColor: '#e2e8f0',
          color: '#1a202c',
        },
        contrast: {
          backgroundColor: '#1a202c',
          color: '#edf2f7',
        },
      },
      header: {
        primary: {
          backgroundColor: '#4a5568',
          color: '#f7fafc',
        },
        contrast: {
          backgroundColor: '#2d3748',
          color: '#fff',
        },
      },
    },
  };