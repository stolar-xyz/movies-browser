import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItem, selectResult, selectStatus } from '../itemSlice';
import { useParams } from 'react-router-dom';
import Tile from '../../common/structure/Tile';
import Section from '../../common/styled/Section';
import Loading from '../../common/structure/Content/Loading';
import Failure from '../../common/structure/Content/Failure';
import ProfileIcon from '../../assets/svgs/profile.svg';

const PersonPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { profile_path, name, birthday, place_of_birth, biography } =
    useSelector(selectResult);
  const itemStatus = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchItem({ id, type: 'person' }));
  }, [id, dispatch]);

  switch (itemStatus) {
    case 'initial':
      return null;

    case 'loading':
      return <Loading />;

    case 'error':
      return <Failure />;

    case 'success':
      return (
        <Section>
          <Tile
            altText={`photo of ${name}`}
            source={profile_path}
            name={name}
            icon={ProfileIcon}
            firstInformation={'Date of birth:'}
            firstInformationDetails={birthday}
            secondInformation={'Place of birth:'}
            secondInformationDetails={place_of_birth}
            description={biography}
          />
        </Section>
      );

    default:
      throw new Error(`incorrect status - ${itemStatus}`);
  }
};

export default PersonPage;
