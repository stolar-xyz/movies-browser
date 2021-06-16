import {
  Wallpaper,
  Title,
  Wrapper,
  WallpaperOverlay,
  WallpaperContainer,
  WallpaperFill,
} from './styled';

const MovieWallpaper = ({ source, title, rating }) => {
  return source ? (
    <WallpaperFill>
      <WallpaperContainer>
        <WallpaperOverlay />
        <Wallpaper alt={`${title} movie wallpaper`} src={source} />
        <Wrapper>
          <Title>{title}</Title>
          {rating}
        </Wrapper>
      </WallpaperContainer>
    </WallpaperFill>
  ) : null;
};

export default MovieWallpaper;
