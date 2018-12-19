class LoginStore {
  email = "";
  password = "";

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

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

export default LoginStore;
