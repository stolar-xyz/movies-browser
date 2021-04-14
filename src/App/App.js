import Navigation from './common/structure/Navigation';
import Main from './common/styled/Main';
import Subheader from './common/styled/Subheader';
import Movies from './common/structure/Movies';
import PageSelect from './common/structure/PageSelect';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Normalize />
    <Navigation />
    <Main>
      <Subheader title={'Popular movies'} />
      <Movies />
    </Main>
    <PageSelect minNumber={'1'} maxNumber={'500'} />
  </ThemeProvider>
);

export default App;
