import { StyledImage } from './styled';
import { baseImage } from '../../../apiDetails';

const Image = ({ altText, source, icon, size, movie, person, search, tile }) => (
  <StyledImage
    movie={movie}
    person={person}
    search={search}
    tile={tile}
    alt={altText}
    src={source ? `${baseImage}${size}${source}` : icon}
  />
);

export default Image;
