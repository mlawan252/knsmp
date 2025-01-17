import styles from "./AboutUs.module.css";
import { useState, useEffect } from "react";
function AboutUs() {
  const images = ["abba1.jpg", "abba2.jpg", "abba3.jpeg"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className={styles.about} >
      <div className={styles.container}>
        <h2>About the Ministry</h2>
        <p>
          The recently created Ministry of Power and Renewable Energy by His
          Excellency The Executive Governor of Kano State as a giant step and
          critical decision in delivering campaign promises as enshrined in the
          blueprint to prosperous Kano as our commitment
        </p>

        <p>
          The Ministry will ensure the provision of sustainable, clean and
          affordable energy while upgrading power infrastructure across the
          entire electricity value chain to underpin socio-economic growth and
          development in the State in collaboration with stakeholders operating
          and other entities.
        </p>
        <p>
          The Ministry of Power and Renewable Energy is committed to delivering
          sustainable, clean, and affordable energy to Kano State.
        </p>
      </div>
      <div className={styles.aboutImages}>
        <img
          src={images[currentImageIndex]} 
          alt="About Ministry"
          className={styles.aboutImage}
        />
      </div>
    </section>
    
  );
}

export default AboutUs;
