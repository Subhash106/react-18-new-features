const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 1000);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 1000);
  },
};

export default fakeAuth;
