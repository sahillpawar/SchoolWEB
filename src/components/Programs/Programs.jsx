import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { FaRobot, FaSnowflake, FaGraduationCap } from "react-icons/fa";
import styles from "./Programs.module.css";

const Programs = () => {
  const [titleRef, titleVisible] = useIntersectionObserver();
  const [containerRef, containerVisible] = useIntersectionObserver();

  const programs = [
    {
      id: 1,
      title: "Summer Robotics Camp",
      icon: <FaRobot />,
      description:
        "An intensive program focused on core robotics, coding, and engineering challenges. Perfect for focused learning during the summer break.",
      highlights: [
        "Hands-on Kit Building",
        "Beginner to Advanced Tracks",
        "Final Project Showcase",
      ],
      color: "#ffd700",
    },
    {
      id: 2,
      title: "Winter Tech Workshop",
      icon: <FaSnowflake />,
      description:
        "A focused, short-duration workshop covering specialized technology modules like AI, drones, and advanced logic circuits.",
      highlights: [
        "Specialized Tech Focus",
        "Quick Skill Acquisition",
        "Interactive Challenges",
      ],
      color: "#ffeb3b",
    },
    {
      id: 3,
      title: "Academic Year Robotics & Electronics Program",
      icon: <FaGraduationCap />,
      description:
        "Weekly, structured classes for continuous learning and deep mastery of robotics and fundamental electronics concepts.",
      highlights: [
        "Continuous Curriculum & Mentorship",
        "Aligns Level Wise School Schedule",
        "Includes Electronics Project Kits",
      ],
      color: "#ffd700",
    },
  ];

  return (
    <section id="programs" className={styles.programs}>
      <div className={styles.container}>
        <h2
          ref={titleRef}
          className={`${styles.sectionTitle} ${
            titleVisible ? styles.visible : ""
          }`}
        >
          Camps & <span className={styles.titleAccent}>Academic Programs</span>
        </h2>

        <p className={styles.sectionSubtitle}>
          Interactive classes with expert instructors focused on creative
          project making.
        </p>

        <div ref={containerRef} className={styles.programsGrid}>
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`${styles.programCard} ${
                containerVisible ? styles.visible : ""
              }`}
              style={{
                "--card-color": program.color,
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div
                className={styles.programIcon}
                style={{ color: program.color }}
              >
                {program.icon}
              </div>

              <h3 className={styles.programTitle}>{program.title}</h3>

              <p className={styles.programDescription}>{program.description}</p>

              <div className={styles.highlightsSection}>
                <h4 className={styles.highlightsTitle}>Key Highlights:</h4>
                <ul className={styles.programFeatures}>
                  {program.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
