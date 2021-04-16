import Subheader from '../../common/styled/Subheader';
import Movie from '../../common/structure/Movie';
import { StyledMovies } from './styled';

const Movies = () => {
  return (
    <>
      <Subheader title={'Popular movies'} />
      <StyledMovies>
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
      </StyledMovies>
    </>
  );
};

export default Movies;
