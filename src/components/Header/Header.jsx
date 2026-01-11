import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './Header.module.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { id: 'programs', label: 'Camps & Classes' },
    { id: 'learning', label: 'Curriculum' },
    { id: 'project-kits', label: 'Project Kits' },
    { id: 'partnerships', label: 'Partnerships' },
    { id: 'contact', label: 'Enquire' },
  ]

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => scrollToSection('home')}>
          <svg 
            className={styles.logoImage}
            width="40" 
            height="40" 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M 50 20 Q 30 20 20 35 Q 20 50 25 60 Q 30 70 35 75 L 35 80 L 65 80 L 65 75 Q 70 70 75 60 Q 80 50 80 35 Q 70 20 50 20 Z" 
                    fill="#ffd700" stroke="#000000" strokeWidth="2"/>
              <path d="M 50 30 Q 45 30 42 35 Q 40 38 40 42 Q 40 45 42 48 Q 43 50 45 51 Q 47 52 50 52 Q 53 52 55 51 Q 57 50 58 48 Q 60 45 60 42 Q 60 38 58 35 Q 55 30 50 30 Z" 
                    fill="none" stroke="#000000" strokeWidth="1.5"/>
              <path d="M 45 32 Q 42 34 40 38 Q 38 42 38 46 Q 38 48 39 49 Q 40 50 42 50 Q 43 50 45 49 Q 46 48 47 46 Q 47 44 47 42 Q 47 38 45 35 Q 45 33 45 32 Z" 
                    fill="none" stroke="#000000" strokeWidth="1"/>
              <path d="M 55 32 Q 58 34 60 38 Q 62 42 62 46 Q 62 48 61 49 Q 60 50 58 50 Q 57 50 55 49 Q 54 48 53 46 Q 53 44 53 42 Q 53 38 55 35 Q 55 33 55 32 Z" 
                    fill="none" stroke="#000000" strokeWidth="1"/>
              <path d="M 42 36 Q 41 38 41 40" fill="none" stroke="#000000" strokeWidth="0.8"/>
              <path d="M 43 40 Q 42 42 42 44" fill="none" stroke="#000000" strokeWidth="0.8"/>
              <path d="M 44 44 Q 43 46 43 48" fill="none" stroke="#000000" strokeWidth="0.8"/>
              <path d="M 58 36 Q 59 38 59 40" fill="none" stroke="#000000" strokeWidth="0.8"/>
              <path d="M 57 40 Q 58 42 58 44" fill="none" stroke="#000000" strokeWidth="0.8"/>
              <path d="M 56 44 Q 57 46 57 48" fill="none" stroke="#000000" strokeWidth="0.8"/>
              <line x1="50" y1="32" x2="50" y2="52" stroke="#000000" strokeWidth="1.5"/>
              <rect x="40" y="80" width="20" height="8" fill="#ffffff" stroke="#000000" strokeWidth="2" rx="1"/>
              <rect x="42" y="88" width="16" height="4" fill="#ffffff" stroke="#000000" strokeWidth="2" rx="1"/>
              <rect x="43" y="92" width="14" height="6" fill="#ffffff" stroke="#000000" strokeWidth="2" rx="1"/>
            </g>
          </svg>
          <span className={styles.logoText}>
            <span className={styles.logoTextYellow}>Techie</span>
            <span className={styles.logoTextWhite}>Mindz</span>
          </span>
        </div>
        
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.id)
              }}
              className={styles.navLink}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  )
}

export default Header
