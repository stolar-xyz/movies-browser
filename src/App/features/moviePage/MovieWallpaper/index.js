import {
  Wallpaper,
  Title,
  Wrapper,
  WallpaperOverlay,
  WallpaperContainer,
  WallpaperFill,
} from './styled';

const MovieWallpaper = ({ movieWallpaper, title, rating }) => (
  <WallpaperFill>
    <WallpaperContainer>
      <WallpaperOverlay />
      <Wallpaper alt={`${title} movie wallpaper`} src={movieWallpaper} />
      <Wrapper>
        <Title>{title}</Title>
        {rating}
      </Wrapper>
    </WallpaperContainer>
  </WallpaperFill>
);

export default MovieWallpaper;
