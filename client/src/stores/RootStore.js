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
  registerStore = null;

  constructor() {
    this.errorStore = new ErrorStore(this);
    this.authStore = new AuthStore(this, new AuthService());
    this.loginStore = new LoginStore(this);
    this.registerStore = new RegisterStore(this);
    this.sideBarStore = new SideBarStore(this);
  }
}

const store = new RootStore();

export default store;
