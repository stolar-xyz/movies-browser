import { baseImage } from '../../../apiDetails';
import {
  Wallpaper,
  Title,
  Wrapper,
  WallpaperOverlay,
  WallpaperContainer,
  WallpaperFill,
} from './styled';

const MovieWallpaper = ({ source, title, rating }) => (
  <WallpaperFill>
    <WallpaperContainer>
      <WallpaperOverlay />
      <Wallpaper
        alt={`${title} movie wallpaper`}
        src={`${baseImage}w1280${source}`}
      />
      <Wrapper>
        <Title>{title}</Title>
        {rating}
      </Wrapper>
    </WallpaperContainer>
  </WallpaperFill>
);

export default MovieWallpaper;
