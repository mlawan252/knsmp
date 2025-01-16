import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.sectionHero}>
      <div className={styles.container}>
        <h1>Driving Kano Energy Future</h1>
        <p>Sustainable, Reliable, Renewable Energy for All</p>
        <a href="#contact" className={styles.ctaButton}>
          Get in Touch
        </a>
      </div>
      {/* <div className={styles.heroImageBox}>
        <img src="./solar.jpg" alt="turbine" className={styles.heroImage} />
      </div> */}
    </section>
  );
}
export default Hero;
