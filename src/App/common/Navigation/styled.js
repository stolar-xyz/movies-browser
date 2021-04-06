import styled from 'styled-components';
import { ReactComponent as Loupe } from '../../images/svgs/loupe.svg';
import { ReactComponent as Video } from '../../images/svgs/video.svg';

export const StyledNavigation = styled.nav`
  background: #18181b;
  color: #ffffff;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 23px 16px;
  max-width: 1368px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Title = styled.h1`
  text-transform: capitalize;
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`;

export const VideoIcon = styled(Video)`
  margin-right: 16px;
`;

export const List = styled.ul`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  flex-basis: 33%;
  grid-gap: 66px;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Search = styled.label`
  background: #ffffff;
  display: flex;
  flex-basis: 33%;
  border-radius: 25px;
  padding: 12px 26px;
`;

export const SearchIcon = styled(Loupe)`
  margin-right: 16px;
`;

export const SearchField = styled.input`
  flex-grow: 1;
  border: none;

  &:focus {
    outline: none;
  }
`;
