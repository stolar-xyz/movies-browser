import styled, { css } from 'styled-components';

export const StyledImage = styled.img`
  background: #c4c4c4;
  width: ${({ search }) => (search ? '100px' : '100%')};
  border-radius: ${({ search }) => (search ? '5px' : '5px 5px 0 0;')};
  object-fit: cover;

  ${({ movie }) =>
    movie &&
    css`
      height: 470px;

      @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        height: 225px;
        width: 150px;
        border-radius: 5px 0 0 5px;
      }
    `}

  ${({ person }) =>
    person &&
    css`
      height: 300px;

      @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        height: 204px;
      }
    `}

    ${({ search }) =>
    search &&
    css`
      height: 150px;
      margin-right: 16px;
    `}
`;
