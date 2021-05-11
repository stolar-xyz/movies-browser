import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 10px solid #dddeee;
  border-top-color: #000000;
  animation: ${spin} 1s ease-in-out infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 80px;
    height: 80px;
    border-width: 5px;
  }
`;
