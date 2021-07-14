import { StyledImage } from './styled';
import { baseImage } from '../../../apiDetails';

const Image = ({ altText, source, icon, size, movie, person, search }) => (
  <StyledImage
    movie={movie}
    person={person}
    search={search}
    alt={altText}
    src={source ? `${baseImage}${size}${source}` : icon}
  />
);

export default Image;
