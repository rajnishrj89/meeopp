import {
  INIT, SUCCESS, LOADING, ERROR,
} from '../../utils/constants';
import {
  CREATE_USER, CREATE_USER_SUCCESS, CREATE_USER_ERROR,
} from './constants';

const initialState = {
  phase: INIT,
  user: null,
  error: null,
};

/**
 * User Reducer
 * @param {Object} state
 * @param {Object} action
 */
export function userStore(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        phase: LOADING,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        phase: SUCCESS,
        user: action.data,
        error: null,
      };
    case CREATE_USER_ERROR:
      return { ...state, phase: ERROR, error: action.error };
    default:
      return state;
  }
}

/**
 * CREATE User Info for Login
 * @param {String} data
 */
export const createUser = payload => ({
  type: CREATE_USER,
  payload,
});
