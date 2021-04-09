import Navigation from './common/structure/Navigation';
import Main from './common/styled/Main';
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
      
    </Main>
  </ThemeProvider>
);

export default App;
