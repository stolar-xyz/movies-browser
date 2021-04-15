import {
  List,
  Search,
  SearchIcon,
  SearchField,
  StyledNavigation,
  VideoIcon,
  Title,
  Wrapper,
  StyledNavLink,
  StyledLink,
} from './styled';
import { toMovies, toPeople } from '../../../routes';

const Navigation = () => (
  <StyledNavigation>
    <Wrapper>
      <header>
        <Title>
          <StyledLink to={toMovies()}>
            <VideoIcon />
            Movies&nbsp;browser
          </StyledLink>
        </Title>
      </header>
      <List>
        <li>
          <StyledNavLink to={toMovies()}>Movies</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={toPeople()}>People</StyledNavLink>
        </li>
      </List>
      <Search>
        <SearchIcon />
        <SearchField placeholder={'Search for movies...'} />
      </Search>
    </Wrapper>
  </StyledNavigation>
);

export default Navigation;
