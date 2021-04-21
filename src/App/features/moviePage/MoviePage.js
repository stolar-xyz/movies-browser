import MovieMain from './MovieMain';
import movieWallpaper from '../.././images/example/movieWallpaper.jpg';

//test structure

const MoviePage = () => (
  <>
    <MovieMain
      movieWallpaper={movieWallpaper}
      title={'Mulan'}
      rate={'7,8'}
      votes={'35'}
      year={'2020'}
      genres={'Action'}
      production={'China, United States of America'}
      date={'24.10.2020'}
      description={
        'A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a male warrior in order to save her father. A young Chinese maiden disguises herself as a male warrior in order to save her father.'
      }
    />
  </>
);

export default MoviePage;
