import { takeLatest, call, put } from 'redux-saga/effects';
import { CREATE_USER, CREATE_USER_SUCCESS, CREATE_USER_ERROR } from './constants';
import { createProfile } from './api';

/**
 * action Type of CREATE_USER
 * @param {Object} action
 */
function* userSaga(action) {
  try {
    const data = yield call(createProfile, action.payload);
    yield localStorage.setItem('persist:root', JSON.stringify({
      phase: 'SUCCESS',
      user: JSON.stringify(data),
      error: null,
    }));
    yield put({ type: CREATE_USER_SUCCESS, data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: CREATE_USER_ERROR, error });
  }
}

/**
 * CREATE User Saga
 */
export function* createUserSaga() {
  yield takeLatest(CREATE_USER, userSaga);
}
