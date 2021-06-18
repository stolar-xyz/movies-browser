import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchList, fetchListSuccess, fetchListError } from './listSlice';
import { getDataFromApi } from './getDataFromApi';
import { base, apiKey, language } from '../apiDetails';

function* fetchListHandler({ payload: { page, type } }) {
  const url = (() => {
    switch (type) {
      case 'movies':
        return `${base}discover/movie${apiKey}${language}&sort_by=popularity.desc&page=${page}`;
      case 'people':
        return `${base}person/popular${apiKey}${language}&page=${page}`;
      default:
        return null;
    }
  })();

  try {
    const responseData = yield call(getDataFromApi, url);
    yield put(fetchListSuccess(responseData));
  } catch (error) {
    yield put(fetchListError());
  }
}

export function* listSaga() {
  yield takeLatest(fetchList.type, fetchListHandler);
}
