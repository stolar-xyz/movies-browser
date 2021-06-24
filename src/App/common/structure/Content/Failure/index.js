import Subheader from '../../../styled/Subheader';
import {
  DangerIcon,
  Description,
  StyledLinkButton,
  StyledContainer,
} from './styled';
import { toMovies } from '../../../../routes';

const Failure = () => (
  <StyledContainer>
    <DangerIcon />
    <Subheader>Ooops! Something went wrong...</Subheader>
    <Description>
      Please check your network connection
      <br /> and try again
    </Description>
    <StyledLinkButton to={toMovies()}>Back to home page</StyledLinkButton>
  </StyledContainer>
);

export default Failure;
