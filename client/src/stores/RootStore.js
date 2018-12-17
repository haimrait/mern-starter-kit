import { decorate, observable } from "mobx";
import AuthStore from "./ApplicationStores/Auth/AuthStore";
import AuthApi from "../apis/Auth/AuthApi";
import ErrorStore from "./ApplicationStores/Error/ErrorStore";

class RootStore {
  authStore = null;
  errorStore = null;
  constructor() {
    this.errorStore = new ErrorStore();
    this.authStore = new AuthStore(new AuthApi(), this.errorStore);
  }
}

decorate(AuthStore, { isAuthenticated: observable, user: observable });
decorate(ErrorStore, { errors: observable });

export default new RootStore();
