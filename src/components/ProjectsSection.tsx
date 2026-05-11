import { motion } from "framer-motion";
import { FolderOpen, ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    title: "Miami Data Dashboard",
    description: "A live React dashboard visualizing real-time Miami weather, cryptocurrency prices, and stock market data — fetching from AWS API Gateway endpoints backed by Lambda functions.",
    tags: ["React", "Vite", "Recharts", "API Gateway", "AWS Lambda", "Vercel"],
    accent: "primary" as const,
    github: "https://github.com/nakucoder/miami-dashboard",
    demo: "https://miami-dashboard-plum.vercel.app",
  },
  {
    title: "Miami Data Pipeline",
    description: "Three automated data pipelines collecting live weather, crypto, and stock market data — migrated from EC2/Docker to serverless AWS Lambda triggered by EventBridge, with API Gateway endpoints and CloudWatch monitoring.",
    tags: ["Python", "FastAPI", "AWS Lambda", "EventBridge", "API Gateway", "CloudWatch", "SNS", "AWS S3"],
    accent: "accent" as const,
    github: "https://github.com/nakucoder/miami-data-pipeline",
  },
  {
    title: "AI Gateway Engine",
    description: "High-performance Node.js/TypeScript API Gateway bridging frontend and Python AI Engine. Features JWT auth, rate limiting, and real-time health monitoring.",
    tags: ["Node.js", "TypeScript", "Python", "JWT"],
    accent: "primary" as const,
    github: "https://github.com/nakucoder/ai-gateway-engine",
  },
  {
    title: "AI Firebase Dashboard",
    description: "Full-stack AI Dashboard integrated with Firebase for Authentication and Storage, connected to a custom Python AI Engine.",
    tags: ["TypeScript", "Firebase", "AI", "Python"],
    accent: "accent" as const,
    github: "https://github.com/nakucoder/ai-firebase-dashboard",
  },
  {
    title: "TriMerge Auth System",
    description: "Secure authentication platform with JWT tokens and role-based access control for enterprise consulting workflows.",
    tags: ["JWT", "RBAC", "Node.js", "Express"],
    accent: "primary" as const,
    github: null,
  },
  {
    title: "TriMerge AI Proposal Builder",
    description: "AI-powered tool that automates and streamlines the creation of consulting proposals using natural language processing.",
    tags: ["AI", "Python", "Firebase"],
    accent: "accent" as const,
    github: null,
  },
  {
    title: "Tetris Clone",
    description: "Classic Tetris game built from scratch with smooth animations, scoring system, and increasing difficulty levels.",
    tags: ["Python", "Game Dev", "Pygame"],
    accent: "primary" as const,
    github: "https://github.com/nakucoder/Python-Tetris",
  },
  {
    title: "RoboFit Trainer",
    description: "Fitness training application combining robotics concepts with personalized workout planning and tracking.",
    tags: ["Python", "ML", "Fitness"],
    accent: "accent" as const,
    github: "https://github.com/nakucoder/robofit-trainer",
    demo: "https://nakucoder.github.io/robofit-trainer/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-12 flex items-center gap-3">
            <FolderOpen className="w-5 h-5 text-primary" />
            Projects
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => {
            const content = (
              <>
                <div className="mb-3 flex items-center justify-between">
                  <div className={`w-2 h-2 rounded-full ${
                    project.accent === "accent" ? "bg-accent" : "bg-primary"
                  }`} />
                  {project.github && (
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {"demo" in project && project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="ml-auto inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                    >
                      <Globe className="w-3 h-3" />
                      Live Demo
                    </a>
                  )}
                </div>
              </>
            );

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group glass-card rounded-lg p-5 hover:border-primary/30 transition-all duration-300 block"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="group glass-card rounded-lg p-5 transition-all duration-300">
                    {content}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
