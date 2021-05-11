import Container from '../../../common/styled/Container';
import Subheader from '../../../common/styled/Subheader';
import { NoResultsPicture } from './styled';

const NoResults = ({ title }) => (
  <>
    <Subheader>Sorry, there are no results for “{title}”</Subheader>
    <Container>
      <NoResultsPicture />
    </Container>
  </>
);

export default NoResults;
