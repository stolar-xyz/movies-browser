import { all } from 'redux-saga/effects';
import { genresSaga } from './features/movies/Genres/genresSaga';
import { listSaga } from './features/listSaga';
import { themeSaga } from './features/ThemeToggler/themeSaga';
import { searchSaga } from './features/Search/searchSaga';
import { itemSaga } from './features/itemSaga';

export default function* rootSaga() {
  yield all([themeSaga(), listSaga(), genresSaga(), searchSaga(), itemSaga()]);
}
