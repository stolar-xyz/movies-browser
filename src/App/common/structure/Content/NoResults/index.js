import Container from '../../../styled/Container';
import Subheader from '../../../styled/Subheader';
import { NoResultsPicture } from './styled';

const NoResults = ({ text }) => (
  <>
    <Subheader>Sorry, there are no results for "{text}"</Subheader>
    <Container>
      <NoResultsPicture />
    </Container>
  </>
);

export default NoResults;
