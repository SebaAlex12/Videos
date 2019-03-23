import {
  ADD_VIDEO_FAVOURITE,
  GET_VIDEOS,
  DELETE_VIDEO,
  GET_VIDEO_USER_CATEGORIES,
  ADD_VIDEO_USER_CATEGORY,
  GET_VIDEO_USER_CATEGORY
} from "../actions/types";

const initialState = {
  videos: [],
  video: {},
  categories: [],
  category: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload
      };
    case DELETE_VIDEO:
      return {
        ...state,
        videos: state.videos.filter(video => video._id !== action.payload)
      };
    case ADD_VIDEO_FAVOURITE:
      return {
        ...state,
        videos: [action.payload, ...state.videos]
      };
    case GET_VIDEO_USER_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case ADD_VIDEO_USER_CATEGORY:
      return {
        ...state,
        categories: [action.payload, ...state.categories]
      };
    case GET_VIDEO_USER_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
    default:
      return state;
  }
}
