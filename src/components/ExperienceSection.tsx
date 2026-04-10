import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "TriMerge Consulting Group",
    period: "2026 – Present",
    description: "Building secure authentication systems using JWT and RBAC patterns. Developing AI-powered proposal generation tools to streamline consulting workflows.",
    tags: ["JWT", "RBAC", "AI", "Node.js"],
    current: true,
  },
  {
    role: "GIS & IoT Intern",
    company: "City of Coral Gables",
    period: "Sept 2023 – Nov 2023",
    description: "Developed an immersive VR environment using Unity and ArcGIS for Oculus Meta Quest, enabling city planners to visualize geospatial data in three dimensions.",
    tags: ["Unity", "ArcGIS", "VR", "Oculus"],
    current: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-primary" />
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-8"
              >
                {/* Dot */}
                <div className={`absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 ${
                  exp.current
                    ? "border-accent bg-accent/20"
                    : "border-primary bg-primary/20"
                }`} />

                <div className="glass-card rounded-lg p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-sm text-primary mb-3">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
