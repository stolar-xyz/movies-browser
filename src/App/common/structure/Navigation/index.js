import {
  List,
  StyledNavigation,
  VideoIcon,
  Title,
  Wrapper,
  StyledNavLink,
  StyledLink,
} from './styled';
import { toMovies, toPeople } from '../../../routes';
import Search from '../../../features/Search';

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
      <Search />
    </Wrapper>
  </StyledNavigation>
);

export default Navigation;
