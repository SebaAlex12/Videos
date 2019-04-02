import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { getSettings } from "./actions/settingActions";
import { Provider } from "react-redux";
import history from "./history";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import SettingMain from "./components/setting/SettingMain";

import YoutubeMain from "./components/youtube/YoutubeMain";
import YoutubeItemPopup from "./components/youtube/YoutubeItemPopup";
import VideoItemPopup from "./components/video/VideoItemPopup";
import VideoMain from "./components/video/VideoMain";
import VideoItemDelete from "./components/video/VideoItemDelete";

import "./App.scss";

// Check for token
if (localStorage.jwtToken) {
  //  Set auth token auth
  setAuthToken(localStorage.jwtToken);
  // Decode token get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and Authenticate
  store.dispatch(setCurrentUser(decoded));

  // Set user Settings
  store.dispatch(getSettings());

  // check for expire token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <Navbar />
            <div className="page-center-box">
              <Route exact path="/" component={Landing} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/setting" component={SettingMain} />
              <Route exact path="/youtube" component={YoutubeMain} />
              <Route
                exact
                path="/youtube/video/:key"
                component={YoutubeItemPopup}
              />
              <Route exact path="/videos" component={VideoMain} />
              <Route
                exact
                path="/videos/video/:key"
                component={VideoItemPopup}
              />
              <Route
                exact
                path="/videos/delete/:id"
                component={VideoItemDelete}
              />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
