import Footer from "./Footer";
import CoachList from "./CoachList";
import Header from "./Header";
import styles from "./Home.module.scss";
import Info from "./Info";
import Process from "./Process";
import ReviewSection from "./ReviewSection";
import ApplySection from "./ApplySection";

function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.h120} />
      <div className={styles.h35} />
      <Info />
      <ApplySection />
      <Process />
      <CoachList />
      <div className={styles.h100} />
      <ReviewSection />
      <div className={styles.h100} />
      <Footer />
      <div className={styles.h100} />
    </div>
  );
}

export default Home;
