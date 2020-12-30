import styled, { css, DefaultTheme } from 'styled-components';

const LinkWrapperThemeModifiers = {
  light: (theme: DefaultTheme) => css`
    fill: ${theme.colors.featuredBackground};
  `,
  dark: (theme: DefaultTheme) => css`
    fill: ${theme.colors.featuredBackgroundDarken};
  `
};

interface ILinkWrapperProps {
  themeColor: 'light' | 'dark';
}

export const LinkWrapper = styled.a<ILinkWrapperProps>`
  ${({ theme, themeColor = 'light' }) => css`
    display: inline-block;
    height: 1.5rem;

    svg {
      ${themeColor === 'light' && LinkWrapperThemeModifiers.light(theme)}
      ${themeColor === 'dark' && LinkWrapperThemeModifiers.dark(theme)}
    }
  `}
`;
