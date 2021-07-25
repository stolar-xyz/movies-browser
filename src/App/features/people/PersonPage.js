import Tile from '../../common/structure/Tile';
import Section from '../../common/styled/Section';
import ProfileIcon from '../../assets/svgs/profile.svg';
import RenderCondition from '../RenderCondition';
import useItemResources from '../useItemResources';
import Subheader from '../../common/styled/Subheader';
import List from '../../common/styled/List';
import Movie from '../../common/structure/Movie';
import ShowItemsButtons from '../ShowItemsButtons';

const PersonPage = () => {
  const {
    itemPage: { name, profile_path, birthday, place_of_birth, biography },
    itemDetails: { cast, crew },
    itemStatus,
    displayedCastItems,
    displayedCrewItems,
  } = useItemResources('person');

  return RenderCondition(
    itemStatus,
    <>
      <Section>
        <Tile
          altText={`photo of ${name}`}
          source={profile_path}
          name={name}
          icon={ProfileIcon}
          firstInformation={'Date of birth:'}
          firstInformationDetails={birthday}
          secondInformation={'Place of birth:'}
          secondInformationDetails={place_of_birth}
          description={biography}
        />
      </Section>
      {cast && cast.length > 0 && (
        <Section>
          <Subheader>Cast {`(${cast.length})`}</Subheader>
          <List movies>
            {cast
              .slice(0, displayedCastItems)
              .map(
                ({
                  title,
                  release_date,
                  character,
                  genre_ids,
                  vote_average,
                  vote_count,
                  poster_path,
                  credit_id,
                  id,
                }) => (
                  <Movie
                    title={title}
                    role={character}
                    year={release_date && `(${release_date.slice(0, 4)})`}
                    genres={genre_ids}
                    rate={vote_average}
                    votes={vote_count}
                    source={poster_path}
                    key={credit_id}
                    id={id}
                  />
                )
              )}
          </List>
          <ShowItemsButtons cast={cast} displayedCastItems={displayedCastItems} />
        </Section>
      )}
      {crew && crew.length > 0 && (
        <Section>
          <Subheader>Crew {`(${crew.length})`}</Subheader>
          <List movies>
            {crew
              .slice(0, displayedCrewItems)
              .map(
                ({
                  title,
                  release_date,
                  job,
                  genre_ids,
                  vote_average,
                  vote_count,
                  poster_path,
                  credit_id,
                  id,
                }) => (
                  <Movie
                    title={title}
                    role={job}
                    year={release_date && `(${release_date.slice(0, 4)})`}
                    genres={genre_ids}
                    rate={vote_average}
                    votes={vote_count}
                    source={poster_path}
                    key={credit_id}
                    id={id}
                  />
                )
              )}
          </List>
          <ShowItemsButtons crew={crew} displayedCrewItems={displayedCrewItems} />
        </Section>
      )}
    </>
  );
};

export default PersonPage;
