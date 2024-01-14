import styles from "./Header.module.scss";
import headerlogo from "../../resources/logo_dark.png";
import headerMenuImage from "../../resources/img_home_header_menu.png";
import isMobile from "../../utils/CommonUtils";
import { APPLY_GUIDE_LINK } from "../../Const";

const Header = () => {
  const onApplyGuideClick = () => {
    window.location.href = APPLY_GUIDE_LINK;
  };

  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div>
          <img src={headerlogo} alt="logo" />
        </div>

        {isMobile() ? (
          <div>
            <img
              className={styles.menu}
              src={headerMenuImage}
              alt="headerMenuImage"
            />
          </div>
        ) : (
          <div>
            <nav className={styles.navigation}>
              <ul>
                <li onClick={onApplyGuideClick}>면접자 가이드</li>
                <li>면접관 가이드</li>
                <li>고객지원</li>
              </ul>
            </nav>

            {/* <div className={styles.login_box}>
              <div className={styles.login_text}>Login</div>
            </div> */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
