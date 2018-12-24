import { decorate, observable, action } from "mobx";

class LoginStore {
  email = "";
  password = "";

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  clearStore = () => {
    this.email = "";
    this.password = "";
  };

  onChange = event => {
    this[event.target.name] = event.target.value;
  };

  onSubmit = event => {
    event.preventDefault();

    const userData = {
      email: this.email,
      password: this.password
    };

    this.rootStore.authStore.loginUser(userData);
  };
}

decorate(LoginStore, {
  email: observable,
  password: observable,
  onSubmit: action,
  onChange: action
});

export default LoginStore;
