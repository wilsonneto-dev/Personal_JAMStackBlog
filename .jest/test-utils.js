import { render } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import defaultTheme from 'styles/themes/default';

const WithTheme = ({ children }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export const renderWithTheme = (ui, options) =>
  render(ui, { wrapper: WithTheme, ...options });
