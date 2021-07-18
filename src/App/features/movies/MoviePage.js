import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItem, selectResult, selectStatus } from '../itemSlice';
import { useEffect } from 'react';
import MovieWallpaper from './MovieWallpaper';
import Tile from '../../common/structure/Tile';
import Section from '../../common/styled/Section';
import Rating from '../../common/structure/Rating';
import Loading from '../../common/structure/Content/Loading';
import Failure from '../../common/structure/Content/Failure';
import VideoIcon from '../../assets/svgs/videoExtra.svg';
import Genres from './Genres';

const MoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    backdrop_path,
    poster_path,
    title,
    release_date,
    production_countries,
    overview,
    vote_average,
    vote_count,
    genres,
  } = useSelector(selectResult);
  const itemStatus = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchItem({ id, type: 'movie' }));
  }, [id, dispatch]);

  switch (itemStatus) {
    case 'initial':
      return null;

    case 'loading':
      return <Loading />;

    case 'error':
      return <Failure />;

    case 'success':
      return (
        <>
          {backdrop_path && (
            <MovieWallpaper
              source={backdrop_path}
              title={title}
              rating={<Rating big={'true'} rate={vote_average} votes={vote_count} />}
            />
          )}
          <Section>
            <Tile
              altText={`${title} movie poster`}
              source={poster_path}
              name={title}
              icon={VideoIcon}
              firstInformation={'Production:'}
              firstInformationDetails={
                production_countries &&
                production_countries.map(({ name }) => name).join(', ')
              }
              secondInformation={'Release date:'}
              secondInformationDetails={release_date}
              genres={<Genres genres={genres && genres.map(({ id }) => id)} />}
              rating={<Rating rate={vote_average} votes={vote_count} />}
              description={overview}
            />
          </Section>
        </>
      );

    default:
      throw new Error(`incorrect status - ${itemStatus}`);
  }
};

export default MoviePage;
