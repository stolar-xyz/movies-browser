import { Toggler, Ball, TogglerField } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, toggleTheme } from './themeSlice';

const ThemeToggler = () => {
  const isTheme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <Toggler
      onClick={() => dispatch(toggleTheme())}
      clicked={isTheme}
      title={'Toggle theme'}
    >
      <TogglerField>
        <Ball />
      </TogglerField>
    </Toggler>
  );
};

export default ThemeToggler;
