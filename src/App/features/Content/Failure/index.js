import Container from '../../../common/styled/Container';
import Subheader from '../../../common/styled/Subheader';
import { FailurePicture } from './styled';

const Failure = ({ title }) => (
  <>
    <Subheader>Sorry, there are no results for “{title}”</Subheader>
    <Container>
      <FailurePicture />
    </Container>
  </>
);

export default Failure;
