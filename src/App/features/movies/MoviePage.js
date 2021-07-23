import MovieWallpaper from './MovieWallpaper';
import Tile from '../../common/structure/Tile';
import Section from '../../common/styled/Section';
import Rating from '../../common/structure/Rating';
import VideoIcon from '../../assets/svgs/videoExtra.svg';
import Genres from './Genres';
import RenderCondition from '../RenderCondition';
import useItemResources from '../useItemResources';
import Subheader from '../../common/styled/Subheader';
import List from '../../common/styled/List';
import Person from '../../common/structure/Person';

const MoviePage = () => {
  const {
    itemPage: {
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
    itemDetails: { cast, crew },
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
      {cast && cast.length > 0 && (
        <Section>
          <Subheader>Cast {`(${cast.length})`}</Subheader>
          <List people>
            {cast.map(({ profile_path, character, name, credit_id, id }) => (
              <Person
                name={name}
                role={character}
                source={profile_path}
                key={credit_id}
                id={id}
              />
            ))}
          </List>
        </Section>
      )}
      {crew && crew.length > 0 && (
        <Section>
          <Subheader>Crew {`(${crew.length})`}</Subheader>
          <List people>
            {crew.map(({ profile_path, job, name, credit_id, id }) => (
              <Person
                name={name}
                role={job}
                source={profile_path}
                key={credit_id}
                id={id}
              />
            ))}
          </List>
        </Section>
      )}
    </>
  );
};

export default MoviePage;
