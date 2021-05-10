import styled, { css } from 'styled-components';
import { ReactComponent as Arrowhead } from '../../../assets/svgs/arrowhead.svg';

export const StyledPageSelect = styled.div`
  margin: 64px 0;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 12px;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
    margin: 32px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-gap: 8px;
  }
`;

export const ArrowheadIcon = styled(Arrowhead)`
  color: #0044cc;

  ${({ rotated }) =>
    rotated &&
    css`
      transform: rotate(180deg);
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 5px;
    height: 8px;
  }
`;

export const ArrowheadsWrapper = styled.span`
  display: flex;
`;

export const PageButton = styled.button`
  border: none;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8px;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  color: #000000;
  padding: 8px 16px;
  background: #d6e4ff;
  border-radius: 5px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: #0044cc 0px 0px 0px 1px;
  }

  &:disabled {
    cursor: unset;
    background: #e4e6f0;

    &:hover {
      box-shadow: none;
    }

    ${ArrowheadIcon} {
      color: #7e839a;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 8px 12px;
  }
`;

export const PageButtonText = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  margin: 0 12px;
  grid-gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0 6px;
    grid-gap: 4px;
    font-size: 10px;
  }
`;

export const PageText = styled.span`
  color: #6b6f83;
`;

export const PageNumber = styled.span`
  font-weight: 600;
`;
