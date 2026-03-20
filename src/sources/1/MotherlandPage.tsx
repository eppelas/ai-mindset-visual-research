import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, MessageSquare, PlayCircle, ChevronDown } from 'lucide-react';
import { VISUAL_MAP } from '../../Visuals';

const Container = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-full max-w-7xl mx-auto px-4 md:px-8 ${className}`}>
    {children}
  </div>
);

const AsciiDiamond = () => (
  <div className="flex flex-col items-center py-8 opacity-40">
    <div className="text-[8px]">.</div>
    <div className="text-[8px]">.</div>
    <div className="text-[8px]">.</div>
    <div className="text-[10px] leading-[0.8] font-bold">
      <pre>{`       .
      . .
     . . .
    . . . .
   . . . . .
  . . . . . .
 . . . . . . .
. . . . . . . .
 . . . . . . .
  . . . . . .
   . . . . .
    . . . .
     . . .
      . .
       .`}</pre>
    </div>
    <div className="text-[8px]">.</div>
    <div className="text-[8px]">.</div>
    <div className="text-[8px]">.</div>
  </div>
);

const SectionLabel = ({ text, id }: { text: string; id?: string }) => (
  <div className="flex flex-col items-center mb-12" id={id}>
    <div className="text-sm font-bold border-b-2 border-current pb-1 uppercase tracking-widest">{text} --&gt;</div>
    <div className="mt-4 flex flex-col items-center opacity-40">
      {[...Array(5)].map((_, i) => <div key={i} className="text-[8px]">.</div>)}
    </div>
  </div>
);

const SymbolBorder = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative p-[2px] ${className}`}>
    {/* Top Border */}
    <div className="absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap text-[8px] leading-none opacity-20 select-none">
      {Array(100).fill("-").join(" ")}
    </div>
    {/* Bottom Border */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap text-[8px] leading-none opacity-20 select-none">
      {Array(100).fill("-").join(" ")}
    </div>
    {/* Left Border */}
    <div className="absolute top-0 left-0 h-full w-[8px] flex flex-col overflow-hidden opacity-20 select-none">
      {Array(100).fill(".").map((s, i) => <span key={i}>{s}</span>)}
    </div>
    {/* Right Border */}
    <div className="absolute top-0 right-0 h-full w-[8px] flex flex-col overflow-hidden opacity-20 select-none">
      {Array(100).fill(".").map((s, i) => <span key={i}>{s}</span>)}
    </div>
    <div className="bg-white/40 relative z-10 h-full">
      {children}
    </div>
  </div>
);

const SlashDivider = () => (
  <div className="w-full overflow-hidden whitespace-nowrap text-[10px] opacity-10 py-4 select-none">
    {Array(200).fill("/").join("")}
  </div>
);

const FeedbackCard = ({ name, role, text, tags, visual, image }: { name: string; role: string; text: string; tags: { label: string; url?: string }[]; visual?: string; image?: string }) => {
  const Visual = visual ? VISUAL_MAP[visual] : null;
  return (
    <SymbolBorder className="h-full group">
      <div className="p-8 flex flex-col h-full relative overflow-hidden">
        {Visual && (
          <div className="absolute -right-4 -top-4 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
            <Visual variant="simple" />
          </div>
        )}
        <div className="mb-6 flex-grow relative z-10">
          <div className="flex items-center gap-4 mb-4">
            {image && (
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#332b2b]/20 grayscale hover:grayscale-0 transition-all">
                <img src={image} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            )}
            <MessageSquare size={16} className="opacity-20 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-sm md:text-base leading-relaxed opacity-80 italic">
            «{text}»
          </p>
        </div>
        <div className="pt-6 border-t border-[#332b2b]/10 relative z-10">
          <div className="font-bold uppercase text-sm mb-1">{name}</div>
          <div className="text-[10px] opacity-40 uppercase tracking-widest mb-4">{role}</div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              tag.url ? (
                <a 
                  key={i} 
                  href={tag.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[9px] font-bold border border-[#332b2b]/20 px-2 py-0.5 rounded-full hover:bg-[#332b2b] hover:text-[#f9f9f7] transition-colors flex items-center gap-1"
                >
                  {tag.label} <PlayCircle size={10} />
                </a>
              ) : (
                <span key={i} className="text-[9px] font-bold border border-[#332b2b]/10 px-2 py-0.5 rounded-full opacity-40">
                  {tag.label}
                </span>
              )
            ))}
          </div>
        </div>
      </div>
    </SymbolBorder>
  );
};

const LabsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    {
      title: 'Current Labs',
      items: ['Spring Main Lab', '{personal OS}', '{ai-native orgs}']
    },
    {
      title: 'Future Labs',
      items: ['Music Lab', 'Summer Main Lab']
    },
    {
      title: 'Lab Archive',
      items: ['Winter Main Lab']
    }
  ];

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center gap-1 hover:line-through transition-all">
        {`{labs}`} <ChevronDown size={12} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 mt-2 w-64 bg-[#f9f9f7] border border-[#332b2b] shadow-[4px_4px_0px_0px_rgba(51,43,43,1)] z-[100] p-4"
          >
            {categories.map((cat, i) => (
              <div key={i} className="mb-4 last:mb-0">
                <div className="text-[8px] opacity-40 uppercase tracking-widest mb-2 border-b border-[#332b2b]/10 pb-1">{cat.title}</div>
                <div className="flex flex-col gap-1">
                  {cat.items.map((item, j) => (
                    <a key={j} href="#" className="text-[10px] font-bold hover:bg-[#332b2b] hover:text-[#f9f9f7] px-2 py-1 transition-colors">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DecorativeAscii = ({ className = "" }: { className?: string }) => (
  <div className={`text-[10px] leading-none opacity-10 select-none font-mono ${className}`}>
    <pre>{`
    /\\  /\\
   /  \\/  \\
  /        \\
 /          \\
/            \\
    `}</pre>
  </div>
);

const AsciiMetaphor = ({ text, className = "" }: { text: string; className?: string }) => (
  <div className={`absolute pointer-events-none font-mono text-[10px] leading-tight opacity-[0.05] select-none whitespace-pre ${className}`}>
    {text}
  </div>
);

const METAPHORS = {
  logic: `
  [ LOGIC_GATE ]
  INPUT >> [MIND] >> OUTPUT
  IF (CONTEXT == NULL) {
    RETRY_LATER();
  }
  `,
  neural: `
     O---O---O
    / \\ / \\ / \\
   O---O---O---O
    \\ / \\ / \\ /
     O---O---O
  `,
  diamond: `
      .
     . .
    . . .
   . . . .
  . . . . .
   . . . .
    . . .
     . .
      .
  `,
  flow: `
  --=+//.
  // SYNCING_MINDSET
  [||||||||||||] 100%
  --=+//.
  `,
  cloud: `
  motherland motherland motherland motherland
  motherland motherland motherland motherland
  motherland motherland motherland motherland
  motherland motherland motherland motherland
  `,
  structure: `
      .     .
       .   .
        . .
         .
         .
         .
         .
         .
  `
};

export default function MotherlandPage() {
  return (
    <div className="min-h-screen bg-[#f9f9f7] text-[#332b2b] font-mono selection:bg-[#332b2b] selection:text-[#f9f9f7] overflow-x-hidden relative">
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
           style={{ backgroundImage: 'radial-gradient(#332b2b 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Ticker Top */}
      <div className="fixed top-0 left-0 w-full z-[60] bg-[#f9f9f7] border-b border-[#332b2b]/10 py-1 overflow-hidden whitespace-nowrap text-[8px] uppercase tracking-[0.3em] opacity-40 select-none">
        AI MINDSET LAB W26 . BATCH: WINTER 26 . APPLICATIONS: CLOSE . NEXT BATCH: 20 APRIL . AI MINDSET LAB W26 . BATCH: WINTER 26 . APPLICATIONS: CLOSE . NEXT BATCH: 20 APRIL .
      </div>

      {/* Header */}
      <header className="fixed top-6 left-0 w-full z-50 px-4 md:px-8 py-4 flex justify-between items-center backdrop-blur-sm border-b border-[#332b2b]/10">
        <div className="flex gap-8 items-center">
          <a href="#" className="text-2xl font-bold leading-none flex items-center gap-2">
            <span className="text-3xl">M</span>
            <span className="hidden sm:inline text-[10px] tracking-[0.4em] font-light border-l border-[#332b2b] pl-4">MINDSET</span>
          </a>
          <nav className="hidden lg:flex gap-6 text-[10px] font-bold tracking-widest items-center">
            <LabsDropdown />
            <span className="opacity-20">|</span>
            <a href="#" className="hover:line-through transition-all">community {`{space}`}</a>
            <span className="opacity-20">|</span>
            <a href="#" className="hover:line-through transition-all">{`{for-teams}`}</a>
            <span className="opacity-20">|</span>
            <a href="#" className="hover:line-through transition-all">non-profit</a>
            <span className="opacity-20">|</span>
          </nav>
        </div>
        <div className="flex gap-4 items-center">
          <div className="hidden sm:flex border border-[#332b2b] px-4 py-1 text-[10px] items-center gap-4 hover:bg-[#332b2b] hover:text-[#f9f9f7] transition-colors cursor-pointer">
            <div className="flex gap-1">
              {['З', 'А', 'П', 'И', 'С', 'А', 'Т', 'Ь', 'С', 'Я'].map((char, i) => (
                <span key={i} className="font-bold">{char}</span>
              ))}
            </div>
          </div>
          <button className="lg:hidden">
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 min-h-screen flex flex-col items-center justify-center">
        <AsciiMetaphor text={METAPHORS.logic} className="top-24 left-12" />
        <AsciiMetaphor text={METAPHORS.flow} className="bottom-24 right-12" />
        <AsciiMetaphor text={METAPHORS.cloud} className="top-1/2 left-12 opacity-[0.02]" />
        <AsciiMetaphor text={METAPHORS.structure} className="bottom-1/2 right-12 opacity-[0.03]" />
        
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12 flex flex-col items-center gap-6">
              <div className="text-[10px] tracking-[0.5em] opacity-40">/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - \\</div>
              <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.85] max-w-5xl mx-auto">
                AI MINDSET <br />
                LAB W26
              </h1>
              <div className="text-[10px] tracking-[0.5em] opacity-40">\\ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /</div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-12 text-sm md:text-xl font-bold uppercase">
              <div className="border-b-2 border-[#332b2b] pb-1">( WINTER 26 )</div>
              <div className="opacity-40">|</div>
              <div className="border-b-2 border-[#332b2b] pb-1">4 WEEKS</div>
              <div className="opacity-40">|</div>
              <div className="border-b-2 border-[#332b2b] pb-1">ONLINE )</div>
            </div>

            <p className="max-w-2xl mx-auto text-xs md:text-sm leading-relaxed opacity-80 mb-12 uppercase tracking-wide">
              лаборатория нового мышления в эпоху AI. от хаоса запросов и FOMO к понятному процессу, рабочим артефактам и новому способу думать.
            </p>

            <a 
              href="https://join.aimindset.org/context"
              className="inline-flex items-center gap-2 border border-[#332b2b] px-12 py-6 hover:bg-[#332b2b] hover:text-[#f9f9f7] transition-all duration-300 font-mono uppercase text-sm font-bold tracking-widest group"
            >
              [ ЗАПИСАТЬСЯ НА ЛАБОРАТОРИЮ ] <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </Container>

        {/* Background ASCII Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.02] select-none text-[10px] leading-none">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
              {Array.from({ length: 100 }).map((_, j) => (
                <span key={j}>{j % 10 === 0 ? "////" : "...."}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <SlashDivider />
      <section id="philosophy" className="py-32 border-y border-[#332b2b]/10 relative">
        <div className="absolute top-0 right-0 p-8 opacity-5 text-[8px]">
          <pre>{`
          [01] --- MEANING
          [02] --- FACTORY
          [03] --- NETWORK
          `}</pre>
        </div>
        <Container>
          <SectionLabel text="ФИЛОСОФИЯ" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'MINDSET > TOOLS', desc: 'технологии меняются, а новый способ мышления остаётся с вами', visual: 'meaning' },
              { title: 'PRACTICE', desc: 'каждая неделя это эксперимент с реальными задачами и артефактами', visual: 'factory' },
              { title: 'COMMUNITY', desc: 'вы учитесь не только у экспертов, но и друг у друга', visual: 'network' },
            ].map((item, i) => {
              const Visual = VISUAL_MAP[item.visual] || (() => null);
              return (
                <div key={i} className="border border-[#332b2b]/20 p-8 flex flex-col gap-6 bg-white/30 backdrop-blur-sm">
                  <div className="flex justify-between items-start">
                    <div className="text-[10px] opacity-40">0{i+1} // CORE</div>
                    <div className="w-12 h-12 text-[#332b2b]">
                      <Visual variant="simple" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tighter">{item.title}</h3>
                  <p className="text-xs leading-relaxed opacity-60 uppercase">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <AsciiDiamond />
        </Container>
      </section>

      {/* Program Section */}
      <SlashDivider />
      <section id="program" className="py-32 bg-[#332b2b]/5 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 p-8 opacity-5 text-[8px] rotate-90">
          <pre>{`
          <<<<<<<<<<<<<<<<<<<<
          PROGRAM_STRUCTURE_V1
          >>>>>>>>>>>>>>>>>>>>
          `}</pre>
        </div>
        <Container>
          <SectionLabel text="ПРОГРАММА" />
          
          <div className="grid gap-1 border-t border-[#332b2b]/20">
            {[
              { id: '01', title: 'PROMPT ENGINEERING', desc: 'AI КАК ИНТЕРФЕЙС МЫШЛЕНИЯ. ОСНОВЫ ВЗАИМОДЕЙСТВИЯ.', week: 'WEEK 01', visual: 'bottleneck' },
              { id: '02', title: 'CONTEXT ENGINEERING', desc: 'АВТОМАТИЗАЦИЯ И АГЕНТЫ. OBSIDIAN + MCP + CLAUDE.', week: 'WEEK 02', visual: 'alignment' },
              { id: '03', title: 'MIND ENGINEERING', desc: 'ПРОДУКТИВНОСТЬ И РИТУАЛЫ. AI ДЛЯ КОУЧИНГА.', week: 'WEEK 03', visual: 'audit' },
              { id: '04', title: 'LIFE ENGINEERING', desc: 'ТВОРЧЕСТВО И РЕАЛИЗАЦИЯ. VIBE-CODING.', week: 'WEEK 04', visual: 'pen' },
            ].map((item) => {
              const Visual = VISUAL_MAP[item.visual] || (() => null);
              return (
                <motion.div 
                  key={item.id}
                  className="group border-b border-[#332b2b]/20 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:bg-[#332b2b] hover:text-[#f9f9f7] transition-all duration-500 px-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-start gap-8">
                    <div className="text-2xl md:text-4xl font-bold opacity-30 group-hover:opacity-100">[{item.id}]</div>
                    <div className="w-16 h-16 opacity-20 group-hover:opacity-100 transition-opacity">
                      <Visual variant="simple" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-3xl font-bold uppercase tracking-tighter mb-2">{item.title}</h3>
                      <p className="text-[10px] md:text-xs uppercase tracking-widest opacity-60 group-hover:opacity-100">{item.desc}</p>
                    </div>
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.3em] opacity-40 group-hover:opacity-100">{item.week}</div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Tracks Section */}
      <SlashDivider />
      <section id="tracks" className="py-32 relative">
        <AsciiMetaphor text={METAPHORS.neural} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150" />
        <Container>
          <SectionLabel text="ТРЕКИ" />

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { id: 'TRK-1', title: 'AI COACHING', desc: 'ДЛЯ ТЕХ, КТО ВЫГОРЕЛ И ИЩЕТ БАЛАНС', visual: 'balance' },
              { id: 'TRK-2', title: 'AI AGENTS', desc: 'АВТОНОМНЫЕ AI-СИСТЕМЫ', visual: 'network' },
              { id: 'TRK-3', title: 'VIBE-CODING', desc: 'ТВОРЧЕСКОЕ ПРОГРАММИРОВАНИЕ', visual: 'velocity' },
              { id: 'TRK-4', title: 'AI CREATIVE', desc: 'ДЛЯ МУЗЫКАНТОВ И ХУДОЖНИКОВ', visual: 'whisper' },
            ].map((track) => {
              const Visual = VISUAL_MAP[track.visual] || (() => null);
              return (
                <div key={track.id} className="border border-[#332b2b] p-8 md:p-12 hover:bg-[#332b2b] hover:text-[#f9f9f7] transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute right-[-10%] bottom-[-10%] w-32 h-32 opacity-5 group-hover:opacity-20 transition-opacity">
                    <Visual variant="complex" />
                  </div>
                  <div className="flex justify-between items-start mb-12">
                    <div className="text-[10px] font-bold opacity-60">{track.id}</div>
                    <div className="text-xl opacity-40 group-hover:opacity-100">[ + ]</div>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">{track.title}</h3>
                  <div className="text-xs font-bold tracking-widest opacity-60 uppercase">{track.desc}</div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Feedback Section */}
      <SlashDivider />
      <section id="feedback" className="py-32 bg-[#332b2b]/5 relative">
        <AsciiMetaphor text={METAPHORS.diamond} className="top-12 right-12 scale-125" />
        <AsciiMetaphor text={METAPHORS.diamond} className="bottom-12 left-12 scale-75" />
        <Container>
          <SectionLabel text="FEEDBACK" />
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">ЧТО ГОВОРЯТ О НАС</h2>
            <p className="text-xs opacity-40 uppercase tracking-[0.5em]">real humans // real context</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeedbackCard 
              name="Сергей Петров"
              role="Unix developer, 20+ лет опыта"
              text="После лабы я понял: это не просто инструменты, а новый способ мышления. Я офигел, когда Cursor сам нашел решение проблемы, которую я не знал как решить."
              tags={[{ label: "TECH" }, { label: "DEV" }]}
              visual="bottleneck"
              image="https://picsum.photos/seed/sergey/200/200"
            />
            <FeedbackCard 
              name="Екатерина Грачева"
              role="HR-коммуникации, Avito"
              text="Я боялась, что это слишком сложно для нетехнического человека. Но через 3 недели я уже создавала агентов и автоматизации. Теперь веду трек по AI для 700+ коллег."
              tags={[{ label: "NON-TECH" }, { label: "HR" }, { label: "YOUTUBE", url: "https://youtube.com" }]}
              visual="alignment"
              image="https://picsum.photos/seed/katya/200/200"
            />
            <FeedbackCard 
              name="Антон Мормышев"
              role="Музыкант"
              text="После первой лекции по вайб-кодингу я не мог уснуть до 6 утра. Побежал делать. Это было мощно. AI стал моим соавтором, а не просто инструментом."
              tags={[{ label: "CREATIVE" }, { label: "MUSIC" }]}
              visual="velocity"
              image="https://picsum.photos/seed/anton/200/200"
            />
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <FeedbackCard 
              name="Мария Иванова"
              role="Product Designer"
              text="Лаборатория дала мне структуру. Раньше я просто тыкала в ChatGPT, теперь я строю системы. Это как пересесть с велосипеда на истребитель."
              tags={[{ label: "DESIGN" }, { label: "PRODUCT" }]}
              visual="meaning"
              image="https://picsum.photos/seed/maria/200/200"
            />
            <FeedbackCard 
              name="Дмитрий Соколов"
              role="Entrepreneur"
              text="Самое ценное — это сообщество. Здесь люди, которые реально строят будущее. Мы уже запустили совместный проект на базе агентов, созданных в лабе."
              tags={[{ label: "BUSINESS" }, { label: "NETWORKING" }]}
              visual="network"
              image="https://picsum.photos/seed/dima/200/200"
            />
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32">
        <Container>
          <SectionLabel text="ТАРИФЫ" />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'MAIN', price: '590', unit: 'EUR' },
              { name: 'ADVANCED', price: '890', unit: 'EUR', highlight: true },
              { name: 'PREMIUM', price: '1490', unit: 'EUR' },
            ].map((plan) => (
              <div key={plan.name} className={`relative border border-[#332b2b] p-12 flex flex-col items-center transition-all duration-500 ${plan.highlight ? 'bg-[#f9f9f7] shadow-[12px_12px_0px_0px_rgba(51,43,43,1)]' : 'hover:bg-[#332b2b]/5'}`}>
                {/* ASCII Box Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#332b2b]"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#332b2b]"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#332b2b]"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#332b2b]"></div>

                <h3 className="text-xl font-bold uppercase tracking-widest border-b-2 border-[#332b2b] pb-1 mb-8">{plan.name}</h3>
                <div className="text-6xl md:text-7xl font-bold tracking-tighter mb-2">{plan.price}</div>
                <div className="text-xs font-bold opacity-60 mb-12">{plan.unit}</div>
                
                <button className="border border-[#332b2b] px-8 py-2 text-xs font-bold uppercase hover:bg-[#332b2b] hover:text-[#f9f9f7] transition-all">
                  [ ВЫБРАТЬ ]
                </button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-[#332b2b] text-[#f9f9f7] py-24">
        <Container>
          <div className="w-full border-y border-[#f9f9f7]/20 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex flex-col gap-2">
              <div className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-[#f9f9f7]">
                AI MINDSET <span className="text-2xl md:text-4xl">LAB 26</span>
              </div>
              <div className="text-[10px] opacity-20">------------------------------</div>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-[10px] uppercase">
              <div className="opacity-40">ИНФО:</div>
              <div className="flex flex-col gap-1">
                <a href="#" className="hover:line-through">ОФЕРТА</a>
                <a href="#" className="hover:line-through">ПРАВИЛА</a>
                <a href="#" className="hover:line-through">КОНТАКТЫ</a>
              </div>
              <div className="opacity-40">СОЦСЕТИ:</div>
              <div className="flex flex-col gap-1">
                <a href="#" className="hover:text-[#f9f9f7] hover:line-through">TELEGRAM</a>
                <a href="#" className="hover:text-[#f9f9f7] hover:line-through">YOUTUBE</a>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center text-[8px] opacity-40 tracking-[0.5em] uppercase">
            MADE WITH ASCII LOVE
          </div>
        </Container>
      </footer>
    </div>
  );
}
