import Genres from '../Genres';
import Rating from '../Rating';
import { StyledMovie, Image, Title, Year, Wrapper, Container } from './styled';

const Movie = ({ title, year, genres, rate, votes, source }) => (
  <StyledMovie>
    <Image alt={`${title} movie banner`} src={source} />
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <Year>{year}</Year>
        <Genres genres={genres} />
      </Container>
      <Rating small rate={rate} votes={votes} />
    </Wrapper>
  </StyledMovie>
);

export default Movie;
