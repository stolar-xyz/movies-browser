import { useLocation } from 'react-router-dom';
import { StyledSearch, Button, Label, SearchIcon, Field } from './styled';

const Search = () => {
  const { pathname } = useLocation();

  const onFormSubmit = event => {
    event.preventDefault();
  };

  return (
    <StyledSearch onSubmit={onFormSubmit}>
      <Button>
        <SearchIcon />
      </Button>
      <Label>
        <Field
          placeholder={`Search for ${
            pathname.includes('movies') ? 'movies' : 'people'
          }...`}
        />
      </Label>
    </StyledSearch>
  );
};

export default Search;
