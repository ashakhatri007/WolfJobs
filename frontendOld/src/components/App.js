import React from "react";
import { connect } from "react-redux";
// import Home from './Home';

import jwtDecode from "jwt-decode";

import {
  BrowserRouter as Router,
  // Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import {
  Home,
  Page404,
  Navbar,
  Login,
  Signup,
  Settings,
  Goal,
  History,
  UserApplication,
} from "./";
// import PropTypes from "prop-types";
import { authenticateUser, refreshUserData } from "../actions/auth";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";
import { fetchJobs } from "../actions/job";
import { fetchApplications } from "../actions/job";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrivateRoute = (privateRouteProps) => {
  const { isLoggedIn, path, component: Component } = privateRouteProps;

  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

class App extends React.Component {
  componentDidMount() {
    //const {user} = this.props.auth
    //this.props.dispatch(fetchFriends(user._id));
    this.props.dispatch(fetchJobs());
    this.props.dispatch(fetchApplications());

    const token = getAuthTokenFromLocalStorage();

    if (token) {
      const user = jwtDecode(token);

      console.log("user", user);

      this.props.dispatch(
        authenticateUser({
          email: user.email,
          _id: user._id,
          name: user.name,
        })
      );
      //const users = this.props.auth.user
      this.props.dispatch(refreshUserData(user._id));
    }
  }

  render() {
    const { auth } = this.props;
    // const { isLoggedIn } = this.props.auth;
    // const { user } = this.props.auth;
    const { job } = this.props;
    return (
      <Router>
        <div className="wrapper">
          <ToastContainer
            toastStyle={{
              backgroundColor: "#f5f5f5",
              color: "#000",
              border: "1px solid #000",
              borderRadius: "5px",
            }}
          />
          <Navbar />
          {/* <Home /> */}

          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return (
                  <div>
                    <Home {...props} job={job} />
                  </div>
                );
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute
              path="/settings"
              component={Settings}
              isLoggedIn={auth.isLoggedIn}
            />
            <PrivateRoute
              path="/goal"
              component={Goal}
              isLoggedIn={auth.isLoggedIn}
              isLoading={this.props.isLoading}
            />
            <PrivateRoute
              path="/history"
              component={History}
              isLoggedIn={auth.isLoggedIn}
            />
            <PrivateRoute
              path="/applicationinfo"
              component={UserApplication}
              isLoggedIn={auth.isLoggedIn}
            />

            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    profile: state.profile,
    job: state.job,
    isLoading: state.isLoading,
  };
}
export default connect(mapStateToProps)(App);
