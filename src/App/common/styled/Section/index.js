import styled from 'styled-components';

const Section = styled.section`
  max-width: 1368px;
  margin: 56px auto 0;
  padding: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 24px auto 0;
  }
`;

export default Section;
