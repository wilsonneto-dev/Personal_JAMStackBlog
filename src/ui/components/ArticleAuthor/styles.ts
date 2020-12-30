import styled, { css } from 'styled-components';

export const Wrapper = styled.address`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    border: 1px solid ${theme.colors.textLight};
    border-width: 1px 0 1px;
  `}
`;

export const Avatar = styled.div`
  height: 4rem;
  margin-right: 0.5rem;

  img {
    height: 100%;
    border-radius: 50%;
  }
`;

export const Infos = styled.div`
  flex: 1;
`;

export const SocialLinksSection = styled.div``;

export const SocialIcon = styled.a``;
