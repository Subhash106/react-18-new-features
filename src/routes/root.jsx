import { Outlet, Link, useLoaderData } from "react-router-dom";
import getContacts from "../contacts";

export async function loader() {
  const contacts = await getContacts();

  return { contacts };
}

export default function Root() {
  const { contacts } = useLoaderData();

  return (
    <>
      <div id="sidebar">
        <h1>React router contacts</h1>
        <div>
          <form id="search_form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search_spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            {contacts.map(({ first, last }, index) => (
              <li key={`${first}${index}`}>
                <Link to={`/contacts/${index + 1}`}>
                  {first} {last}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="details">{<Outlet />}</div>
    </>
  );
}
