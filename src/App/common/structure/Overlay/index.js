import { StyledOverlay, ProfileIcon, VideoIcon } from './styled';

const Overlay = ({ on }) => (
  <StyledOverlay>
    {(() => {
      switch (on) {
        case 'person':
          return <ProfileIcon />;
        case 'movie':
          return <VideoIcon />;
        default:
          return null;
      }
    })()}
  </StyledOverlay>
);

export default Overlay;
