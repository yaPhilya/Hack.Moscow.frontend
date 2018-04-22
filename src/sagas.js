import { all, takeEvery, put, call } from 'redux-saga/effects'
import { FETCH_EXTRACT_REQUEST, setModelsCreator } from './actions'
import { doParseRequest } from './api'

function * pasrseAsync (action) {
  const resp = yield call(doParseRequest, action.text)
  const models = resp.data
  console.log(models)

  yield put(setModelsCreator(models))
}

function * extractSaga () {
  yield takeEvery(FETCH_EXTRACT_REQUEST, pasrseAsync)
}

export default function * rootSaga () {
  yield all([
    extractSaga(),
  ])
}
