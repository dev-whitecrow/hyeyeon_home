import { motion } from "framer-motion";
import heroImg from "../imports/48665a210917495.67196934036ca.jpeg";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden h-[100svh] min-h-[560px]">
      <img
        src={heroImg}
        alt="A person in a meditative pose"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-brand-dark/45" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.span
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.18, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="leading-none font-black font-serif text-brand-accent text-[clamp(120px,28vw,340px)] tracking-[-0.04em] whitespace-nowrap"
        >
          Open Your Art
        </motion.span>
      </div>

      <div className="relative h-full flex flex-col justify-between px-6 md:px-16 py-12 md:py-16 max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="pt-4"
        >
          <h1 className="leading-tight font-bold font-serif text-[clamp(2.8rem,8vw,7rem)] text-brand-light tracking-[-0.02em]">
            Open
            <br />
            Your Art
          </h1>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-xl"
        >
          <div className="mb-5 w-10 h-px bg-brand-accent" />
          <blockquote>
            <p className="leading-relaxed mb-3 font-serif italic text-[clamp(1rem,2.2vw,1.4rem)] text-brand-light">
              "Your abundance is not measured by what you have,
              <br />
              it is created by what you share."
            </p>
            <p className="uppercase font-sans text-[0.65rem] text-brand-accent tracking-[0.2em]">
              'Savor Every Moment'
            </p>
          </blockquote>

          <div className="mt-10 flex items-center gap-3">
            <div className="w-6 h-px bg-brand-light/40" />
            <span className="uppercase font-sans text-[0.6rem] text-brand-light/50 tracking-[0.2em]">
              Scroll
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
