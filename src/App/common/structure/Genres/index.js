import { Genre, StyledGenres } from './styled';

const Genres = ({ genres }) => (
  //example values
  <StyledGenres>
    <Genre>{genres}</Genre>
    <Genre>Adventure</Genre>
    <Genre>Drama</Genre>
    <Genre>Horror</Genre>
  </StyledGenres>
);

export default Genres;
