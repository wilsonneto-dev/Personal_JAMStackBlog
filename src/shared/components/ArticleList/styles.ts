import styled from 'styled-components';

export const Wrapper = styled.main`
  margin: 0 auto;
  width: min(${(props) => props.theme.sizes.box}, 100%);
  padding: 2rem 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
