import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectQuery, setQuery } from './searchSlice';
import { StyledSearch, Button, Label, SearchIcon, Field } from './styled';

const Search = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);
  const { pathname } = useLocation();

  const onFormSubmit = event => {
    event.preventDefault();
  };

  const onChange = value => {
    dispatch(setQuery(value));
  };

  return (
    <StyledSearch onSubmit={onFormSubmit}>
      <Button>
        <SearchIcon />
      </Button>
      <Label>
        <Field
          value={query}
          onChange={({ target }) => onChange(target.value)}
          placeholder={`Search for ${
            pathname.includes('movies') ? 'movies' : 'people'
          }...`}
        />
      </Label>
    </StyledSearch>
  );
};

export default Search;
