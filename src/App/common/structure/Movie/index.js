import {
  StyledMovie,
  GenresWrapper,
  Image,
  Genres,
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
        <GenresWrapper>
          <Genres>{genres}</Genres>
          <Genres>Adventure</Genres>
          <Genres>Drama</Genres>
          <Genres>Horror</Genres>
        </GenresWrapper>
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
