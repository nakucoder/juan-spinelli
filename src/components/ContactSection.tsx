import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
const links = [
  {
    label: "Email",
    value: "juanakuspinelli@gmail.com",
    href: "mailto:juanakuspinelli@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "nakucoder",
    href: "https://github.com/nakucoder",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "juan-spinelli",
    href: "https://linkedin.com/in/juan-spinelli",
    icon: Linkedin,
  },
];
const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold mb-3">Let's Connect</h2>
          <p className="text-sm text-muted-foreground">
            Open to opportunities and collaboration.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group glass-card rounded-lg p-5 text-center hover:border-primary/40 transition-all duration-300"
            >
              <link.icon className="w-5 h-5 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">{link.label}</p>
              <p className="text-sm text-foreground">
                {link.value}
              </p>
            </motion.a>
          ))}
        </div>
        <div className="mt-20 text-center">
          <p className="text-xs text-muted-foreground/40 font-mono">
            © {new Date().getFullYear()} Juan Spinelli.
          </p>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
