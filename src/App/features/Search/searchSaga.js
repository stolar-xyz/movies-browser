import { call, put, debounce } from 'redux-saga/effects';
import { getDataFromApi } from '../getDataFromApi';
import store from '../../store';
import {
  fetchSearchError,
  fetchSearchSuccess,
  setActiveSearchPath,
} from './searchSlice';

function* fetchSearchHandler() {
  const activePath = store.getState().search.activePath;

  try {
    const responseData = yield call(getDataFromApi, activePath);
    yield put(fetchSearchSuccess(responseData));
  } catch (error) {
    yield put(fetchSearchError());
  }
}

export function* searchSaga() {
  yield debounce(500, setActiveSearchPath.type, fetchSearchHandler);
}
