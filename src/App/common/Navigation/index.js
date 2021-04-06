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

const Navigation = () => (
  <StyledNavigation>
    <Wrapper>
      <Header>
        <VideoIcon />
        <Title>Movies browser</Title>
      </Header>
      <List>
        <ListItem>Movies</ListItem>
        <ListItem>Pepole</ListItem>
      </List>
      <Search>
        <SearchIcon />
        <SearchField placeholder={'Search for movies...'} />
      </Search>
    </Wrapper>
  </StyledNavigation>
);

export default Navigation;
