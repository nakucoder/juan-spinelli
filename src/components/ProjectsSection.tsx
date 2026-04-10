import { motion } from "framer-motion";
import { FolderOpen, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "TriMerge Auth System",
    description: "Secure authentication platform with JWT tokens and role-based access control for enterprise consulting workflows.",
    tags: ["JWT", "RBAC", "Node.js", "Express"],
    accent: "primary" as const,
  },
  {
    title: "TriMerge AI Proposal Builder",
    description: "AI-powered tool that automates and streamlines the creation of consulting proposals using natural language processing.",
    tags: ["AI", "Python", "Firebase"],
    accent: "accent" as const,
  },
  {
    title: "Tetris Clone",
    description: "Classic Tetris game built from scratch with smooth animations, scoring system, and increasing difficulty levels.",
    tags: ["JavaScript", "Game Dev", "Canvas"],
    accent: "primary" as const,
  },
  {
    title: "RoboFit Trainer",
    description: "Fitness training application combining robotics concepts with personalized workout planning and tracking.",
    tags: ["Python", "ML", "Fitness"],
    accent: "accent" as const,
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
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group glass-card rounded-lg p-5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  project.accent === "accent" ? "bg-accent" : "bg-primary"
                }`} />
                <ExternalLink className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary transition-colors" />
              </div>

              <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
