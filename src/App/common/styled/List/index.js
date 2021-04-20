import styled, { css } from 'styled-components';

const List = styled.ul`
  display: grid;
  grid-gap: 24px;
  justify-content: center;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-gap: 16px;
    margin: 12px 0 0;
  }

  ${({ movies }) =>
    movies &&
    css`
      grid-template-columns: repeat(auto-fill, 314px);
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  }

  ${({ people }) =>
    people &&
    css`
      grid-template-columns: repeat(auto-fill, 185px);
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: repeat(auto-fill, 136px);
  }
`;

export default List;
