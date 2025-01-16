import styles from "./Logo.module.css"

function Logo(){
    return (
        <div className={styles.logoContainer}>
            <img src="kn-logo.png" alt="logo" className={styles.logo} />
            <p>Ministry of Power and Renewable Energy</p>
        </div>
    ) 
}
export default Logo;