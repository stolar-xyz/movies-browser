import styled from 'styled-components';
import { ReactComponent as Loupe } from '../../../assets/svgs/loupe.svg';
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
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 30px;
  border: 2px solid transparent;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: #000000;
    background: #ffffff;
  }

  &.${activeClassName} {
    border: 2px solid;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 6px 16px;
    border: 1px solid transparent;

    &.${activeClassName} {
      border: 1px solid;
    }
  }
`;

export const StyledNavigation = styled.nav`
  background: #000000;
  color: #ffffff;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px 16px;
  max-width: 1368px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 14px 16px;
  }

  @media (max-width: ${({ theme }) =>
      theme.breakpoints.mobileMax}px) and (orientation: portrait) {
    flex-wrap: wrap;
    padding: 28px 16px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmallMax}px) {
    justify-content: center;
    padding: 22px 16px 16px;
  }
`;

export const Title = styled.h1`
  text-transform: capitalize;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -1.5px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
    letter-spacing: -0.5px;
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const VideoIcon = styled(Video)`
  margin-right: 16px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
    width: 32px;
    margin-right: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    grid-gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmallMax}px) {
    flex-basis: 100%;
    margin-top: 24px;
  }
`;

export const Search = styled.label`
  background: #ffffff;
  display: flex;
  align-items: center;
  flex-basis: 33%;
  border-radius: 25px;
  padding: 12px 26px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
    padding: 10px 18px;
  }

  @media (max-width: ${({ theme }) =>
      theme.breakpoints.mobileMax}px) and (orientation: portrait) {
    flex-basis: 100%;
    margin-top: 24px;
  }
`;

export const SearchIcon = styled(Loupe)`
  margin-right: 16px;
  height: auto;
  color: #7e839a;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
    width: 18px;
    margin-right: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
    color: #627489;
  }
`;

export const SearchField = styled.input`
  flex-grow: 1;
  line-height: normal;
  border: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
  }

  &:focus {
    outline: none;
  }
`;
