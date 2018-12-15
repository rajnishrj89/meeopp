import { all } from 'redux-saga/effects';
import { createUserSaga } from './user/saga';


export default function* rootSaga() {
  yield all([
    createUserSaga(),
  ]);
}
