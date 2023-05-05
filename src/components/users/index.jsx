import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import styles from "./style.module.css";
import wait from "../delay";

const Users = ({ search }) => {
  const [users, setUsers] = useState([]);
  const fetchDataRef = useRef(true);

  useEffect(() => {
    async function myFunc() {
      if (!fetchDataRef.current) {
        await wait(5);
        fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${search}`)
          .then((res) => res.json())
          .then((data) => setUsers(data));
      }
      fetchDataRef.current = false;
    }
    myFunc();
  }, [search]);

  console.log("users", users);

  return (
    <div>
      <ul className={styles.users_list}>
        {users.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
