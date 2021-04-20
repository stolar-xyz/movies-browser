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
  Details,
} from './styled';
import movieBackground from '../../../images/example/movieBackground.jpg';

const MovieImage = ({ title, rate, votes }) => (
    <ImageFill>
      <ImageContainer>
        <ImageOverlay />
        <Image alt={`"${title}" movie background`} src={movieBackground} />
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
      </ImageContainer>
    </ImageFill>
);

export default MovieImage;