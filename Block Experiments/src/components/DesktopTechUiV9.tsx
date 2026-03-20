import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGRAM_TRACKS, PROGRAM_WEEK_COPY, ADVANCED_TRACKS } from '../data';
import { cn } from '../lib/utils';
import { MorphSvg } from './MorphSvg';

export const DesktopTechUiV9 = () => {
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
    { day: 'СБ', task: 'Q&A SESSION', active: true },
    { day: 'ВС', task: '', active: false },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto py-12 px-8 font-sans">
      <div className="flex flex-col lg:flex-row gap-20 items-stretch justify-center">
        
        {/* LEFT: STEPPER NAVIGATION (UNCHANGED) */}
        <div className="w-[124px] shrink-0 flex flex-col py-[50px] justify-between h-[580px]">
          {PROGRAM_TRACKS.map((t, idx) => {
            const isActive = activeWeek === idx;
            return (
              <button
                key={`v9-st-ref-${t.id}`}
                onClick={() => setActiveWeek(idx)}
                className="flex items-center gap-5 group text-left relative h-12"
              >
                {idx < PROGRAM_TRACKS.length - 1 && (
                  <div className="absolute left-[20px] top-[40px] w-[1px] h-[calc(550px/3)] bg-black/[0.1]" />
                )}
                
                <div className={cn(
                  "w-10 h-10 rounded-full border flex items-center justify-center transition-all z-10 shrink-0",
                  isActive ? "bg-[#8DC63F] border-[#8DC63F]" : "bg-white border-black/[0.1] group-hover:border-black/20"
                )}>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />}
                  {!isActive && <div className="w-1.2 h-1.2 rounded-full bg-black/10 group-hover:bg-black/30 transition-colors" />}
                </div>

                <div className="flex flex-col">
                  <div className={cn("text-[10px] font-mono font-bold uppercase transition-colors mb-0.5", isActive ? "text-[#8DC63F]" : "text-black/30")}>
                    НЕДЕЛЯ
                  </div>
                  <div className={cn("text-[20px] font-black tracking-tighter leading-none transition-colors", isActive ? "text-black" : "text-black/20")}>
                    0{idx + 1}
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* RIGHT: THE MAIN CARD (SQUARE VERSION) */}
        <div className="flex-1 bg-white border border-black/15 h-[580px] shadow-none relative overflow-hidden flex flex-col rounded-none pt-12 max-w-[980px]">
          
          {/* Subtle Grid Background - 2x less visible (0.015 opacity) */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.015] z-10" 
               style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

          {/* BACKGROUND ILLUSTRATION */}
          <motion.div 
            animate={{
              scale: activeWeek === 3 ? 1.05 : 0.85,
              opacity: activeWeek === 3 ? 0.75 : 0.65,
              top: activeWeek === 3 ? "-10%" : "0%",
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-[-24px] w-[740px] h-[740px] pointer-events-none mix-blend-multiply z-0 flex justify-center"
          >
             <MorphSvg week={activeWeek} />
          </motion.div>

          <div className="relative z-20 flex flex-col flex-1 px-12 pb-12">
             
             {/* TAGS ROW - SQUARE STYLE */}
             <div className="flex items-center justify-between mb-4 h-6">
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-none bg-black/80 shadow-sm" />
                   <span className="text-black/80 text-[10px] font-mono font-bold uppercase tracking-[0.25em] leading-none">MAIN TRACK</span>
                </div>
                {/* MECHANICAL STAR ALIGNMENT */}
                <div className="flex items-center gap-2 pr-1 h-full relative"> 
                   <span className="text-[20px] font-black text-[#8DC63F] leading-none select-none font-sans absolute left-[-18px] top-[64%] -translate-y-1/2">*</span>
                   <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-black/40 uppercase leading-none pl-1">ADVANCED TRACK</span>
                </div>
             </div>

             <div className="flex-1 flex flex-col lg:flex-row gap-12 relative overflow-hidden">
                
                {/* Content Area */}
                <div className="flex-1 min-w-0 relative">
                  <AnimatePresence>
                    <motion.div
                      key={`v9-blur-no-scale-${activeWeek}`}
                      initial={{ opacity: 0, filter: "blur(20px)" }} 
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(20px)" }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} 
                      className="flex flex-col absolute inset-0 pt-0"
                    >
                      <h2 className="text-[52px] md:text-[64px] font-black uppercase tracking-tighter leading-[0.82] text-black mb-4 max-w-[540px]">
                        {track.title}
                      </h2>

                      <div className="text-[#8DC63F] font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                        {weekCopy.framedDescription}
                      </div>

                      <p className="text-[15px] leading-[1.6] text-black/80 font-medium max-w-[440px] mb-8">
                        {weekCopy.bodyDescription}
                      </p>

                      {/* Calendar Rhythm - SQUARE, COMPACT (Reduced height 44px) */}
                      <div className="mt-auto">
                        <div className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-black/50 mb-4 ml-0.5">WEEKLY_RHYTHM</div>
                        <div className="grid grid-cols-7 border border-black/[0.15] w-full max-w-[740px] bg-black/[0.1] gap-px rounded-none overflow-hidden shadow-none font-mono">
                          {weeklyRhythm.map((item, idx) => (
                            <div key={`v9-cal-${idx}`} 
                              className={cn(
                                "flex flex-col h-[44px] p-2 bg-white rounded-none",
                                !item.active && "bg-[#F4F4F4]"
                              )}
                            >
                               <div className="flex justify-between items-start mb-0 leading-none">
                                 <span className={cn("text-[9px] font-bold tracking-widest", 
                                   item.active ? "text-black/30" : "text-black/10"
                                 )}>{item.day}</span>
                                 {/* WEDNESDAY ADVANCED STAR: Matches the style of the side star */}
                                 {item.advanced && <div className="text-[18px] font-black text-[#8DC63F] leading-none mt-[-5px] select-none font-sans">*</div>}
                               </div>
                               <div className={cn("text-[10px] font-black uppercase mt-auto leading-none tracking-tighter", 
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

                {/* Advanced Info Area - RIGHT ALIGNED, TRANSPARENT BG */}
                <div className="w-full lg:w-[320px] shrink-0 relative pt-4">
                  <AnimatePresence>
                    <motion.div
                      key={`v9-adv-cross-${activeWeek}`}
                      initial={{ opacity: 0, filter: "blur(14px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(14px)" }}
                      transition={{ duration: 0.7 }}
                      className="absolute inset-0 pt-4 flex flex-col items-end text-right"
                    >
                      {/* More transparent background to show the SVG morph underneath */}
                      <div className="bg-white/10 backdrop-blur-[3px] border border-black/5 p-10 py-12 flex-col items-end justify-start w-full flex min-h-[320px] rounded-none">
                        <h4 className="text-[28px] font-black uppercase text-black/90 tracking-tighter leading-none mb-4">
                          {advanced.title}
                        </h4>

                        <p className="text-[14px] leading-[1.6] text-black/60 font-medium mb-12 max-w-[260px]">
                          {advanced.description}
                        </p>

                        <div className="mt-auto flex flex-col items-end pt-2">
                          <div className="text-[8px] font-mono font-bold uppercase tracking-[0.3em] text-black/40 mb-1">CURATOR_ID</div>
                          <div className="text-[16px] font-black text-black/80 font-mono tracking-tighter uppercase whitespace-nowrap">
                            {advanced.speaker}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
