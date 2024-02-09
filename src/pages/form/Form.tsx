import Company from "./Company";
import Contact from "./Contact";
import styles from "./Form.module.scss";
import Position from "./Position";

function Home() {
    return (
        <div className={styles.main}>
            
            <div className={styles.inputBox}>
                <Company />
                <Position />
                <Contact />
                <input type="submit" className={styles.submit} value="현업자와 모의면접 가격 조회하기"/>
            </div>

        </div>
    )
}

export default Home;