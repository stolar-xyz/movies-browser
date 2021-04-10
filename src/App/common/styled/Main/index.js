import styled from 'styled-components';

const Main = styled.main`
  max-width: 1400px;
  margin: 56px auto 40px;
  padding: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 24px auto 32px;
  }
`;

export default Main;
