import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = () => {
  const [titleRef, titleVisible] = useIntersectionObserver();
  const [contentRef, contentVisible] = useIntersectionObserver();

  // Replace this URL with your actual Google Form link
  const googleFormUrl = "https://forms.gle/YOUR_GOOGLE_FORM_ID";

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/TechieMindz",
      label: "GitHub",
    },
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "techiemindz20@gmail.com",
      link: "mailto:techiemindz20@gmail.com",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+91 70306 25979",
      link: "tel:+917030625979",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "T-13/502, Raheja Vistas Premier, NIBM Annex, Pune-411060",
      link: "#",
    },
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2
          ref={titleRef}
          className={`${styles.sectionTitle} ${
            titleVisible ? styles.visible : ""
          }`}
        >
          Get In <span className={styles.titleAccent}>Touch</span>
        </h2>

        <div className={styles.contactContent}>
          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <h3>Contact Information</h3>
            <p className={styles.infoDescription}>
              Reach out to us through any of these channels. We're always happy
              to help!
            </p>

            <div className={styles.infoCards}>
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className={styles.infoCard}
                  target={info.link.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    info.link.startsWith("http") ? "noopener noreferrer" : ""
                  }
                >
                  <div className={styles.infoIcon}>{info.icon}</div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>{info.label}</span>
                    <span className={styles.infoValue}>{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className={styles.socialSection}>
              <h4>Follow Us</h4>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Google Form Section */}
          <div
            ref={contentRef}
            className={`${styles.googleFormSection} ${
              contentVisible ? styles.visible : ""
            }`}
          >
            <p className={styles.formDescription}>
              Have a question or want to collaborate? Fill out our form and
              we'll get back to you soon!
            </p>
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.googleFormButton}
            >
              <span>Open Contact Form</span>
              <FaExternalLinkAlt className={styles.externalIcon} />
            </a>
            <p className={styles.formNote}>The form will open in a new tab</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
