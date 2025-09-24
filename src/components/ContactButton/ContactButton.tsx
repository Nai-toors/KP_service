import { useNavigate } from "react-router-dom";
import styles from "./ContactButton.module.css";

export default function ContactButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contacts");
  };

  return (
    <div>
      <button className={styles.button} onClick={handleClick}>
        Contact
      </button>
    </div>
  );
}
