import { toMovie, toPerson } from '../../../../routes';
import { Text, Wrapper } from './styled';
import VideoIcon from '../../../../assets/svgs/videoExtra.svg';
import ProfileIcon from '../../../../assets/svgs/profile.svg';
import Image from '../../../../common/structure/Image';

const ResultTile = ({ pathname, id, source, text }) => {
  const isPathnameEqual = pathname === 'movie';

  return (
    <Wrapper to={isPathnameEqual ? toMovie(id) : toPerson(id)}>
      <Image
        search
        altText={isPathnameEqual ? `${text} movie poster` : `photo of ${text}`}
        source={source}
        icon={isPathnameEqual ? VideoIcon : ProfileIcon}
        size={'w154'}
      />
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default ResultTile;
