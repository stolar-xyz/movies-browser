import Subheader from '../../../common/styled/Subheader';
import Genres from '../../../common/structure/Genres';
import {
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

const MovieTile = ({ title, genres, rate, votes }) => (
  <StyledMovieTile>
    <Poster
      alt={`"${title}" movie poster`}
      src={'https://thisdoesnotexist.com/'}
    />
    <TileWrapper>
      <Subheader>{title}</Subheader>
      <Year>2020</Year>
      <InformationsWrapper>
        <Informations>
          <Information>Production:</Information>
          <InformationDetails>
            China, United States of America
          </InformationDetails>
        </Informations>
        <Informations>
          <Information>Release&nbsp;date:</Information>
          <InformationDetails>24.10.2020</InformationDetails>
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
    <Description>
      A young Chinese maiden disguises herself as a male warrior in order to
      save her father. Disguises herself as a male warrior in order to save her
      father. A young Chinese maiden disguises herself as a male warrior in
      order to save her father.
    </Description>
  </StyledMovieTile>
);

export default MovieTile;
