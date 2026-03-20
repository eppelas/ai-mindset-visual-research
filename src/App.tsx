import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import WotyPage from './components/WotyPage';
import DotPage from './components/DotPage';
import AsciiPage from './components/AsciiPage';
import ReportPage from './components/ReportPage';
import ConsultingPage from './components/ConsultingPage';
import OrganicJunglePage from './components/OrganicJunglePage';
import ZinePage from './components/ZinePage';
import CloudPage from './components/CloudPage';
import DeltaPage from './components/DeltaPage';
import ReceiptPage from './components/ReceiptPage';
import RetroOsPage from './components/RetroOsPage';
import EmergencePage from './components/EmergencePage';
import GlitchSplitPage from './components/GlitchSplitPage';
import LiquidDistortionPage from './components/LiquidDistortionPage';
import NeonBotanicalPage from './components/NeonBotanicalPage';
import SwissBrutalistPage from './components/SwissBrutalistPage';
import TypographicPosterPage from './components/TypographicPosterPage';
import InkBlotPage from './components/InkBlotPage';
import GalleryMinimalPage from './components/GalleryMinimalPage';
import CyberMotorsportPage from './components/CyberMotorsportPage';
import DraggableArtifactsPage from './components/DraggableArtifactsPage';
import FlowerTypographyPage from './components/FlowerTypographyPage';
import AsciiGlassesPage from './components/AsciiGlassesPage';
import HandDrawnMapPage from './components/HandDrawnMapPage';
import IndustrialStudioPage from './components/IndustrialStudioPage';
import BlueVibePage from './components/BlueVibePage';
import KnitGroteskPage from './components/KnitGroteskPage';
import DiagonalGridPage from './components/DiagonalGridPage';
import DeepGlitchPage from './components/DeepGlitchPage';
import GeometricBrutalistPage from './components/GeometricBrutalistPage';
import CarDashboardPage from './components/CarDashboardPage';
import SwissInternationalPage from './components/SwissInternationalPage';
import ModernSerifPage from './components/ModernSerifPage';
import ExperimentalGridPage from './components/ExperimentalGridPage';
import SwissKineticPage from './components/SwissKineticPage';
import BoldDataPage from './components/BoldDataPage';
import VentionStylePage from './components/VentionStylePage';
import AfterimagePage from './components/AfterimagePage';
import GrittyCollagePage from './components/GrittyCollagePage';
import BrutalistScribblePage from './components/BrutalistScribblePage';
import PlayfulPortfolioPage from './components/PlayfulPortfolioPage';
import EditorialPortfolioPage from './components/EditorialPortfolioPage';
import SwissIdentityPage from './components/SwissIdentityPage';
import BoldPlayfulPage from './components/BoldPlayfulPage';
import BoldBrutalistPage from './components/BoldBrutalistPage';
import BlueEditorialPage from './components/BlueEditorialPage';
import FutureSystemPage from './components/FutureSystemPage';
import NeonMinimalPage from './components/NeonMinimalPage';
import BeigeTypoPage from './components/BeigeTypoPage';
import DeriveMapPage from './components/DeriveMapPage';
import SummitZ8Page from './components/SummitZ8Page';
import BlackOnBlackPage from './components/BlackOnBlackPage';
import PixelMusicForumPage from './components/PixelMusicForumPage';
import ProgrammableBitcoinPage from './components/ProgrammableBitcoinPage';
import GreyPortfolioPage from './components/GreyPortfolioPage';
import AiMindsetPage from './components/AiMindsetPage';
import DougAlvesStylePage from './components/DougAlvesStylePage';
import AbstractTypographyPage from './components/AbstractTypographyPage';
import TannerStylePage from './components/TannerStylePage';
import MinimalShapingPage from './components/MinimalShapingPage';
import KampongStylePage from './components/KampongStylePage';
import GimzStylePage from './components/GimzStylePage';
import FlammaStylePage from './components/FlammaStylePage';
import NonObjectivePage from './components/NonObjectivePage';
import InlocoStylePage from './components/InlocoStylePage';
import PaperCutoutPage from './components/PaperCutoutPage';
import ResourceCoffeePage from './components/ResourceCoffeePage';
import MentalHealthFilmPage from './components/MentalHealthFilmPage';
import WavelengthDataPage from './components/WavelengthDataPage';
import DataArchPage from './components/DataArchPage';
import NeuralNetworkPage from './components/NeuralNetworkPage';
import TemporaryStudioPage from './components/TemporaryStudioPage';
import StudioArchivePage from './components/StudioArchivePage';
import AiMindsetTemporaryPage from './components/AiMindsetTemporaryPage';
import AiMindsetArchivePage from './components/AiMindsetArchivePage';
import AiMindsetTapePage from './components/AiMindsetTapePage';
import AiMindsetPublicPage from './components/AiMindsetPublicPage';
import AiMindsetEditorialPage from './components/AiMindsetEditorialPage';
import AiMindsetObysPage from './components/AiMindsetObysPage';
import AiMindsetMinimalPage from './components/AiMindsetMinimalPage';
import AiMindsetRectangularPage from './components/AiMindsetRectangularPage';
import AiMindsetYellowPage from './components/AiMindsetYellowPage';
import AiMindsetRedPage from './components/AiMindsetRedPage';
import AiMindsetCameraPage from './components/AiMindsetCameraPage';
import AiMindsetLensPage from './components/AiMindsetLensPage';
import AiMindsetAudioPage from './components/AiMindsetAudioPage';
import AiMindsetTanPage from './components/AiMindsetTanPage';
import AiMindsetChronakisPage from './components/AiMindsetChronakisPage';
import AiMindsetTypographyPage from './components/AiMindsetTypographyPage';
import AiMindsetSwissPage from './components/AiMindsetSwissPage';
import AiMindsetKarolinePage from './components/AiMindsetKarolinePage';
import AiMindsetKarolineRuPage from './components/AiMindsetKarolineRuPage';
import AiMindsetWireframePage from './components/AiMindsetWireframePage';
import AiMindsetGradientPage from './components/AiMindsetGradientPage';
import AiMindsetCleanEditorialPage from './components/AiMindsetCleanEditorialPage';
import AiMindsetPosRuPage from './components/AiMindsetPosRuPage';
import AiMindsetObysDarkPage from './components/AiMindsetObysDarkPage';
import AiMindsetRKDOPage from './components/AiMindsetRKDOPage';
import AiMindsetOrangeSwissPage from './components/AiMindsetOrangeSwissPage';
import AiMindsetLavenderFlowPage from './components/AiMindsetLavenderFlowPage';
import AiMindsetJamuPage from './components/AiMindsetJamuPage';
import AiMindsetSwissLinesPage from './components/AiMindsetSwissLinesPage';
import AiMindsetTypeChairsPage from './components/AiMindsetTypeChairsPage';
import AiMindsetClockGridPage from './components/AiMindsetClockGridPage';
import AiMindsetElephantPathPage from './components/AiMindsetElephantPathPage';
import AiMindsetStrategyPage from './components/AiMindsetStrategyPage';
import AiMindsetYellowLabPage from './components/AiMindsetYellowLabPage';
import AiMindsetDarkOrangePage from './components/AiMindsetDarkOrangePage';
import AiMindsetLabPage from './components/AiMindsetLabPage';
import AiMindsetManifestPage from './components/AiMindsetManifestPage';
import AiMindsetBurgundyPage from './components/AiMindsetBurgundyPage';
import AiMindsetMinimalRuPage from './components/AiMindsetMinimalRu/AiMindsetMinimalRuPage';
import LabW26Page from './sources/1/LabW26Page';
import SpringLabW26Page from './sources/1/SpringLabW26Page';
import MotherlandPage from './sources/1/MotherlandPage';

