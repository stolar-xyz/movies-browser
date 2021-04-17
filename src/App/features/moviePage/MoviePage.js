import {
  Container,
  Image,
  Rate,
  StarIcon,
  TextContent,
  Title,
  Wrapper,
  ImageOverlay,
  ImageContainer,
  ImageFill,
} from './styled';
import movieBackground from '../../images/example/movieBackground.jpg';

const MoviePage = ({ title, rate, votes }) => (
  <ImageFill>
    <ImageContainer>
      <ImageOverlay />
      <Image alt={`"${title}" movie background`} src={movieBackground} />
      <Wrapper>
        <Title>{title}</Title>
        <Container>
          <StarIcon />
          <Rate>{rate}</Rate>
          <TextContent>/&nbsp;10</TextContent>
        </Container>
        <TextContent>{votes}&nbsp;votes</TextContent>
      </Wrapper>
    </ImageContainer>
  </ImageFill>
);

export default MoviePage;
