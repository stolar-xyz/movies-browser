import { takeLatest, call, select } from 'redux-saga/effects';
import { selectTheme, toggleTheme } from './themeSlice';
import { saveDataInLocalStorage } from '../saveDataInLocalStorage';

function* saveThemeInLocalStorageHandler() {
  const theme = yield select(selectTheme);
  yield call(saveDataInLocalStorage, 'theme', theme);
}

export function* themeSaga() {
  yield takeLatest(toggleTheme.type, saveThemeInLocalStorageHandler);
}
