import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { background, experience, profile, skills } from "../data/site";
export default function About() {
  return (
    <>
      <section className="section page-top">
        <div className="container">
          <div className="page-heading">
            <p className="eyebrow">ABOUT / BACKGROUND</p>
            <h1>
              Engineering meets software<span className="period">.</span>
            </h1>
            <p>
              I’m Nicholas, an engineering student at Biola University with
              experience in software development, technical troubleshooting, and
              hands-on mechanical design.
            </p>
          </div>
          <div className="about-banner">
            <div className="about-banner-copy">
              <span className="eyebrow">MY FOCUS</span>
              <h2>Designing systems that work in the real world.</h2>
              <p>
                As Frame Team Lead for Biola Racing, I work collaboratively on
                chassis design and integration. My software background supports
                the way I approach design problems: systematically, iteratively,
                and with an eye toward reliable implementation.
              </p>
            </div>
            <div className="about-banner-art">
              <img
                src="/images/baja-frame.svg"
                alt="Illustrative engineering chassis design"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">TOOLS & TECHNIQUES</p>
              <h2>
                Technical skills<span className="period">.</span>
              </h2>
            </div>
          </div>
          <div className="skills-grid">
            {skills.map((s) => (
              <div className="skill-card" key={s.title}>
                <h3>{s.title}</h3>
                <ul>
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container two-col-sections">
          <div>
            <p className="eyebrow">EDUCATION</p>
            <h2>
              Background<span className="period">.</span>
            </h2>
            {background.map((i) => (
              <div className="history-item" key={i.title}>
                <h3>{i.title}</h3>
                <strong>{i.line}</strong>
                <p>{i.detail}</p>
              </div>
            ))}
          </div>
          <div>
            <p className="eyebrow">EXPERIENCE</p>
            <h2>
              Professional work<span className="period">.</span>
            </h2>
            {experience.map((i) => (
              <div className="history-item" key={i.title}>
                <span className="date">{i.date}</span>
                <h3>{i.title}</h3>
                <strong>{i.organization}</strong>
                <p>{i.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container about-bottom">
          <Link className="button button-primary" to="/projects">
            See Projects <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
