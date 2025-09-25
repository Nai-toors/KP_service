import styles from "./Contacts.module.css";

export default function Contacts() {
  return (
    <div className={styles.container}>
      <section className={styles.info}>
        <h2>Звоните нам с 10:00 до 18:00 </h2>
        <h2>
          ООО "Комфорт-Плюс". <br />
          Московская обл. Фрязино, Заводской пр-д, 4.
        </h2>
        <h2>
          Телефон: <br /> 8(495) 724-57-27
        </h2>
        <h2>
          E-mail: <br /> komfort@kpservis.ru
        </h2>
      </section>
      <section className={styles.map}>
        <span className={styles.text}>Эта наша область доставки, но для <em>вас</em> она может увеличиться</span>
        <iframe
          src="https://yandex.ru/map-widget/v1/?scroll=false&source=constructor-api&um=constructor%3AUWvyWnElGNZJSA0Y752YjIFFTFbU4VMj"
          className={styles.iframe}
        ></iframe>
      </section>
    </div>
  );
}
