import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "programs", label: "Programs" },
    { id: "learning", label: "Curriculum" },
    { id: "project-kits", label: "Project Kits" },
    { id: "partnerships", label: "Collaboration" },
    { id: "contact", label: "Enquire" },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* LOGO */}
        <div className={styles.logo} onClick={() => scrollToSection("home")}>
          <img
            src="/logo.png"
            alt="TechieMindz Logo"
            className={styles.logoImage}
          />

          <span className={styles.logoText}>
            <span className={styles.logoTextYellow}>Techie</span>
            <span className={styles.logoTextWhite}>Mindz</span>
          </span>
        </div>

        {/* NAVIGATION */}
        <nav
          className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ""}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className={styles.navLink}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
