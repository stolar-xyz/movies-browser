import Subheader from '../../../styled/Subheader';
import { DangerIcon, Description, Container } from './styled';

const Failure = ({ search }) => (
  <Container search={search}>
    <DangerIcon search={search} />
    <Subheader search={search}>Ooops! Something went wrong...</Subheader>
    <Description search={search}>
      Please check your network connection
      <br /> and try again
    </Description>
  </Container>
);

export default Failure;
