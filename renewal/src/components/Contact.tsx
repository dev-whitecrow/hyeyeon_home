import { useState } from "react";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass = "font-sans bg-brand-dark/[0.06] border border-brand-dark/15 text-brand-dark text-[0.9rem] outline-none w-full p-4 focus:border-brand-dark/40 transition-colors";

  return (
    <section id="contact" className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-36">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 uppercase font-sans text-[0.65rem] text-brand-accent tracking-[0.22em]"
        >
          Contact
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="leading-snug font-bold mb-6 font-serif text-[clamp(2rem,4vw,3.2rem)] text-brand-dark tracking-[-0.01em]">
              함께 이야기를
              <br />
              나눠봐요.
            </h2>
            <p className="leading-relaxed mb-8 font-sans text-[0.95rem] text-brand-gray/70">
              프로그램 문의, 협업 제안, 또는 단순한 안부 인사까지
              <br />
              Open Your Art 로 편하게 연락주세요.
            </p>

            <div className="space-y-2 font-sans text-[0.85rem] text-brand-dark/60">
              <p>oa@openyourart.co.kr</p>
              <p>070.8018.8244</p>
              <p>Working day. 10:00 – 18:00</p>
            </div>
          </motion.div>

          <div className="min-h-[350px]">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center h-full"
                >
                  <p className="mb-2 font-serif italic text-[1.4rem] text-brand-dark">
                    감사합니다.
                  </p>
                  <p className="font-sans text-[0.85rem] text-brand-gray/60">
                    빠른 시일 내에 답변 드리겠습니다.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  <input
                    type="text"
                    placeholder="이름 (Name)"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    required
                  />
                  <input
                    type="email"
                    placeholder="이메일 (Email)"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    required
                  />
                  <textarea
                    placeholder="문의 내용 (Message)"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className={`${inputClass} resize-none`}
                    required
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 py-4 px-8 transition-opacity hover:opacity-75 font-sans bg-brand-dark text-brand-light text-[0.75rem] tracking-[0.18em] uppercase border-none cursor-pointer self-start"
                  >
                    Send <Send size={12} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
