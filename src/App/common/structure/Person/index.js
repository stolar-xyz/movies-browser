import Overlay from '../Overlay';
import {
  StyledPerson,
  Image,
  Wrapper,
  Name,
  Role,
  Container,
} from './styled';

const Person = ({ name, role, source }) => (
  <StyledPerson>
    <Container>
      {source ? (
        <Image alt={`photo of ${name}`} src={source} />
      ) : (
        <Overlay on={'person'} />
      )}
    </Container>
    <Wrapper>
      <Name>{name}</Name>
      {role && <Role>{role}</Role>}
    </Wrapper>
  </StyledPerson>
);

export default Person;
