import styles from "./Project.module.css";

function Project() {
  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.projectsTitle}>Our Projects</h2>
      <div className={styles.projectsContainer}>
        <div className={styles.projectCard}>
          <img
            src="abba2.jpg"
            alt="Tiga Hydro Power Plant"
            className={styles.projectImage}
          />
          <div className={styles.projectDetails}>
            <h3 className={styles.projectTitle}>Tiga Hydro Power Plant</h3>
            <p className={styles.projectDescription}>
              Harnessing the power of water to generate renewable energy and
              support the state’s growing energy demands.
            </p>
          </div>
        </div>
        {/* Project Card 2 */}
        <div className={styles.projectCard}>
          <img
            src="abba2.jpg"
            alt="Solar Power Plant"
            className={styles.projectImage}
          />
          <div className={styles.projectDetails}>
            <h3 className={styles.projectTitle}>10MW Solar Power Plant</h3>
            <p className={styles.projectDescription}>
              A sustainable energy initiative in Madobi to provide clean and
              efficient electricity for the region.
            </p>
          </div>
        </div>
        {/* Project Card 3 */}
        <div className={styles.projectCard}>
          <img
            src="abba2.jpg"
            alt="Grid Expansion Initiative"
            className={styles.projectImage}
          />
          <div className={styles.projectDetails}>
            <h3 className={styles.projectTitle}>Grid Expansion Initiative</h3>
            <p className={styles.projectDescription}>
              Expanding the power grid to ensure equitable access to electricity
              across urban and rural areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Project;
