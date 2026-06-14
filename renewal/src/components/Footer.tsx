export default function Footer() {
  return (
    <footer className="w-full bg-brand-dark text-brand-light">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20">
        <div className="mb-12">
          <p className="mb-4 text-2xl font-bold leading-tight font-serif text-brand-light">
            Open Your Art
          </p>
          <p className="max-w-lg leading-[1.8] font-serif italic text-base text-brand-light/65">
            "Your abundance is not measured by what you have,
            it is created by what you share."
          </p>
        </div>

        <div className="mb-10 h-px bg-brand-light/15" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-[0.78rem] text-brand-light/50 leading-loose">
          <div className="space-y-0.5">
            <p>사업자등록번호 459-09-00957</p>
            <p>Open Your Art(오픈유어아트) | 대표자명 박혜연</p>
          </div>
          <div className="space-y-0.5 md:text-right">
            <p>070.8018.8244 | oa@openyourart.co.kr</p>
            <p>Working day. 10:00 – 18:00 / Holiday. Weekends. National Holiday</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-sans text-[0.7rem] text-brand-light/30 tracking-[0.08em]">
          <p>© 2024 Open Your Art. All rights reserved.</p>
          <p className="uppercase tracking-[0.15em]">
            Savor Every Moment
          </p>
        </div>
      </div>
    </footer>
  );
}
