import Container from '../../../styled/Container';
import Subheader from '../../../styled/Subheader';
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
