import { call, put, debounce } from 'redux-saga/effects';
import { getDataFromApi } from '../getDataFromApi';
import { fetchSearch, fetchSearchError, fetchSearchSuccess } from './searchSlice';
import { apiKey, base, language } from '../../apiDetails';

function* fetchSearchHandler({ payload: { pathname, query } }) {
  const path = `${base}search/${pathname}${apiKey}${language}&query=${query}`;

  try {
    const responseData = yield call(getDataFromApi, path);
    yield put(fetchSearchSuccess(responseData));
  } catch (error) {
    yield put(fetchSearchError());
  }
}

export function* searchSaga() {
  yield debounce(500, fetchSearch.type, fetchSearchHandler);
}
