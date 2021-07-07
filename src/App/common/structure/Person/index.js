import Overlay from '../Overlay';
import { StyledPerson, Image, Wrapper, Name, Role } from './styled';
import { baseImage } from '../../../apiDetails';

const Person = ({ name, role, source }) => (
  <StyledPerson>
    {source ? (
      <Image alt={`photo of ${name}`} src={`${baseImage}w342${source}`} />
    ) : (
      <Overlay person />
    )}
    <Wrapper>
      <Name>{name}</Name>
      {role && <Role>{role}</Role>}
    </Wrapper>
  </StyledPerson>
);

export default Person;
