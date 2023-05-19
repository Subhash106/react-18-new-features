import axios from "axios";

class Users {
  static all() {
    return axios
      .get("/users")
      .then((res) => res.data)
      .catch((error) => error);
  }
}

export default Users;
