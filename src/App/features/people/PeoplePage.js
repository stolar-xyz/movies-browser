import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchList, selectResult, selectStatus } from '../listSlice';
import { usePageParameters } from '../usePageParameters';
import Subheader from '../../common/styled/Subheader';
import Person from '../../common/structure/Person';
import Section from '../../common/styled/Section';
import List from '../../common/styled/List';
import ThemeToggler from '../ThemeToggler';
import PageSelect from '../PageSelect';
import RenderCondition from '../RenderCondition';

const PeoplePage = () => {
  const resultPage = useSelector(selectResult);
  const listStatus = useSelector(selectStatus);
  const page = +usePageParameters();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList({ page, type: 'people' }));
  }, [dispatch, page]);

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
