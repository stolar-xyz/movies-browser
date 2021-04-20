import Subheader from '../../common/styled/Subheader';
import Person from '../../common/structure/Person';
import Section from '../../common/styled/Section';
import List from '../../common/styled/List';

const People = () => (
  <Section>
    <Subheader>Popular people</Subheader>
    <List people>
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
    </List>
  </Section>
);

export default People;
