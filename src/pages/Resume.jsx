import { ArrowUpRight, Download, FileText, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { profile, skills } from "../data/site";
export default function Resume() {
  return (
    <section className="section page-top">
      <div className="container">
        <div className="page-heading">
          <p className="eyebrow">RESUME / QUALIFICATIONS</p>
          <h1>
            Resume & experience<span className="period">.</span>
          </h1>
          <p>
            An overview of my engineering education, technical skills,
            leadership, and professional background.
          </p>
        </div>
        <div className="resume-layout">
          <aside className="resume-panel">
            <div className="resume-icon">
              <FileText size={27} />
            </div>
            <h2>My resume</h2>
            <p>
              For an up-to-date PDF, add your final resume to{" "}
              <code>public/resume.pdf</code> and set <code>resumePdf</code> in{" "}
              <code>src/data/site.js</code>.
            </p>
            {profile.resumePdf ? (
              <a
                href={profile.resumePdf}
                className="button button-primary"
                download
              >
                Download PDF <Download size={17} />
              </a>
            ) : (
              <span className="resume-unavailable">
                PDF link will appear when added.
              </span>
            )}
            {profile.email && (
              <a className="text-link" href={`mailto:${profile.email}`}>
                Contact me <Mail size={17} />
              </a>
            )}
          </aside>
          <div className="resume-details">
            <p className="eyebrow">EDUCATION</p>
            <div className="resume-line">
              <h3>Biola University</h3>
              <p>B.S. Engineering · Expected May 2027</p>
            </div>
            <div className="resume-line">
              <h3>Flatiron School</h3>
              <p>Software Engineering Certificate</p>
            </div>
            <p className="eyebrow resume-eyebrow">ENGINEERING EXPERIENCE</p>
            <div className="resume-line">
              <h3>Biola Racing · Frame Team Lead</h3>
              <p>
                Baja SAE · Collaborative tubular chassis CAD design using
                SolidWorks
              </p>
            </div>
            <p className="eyebrow resume-eyebrow">SKILLS</p>
            <div className="resume-line">
              <p>{skills.map((s) => s.items.join(", ")).join(" · ")}</p>
            </div>
            <Link to="/projects" className="text-link">
              Explore project details <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
