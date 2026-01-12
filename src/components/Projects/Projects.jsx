import { useState } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./Projects.module.css";

const Projects = () => {
  const [titleRef, titleVisible] = useIntersectionObserver();
  const [containerRef, containerVisible] = useIntersectionObserver();
  const [imageIndices, setImageIndices] = useState({});

  const projectKits = [
    {
      id: 1,
      title: "Beginner Robotics Kit",
      description: "Intro to coding and mechanical assembly",
      tags: ["Beginner", "Robotics", "Coding", "Assembly"],
      images: [
        `${import.meta.env.BASE_URL}level11.jpeg`,
        `${import.meta.env.BASE_URL}level1.jpeg`,
      ],
      hasSlider: true,
    },
    {
      id: 2,
      title: "Advanced Electronics Kit",
      description: "Deep dive into microcontrollers & sensors",
      tags: ["Advanced", "Electronics", "Microcontrollers", "Sensors"],
      images: [`${import.meta.env.BASE_URL}level2.jpeg`],
    },
  ];

  return (
    <section id="project-kits" className={styles.projects}>
      <div className={styles.container}>
        <h2
          ref={titleRef}
          className={`${styles.sectionTitle} ${
            titleVisible ? styles.visible : ""
          }`}
        >
          <span className={styles.titleAccent}>Project Kits</span>
        </h2>

        <div ref={containerRef} className={styles.projectsGrid}>
          {projectKits.map((kit, index) => (
            <div
              key={kit.id}
              className={`${styles.projectCard} ${
                containerVisible ? styles.visible : ""
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.projectImages}>
                {kit.hasSlider && kit.images.length > 1 ? (
                  <div className={styles.imageSlider}>
                    <div
                      className={styles.sliderContainer}
                      style={{
                        transform: `translateX(-${
                          (imageIndices[kit.id] || 0) * 100
                        }%)`,
                      }}
                    >
                      {kit.images.map((img, imgIndex) => (
                        <div key={imgIndex} className={styles.slide}>
                          <img src={img} alt={kit.title} loading="lazy" />
                        </div>
                      ))}
                    </div>

                    <button
                      className={styles.sliderButtonPrev}
                      onClick={() =>
                        setImageIndices((prev) => ({
                          ...prev,
                          [kit.id]:
                            (prev[kit.id] || 0) === 0
                              ? kit.images.length - 1
                              : (prev[kit.id] || 0) - 1,
                        }))
                      }
                    >
                      <FaChevronLeft />
                    </button>

                    <button
                      className={styles.sliderButtonNext}
                      onClick={() =>
                        setImageIndices((prev) => ({
                          ...prev,
                          [kit.id]:
                            (prev[kit.id] || 0) === kit.images.length - 1
                              ? 0
                              : (prev[kit.id] || 0) + 1,
                        }))
                      }
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                ) : (
                  <div className={styles.singleImage}>
                    <img src={kit.images[0]} alt={kit.title} loading="lazy" />
                  </div>
                )}
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{kit.title}</h3>
                <p className={styles.projectDescription}>{kit.description}</p>

                <div className={styles.projectTags}>
                  {kit.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
