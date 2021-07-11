import { baseImage } from '../../../../apiDetails';
import { toMovie, toPerson } from '../../../../routes';
import { Image, Text, Wrapper } from './styled';

const ResultTile = ({ pathname, id, source, text }) => (
  <Wrapper to={pathname === 'movie' ? toMovie(id) : toPerson(id)}>
    <Image alt={text} src={`${baseImage}w154${source}`} />
    <Text>{text}</Text>
  </Wrapper>
);

export default ResultTile;
