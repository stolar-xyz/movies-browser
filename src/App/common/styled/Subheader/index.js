import styled from 'styled-components';

const Subheader = styled.h2`
  font-size: 36px;
  font-weight: 600;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
    font-weight: 500;
  }
`;

export default Subheader;
