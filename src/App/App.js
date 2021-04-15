import Navigation from './common/structure/Navigation';
import Main from './common/styled/Main';
import Movies from './features/Movies/Movies';
import People from './features/People/People';
import PageSelect from './common/structure/PageSelect';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { toMovies, toPeople } from './routes';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Normalize />
    <HashRouter>
      <Navigation />
      <Main>
        <Switch>
          <Route path={toMovies()}>
            <Movies />
          </Route>
          <Route path={toPeople()}>
            <People />
          </Route>
          <Route>
            <Redirect to={toMovies()} />
          </Route>
        </Switch>
      </Main>
    </HashRouter>
    <PageSelect minNumber={'1'} maxNumber={'500'} />
  </ThemeProvider>
);

export default App;
