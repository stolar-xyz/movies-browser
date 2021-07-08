import Subheader from '../../../styled/Subheader';
import { DangerIcon, Description, StyledContainer } from './styled';

const Failure = ({ search }) => (
  <StyledContainer search={search}>
    <DangerIcon search={search} />
    <Subheader search={search}>Ooops! Something went wrong...</Subheader>
    <Description search={search}>
      Please check your network connection
      <br /> and try again
    </Description>
  </StyledContainer>
);

export default Failure;
