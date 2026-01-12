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
  const [testimonialRef, testimonialVisible] = useIntersectionObserver();

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
          {/* ================= COLLAB CARD ================= */}
          <div className={styles.experienceCard}>
            <div className={styles.imageContainer}>
              <img
                src={`${import.meta.env.BASE_URL}Image1.jpeg`}
                alt="The Keystone Ankuram School Collaboration"
                className={styles.experienceImage}
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
                Our collaboration focuses on hands-on learning, innovation,
                creativity, and practical exposure to electronics, robotics,
                and programming.
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
              />
            </div>
          </div>

          {/* ================= TESTIMONIAL CARD ================= */}
          <div
            ref={testimonialRef}
            className={`${styles.testimonialCard} ${
              testimonialVisible ? styles.visible : ""
            }`}
          >
            <div className={styles.testimonialContent}>
              <h3 className={styles.testimonialTitle}>
                <FaFilePdf className={styles.testimonialIcon} />
                Keystone Ankuram Testimonial
              </h3>

              <p className={styles.testimonialText}>
                Official testimonial document from The Keystone Ankuram School
                highlighting the success and impact of our collaboration.
              </p>

              <a
                href={`${import.meta.env.BASE_URL}keystone-ankuram-testimonial.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.testimonialButton}
              >
                View Testimonial Document
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
