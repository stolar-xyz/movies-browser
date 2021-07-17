import styled, { css } from 'styled-components';

export const StyledImage = styled.img`
  background: #c4c4c4;
  width: ${({ movie, person }) => (movie || person) && '100%'};
  border-radius: ${({ movie, person }) => (movie || person ? '5px 5px 0 0' : '5px')};
  object-fit: cover;

  ${({ movie }) =>
    movie &&
    css`
      height: 471px;

      @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        height: 225px;
        width: 150px;
        border-radius: 5px 0 0 5px;
      }
    `}

  ${({ person }) =>
    person &&
    css`
      height: 303px;

      @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        height: 204px;
      }
    `}

    ${({ search }) =>
    search &&
    css`
      width: 100px;
      height: 150px;
      margin-right: 16px;
    `}

    ${({ tile }) =>
    tile &&
    css`
      margin-right: 36px;
      float: left;
      width: 30%;
      height: 100%;

      @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        margin-right: 16px;
        min-width: 130px;
      }
    `}
`;
