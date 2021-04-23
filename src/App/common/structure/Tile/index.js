import Subheader from '../../styled/Subheader';
import Genres from '../Genres';
import {
  Description,
  Image,
  Information,
  Informations,
  Rating,
  StarIcon,
  StyledTile,
  Rate,
  TextContent,
  Wrapper,
  Year,
} from './styled';

const Tile = ({
  title,
  rate,
  votes,
  year,
  genres,
  production,
  date,
  description,
}) => (
  // do more generically
  <StyledTile>
    <Image
      alt={`"${title}" movie poster`}
      src={'https://thisdoesnotexist.com/'}
    />
    <Wrapper>
      <Subheader>{title}</Subheader>
      <Year>{year}</Year>
      <Informations>
        <div>
          <Information>Production:</Information>
          {production}
        </div>
        <div>
          <Information>Release&nbsp;date:</Information>
          {date}
        </div>
      </Informations>
      <Genres genres={genres} />
      <Rating>
        <StarIcon />
        <Rate>{rate}</Rate>
        <TextContent>/&nbsp;10</TextContent>
        {votes}&nbsp;votes
      </Rating>
    </Wrapper>
    <Description>{description}</Description>
  </StyledTile>
);

export default Tile;
