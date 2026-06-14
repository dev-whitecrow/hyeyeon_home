import { useState } from "react";
import { Menu, X, ArrowRight, Send } from "lucide-react";
import heroImg from "../imports/48665a210917495.67196934036ca.jpeg";

const SERIF = { fontFamily: "'Playfair Display', Georgia, serif" };
const SANS = { fontFamily: "'Helvetica Neue', Arial, Helvetica, sans-serif" };

function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "ABOUT", id: "about" },
    { label: "CONTENT", id: "content" },
    { label: "CONTACT", id: "contact" },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ background: "#F4F2DC", borderBottom: "1px solid rgba(2,34,38,0.1)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <span
          className="text-xl tracking-tight cursor-pointer"
          style={{ ...SERIF, color: "#022226" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Open Your Art
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-xs tracking-widest transition-opacity hover:opacity-50"
              style={{ ...SANS, color: "#022226", letterSpacing: "0.18em" }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1"
          style={{ color: "#022226" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-5"
          style={{ background: "#F4F2DC" }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left text-xs tracking-widest"
              style={{ ...SANS, color: "#022226", letterSpacing: "0.18em" }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100svh", minHeight: 560 }}>
      {/* Background photo */}
      <img
        src={heroImg}
        alt="A person in a meditative pose — calm, serene, mindful"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Tinted overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(2,34,38,0.45)" }}
      />

      {/* Giant background brand letterform (like the "welo" reference) */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ overflow: "hidden" }}
      >
        <span
          className="leading-none font-black"
          style={{
            ...SERIF,
            fontSize: "clamp(120px, 28vw, 340px)",
            color: "#AAD8D8",
            opacity: 0.18,
            letterSpacing: "-0.04em",
            whiteSpace: "nowrap",
          }}
        >
          Open Your Art
        </span>
      </div>

      {/* Hero content */}
      <div className="relative h-full flex flex-col justify-between px-6 md:px-16 py-12 md:py-16 max-w-7xl mx-auto">
        {/* Main title — top area */}
        <div className="pt-4">
          <h1
            className="leading-tight font-bold"
            style={{
              ...SERIF,
              fontSize: "clamp(2.8rem, 8vw, 7rem)",
              color: "#F4F2DC",
              letterSpacing: "-0.02em",
            }}
          >
            Open
            <br />
            Your Art
          </h1>
        </div>

        {/* Quote — bottom-left, editorial placement */}
        <div className="max-w-xl">
          {/* Thin accent rule */}
          <div
            className="mb-5 w-10"
            style={{ height: 1, background: "#AAD8D8" }}
          />
          <blockquote>
            <p
              className="leading-relaxed mb-3"
              style={{
                ...SERIF,
                fontStyle: "italic",
                fontSize: "clamp(1rem, 2.2vw, 1.4rem)",
                color: "#F4F2DC",
              }}
            >
              "Your abundance is not measured by what you have,
              <br />
              it is created by what you share."
            </p>
            <p
              className="tracking-widest uppercase"
              style={{
                ...SANS,
                fontSize: "0.65rem",
                color: "#AAD8D8",
                letterSpacing: "0.2em",
              }}
            >
              'Savor Every Moment'
            </p>
          </blockquote>

          {/* Scroll cue */}
          <div className="mt-10 flex items-center gap-3">
            <div
              className="w-6"
              style={{ height: 1, background: "rgba(244,242,220,0.4)" }}
            />
            <span
              className="tracking-widest uppercase"
              style={{
                ...SANS,
                fontSize: "0.6rem",
                color: "rgba(244,242,220,0.5)",
                letterSpacing: "0.2em",
              }}
            >
              Scroll
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const services = [
    {
      title: "Art Therapy",
      desc: "예술로 치유하는 시간",
      bg: "#AAD8D8",
    },
    {
      title: "Cultural Program",
      desc: "문화를 통한 성장",
      bg: "#F7E28B",
    },
    {
      title: "Creative Workshop",
      desc: "창의적 표현의 장",
      bg: "#F4F2DC",
      border: true,
    },
  ];

  return (
    <section id="about" className="w-full" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-36">

        {/* Section label */}
        <p
          className="mb-12 tracking-widest uppercase"
          style={{ ...SANS, fontSize: "0.65rem", color: "#AAD8D8", letterSpacing: "0.22em" }}
        >
          About
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left — body copy */}
          <div>
            <h2
              className="mb-8 leading-snug font-bold"
              style={{
                ...SERIF,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "#022226",
                letterSpacing: "-0.01em",
              }}
            >
              당신의 이야기를
              <br />
              들려주세요.
            </h2>
            <div
              className="space-y-4 leading-relaxed"
              style={{ ...SANS, fontSize: "1rem", color: "#2A2A2A", lineHeight: 1.85 }}
            >
              <p>Open Your Art 가 당신의 이야기를 예술로 만들어 드립니다.</p>
              <p>
                문화 예술을 통해 삶의 희로애락을 경험하며,
                당신의 삶을 더욱 풍성하고 아름답게 만들어 드리겠습니다.
              </p>
              <p
                className="pt-2 font-medium"
                style={{ color: "#022226" }}
              >
                선한 문화를 전달합니다 — Open Your Art
              </p>
            </div>
          </div>

          {/* Right — decorative accent block */}
          <div className="flex flex-col justify-center">
            <div
              className="w-full aspect-square max-w-xs flex items-end p-8"
              style={{ background: "#022226" }}
            >
              <p
                className="leading-tight"
                style={{
                  ...SERIF,
                  fontStyle: "italic",
                  fontSize: "1.4rem",
                  color: "#F4F2DC",
                }}
              >
                "Art is the
                <br />
                language of
                <br />
                the soul."
              </p>
            </div>
          </div>
        </div>

        {/* Our Services */}
        <div className="mt-24 md:mt-32">
          <div className="flex items-center gap-6 mb-10">
            <p
              className="tracking-widest uppercase"
              style={{ ...SANS, fontSize: "0.65rem", color: "#AAD8D8", letterSpacing: "0.22em" }}
            >
              Our Services
            </p>
            <div className="flex-1" style={{ height: 1, background: "rgba(2,34,38,0.1)" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="p-8 md:p-10 flex flex-col justify-between"
                style={{
                  background: s.bg,
                  border: s.border ? "1px solid rgba(2,34,38,0.15)" : "none",
                  minHeight: 200,
                }}
              >
                <p
                  className="tracking-widest uppercase text-xs mb-6"
                  style={{ ...SANS, color: "#022226", opacity: 0.5, letterSpacing: "0.18em" }}
                >
                  Service
                </p>
                <div>
                  <p
                    className="text-lg font-bold mb-1"
                    style={{ ...SERIF, color: "#022226" }}
                  >
                    {s.title}
                  </p>
                  <p
                    className="text-sm"
                    style={{ ...SANS, color: "#022226", opacity: 0.7 }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Content() {
  const programs = [
    {
      num: "01",
      ko: "현대인 프로그램",
      en: "Modern People Program",
      desc: "바쁜 일상 속에서 예술과 함께 내면의 균형을 찾아가는 프로그램입니다.",
      accent: "#AAD8D8",
    },
    {
      num: "02",
      ko: "청소년 프로그램",
      en: "Youth Program",
      desc: "창의력과 감수성을 키우며 미래를 향한 자신만의 예술적 언어를 발견합니다.",
      accent: "#F7E28B",
    },
    {
      num: "03",
      ko: "시니어 프로그램",
      en: "Senior Program",
      desc: "삶의 지혜와 경험을 예술로 승화시키며 새로운 창작의 기쁨을 누립니다.",
      accent: "#AAD8D8",
    },
  ];

  return (
    <section id="content" className="w-full" style={{ background: "#F4F2DC" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-36">

        {/* Section label */}
        <p
          className="mb-16 tracking-widest uppercase"
          style={{ ...SANS, fontSize: "0.65rem", color: "#022226", opacity: 0.4, letterSpacing: "0.22em" }}
        >
          Content
        </p>

        {/* Programs */}
        <div className="flex flex-col">
          {programs.map((p, i) => (
            <div key={p.num}>
              {i > 0 && (
                <div style={{ height: 1, background: "rgba(2,34,38,0.12)" }} />
              )}
              <div className="relative py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-center overflow-hidden">

                {/* Giant background number */}
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none leading-none"
                  style={{
                    ...SERIF,
                    fontSize: "clamp(100px, 20vw, 220px)",
                    color: p.accent,
                    opacity: 0.35,
                    fontWeight: 900,
                    letterSpacing: "-0.05em",
                  }}
                >
                  {p.num}
                </div>

                {/* Foreground number */}
                <div className="md:col-span-2 z-10">
                  <span
                    className="font-black leading-none"
                    style={{
                      ...SERIF,
                      fontSize: "clamp(3rem, 6vw, 5.5rem)",
                      color: "#022226",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {p.num}
                  </span>
                </div>

                {/* Text content */}
                <div className="md:col-span-7 z-10">
                  <h3
                    className="font-bold mb-1 leading-tight"
                    style={{
                      ...SERIF,
                      fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                      color: "#022226",
                    }}
                  >
                    {p.ko}
                  </h3>
                  <p
                    className="mb-3 text-xs tracking-widest uppercase"
                    style={{ ...SANS, color: "#022226", opacity: 0.45, letterSpacing: "0.15em" }}
                  >
                    {p.en}
                  </p>
                  <p
                    className="leading-relaxed max-w-md"
                    style={{ ...SANS, fontSize: "0.9rem", color: "#2A2A2A", opacity: 0.8 }}
                  >
                    {p.desc}
                  </p>
                </div>

                {/* Arrow */}
                <div className="md:col-span-3 z-10 flex md:justify-end">
                  <div
                    className="flex items-center gap-2 group cursor-pointer"
                    style={{ color: "#022226" }}
                  >
                    <span
                      className="text-xs tracking-widest uppercase transition-opacity group-hover:opacity-50"
                      style={{ ...SANS, letterSpacing: "0.15em" }}
                    >
                      Learn More
                    </span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div style={{ height: 1, background: "rgba(2,34,38,0.12)" }} />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    ...SANS,
    background: "rgba(2,34,38,0.06)",
    border: "1px solid rgba(2,34,38,0.15)",
    color: "#022226",
    fontSize: "0.9rem",
    outline: "none",
    width: "100%",
    padding: "14px 16px",
  };

  return (
    <section id="contact" className="w-full" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-36">

        {/* Section label */}
        <p
          className="mb-12 tracking-widest uppercase"
          style={{ ...SANS, fontSize: "0.65rem", color: "#AAD8D8", letterSpacing: "0.22em" }}
        >
          Contact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left — heading */}
          <div>
            <h2
              className="leading-snug font-bold mb-6"
              style={{
                ...SERIF,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "#022226",
                letterSpacing: "-0.01em",
              }}
            >
              함께 이야기를
              <br />
              나눠봐요.
            </h2>
            <p
              className="leading-relaxed mb-8"
              style={{ ...SANS, fontSize: "0.95rem", color: "#2A2A2A", opacity: 0.7 }}
            >
              프로그램 문의, 협업 제안, 또는 단순한 안부 인사까지
              <br />
              Open Your Art 로 편하게 연락주세요.
            </p>

            <div className="space-y-2" style={{ ...SANS, fontSize: "0.85rem", color: "#022226", opacity: 0.6 }}>
              <p>oa@openyourart.co.kr</p>
              <p>070.8018.8244</p>
              <p>Working day. 10:00 – 18:00</p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {sent ? (
              <div
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <p
                  className="mb-2"
                  style={{ ...SERIF, fontStyle: "italic", fontSize: "1.4rem", color: "#022226" }}
                >
                  감사합니다.
                </p>
                <p style={{ ...SANS, fontSize: "0.85rem", color: "#2A2A2A", opacity: 0.6 }}>
                  빠른 시일 내에 답변 드리겠습니다.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="이름 (Name)"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                  required
                />
                <input
                  type="email"
                  placeholder="이메일 (Email)"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  required
                />
                <textarea
                  placeholder="문의 내용 (Message)"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  style={{ ...inputStyle, resize: "none" }}
                  required
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 py-4 px-8 transition-opacity hover:opacity-75"
                  style={{
                    ...SANS,
                    background: "#022226",
                    color: "#F4F2DC",
                    fontSize: "0.75rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    border: "none",
                    cursor: "pointer",
                    alignSelf: "flex-start",
                  }}
                >
                  Send <Send size={12} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full" style={{ background: "#022226" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20">

        {/* Brand block */}
        <div className="mb-12">
          <p
            className="mb-4 text-2xl font-bold leading-tight"
            style={{ ...SERIF, color: "#F4F2DC" }}
          >
            Open Your Art
          </p>
          <p
            className="max-w-lg leading-relaxed"
            style={{
              ...SERIF,
              fontStyle: "italic",
              fontSize: "1rem",
              color: "rgba(244,242,220,0.65)",
              lineHeight: 1.8,
            }}
          >
            "Your abundance is not measured by what you have,
            it is created by what you share."
          </p>
        </div>

        {/* Divider */}
        <div
          className="mb-10"
          style={{ height: 1, background: "rgba(244,242,220,0.15)" }}
        />

        {/* Business info */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          style={{ ...SANS, fontSize: "0.78rem", color: "rgba(244,242,220,0.5)", lineHeight: 2 }}
        >
          <div className="space-y-0.5">
            <p>사업자등록번호 459-09-00957</p>
            <p>Open Your Art(오픈유어아트) | 대표자명 박혜연</p>
          </div>
          <div className="space-y-0.5 md:text-right">
            <p>070.8018.8244 | oa@openyourart.co.kr</p>
            <p>Working day. 10:00 – 18:00 / Holiday. Weekends. National Holiday</p>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ ...SANS, fontSize: "0.7rem", color: "rgba(244,242,220,0.3)", letterSpacing: "0.08em" }}
        >
          <p>© 2024 Open Your Art. All rights reserved.</p>
          <p className="tracking-widest uppercase" style={{ letterSpacing: "0.15em" }}>
            Savor Every Moment
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        ...SANS,
        scrollBehavior: "smooth",
        overscrollBehavior: "none",
      }}
    >
      <Header />
      <main>
        <Hero />
        <About />
        <Content />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
