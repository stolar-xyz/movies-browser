import styled, { keyframes } from 'styled-components';

export const StyledLoading = styled.div`
  display: grid;
  place-items: center;
  height: calc(100vh - 133px);

  @media (max-width: ${({ theme }) => theme.mobileSmallMax}px) {
    height: calc(100vh - 165px);
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 10px solid #dddeee;
  border-color: #000000 transparent #000000 transparent;
  animation: ${spin} 1s ease-in-out infinite;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    width: 100px;
    height: 100px;
    border-width: 5px;
  }
`;
