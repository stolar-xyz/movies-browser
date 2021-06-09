import styled, { css } from 'styled-components';

export const StyledOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #c4c4c4;
  border-radius: 5px 5px 0 0;

  ${({ person }) =>
    person &&
    css`
      height: 260px;

      @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        height: 195px;
      }
    `}

  ${({ movie }) =>
    movie &&
    css`
      height: 100%;

      @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        height: 220px;
        min-width: 145px;
        border-radius: 5px 0 0 5px;
      }
    `}
`;
