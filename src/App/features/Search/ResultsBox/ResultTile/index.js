import { toMovie, toPerson } from '../../../../routes';
import { Text, Wrapper } from './styled';
import VideoIcon from '../../../../assets/svgs/videoExtra.svg';
import ProfileIcon from '../../../../assets/svgs/profile.svg';
import Image from '../../../../common/structure/Image';

const ResultTile = ({ pathname, id, source, text }) => (
  <Wrapper to={pathname === 'movie' ? toMovie(id) : toPerson(id)}>
    <Image
      search
      altText={text}
      source={source}
      icon={pathname === 'movie' ? VideoIcon : ProfileIcon}
      size={'w154'}
    />
    <Text>{text}</Text>
  </Wrapper>
);

export default ResultTile;
