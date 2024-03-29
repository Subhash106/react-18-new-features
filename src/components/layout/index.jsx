import styles from "./style.module.css";

const Layout = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
