import { decorate, observable, action } from "mobx";

class RegisterStore {
  email = "";
  password = "";
  password2 = "";
  name = "";

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  clearStore = () => {
    this.email = "";
    this.password = "";
    this.password2 = "";
    this.name = "";
  };

  onChange = event => {
    this[event.target.name] = event.target.value;
  };

  onSubmit = (event, history) => {
    event.preventDefault();

    const newUser = {
      name: this.name,
      email: this.email,
      password: this.password,
      password2: this.password2
    };

    this.rootStore.authStore.registerUser(newUser, history);
  };
}

decorate(RegisterStore, {
  email: observable,
  password: observable,
  password2: observable,
  name: observable,
  onSubmit: action,
  onChange: action
});

export default RegisterStore;
