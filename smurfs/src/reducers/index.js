import {
  FETCHING_SMURFS_START,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
} from "../actions";

const initialState = {
  smurfList: [],
  isFetchingSmurfs: false,
  isAddingSmurf: false,
  error: null,
}

const smurfs = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS_START:
      return {
        ...state,
        isFetchingSmurfs: true,
      }
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        smurfList: action.payload,
        isFetchingSmurfs: false,
        error: null
      }
    case FETCHING_SMURFS_FAILURE:
      return {
        ...state,
        isFetchingSmurfs: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default smurfs;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
