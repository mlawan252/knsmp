import styles from "./Menu.module.css";

function Menu({isMenuOpen, setIsMenuOpen}) {
 
  return (
    <div
      className={styles.menu}
      onClick={() => {
        setIsMenuOpen(!isMenuOpen);
      }}
    >
      ☰
    </div>
  );
}

export default Menu;
