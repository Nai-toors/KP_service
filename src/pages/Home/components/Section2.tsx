import styles from "./Section.module.css";
import carpet from "../../../assets/CarpetColor2.jpg";
import ContactButton from "../../../components/ContactButton/ContactButton";

export default function Section2() {
  return (
    <>
      <div className={styles.divQuestion}>
        <span className={styles.spanQuestion}>Почему мы?</span>
        <div className={styles.divImg}>
          <img src={carpet} alt="carpet" className={styles.img2} />
          <span className={styles.main_text}>
            Наша Компания с радостью предоставит Вам грязезащитные
            влаговпитывающие ковровые покрытия фирмы Milliken (Англия) -
            мирового лидера в производстве текстиля по цене от 80 руб. за одну
            замену. Грязезадерживающие ковровые покрытия Milliken идеально
            подходят для офисов, бизнес-центров, торговых центров, ресторанов,
            отелей. Сервисные маты способны впитать и удержать любую грязь в
            достаточно большом количестве, соответственно чистка таких покрытий
            должна происходить с помощью специализированного оборудования.
          </span>
        </div>
        <ContactButton />
      </div>
    </>
  );
}
