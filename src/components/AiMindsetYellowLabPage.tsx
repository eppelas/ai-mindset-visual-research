import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight, Zap, MessageSquare, User, ExternalLink, ChevronDown, Clock, Calendar } from 'lucide-react';

const YellowStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
    
    .font-yellow { font-family: 'Inter', sans-serif; }
    
    .yellow-grid-line {
      position: absolute;
      background-color: black;
    }

    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    
    .stroke-text {
      -webkit-text-stroke: 1px black;
      color: transparent;
    }

    .bg-yellow-bright {
      background-color: #EAFF00;
    }
  `}</style>
);

const GridOverlay = ({ active }: { active: boolean }) => {
  if (!active) return null;
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-10">
      <div className="w-full h-full relative">
        {/* Horizontal */}
        <div className="absolute top-24 left-0 right-0 h-px bg-black" />
        <div className="absolute bottom-24 left-0 right-0 h-px bg-black" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-black" />
        
        {/* Vertical */}
        <div className="absolute top-0 bottom-0 left-12 w-px bg-black" />
        <div className="absolute top-0 bottom-0 right-12 w-px bg-black" />
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-black" />
      </div>
    </div>
  );
};

const TogglePill = ({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) => (
  <div className="flex items-center gap-2 font-yellow text-[10px] font-bold uppercase tracking-widest">
    <span>{label}:</span>
    <button 
      onClick={onClick}
      className="flex border border-black rounded-full p-[2px] gap-1 cursor-pointer hover:bg-black/10 transition-colors"
    >
      <div className={`px-2 py-0.5 rounded-full transition-colors border border-black ${active ? 'bg-transparent' : 'bg-black text-[#EAFF00]'}`}>Off</div>
      <div className={`px-2 py-0.5 rounded-full transition-colors border border-black ${active ? 'bg-black text-[#EAFF00]' : 'bg-transparent'}`}>On</div>
    </button>
  </div>
);

const CrazyElement = ({ children, crazy, className = "", delay = 0 }: { children: React.ReactNode, crazy: boolean, className?: string, delay?: number, key?: React.Key }) => {
  const [randomProps, setRandomProps] = useState({ rotate: 0, x: 0, y: 0, scale: 1 });

  useEffect(() => {
    if (crazy) {
      const interval = setInterval(() => {
        setRandomProps({
          rotate: Math.random() * 6 - 3,
          x: Math.random() * 10 - 5,
          y: Math.random() * 10 - 5,
          scale: 1 + Math.random() * 0.05,
        });
      }, 2000 + Math.random() * 1000);
      return () => clearInterval(interval);
    } else {
      setRandomProps({ rotate: 0, x: 0, y: 0, scale: 1 });
    }
  }, [crazy]);

  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      animate={crazy ? randomProps : { rotate: 0, x: 0, y: 0, scale: 1 }}
    >
      {children}
    </motion.div>
  );
};

const SectionLabel = ({ text, id }: { text: string; id?: string }) => (
  <div className="flex flex-col items-center mb-16" id={id}>
    <div className="text-[10px] font-black border-b-2 border-black pb-1 uppercase tracking-[0.4em]">{text} // ↴</div>
  </div>
);

const YellowPill = ({ children, className = "", crazy = false }: { children: React.ReactNode, className?: string, crazy?: boolean }) => (
  <CrazyElement crazy={crazy} className={`border-2 border-black rounded-full px-6 py-3 bg-[#EAFF00] inline-flex items-center justify-center ${className}`}>
    {children}
  </CrazyElement>
);

