const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback) {
    fakeAuthProvider.isAuthenticated = true;
    fakeAuthProvider.user = { name: "John Doe" };
    setTimeout(callback, 100); // fake async
  },
  signout(callback) {
    fakeAuthProvider.isAuthenticated = false;
    delete fakeAuthProvider.user;
    setTimeout(callback, 100);
  },
};

export default fakeAuthProvider;
