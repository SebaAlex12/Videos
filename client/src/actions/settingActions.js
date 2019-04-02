import axios from "axios";
import { GET_SETTINGS, UPDATE_SETTINGS, GET_ERRORS } from "./types";

export const getSettings = () => dispatch => {
  axios
    .get("api/settings")
    .then(res =>
      dispatch({
        type: GET_SETTINGS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SETTINGS,
        payload: null
      })
    );
};

export const updateSettings = data => (dispatch, getState) => {
  //   console.log("actionCreator");
  console.log(getState);
  // axios
  //   .post(`api/settings/update/`, data)
  //   .then(res =>
  //     dispatch({
  //       type: UPDATE_SETTINGS,
  //       payload: res.data
  //     })
  //   )
  //   .catch(err =>
  //     dispatch({
  //       type: GET_ERRORS,
  //       payload: err.response.data
  //     })
  //   );
};
