import { decorate, observable, action, computed } from "mobx";
import AuthStore from "./ApplicationStores/AuthStore";
import ErrorStore from "./ApplicationStores/ErrorStore";
import LoginStore from "./DomainStores/LoginStore";
import AuthService from "../services/AuthService";

class RootStore {
  authStore = null;
  errorStore = null;
  loginStore = null;
  constructor() {
    this.errorStore = new ErrorStore(this);
    this.authStore = new AuthStore(this, new AuthService());
    this.loginStore = new LoginStore(this);
  }
}

const store = new RootStore();

decorate(store.authStore, {
  isAuthenticated: observable,
  user: observable,
  registerUser: action,
  loginUser: action,
  setCurrentUser: action,
  logoutUser: action
});

decorate(store.errorStore, {
  errors: observable,
  clearErrors: action,
  setErrors: action
});

decorate(store.loginStore, {
  email: observable,
  password: observable,
  onSubmit: action,
  onChange: action
});

export default store;
