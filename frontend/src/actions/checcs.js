import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./users";

import { GET_CHECCS, DELETE_CHECC, ADD_CHECC } from "./types";

// GET checcS
export const getCheccs = () => (dispatch, getState) => {
  axios
    .get("/api/orders/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_CHECCS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE checc
export const deleteChecc = id => (dispatch, getState) => {
  axios
    .delete(`/api/orders/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteChecc: "Checc Deleted" }));
      dispatch({
        type: DELETE_CHECC,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD checc
export const addChecc = checc => (dispatch, getState) => {
  axios
    .post("/api/orders/", checc, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addChecc: "Checc Added" }));
      dispatch({
        type: ADD_CHECC,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
