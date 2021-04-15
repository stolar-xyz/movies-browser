import {
  Header,
  List,
  ListItem,
  Search,
  SearchIcon,
  SearchField,
  StyledNavigation,
  VideoIcon,
  Title,
  Wrapper,
} from './styled';
import { NavLink } from 'react-router-dom';
import { toMovies, toPeople } from '../../../routes';

const Navigation = () => (
  <StyledNavigation>
    <Wrapper>
      <Header>
        <Title>
          <NavLink to={toMovies()}>
            <VideoIcon />
            Movies&nbsp;browser
          </NavLink>
        </Title>
      </Header>
      <List>
        <ListItem>
          <NavLink to={toMovies()}>Movies</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={toPeople()}>People</NavLink>
        </ListItem>
      </List>
      <Search>
        <SearchIcon />
        <SearchField placeholder={'Search for movies...'} />
      </Search>
    </Wrapper>
  </StyledNavigation>
);

export default Navigation;
