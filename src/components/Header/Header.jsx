import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollabOpen, setIsCollabOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCollabOpen(false);
      }
    };

    if (isCollabOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCollabOpen]);

  // Close dropdown when mobile menu closes
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setIsCollabOpen(false);
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
      setIsCollabOpen(false);
    }
  };

  const navLinks = [
    { id: "programs", label: "Programs" },
    { id: "learning", label: "Curriculum" },
    { id: "project-kits", label: "Project Kits" },
  ];

  const handleCollabSelect = (sectionId) => {
    scrollToSection(sectionId);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* LOGO */}
        <div className={styles.logo} onClick={() => scrollToSection("home")}>
          <img
            src={`${import.meta.env.BASE_URL}logo.jpeg`}
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

          <div className={styles.dropdown} ref={dropdownRef}>
            <button
              type="button"
              className={`${styles.navLink} ${styles.dropdownTrigger}`}
              aria-haspopup="true"
              aria-expanded={isCollabOpen}
              onClick={() => setIsCollabOpen((prev) => !prev)}
            >
              Collaboration
              <span className={styles.caret} aria-hidden="true">
                ▾
              </span>
            </button>
            <div
              className={`${styles.dropdownMenu} ${
                isCollabOpen ? styles.dropdownOpen : ""
              }`}
              role="menu"
            >
              <button
                type="button"
                className={styles.dropdownItem}
                onClick={() => handleCollabSelect("experience")}
                role="menuitem"
              >
                Our Collaboration
              </button>
              <button
                type="button"
                className={styles.dropdownItem}
                onClick={() => handleCollabSelect("collab-action")}
                role="menuitem"
              >
                Our Collab in Action
              </button>
            </div>
          </div>

          <a
            href="#partnerships"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("partnerships");
            }}
            className={styles.navLink}
          >
            Enquire
          </a>
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
