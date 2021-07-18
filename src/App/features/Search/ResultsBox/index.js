import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { language, apiKey, base } from '../../../apiDetails';
import {
  selectResults,
  selectStatus,
  setActiveSearchPath,
  toggleOpen,
} from './../searchSlice';
import { Wrapper } from './styled';
import NoResults from '../../../common/structure/Content/NoResults';
import ResultTile from './ResultTile';
import RenderCondition from '../../RenderCondition';

const ResultsBox = ({ query, pathname }) => {
  const searchStatus = useSelector(selectStatus);
  const searchResults = useSelector(selectResults);
  const dispatch = useDispatch();
  const conditionedPathname = pathname ? 'movie' : 'person';

  useEffect(() => {
    dispatch(
      setActiveSearchPath(
        `${base}search/${conditionedPathname}${apiKey}${language}&query=${query}`
      )
    );
  }, [dispatch, conditionedPathname, query]);

  return (
    <Wrapper
      onClick={() => {
        dispatch(toggleOpen());
      }}
    >
      {RenderCondition(
        searchStatus,
        (() => {
          if (searchResults.length) {
            return searchResults.map(
              ({ title, name, poster_path, profile_path, id }) => (
                <ResultTile
                  pathname={conditionedPathname}
                  text={title || name}
                  source={poster_path || profile_path}
                  id={id}
                  key={id}
                />
              )
            );
          } else {
            return <NoResults search text={query} />;
          }
        })(),
        'search'
      )}
    </Wrapper>
  );
};

export default ResultsBox;
