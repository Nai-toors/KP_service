import styles from "./Services.module.css";

export default function Section2() {
  return (
    <div>
      <h2>А если посложнее:</h2>
      <h4 className={styles.title_h4} style={{ paddingLeft: "5%", paddingBottom: "0", margin: "0" }}>
        Мы заключаем договор на определенное количество объектов,
      </h4 >
      <h4 className={styles.title_h4} style={{ paddingLeft: "10%", marginTop: "0" }}> материала и
        график замен</h4>
      <hr style={{ width: "60%", marginLeft: "5%" }}/>
      <h4 className={styles.title_h4} style={{ paddingLeft: "20%" }}>
        Согласовываем дату и время первой доставки
      </h4>
      <hr style={{ width: "60%", marginLeft: "15%" }}/>
      <h4 className={styles.title_h4} style={{ paddingLeft: "40%" }}>Регулярно меняем ковры на чистые</h4>
      <hr style={{ width: "60%", marginLeft: "25%" }}/>
      <h4 className={styles.title_h4} style={{ paddingLeft: "60%" }}>Все счастливы.</h4>
      <h4 className={styles.title_h4}>P.S. Также мы можем продать коврик по оптовой цене <del>(почти)</del> или почистить ваш;)</h4>
    </div>
  );
}
