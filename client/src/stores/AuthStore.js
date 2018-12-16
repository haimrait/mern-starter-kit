import axios from "axios";
import jwt_decode from "jwt-decode";
import isEmpty from "../validation/is-empty";

class AuthStore {
  isAuthenticated = false;
  user = {};
  constructor() {
    debugger;
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
    debugger;
    axios
      .post("/api/users/register", userData)
      .then(res => history.push("/login"))
      .catch(err => {
        debugger;
        // dispatch({
        //   type: GET_ERRORS,
        //   payload: err.response.data
        // })
      });
  };

  // Login - Get User Token
  loginUser = userData => {
    debugger;
    axios
      .post("/api/users/login", userData)
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
        debugger;
        // dispatch({
        //   type: GET_ERRORS,
        //   payload: err.response.data
        // })
      });
  };

  // Set logged in user
  setCurrentUser = decoded => {
    debugger;
    this.isAuthenticated = !isEmpty(decoded);
    this.user = decoded;
  };

  // Log user out
  logoutUser = () => {
    debugger;
    // Remove token from localStorage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    this._setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    this.setCurrentUser({});
  };
}

export default AuthStore;
