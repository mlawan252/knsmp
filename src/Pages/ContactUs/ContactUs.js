import styles from "./ContactUs.module.css";

function ContactUs() {
  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.contactTitle}>Contact Us</h2>
      <p className={styles.contactDescription}>
        Have questions or need assistance? Reach out to us using the form below,
        and we’ll get back to you promptly.
      </p>
      <form className={styles.contactForm}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
export default ContactUs;
