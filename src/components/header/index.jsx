import { NavLink, Redirect } from "react-router-dom";
import styles from "./style.module.css";
import { logout } from "../../utils/auth";
import Button from "../buttons";
import { useAuthContext } from "../authentication/AuthContext";

const Header = () => {
  const { token } = useAuthContext();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="logo.jpg" alt="Logo" />
        <span>My App</span>
      </div>
      <ul className={styles.main__nav}>
        <li className={styles.main__nav__item}>
          <NavLink
            exact
            className={(active) =>
              active
                ? `${styles.main__nav__link} ${styles.active}`
                : `${styles.main__nav__link}`
            }
            to="/"
          >
            React 18
          </NavLink>
        </li>
        <li className={styles.main__nav__item}>
          <NavLink
            className={(active) =>
              active
                ? `${styles.main__nav__link} ${styles.active}`
                : `${styles.main__nav__link}`
            }
            to="/counter"
          >
            Counter
          </NavLink>
        </li>
        <li className={styles.main__nav__item}>
          <NavLink
            className={(active) =>
              active
                ? `${styles.main__nav__link} ${styles.active}`
                : `${styles.main__nav__link}`
            }
            to="/todos"
          >
            Todos
          </NavLink>
        </li>
        <li className={styles.main__nav__item}>
          <NavLink
            className={(active) =>
              active
                ? `${styles.main__nav__link} ${styles.active}`
                : `${styles.main__nav__link}`
            }
            to="/posts"
          >
            Posts
          </NavLink>
        </li>
        <li className={styles.main__nav__item}>
          <NavLink
            className={(active) =>
              active
                ? `${styles.main__nav__link} ${styles.active}`
                : `${styles.main__nav__link}`
            }
            to="/albums"
          >
            Albums
          </NavLink>
        </li>
        <li className={styles.main__nav__item}>
          <NavLink
            className={(active) =>
              active
                ? `${styles.main__nav__link} ${styles.active}`
                : `${styles.main__nav__link}`
            }
            to="/photos"
          >
            Photos
          </NavLink>
        </li>
        <li className={styles.main__nav__item}>
          <NavLink
            className={(active) =>
              active
                ? `${styles.main__nav__link} ${styles.active}`
                : `${styles.main__nav__link}`
            }
            to="/classical-redux"
          >
            Classical Redux
          </NavLink>
        </li>
        <li className={styles.main__nav__item}>
          <NavLink
            className={(active) =>
              active
                ? `${styles.main__nav__link} ${styles.active}`
                : `${styles.main__nav__link}`
            }
            to="/music-player"
          >
            Music Player
          </NavLink>
        </li>
        <li className={styles.main__nav__item}>
          <NavLink
            className={(active) =>
              active
                ? `${styles.main__nav__link} ${styles.active}`
                : `${styles.main__nav__link}`
            }
            to="/events"
          >
            Events
          </NavLink>
        </li>
        {!token && (
          <li className={styles.main__nav__item}>
            <NavLink
              className={(active) =>
                active
                  ? `${styles.main__nav__link} ${styles.active}`
                  : `${styles.main__nav__link}`
              }
              to="/login?mode=signin"
            >
              Login
            </NavLink>
          </li>
        )}
        {token && (
          <li className={styles.main__nav__item}>
            <Button onClick={logout}>Logout</Button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
