import { decorate, observable, action } from "mobx";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";
import { isEmpty } from "lodash";

class AuthStore {
  user = {};
  isAuthenticated = false;

  constructor(rootStore, authService) {
    this.authService = authService;
    this.rootStore = rootStore;
    // Check for token
    console.log(localStorage);
    if (localStorage.getItem("jwtToken")) {
      // Set auth token header auth
      setAuthToken(localStorage.jwtToken);
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

  // Register User
  registerUser = (userData, history) => {
    this.authService
      .registerUser(userData)
      .then(res => history.push("/login"))
      .catch(err => {
        this.rootStore.errorStore.setErrors(err.response.data);
      });
  };

  // Login - Get User Token
  loginUser = userData => {
    this.authService
      .loginUser(userData)
      .then(res => {
        // Save to localStorage
        const { token } = res.data;
        // Set token to ls
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
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
    setAuthToken(false);
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
