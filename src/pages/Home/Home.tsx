import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Системы защиты помещений от уличной грязи </h1>
      <h2 className={styles.h2}>Аренда грязезащитных ковров в Москве и области</h2>
      <Section1 />
      <Section2 />
      
    </div>
  );
}
