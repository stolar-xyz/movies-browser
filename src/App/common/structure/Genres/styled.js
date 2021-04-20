import styled from 'styled-components';

export const StyledGenres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -4px;
  padding: 0;
  list-style: none;
`;

export const Genre = styled.li`
  background: #e4e6f0;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 5px;
  margin: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;
