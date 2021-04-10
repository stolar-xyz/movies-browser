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
} from './styled';

const Movie = ({ title, year, genres, rate, votes }) => (
  <StyledMovie>
    {/*  src={image} */}
    <Image alt={`"${title}" movie banner`} />
    <div>
      <Title>{title}</Title>
      <Year>{year}</Year>
      <GenresWrapper>
        <Genres>{genres}</Genres>
        <Genres>Adventure</Genres>
        <Genres>Drama</Genres>
        <Genres>Horror</Genres>
      </GenresWrapper>
      <Rating>
        <StarIcon />
        <Rate>{rate}</Rate>
        <Votes>{votes}&nbsp;votes</Votes>
      </Rating>
    </div>
  </StyledMovie>
);

export default Movie;