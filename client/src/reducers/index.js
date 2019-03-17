import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import youtubeReducer from "./youtubeReducer";
import settingReducer from "./settingReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  user: userReducer,
  youtube: youtubeReducer,
  setting: settingReducer
});
