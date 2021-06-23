import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchList, selectResult, selectStatus } from '../listSlice';
import { fetchGenres } from './Genres/genresSlice';
import Subheader from '../../common/styled/Subheader';
import Movie from '../../common/structure/Movie';
import Section from '../../common/styled/Section';
import List from '../../common/styled/List';
import ThemeToggler from '../ThemeToggler';
import Loading from '../../common/structure/Content/Loading';
import Failure from '../../common/structure/Content/Failure';
import PageSelect from '../../common/structure/PageSelect';

const MoviesPage = () => {
  const resultPage = useSelector(selectResult);
  const listStatus = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList({ page: '1', type: 'movies' }));
    dispatch(fetchGenres());
  }, [dispatch]);

  switch (listStatus) {
    case 'initial':
      return null;

    case 'loading':
      return <Loading />;

    case 'error':
      return <Failure />;

    case 'success':
      return (
        <>
          <Section>
            <Subheader extra>
              Popular movies
              <ThemeToggler />
            </Subheader>
            <List movies>
              {resultPage.map(
                ({
                  title,
                  release_date,
                  genre_ids,
                  vote_average,
                  vote_count,
                  poster_path,
                  id,
                }) => (
                  <Movie
                    title={title}
                    year={release_date}
                    genres={genre_ids}
                    rate={vote_average}
                    votes={vote_count}
                    source={poster_path}
                    key={id}
                  />
                )
              )}
            </List>
          </Section>
          <PageSelect minNumber={'1'} maxNumber={'500'} />
        </>
      );

    default:
      throw new Error(`incorrect status - ${listStatus}`);
  }
};

export default MoviesPage;
