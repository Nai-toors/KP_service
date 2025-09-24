import styles from "./Section.module.css";
import carpet from "../../assets/CarpetColor2.jpg";
import ContactButton from "../../components/ContactButton/ContactButton";


export default function Section2() {
  return (
    <>
      <div className={styles.divQuestion}>
        <span className={styles.spanQuestion}>Почему мы?</span>
        <div className={styles.divImg}>
          <img src={carpet} alt="carpet" className={styles.img2} />
          <span className={styles.spanImg}>"Комфорт-Плюс"- это сервис сменных ковров(матсервис), предоставляющий комплексные услуги в Москве и Московской области по защите Ваших помещений от внешних загрязнений с помощью универсальных высокопрочных грязезащитных ковров. Мы готовы предложить Вам полный спектр услуг по аренде, своевременной замене или химчистке грязезащитных покрытий в зависимости от интенсивности эксплуатации, погодных условий и времени года, либо по вашему требованию. Мы поможем Вам сохранить и защитить первоначальный облик Ваших напольных покрытий от грязи и существенно снизить расходы по уборке помещений.</span>
        </div>
        <ContactButton />
      </div>
    </>
  );
}