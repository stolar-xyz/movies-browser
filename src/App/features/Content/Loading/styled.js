import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  width: 12vw;
  height: 12vw;
  border-radius: 50%;
  border: 10px solid #dddeee;
  border-top-color: #000000;
  animation: ${spin} 1s ease-in-out infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    border-width: 5px;
  }
`;
