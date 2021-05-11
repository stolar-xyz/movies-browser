import Container from '../../../common/styled/Container';
import Subheader from '../../../common/styled/Subheader';
import { Loader } from './styled';

const Loading = ({ title }) => (
  <>
    <Subheader>Search results for “{title}”</Subheader>
    <Container>
      <Loader />
    </Container>
  </>
);

export default Loading;
