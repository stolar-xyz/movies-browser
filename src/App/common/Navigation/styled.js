import styled from 'styled-components';
import { ReactComponent as Loupe } from '../../images/svgs/loupe.svg';
import { ReactComponent as Video } from '../../images/svgs/video.svg';

export const StyledNavigation = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: #18181b;
  color: #ffffff;
  padding: 23px 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-self: center;
`;

export const Title = styled.h1`
  text-transform: capitalize;
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`;

export const VideoIcon = styled(Video)`
  margin-right: 16px;
  min-width: 40px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  font-size: 14px;
  font-weight: 600;
  margin-right: 66px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Search = styled.label`
  background: #ffffff;
  display: flex;
  min-width: 300px;
  width: 25vw;
  border-radius: 25px;
  padding: 12px 26px;
`;

export const SearchIcon = styled(Loupe)`
  margin-right: 16px;
  min-width: 24px;
`;

export const SearchField = styled.input`
  flex-grow: 1;
  border: none;

  &:focus {
    outline: none;
  }
`;
