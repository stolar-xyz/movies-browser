import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchList, selectResult, selectStatus } from '../listSlice';
import { usePageParameters } from '../usePageParameters';
import Subheader from '../../common/styled/Subheader';
import Person from '../../common/structure/Person';
import Section from '../../common/styled/Section';
import List from '../../common/styled/List';
import ThemeToggler from '../ThemeToggler';
import Loading from '../../common/structure/Content/Loading';
import Failure from '../../common/structure/Content/Failure';
import PageSelect from '../PageSelect';

const PeoplePage = () => {
  const resultPage = useSelector(selectResult);
  const listStatus = useSelector(selectStatus);
  const page = +usePageParameters();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList({ page: page, type: 'people' }));
  }, [dispatch, page]);

  switch (listStatus) {
    case 'initial':
      return null;

    case 'loading':
      return <Loading />;

    case 'error':
      return <Failure />;

    case 'success':
      return (
        <>
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
          <PageSelect />
        </>
      );

    default:
      throw new Error(`incorrect status - ${listStatus}`);
  }
};

export default PeoplePage;
