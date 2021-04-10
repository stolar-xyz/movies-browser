import styled from 'styled-components';

export const StyledMovies = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 314px);
  grid-gap: 24px;
  justify-content: center;
  margin: 24px 0 40px;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(261px, 1fr));
  }
`;
