import styles from "./ReviewSection.module.scss";
import ic_avatar_1 from "../../resources/ic_avatar_1.png";
import ic_avatar_2 from "../../resources/ic_avatar_2.png";
import ic_avatar_3 from "../../resources/ic_avatar_3.png";
import ic_avatar_4 from "../../resources/ic_avatar_4.png";
import isMobile from "../../utils/CommonUtils";

function ReviewSection() {
  const title = "모의 면접 후기";
  return (
    <div className={styles.main}>
      <div className={styles.title}>{title}</div>
      <div className={styles.h50} />
      {isMobile() ? (
        <div className={styles.review_container}>
          <div className={styles.review}>
            <div className={styles.author}>
              <div className={styles.author_info}>
                <div className={styles.author_type}>백엔드 취준생</div>
                <div>이*현</div>
              </div>
            </div>
            <div className={styles.h30} />
            <div className={styles.content}>
              매니저님과 튜터님의 관리가 가장 인상적이었어요. 매니저님의 “카메라
              킵시다!”라는 외침이 생각나네요.🙂 질문이 생겼을 때 상주하고 계신
              튜터님께 언제든지 물어볼 수 있는 시스템이더라고요.
            </div>
          </div>

          <div className={styles.review}>
            <div className={styles.author}>
              <div className={styles.author_info}>
                <div className={styles.author_type}>프론트엔드 취준생</div>
                <div>김*호</div>
              </div>
            </div>
            <div className={styles.h30} />
            <div className={styles.content}>
              혼자 개발자 준비를 했다면 경험해 보기 어려운 인프라였어요.
              튜터님이 가장 만족스러운 부분 중 하나예요. 실시간 강의를
              해주셨는데 강의 분위기가 정말 좋았습니다.
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.review_container}>
          <div className={styles.review}>
            <div className={styles.author}>
              <div className={styles.author_info}>
                <div className={styles.author_type}>백엔드 취준생</div>
                <div>이*현</div>
              </div>
            </div>
            <div className={styles.h30} />
            <div className={styles.content}>
              매니저님과 튜터님의 관리가 가장 인상적이었어요. 매니저님의 “카메라
              킵시다!”라는 외침이 생각나네요.🙂 질문이 생겼을 때 상주하고 계신
              튜터님께 언제든지 물어볼 수 있는 시스템이더라고요.
            </div>
          </div>

          <div className={styles.review}>
            <div className={styles.author}>
              <div className={styles.author_info}>
                <div className={styles.author_type}>프론트엔드 취준생</div>
                <div>김*호</div>
              </div>
            </div>
            <div className={styles.h30} />
            <div className={styles.content}>
              혼자 개발자 준비를 했다면 경험해 보기 어려운 인프라였어요.
              튜터님이 가장 만족스러운 부분 중 하나예요. 실시간 강의를
              해주셨는데 강의 분위기가 정말 좋았습니다.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewSection;
