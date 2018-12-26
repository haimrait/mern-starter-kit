import AuthStore from "./application-stores/AuthStore";
import WindowSizeStore from "./application-stores/WindowSizeStore";
import ErrorStore from "./application-stores/ErrorStore";
import AuthService from "../services/AuthService";

class RootStore {
  authStore = null;
  errorStore = null;
  windowSizeStore = null;

  constructor() {
    this.errorStore = new ErrorStore(this);
    this.windowSizeStore = new WindowSizeStore(this);
    this.authStore = new AuthStore(this, new AuthService());
  }
}

const store = new RootStore();

export default store;
