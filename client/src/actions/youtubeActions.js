import axios from "axios";
import {
  GET_YOUTUBE_VIDEOS,
  GET_ERRORS,
  GET_YOUTUBE_VIDEO_BY_LINK
} from "./types";

export const youtubeList = searchData => dispatch => {
  axios
    .post("/api/youtube/videos", searchData)
    .then(res =>
      dispatch({
        type: GET_YOUTUBE_VIDEOS,
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

export const getYoutubeByLink = data => dispatch => {
  axios
    .post("/api/youtube/videos/video_link", data)
    .then(res =>
      dispatch({
        type: GET_YOUTUBE_VIDEO_BY_LINK,
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
