import { getAuthUserData } from "./auth-reducer";

const SINITIALIZED_SUCCESS = "SINITIALIZED_SUCCESS";

let initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }

    default:
      return state;
  }
}

export const initializedSuccess = () => ({ type: SINITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise])
    .then(() => {
        dispatch(initializedSuccess());
  });
}

export default appReducer;
