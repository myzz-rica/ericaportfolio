import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Expertise", href: "#expertise" },
  { label: "Credentials", href: "#credentials" },
  { label: "Projects", href: "#projects" },
];

export default function PortfolioHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="page-wrap site-header__inner">
        <a className="site-brand" href="#home" onClick={closeMenu} aria-label="Erica Gyamfuaa Fordjour home">
          <span className="brand-mark" aria-hidden="true">EF</span>
          <span className="site-brand__text"><strong>Erica Gyamfuaa Fordjour</strong><small>IT · CYBERSECURITY</small></span>
        </a>
        <nav className={menuOpen ? "site-nav site-nav--open" : "site-nav"} id="primary-navigation" aria-label="Main navigation">
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
          <a className="site-nav__contact" href="#contact" onClick={closeMenu}>
            Let’s connect <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
