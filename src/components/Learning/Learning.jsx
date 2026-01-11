import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './Learning.module.css'

const Learning = () => {
  const [titleRef, titleVisible] = useIntersectionObserver()
  const [containerRef, containerVisible] = useIntersectionObserver()

  const foundationLevels = [
    {
      id: 1,
      level: 'Level 1',
      description: 'Breadboards, LEDs, motors, resistors, obstacle detection sensors',
      color: '#ffd700'
    },
    {
      id: 2,
      level: 'Level 2',
      description: 'Logic gates, 555 IC circuits, door alarm systems',
      color: '#ffeb3b'
    },
    {
      id: 3,
      level: 'Level 3',
      description: 'Metal detector, clap-controlled home automation, temperature & light sensors',
      color: '#ffd700'
    },
  ]

  const advancedLevels = [
    {
      id: 4,
      level: 'Level 4',
      description: 'Pick-and-place robot, LCD Arduino game, smart stick for blind assistance, smart car barrier',
      color: '#ffeb3b'
    },
    {
      id: 5,
      level: 'Level 5',
      description: 'Sun-tracking solar panel, Arduino pulse oximeter sensor, obstacle avoidance & line follower robots',
      color: '#ffd700'
    },
  ]

  return (
    <section id="learning" className={styles.learning}>
      <div className={styles.container}>
        <h2 
          ref={titleRef}
          className={`${styles.sectionTitle} ${titleVisible ? styles.visible : ''}`}
        >
          Tech Mastery Track: <span className={styles.titleAccent}>Level-by-Level Learning</span>
        </h2>
        
        <p className={styles.sampleProjectsText}>Sample Projects</p>

        <div className={styles.levelsContainer}>
          <div className={styles.levelGroup}>
            <h3 className={styles.levelGroupTitle}>Foundation Levels (1–3)</h3>
            <div 
              ref={containerRef}
              className={styles.learningGrid}
            >
              {foundationLevels.map((level, index) => (
                <div
                  key={level.id}
                  className={`${styles.learningCard} ${containerVisible ? styles.visible : ''}`}
                  style={{ 
                    '--card-color': level.color,
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  <div className={styles.levelNumber} style={{ color: level.color }}>
                    {level.level}
                  </div>
                  <p className={styles.cardDescription}>{level.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.levelGroup}>
            <h3 className={styles.levelGroupTitle}>Advanced Levels (4–5)</h3>
            <div className={styles.learningGrid}>
              {advancedLevels.map((level, index) => (
                <div
                  key={level.id}
                  className={`${styles.learningCard} ${containerVisible ? styles.visible : ''}`}
                  style={{ 
                    '--card-color': level.color,
                    transitionDelay: `${(index + 3) * 0.1}s`
                  }}
                >
                  <div className={styles.levelNumber} style={{ color: level.color }}>
                    {level.level}
                  </div>
                  <p className={styles.cardDescription}>{level.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Learning
