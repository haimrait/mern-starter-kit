import { decorate, observable, action, computed } from "mobx";
import { debounce, inRange, reduce } from "lodash";

class WindowSizeStore {
  screenWindow = null;
  windowWidth = null;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  get windowSizes() {
    const SIZES = {
      sm: inRange(this.windowWidth, 0, 639),
      m: inRange(this.windowWidth, 640, 1023),
      l: inRange(this.windowWidth, 1024, 1250),
      xl: inRange(this.windowWidth, 1250, Number.POSITIVE_INFINITY),
      ns: inRange(this.windowWidth, 640, Number.POSITIVE_INFINITY)
    };

    return reduce(
      SIZES,
      (result, value, key) => {
        if (value) {
          result = [...result, key];
        }
        return result;
      },
      []
    );
  }

  setWindow = () => {
    // make sure the window is available
    if (typeof window === "object") {
      this.screenWindow = window;
      this.handleWindowWidthChange();
      this.screenWindow.addEventListener(
        "resize",
        this.handleWindowWidthChange
      );
    }
  };

  setWindowWidth = width => {
    this.windowWidth = width;
    return this.windowWidth;
  };

  handleWindowWidthChange = debounce(() => {
    const width = this.screenWindow.innerWidth;
    this.setWindowWidth(width);
  }, 100);
}

decorate(WindowSizeStore, {
  screenWindow: observable,
  windowWidth: observable,
  windowSizes: computed,
  setWindow: action
});

export default WindowSizeStore;
