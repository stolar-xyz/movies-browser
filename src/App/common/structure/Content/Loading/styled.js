import styled, { keyframes } from 'styled-components';

export const StyledLoading = styled.div`
  display: grid;
  place-items: center;
  height: ${({ search }) => (search ? '100%' : 'calc(100vh - 133px)')};

  @media (max-width: ${({ theme }) => theme.mobileSmallMax}px) {
    height: ${({ search }) => !search && 'calc(100vh - 165px)'};
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  width: ${({ search }) => (search ? '10vh' : '15vh')};
  height: ${({ search }) => (search ? '10vh' : '15vh')};
  border-radius: 50%;
  border: 5px solid;
  border-color: ${({ search, theme }) =>
      search ? '#000000' : theme.color.text.primaryText}
    transparent;
  animation: ${spin} 1s ease-in-out infinite;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    border-width: 3px;
  }
`;
