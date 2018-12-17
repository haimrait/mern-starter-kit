import { observable, action, computed } from "mobx";

class ErrorStore {
  errors = {};

  constructor() {}

  // set errors(errors) {
  //   this.errors = errors;
  // }

  clearErrors = () => {
    this.setErrors({});
  };

  get getErrors() {
    return this.errors;
  }
}

export default ErrorStore;
