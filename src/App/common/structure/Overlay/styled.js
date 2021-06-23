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
      height: 278px;

      @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        height: 204px;
      }
    `}

  ${({ movie }) =>
    movie &&
    css`
      height: 471px;

      @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        height: 225px;
        min-width: 150px;
        border-radius: 5px 0 0 5px;
      }
    `}
`;
