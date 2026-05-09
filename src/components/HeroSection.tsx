import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToExperience = () => {
    const el = document.getElementById("experience");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20 landscape:pt-24">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-[100px]" />
      <div className="container relative z-10 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-sm tracking-widest uppercase text-primary mb-4">
            Miami, FL
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Juan Spinelli
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-3 font-light">
            Software Engineer
          </p>
          <p className="text-sm sm:text-base text-muted-foreground/70 max-w-xl mx-auto mb-10 leading-relaxed">
            From the discipline of competitive tennis to building robust software —
            channeling resilience, strategic thinking, and relentless growth into every line of code.
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <a href="https://github.com/nakucoder" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/juan-spinelli" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:juanakuspinelli@gmail.com" className="p-3 rounded-lg border border-border/50 text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <a
            href="https://nakucoder.github.io/juan-spinelli/Juan%20Spinelli%20Resume%20(1).pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border/50 text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 mb-16"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>
        <motion.button
          onClick={scrollToExperience}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground/50 uppercase tracking-widest hover:text-primary transition-colors"
        >
          Scroll <ArrowDown className="w-3 h-3 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
