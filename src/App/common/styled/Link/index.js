import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color.text.primaryText};
  transition: box-shadow 0.3s ease-out;

  &:hover {
    box-shadow: 0 6px 0 0 #fcd420;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
      box-shadow: ${({ movie }) =>
        movie ? '4px 0 0 0 #fcd420;' : '0 4px 0 0 #fcd420;'};
    }
  }

  ${({ movie }) =>
    movie &&
    css`
      min-height: 675px;

      @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        flex-direction: row;
        min-height: unset;
      }
    `}
`;
