import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// --- Utils & Components ---

const AsciiContainer = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-full max-w-[1200px] mx-auto px-4 md:px-6 ${className}`}>
    {children}
  </div>
);

const AsciiLine = ({ char = "-", className = "" }: { char?: string; className?: string }) => (
  <div className={`overflow-hidden whitespace-nowrap select-none font-mono leading-none opacity-80 ${className}`} aria-hidden="true">
    {char.repeat(200)}
  </div>
);

const AsciiButton = ({ children, href, className = "" }: { children: React.ReactNode; href?: string; className?: string }) => {
  const content = (
    <span className="inline-block border border-[#332F2C] px-4 py-2 hover:bg-[#332F2C] hover:text-[#E0E2D1] transition-colors font-mono uppercase text-sm font-bold tracking-widest">
      [{children}]
    </span>
  );

  if (href) {
    return <a href={href} className={className}>{content}</a>;
  }
  return <button className={className}>{content}</button>;
};

const AsciiBox = ({ children, title, className = "" }: { children: React.ReactNode; title?: string; className?: string }) => (
  <div className={`relative p-6 border-l border-r border-[#332F2C] ${className}`}>
    <div className="absolute top-0 left-0 right-0 flex justify-between items-center text-[#332F2C] leading-none font-mono">
      <span>/</span>
      <span className="w-full overflow-hidden whitespace-nowrap mx-1 opacity-50">{"- ".repeat(100)}</span>
      <span>\</span>
    </div>
    
    {title && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E0E2D1] px-4 font-mono font-bold uppercase tracking-widest text-sm">
        {title}
      </div>
    )}

    {children}

    <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center text-[#332F2C] leading-none font-mono">
      <span>\</span>
      <span className="w-full overflow-hidden whitespace-nowrap mx-1 opacity-50">{"- ".repeat(100)}</span>
      <span>/</span>
    </div>
  </div>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Философия', href: '#philosophy' },
    { name: 'Программа', href: '#program' },
    { name: 'Треки', href: '#tracks' },
    { name: 'Тарифы', href: '#pricing' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#E0E2D1] border-b border-[#332F2C] font-mono text-[#332F2C]">
      <div className="w-full border-b border-[#332F2C] py-1 overflow-hidden whitespace-nowrap text-[10px] uppercase tracking-[0.2em] opacity-60 select-none">
        AI MINDSET LAB W26 . AI MINDSET LAB W26 . AI MINDSET LAB W26 . AI MINDSET LAB W26 . AI MINDSET LAB W26 . AI MINDSET LAB W26 .
      </div>
      <AsciiContainer className="h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tighter uppercase flex items-center gap-2">
          <span className="w-8 h-8 border border-[#332F2C] flex items-center justify-center">
            <img
              src="/assets/ai-mindset-logo.png"
              alt="AI Mindset logo"
              className="h-4 w-auto object-contain mix-blend-multiply opacity-90"
            />
          </span>
          <span className="hidden sm:inline text-sm tracking-widest border-b border-[#332F2C]">AI MINDSET</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest font-bold">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:underline decoration-2 underline-offset-4"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Ticket Stamp */}
        <div className="hidden md:block">
          <a href="https://join.aimindset.org/waitlist" className="group flex font-mono text-xs font-bold border border-[#332F2C] hover:bg-[#332F2C] hover:text-[#E0E2D1] transition-colors cursor-pointer">
            <span className="border-r border-[#332F2C] px-1.5 py-1 group-hover:border-[#E0E2D1]">З</span>
            <span className="border-r border-[#332F2C] px-1.5 py-1 group-hover:border-[#E0E2D1]">А</span>
            <span className="border-r border-[#332F2C] px-1.5 py-1 group-hover:border-[#E0E2D1]">Я</span>
            <span className="border-r border-[#332F2C] px-1.5 py-1 group-hover:border-[#E0E2D1]">В</span>
            <span className="border-r border-[#332F2C] px-1.5 py-1 group-hover:border-[#E0E2D1]">К</span>
            <span className="px-1.5 py-1">А</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </AsciiContainer>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#332F2C] bg-[#E0E2D1] p-4">
          <div className="flex flex-col gap-4 font-mono text-sm uppercase tracking-widest">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="border-b border-dashed border-[#332F2C] pb-2"
              >
                {link.name}
              </a>
            ))}
            <a href="https://join.aimindset.org/waitlist" className="bg-[#332F2C] text-[#E0E2D1] text-center py-3 font-bold">
              [ ПОДАТЬ ЗАЯВКУ ]
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="py-20 md:py-32 overflow-hidden relative">
    <AsciiContainer className="relative z-10 flex flex-col items-center text-center">
      
      {/* Top Decoration */}
      <div className="mb-12 w-full max-w-2xl mx-auto text-[#332F2C] opacity-80 font-mono text-xs md:text-sm leading-none flex flex-col items-center gap-1">
        <div>|</div>
        <div>|</div>
        <div className="w-full flex justify-between">
           <span>/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - \</span>
        </div>
      </div>

      <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-[#332F2C] mb-8 max-w-4xl mx-auto leading-tight">
        АНОНСЫ НОВЫХ СМЫСЛОВ, <br />
        НОВОСТИ И ЗНАКОМСТВО <br />
        С <span className="bg-[#332F2C] text-[#E0E2D1] px-2">AI MINDSET</span>
      </h1>

      <div className="mb-12 font-mono font-bold text-lg md:text-xl uppercase tracking-widest flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <span className="border-b-2 border-[#332F2C] pb-1">( ЗИМА 26</span>
        <span className="hidden md:inline">|</span>
        <span className="border-b-2 border-[#332F2C] pb-1">4 НЕДЕЛИ</span>
        <span className="hidden md:inline">|</span>
        <span className="border-b-2 border-[#332F2C] pb-1">ONLINE )</span>
      </div>

      {/* Bottom Decoration */}
      <div className="mt-4 w-full max-w-2xl mx-auto text-[#332F2C] opacity-80 font-mono text-xs md:text-sm leading-none flex flex-col items-center gap-1">
        <div className="w-full flex justify-between">
           <span>\ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /</span>
        </div>
        <div>|</div>
        <div>|</div>
        <div>|</div>
        <div>|</div>
        <div>|</div>
      </div>

    </AsciiContainer>
  </section>
);