type LocationState = {
  pageIndex: number;
  showIndex: boolean;
};

export default function App() {
  const pages = [
    <LabW26Page key="labw26" />,
    <SpringLabW26Page key="springlabw26" />,
    <MotherlandPage key="motherland" />,
    <WotyPage key="woty" />,
    <DotPage key="dot" />,
    <AsciiPage key="ascii" />,
    <ReportPage key="report" />,
    <ConsultingPage key="consulting" />,
    <OrganicJunglePage key="organicjungle" />,
    <ZinePage key="zine" />,
    <CloudPage key="cloud" />,
    <DeltaPage key="delta" />,
    <ReceiptPage key="receipt" />,
    <RetroOsPage key="retroos" />,
    <EmergencePage key="emergence" />,
    <GlitchSplitPage key="glitchsplit" />,
    <LiquidDistortionPage key="liquiddistortion" />,
    <NeonBotanicalPage key="neonbotanical" />,
    <SwissBrutalistPage key="swissbrutalist" />,
    <TypographicPosterPage key="typographicposter" />,
    <InkBlotPage key="inkblot" />,
    <GalleryMinimalPage key="galleryminimal" />,
    <CyberMotorsportPage key="cybermotorsport" />,
    <DraggableArtifactsPage key="draggableartifacts" />,
    <FlowerTypographyPage key="flowertypography" />,
    <AsciiGlassesPage key="asciiglasses" />,
    <HandDrawnMapPage key="handdrawnmap" />,
    <IndustrialStudioPage key="industrialstudio" />,
    <BlueVibePage key="bluevibe" />,
    <KnitGroteskPage key="knitgrotesk" />,
    <DiagonalGridPage key="diagonalgrid" />,
    <DeepGlitchPage key="deepglitch" />,
    <GeometricBrutalistPage key="geometricbrutalist" />,
    <CarDashboardPage key="cardashboard" />,
    <SwissInternationalPage key="swissinternational" />,
    <ModernSerifPage key="modernserif" />,
    <ExperimentalGridPage key="experimentalgrid" />,
    <SwissKineticPage key="swisskinetic" />,
    <BoldDataPage key="bolddata" />,
    <VentionStylePage key="ventionstyle" />,
    <AfterimagePage key="afterimage" />,
    <GrittyCollagePage key="grittycollage" />,
    <BrutalistScribblePage key="brutalistscribble" />,
    <PlayfulPortfolioPage key="playfulportfolio" />,
    <EditorialPortfolioPage key="editorialportfolio" />,
    <SwissIdentityPage key="swissidentity" />,
    <BoldPlayfulPage key="boldplayful" />,
    <BoldBrutalistPage key="boldbrutalist" />,
    <BlueEditorialPage key="blueeditorial" />,
    <FutureSystemPage key="futuresystem" />,
    <NeonMinimalPage key="neonminimal" />,
    <BeigeTypoPage key="beigetypo" />,
    <DeriveMapPage key="derivemap" />,
    <SummitZ8Page key="summitz8" />,
    <BlackOnBlackPage key="blackonblack" />,
    <PixelMusicForumPage key="pixelmusicforum" />,
    <ProgrammableBitcoinPage key="programmablebitcoin" />,
    <GreyPortfolioPage key="greyportfolio" />,
    <AiMindsetPage key="aimindset" />,
    <DougAlvesStylePage key="dougalvesstyle" />,
    <AbstractTypographyPage key="abstracttypography" />,
    <TannerStylePage key="tannerstyle" />,
    <MinimalShapingPage key="minimalshaping" />,
    <KampongStylePage key="kampongstyle" />,
    <GimzStylePage key="gimzstyle" />,
    <FlammaStylePage key="flammastyle" />,
    <NonObjectivePage key="nonobjective" />,
    <InlocoStylePage key="inlocostyle" />,
    <PaperCutoutPage key="papercutout" />,
    <ResourceCoffeePage key="resourcecoffee" />,
    <MentalHealthFilmPage key="mentalhealthfilm" />,
    <WavelengthDataPage key="wavelengthdata" />,
    <DataArchPage key="dataarch" />,
    <NeuralNetworkPage key="neuralnetwork" />,
    <TemporaryStudioPage key="temporarystudio" />,
    <StudioArchivePage key="studioarchive" />,
    <AiMindsetTemporaryPage key="aimindsettemporary" />,
    <AiMindsetArchivePage key="aimindsetarchive" />,
    <AiMindsetTapePage key="aimindsettape" />,
    <AiMindsetPublicPage key="aimindsetpublic" />,
    <AiMindsetEditorialPage key="aimindseteditorial" />,
    <AiMindsetObysPage key="aimindsetobys" />,
    <AiMindsetMinimalPage key="aimindsetminimal" />,
    <AiMindsetRectangularPage key="aimindsetrectangular" />,
    <AiMindsetYellowPage key="aimindsetyellow" />,
    <AiMindsetRedPage key="aimindsetred" />,
    <AiMindsetCameraPage key="aimindsetcamera" />,
    <AiMindsetLensPage key="aimindsetlens" />,
    <AiMindsetAudioPage key="aimindsetaudio" />,
    <AiMindsetTanPage key="aimindsettan" />,
    <AiMindsetChronakisPage key="aimindsetchronakis" />,
    <AiMindsetTypographyPage key="aimindsettypography" />,
    <AiMindsetSwissPage key="aimindsetswiss" />,
    <AiMindsetKarolinePage key="aimindsetkaroline" />,
    <AiMindsetKarolineRuPage key="aimindsetkarolineru" />,
    <AiMindsetWireframePage key="aimindsetwireframe" />,
    <AiMindsetGradientPage key="aimindsetgradient" />,
    <AiMindsetCleanEditorialPage key="aimindsetcleaneditorial" />,
    <AiMindsetPosRuPage key="aimindsetposru" />,
    <AiMindsetObysDarkPage key="aimindsetobysdark" />,
    <AiMindsetRKDOPage key="aimindsetrkdo" />,
    <AiMindsetOrangeSwissPage key="aimindsetorangeswiss" />,
    <AiMindsetLavenderFlowPage key="aimindsetlavenderflow" />,
    <AiMindsetJamuPage key="aimindsetjamu" />,
    <AiMindsetSwissLinesPage key="aimindsetswisslines" />,
    <AiMindsetTypeChairsPage key="aimindsettypechairs" />,
    <AiMindsetClockGridPage key="aimindsetclockgrid" />,
    <AiMindsetElephantPathPage key="aimindsetelephantpath" />,
    <AiMindsetStrategyPage key="aimindsetstrategy" />,
    <AiMindsetYellowLabPage key="aimindsetyellowlab" />,
    <AiMindsetDarkOrangePage key="aimindsetdarkorange" />,
    <AiMindsetLabPage key="aimindsetlab" />,
    <AiMindsetMinimalRuPage key="aimindsetminimalru" />,
    <AiMindsetManifestPage key="aimindsetmanifest" />,
    <AiMindsetBurgundyPage key="aimindsetburgundy" />
  ];
  const parseLocationState = (): LocationState => {
    if (typeof window === 'undefined') {
      return { pageIndex: 0, showIndex: false };
    }

    const params = new URLSearchParams(window.location.search);
    const styleParam = Number.parseInt(params.get('style') ?? '', 10);
    const safePageIndex =
      Number.isFinite(styleParam) && styleParam >= 1 && styleParam <= pages.length
        ? styleParam - 1
        : 0;

    return {
      pageIndex: safePageIndex,
      showIndex: params.get('index') === '1' || window.location.hash === '#index',
    };
  };

  const buildAppUrl = (nextPageIndex: number, nextShowIndex: boolean) => {
    if (typeof window === 'undefined') return '/';
    const url = new URL(window.location.href);

    if (nextShowIndex) {
      url.searchParams.delete('style');
      url.searchParams.set('index', '1');
      url.hash = '';
    } else {
      url.searchParams.delete('index');
      url.searchParams.set('style', String(nextPageIndex + 1));
      if (url.hash === '#index') url.hash = '';
    }

    return `${url.pathname}${url.search}${url.hash}`;
  };

  const initialLocationState = parseLocationState();
  const [pageIndex, setPageIndex] = useState(initialLocationState.pageIndex);
  const [showIndex, setShowIndex] = useState(initialLocationState.showIndex);
  const currentPageNumber = pageIndex + 1;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setPageIndex((prev) => (prev + 1) % pages.length);
      } else if (e.key === 'ArrowLeft') {
        setPageIndex((prev) => (prev - 1 + pages.length) % pages.length);
      } else if (e.key.toLowerCase() === 'i') {
        setShowIndex((prev) => !prev);
      } else if (e.key === 'Escape') {
        setShowIndex(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pages.length]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.history.replaceState({}, '', buildAppUrl(pageIndex, showIndex));
  }, [pageIndex, showIndex]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handlePopState = () => {
      const nextState = parseLocationState();
      setPageIndex(nextState.pageIndex);
      setShowIndex(nextState.showIndex);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [pages.length]);

  return (
    <div className="relative min-h-screen">
      {pages[pageIndex]}

      {!showIndex && (
        <div className="fixed left-4 top-4 z-[190] flex items-center gap-2">
          <a
            href={buildAppUrl(pageIndex, true)}
            onClick={(event) => {
              event.preventDefault();
              setShowIndex(true);
            }}
            className="rounded-full border border-black/15 bg-white/88 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-black shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-md transition hover:bg-white"
          >
            Index
          </a>
          <a
            href={buildAppUrl(pageIndex, false)}
            onClick={(event) => event.preventDefault()}
            className="rounded-full border border-black/15 bg-white/88 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-black shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-md"
            title={`Style ${currentPageNumber}`}
          >
            {currentPageNumber}
          </a>
        </div>
      )}

      {showIndex && (
        <div className="fixed inset-0 z-[200] overflow-y-auto bg-white">
          <div className="mx-auto max-w-7xl p-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-medium tracking-tight text-black">Index</h2>
              <a
                href={buildAppUrl(pageIndex, false)}
                onClick={(event) => {
                  event.preventDefault();
                  setShowIndex(false);
                }}
                className="rounded-full p-2 text-black transition-colors hover:bg-black/5"
              >
                <X size={32} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {pages.map((_, index) => (
                <a
                  key={index}
                  href={buildAppUrl(index, false)}
                  onClick={(event) => {
                    event.preventDefault();
                    setPageIndex(index);
                    setShowIndex(false);
                  }}
                  className={`aspect-video rounded flex items-center justify-center text-sm font-mono transition-colors ${
                    pageIndex === index
                      ? 'bg-black text-white'
                      : 'bg-black/5 text-black hover:bg-black/10'
                  }`}
                >
                  {index + 1}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
