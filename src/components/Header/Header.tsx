import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <img src={logo} alt="logo" className={styles.logo} />
        <nav className={styles.links}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Услуги
          </NavLink>
          <NavLink
            to="/carpets"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Ковры
          </NavLink>
          <NavLink
            to="/prices"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Цены
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Контакты
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
