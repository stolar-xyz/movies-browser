import {
  Container,
  Wallpaper,
  Rate,
  StarIcon,
  TextContent,
  Title,
  Wrapper,
  WallpaperOverlay,
  WallpaperContainer,
  WallpaperFill,
  Details,
} from './styled';

const MovieWallpaper = ({ movieWallpaper, title, rate, votes }) => (
  <WallpaperFill>
    <WallpaperContainer>
      <WallpaperOverlay />
      <Wallpaper alt={`"${title}" movie wallpaper`} src={movieWallpaper} />
      <Wrapper>
        <Title>{title}</Title>
        <Details>
          <Container>
            <StarIcon />
            <Rate>{rate}</Rate>
            <TextContent>/&nbsp;10</TextContent>
          </Container>
          <TextContent>{votes}&nbsp;votes</TextContent>
        </Details>
      </Wrapper>
    </WallpaperContainer>
  </WallpaperFill>
);

export default MovieWallpaper;
