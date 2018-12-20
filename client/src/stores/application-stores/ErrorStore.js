class ErrorStore {
  errors = {};

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  setErrors = values => {
    this.errors = values;
  };

  clearErrors = () => {
    this.setErrors({});
  };
}

export default ErrorStore;
