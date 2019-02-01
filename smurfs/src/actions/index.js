import axios from "axios";

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";
export const ADDING_SMURF_START = "ADDING_SMURF_START";
export const ADDING_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS";
export const ADDING_SMURF_FAILURE = "ADDING_SMURF_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({type: FETCHING_SMURFS_START});
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      dispatch({type: FETCHING_SMURFS_SUCCESS, payload: response.data})
    })
    .catch(err => {
      dispatch({type: FETCHING_SMURFS_FAILURE, payload: err})
    })
}

export const addNewSmurf = newSmurf => dispatch => {
  dispatch({type: ADDING_SMURF_START});
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(response => {
      console.log(response)
      dispatch({type: ADDING_SMURF_SUCCESS, payload: response.data})
    })
    .catch(err => {
      console.log(err)
      dispatch({type: ADDING_SMURF_FAILURE, payload: err})
    })
}

