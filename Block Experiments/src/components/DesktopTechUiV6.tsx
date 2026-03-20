import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGRAM_TRACKS, PROGRAM_WEEK_COPY, ADVANCED_TRACKS } from '../data';
import { cn } from '../lib/utils';
import { MorphSvg } from './MorphSvg';

export const DesktopTechUiV6 = () => {
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
    <div className="w-full max-w-[1440px] mx-auto py-12 px-8 font-sans">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        
        {/* LEFT: STEPPER NAVIGATION (Labels: НЕДЕЛЬ 01) */}
        <div className="w-[180px] shrink-0 flex flex-col pt-16">
          {PROGRAM_TRACKS.map((t, idx) => {
            const isActive = activeWeek === idx;
            return (
              <button
                key={`v6-stepper-label-${t.id}`}
                onClick={() => setActiveWeek(idx)}
                className="flex items-center gap-6 group mb-16 text-left relative h-12"
              >
                {/* Vertical Line Connector */}
                {idx < PROGRAM_TRACKS.length - 1 && (
                  <div className="absolute left-[15px] top-[40px] w-[1px] h-[calc(100%+32px)] bg-black/[0.04]" />
                )}
                
                {/* Dot/Indicator */}
                <div className={cn(
                  "w-8 h-8 rounded-full border flex items-center justify-center transition-all z-10 shrink-0",
                  isActive ? "bg-[#8DC63F] border-[#8DC63F]" : "bg-white border-black/[0.08] group-hover:border-black/20"
                )}>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white transition-transform" />}
                  {!isActive && <div className="w-1 h-1 rounded-full bg-black/10 group-hover:bg-black/30 transition-colors" />}
                </div>

                <div className="flex flex-col">
                  <div className={cn("text-[10px] font-mono font-bold tracking-[0.2em] uppercase transition-colors", isActive ? "text-[#8DC63F]" : "text-black/30")}>
                    НЕДЕЛЬ 0{idx + 1}
                  </div>
                  <div className={cn("text-[14px] font-black tracking-tight leading-none uppercase transition-colors", isActive ? "text-black" : "text-black/20")}>
                    {t.id.split('-').pop()}
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* RIGHT: THE MAIN CARD */}
        <div className="flex-1 bg-white border border-black/10 min-h-[580px] shadow-[0_4px_30px_rgba(0,0,0,0.012)] relative overflow-hidden flex flex-col rounded-[2px]">
          
          {/* Background Grid - Larger, very subtle */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.01] z-0" 
               style={{ 
                 backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
                 backgroundSize: '80px 80px' 
               }} />

          {/* Morph Illustration - Higher position on weeks 1-3 */}
          <motion.div 
            animate={{
              scale: activeWeek === 3 ? 1.4 : 1.1,
              opacity: activeWeek === 3 ? 0.35 : 0.2, 
              right: activeWeek === 3 ? "0%" : "0%",
              top: activeWeek === 3 ? "0%" : "12%", // Moved higher as requested
              width: activeWeek === 3 ? "100%" : "700px",
              height: activeWeek === 3 ? "100%" : "700px"
            }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute pointer-events-none mix-blend-multiply z-0"
          >
             <MorphSvg week={activeWeek} />
          </motion.div>

          <div className="relative z-10 flex flex-col flex-1">
             
             {/* Header Bar */}
             <div className="flex items-center justify-between px-12 h-[64px] border-b border-black/5 bg-white/40">
                <div className="flex items-center gap-4">
                  <div className="text-[10px] font-mono font-bold tracking-[0.2em] text-black">INTERNAL_SYSTEMS_SND.0{activeWeek + 1}</div>
                  <div className="h-[1px] w-8 bg-black/20" />
                  <div className="text-[10px] font-mono font-bold tracking-[0.2em] text-black/50 uppercase">Syllabus.Module</div>
                </div>
                <div className="text-[10px] font-mono font-bold text-black/40 uppercase tracking-[0.15em]">
                  {weekCopy.dateRange}
                </div>
             </div>

             <div className="flex-1 flex flex-col lg:flex-row p-12 gap-12 min-h-[480px]">
                
                {/* Content Column */}
                <div className="flex-1 min-w-0 flex flex-col justify-start">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`v6-main-data-${activeWeek}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* MAIN TRACK TAG - Fixed baseline for alignment */}
                      <div className="flex items-center gap-2 mb-4 h-[20px]">
                        <div className="w-2 h-2 rounded-[1px] bg-black/80" />
                        <span className="text-black/60 text-[10px] font-mono font-bold uppercase tracking-[0.25em]">MAIN TRACK</span>
                      </div>

                      <div className="text-[#8DC63F] font-mono text-[11px] font-bold uppercase tracking-[0.3em] mb-2">
                        {weekCopy.framedDescription}
                      </div>

                      <h2 className="text-[52px] md:text-[60px] font-black uppercase tracking-tighter leading-[0.82] text-black mb-6 max-w-[540px]">
                        {track.title}
                      </h2>

                      <p className="text-[15px] leading-[1.6] text-black/80 font-medium max-w-[480px] mb-10">
                        {weekCopy.bodyDescription}
                      </p>

                      {/* Calendar Grid */}
                      <div className="mt-4">
                        <div className="text-[9px] font-mono font-bold uppercase tracking-[0.4em] text-black/40 mb-3 ml-0.5">НЕДЕЛЬНЫЙ РИТМ</div>
                        <div className="grid grid-cols-7 border-t border-l border-black/[0.08] w-full max-w-[620px] bg-white rounded-[1px] overflow-hidden">
                          {weeklyRhythm.map((item, idx) => (
                            <div key={`v6-grid-item-${idx}`} 
                              className={cn(
                                "flex flex-col h-[52px] border-r border-b border-black/[0.08] p-2",
                                item.active ? "bg-white" : "bg-black/[0.01]"
                              )}
                            >
                               <div className="flex justify-between items-start mb-0">
                                 <span className={cn("text-[9px] font-bold font-mono", item.active ? "text-black/60" : "text-black/15")}>{item.day}</span>
                                 {item.advanced && <div className="text-[12px] font-black text-[#8DC63F] leading-none mt-[-2px] tracking-tight">*</div>}
                               </div>
                               <div className={cn("text-[8.5px] font-bold uppercase leading-tight mt-auto font-mono tracking-tighter", item.active ? "text-black/80" : "text-transparent", item.advanced ? "text-[#8DC63F]" : "")}>
                                 {item.task}
                               </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* ADVANCED TRACK COLUMN */}
                <div className="w-full lg:w-[320px] shrink-0 relative flex flex-col">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`v6-adv-data-${activeWeek}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex-1 flex flex-col items-end text-right"
                    >
                      {/* ALIGNMENT: Top container matches MAIN TRACK header height */}
                      <div className="w-full mb-0 h-[20px] flex items-center justify-end gap-2 pr-2">
                        <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-black/50">ADVANCED TRACK</span>
                        <div className="text-[16px] font-black text-[#8DC63F] leading-none mb-1 shadow-sm">*</div>
                      </div>

                      {/* GRADIENT BOX - More transparent, high visibility of background */}
                      <div className="bg-gradient-to-b from-white/70 to-white/10 border border-black/10 p-8 pt-10 rounded-[2px] flex-1 flex flex-col items-end justify-start w-full backdrop-blur-[1px] mt-4">
                        <h4 className="text-[28px] font-black uppercase text-black/80 tracking-tighter leading-[0.95] mb-4">
                          {advanced.title}
                        </h4>

                        <p className="text-[13px] leading-[1.6] text-black/60 font-medium mb-12 max-w-[240px]">
                          {advanced.description}
                        </p>

                        <div className="mt-auto">
                          <div className="text-[8px] font-mono font-bold uppercase tracking-[0.3em] text-black/30 mb-1">CURATOR_ID</div>
                          <div className="text-[14px] font-black text-black/70 font-mono italic tracking-tighter">
                            {advanced.speaker}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
             </div>

             {/* Footer Section */}
             <div className="px-12 h-[56px] border-t border-black/5 bg-white/40 flex items-center justify-between">
                <div className="flex gap-6">
                   {["ЛЕКЦИЯ", "ВОРКШОП", "КЕЙС-СТАДИ"].map(tag => (
                     <div key={tag} className="text-[9px] font-mono font-bold tracking-[0.2em] text-black/40 border-b border-black/20 border-dotted">
                       {tag}
                     </div>
                   ))}
                </div>
                <div className="text-[10px] font-mono text-black/20 uppercase tracking-[0.25em] font-bold">
                  STATUS: SYSTEM_READY_LAB
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
