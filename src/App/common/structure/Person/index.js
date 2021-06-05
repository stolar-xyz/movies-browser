import { StyledPerson, Image, Wrapper, Name, Role } from './styled';

const Person = ({ name, role, source }) => (
  <StyledPerson>
    <Image alt={`photo of ${name}`} src={source} />
    <Wrapper>
      <Name>{name}</Name>
      {role && <Role>{role}</Role>}
    </Wrapper>
  </StyledPerson>
);

export default Person;
