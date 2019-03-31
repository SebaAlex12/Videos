import {
  GET_ERRORS,
  ADD_VIDEO_USER_FAVOURITE,
  GET_VIDEO_USER_CATEGORIES,
  GET_VIDEO_USER_CATEGORY,
  ADD_VIDEO_USER_CATEGORY,
  GET_VIDEOS_USER,
  GET_VIDEO_USER,
  DELETE_VIDEO_USER
} from "./types";
import axios from "axios";

export const getVideos = () => dispatch => {
  axios
    .get("/api/videos")
    .then(res =>
      dispatch({
        type: GET_VIDEOS_USER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: null
      })
    );
};

export const getVideo = id => dispatch => {
  axios
    .get(`/api/videos/current/${id}`)
    .then(res =>
      dispatch({
        type: GET_VIDEO_USER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const addVideoFavourite = data => dispatch => {
  axios
    .post("/api/videos/favourite", data)
    .then(res =>
      dispatch({
        type: ADD_VIDEO_USER_FAVOURITE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const deleteVideo = id => dispatch => {
  console.log("cationreator");
  axios
    .post(`api/videos/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_VIDEO_USER,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getVideoUserCategories = () => dispatch => {
  axios
    .get("api/videos/user/categories")
    .then(res =>
      dispatch({
        type: GET_VIDEO_USER_CATEGORIES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getVideoUserCategory = id => dispatch => {
  axios
    .get(`api/videos/user/categories/current/${id}`)
    .then(res =>
      dispatch({
        type: GET_VIDEO_USER_CATEGORY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const addVideoUserCategory = data => dispatch => {
  axios
    .post("api/videos/user/categories", data)
    .then(res =>
      dispatch({
        type: ADD_VIDEO_USER_CATEGORY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
