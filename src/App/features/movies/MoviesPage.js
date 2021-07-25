import Subheader from '../../common/styled/Subheader';
import Movie from '../../common/structure/Movie';
import Section from '../../common/styled/Section';
import List from '../../common/styled/List';
import ThemeToggler from '../ThemeToggler';
import PageSelect from '../PageSelect';
import RenderCondition from '../RenderCondition';
import useListResources from '../useListResources';

const MoviesPage = () => {
  const { listPage, listStatus } = useListResources('movies');

  return RenderCondition(
    listStatus,
    <>
      <Section>
        <Subheader extra>
          Popular movies
          <ThemeToggler />
        </Subheader>
        <List movies>
          {listPage.map(
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
                year={release_date && release_date.slice(0, 4)}
                genres={genre_ids}
                rate={vote_average}
                votes={vote_count}
                source={poster_path}
                key={id}
                id={id}
              />
            )
          )}
        </List>
      </Section>
      <PageSelect />
    </>
  );
};

export default MoviesPage;
