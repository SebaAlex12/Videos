import axios from "axios";
import { GET_YOUTUBE_VIDEOS, GET_ERRORS } from "./types";

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
