import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import {
  FaSchool,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaPlay,
} from "react-icons/fa";
import styles from "./Experience.module.css";
import Image1 from "/SchoolWEB/public/Image1.jpeg";
import video1 from "/SchoolWEB/public/video1.mp4";
const Experience = () => {
  const [titleRef, titleVisible] = useIntersectionObserver();
  const [contentRef, contentVisible] = useIntersectionObserver();
  const [videoRef, videoVisible] = useIntersectionObserver();

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2
          ref={titleRef}
          className={`${styles.sectionTitle} ${
            titleVisible ? styles.visible : ""
          }`}
        >
          Our <span className={styles.titleAccent}>Experience</span>
        </h2>

        <div
          ref={contentRef}
          className={`${styles.content} ${
            contentVisible ? styles.visible : ""
          }`}
        >
          <div className={styles.experienceCard}>
            <div className={styles.imageContainer}>
              <img
                src={Image1}
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
                Since 2024, TechieMindz has been proud to partner with The
                Keystone Ankuram School, bringing innovative technology
                education to students from 2nd to 8th standard. Our
                collaboration focuses on creating meaningful, hands-on learning
                experiences that inspire young minds to explore the fascinating
                world of electronics, robotics, and programming.
              </p>

              <p className={styles.description}>
                Through our structured curriculum programs at Keystone Campus,
                we have successfully integrated practical learning experiences
                into the school's educational framework. Our programs help
                students develop critical thinking skills, creativity,
                problem-solving abilities, and a genuine passion for technology.
                The partnership reflects our shared commitment to excellence and
                innovation in education.
              </p>

              <div className={styles.highlights}>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>✓</div>
                  <span>Ongoing Partnership Since 2024</span>
                </div>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>✓</div>
                  <span>Integrated Curriculum for 2nd to 8th Standard</span>
                </div>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>✓</div>
                  <span>Hands-on Learning at Keystone Campus</span>
                </div>
              </div>
            </div>
          </div>

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
                src={video1}
                controls
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
