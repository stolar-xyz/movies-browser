import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSearch,
  selectResult,
  selectStatus,
  toggleOpen,
} from './../searchSlice';
import { ResultList, Wrapper } from './styled';
import NoResults from '../../../common/structure/Content/NoResults';
import ResultTile from './ResultTile';
import RenderCondition from '../../RenderCondition';

const ResultsBox = ({ query, pathname }) => {
  const searchStatus = useSelector(selectStatus);
  const searchResult = useSelector(selectResult);
  const dispatch = useDispatch();
  const conditionedPathname = pathname ? 'movie' : 'person';

  useEffect(() => {
    dispatch(fetchSearch({ pathname: conditionedPathname, query }));
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
          if (searchResult.length) {
            return (
              <ResultList>
                {searchResult.map(
                  ({ title, name, poster_path, profile_path, id }) => (
                    <ResultTile
                      pathname={conditionedPathname}
                      text={title || name}
                      source={poster_path || profile_path}
                      id={id}
                      key={id}
                    />
                  )
                )}
              </ResultList>
            );
          } else {
            return <NoResults search text={query} />;
          }
        })(),
        true
      )}
    </Wrapper>
  );
};

export default ResultsBox;
