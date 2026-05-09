import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const skillGroups = [
  {
    label: "Languages & Backend",
    skills: ["Python", "Java", "JavaScript", "Node.js", "Express", "MongoDB", "Firebase", "JWT"],
  },
  {
    label: "Frontend",
    skills: ["HTML", "CSS", "React", "Vite", "Recharts", "Web Design"],
  },
  {
    label: "Cloud & Tools",
    skills: ["AWS EC2", "AWS S3", "Docker", "FastAPI", "Nginx", "GitHub Actions", "APScheduler", "Vercel", "Git"],
  },
  {
    label: "Specialized",
    skills: ["Unity", "ArcGIS", "Oculus / VR"],
  },
  {
    label: "Testing & Tools",
    skills: ["Jest", "Swagger", "Postman", "REST APIs", "boto3", "Docker Compose"],
  },
  {
    label: "Languages Spoken",
    skills: ["English (Fluent)", "Spanish (Fluent)"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-12 flex items-center gap-3">
            <Code2 className="w-5 h-5 text-primary" />
            Skills
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-lg p-5"
            >
              <h3 className="text-xs font-mono uppercase tracking-wider text-primary mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-md bg-secondary/80 text-foreground/80 hover:text-accent hover:bg-accent/10 transition-colors duration-200 cursor-default"
                  >
                    {skill}
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

export default SkillsSection;
