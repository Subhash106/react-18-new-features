import { useState } from "react";
import fakeAuth from "./fakeAuth";

const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  const signin = (callback) => {
    fakeAuth.signin(() => {
      setUser({ first: "Subash", last: "Chandra", age: 32 });
      callback();
    });
  };

  const signout = (callback) => {
    fakeAuth.signout(() => {
      setUser(null);
      callback();
    });
  };

  return { user, signin, signout };
};

export default useProvideAuth;
