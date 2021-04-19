import styled from 'styled-components';

const Container = styled.div`
  max-width: 1400px;
  margin: 56px auto 0;
  padding: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 24px auto 32px;
  }
`;

export default Container;
