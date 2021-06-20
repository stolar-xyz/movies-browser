import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchList, selectResult } from '../listSlice';
import Subheader from '../../common/styled/Subheader';
import Person from '../../common/structure/Person';
import Section from '../../common/styled/Section';
import List from '../../common/styled/List';
import ThemeToggler from '../themeToggler/ThemeToggler';

const People = () => {
  const resultPage = useSelector(selectResult);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList({ page: '1', type: 'people' }));
  }, [dispatch]);

  return (
    <Section>
      <Subheader extra>
        Popular people
        <ThemeToggler />
      </Subheader>
      <List people>
        {resultPage.map(({ name, profile_path, id }) => (
          <Person name={name} source={profile_path} key={id} />
        ))}
      </List>
    </Section>
  );
};

export default People;
