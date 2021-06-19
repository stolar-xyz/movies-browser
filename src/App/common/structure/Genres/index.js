import { Genre, StyledGenres } from './styled';

const Genres = ({ genres }) => (
  <StyledGenres>
    <Genre>{genres}</Genre>
  </StyledGenres>
);

export default Genres;
