import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Article = styled.article`
  font-family: 'Roboto', sans-serif;
  width: 100%;
  min-width: 25rem;
  max-width: 35rem;
  display: inline-block;
  padding: 0 0.5rem;
  margin: 0 auto;
  margin-bottom: 4rem;

  @media (max-width: 600px) {
    width: 100%;
    margin: 0 auto 4rem auto;
    max-width: 35rem;
  }

  header {
    img {
      width: 100%;
      padding: 0;
      margin: 0 0 0.5rem;
      border-radius: ${({ theme }) => theme.sizes.borderRadius};
    }

    h1 {
      font-size: 2rem;
      font-weight: normal;
      transition: all 0.25s;
      color: ${({ theme }) => theme.colors.textDarken};
    }
  }

  &:hover {
    header h1 {
      color: ${({ theme }) => theme.colors.featuredBackground};
    }
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5rem;
    padding: 1.5rem 0;
  }

  footer {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 1.5rem;

    strong {
      color: ${({ theme }) => theme.colors.textDarken};
    }
  }
`;