export default function AiMindsetYellowLabPage() {
  const [gridActive, setGridActive] = useState(true);
  const [crazyMode, setCrazyMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllFeedback, setShowAllFeedback] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  
  const tickerX = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const floatY1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const floatY2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const floatRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'philosophy', id: 'philosophy' },
    { label: 'program', id: 'program' },
    { label: 'tracks', id: 'tracks' },
    { label: 'cases', id: 'cases' },
    { label: 'feedback', id: 'feedback' },
    { label: 'team', id: 'team' },
    { label: 'pricing', id: 'pricing' },
    { label: 'faq', id: 'faq' },
  ];

  const externalLinks = [
    { label: 'AI mindset', url: 'https://aimindset.org/' },
    { label: '{LAB}', url: 'https://aimindset.org/ai-mindset' },
    { label: '{personal OS}', url: 'https://aimindset.org/sprint-pos' },
    { label: '{ai-native orgs}', url: 'https://ai-native.aimindset.org/' },
    { label: '{space}', url: 'https://aimindset.org/ai-mindset-community' },
    { label: '{for-teams}', url: 'https://aimindset.org/ai-mindset-consulting' },
  ];

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll bg-[#EAFF00] text-black font-yellow selection:bg-black selection:text-[#EAFF00] hide-scrollbar relative">
      <YellowStyles />
      <GridOverlay active={gridActive} />

      {/* Floating Decorative Blocks */}
      <motion.div style={{ y: floatY1, rotate: floatRotate }} className="fixed top-1/4 -left-10 w-40 h-40 bg-[#EAFF00] border-4 border-black z-0 pointer-events-none opacity-20" />
      <motion.div style={{ y: floatY2, rotate: -floatRotate }} className="fixed bottom-1/4 -right-10 w-60 h-20 bg-[#EAFF00] border-4 border-black z-0 pointer-events-none opacity-20" />
      <motion.div style={{ y: floatY1 }} className="fixed top-1/2 right-20 w-10 h-10 bg-black z-0 pointer-events-none opacity-10" />

      {/* Floating Apply Button */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[70] pointer-events-none">
        <motion.a 
          href="https://join.aimindset.org/waitlist"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="pointer-events-auto bg-black text-[#EAFF00] px-8 py-4 text-sm font-black uppercase tracking-widest shadow-2xl border-2 border-[#EAFF00] flex items-center gap-4 group"
        >
          ХОЧУ В AIMINDSET <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>

      {/* Floating Version Toggle */}
      <div className="fixed bottom-8 right-8 z-[70]">
        <motion.button 
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.location.reload()}
          className="w-16 h-16 bg-black text-[#EAFF00] border-2 border-[#EAFF00] rounded-full flex items-center justify-center text-xs font-black shadow-2xl"
        >
          V1.0
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-[#EAFF00] border-l-4 border-black p-8 md:p-16 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <div className="text-4xl font-black uppercase tracking-tighter">MENU //</div>
              <button onClick={() => setMenuOpen(false)} className="text-4xl font-black hover:line-through">CLOSE</button>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-4">
                <div className="text-[10px] font-black opacity-40 uppercase tracking-widest mb-8">NAVIGATION</div>
                {navItems.map((item) => (
                  <button 
                    key={item.id} 
                    onClick={() => scrollTo(item.id)}
                    className="block text-4xl md:text-6xl font-black uppercase tracking-tighter hover:line-through text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="space-y-4">
                <div className="text-[10px] font-black opacity-40 uppercase tracking-widest mb-8">EXTERNAL</div>
                {externalLinks.map((link) => (
                  <a 
                    key={link.label} 
                    href={link.url}
                    className="block text-2xl md:text-4xl font-black uppercase tracking-tighter hover:line-through"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-end border-t border-black pt-8">
              <div className="text-[10px] font-black uppercase tracking-widest">AI MINDSET LAB W26</div>
              <div className="flex gap-4">
                <a href="https://t.me/ai_mind_set" className="text-xs font-black uppercase hover:line-through">TELEGRAM</a>
                <a href="https://www.youtube.com/@A-I-Mindset" className="text-xs font-black uppercase hover:line-through">YOUTUBE</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ticker Top */}
      <div className="fixed top-0 left-0 w-full z-[60] border-b border-black py-1 overflow-hidden whitespace-nowrap text-[8px] uppercase tracking-[0.3em] font-black bg-[#EAFF00]">
        <motion.div style={{ x: tickerX }} className="inline-block">
          AI MINDSET LAB W26 . BATCH: WINTER 26 . APPLICATIONS: CLOSE . NEXT BATCH: 20 APRIL . AI MINDSET LAB W26 . BATCH: WINTER 26 . APPLICATIONS: CLOSE . NEXT BATCH: 20 APRIL .
          AI MINDSET LAB W26 . BATCH: WINTER 26 . APPLICATIONS: CLOSE . NEXT BATCH: 20 APRIL . AI MINDSET LAB W26 . BATCH: WINTER 26 . APPLICATIONS: CLOSE . NEXT BATCH: 20 APRIL .
        </motion.div>
      </div>

      {/* Header */}
      <header className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 py-4 flex justify-between items-center border-b border-black bg-[#EAFF00] backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="w-4 h-4 bg-black" />
          <span className="text-xl font-black tracking-tighter uppercase cursor-pointer" onClick={() => scrollTo('top')}>MINDSET LAB</span>
        </div>
        
        <nav className="hidden lg:flex gap-8 text-[10px] font-black tracking-widest uppercase">
          {navItems.slice(0, 4).map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="hover:line-through">{item.label}</button>
          ))}
          <button onClick={() => setMenuOpen(true)} className="hover:line-through">MORE +</button>
        </nav>

        <div className="flex gap-6 items-center">
          <TogglePill label="Grid" active={gridActive} onClick={() => setGridActive(!gridActive)} />
          <TogglePill label="Crazy" active={crazyMode} onClick={() => setCrazyMode(!crazyMode)} />
          <button onClick={() => setMenuOpen(true)} className="lg:hidden text-[10px] font-black uppercase tracking-widest">MENU</button>
          <a href="https://join.aimindset.org/waitlist" className="bg-black text-[#EAFF00] px-4 py-1 text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">JOIN</a>
        </div>
      </header>

      <main className="pt-32">
        
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-center items-center p-4 md:p-8 relative border-b border-black text-center">
          <CrazyElement crazy={crazyMode}>
            <div className="text-[10px] tracking-[0.5em] font-black opacity-40 uppercase mb-8">
              batch: winter 26 . applications: close
            </div>
            <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter uppercase mb-8">
              AI MINDSET<br/>LAB W26
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <YellowPill crazy={crazyMode} className="rotate-2">
                <span className="text-sm font-black uppercase">следующий поток: 20 апреля</span>
              </YellowPill>
              <a href="https://join.aimindset.org/waitlist" className="border-2 border-black rounded-full px-6 py-3 hover:bg-black hover:text-[#EAFF00] transition-all text-sm font-black uppercase">
                [waitlist]
              </a>
            </div>
          </CrazyElement>

          <div className="max-w-4xl mx-auto border-2 border-black p-8 md:p-12 relative bg-white/20 backdrop-blur-sm mb-12">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-black" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-black" />
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-6">лаборатория нового мышления в эпоху AI</h2>
            <p className="text-sm md:text-lg font-medium uppercase tracking-wide opacity-80 mb-8">
              старт 19 января 2026 — завершение 16 февраля 2026
            </p>
            <div className="text-sm md:text-base italic max-w-2xl mx-auto opacity-70">
              «AI mindset winter lab w26 — это лаборатория, пространство для экспериментов. здесь вы не изучаете, а создаёте: персональных ассистентов, AI-first процессы, новую версию себя.»
            </div>
          </div>

          {/* Calendar Block */}
          <CrazyElement crazy={crazyMode} className="max-w-xl mx-auto border-2 border-black p-6 bg-[#EAFF00] mb-12">
            <div className="flex justify-between items-center mb-4 border-b border-black pb-2">
              <div className="text-xs font-black uppercase tracking-widest">JANUARY / FEBRUARY</div>
              <Calendar size={16} />
            </div>
            <div className="grid grid-cols-7 gap-1 text-[8px] font-black uppercase mb-4">
              {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(d => <div key={d}>{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 31 }).map((_, i) => (
                <div key={i} className={`aspect-square border border-black/10 flex items-center justify-center text-[10px] font-bold ${[19, 21, 26, 28, 2, 4, 9, 11, 16].includes(i+1) ? 'bg-black text-[#EAFF00]' : ''}`}>
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-[8px] font-black uppercase opacity-60">
              <span className="flex items-center gap-1"><div className="w-2 h-2 bg-black" /> Workshop</span>
              <span className="flex items-center gap-1"><div className="w-2 h-2 bg-black" /> Coworking</span>
              <span className="flex items-center gap-1"><div className="w-2 h-2 bg-black" /> Advanced</span>
              <span className="flex items-center gap-1"><div className="w-2 h-2 bg-black" /> Office hours</span>
            </div>
          </CrazyElement>

          <div className="mt-16">
            <a href="https://join.aimindset.org/context" className="inline-flex items-center gap-4 bg-black text-[#EAFF00] px-12 py-6 text-xl font-black uppercase tracking-tighter hover:scale-105 transition-transform group">
              ПОДАТЬ ЗАЯВКУ <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="py-32 border-b border-black relative overflow-hidden">
          <Container>
            <SectionLabel text="ФИЛОСОФИЯ" />
            
            <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
              <div className="w-full lg:w-1/2 aspect-video bg-black relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center text-[#EAFF00] text-8xl font-black opacity-10 group-hover:scale-110 transition-transform">
                  MINDSET
                </div>
                <div className="absolute inset-0 border-8 border-[#EAFF00] opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-[#EAFF00] rotate-45" />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">мы создаём пространство, где:</h3>
                <div className="space-y-4">
                  {['mindset важнее инструментов', 'практика встроена в процесс', 'сообщество усиливает обучение', 'персонализация через треки'].map((t, i) => (
                    <div key={i} className="flex items-center gap-4 text-xl font-black uppercase tracking-tighter">
                      <div className="w-4 h-4 bg-black" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'MINDSET > TOOLS', desc: 'технологии меняются, а новый способ мышления остаётся с вами' },
                { title: 'PRACTICE', desc: 'каждая неделя это эксперимент с реальными задачами и артефактами' },
                { title: 'COMMUNITY', desc: 'вы учитесь не только у экспертов, но и друг у друга' },
                { title: 'PERSONALIZATION', desc: 'углубляйтесь в то, что нужно именно вам через треки' },
              ].map((item, i) => (
                <CrazyElement key={i} crazy={crazyMode} delay={i * 0.1} className="border-2 border-black p-8 flex flex-col gap-6 bg-white/10 hover:bg-[#EAFF00] hover:text-black transition-colors group">
                  <div className="text-4xl font-black opacity-10 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                  <h3 className="text-xl font-black uppercase tracking-tighter">{item.title}</h3>
                  <p className="text-[10px] font-bold uppercase leading-relaxed opacity-60 group-hover:opacity-100">{item.desc}</p>
                </CrazyElement>
              ))}
            </div>
          </Container>
        </section>

        {/* Program Section */}
        <section id="program" className="py-32 border-b border-black bg-black text-[#EAFF00]">
          <Container>
            <div className="flex flex-col items-center mb-24">
              <div className="text-[10px] font-black border-b-2 border-[#EAFF00] pb-1 uppercase tracking-[0.4em] mb-8">AI LAB (MAIN) // ↴</div>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-center mb-4">19 января – 16 февраля • 4 недели</h2>
              <div className="text-xl md:text-3xl font-black opacity-40 tracking-[0.2em] uppercase">
                prompt {`>>`} context {`>>`} mind {`>>`} life
              </div>
            </div>

            <div className="grid gap-12">
              {[
                { 
                  id: '01', 
                  title: 'Prompt Engineering', 
                  subtitle: 'AI КАК ИНТЕРФЕЙС МЫШЛЕНИЯ', 
                  week: '19–25 JAN', 
                  speaker: 'Александр Поваляев',
                  details: 'Освоение техник промптов: Chain-of-Thought, Few-Shot Learning, Custom GPTs. Создание первых персональных ассистентов.',
                  result: 'персональный GPT-ассистент, библиотека промптов (20+), понимание основ AI',
                  tools: 'ChatGPT, Claude, Custom GPTs, Gemini, Perplexity'
                },
                { 
                  id: '02', 
                  title: 'Context Engineering', 
                  subtitle: 'АВТОМАТИЗАЦИЯ И АГЕНТЫ', 
                  week: '26 JAN – 1 FEB', 
                  speaker: 'Сергей Хабаров',
                  details: 'Управление контекстом: Obsidian + MCP + Claude. Автоматизация через n8n, Make. AI-агенты и workflows.',
                  result: '2–3 работающие автоматизации, интегрированная система знаний, настройка агентов',
                  tools: 'Obsidian, MCP, n8n, Make, Claude Projects'
                },
                { 
                  id: '03', 
                  title: 'Mind Engineering', 
                  subtitle: 'ПРОДУКТИВНОСТЬ И РИТУАЛЫ', 
                  week: '2–8 FEB', 
                  speaker: 'Анна Лозицкая',
                  details: 'AI для коучинга, рефлексии, персональных ритуалов. Трекинг привычек и целей с поддержкой AI.',
                  result: 'персональный AI-коуч, система трекинга привычек, ритуалы рефлексии',
                  tools: 'Claude, Notion, Obsidian, Taskade, Custom GPTs'
                },
                { 
                  id: '04', 
                  title: 'Life Engineering', 
                  subtitle: 'ТВОРЧЕСТВО И РЕАЛИЗАЦИЯ', 
                  week: '9–15 FEB', 
                  speaker: 'Анка Ставенски',
                  details: 'От идеи до прототипа. Vibe-coding с Cursor, Windsurf, Claude Projects. Создание без технического бэкграунда.',
                  result: 'рабочий прототип, задеплоенный проект, vibe-coding workflow',
                  tools: 'Cursor, Windsurf, Claude Projects, V0, Replit'
                },
              ].map((item) => (
                <CrazyElement key={item.id} crazy={crazyMode} className="border-2 border-[#EAFF00] p-8 md:p-12 flex flex-col hover:bg-[#EAFF00] hover:text-black transition-all group">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
                    <div className="flex items-center gap-8">
                      <div className="text-4xl md:text-6xl font-black opacity-20 group-hover:opacity-100">[{item.id}]</div>
                      <div>
                        <div className="text-[10px] font-black opacity-40 group-hover:opacity-100 uppercase mb-2">{item.week}</div>
                        <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">{item.title}</h3>
                        <div className="text-xs font-bold uppercase opacity-60 group-hover:opacity-100">{item.subtitle}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 border-l border-[#EAFF00]/20 pl-8 group-hover:border-black/20">
                      <div className="text-right">
                        <div className="text-[8px] font-black opacity-40 group-hover:opacity-100 uppercase mb-1">СПИКЕР:</div>
                        <div className="text-sm font-black uppercase">{item.speaker}</div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#EAFF00]/10 group-hover:bg-black/10 flex items-center justify-center">
                        <User size={20} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-[#EAFF00]/10 group-hover:border-black/10">
                    <div>
                      <div className="text-[8px] font-black opacity-40 group-hover:opacity-100 uppercase mb-2">О ЧЕМ:</div>
                      <p className="text-xs font-medium uppercase leading-relaxed">{item.details}</p>
                    </div>
                    <div>
                      <div className="text-[8px] font-black opacity-40 group-hover:opacity-100 uppercase mb-2">РЕЗУЛЬТАТ:</div>
                      <p className="text-xs font-medium uppercase leading-relaxed">{item.result}</p>
                    </div>
                    <div>
                      <div className="text-[8px] font-black opacity-40 group-hover:opacity-100 uppercase mb-2">ИНСТРУМЕНТЫ:</div>
                      <p className="text-xs font-medium uppercase leading-relaxed">{item.tools}</p>
                    </div>
                  </div>
                </CrazyElement>
              ))}
            </div>
          </Container>
        </section>

        {/* Tracks Section */}
        <section id="tracks" className="py-32 border-b border-black">
          <Container>
            <SectionLabel text="TRACKS (ADVANCED)" />
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  title: 'AI Coaching', 
                  date: '21 Jan', 
                  speaker: 'Анна Лозицкая', 
                  color: '#EAFF00',
                  details: 'Для тех, кто выгорел и ищет баланс. AI для коучинга, рефлексии, персональных ритуалов.',
                  result: 'персональные AI-коучи для саморефлексии, ритуалы продуктивности с AI, трекинг привычек и целей',
                  tools: 'Claude, Notion, Obsidian, Custom GPTs'
                },
                { 
                  title: 'AI Agents', 
                  date: '28 Jan', 
                  speaker: 'Хабаров & Поваляев', 
                  color: '#EAFF00',
                  details: 'Проектирование и запуск AI-агентов, которые работают автономно. Многошаговое рассуждение.',
                  result: 'автономные агенты для задач, MCP-интеграции, workflows с несколькими агентами',
                  tools: 'Claude, MCP, n8n, Make'
                },
                { 
                  title: 'Vibe-Coding', 
                  date: '4 Feb', 
                  speaker: 'Сережа Рис', 
                  color: '#EAFF00',
                  details: 'От идеи до прототипа за часы. Создание без технического бэкграунда через Cursor, Windsurf.',
                  result: 'vibe-coding с Cursor и Windsurf, Claude Projects для прототипов',
                  tools: 'Cursor, Windsurf, Claude Projects, V0'
                },
                { 
                  title: 'AI Creative', 
                  date: '11 Feb', 
                  speaker: 'Анка Ставенски', 
                  color: '#EAFF00',
                  details: 'Для музыкантов, художников и креативщиков. Генерация музыки, визуального контента.',
                  result: 'генерация музыки и звука (Suno, ElevenLabs), визуальный контент (Midjourney, Runway)',
                  tools: 'Suno, Midjourney, Runway ML, ElevenLabs'
                },
              ].map((track, i) => (
                <CrazyElement key={i} crazy={crazyMode} className="border-2 border-black p-8 md:p-12 relative overflow-hidden group hover:bg-black hover:text-[#EAFF00] transition-all flex flex-col justify-between min-h-[400px]">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100">
                    <Zap size={48} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black opacity-40 group-hover:opacity-100 uppercase mb-4">{track.date} // WED 18:00</div>
                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">{track.title}</h3>
                    <p className="text-xs font-medium uppercase leading-relaxed mb-6 opacity-60 group-hover:opacity-100">{track.details}</p>
                    
                    <div className="space-y-4 mb-8">
                      <div>
                        <div className="text-[8px] font-black opacity-40 group-hover:opacity-100 uppercase mb-1">РЕЗУЛЬТАТ:</div>
                        <p className="text-[10px] font-bold uppercase leading-tight">{track.result}</p>
                      </div>
                      <div>
                        <div className="text-[8px] font-black opacity-40 group-hover:opacity-100 uppercase mb-1">ИНСТРУМЕНТЫ:</div>
                        <p className="text-[10px] font-bold uppercase leading-tight">{track.tools}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end border-t border-black/10 group-hover:border-[#EAFF00]/20 pt-4">
                    <div>
                      <div className="text-[8px] font-black opacity-40 group-hover:opacity-100 uppercase mb-1">СПИКЕР:</div>
                      <div className="text-sm font-black uppercase">{track.speaker}</div>
                    </div>
                    <div className="text-[10px] font-black border border-current px-2 py-1 uppercase">ADVANCED</div>
                  </div>
                </CrazyElement>
              ))}
            </div>
          </Container>
        </section>

        {/* Cases Section */}
        <section id="cases" className="py-32 border-b border-black bg-white/10 relative">
          {/* Decorative Yellow Blocks */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#EAFF00] border-2 border-black -rotate-12 z-0 opacity-20" />
          <div className="absolute bottom-10 right-10 w-32 h-12 bg-[#EAFF00] border-2 border-black rotate-6 z-0 opacity-20" />
          
          <Container className="relative z-10">
            <SectionLabel text="CASES" />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-px bg-black border border-black">
              {[
                { name: 'AI COACHING', desc: 'Персональный AI-коуч' },
                { name: 'AI VISION', desc: 'Категоризация изображений' },
                { name: 'AI LEARNING', desc: 'Языковой партнер' },
                { name: 'AI SUMMARY', desc: 'Суммаризация встреч' },
                { name: 'AI KNOWLEDGE', desc: 'Чат с базой знаний' },
                { name: 'AI PROJECT', desc: 'PM-ассистент' },
                { name: 'AI AUTOMATION', desc: 'Автоматизация воркфлоу' },
                { name: 'AI RESEARCH', desc: 'Исследовательский ассистент' },
                { name: 'AI CONTENT', desc: 'Генерация контента' },
                { name: 'AI ANALYTICS', desc: 'Анализ данных' },
                { name: 'AI VOICE', desc: 'Голосовые агенты' },
                { name: 'AI SALES', desc: 'CRM-ассистент' },
                { name: 'AI DEV', desc: 'Code Review' },
                { name: 'AI SUPPORT', desc: 'Служба поддержки' },
                { name: 'AI WORKFLOW', desc: 'Оптимизация процессов' }
              ].map((c, i) => (
                <div key={i} className="bg-[#EAFF00] p-6 flex flex-col justify-between aspect-square hover:bg-black hover:text-[#EAFF00] transition-colors group cursor-crosshair">
                  <div>
                    <div className="text-xs font-black uppercase leading-none mb-2">{c.name}</div>
                    <div className="text-[8px] font-medium uppercase opacity-0 group-hover:opacity-60 transition-opacity">{c.desc}</div>
                  </div>
                  <div className="text-[8px] font-bold opacity-40 group-hover:opacity-100 uppercase tracking-widest">ARTIFACT // 0{i+1}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Feedback Section */}
        <section id="feedback" className="py-32 border-b border-black overflow-hidden relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-black opacity-10" />
          <Container>
            <SectionLabel text="FEEDBACK" />
            <div className="grid md:grid-cols-2 gap-12">
              {[
                { name: 'Сергей Петров', role: 'Unix developer', text: 'После лабы я понял: это не просто инструменты, а новый способ мышления. Я офигел, когда Cursor сам нашел решение проблемы, которую я не знал как решить' },
                { name: 'Екатерина Грачева', role: 'HR-коммуникации, Avito', text: 'Я боялась, что это слишком сложно для нетехнического человека. Но через 3 недели я уже создавала агентов и автоматизации.' },
                { name: 'Антон Мормышев', role: 'Builder', text: 'После первой лекции по вайб-кодингу я не мог уснуть до 6 утра. Побежал делать. Это было мощно' },
                { name: 'Александра Гусева', role: 'L&D, Avito', text: 'Я на 30% начала думать AI-first в работе. Качественно изменилась подготовка обучающих материалов' },
                { name: 'Роман Максимов', role: 'Product Manager', text: 'У меня исчезло ощущение страха перед первым шагом в куче инструментов. Теперь гораздо проще зайти в любой инструмент' },
              ].slice(0, showAllFeedback ? undefined : 2).map((f, i) => (
                <CrazyElement key={i} crazy={crazyMode} className="border-2 border-black p-8 bg-white/5 relative group">
                  <MessageSquare className="absolute top-4 right-4 opacity-10 group-hover:opacity-100 transition-opacity" />
                  <p className="text-lg font-medium italic mb-8">"{f.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-[#EAFF00] font-black text-[10px]">
                      {f.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-black uppercase">{f.name}</div>
                      <div className="text-[10px] font-bold opacity-40 uppercase">{f.role}</div>
                    </div>
                  </div>
                </CrazyElement>
              ))}
            </div>

            <div className="mt-12 text-center md:hidden">
              <button 
                onClick={() => setShowAllFeedback(!showAllFeedback)}
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b-2 border-black pb-1"
              >
                {showAllFeedback ? 'СВЕРНУТЬ' : 'ЕЩЕ ОТЗЫВЫ'} <ChevronDown className={`transition-transform ${showAllFeedback ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-32 border-b border-black bg-black text-[#EAFF00]">
          <Container>
            <SectionLabel text="FAQ" />
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: 'ОРГАНИЗАЦИЯ И ПРОЦЕССЫ', a: 'Обучение проходит в Discord и Notion. Каждую неделю: воркшоп, коворкинг и офис-часы. Все записи сохраняются.' },
                { q: 'ОЖИДАНИЯ И РЕЗУЛЬТАТ', a: 'Вы получите работающую систему персональных ассистентов, настроенные воркфлоу и, главное, навык быстрого внедрения новых AI-инструментов.' },
                { q: 'ОПЛАТА И УСЛОВИЯ', a: 'Мы принимаем оплату картами (Stripe) и в рублях. Возможна рассрочка. Если после первой недели вы поймете, что это не ваше — вернем деньги.' },
                { q: 'NON-PROFIT / ART СФЕРА?', a: 'Мы поддерживаем социально значимые и творческие проекты. Напишите нам, мы обсудим специальные условия участия.' },
              ].map((item, i) => (
                <details key={i} className="group border-2 border-[#EAFF00] p-6 cursor-pointer">
                  <summary className="flex justify-between items-center font-black uppercase tracking-tighter text-xl list-none">
                    {item.q}
                    <ChevronDown className="group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="mt-4 text-sm font-medium uppercase opacity-60 leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
            
            <div className="mt-24 text-center">
              <div className="text-xs font-black uppercase opacity-40 mb-4">ОСТАЛИСЬ ВОПРОСЫ?</div>
              <a href="https://t.me/alex_named" className="text-3xl md:text-5xl font-black uppercase tracking-tighter hover:line-through">@alex_named</a>
            </div>
          </Container>
        </section>

        {/* Team Section */}
        <section id="team" className="py-32 border-b border-black">
          <Container>
            <SectionLabel text="WHO WE ARE" />
            
            <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
              <div className="w-full lg:w-1/2">
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">мы живём в этих процессах каждый день</h3>
                <p className="text-lg font-medium uppercase tracking-wide opacity-60">строим ассистентов и агентов, тестируем инструменты, модели, воркфлоу. ниже — проводники, которые будут рядом.</p>
              </div>
              <div className="w-full lg:w-1/2 aspect-video bg-black relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center text-[#EAFF00] text-8xl font-black opacity-10 group-hover:scale-110 transition-transform">
                  TEAM
                </div>
                <div className="absolute inset-0 border-8 border-[#EAFF00] opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-[#EAFF00] rotate-45" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { name: 'Александр Поваляев', role: 'Основатель AI Mindset', tg: '@alex_named_ai', bio: 'Стратег, эксперт по AI-интеграциям. 15+ лет соединяет технологии, бизнес и людей.' },
                { name: 'Сергей Хабаров', role: 'Системный архитектор', tg: '@alliknowisthatidontknownothing', bio: '6+ лет в образовании, 500+ обученных специалистов. Знает, как устроены процессы изнутри.' },
                { name: 'Степан Гершуни', role: 'Технологический стратег', tg: '@cryptoEssay', bio: 'Founder Credentia, Deep Skills, Codex Town. Инвестор Cyber Fund, автор cybOS.' },
                { name: 'Алексей Иванов', role: 'Executive-коуч', tg: '@ponchiknews', bio: 'Коуч для фаундеров и IT-лидеров. ICF PCC, ex-дизайн лид.' },
                { name: 'Серёжа Рис', role: 'AI-евангелист', tg: '@ris_ai', bio: 'Ex Yandex. Билдер и фаундер в комьюнити вайбкодеров @vibecod3rs.' },
                { name: 'Анка Ставенски', role: 'Продуктовый архитектор', tg: '@anca_log', bio: '10+ лет в управлении, технологических и креативных индустриях.' },
                { name: 'Анна Лозицкая', role: 'Founder embraceme.app', tg: 'LinkedIn', bio: '12+ лет помогала стартапам расти с нуля до больших раундов.' },
              ].map((member, i) => (
                <CrazyElement key={i} crazy={crazyMode} className="group">
                  <div className="aspect-square bg-black mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-[#EAFF00] text-6xl font-black opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all">
                      {member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-[#EAFF00] translate-y-full group-hover:translate-y-0 transition-transform">
                      <div className="text-[10px] font-black uppercase tracking-widest">{member.tg}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-2">{member.name}</h3>
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-4">{member.role}</div>
                  <p className="text-[10px] font-medium uppercase opacity-0 group-hover:opacity-60 transition-opacity leading-relaxed">{member.bio}</p>
                </CrazyElement>
              ))}
            </div>
          </Container>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-32 border-b border-black bg-black text-[#EAFF00]">
          <Container>
            <SectionLabel text="PRICE" />
            
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <div className="border border-[#EAFF00] rounded-full px-4 py-1 text-[10px] font-black uppercase tracking-widest">Alumni (-20%)</div>
              <div className="border border-[#EAFF00] rounded-full px-4 py-1 text-[10px] font-black uppercase tracking-widest">Bring a Friend (-10%)</div>
              <div className="border border-[#EAFF00] rounded-full px-4 py-1 text-[10px] font-black uppercase tracking-widest">Оплата в рублях</div>
              <div className="border border-[#EAFF00] rounded-full px-4 py-1 text-[10px] font-black uppercase tracking-widest">Возврат 100% (1 неделя)</div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {[
                { name: 'MAIN LAB', price: '590', tag: 'BASE', desc: 'базовый формат для самостоятельной работы' },
                { name: 'ADVANCED', price: '890', tag: '+4 ТРЕКА', desc: 'для тех, кто строит полный ai-стек', highlight: true },
                { name: 'PREMIUM', price: '1490', tag: 'LIMITED', desc: 'индивидуальный маршрут внедрения' },
              ].map((plan, i) => (
                <CrazyElement key={i} crazy={crazyMode} className={`border-2 border-[#EAFF00] p-8 md:p-12 flex flex-col h-full transition-all relative overflow-hidden ${plan.highlight ? 'bg-[#EAFF00] text-black md:scale-105 z-10' : 'hover:bg-[#EAFF00] hover:text-black'}`}>
                  {/* Mobile symbolic border accent */}
                  <div className="md:hidden absolute top-0 left-0 w-full h-1 bg-current opacity-20 flex justify-around overflow-hidden text-[8px]">
                    {Array.from({ length: 20 }).map((_, j) => <span key={j}>/</span>)}
                  </div>
                  <div className="md:hidden absolute bottom-0 left-0 w-full h-1 bg-current opacity-20 flex justify-around overflow-hidden text-[8px]">
                    {Array.from({ length: 20 }).map((_, j) => <span key={j}>\</span>)}
                  </div>
                  
                  <div className="text-[10px] font-black border border-current px-2 py-1 uppercase inline-block mb-8">{plan.tag}</div>
                  <h3 className="text-4xl font-black uppercase tracking-tighter mb-4">{plan.name}</h3>
                  <div className="text-6xl font-black tracking-tighter mb-8">€{plan.price}</div>
                  <p className="text-xs font-medium uppercase opacity-60 mb-12 flex-grow">{plan.desc}</p>
                  <button className="w-full border-2 border-current py-4 font-black uppercase text-sm hover:bg-current hover:text-inherit transition-all">ВЫБРАТЬ ПЛАН</button>
                </CrazyElement>
              ))}
            </div>

            {/* Team Plan */}
            <CrazyElement crazy={crazyMode} className="mt-12 border-2 border-[#EAFF00] p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-12 bg-white/5 hover:bg-[#EAFF00] hover:text-black transition-all group">
              <div className="max-w-2xl">
                <div className="text-[10px] font-black border border-current px-2 py-1 uppercase inline-block mb-6">FOR TEAMS</div>
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">TEAM PREMIUM</h3>
                <p className="text-sm font-medium uppercase opacity-60 group-hover:opacity-100">несколько человек из компании вместе проходят Main Lab. работают над реальными задачами бизнеса c нашей поддержкой.</p>
              </div>
              <div className="text-center md:text-right">
                <div className="text-5xl md:text-7xl font-black tracking-tighter mb-4">€3,500+</div>
                <button className="bg-[#EAFF00] text-black group-hover:bg-black group-hover:text-[#EAFF00] px-12 py-6 font-black uppercase text-sm transition-all">УЗНАТЬ БОЛЬШЕ</button>
              </div>
            </CrazyElement>
          </Container>
        </section>

        {/* Footer */}
        <footer className="py-32 bg-[#EAFF00] text-black border-t-4 border-black">
          <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
              <div className="lg:col-span-2">
                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">AI MINDSET<br/>LAB 26</h2>
                <div className="flex gap-4">
                  <YellowPill crazy={crazyMode} className="bg-black text-[#EAFF00]">
                    <span className="text-[10px] font-black uppercase">WINTER BATCH</span>
                  </YellowPill>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-black opacity-40 uppercase tracking-widest mb-8">КОНТАКТЫ</div>
                <div className="flex flex-col gap-4 text-sm font-black uppercase">
                  <a href="https://www.youtube.com/@A-I-Mindset" className="hover:line-through">ПОДКАСТ</a>
                  <a href="https://t.me/ai_mind_set" className="hover:line-through">TELEGRAM</a>
                  <a href="https://docs.google.com/document/d/e/2PACX-1vRfnWZMiHbq8fvnnI0gACZuHtvJkZHJM0_kRWPZBwzBuzVQRLz2aqrwOO4qZfJUW2EkYc8rGt0f5QrJ/pub" className="hover:line-through">ОФЕРТА</a>
                  <a href="https://aimindset.org/confpolicy" className="hover:line-through">ПОЛИТИКА</a>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-black opacity-40 uppercase tracking-widest mb-8">НАШИ ЛАБОРАТОРИИ</div>
                <div className="flex flex-col gap-4 text-sm font-black uppercase">
                  <a href="https://aimindset.org/ai-mindset-w25" className="hover:line-through">AI MINDSET LAB W26</a>
                  <a href="https://aimindset.org/automation-lab" className="hover:line-through">AUTOMATION LAB</a>
                  <a href="https://aimindset.org/ai-mindset-community" className="hover:line-through">SPACE CLUB</a>
                  <a href="https://aimindset.org/sprint-pos" className="hover:line-through">PERSONAL OS</a>
                </div>
              </div>
            </div>
            <div className="pt-12 border-t border-black flex justify-between items-center text-[8px] font-black uppercase tracking-[0.5em]">
              <span>AI MINDSET // 2026</span>
              <span>MADE WITH YELLOW LOVE</span>
            </div>
          </Container>
        </footer>

      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]">
        <motion.a 
          href="https://join.aimindset.org/context"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-[#EAFF00] px-8 py-4 rounded-full font-black uppercase text-xs shadow-2xl flex items-center gap-2"
        >
          ПОДАТЬ ЗАЯВКУ <ArrowRight size={14} />
        </motion.a>
      </div>
    </div>
  );
}

const Container = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`max-w-7xl mx-auto px-4 md:px-8 ${className}`}>
    {children}
  </div>
);
