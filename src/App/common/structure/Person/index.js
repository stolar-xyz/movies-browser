import { StyledPerson, Wrapper, Name, Role } from './styled';
import ProfileIcon from '../../../assets/svgs/profile.svg';
import Image from '../Image';

const Person = ({ name, role, source }) => (
  <StyledPerson>
    <Image
      person
      altText={`photo of ${name}`}
      source={source}
      icon={ProfileIcon}
      size={'w342'}
    />
    <Wrapper>
      <Name>{name}</Name>
      {role && <Role>{role}</Role>}
    </Wrapper>
  </StyledPerson>
);

export default Person;
