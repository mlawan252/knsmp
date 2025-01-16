import styles from "./Departments.module.css";

function Departments() {
  return (
      <section className={styles.visionSection} id="department">
        <h2 className={styles.visionTitle}>Our Vision</h2>
        <p className={styles.visionContent}>
          The Ministry of Power and Renewable Energy focuses on achieving
          accelerated sustainable development through the provision of
          affordable and reliable renewable electric power.
        </p>
        <div className={styles.ministryStructure} id="department">
          <h2 className={styles.structureTitle}>Ministry Structure</h2>
          <div className={styles.structureGrid}>
            <div className={styles.structureCard}>
              <h3>Office of the Commissioner</h3>
              <p>
                Oversees all aspects of power and renewable energy development.
              </p>
            </div>
            <div className={styles.structureCard}>
              <h3>Permanent Secretary</h3>
              <p>Responsible for ministry administration and coordination.</p>
            </div>
            <div className={styles.structureCard}>
              <h3>Department of Renewable Energy</h3>
              <p>
                Promotes renewable energy technologies such as solar, wind, and
                biomass.
              </p>
            </div>
            <div className={styles.structureCard}>
              <h3>Department of Power</h3>
              <p>
                Oversees power generation, transmission, and distribution
                infrastructure.
              </p>
            </div>
            <div className={styles.structureCard}>
              <h3>Department of Planning, Research and Statistics</h3>
              <p>
                Oversees all aspects of power and renewable energy development.
              </p>
            </div>
            <div className={styles.structureCard}>
              <h3>Department of Mechanical/Electrical </h3>
              <p>
                Oversees all aspects of power and renewable energy development.
              </p>
            </div>
            <div className={styles.structureCard}>
              <h3>Office of the Commissioner</h3>
              <p>
                Oversees all aspects of power and renewable energy development.
              </p>
            </div>
            <div className={styles.structureCard}>
              <h3>Department of Administration</h3>
              <p>
                Ensures effective management of administration and human
                resources.
              </p>
            </div>
          </div>
        </div>
      </section>
    
  );
}

export default Departments;
