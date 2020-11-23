import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.featuredBackgroundDarken};
  color: ${(props) => props.theme.colors.featuredFontColor};
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;

  p {
    text-align: center;
    padding: 0.5rem 1rem;
  }
`;
