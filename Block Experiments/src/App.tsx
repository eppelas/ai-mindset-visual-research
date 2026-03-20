import { DesktopTechUi } from './components/DesktopTechUi';
import { DesktopTechUiV2 } from './components/DesktopTechUiV2';
import { DesktopTechUiV4 } from './components/DesktopTechUiV4';
import { DesktopTechUiV5 } from './components/DesktopTechUiV5';
import { DesktopTimeline } from './components/DesktopTimeline';
import { DesktopTimelineV2 } from './components/DesktopTimelineV2';

export default function App() {
  return (
    <div className="bg-[#EAEAEA] min-h-screen py-12">
      <div className="max-w-[1340px] mx-auto px-8 mb-12 text-center">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-black/95">PROGRAM VARIANTS</h1>
        <p className="text-black/50 mt-2 font-mono text-xs uppercase tracking-[0.4em]">Integrated Variants System</p>
      </div>

      <div className="my-32">
        <h2 className="text-2xl font-black px-8 pb-8 text-black/90 uppercase tracking-tighter text-center">1. Финальный гибрид (Timeline)</h2>
        <DesktopTechUiV5 />
      </div>

      <div className="my-40 border-t border-black/10 pt-20">
        <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">2. Рефинированный Card-дизайн</h2>
        <DesktopTechUi />
      </div>

      <div className="my-40 border-t border-black/10 pt-20">
        <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">3. Чисто "инженерный" grid-дизайн</h2>
        <DesktopTechUiV4 />
      </div>

      <div className="my-32">
        <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">4. Figma-style</h2>
        <DesktopTechUiV2 />
      </div>

      <div className="my-32 border-t border-black/10 pt-32">
        <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">5. Master-Detail Timeline (ORIGINAL)</h2>
        <DesktopTimeline />
      </div>

      <div className="my-48 border-t border-black/10 pt-32">
        <h2 className="text-2xl font-black px-8 pb-8 text-[#8DC63F] uppercase tracking-tighter text-center">6. Square Master-Detail (NEW)</h2>
        <DesktopTimelineV2 />
      </div>
    </div>
  );
}
