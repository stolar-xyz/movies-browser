import Subheader from '../../common/styled/Subheader';
import Person from '../../common/structure/Person';
import { StyledPeople } from './styled';

const People = () => (
  <>
    <Subheader title={'Popular people'} />
    <StyledPeople>
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
      <Person name={'Henry Cavill'} />
    </StyledPeople>
  </>
);

export default People;
