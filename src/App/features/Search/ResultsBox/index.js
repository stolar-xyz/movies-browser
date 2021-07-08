import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { language, apiKey, base } from '../../../apiDetails';
import { selectResults, selectStatus, setActiveSearchPath } from './../searchSlice';
import { Wrapper } from './styled';
import Loading from '../../../common/structure/Content/Loading';
import Failure from '../../../common/structure/Content/Failure';
import NoResults from '../../../common/structure/Content/NoResults';
import ResultTile from './ResultTile';

const ResultsBox = ({ query }) => {
  const searchStatus = useSelector(selectStatus);
  const searchResults = useSelector(selectResults);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const pathName = pathname.includes('movie') ? 'movie' : 'person';

  useEffect(() => {
    dispatch(
      setActiveSearchPath(
        `${base}search/${pathName}${apiKey}${language}&query=${query}`
      )
    );
  }, [dispatch, pathName, query]);

  return (
    <Wrapper>
      {(() => {
        switch (searchStatus) {
          case 'initial':
            return null;

          case 'loading':
            return <Loading search />;

          case 'error':
            return <Failure search />;

          case 'success':
            if (searchResults.length) {
              return searchResults.map(
                ({ title, name, poster_path, profile_path, id }) => (
                  <ResultTile
                    pathName={pathName}
                    text={title || name}
                    source={poster_path || profile_path}
                    id={id}
                    key={id}
                  />
                )
              );
            } else {
              return <NoResults text={query} />;
            }

          default:
            throw new Error(`incorrect status - ${searchStatus}`);
        }
      })()}
    </Wrapper>
  );
};

export default ResultsBox;
