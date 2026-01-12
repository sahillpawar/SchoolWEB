import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import {
  FaSchool,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaPlay,
  FaFilePdf,
} from "react-icons/fa";
import styles from "./Experience.module.css";

const Experience = () => {
  const [titleRef, titleVisible] = useIntersectionObserver();
  const [contentRef, contentVisible] = useIntersectionObserver();
  const [videoRef, videoVisible] = useIntersectionObserver();
  const [pdfRef, pdfVisible] = useIntersectionObserver();

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2
          ref={titleRef}
          className={`${styles.sectionTitle} ${
            titleVisible ? styles.visible : ""
          }`}
        >
          Our <span className={styles.titleAccent}>Collaboration</span>
        </h2>

        <div
          ref={contentRef}
          className={`${styles.content} ${
            contentVisible ? styles.visible : ""
          }`}
        >
          {/* ================= CARD ================= */}
          <div className={styles.experienceCard}>
            <div className={styles.imageContainer}>
              <img
                src={`${import.meta.env.BASE_URL}Image1.jpeg`}
                alt="The Keystone Ankuram School Collaboration"
                className={styles.experienceImage}
                loading="lazy"
              />
            </div>

            <div className={styles.textContent}>
              <div className={styles.badge}>
                <FaCalendarAlt className={styles.badgeIcon} />
                <span>2024 - Present</span>
              </div>

              <h3 className={styles.cardTitle}>
                <FaSchool className={styles.titleIcon} />
                The Keystone Ankuram
              </h3>

              <div className={styles.schoolInfo}>
                <div className={styles.infoItem}>
                  <FaMapMarkerAlt className={styles.infoIcon} />
                  <div>
                    <strong>Address:</strong>
                    <p>Keystone Campus, Near Handewadi Chowk, Pune – 412308</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <FaUsers className={styles.infoIcon} />
                  <div>
                    <strong>Classes:</strong>
                    <p>2nd to 8th Standard</p>
                  </div>
                </div>
              </div>

              <p className={styles.description}>
                Since 2024, TechieMindz has been proud to partner with The
                Keystone Ankuram School, bringing innovative technology
                education to students from 2nd to 8th standard.
              </p>

              <p className={styles.description}>
                Our programs focus on hands-on learning, critical thinking,
                creativity, and problem-solving through electronics,
                robotics, and programming.
              </p>

              <div className={styles.highlights}>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>✓</div>
                  <span>Ongoing Partnership Since 2024</span>
                </div>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>✓</div>
                  <span>Integrated Curriculum (2nd–8th)</span>
                </div>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>✓</div>
                  <span>Hands-on Learning at Campus</span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= VIDEO ================= */}
          <div
            ref={videoRef}
            className={`${styles.videoSection} ${
              videoVisible ? styles.visible : ""
            }`}
          >
            <h3 className={styles.videoTitle}>
              <FaPlay className={styles.videoIcon} />
              Our Collaboration in Action
            </h3>

            <div className={styles.videoContainer}>
              <video
                className={styles.video}
                src={`${import.meta.env.BASE_URL}video1.mp4`}
                controls
                muted
                playsInline
              />
            </div>
          </div>

          {/* ================= PDF SECTION ================= */}
          <div
            ref={pdfRef}
            className={`${styles.pdfSection} ${
              pdfVisible ? styles.visible : ""
            }`}
          >
            <h3 className={styles.pdfTitle}>
              <FaFilePdf className={styles.pdfIcon} />
              Keystone Ankuram Testimonial
            </h3>

            <div className={styles.pdfContainer}>
              <iframe
                src={`${import.meta.env.BASE_URL}keystone-ankuram-testimonial.pdf`}
                title="Keystone Ankuram Testimonial PDF"
                className={styles.pdfFrame}
              />
            </div>

            <a
              href={`${import.meta.env.BASE_URL}keystone-ankuram-testimonial.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pdfDownload}
            >
              Download Testimonial PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
