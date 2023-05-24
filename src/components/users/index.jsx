import { useState } from "react";
import axios from "axios";

import styles from "./style.module.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );

    setUsers(data);
  };

  return (
    <div>
      <h2>Users</h2>
      {!users.length > 0 && (
        <p>
          No users. <button onClick={getUsers}>Fetch users</button>
        </p>
      )}
      {users.length > 0 && (
        <ul className={styles.users_list}>
          {users.map(({ title, id }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
