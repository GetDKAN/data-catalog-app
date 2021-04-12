import axios from "axios";

// Set Loading
export const setLoading = (dispatch, status) =>
  dispatch({ type: "SET_LOADING", payload: status });

// Set Error
export const setError = (dispatch, error) =>
  dispatch({
    type: "SET_ERROR",
    payload: { error: error.status, message: error.message }
  });

export const pathToJSONAPI = (apiUrl) => {
  return apiUrl.replace("api/1", "jsonapi");
};

// Set User (get user info)
export const getUser = async dispatch => {
  setLoading(dispatch, true);

  // do fetch
  await axios
    .get(pathToJSONAPI(process.env.REACT_APP_ROOT_URL))
    .then(res => {
      const result = res.data;
      // set user info
      dispatch({
        type: "SET_USER",
        payload: result.meta.links.me
      });
    })
    .catch(error => {
      const result = error;

      // set error if has any
      dispatch({
        type: "SET_ERROR",
        payload: {
          error: true,
          message: result
        }
      });
    });
};
