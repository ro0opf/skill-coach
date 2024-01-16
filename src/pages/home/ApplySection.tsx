import { APPLY_LINK } from "../../Const";
import isMobile from "../../utils/CommonUtils";
import { applyBoldStyle } from "../../utils/StringUtils";
import styles from "./ApplySection.module.scss";
import { getAnalytics, logEvent } from "firebase/analytics";


function ApplySection() {
  const title = "면접이 어려울땐\n **스킬 코치**";
  const onApplyClick = () => {
    const analytics = getAnalytics();
    logEvent(analytics, 'home_bottom_apply_click', {});

    window.open(APPLY_LINK, "_blank");
  };

  return (
    <div className={styles.main}>
      {isMobile() ? (
        <div className={styles.apply}>
          <div className={styles.title}>{applyBoldStyle(title)}</div>
          <div className={styles.h37} />
          <div className={styles.btn} onClick={onApplyClick}>
            지금 신청하기
          </div>
        </div>
      ) : (
        <div className={styles.apply}>
          <div className={styles.left}>
            <div className={styles.title}>{applyBoldStyle(title)}</div>
            <div className={styles.h37} />
            <div className={styles.btn} onClick={onApplyClick}>
              지금 신청하기
            </div>
          </div>
          <div className={styles.right}></div>
        </div>
      )}
    </div>
  );
}

export default ApplySection;
