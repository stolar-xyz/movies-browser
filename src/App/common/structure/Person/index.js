import { StyledPerson, Wrapper, Name, Role } from './styled';
import { toPerson } from '../../../routes';
import StyledLink from '../../styled/Link';
import ProfileIcon from '../../../assets/svgs/profile.svg';
import Image from '../Image';

const Person = ({ name, role, source, id }) => (
  <StyledPerson>
    <StyledLink to={toPerson(id)}>
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
    </StyledLink>
  </StyledPerson>
);

export default Person;
