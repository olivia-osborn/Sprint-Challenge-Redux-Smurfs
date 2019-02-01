import axios from "axios";

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";
export const ADDING_SMURF_START = "ADDING_SMURF_START";
export const ADDING_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS";
export const ADDING_SMURF_FAILURE = "ADDING_SMURF_FAILURE";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
