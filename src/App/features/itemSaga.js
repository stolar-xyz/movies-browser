import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchItem, fetchItemSuccess, fetchItemError } from './itemSlice';
import { getDataFromApi } from './getDataFromApi';
import { base, apiKey, language } from '../apiDetails';

function* fetchItemHandler({ payload: { id, type } }) {
  const url = (() => {
    switch (type) {
      case 'movie':
        return `${base}movie/${id}${apiKey}${language}`;
      case 'person':
        return `${base}person/${id}${apiKey}${language}`;
      default:
        return null;
    }
  })();

  try {
    const responseData = yield call(getDataFromApi, url);
    yield put(fetchItemSuccess(responseData));
  } catch (error) {
    yield put(fetchItemError());
  }
}

export function* itemSaga() {
  yield takeLatest(fetchItem.type, fetchItemHandler);
}
