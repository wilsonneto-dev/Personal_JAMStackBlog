import styled from 'styled-components';

export const Wrapper = styled.footer`
  background-color: ${(props) => props.theme.colors.featuredBackground};
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(${(props) => props.theme.sizes.box}, 100%);
  padding: 6rem 0 8rem;
  margin: 0 auto;
  height: 100%;
`;

export const Logo = styled.img`
  height: 4rem;
`;

export const SocialLinks = styled.div`
  margin-top: 1rem;
`;

export const SocialIcon = styled.a`
  display: inline-block;
  img {
    height: 1.6rem;
    margin-left: 0.5rem;
  }
`;
