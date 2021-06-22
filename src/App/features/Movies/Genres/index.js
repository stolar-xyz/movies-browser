import { useSelector } from 'react-redux';
import { selectResult } from './genresSlice';
import { Genre, StyledGenres } from './styled';

const Genres = ({ genres }) => {
  const genresList = useSelector(selectResult);

  return (
    <StyledGenres>
      {genres &&
        genresList.map(
          ({ id, name }) =>
            genres.includes(id) && <Genre key={id}>{name}</Genre>
        )}
    </StyledGenres>
  );
};

export default Genres;
