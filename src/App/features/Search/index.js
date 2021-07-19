import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useReplacePageParameters } from '../useReplacePageParameters';
import { selectOpen, selectQuery, toggleOpen, setQuery } from './searchSlice';
import { StyledSearch, Button, Label, SearchIcon, Field } from './styled';
import { searchKey } from '../../paramKeys';
import ResultsBox from './ResultsBox';

const Search = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);
  const isOpen = useSelector(selectOpen);
  const trimmedQuery = query.trim();
  const { pathname } = useLocation();
  const isPathnameIncludes = pathname.includes('/movies');
  const replacePageParameters = useReplacePageParameters();

  useEffect(() => {
    dispatch(setQuery(''));
  }, [pathname, dispatch]);

  const onFormSubmit = event => {
    event.preventDefault();

    replacePageParameters({
      key: searchKey,
      value: trimmedQuery,
    });

    dispatch(setQuery(''));
  };

  const onChange = value => {
    dispatch(setQuery(value));
  };

  const onFormTarget = ({ currentTarget, relatedTarget }) => {
    if (!currentTarget.contains(relatedTarget)) {
      dispatch(toggleOpen());
    }
  };

  return (
    <StyledSearch
      $open={trimmedQuery && isOpen}
      onFocus={onFormTarget}
      onBlur={onFormTarget}
      onSubmit={onFormSubmit}
    >
      <Button title={'Search'}>
        <SearchIcon />
      </Button>
      <Label>
        <Field
          value={query}
          onChange={({ target }) => onChange(target.value)}
          placeholder={`Search for ${isPathnameIncludes ? 'movies' : 'people'}...`}
        />
      </Label>
      {trimmedQuery && isOpen && (
        <ResultsBox query={trimmedQuery} pathname={isPathnameIncludes} />
      )}
    </StyledSearch>
  );
};

export default Search;
