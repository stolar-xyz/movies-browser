import Tile from '../../common/structure/Tile';
import Section from '../../common/styled/Section';
import ProfileIcon from '../../assets/svgs/profile.svg';
import RenderCondition from '../RenderCondition';
import useItemResources from '../useItemResources';

const PersonPage = () => {
  const {
    resultPage: { name, profile_path, birthday, place_of_birth, biography },
    itemStatus,
  } = useItemResources('person');

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
