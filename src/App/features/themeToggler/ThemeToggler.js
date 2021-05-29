import { Toggler, Ball, TogglerField } from './styled';

const ThemeToggler = () => {
  return (
    <Toggler title={'Toggle theme'}>
      <TogglerField>
        <Ball />
      </TogglerField>
    </Toggler>
  );
};

export default ThemeToggler;
