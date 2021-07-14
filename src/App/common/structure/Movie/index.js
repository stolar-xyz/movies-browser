import { StyledMovie, Image, Title, Year, Wrapper, Container } from './styled';
import { baseImage } from '../../../apiDetails';
import Genres from '../../../features/movies/Genres';
import Rating from '../Rating';
import VideoIcon from '../../../assets/svgs/videoExtra.svg';

const Movie = ({ title, year, genres, rate, votes, source }) => (
  <StyledMovie>
    <Image
      alt={`${title} movie poster`}
      src={source ? `${baseImage}w342${source}` : VideoIcon}
    />
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        {year && <Year>{year.slice(0, 4)}</Year>}
        <Genres genres={genres} />
      </Container>
      <Rating small rate={rate} votes={votes} />
    </Wrapper>
  </StyledMovie>
);

export default Movie;
