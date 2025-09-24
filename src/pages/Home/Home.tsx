import Section1 from "./Section1";
import Section2 from "./Section2";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.h1}>Системы защиты помещений от уличной грязи </h1>
      <h2 className={styles.h2}>Аренда грязезащитных ковров в Москве и области</h2>
      <Section1 />
      <Section2 />
      
    </>
  );
}
