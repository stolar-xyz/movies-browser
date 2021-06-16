import Subheader from '../../styled/Subheader';
import {
  Description,
  Image,
  Information,
  Informations,
  StyledTile,
  Wrapper,
  TextContent,
} from './styled';

const Tile = ({
  altText,
  source,
  name,
  year,
  firstInformation,
  firstInformationDetails,
  secondInformation,
  secondInformationDetails,
  genres,
  rating,
  description,
}) => (
  <StyledTile>
    {source ? <Image alt={`${name} ${altText}`} src={source} /> : null}
    <Wrapper>
      <Subheader>{name}</Subheader>
      {year && <TextContent>{year}</TextContent>}
      <Informations>
        <div>
          <Information>{firstInformation}</Information>
          {firstInformationDetails}
        </div>
        <div>
          <Information>{secondInformation}</Information>
          {secondInformationDetails}
        </div>
      </Informations>
      {genres}
      {rating}
    </Wrapper>
    <Description>{description}</Description>
  </StyledTile>
);

export default Tile;
