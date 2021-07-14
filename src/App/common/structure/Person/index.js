import { StyledPerson, Image, Wrapper, Name, Role } from './styled';
import { baseImage } from '../../../apiDetails';
import ProfileIcon from '../../../assets/svgs/profile.svg';

const Person = ({ name, role, source }) => (
  <StyledPerson>
    <Image
      alt={`photo of ${name}`}
      src={source ? `${baseImage}w342${source}` : ProfileIcon}
    />
    <Wrapper>
      <Name>{name}</Name>
      {role && <Role>{role}</Role>}
    </Wrapper>
  </StyledPerson>
);

export default Person;
