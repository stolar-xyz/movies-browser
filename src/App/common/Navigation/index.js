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
} from './styled';

const Navigation = () => (
  <StyledNavigation>
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
  </StyledNavigation>
);

export default Navigation;
