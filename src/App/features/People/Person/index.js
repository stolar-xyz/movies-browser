import { StyledPerson, Image, Wrapper, Name } from './styled';

const Person = ({ name }) => (
  <StyledPerson>
    <Image alt={`photo of ${name}`} src={'https://thisdoesnotexist.com/'} />
    <Wrapper>
      <Name>{name}</Name>
    </Wrapper>
  </StyledPerson>
);

export default Person;
