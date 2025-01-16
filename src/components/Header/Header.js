import Logo from "../Logo/Logo"
import styles from "./Header.module.css"
import Nav from "./Nav"
function Header(){
    return(
        <header className={styles.header}>
            <Logo />
            <Nav />
        </header>
    )
}

export default Header