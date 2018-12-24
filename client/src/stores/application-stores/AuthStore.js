import axios from "axios";
import { decorate, observable, action } from "mobx";
import jwt_decode from "jwt-decode";
import isEmpty from "../../validation/is-empty";

class AuthStore {
  user = {};
  isAuthenticated = false;

  constructor(rootStore, authApi) {
    this.authApi = authApi;
    this.rootStore = rootStore;
    // Check for token
    if (localStorage.jwtToken) {
      // Set auth token header auth
      this._setAuthToken(localStorage.jwtToken);
      // Decode token and get user info and exp
      const decoded = jwt_decode(localStorage.jwtToken);
      // Set user and isAuthenticated
      this.setCurrentUser(decoded);

      // Check for expired token
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        // Logout user
        this.logoutUser();
        // Redirect to login
        window.location.href = "/login";
      }
    }
  }

  _setAuthToken = token => {
    if (token) {
      // Apply to every request
      axios.defaults.headers.common["Authorization"] = token;
    } else {
      // Delete auth header
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  // Register User
  registerUser = (userData, history) => {
    this.authApi
      .registerUser(userData)
      .then(res => history.push("/login"))
      .catch(err => {
        this.rootStore.errorStore.setErrors(err.response.data);
      });
  };

  // Login - Get User Token
  loginUser = userData => {
    this.authApi
      .loginUser(userData)
      .then(res => {
        // Save to localStorage
        const { token } = res.data;
        // Set token to ls
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        this._setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        this.setCurrentUser(decoded);
      })
      .catch(err => {
        this.rootStore.errorStore.setErrors(err.response.data);
      });
  };

  // Set logged in user
  setCurrentUser = decoded => {
    this.user = decoded;
    this.isAuthenticated = !isEmpty(this.user);
  };

  // Log user out
  logoutUser = () => {
    // Remove token from localStorage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    this._setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    this.setCurrentUser({});
    // Redirect to login
    window.location.href = "/login";
  };
}

decorate(AuthStore, {
  isAuthenticated: observable,
  user: observable,
  registerUser: action,
  loginUser: action,
  setCurrentUser: action,
  logoutUser: action
});

export default AuthStore;
