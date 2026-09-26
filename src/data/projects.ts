export interface Project {
  id: string;
  name: string;
  emoji: string;
  desc: string;
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
}

export const projectsData: Project[] = [
  {
    id: "calc",
    name: "React Calculator",
    emoji: "🧮",
    desc: "A modern interactive calculator web application built with React.",
    tags: ["React", "JavaScript", "CSS"],
    liveUrl: "https://phumipat-2005.github.io/react-calculator",
    repoUrl: "https://github.com/Phumipat-2005/react-calculator",
  },
  {
    id: "parallel-lingo",
    name: "Parallel Lingo",
    emoji: "📟",
    desc: "A modern interactive language learning web application built with Next.js.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/Phumipat-2005/parallel-lingo",
  },
];