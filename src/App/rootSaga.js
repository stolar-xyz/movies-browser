import { all } from 'redux-saga/effects';
import { genresSaga } from './common/structure/Genres/genresSaga';
import { listSaga } from './features/listSaga';
import { themeSaga } from './features/themeToggler/themeSaga';

export default function* rootSaga() {
  yield all([themeSaga(), listSaga(), genresSaga()]);
}