const Philosophy = () => (
  <section id="philosophy" className="py-16 border-t border-[#332F2C]">
    <AsciiContainer>
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-3 font-mono text-xs uppercase tracking-widest border-l-4 border-[#332F2C] pl-4 h-fit">
          [3] <br/>
          ПРЕССА
        </div>
        <div className="md:col-span-9">
          <div className="relative p-8 md:p-12 border border-[#332F2C] bg-[#E0E2D1]">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#332F2C]" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#332F2C]" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#332F2C]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#332F2C]" />

            <blockquote className="font-mono text-xl md:text-3xl font-bold uppercase leading-snug text-center">
              «ГЛАВНОЕ СОБЫТИЕ ГОДА ДЛЯ ЦЕНИТЕЛЕЙ <span className="bg-[#332F2C] text-[#E0E2D1] px-2">СИСТЕМНОГО МЫШЛЕНИЯ</span> В ЭПОХУ ИСКУССТВЕННОГО ИНТЕЛЛЕКТА».
            </blockquote>
            
            <div className="mt-8 text-center font-mono text-sm uppercase tracking-widest opacity-60">
              — TimeOut (AI Edition)
            </div>
          </div>

          <div className="mt-12 text-center font-mono">
            <div className="flex flex-col items-center gap-1 opacity-50">
               <span>.</span>
               <span>.</span>
               <span>.</span>
               <span>.</span>
               <span>.</span>
            </div>
          </div>
        </div>
      </div>
    </AsciiContainer>
  </section>
);

const Program = () => (
  <section id="program" className="py-16">
    <AsciiContainer>
      <div className="mb-12 text-center">
        <AsciiLine char="/" className="mb-2" />
        <h2 className="text-4xl font-mono font-bold uppercase bg-[#332F2C] text-[#E0E2D1] inline-block px-6 py-2">
          ПРОГРАММА
        </h2>
        <AsciiLine char="\" className="mt-2" />
      </div>

      <div className="space-y-8">
        {[
          { id: "01", title: "PROMPT ENGINEERING", desc: "ОСНОВЫ ВЗАИМОДЕЙСТВИЯ. CHAIN-OF-THOUGHT." },
          { id: "02", title: "CONTEXT ENGINEERING", desc: "OBSIDIAN + MCP. ВТОРОЙ МОЗГ." },
          { id: "03", title: "MIND ENGINEERING", desc: "КОУЧИНГ И РЕФЛЕКСИЯ. МЕНТАЛЬНЫЕ МОДЕЛИ." },
          { id: "04", title: "LIFE ENGINEERING", desc: "ПРОТОТИПИРОВАНИЕ. VIBE-CODING." }
        ].map((week, i) => (
          <div key={i} className="grid md:grid-cols-[100px_1fr] gap-4 font-mono group">
            <div className="text-2xl font-bold opacity-40 group-hover:opacity-100 transition-opacity">
              [{week.id}]
            </div>
            <div>
              <div className="border-b border-dashed border-[#332F2C] pb-2 mb-2 flex justify-between items-end">
                <h3 className="text-xl md:text-2xl font-bold uppercase">{week.title}</h3>
                <span className="hidden md:inline text-xs opacity-50">WEEK {week.id}</span>
              </div>
              <p className="text-sm md:text-base uppercase tracking-wide opacity-80">{week.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16">
        <AsciiLine char="." />
      </div>
    </AsciiContainer>
  </section>
);

const Tracks = () => (
  <section id="tracks" className="py-16 bg-[#332F2C] text-[#E0E2D1]">
    <AsciiContainer>
      <div className="mb-16 flex justify-between items-end border-b border-[#E0E2D1] pb-4">
        <h2 className="text-3xl md:text-5xl font-mono font-bold uppercase">
          ТРЕКИ
        </h2>
        <div className="font-mono text-xs uppercase tracking-widest text-right">
          ADVANCED <br/> ACCESS ONLY
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: "COACHING", sub: "БАЛАНС" },
          { title: "AGENTS", sub: "АВТОНОМНОСТЬ" },
          { title: "CODING", sub: "ТВОРЧЕСТВО" },
          { title: "CREATIVE", sub: "ИСКУССТВО" }
        ].map((track, i) => (
          <div key={i} className="border border-[#E0E2D1] p-6 hover:bg-[#E0E2D1] hover:text-[#332F2C] transition-colors cursor-default group">
            <div className="flex justify-between mb-8 font-mono text-xs">
              <span>TRK-{i+1}</span>
              <span>[ + ]</span>
            </div>
            <h3 className="text-4xl font-mono font-bold uppercase mb-2">{track.title}</h3>
            <p className="font-mono text-sm uppercase tracking-widest opacity-70 group-hover:opacity-100">
              /// {track.sub}
            </p>
          </div>
        ))}
      </div>
    </AsciiContainer>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-24 relative overflow-hidden">
    {/* Background Texture */}
    <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden leading-none font-mono text-[10px] break-all select-none">
      {Array(100).fill("MINDSET ").join("")}
    </div>

    <AsciiContainer className="relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="font-mono text-2xl md:text-3xl font-bold uppercase leading-relaxed">
          КАК ПОПАСТЬ В ЛАЙНАП, <br/>
          КОГДА БУДЕТ РАСПИСАНИЕ, И ЧТО ДЕЛАТЬ, <br/>
          ЕСЛИ НЕ ПРИШЕЛ БИЛЕТ?
        </h2>
        <div className="mt-8 flex justify-center">
           <span className="font-mono text-sm">-------------------------</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {[
          { name: "MAIN", price: "590", currency: "EUR" },
          { name: "ADVANCED", price: "890", currency: "EUR", highlight: true },
          { name: "PREMIUM", price: "1490", currency: "EUR" }
        ].map((plan, i) => (
          <React.Fragment key={i}>
            <AsciiBox className={`bg-[#E0E2D1] ${plan.highlight ? 'border-2 border-[#332F2C]' : ''}`}>
              <div className="text-center py-8">
                <h3 className="font-mono text-xl font-bold uppercase mb-4 border-b border-[#332F2C] inline-block pb-1">
                  {plan.name}
                </h3>
                <div className="font-mono text-5xl font-bold mb-2">
                  {plan.price}
                </div>
                <div className="font-mono text-sm uppercase tracking-widest mb-8">
                  {plan.currency}
                </div>
                
                <AsciiButton href="https://join.aimindset.org/context" className="w-full">
                  ВЫБРАТЬ
                </AsciiButton>
              </div>
            </AsciiBox>
          </React.Fragment>
        ))}
      </div>
    </AsciiContainer>
  </section>
);

const Footer = () => (
  <footer className="bg-[#332F2C] text-[#E0E2D1] py-12 font-mono border-t-4 border-[#E0E2D1]">
    <AsciiContainer>
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <h2 className="text-4xl font-bold uppercase mb-4 tracking-tighter">
            ПЛОЩАДКА 2026
          </h2>
          <AsciiLine char="=" className="max-w-[200px] mb-4" />
          <p className="text-xs uppercase tracking-widest opacity-70 max-w-xs">
            ЛАБОРАТОРИЯ НОВОГО МЫШЛЕНИЯ. <br/>
            ВСЕ ПРАВА ЗАЩИЩЕНЫ (ИЛИ НЕТ).
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 text-sm uppercase tracking-widest">
          <div className="flex flex-col gap-2">
            <span className="opacity-50 border-b border-[#E0E2D1] pb-1 mb-2">ИНФО</span>
            <a href="#" className="hover:text-white">ОФЕРТА</a>
            <a href="#" className="hover:text-white">ПРАВИЛА</a>
            <a href="#" className="hover:text-white">КОНТАКТЫ</a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="opacity-50 border-b border-[#E0E2D1] pb-1 mb-2">СОЦСЕТИ</span>
            <a href="https://t.me/ai_mind_set" className="hover:text-white">TELEGRAM</a>
            <a href="https://www.youtube.com/@A-I-Mindset" className="hover:text-white">YOUTUBE</a>
          </div>
        </div>
      </div>
      
      <div className="mt-12 pt-4 border-t border-dashed border-[#E0E2D1]/30 text-[10px] text-center opacity-50">
        MADE WITH ASCII LOVE
      </div>
    </AsciiContainer>
  </footer>
);

export default function AsciiPage() {
  return (
    <div className="min-h-screen bg-[#E0E2D1] text-[#332F2C] font-mono selection:bg-[#332F2C] selection:text-[#E0E2D1]">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Program />
        <Tracks />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
