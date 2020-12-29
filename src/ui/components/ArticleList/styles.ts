import styled from 'styled-components';

export const Wrapper = styled.main`
  margin: 0 auto;
  width: min(${(props) => props.theme.sizes.box}, 100%);
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-gap: 0.5rem;
`;
