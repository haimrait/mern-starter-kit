class SideBarStore {
  collapsed = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  onCollapse = isCollapsed => {
    this.collapsed = isCollapsed;
  };
}

export default SideBarStore;
