import { SET_LOADING } from "./actionTypes";

export function setIsLoading(isLoading) {
  return {
    type: SET_LOADING,
    isLoading,
  };
}
