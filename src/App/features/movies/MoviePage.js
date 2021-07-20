import MovieWallpaper from './MovieWallpaper';
import Tile from '../../common/structure/Tile';
import Section from '../../common/styled/Section';
import Rating from '../../common/structure/Rating';
import VideoIcon from '../../assets/svgs/videoExtra.svg';
import Genres from './Genres';
import RenderCondition from '../RenderCondition';
import useItemResources from '../useItemResources';

const MoviePage = () => {
  const {
    resultPage: {
      backdrop_path,
      poster_path,
      title,
      release_date,
      production_countries,
      overview,
      vote_average,
      vote_count,
      genres,
    },
    itemStatus,
  } = useItemResources('movie');

  return RenderCondition(
    itemStatus,
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
};

export default MoviePage;
