import styled from 'styled-components';

export const StyledSubheader = styled.h2`
  font-size: 36px;
  font-weight: 600;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;