import { StyledMovie, Title, Details, Wrapper, Container } from './styled';
import { toMovie } from '../../../routes';
import StyledLink from '../../styled/Link';
import Genres from '../../../features/movies/Genres';
import Rating from '../Rating';
import VideoIcon from '../../../assets/svgs/videoExtra.svg';
import Image from '../Image';

const Movie = ({ title, role, year, genres, rate, votes, source, id }) => (
  <StyledMovie>
    <StyledLink $movie={'true'} to={toMovie(id)}>
      <Image
        movie
        altText={`${title} movie poster`}
        source={source}
        icon={VideoIcon}
        size={'w342'}
      />
      <Wrapper>
        <Container>
          <Title>{title}</Title>
          {(role || year) && (
            <Details>
              {role} {year}
            </Details>
          )}
          <Genres genres={genres} />
        </Container>
        <Rating small rate={rate} votes={votes} />
      </Wrapper>
    </StyledLink>
  </StyledMovie>
);

export default Movie;
