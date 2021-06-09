import { StyledOverlay } from './styled';
import { ReactComponent as ProfileIcon } from '../../../assets/svgs/profile.svg';
import { ReactComponent as VideoIcon } from '../../../assets/svgs/videoExtra.svg';

const Overlay = ({ person, movie }) => (
  <StyledOverlay person={person} movie={movie}>
    {(() => {
      switch (true) {
        case person:
          return <ProfileIcon />;
        case movie:
          return <VideoIcon />;
        default:
          return null;
      }
    })()}
  </StyledOverlay>
);

export default Overlay;
