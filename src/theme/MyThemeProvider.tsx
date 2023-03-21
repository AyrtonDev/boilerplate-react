import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/globalStyles';
import theme from './ThemeDefault';

type props = {
  children: ReactNode;
};

const MyThemeProvider = ({ children }: props) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default MyThemeProvider;
