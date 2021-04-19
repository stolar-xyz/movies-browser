import Subheader from '../../common/styled/Subheader';
import Movie from '../../common/structure/Movie';
import Container from '../../common/styled/Container';
import { StyledMovies } from './styled';

const Movies = () => (
  <Container>
    <Subheader>Popular movies</Subheader>
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
  </Container>
);

export default Movies;
