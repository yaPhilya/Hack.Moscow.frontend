import { all, takeEvery, put } from 'redux-saga/effects'
import { FETCH_EXTRACT_REQUEST, setModelsCreator } from './actions'

function * fetchAsync (text) {
  console.log('Fetch: ' + text)
}

function * extractSaga () {
  yield takeEvery(FETCH_EXTRACT_REQUEST, fetchAsync, 'aaaa')

  yield put(setModelsCreator([
    {
      name: 'bottle',
    },
  ]))
}

export default function * rootSaga () {
  yield all([
    extractSaga(),
  ])
}
