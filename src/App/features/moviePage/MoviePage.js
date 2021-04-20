import MovieImage from './MovieImage';
import MovieTile from './MovieTile';
import Container from '../../common/styled/Section';

//test structure
const title = 'Mulan';
const rate = '7,8';
const votes = '35';
const genres = 'Action';

const MoviePage = () => (
  <>
    <MovieImage title={title} rate={rate} votes={votes} />
    <Container>
      <MovieTile title={title} rate={rate} votes={votes} genres={genres} />
    </Container>
  </>
);

export default MoviePage;
