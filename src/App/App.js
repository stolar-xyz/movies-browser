import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { toMovie, toMovies, toPeople, toPerson } from './routes';
import { useSelector } from 'react-redux';
import { selectTheme } from './features/ThemeToggler/themeSlice';
import Navigation from './common/structure/Navigation';
import MoviesPage from './features/movies/MoviesPage';
import PeoplePage from './features/people/PeoplePage';
import PersonPage from './features/people/PersonPage';
import MoviePage from './features/movies/MoviePage';

const App = () => {
  const isTheme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={isTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Normalize />
      <HashRouter>
        <Navigation />
        <main>
          <Switch>
            <Route path={toMovie(':id')}>
              <MoviePage />
            </Route>
            <Route path={toMovies()}>
              <MoviesPage />
            </Route>
            <Route path={toPerson(':id')}>
              <PersonPage />
            </Route>
            <Route path={toPeople()}>
              <PeoplePage />
            </Route>
            <Route>
              <Redirect to={toMovies()} />
            </Route>
          </Switch>
        </main>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
