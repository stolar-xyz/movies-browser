import { useSelector } from 'react-redux';
import { selectResult } from './genresSlice';
import { Genre, StyledGenres } from './styled';

const Genres = ({ genres }) => {
  const genresList = useSelector(selectResult);

  return genres && genres.length > 0 ? (
    <StyledGenres>
      {genresList.map(
        ({ id, name }) => genres.includes(id) && <Genre key={id}>{name}</Genre>
      )}
    </StyledGenres>
  ) : null;
};

export default Genres;
