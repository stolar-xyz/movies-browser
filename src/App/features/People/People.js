import Subheader from '../../common/styled/Subheader';
import Movie from '../Movies/Movie';
import { StyledMovies } from '../Movies/styled';

const People = () => (
  <>
    <Subheader title={'People'} />
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

export default People;
