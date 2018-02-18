import { combineReducers } from 'redux';

import { PICTURE_QUERY, HISTORY } from '../actions/'; //Import the actions types constant we defined in our actions

let dataState = { data: [], loading: true };

const pictureReducer = (state = dataState, action) => {
  switch (action.type) {
    case PICTURE_QUERY:
      //  console.log('hereerrr', action.data);
      state = Object.assign({}, action.data);
      return state;
    default:
      return state;
  }
};

const historyReducer = (state = dataState, action) => {
  switch (action.type) {
    case HISTORY:
      return state.slice.push(action.data);
    default:
      return state;
  }
};
// Combine all the reducers
const rootReducer = combineReducers({
  pictureReducer,
  historyReducer,
  // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});

export default rootReducer;
