import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { profile } from '../data/site';

export function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); setMenuOpen(false); }, [pathname]);
  return <div className="site-shell">
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Go to homepage"><span className="brand-mark">NA<span className="brand-dot">.</span></span><span className="brand-name">NICHOLAS ALAYRA<small>ENGINEERING PORTFOLIO</small></span></Link>
        <button className="mobile-menu" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
        <nav className={'nav-links ' + (menuOpen ? 'open' : '')} aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink><NavLink to="/projects">Projects</NavLink><NavLink to="/about">About</NavLink><NavLink to="/resume">Resume</NavLink>
          {profile.email && <a className="nav-contact" href={`mailto:${profile.email}`}>Contact <ArrowUpRight size={15}/></a>}
        </nav>
      </div>
    </header>
    <main id="main-content">{children}</main>
    <footer className="footer"><div className="container footer-inner"><div><div className="footer-name">Nicholas Alayra</div><p>Engineering design. Thoughtful problem solving.</p></div><div className="footer-right"><div className="footer-links"><Link to="/projects">Projects</Link><Link to="/about">About</Link><Link to="/resume">Resume</Link></div><div className="socials">{profile.github && <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19}/></a>}{profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19}/></a>}{profile.email && <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={19}/></a>}</div></div></div><div className="container footer-bottom">© {new Date().getFullYear()} Nicholas Alayra. Built with React + Vite.</div></footer>
  </div>;
}
