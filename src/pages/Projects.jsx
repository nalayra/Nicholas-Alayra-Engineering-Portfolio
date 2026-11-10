import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/site";
export default function Projects() {
  return (
    <section className="section page-top">
      <div className="container">
        <div className="page-heading">
          <p className="eyebrow">PORTFOLIO / SELECTED WORK</p>
          <h1>
            Engineering projects<span className="period">.</span>
          </h1>
          <p>
            Design challenges, technical process, and work in progress.
            Illustrations are placeholders until replaced with original project
            imagery.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
