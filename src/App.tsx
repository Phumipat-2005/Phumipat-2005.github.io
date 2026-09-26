import { projectsData } from "./data/projects";
import { ProjectCard } from "./component/ProjectCard";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <header className="hero">
        <div className="status-badge">
          <span className="dot"></span> Portfolio Under Construction
        </div>
        <h1>Hi, I'm Phumipat Wongdaw 👋</h1>
        <p className="subtitle">A Frontend Developer from Thailand</p>
      </header>

      <section className="section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <footer>
        <a href="https://github.com/Phumipat-2005" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:Phumipat561101@gmail.com">Contact</a>
      </footer>
    </div>
  );
}