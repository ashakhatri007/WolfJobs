import { SET_LOADING } from "../actions/actionTypes";

const initialUtilState = {
  isLoading: false,
};

export default function utilState(state = initialUtilState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
}
