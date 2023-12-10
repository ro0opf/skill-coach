import Header from "./Header";
import styles from "./Home.module.scss";
import Info from "./Info";

function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.h120} />
      <div className={styles.h35} />
      <Info />
    </div>
  );
}

export default Home;
