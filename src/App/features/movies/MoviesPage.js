import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchList, selectResult, selectStatus } from '../listSlice';
import { fetchGenres } from './Genres/genresSlice';
import { usePageParameters } from '../usePageParameters';
import Subheader from '../../common/styled/Subheader';
import Movie from '../../common/structure/Movie';
import Section from '../../common/styled/Section';
import List from '../../common/styled/List';
import ThemeToggler from '../ThemeToggler';
import Loading from '../../common/structure/Content/Loading';
import Failure from '../../common/structure/Content/Failure';
import PageSelect from '../PageSelect';

const MoviesPage = () => {
  const resultPage = useSelector(selectResult);
  const listStatus = useSelector(selectStatus);
  const page = +usePageParameters();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList({ page, type: 'movies' }));
    dispatch(fetchGenres());
  }, [dispatch, page]);

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
          <PageSelect />
        </>
      );

    default:
      throw new Error(`incorrect status - ${listStatus}`);
  }
};

export default MoviesPage;
