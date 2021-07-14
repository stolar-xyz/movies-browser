import { baseImage } from '../../../../apiDetails';
import { toMovie, toPerson } from '../../../../routes';
import { Image, Text, Wrapper } from './styled';
import VideoIcon from '../../../../assets/svgs/videoExtra.svg';
import ProfileIcon from '../../../../assets/svgs/profile.svg';

const ResultTile = ({ pathname, id, source, text }) => (
  <Wrapper to={pathname === 'movie' ? toMovie(id) : toPerson(id)}>
    <Image
      alt={text}
      src={
        source
          ? `${baseImage}w154${source}`
          : pathname === 'movie'
          ? VideoIcon
          : ProfileIcon
      }
    />
    <Text>{text}</Text>
  </Wrapper>
);

export default ResultTile;
