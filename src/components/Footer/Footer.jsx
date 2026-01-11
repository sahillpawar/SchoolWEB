import { FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa'
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Camps & Classes', href: '#programs' },
    { name: 'Mastery Track', href: '#learning' },
    { name: 'Project Kits', href: '#project-kits' },
    { name: 'Partnerships', href: '#partnerships' },
  ]

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/sahillpawar', label: 'GitHub' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <h3 className={styles.brandName}>TechieMindz</h3>
            <p className={styles.brandTagline}>
              Educating and Motivating Young Minds.
            </p>
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

          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h4 className={styles.linksTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className={styles.footerLink}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <h4 className={styles.linksTitle}>Get in Touch</h4>
            <div className={styles.contactInfo}>
              <a href="mailto:techiemindz20@gmail.com" className={styles.contactLink}>
                <FaEnvelope />
                techiemindz20@gmail.com
              </a>
              <p className={styles.location}>
                +91 70306 25979
              </p>
              <p className={styles.location}>
                T-13/502, Raheja Vistas Premier, NIBM Annex, Pune-411060
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} TechieMindz. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            - Sahil Pawar
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
