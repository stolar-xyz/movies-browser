import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import themeReducer from './features/ThemeToggler/themeSlice';
import listReducer from './features/listSlice';
import genresReducer from './features/movies/Genres/genresSlice';
import searchReducer from './features/Search/searchSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    theme: themeReducer,
    list: listReducer,
    genres: genresReducer,
    search: searchReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
