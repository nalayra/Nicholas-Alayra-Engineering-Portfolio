import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return <Link className="project-card" to={`/projects/${project.slug}`}>
    <div className="project-art"><img src={project.image} alt={project.imageAlt} loading="lazy"/><span className="project-index">{project.number} / PROJECT</span></div>
    <div className="project-copy"><p className="eyebrow project-category">{project.category}</p><div className="project-heading"><h3>{project.title}</h3><span className="round-arrow"><ArrowUpRight size={18}/></span></div><p>{project.summary}</p><div className="tag-row">{project.tags.slice(0,3).map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div>
  </Link>;
}
