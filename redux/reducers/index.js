import { combineReducers } from 'redux';

import { PICTURE_QUERY } from '../actions/'; //Import the actions types constant we defined in our actions

let dataState = { data: [], loading: true };

const pictureReducer = (state = dataState, action) => {
  switch (action.type) {
    case PICTURE_QUERY:
      state = Object.assign({}, state, { data: action.data, loading: false });
      return state;
    default:
      return state;
  }
};

// Combine all the reducers
const rootReducer = combineReducers({
  pictureReducer,
  // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});

export default rootReducer;
