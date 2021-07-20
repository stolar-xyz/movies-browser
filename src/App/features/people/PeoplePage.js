import Subheader from '../../common/styled/Subheader';
import Person from '../../common/structure/Person';
import Section from '../../common/styled/Section';
import List from '../../common/styled/List';
import ThemeToggler from '../ThemeToggler';
import PageSelect from '../PageSelect';
import RenderCondition from '../RenderCondition';
import useListResources from '../useListResources';

const PeoplePage = () => {
  const { resultPage, listStatus } = useListResources('people');

  return RenderCondition(
    listStatus,
    <>
      <Section>
        <Subheader extra>
          Popular people
          <ThemeToggler />
        </Subheader>
        <List people>
          {resultPage.map(({ name, profile_path, id }) => (
            <Person name={name} source={profile_path} key={id} id={id} />
          ))}
        </List>
      </Section>
      <PageSelect />
    </>
  );
};

export default PeoplePage;
