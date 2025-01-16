import styles from "./Nav.module.css"

function Nav(){
    return(
        <nav className={styles.nav}>
            <a href='#home' className={styles.navLink}>Home</a>
            <a href='#about' className={styles.navLink}>About Us</a>
            <a href='#mandate' className={styles.navLink}>Mandate</a>
            <a href='#projects' className={styles.navLink}>Project</a>
            <a href='#department' className={styles.navLink}>Department</a>
            <a href='#contact' className={styles.navLink}>Contact Us</a>
        </nav>
    )
}

export default Nav;