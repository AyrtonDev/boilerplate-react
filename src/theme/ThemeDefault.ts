import { ThemeType } from './Theme.types';

const theme: ThemeType = {
  colors: {
    primary: '#000000',
    secondary: '#D95A88',
    error: '#ED173F',
    white: '#ffffff',
    gray: {
      100: '#F5F5F5',
      200: '#D2D2D2',
      300: '#A5A5A5',
      400: '#555555',
      500: '#e6e6e6',
      600: '#cecece',
      700: '#d9d9d9',
    },
  },
  fontSize: {
    xs: '1rem',
    heading4: '1.2rem',
    buttonTitle: '1.4rem',
    heading3: '1.6rem',
    lg: '1.8rem',
    xl: '2.4rem',
    heading2: '2rem',
    heading1: '2.8rem',
    xxl: '3.2rem',
  },
  fontFamily: {
    base: 'Poppins',
  },
  breakpoint: {
    sm: '450px',
    md: '768px',
    lg: '1170px',
    xl: '1440px',
  },
  spacing: {
    xSmall: '1.6rem',
    small: '2.4rem',
    medium: '2.8rem',
    xMedium: '4.6rem',
    big: '8.8rem',
    xBig: '1.57rem',
  },
};

export default theme;
