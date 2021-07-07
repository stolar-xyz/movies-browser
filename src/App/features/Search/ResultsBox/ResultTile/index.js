import { baseImage } from '../../../../apiDetails';
import { Image, Text, Wrapper } from './styled';

const ResultTile = ({ pathName, id, source, text }) => (
  <Wrapper
    to={pathName === 'movie' ? `/movies/movie/${id}` : `/people/person/${id}`}
  >
    <Image alt={text} src={`${baseImage}w154${source}`} />
    <Text>{text}</Text>
  </Wrapper>
);

export default ResultTile;
