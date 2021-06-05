import Subheader from '../../common/styled/Subheader';
import Person from '../../common/structure/Person';
import Section from '../../common/styled/Section';
import List from '../../common/styled/List';
import ThemeToggler from '../themeToggler/ThemeToggler';
import profilePhoto from '../.././assets/example/profilePhoto.jpg';

//test People structure

const People = () => (
  <Section>
    <Subheader extra>
      Popular people <ThemeToggler />
    </Subheader>
    <List people>
      <Person name={'Henry Cavill'} source={profilePhoto}/>
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
