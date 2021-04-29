import {
  Container,
  Limit,
  Rate,
  StarIcon,
  StyledRating,
  Votes,
} from './styled';

const Rating = ({ rate, votes, big, small }) => (
  <StyledRating big={big}>
    <Container big={big}>
      <StarIcon big={big} />
      <Rate big={big} small={small}>
        {rate}
      </Rate>
      <Limit big={big}>
        /&nbsp;10
      </Limit>
    </Container>
    <Votes small={small}>{votes}&nbsp;votes</Votes>
  </StyledRating>
);

export default Rating;
