import { Outlet } from "react-router";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; CopyRighting {new Date().getFullYear} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;