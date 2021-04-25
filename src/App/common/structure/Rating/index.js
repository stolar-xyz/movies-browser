import { Container, Limit, Rate, StarIcon, StyledRating } from './styled';

const Rating = ({ rate, votes, big }) => (
  <StyledRating big={big}>
    <Container big={big}>
      <StarIcon big={big} />
      <Rate big={big}>{rate}</Rate>
      <Limit big={big}>/&nbsp;10</Limit>
    </Container>
    {votes}&nbsp;votes
  </StyledRating>
);

export default Rating;
