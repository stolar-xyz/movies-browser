import Container from '../../../styled/Container';
import Subheader from '../../../styled/Subheader';
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
