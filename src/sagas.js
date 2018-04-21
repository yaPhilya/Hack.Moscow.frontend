import { all, takeEvery, put } from 'redux-saga/effects'
import { FETCH_EXTRACT_REQUEST, setModelsCreator } from './actions'

function * fetchAsync (action) {
  console.log('Fetch: ' + action.text)

  yield put(setModelsCreator([
    {
      name: action.text,
      x: 0,
      y: 0,
      z: 0,
    },
    {
      name: 'apple',
      x: 100,
      y: 100,
      z: 0,
    },
  ]))
}

function * extractSaga () {
  yield takeEvery(FETCH_EXTRACT_REQUEST, fetchAsync)
}

export default function * rootSaga () {
  yield all([
    extractSaga(),
  ])
}
