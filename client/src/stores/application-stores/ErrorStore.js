import { decorate, observable, action } from "mobx";

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

decorate(ErrorStore, {
  errors: observable,
  clearErrors: action,
  setErrors: action
});

export default ErrorStore;
