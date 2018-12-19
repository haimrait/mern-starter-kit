class ErrorStore {
  errors = {};

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  setErrors = values => {
    debugger;
    this.errors = values;
  };

  // set errors(value) {
  //   this.errors(value);
  // }

  clearErrors = () => {
    this.setErrors({});
  };

  // get errors() {
  //   debugger;
  //   return this.errors;
  // }
}

export default ErrorStore;
