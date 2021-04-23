import MovieMain from './MovieMain';
import Subheader from '../../common/styled/Subheader';
import Tile from '../../common/structure/Tile';
import List from '../../common/styled/List';
import Section from '../../common/styled/Section';
import Person from '../../common/structure/Person';
import movieWallpaper from '../.././images/example/movieWallpaper.jpg';

//test structure
const date = {
  title: 'Mulan',
  rate: '7,8',
  votes: '35',
};

const MoviePage = () => (
  <>
    <MovieMain
      movieWallpaper={movieWallpaper}
      title={date.title}
      rate={date.rate}
      votes={date.votes}
    />
    <Section>
      <Tile
        title={date.title}
        rate={date.rate}
        votes={date.votes}
        year={'2020'}
        genres={'Action'}
        production={'China, United States of America'}
        date={'24.10.2020'}
        description={
          'A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a male warrior in order to save her father. A young Chinese maiden disguises herself as a male warrior in order to save her father.'
        }
      />
    </Section>
    <Section>
      <Subheader>Cast</Subheader>
      <List people>
        <Person name={'Henry Cavill'} role={'Witcher'} />
        <Person name={'Henry Cavill'} />
        <Person name={'Henry Cavill'} />
        <Person name={'Henry Cavill'} />
        <Person name={'Henry Cavill'} />
        <Person name={'Henry Cavill'} />
        <Person name={'Henry Cavill'} />
        <Person name={'Henry Cavill'} />
        <Person name={'Henry Cavill'} />
      </List>
    </Section>
    <Section>
      <Subheader>Crew</Subheader>
      <List people>
        <Person name={'Henry Cavill'} />
        <Person name={'Henry Cavill'} />
        <Person name={'Henry Cavill'} />
        <Person name={'Henry Cavill'} />
        <Person name={'Henry Cavill'} />
        <Person name={'Henry Cavill'} />
        <Person name={'Henry Cavill'} />
        <Person name={'Henry Cavill'} />
        <Person name={'Henry Cavill'} />
      </List>
    </Section>
  </>
);

export default MoviePage;
