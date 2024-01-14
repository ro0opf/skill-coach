import { APPLY_LINK } from "../../Const";
import isMobile from "../../utils/CommonUtils";
import styles from "./ApplySection.module.scss";

function ApplySection() {
  const title = "면접이 어려울땐\n **스킬 코치**";
  const onApplyClick = () => {
    window.location.href = APPLY_LINK;
  };

  return (
    <div className={styles.main}>
      {isMobile() ? (
        <div className={styles.apply}>
          <div className={styles.title}>{title}</div>
          <div className={styles.h37} />
          <div className={styles.btn} onClick={onApplyClick}>
            지금 신청하기
          </div>
        </div>
      ) : (
        <div className={styles.apply}>
          <div className={styles.left}>
            <div className={styles.title}>{title}</div>
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
