import styles from "./Info.module.scss";
import image_group from "../../resources/img_home_group.png";
import { APPLY_LINK } from "../../Const";

function Info() {
  const title = " 현직자와 함께\n실무 면접을,\n스킬 코치";
  const subtitle =
    "네카라쿠배 현직자와 함께\n실제 면접처럼 연습하고 피드백을 받을 수 있는 기회!";
  const onApplyClick = () => {
    window.location.href = APPLY_LINK;
  };

  return (
    <div className={styles.main}>
      <div className={styles.title}>{title}</div>

      <div className={styles.h17}></div>

      <div className={styles.subtitle}>{subtitle}</div>

      <div className={styles.h35}></div>

      <div className={styles.btn_apply} onClick={onApplyClick}>
        지금 신청하기
      </div>

      <div className={styles.h35}></div>

      <div>
        <img className={styles.group_img} src={image_group} alt="group_image" />
      </div>
    </div>
  );
}

export default Info;
