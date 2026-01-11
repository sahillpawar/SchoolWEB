import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { FaSchool, FaUsers } from 'react-icons/fa'
import styles from './Partnerships.module.css'

const Partnerships = () => {
  const [titleRef, titleVisible] = useIntersectionObserver()
  const [containerRef, containerVisible] = useIntersectionObserver()

  const partnerships = [
    {
      id: 1,
      title: 'For Schools & Institutions',
      description: 'Partner to integrate world-class robotics and coding into your curriculum.',
      icon: <FaSchool />,
      color: '#ffd700'
    },
    {
      id: 2,
      title: 'For Parents Who Care',
      description: 'Invest in your child\'s future — logic, critical thinking & valuable technology skills in a fun environment.',
      icon: <FaUsers />,
      color: '#ffeb3b'
    },
  ]

  return (
    <section id="partnerships" className={styles.partnerships}>
      <div className={styles.container}>
        <h2 
          ref={titleRef}
          className={`${styles.sectionTitle} ${titleVisible ? styles.visible : ''}`}
        >
          Join the <span className={styles.titleAccent}>TechieMindz Community</span>
        </h2>

        <div 
          ref={containerRef}
          className={styles.partnershipsGrid}
        >
          {partnerships.map((partnership, index) => (
            <div
              key={partnership.id}
              className={`${styles.partnershipCard} ${containerVisible ? styles.visible : ''}`}
              style={{ 
                '--card-color': partnership.color,
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className={styles.partnershipIcon} style={{ color: partnership.color }}>
                {partnership.icon}
              </div>
              
              <h3 className={styles.partnershipTitle}>{partnership.title}</h3>
              <p className={styles.partnershipDescription}>{partnership.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partnerships
