import Cycle from "./Cycle";
import styles from "./Services.module.css";


export default function Section1() {
  return (
    <div className={styles.container}>
      <section style={{ display: "flex", flexDirection: "column", padding: "1rem"}}>
        <h2 className={styles.title_h2}>Что мы предлагаем?</h2>
        <hr style={{ width: "70%"}}/>
        <h3 className={styles.title_h3}>Если просто, то</h3>
      </section>
      <Cycle size="520px" fontSize="50px" label="Регулярная замена ковров" isSpinning={true} />
    </div>
  );
}