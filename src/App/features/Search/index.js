import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useReplacePageParameters } from '../useReplacePageParameters';
import { selectQuery, setQuery } from './searchSlice';
import { StyledSearch, Button, Label, SearchIcon, Field } from './styled';
import ResultsBox from './ResultsBox';

const Search = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);
  const { pathname } = useLocation();
  const replacePageParameters = useReplacePageParameters();

  const onFormSubmit = event => {
    event.preventDefault();

    replacePageParameters({
      key: 'search',
      value: query,
    });

    dispatch(setQuery(''));
  };

  const onChange = value => {
    dispatch(setQuery(value));
  };

  return (
    <StyledSearch open={!!query} onSubmit={onFormSubmit}>
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
      {query && <ResultsBox query={query} />}
    </StyledSearch>
  );
};

export default Search;
