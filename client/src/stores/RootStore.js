import { decorate, observable, action } from "mobx";
import AuthStore from "./application-stores/AuthStore";
import ErrorStore from "./application-stores/ErrorStore";
import LoginStore from "./ui-stores/LoginStore";
import RegisterStore from "./ui-stores/RegisterStore";
import SideBarStore from "./ui-stores/SideBarStore";
import AuthService from "../services/AuthService";

class RootStore {
  authStore = null;
  errorStore = null;
  loginStore = null;
  sideBarStore = null;

  constructor() {
    this.errorStore = new ErrorStore(this);
    this.authStore = new AuthStore(this, new AuthService());
    this.loginStore = new LoginStore(this);
    this.registerStore = new RegisterStore(this);
    this.sideBarStore = new SideBarStore(this);
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

decorate(store.sideBarStore, {
  collapsed: observable,
  onCollapse: action
});

decorate(store.loginStore, {
  email: observable,
  password: observable,
  onSubmit: action,
  onChange: action
});

decorate(store.registerStore, {
  email: observable,
  password: observable,
  password2: observable,
  name: observable,
  onSubmit: action,
  onChange: action
});

export default store;
