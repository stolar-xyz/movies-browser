import { Limit, Rate, StarIcon, StyledRating, Votes } from './styled';

const Rating = ({ rate, votes, big, small }) => (
  <StyledRating big={big} small={small}>
    {votes ? (
      <>
        <StarIcon big={big} />
        <Rate big={big} small={small}>
          {rate}
        </Rate>
        <Limit big={big}>/&nbsp;10</Limit>
        <Votes big={big} small={small}>
          {votes}&nbsp;votes
        </Votes>
      </>
    ) : (
      <Votes small={small}>No votes yet</Votes>
    )}
  </StyledRating>
);

export default Rating;
