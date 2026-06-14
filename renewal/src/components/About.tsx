import { motion } from "framer-motion";

interface Service {
  title: string;
  desc: string;
  bgClass: string;
  border?: boolean;
}

const services: Service[] = [
  {
    title: "Art Therapy",
    desc: "예술로 치유하는 시간",
    bgClass: "bg-brand-accent",
  },
  {
    title: "Cultural Program",
    desc: "문화를 통한 성장",
    bgClass: "bg-[#F7E28B]",
  },
  {
    title: "Creative Workshop",
    desc: "창의적 표현의 장",
    bgClass: "bg-brand-light",
    border: true,
  },
];

export default function About() {
  return (
    <section id="about" className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-36">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 uppercase font-sans text-[0.65rem] text-brand-accent tracking-[0.22em]"
        >
          About
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-8 leading-snug font-bold font-serif text-[clamp(2rem,4vw,3.2rem)] text-brand-dark tracking-[-0.01em]">
              당신의 이야기를
              <br />
              들려주세요.
            </h2>
            <div className="space-y-4 leading-[1.85] font-sans text-base text-brand-gray">
              <p>Open Your Art 가 당신의 이야기를 예술로 만들어 드립니다.</p>
              <p>
                문화 예술을 통해 삶의 희로애락을 경험하며, 당신의 삶을 더욱 풍성하고 아름답게 만들어 드리겠습니다.
              </p>
              <p className="pt-2 font-medium text-brand-dark">
                선한 문화를 전달합니다 — Open Your Art
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="w-full aspect-square max-w-xs flex items-end p-8 bg-brand-dark">
              <p className="leading-tight font-serif italic text-[1.4rem] text-brand-light">
                "Art is the
                <br />
                language of
                <br />
                the soul."
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 md:mt-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-10"
          >
            <p className="uppercase font-sans text-[0.65rem] text-brand-accent tracking-[0.22em]">
              Our Services
            </p>
            <div className="flex-1 h-px bg-brand-dark/10" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`p-8 md:p-10 flex flex-col justify-between min-h-[200px] ${s.bgClass} ${
                  s.border ? "border border-brand-dark/15" : ""
                }`}
              >
                <p className="uppercase text-xs mb-6 font-sans text-brand-dark/50 tracking-[0.18em]">
                  Service
                </p>
                <div>
                  <p className="text-lg font-bold mb-1 font-serif text-brand-dark">
                    {s.title}
                  </p>
                  <p className="text-sm font-sans text-brand-dark/70">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
