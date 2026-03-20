import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGRAM_TRACKS, PROGRAM_WEEK_COPY, ADVANCED_TRACKS } from '../data';
import { cn } from '../lib/utils';
import { MorphSvg } from './MorphSvg';

export const DesktopTechUiV7 = () => {
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
    <div className="w-full max-w-[1240px] mx-auto py-12 px-8 font-sans">
      <div className="flex flex-col lg:flex-row gap-16 items-start justify-center">
        
        {/* LEFT: STEPPER NAVIGATION (Labels: НЕДЕЛЯ + Number) */}
        <div className="w-[110px] shrink-0 flex flex-col pt-16">
          {PROGRAM_TRACKS.map((t, idx) => {
            const isActive = activeWeek === idx;
            return (
              <button
                key={`v7-st-ref-f-al-v12-${t.id}`}
                onClick={() => setActiveWeek(idx)}
                className="flex items-center gap-5 group mb-14 text-left relative h-16"
              >
                {idx < PROGRAM_TRACKS.length - 1 && (
                  <div className="absolute left-[20px] top-[48px] w-[2px] h-[calc(100%+28px)] bg-black/[0.05]" />
                )}
                <div className={cn(
                  "w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all z-10 shrink-0",
                  isActive ? "bg-[#8DC63F] border-[#8DC63F] shadow-lg shadow-[#8DC63F]/20" : "bg-white border-black/[0.08] group-hover:border-black/20"
                )}>
                  {isActive && <div className="w-2 h-2 rounded-full bg-white shadow-sm" />}
                  {!isActive && <div className="w-1.5 h-1.5 rounded-full bg-black/10 group-hover:bg-black/30 transition-colors" />}
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

        {/* RIGHT: THE SQUARE CONTENT CARD */}
        <div className="flex-1 bg-white border border-black/15 min-h-[580px] shadow-[0_10px_40px_rgba(0,0,0,0.02)] relative overflow-hidden flex flex-col rounded-[2px] pt-12">
          
          {/* Background Grid */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
               style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

          {/* BACKGROUND ILLUSTRATION */}
          <motion.div 
            animate={{
              scale: activeWeek === 3 ? 1.05 : 0.82,
              opacity: activeWeek === 3 ? 0.45 : 0.35, 
              top: activeWeek === 3 ? "0%" : "5%",
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-[-44px] w-[740px] h-[740px] pointer-events-none mix-blend-multiply z-0 flex justify-center"
          >
             <MorphSvg week={activeWeek} />
          </motion.div>

          <div className="relative z-10 flex flex-col flex-1 px-12 pb-12">
             
             {/* TRACK TAG ROW WITH OPTICAL STAR FIX */}
             <div className="flex items-center justify-between mb-4 h-6 relative z-20">
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-[1px] bg-black/80" />
                   <span className="text-black/80 text-[10px] font-mono font-bold uppercase tracking-[0.25em] leading-none">MAIN TRACK</span>
                </div>
                <div className="flex items-center gap-2 pr-1 h-full relative"> 
                   <span className="text-[20px] font-black text-[#8DC63F] leading-none mb-[-2px] absolute left-[-18px] top-[64%] -translate-y-1/2 select-none font-sans font-black">*</span>
                   <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-black/40 uppercase leading-none pl-1">ADVANCED TRACK</span>
                </div>
             </div>

             <div className="flex-1 flex flex-col lg:flex-row gap-12 min-h-[460px] relative">
                
                {/* Content Area - NO-WAIT CROSSFADE */}
                <div className="flex-1 min-w-0 relative">
                  <AnimatePresence>
                    <motion.div
                      key={`v7-inner-morph-cross-${activeWeek}`}
                      initial={{ opacity: 0, filter: "blur(32px)", scale: 0.98 }} // Deep Morph blur
                      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                      exit={{ opacity: 0, filter: "blur(32px)", scale: 1.02 }}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} 
                      className="flex flex-col absolute inset-0 mt-0"
                    >
                      <h2 className="text-[48px] md:text-[56px] font-black uppercase tracking-tighter leading-[0.85] text-black mb-4 max-w-[540px]">
                        {track.title}
                      </h2>

                      <div className="text-[#8DC63F] font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                        {weekCopy.framedDescription}
                      </div>

                      <p className="text-[15px] leading-[1.6] text-black/80 font-medium max-w-[440px] mb-12">
                        {weekCopy.bodyDescription}
                      </p>

                      {/* Horizontal Calendar Rhythm */}
                      <div className="mt-auto pb-12">
                        <div className="text-[11px] font-mono font-black uppercase tracking-[0.4em] text-black/80 mb-5 ml-1">НЕДЕЛЬНЫЙ РИТМ</div>
                        <div className="grid grid-cols-7 border border-black/[0.1] w-full max-w-[720px] bg-black/[0.05] gap-px rounded-[1px] shadow-none overflow-hidden">
                          {weeklyRhythm.map((item, idx) => (
                            <div key={`v7-cal-v4-v2-cross-${idx}`} 
                              className={cn(
                                "flex flex-col h-[52px] p-2 bg-white",
                                !item.active && "bg-[#F4F4F4]"
                              )}
                            >
                               <div className="flex justify-between items-start mb-0">
                                 <span className={cn("text-[9px] font-black font-mono tracking-widest", 
                                   item.active ? "text-black/30" : "text-black/10"
                                 )}>{item.day}</span>
                                 {item.advanced && <div className="text-[18px] font-black text-[#8DC63F] leading-none mt-[-5px] select-none font-sans font-black">*</div>}
                               </div>
                               <div className={cn("text-[10px] font-black uppercase mt-auto leading-none tracking-tighter truncate", 
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

                {/* Advanced Info Area - CROSSFADE */}
                <div className="w-full lg:w-[320px] shrink-0 relative pt-8">
                  <AnimatePresence>
                    <motion.div
                      key={`v7-adv-morph-cross-${activeWeek}`}
                      initial={{ opacity: 0, filter: "blur(24px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(24px)" }}
                      transition={{ duration: 0.9, ease: "easeInOut" }}
                      className="absolute inset-0 pt-8 flex flex-col items-end text-right"
                    >
                      <div className="bg-gradient-to-l from-gray-100/90 via-gray-50/40 to-transparent p-10 py-12 flex-col items-end justify-start w-full backdrop-blur-[1px] flex min-h-[220px]">
                        <h4 className="text-[26px] font-black uppercase text-black/80 tracking-tighter leading-none mb-4">
                          {advanced.title}
                        </h4>

                        <p className="text-[13px] leading-[1.6] text-black/60 font-medium mb-12 max-w-[260px]">
                          {advanced.description}
                        </p>

                        <div className="mt-auto flex flex-col items-end pt-2">
                          <div className="text-[8px] font-mono font-bold uppercase tracking-[0.3em] text-black/40 mb-1">CURATOR_ID</div>
                          <div className="text-[15px] font-black text-black/70 font-mono tracking-tighter uppercase whitespace-nowrap">
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
