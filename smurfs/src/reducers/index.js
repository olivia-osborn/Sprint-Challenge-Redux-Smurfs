import {
  FETCHING_SMURFS_START,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  ADDING_SMURF_START,
  ADDING_SMURF_SUCCESS,
  ADDING_SMURF_FAILURE,
  DELETING_SMURF_START,
  DELETING_SMURF_SUCCESS,
  DELETING_SMURF_FAILURE,
} from "../actions";

const initialState = {
  smurfList: [],
  isFetchingSmurfs: false,
  isAddingSmurf: false,
  isDeletingSmurf: false,
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
    case ADDING_SMURF_START:
      return {
        ...state,
        isAddingSmurf: true,
      }
    case ADDING_SMURF_SUCCESS:
      return {
        ...state,
        isAddingSmurf: false,
        smurfList: action.payload,
        error: null
      }
    case ADDING_SMURF_FAILURE:
      return {
        ...state,
        isAddingSmurf: false,
        error: action.payload
      }
    case DELETING_SMURF_START:
      return {
        ...state,
        isDeletingSmurf: true
      }
    case DELETING_SMURF_SUCCESS:
      console.log("success", action.payload)
      return {
        ...state,
        isDeletingSmurf: false,
        error: null,
        smurfList: action.payload
      }
    case DELETING_SMURF_FAILURE:
      console.log("failure", action.payload)
      return {
        ...state,
        isDeletingSmurf: false,
        error: action.payload
      }


    default:
      return state;
  }
}

export default smurfs;
