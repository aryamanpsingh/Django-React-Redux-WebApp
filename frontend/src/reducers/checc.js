import {
  GET_CHECCS,
  DELETE_CHECC,
  ADD_CHECC,
  CLEAR_CHECC
} from "../actions/types.js";

const initialState = {
  checc: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CHECCS:
      return {
        ...state,
        checc: action.payload
      };
    case DELETE_CHECC:
      return {
        ...state,
        checc: state.checc.filter(checc => checc.id != action.payload)
      };
    case ADD_CHECC:
      return {
        ...state,
        checc: [...state.checc, action.payload]
      };
    case CLEAR_CHECC:
      return {
        ...state,
        checc: []
      };
    default:
      return state;
  }
}
