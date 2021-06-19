import Genres from '../Genres';
import Overlay from '../Overlay';
import Rating from '../Rating';
import { StyledMovie, Image, Title, Year, Wrapper, Container } from './styled';
import { baseImage } from '../../../apiDetails';

const Movie = ({ title, year, genres, rate, votes, source }) => (
  <StyledMovie>
    {source ? (
      <Image alt={`${title} movie poster`} src={`${baseImage}w342${source}`} />
    ) : (
      <Overlay movie />
    )}
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
