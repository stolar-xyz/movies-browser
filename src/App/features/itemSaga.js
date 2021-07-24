import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchItem, fetchItemSuccess, fetchItemError } from './itemSlice';
import { getDataFromApi } from './getDataFromApi';
import { base, apiKey, language } from '../apiDetails';

const setItemsLength = items => {
  return items.length > 16 ? Math.ceil(items.length / 3) : items.length;
};

function* fetchItemHandler({ payload: { id, type } }) {
  const path = (() => {
    switch (type) {
      case 'movie':
        return `${base}movie/${id}${apiKey}${language}`;
      case 'person':
        return `${base}person/${id}${apiKey}${language}`;
      default:
        return null;
    }
  })();

  const detailsPath = (() => {
    switch (type) {
      case 'movie':
        return `${base}movie/${id}/credits${apiKey}`;
      case 'person':
        return `${base}person/${id}/movie_credits${apiKey}${language}`;
      default:
        return null;
    }
  })();

  try {
    const [responseData, responseDetailsData] = yield all([
      call(getDataFromApi, path),
      call(getDataFromApi, detailsPath),
    ]);

    yield put(
      fetchItemSuccess({
        responseData,
        responseDetailsData,
        castItemsLength: setItemsLength(responseDetailsData.cast),
        crewItemsLength: setItemsLength(responseDetailsData.crew),
      })
    );
  } catch (error) {
    yield put(fetchItemError());
  }
}

export function* itemSaga() {
  yield takeLatest(fetchItem.type, fetchItemHandler);
}
