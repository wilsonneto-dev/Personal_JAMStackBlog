import styled from 'styled-components';

export const Wrapper = styled.header`
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.featuredBackground};
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: min(${(props) => props.theme.sizes.box}, 100%);
  padding: 0 1rem;
  margin: 0 auto;
  height: 100%;
`;

export const Logo = styled.img`
  height: 4rem;
`;

export const SocialIcon = styled.a`
  display: inline-block;
  img {
    height: 1.6rem;
    margin-left: 0.5rem;
  }
`;
