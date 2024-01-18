import styles from "./CoachList.module.scss";
import ic_naver from "../../resources/ic_naver.png";
import ic_kakao from "../../resources/ic_kakao.png";
import ic_line from "../../resources/ic_line.png";
import ic_coupang from "../../resources/ic_coupang.png";
import ic_baemin from "../../resources/ic_baemin.png";
import ic_carrot from "../../resources/ic_carrot.png";
import ic_toss from "../../resources/ic_toss.png";
import isMobile from "../../utils/CommonUtils";
import { applyBoldStyle } from "../../utils/StringUtils";

function CoachList() {
  const title = "**IT 회사**의\n개발, 디자인 직무\n면접 대비";
  const subtitle = "다양한 회사 및 직무가\n더 많이 추가될 예정이예요.";
  const coach_btn = "코치 리스트 보기";

  return (
    <div className={styles.main}>
      <div className={styles.title}>{applyBoldStyle(title)}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.h50} />
      {isMobile() ? (
        <div>
          <div className={styles.company_section}>
            <img src={ic_naver} alt="icon" />
            <img src={ic_kakao} alt="icon" />
            <img src={ic_line} alt="icon" />
          </div>
          <div className={styles.h29} />
          <div className={styles.company_section}>
            <img src={ic_coupang} alt="icon" />
            <img src={ic_baemin} alt="icon" />
            <img src={ic_carrot} alt="icon" />
          </div>
          <div className={styles.h29} />
          <div className={styles.company_section}>
            <img src={ic_toss} alt="icon" />
          </div>
        </div>
      ) : (
        <div className={styles.company_section}>
          <img src={ic_naver} alt="icon" />
          <img src={ic_kakao} alt="icon" />
          <img src={ic_line} alt="icon" />
          <img src={ic_coupang} alt="icon" />
          <img src={ic_baemin} alt="icon" />
          <img src={ic_carrot} alt="icon" />
          <img src={ic_toss} alt="icon" />
        </div>
      )}

      {/* <div className={styles.h50} />

      <div className={styles.coach_btn}>{coach_btn}</div> */}
    </div>
  );
}

export default CoachList;
