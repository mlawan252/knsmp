import styles from "./Footer.module.css"

function Footer(){
    return(
    <footer className={styles.footerSection}>
  <div className={styles.footerLogo}>Ministry of Power</div>
  <div className={styles.footerLinks}>
    <a href="#about">About Us</a>
    <a href="#projects">Projects</a>
    <a href="#departments">Departments</a>
    <a href="#contact">Contact Us</a>
  </div>
  <div className={styles.footerSocials}>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook"></i>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin"></i>
    </a>
  </div>
  <div className={styles.footerCopyright}>
    &copy; 2025 Ministry of Power and Renewable Energy, Kano State. All Rights Reserved.
  </div>
</footer>

    )
}

export default Footer;