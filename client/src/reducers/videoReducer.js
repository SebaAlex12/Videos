import {
  ADD_VIDEO_USER_FAVOURITE,
  GET_VIDEOS_USER,
  GET_VIDEO_USER,
  DELETE_VIDEO_USER,
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
    case GET_VIDEOS_USER:
      return {
        ...state,
        videos: action.payload
      };
    case GET_VIDEO_USER:
      return {
        ...state,
        video: action.payload
      };
    case DELETE_VIDEO_USER:
      return {
        ...state,
        videos: state.videos.filter(video => video._id !== action.payload)
      };
    case ADD_VIDEO_USER_FAVOURITE:
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
