import type { Project } from "../data/projects";

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">{project.emoji} {project.name}</span>
      </div>
      <p className="card-desc">{project.desc}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <div className="card-actions">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-live">
            🌐 Live Demo ↗
          </a>
        )}
        <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn btn-repo">
          💻 Source Code ↗
        </a>
      </div>
    </div>
  );
};