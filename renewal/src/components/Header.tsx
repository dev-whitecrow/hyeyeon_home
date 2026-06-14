import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  label: string;
  id: string;
}

const navLinks: NavLink[] = [
  { label: "ABOUT", id: "about" },
  { label: "CONTENT", id: "content" },
  { label: "CONTACT", id: "contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-light border-b border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <span
          className="text-xl tracking-tight cursor-pointer font-serif text-brand-dark"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Open Your Art
        </span>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-xs transition-opacity hover:opacity-50 font-sans text-brand-dark tracking-[0.18em]"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden p-1 text-brand-dark"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden px-6 pb-6 flex flex-col gap-5 bg-brand-light overflow-hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left text-xs transition-opacity hover:opacity-50 font-sans text-brand-dark tracking-[0.18em]"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
