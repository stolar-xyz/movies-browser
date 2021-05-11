import Subheader from '../../../common/styled/Subheader';
import { FailurePicture, PictureContainer } from './styled';

const Failure = ({ title }) => (
  <>
    <Subheader>Sorry, there are no results for “{title}”</Subheader>
    <PictureContainer>
      <FailurePicture />
    </PictureContainer>
  </>
);

export default Failure;
