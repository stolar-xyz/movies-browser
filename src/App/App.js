import Navigation from './common/structure/Navigation';
import Movies from './features/movies/Movies';
import People from './features/people/People';
import PageSelect from './common/structure/PageSelect';
import MoviePage from './features/moviePage/MoviePage';
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
      <main>
        <Switch>
          <Route path={toMovies()}>
              <MoviePage />
              <Movies />
          </Route>
          <Route path={toPeople()}>
            <People />
          </Route>
          <Route>
            <Redirect to={toMovies()} />
          </Route>
        </Switch>
      </main>
    </HashRouter>
    <PageSelect minNumber={'1'} maxNumber={'500'} />
  </ThemeProvider>
);

export default App;
