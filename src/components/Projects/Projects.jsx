import { useState } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { FaCode, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./Projects.module.css";

const Projects = () => {
  const [titleRef, titleVisible] = useIntersectionObserver();
  const [containerRef, containerVisible] = useIntersectionObserver();
  const [beginnerImageIndex, setBeginnerImageIndex] = useState(0);

  const projectKits = [
    {
      id: 1,
      title: "Beginner Robotics Kit",
      description: "Intro to coding and mechanical assembly",
      tags: ["Beginner", "Robotics", "Coding", "Assembly"],
      images: ["./public/level11.jpeg", "./public/level1.jpeg"],
      hasSlider: true,
    },
    {
      id: 2,
      title: "Advanced Electronics Kit",
      description: "Deep dive into microcontrollers & sensors",
      tags: ["Advanced", "Electronics", "Microcontrollers", "Sensors"],
      images: ["./public/level2.jpeg"],
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
          Order <span className={styles.titleAccent}>Project Kits</span>
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
                {kit.hasSlider && kit.images && kit.images.length > 1 ? (
                  <div className={styles.imageSlider}>
                    <div
                      className={styles.sliderContainer}
                      style={{
                        transform: `translateX(-${beginnerImageIndex * 100}%)`,
                      }}
                    >
                      {kit.images.map((img, imgIndex) => (
                        <div key={imgIndex} className={styles.slide}>
                          <img
                            src={img}
                            alt={`${kit.title} - Image ${imgIndex + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      className={styles.sliderButtonPrev}
                      onClick={(e) => {
                        e.stopPropagation();
                        setBeginnerImageIndex((prev) =>
                          prev === 0 ? kit.images.length - 1 : prev - 1
                        );
                      }}
                      aria-label="Previous image"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      className={styles.sliderButtonNext}
                      onClick={(e) => {
                        e.stopPropagation();
                        setBeginnerImageIndex((prev) =>
                          prev === kit.images.length - 1 ? 0 : prev + 1
                        );
                      }}
                      aria-label="Next image"
                    >
                      <FaChevronRight />
                    </button>
                    <div className={styles.sliderIndicators}>
                      {kit.images.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          className={`${styles.indicator} ${
                            beginnerImageIndex === imgIndex ? styles.active : ""
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setBeginnerImageIndex(imgIndex);
                          }}
                          aria-label={`Go to image ${imgIndex + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className={styles.singleImage}>
                    <img
                      src={kit.images ? kit.images[0] : ""}
                      alt={kit.title}
                    />
                  </div>
                )}
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{kit.title}</h3>
                <p className={styles.projectDescription}>{kit.description}</p>

                <div className={styles.projectTags}>
                  {kit.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>
                      <FaCode className={styles.tagIcon} />
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
