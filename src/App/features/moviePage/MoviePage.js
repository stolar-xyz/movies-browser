import MovieWallpaper from './MovieWallpaper';
import Subheader from '../../common/styled/Subheader';
import Tile from '../../common/structure/Tile';
import List from '../../common/styled/List';
import Section from '../../common/styled/Section';
import Person from '../../common/structure/Person';
import movieWallpaper from '../.././assets/example/movieWallpaper.jpg';
import Rating from '../../common/structure/Rating';
import Genres from '../../common/structure/Genres';

//test structure
const data = {
  title: 'Mulan',
  rate: '7,8',
  votes: '355',
};

const MoviePage = () => (
  <>
    <MovieWallpaper
      movieWallpaper={movieWallpaper}
      title={data.title}
      rating={<Rating big={'true'} rate={data.rate} votes={data.votes} />}
    />
    <Section>
      <Tile
        altImageText={'movie poster'}
        imageSource={'https://thisdoesnotexist.com/'}
        name={data.title}
        year={'2020'}
        firstInformation={'Production:'}
        firstInformationDetails={'China, United States of America'}
        secondInformation={'Release date:'}
        secondInformationDetails={'24.10.2020'}
        genres={<Genres genres={'Action'} />}
        rating={<Rating rate={data.rate} votes={data.votes} />}
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
