import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
const navItems = [
  { label: "Experience", href: "experience" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const scrollTo = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container max-w-3xl flex items-center justify-between h-14 px-6">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-bold text-sm tracking-tight">
          J<span className="text-primary">S</span>
        </button>
        <div className="hidden sm:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-background border-b border-border/50 overflow-hidden z-[100]"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onTouchEnd={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  onClick={() => scrollTo(item.href)}
                  className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider text-left py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;
