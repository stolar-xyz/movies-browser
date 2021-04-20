import Genres from '../Genres';
import {
  StyledMovie,
  Image,
  Rate,
  Votes,
  Rating,
  StarIcon,
  Title,
  Year,
  Wrapper,
  Container,
} from './styled';

const Movie = ({ title, year, genres, rate, votes }) => (
  <StyledMovie>
    <Image
      alt={`"${title}" movie banner`}
      src={'https://thisdoesnotexist.com/'}
    />
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <Year>{year}</Year>
        <Genres genres={genres} />
      </Container>
      <Rating>
        <StarIcon />
        <Rate>{rate}</Rate>
        <Votes>{votes}&nbsp;votes</Votes>
      </Rating>
    </Wrapper>
  </StyledMovie>
);

export default Movie;
