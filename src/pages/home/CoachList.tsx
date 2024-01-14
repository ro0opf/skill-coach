import styles from "./CoachList.module.scss";
import ic_airbnb from "../../resources/ic_airbnb.png";
import ic_android from "../../resources/ic_android.png";
import ic_apiary from "../../resources/ic_apiary.png";
import ic_app_store from "../../resources/ic_app_store.png";
import ic_basecamp from "../../resources/ic_basecamp.png";
import ic_ibm from "../../resources/ic_ibm.png";
import isMobile from "../../utils/CommonUtils";

function CoachList() {
  const title = "IT 회사의\n개발, 디자인 직무\n면접 대비";
  const subtitle = "다양한 회사 및 직무가\n더 많이 추가될 예정이예요.";
  const coach_btn = "코치 리스트 보기";

  return (
    <div className={styles.main}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.h50} />
      {isMobile() ? (
        <div>
          <div className={styles.company_section}>
            <img src={ic_app_store} alt="icon" />
            <img src={ic_apiary} alt="icon" />
            <img src={ic_android} alt="icon" />
          </div>
          <div className={styles.h50} />
          <div className={styles.company_section}>
            <img src={ic_basecamp} alt="icon" />
            <img src={ic_airbnb} alt="icon" />
            <img src={ic_ibm} alt="icon" />
          </div>
        </div>
      ) : (
        <div className={styles.company_section}>
          <img src={ic_app_store} alt="icon" />
          <img src={ic_apiary} alt="icon" />
          <img src={ic_android} alt="icon" />
          <img src={ic_basecamp} alt="icon" />
          <img src={ic_airbnb} alt="icon" />
          <img src={ic_ibm} alt="icon" />
        </div>
      )}

      <div className={styles.h50} />

      <div className={styles.coach_btn}>{coach_btn}</div>
    </div>
  );
}

export default CoachList;
