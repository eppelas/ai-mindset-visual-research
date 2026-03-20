import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGRAM_TRACKS, PROGRAM_WEEK_COPY, ADVANCED_TRACKS } from '../data';
import { cn } from '../lib/utils';
import { MorphSvg } from './MorphSvg';

export const DesktopTechUiV8 = () => {
  const [activeWeek, setActiveWeek] = useState(0);

  const track = PROGRAM_TRACKS[activeWeek];
  const weekCopy = PROGRAM_WEEK_COPY[track.id];
  const advanced = ADVANCED_TRACKS[activeWeek];

  const weeklyRhythm = [
    { day: 'ПН', task: 'ВОРКШОП', active: true },
    { day: 'ВТ', task: 'КОВОРКИНГ', active: true },
    { day: 'СР', task: 'ADVANCED', active: true, advanced: true },
    { day: 'ЧТ', task: '', active: false },
    { day: 'ПТ', task: 'ЛЕКЦИЯ', active: true },
    { day: 'СБ', task: 'Q&A', active: true },
    { day: 'ВС', task: '', active: false },
  ];

  return (
    <div className="w-full max-w-[1240px] mx-auto py-12 px-8 font-sans">
      <div className="flex flex-col lg:flex-row gap-16 items-start justify-center">
        
        {/* LEFT: STEPPER NAVIGATION */}
        <div className="w-[120px] shrink-0 flex flex-col pt-16">
          {PROGRAM_TRACKS.map((t, idx) => {
            const isActive = activeWeek === idx;
            return (
              <button
                key={`v8-st-mechanical-${t.id}`}
                onClick={() => setActiveWeek(idx)}
                className="flex items-center gap-6 group mb-14 text-left relative h-12"
              >
                {idx < PROGRAM_TRACKS.length - 1 && (
                  <div className="absolute left-[15px] top-[40px] w-[2px] h-[calc(100%+32px)] bg-black/[0.04]" />
                )}
                
                <div className={cn(
                  "w-8 h-8 rounded-full border flex items-center justify-center transition-all z-10 shrink-0",
                  isActive ? "bg-[#8DC63F] border-[#8DC63F]" : "bg-white border-black/[0.08] group-hover:border-black/20"
                )}>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white transition-transform" />}
                  {!isActive && <div className="w-1 h-1 rounded-full bg-black/10 group-hover:bg-black/30 transition-colors" />}
                </div>

                <div className="flex flex-col">
                  <div className={cn("text-[10px] font-mono font-bold uppercase transition-colors mb-0.5", isActive ? "text-[#8DC63F]" : "text-black/30")}>
                    НЕДЕЛЯ
                  </div>
                  <div className={cn("text-[18px] font-black tracking-tighter leading-none transition-colors", isActive ? "text-black" : "text-black/20")}>
                    0{idx + 1}
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* RIGHT: THE SQUARE CONTENT CARD (GRID VERSION) */}
        <div className="flex-1 bg-white border border-black/15 min-h-[580px] shadow-sm relative overflow-hidden flex flex-col rounded-none pt-12">
          
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
               style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

          {/* BACKGROUND ILLUSTRATION */}
          <motion.div 
            animate={{
              scale: activeWeek === 3 ? 1.05 : 0.82,
              opacity: activeWeek === 3 ? 0.45 : 0.35, 
              top: activeWeek === 3 ? "2%" : "5%",
            }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-[-44px] w-[700px] h-[700px] pointer-events-none mix-blend-multiply z-0 flex justify-center"
          >
             <MorphSvg week={activeWeek} />
          </motion.div>

          {/* ADVANCED TRACK TAG */}
          <div className="absolute top-12 right-12 z-20 flex flex-col items-end">
             <div className="flex items-center gap-2 mb-2 relative h-6">
                <span className="text-[20px] font-black text-[#8DC63F] leading-none mb-[-2px] absolute left-[-18px] top-[64%] -translate-y-1/2 select-none font-sans font-black">*</span>
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-black/40 uppercase leading-none pl-1">ADVANCED TRACK</span>
             </div>
             
             {/* NO-WAIT CROSSFADE ADVANCED BOX with CRYSTALLIZE EFFECT */}
             <div className="relative min-w-[280px] min-h-[180px]">
               <AnimatePresence>
                 <motion.div
                   key={`v8-adv-crystal-${activeWeek}`}
                   initial={{ opacity: 0, filter: "blur(14px) contrast(150%)" }} // Crystallize effect (mechanical feel)
                   animate={{ opacity: 1, filter: "blur(0px) contrast(100%)" }}
                   exit={{ opacity: 0, filter: "blur(14px) contrast(150%)" }}
                   transition={{ duration: 0.8, ease: "easeInOut" }}
                   className="bg-white/30 backdrop-blur-[2px] border border-black/5 p-8 text-right flex flex-col items-end absolute inset-0 pt-8 rounded-none"
                 >
                   <h4 className="text-[24px] font-black uppercase text-black/80 tracking-tighter leading-none mb-3">
                     {advanced.title}
                   </h4>
                   <p className="text-[12px] leading-[1.5] text-black/60 font-medium mb-8 max-w-[220px]">
                     {advanced.description}
                   </p>
                   <div className="text-[14px] font-black text-black/70 font-mono tracking-tighter uppercase font-mono italic">
                     {advanced.speaker}
                   </div>
                 </motion.div>
               </AnimatePresence>
             </div>
          </div>

          <div className="relative z-10 flex flex-col flex-1 px-12">
             
             {/* MAIN TRACK TAG */}
             <div className="flex items-center gap-2 mb-6 h-6">
                <div className="w-1.5 h-1.5 rounded-none bg-black/80 shadow-sm" />
                <span className="text-black/80 text-[10px] font-mono font-bold uppercase tracking-[0.25em] leading-none">MAIN TRACK</span>
             </div>

             <div className="flex-1 flex flex-col gap-6 max-w-[580px] relative overflow-hidden">
                {/* NO-WAIT CROSSFADE with CRYSTALLIZATION (Mechanical/Particle logic) */}
                <AnimatePresence>
                  <motion.div
                    key={`v8-crystal-main-${activeWeek}`}
                    initial={{ opacity: 0, filter: "blur(20px) contrast(160%) brightness(1.1)", opacity: 0 }} 
                    animate={{ opacity: 1, filter: "blur(0px) contrast(100%) brightness(1)", opacity: 1 }}
                    exit={{ opacity: 0, filter: "blur(20px) contrast(160%)" }}
                    transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }} 
                    className="flex flex-col absolute inset-0 mt-0"
                  >
                    <div className="text-[#8DC63F] font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                      {weekCopy.framedDescription}
                    </div>

                    <h2 className="text-[48px] md:text-[60px] font-black uppercase tracking-tighter leading-[0.82] text-black mb-6">
                      {track.title}
                    </h2>

                    <p className="text-[15px] leading-[1.6] text-black/80 font-medium max-w-[440px] mb-12">
                      {weekCopy.bodyDescription}
                    </p>

                    {/* COMPACT SQUARE CALENDAR */}
                    <div className="mt-auto pb-12">
                      <div className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-black/40 mb-4 ml-0.5">WEEKLY_RHYTHM</div>
                      <div className="grid grid-cols-7 w-full max-w-[720px] bg-black/10 gap-px shadow-none overflow-hidden rounded-none border border-black/10">
                        {weeklyRhythm.map((item, idx) => (
                          <div key={`v8-cal-sq-${idx}`} 
                            className={cn(
                              "flex flex-col h-[40px] p-2 bg-white rounded-none", // Tighter height (40px)
                              !item.active && "bg-[#F4F4F4]"
                            )}
                          >
                             <div className="flex justify-between items-start mb-0 leading-none">
                               <span className={cn("text-[8px] font-black font-mono tracking-widest", 
                                 item.active ? "text-black/30" : "text-black/10"
                               )}>{item.day}</span>
                               {item.advanced && <div className="text-[12px] font-black text-[#8DC63F] -mt-1 select-none font-sans">*</div>}
                             </div>
                             <div className={cn("text-[9px] font-black uppercase mt-auto leading-none tracking-tighter truncate", 
                               item.active ? "text-black/90" : "text-transparent", 
                               item.advanced ? "text-[#8DC63F]" : "")}>
                               {item.task}
                             </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
