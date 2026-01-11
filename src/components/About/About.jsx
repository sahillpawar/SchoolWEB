import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import styles from './About.module.css'

const About = () => {
  const [titleRef, titleVisible] = useIntersectionObserver()
  const [contentRef, contentVisible] = useIntersectionObserver()

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 
          ref={titleRef}
          className={`${styles.sectionTitle} ${titleVisible ? styles.visible : ''}`}
        >
          Program <span className={styles.titleAccent}>Benefits</span>
        </h2>
        
        <div 
          ref={contentRef}
          className={`${styles.content} ${contentVisible ? styles.visible : ''}`}
        >
          <div className={styles.textContent}>
            <div className={styles.values}>
              <ul className={styles.valueList}>
                <li><strong>Critical Thinking</strong> – Encouraging innovative thinking and creativity while executing complex projects.</li>
                <li><strong>Teamwork & Collaboration</strong> – Opportunities for communication and essential team-based problem-solving skills.</li>
                <li><strong>Develop Critical Skills</strong> – Improve problem-solving, teamwork, and introduce Arduino programming.</li>
                <li><strong>Prepare for Future Careers</strong> – Equip students with relevant tech knowledge & skills.</li>
                <li><strong>Encourage Innovation</strong> – Inspire creativity through engaging projects.</li>
                <li><strong>Hands-on Electronics Focus</strong> – Enhance basic electronics knowledge with practical experience.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
