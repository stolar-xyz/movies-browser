import Subheader from '../../common/styled/Subheader';
import Person from '../../common/structure/Person';
import Container from '../../common/styled/Container';
import { StyledPeople } from './styled';

const People = () => (
  <Container>
    <Subheader>Popular people</Subheader>
    <StyledPeople>
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
    </StyledPeople>
  </Container>
);

export default People;
