import Genres from '../Genres';
import Overlay from '../Overlay';
import Rating from '../Rating';
import {
  StyledMovie,
  Image,
  Title,
  Year,
  Wrapper,
  Container,
  OverlayContainer,
} from './styled';

const Movie = ({ title, year, genres, rate, votes, source }) => (
  <StyledMovie>
    {source ? (
      <Image alt={`${title} movie poster`} src={source} />
    ) : (
      <OverlayContainer>
        <Overlay on={'movie'} />
      </OverlayContainer>
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
