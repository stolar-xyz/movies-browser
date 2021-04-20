import Subheader from '../../common/styled/Subheader';
import Movie from '../../common/structure/Movie';
import Section from '../../common/styled/Section';
import List from '../../common/styled/List';

const Movies = () => (
  <Section>
    <Subheader>Popular movies</Subheader>
    <List movies>
      <Movie
        title={'Mulan'}
        year={'2020'}
        genres={'Action'}
        rate={'7,8'}
        votes={'35'}
      />
      <Movie
        title={'Mulan'}
        year={'2020'}
        genres={'Action'}
        rate={'7,8'}
        votes={'35'}
      />
      <Movie
        title={'Mulan'}
        year={'2020'}
        genres={'Action'}
        rate={'7,8'}
        votes={'35'}
      />
      <Movie
        title={'Mulan'}
        year={'2020'}
        genres={'Action'}
        rate={'7,8'}
        votes={'35'}
      />
    </List>
  </Section>
);

export default Movies;
