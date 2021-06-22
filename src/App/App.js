import Navigation from './common/structure/Navigation';
import MoviesPage from './features/movies/MoviesPage';
import PeoplePage from './features/people/PeoplePage';
import PageSelect from './common/structure/PageSelect';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { toMovies, toPeople } from './routes';
import { useSelector } from 'react-redux';
import { selectTheme } from './features/ThemeToggler/themeSlice';

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
            <Route path={toMovies()}>
              <MoviesPage />
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
      <PageSelect minNumber={'1'} maxNumber={'500'} />
    </ThemeProvider>
  );
};

export default App;
