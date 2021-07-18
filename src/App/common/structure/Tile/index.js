import Subheader from '../../styled/Subheader';
import Image from '../Image';
import {
  Description,
  Information,
  Informations,
  StyledTile,
  Wrapper,
} from './styled';

const Tile = ({
  altText,
  source,
  name,
  icon,
  firstInformation,
  firstInformationDetails,
  secondInformation,
  secondInformationDetails,
  genres,
  rating,
  description,
}) => (
  <StyledTile>
    <Image tile altText={altText} source={source} icon={icon} size={'w500'} />
    <Wrapper>
      <Subheader>{name}</Subheader>
      {(firstInformationDetails || secondInformationDetails) && (
        <Informations>
          {firstInformationDetails && (
            <div>
              <Information>{firstInformation}</Information>
              {firstInformationDetails}
            </div>
          )}
          {secondInformationDetails && (
            <div>
              <Information>{secondInformation}</Information>
              {secondInformationDetails}
            </div>
          )}
        </Informations>
      )}
      {genres}
      {rating}
    </Wrapper>
    {description && <Description>{description}</Description>}
  </StyledTile>
);

export default Tile;
