import styles from "./Contact.module.scss";

const Contact = () => {
    return (
        <div> 
            <div className={styles.row}>
                <h2>이름</h2>
                <input type="text" className={styles.inputBox} placeholder="예) 김철수"></input>
            </div>

            <div className={styles.row}>
                <h2>연락처</h2>
                <input type="text" className={styles.inputBox} placeholder="예) 010-8225-1070"></input>
            </div>

        </div>
    );
};

export default Contact; 