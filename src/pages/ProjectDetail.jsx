import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/site";
export default function ProjectDetail() {
  const { slug } = useParams();
  const p = projects.find((p) => p.slug === slug);
  if (!p)
    return (
      <div className="container missing">
        <h1>Project not found.</h1>
        <Link className="text-link" to="/projects">
          All projects <ArrowRight size={17} />
        </Link>
      </div>
    );
  return (
    <>
      <section className="detail-intro">
        <div className="container">
          <Link className="back-link" to="/projects">
            <ArrowLeft size={16} /> All projects
          </Link>
          <p className="eyebrow">{p.category}</p>
          <h1>
            {p.title}
            <span className="period">.</span>
          </h1>
          <p className="detail-subtitle">{p.subtitle}</p>
          <div className="tag-row">
            {p.tags.map((x) => (
              <span className="tag" key={x}>
                {x}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="detail-media">
        <div className="container">
          <img src={p.image} alt={p.imageAlt} />
          <span className="image-note">
            Placeholder illustration — replace with your own CAD renders and
            project documentation.
          </span>
        </div>
      </section>
      <section className="section">
        <div className="container detail-layout">
          <aside>
            <span className="eyebrow">PROJECT OVERVIEW</span>
            <div className="detail-rule" />
            <span className="detail-aside-title">
              {p.number} / ENGINEERING WORK
            </span>
          </aside>
          <div className="detail-body">
            <h2>Project challenge</h2>
            <p>{p.challenge}</p>
            <h2>My contribution</h2>
            <p>{p.role}</p>
            <h2>Design approach</h2>
            <ul>
              {p.approach.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <h2>Results & next steps</h2>
            <p>{p.results}</p>
          </div>
        </div>
      </section>
      <section className="next-project">
        <div className="container next-inner">
          <div>
            <span className="eyebrow">KEEP EXPLORING</span>
            <h2>More engineering work</h2>
          </div>
          <Link className="button button-outline" to="/projects">
            All projects <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
