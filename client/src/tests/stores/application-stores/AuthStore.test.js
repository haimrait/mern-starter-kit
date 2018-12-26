import AuthStore from "../../../stores/application-stores/AuthStore";

beforeEach(() => {
  // values stored in tests will also be available in other tests unless you run
  // localStorage.clear();
  // // or directly reset the storage
  // localStorage.__STORE__ = {};
  // // you could also reset all mocks, but this could impact your other mocks
  // jest.resetAllMocks();
  // // or individually reset a mock used
  // localStorage.setItem.mockClear();
  console.log("a");
  // this.mockClass = jest.fn();
  // this.authService = new mockClass();
  // this.rootStore = new mockClass();
});

test("should not impact the next test", () => {
  console.log(localStorage);
  const authStore = new AuthStore("a", "a");
  // expect(authStore.rootStore).toBe(rootStore);
  // expect(authStore.authService).toBe(authService);
  // expect(localStorage.getItem).toBeCalledWith("jwtToken");
});

// describe("AuthStore", () => {
//   beforeEach(() => {
//     // values stored in tests will also be available in other tests unless you run
//     localStorage.clear();
//     // or directly reset the storage
//     localStorage.__STORE__ = {};
//     // you could also reset all mocks, but this could impact your other mocks
//     jest.resetAllMocks();
//     // or individually reset a mock used
//     localStorage.setItem.mockClear();

// this.mockClass = jest.fn();
// this.authService = new mockClass();
// this.rootStore = new mockClass();
//   });

//   it("Check constructor work properly", () => {
//     // Arrange
//     // const localStorageMock = {
//     //   getItem: jest.fn(),
//     //   setItem: jest.fn(),
//     //   removeItem: jest.fn(),
//     //   clear: jest.fn()
//     // };
//     // console.log(localStorageMock);
//     // global.localStorage = localStorageMock;
//     console.log(global.localStorage);
//     console.log(localStorage);
//     // Act
//     const authStore = new AuthStore(this.rootStore, this.authService);

//     // Assert

//     expect(authStore.rootStore).toBe(rootStore);
//     expect(authStore.authService).toBe(authService);
//     // expect(localStorage.getItem).toBeCalledWith("jwtToken");
//     expect(localStorage.getItem.mock.calls.length).toBe(1);
//     // expect(authStore.authService).toBe(authService);
//     // authStore
//     // store.createTodo("todo2")
//     // expect(store.todos.length).toBe(2)

//     // expect(store.todos[1].value).toBe("todo2")
//   });
// });
