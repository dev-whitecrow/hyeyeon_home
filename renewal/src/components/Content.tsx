import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Program {
  num: string;
  ko: string;
  en: string;
  desc: string;
  accentClass: string;
}

const programs: Program[] = [
  {
    num: "01",
    ko: "현대인 프로그램",
    en: "Modern People Program",
    desc: "바쁜 일상 속에서 예술과 함께 내면의 균형을 찾아가는 프로그램입니다.",
    accentClass: "text-brand-accent",
  },
  {
    num: "02",
    ko: "청소년 프로그램",
    en: "Youth Program",
    desc: "창의력과 감수성을 키우며 미래를 향한 자신만의 예술적 언어를 발견합니다.",
    accentClass: "text-brand-accent2",
  },
  {
    num: "03",
    ko: "시니어 프로그램",
    en: "Senior Program",
    desc: "삶의 지혜와 경험을 예술로 승화시키며 새로운 창작의 기쁨을 누립니다.",
    accentClass: "text-brand-accent",
  },
];

export default function Content() {
  return (
    <section id="content" className="w-full bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-36">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 uppercase font-sans text-[0.65rem] text-brand-dark/40 tracking-[0.22em]"
        >
          Content
        </motion.p>

        <div className="flex flex-col">
          {programs.map((p, i) => (
            <motion.div 
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {i > 0 && (
                <div className="h-px bg-brand-dark/10" />
              )}
              <div className="relative py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-center overflow-hidden group hover:bg-brand-dark/5 transition-colors duration-500 -mx-6 px-6 md:-mx-16 md:px-16 rounded-xl">
                
                <div className={`absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none select-none leading-none font-serif text-[clamp(100px,20vw,220px)] font-black tracking-[-0.05em] opacity-35 ${p.accentClass}`}>
                  {p.num}
                </div>

                <div className="md:col-span-2 z-10">
                  <span className="font-black leading-none font-serif text-[clamp(3rem,6vw,5.5rem)] text-brand-dark tracking-[-0.04em]">
                    {p.num}
                  </span>
                </div>

                <div className="md:col-span-7 z-10">
                  <h3 className="font-bold mb-1 leading-tight font-serif text-[clamp(1.4rem,3vw,2.2rem)] text-brand-dark">
                    {p.ko}
                  </h3>
                  <p className="mb-3 text-xs uppercase font-sans text-brand-dark/45 tracking-[0.15em]">
                    {p.en}
                  </p>
                  <p className="leading-relaxed max-w-md font-sans text-[0.9rem] text-brand-gray/80">
                    {p.desc}
                  </p>
                </div>

                <div className="md:col-span-3 z-10 flex md:justify-end">
                  <div className="flex items-center gap-2 cursor-pointer text-brand-dark group/btn">
                    <span className="text-xs uppercase transition-opacity group-hover/btn:opacity-50 font-sans tracking-[0.15em]">
                      Learn More
                    </span>
                    <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="h-px bg-brand-dark/10" />
        </div>
      </div>
    </section>
  );
}
