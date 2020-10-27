import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/global.ts';
import theme from '../src/styles/themes/default';

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  )
];
