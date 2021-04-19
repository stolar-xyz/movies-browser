import Subheader from '../../common/styled/Subheader';
import Person from '../../common/structure/Person';
import Section from '../../common/styled/Section';
import { StyledPeople } from './styled';

const People = () => (
  <Section>
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
  </Section>
);

export default People;
