import Overlay from '../Overlay';
import {
  StyledPerson,
  Image,
  Wrapper,
  Name,
  Role,
  OverlayContainer,
} from './styled';

const Person = ({ name, role, source }) => (
  <StyledPerson>
    {source ? (
      <Image alt={`photo of ${name}`} src={source} />
    ) : (
      <OverlayContainer>
        <Overlay on={'person'} />
      </OverlayContainer>
    )}
    <Wrapper>
      <Name>{name}</Name>
      {role && <Role>{role}</Role>}
    </Wrapper>
  </StyledPerson>
);

export default Person;
