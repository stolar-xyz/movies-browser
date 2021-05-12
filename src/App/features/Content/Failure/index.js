import Subheader from '../../../common/styled/Subheader';
import { DangerIcon, Description, Button, StyledContainer } from './styled';

const Failure = () => (
  <StyledContainer>
    <DangerIcon />
    <Subheader>Ooops! Something went wrong...</Subheader>
    <Description>
      Please check your network connection
      <br /> and try again
    </Description>
    <Button>Back to home page</Button>
  </StyledContainer>
);

export default Failure;
