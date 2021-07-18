import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItem, selectResult, selectStatus } from '../itemSlice';
import { useParams } from 'react-router-dom';
import Tile from '../../common/structure/Tile';
import Section from '../../common/styled/Section';
import ProfileIcon from '../../assets/svgs/profile.svg';
import RenderCondition from '../RenderCondition';

const PersonPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { profile_path, name, birthday, place_of_birth, biography } =
    useSelector(selectResult);
  const itemStatus = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchItem({ id, type: 'person' }));
  }, [id, dispatch]);

  return RenderCondition(
    itemStatus,
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
};

export default PersonPage;
