import styles from "./Header.module.scss";
import headerlogo from "../../resources/logo_dark.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div>
          <img src={headerlogo} alt="logo" />
        </div>

        <nav className={styles.navigation}>
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>

        <div className={styles.login_box}>
          <div className={styles.login_text}>Login</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
