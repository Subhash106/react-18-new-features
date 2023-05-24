import { useEffect } from "react";
import { useState } from "react";

const Search = ({ value, onChange, children }) => {
  return (
    <>
      <label htmlFor="search">{children}</label>
      <input id="search" type="text" value={value} onChange={onChange} />
    </>
  );
};

const getUser = () =>
  Promise.resolve({ id: "123", first: "Subash", last: "Chandra" });

const SearchController = () => {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      const userData = await getUser();
      setUser(userData);
    }

    loadUser();
  }, []);

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  console.log("user", user);

  return (
    <div>
      {user ? <p>Signed in as {user.first}</p> : null}
      <Search value={query} onChange={onChangeHandler}>
        Search:
      </Search>
      <p>Searches for {query ? query : "..."} </p>
    </div>
  );
};

export default SearchController;
