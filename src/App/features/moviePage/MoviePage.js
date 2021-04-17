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
} from './styled';
import movieBackground from '../../images/example/movieBackground.jpg';

const MoviePage = ({ title, rate, votes }) => (
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
);

export default MoviePage;
