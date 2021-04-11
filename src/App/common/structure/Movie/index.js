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
    {/*  src={image} */}
    <Image alt={`"${title}" movie banner`} />
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
