import styled from 'styled-components';
import { ReactComponent as Video } from '../../../assets/svgs/video.svg';
import { Link, NavLink } from 'react-router-dom';

const activeClassName = 'active';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  color: ${({ theme }) => theme.color.text.whiteText};
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  padding: 8px 20px;
  border-radius: 30px;
  border: 2px solid transparent;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: #000000;
    background: ${({ theme }) => theme.color.text.whiteText};
  }

  &.${activeClassName} {
    border: 2px solid;
  }

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    padding: 6px 16px;
    border: 1px solid transparent;

    &.${activeClassName} {
      border: 1px solid;
    }
  }
`;

export const StyledNavigation = styled.nav`
  background: #000000;
  color: ${({ theme }) => theme.color.text.whiteText};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px 16px;
  max-width: 1368px;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    padding: 14px 16px;
  }

  @media (max-width: ${({ theme }) =>
      theme.mobileMax}px) and (orientation: portrait) {
    flex-wrap: wrap;
    padding: 28px 16px 16px;
  }

  @media (max-width: ${({ theme }) => theme.mobileSmallMax}px) {
    justify-content: center;
    padding: 22px 16px 16px;
  }
`;

export const Title = styled.h1`
  text-transform: capitalize;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -1px;
  margin: 0;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    font-size: 16px;
  }
`;

export const VideoIcon = styled(Video)`
  margin-right: 10px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    width: 22px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  grid-gap: 18px;
  flex-basis: 33%;
  list-style-type: none;
  font-size: 14px;
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.tabletMax}px) {
    justify-content: center;
    grid-gap: 10px;
  }

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.mobileSmallMax}px) {
    flex-basis: 100%;
    margin-top: 24px;
  }
`;
