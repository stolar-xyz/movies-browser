import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchGenres,
  fetchGenresSuccess,
  fetchGenresError,
} from './genresSlice';
import { getDataFromApi } from '../../getDataFromApi';
import { base, apiKey, language } from '../../../apiDetails';

function* fetchGenresHandler() {
  const genresPath = `${base}genre/movie/list${apiKey}${language}`;

  try {
    const responseData = yield call(getDataFromApi, genresPath);
    yield put(fetchGenresSuccess(responseData));
  } catch (error) {
    yield put(fetchGenresError());
  }
}

export function* genresSaga() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
