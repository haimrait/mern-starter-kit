import { decorate, observable, action } from "mobx";

class SideBarStore {
  collapsed = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  onCollapse = isCollapsed => {
    this.collapsed = isCollapsed;
  };
}

decorate(SideBarStore, {
  collapsed: observable,
  onCollapse: action
});

export default SideBarStore;
