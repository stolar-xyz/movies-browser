import { StyledPerson, Image, Wrapper, Name, Role } from './styled';

const Person = ({ name, role }) => (
  <StyledPerson>
    <Image alt={`photo of ${name}`} src={'https://thisdoesnotexist.com/'} />
    <Wrapper>
      <Name>{name}</Name>
      {role && <Role>{role}</Role>}
    </Wrapper>
  </StyledPerson>
);

export default Person;
