import { useState } from "react"
import Logo from "../Logo/Logo"
import styles from "./Header.module.css"
import Menu from "./Menu"
import Nav from "./Nav"
function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
        <header className={styles.header}>
            <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            <Logo />
            <Nav isMenuOpen={isMenuOpen} />
        </header>
    )
}

export default Header