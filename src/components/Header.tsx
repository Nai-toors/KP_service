import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Главная</NavLink>
        <NavLink to="/services" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Услуги</NavLink>
        <NavLink to="/carpets" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Ковры</NavLink>
        <NavLink to="/prices" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Цены</NavLink>
        <NavLink to="/contacts" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Контакты</NavLink>
      </nav>
    </header>
  );
}
