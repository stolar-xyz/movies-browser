import Container from '../../../common/styled/Container';
import Subheader from '../../../common/styled/Subheader';
import { DangerIcon, Description, Button } from './styled';

const Failure = () => (
  <Container>
    <DangerIcon />
    <Subheader>Ooops! Something went wrong...</Subheader>
    <Description>
      Please check your network connection
      <br /> and try again
    </Description>
    <Button>Back to home page</Button>
  </Container>
);

export default Failure;
