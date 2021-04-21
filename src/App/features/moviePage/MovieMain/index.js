import Subheader from '../../../common/styled/Subheader';
import Genres from '../../../common/structure/Genres';
import Section from '../../../common/styled/Section';
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
  Poster,
  TileWrapper,
  StyledMovieTile,
  Year,
  InformationsWrapper,
  Informations,
  Rating,
  SmallStarIcon,
  TileRate,
  TileRateExtra,
  Description,
  Information,
  InformationDetails,
} from './styled';

const MovieMain = ({
  movieWallpaper,
  title,
  rate,
  votes,
  year,
  genres,
  production,
  date,
  description,
}) => (
  <>
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
    <Section>
      <StyledMovieTile>
        <Poster
          alt={`"${title}" movie poster`}
          src={'https://thisdoesnotexist.com/'}
        />
        <TileWrapper>
          <Subheader>{title}</Subheader>
          <Year>{year}</Year>
          <InformationsWrapper>
            <Informations>
              <Information>Production:</Information>
              <InformationDetails>{production}</InformationDetails>
            </Informations>
            <Informations>
              <Information>Release&nbsp;date:</Information>
              <InformationDetails>{date}</InformationDetails>
            </Informations>
          </InformationsWrapper>
          <Genres genres={genres} />
          <Rating>
            <SmallStarIcon />
            <TileRate>{rate}</TileRate>
            <TileRateExtra>/&nbsp;10</TileRateExtra>
            {votes}&nbsp;votes
          </Rating>
        </TileWrapper>
        <Description>{description}</Description>
      </StyledMovieTile>
    </Section>
  </>
);

export default MovieMain;
