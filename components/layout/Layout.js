import Link from "next/link";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>BamaCar</h2>
          <p>Choose and buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        Next.js project | BamaCar Project &copy;
      </footer>
    </>
  );
};

export default Layout;
