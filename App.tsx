import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Overview from './sections/Overview';
import Typography from './sections/Typography';
import Colors from './sections/Colors';
import SemanticEntityColors from './sections/SemanticEntityColors';
import Icons from './sections/Icons';
import IconGovernance from './sections/IconGovernance';
import AutomationSystem from './sections/AutomationSystem';
import DesignSync from './sections/DesignSync';
import CIValidation from './sections/CIValidation';
import VersioningSystem from './sections/VersioningSystem';
import LayoutNavigationSystem from './sections/LayoutNavigationSystem';
import LightModeElevation from './sections/LightModeElevation';
import SelectPickerSystem from './sections/SelectPickerSystem';
import FormSystem from './sections/FormSystem';
import FormValidationSummary from './sections/FormValidationSummary';
import Components from './sections/Components';
import Avatars from './sections/Avatars';
import Steppers from './sections/Steppers';
import DataGrids from './sections/DataGrids';
import FeedbackStates from './sections/FeedbackStates';
import ToastSystem from './sections/ToastSystem';
import TooltipSystem from './sections/TooltipSystem';
import HapticSystem from './sections/HapticSystem';
import NativeParity from './sections/NativeParity';
import DesignIntelligence from './sections/DesignIntelligence';
import BreadcrumbSystem from './sections/BreadcrumbSystem';
import DividerSystem from './sections/DividerSystem';
import RTLSystem from './sections/RTLSystem';
import ErrorPages from './sections/ErrorPages';
import Accessibility from './sections/Accessibility';
import Implementation from './sections/Implementation';
import BestPractices from './sections/BestPractices';
import Responsive from './sections/Responsive';
import PlatformSDK from './sections/PlatformSDK';
import AdaptiveLayout from './sections/AdaptiveLayout';
import ButtonUsageRules from './sections/ButtonUsageRules';
import SectionHeader from './components/SectionHeader';
import { JBCToastProvider } from './react/JBCToastProvider';

const PrintCover = ({ jbcCyan }: { jbcCyan: string }) => {
  const publishDate = useMemo(() => new Date().toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }), []);
  
  return (
    <div className="hidden print:flex fixed inset-0 z-[999] bg-white flex-col items-center justify-center text-center p-20">
      <div className="w-64 h-64 mb-16">
        <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M50 10 L90 35 L90 85 L50 110 L10 85 L10 35 Z" fill={jbcCyan} />
          <path d="M50 10 L90 35 L50 60 L10 35 Z" fill="black" fillOpacity="0.1" />
          <rect x="35" y="45" width="30" height="30" fill="#FFD700" transform="rotate(45 50 60)" />
        </svg>
      </div>
      <h1 className="text-6xl font-bold tracking-tighter mb-4 text-black uppercase">JBC Finance</h1>
      <h2 className="text-3xl font-bold tracking-tight mb-12 text-[#424A53]">Design System & Brand Guide</h2>
      <div className="w-32 h-1 bg-jbc-cyan mb-12 mx-auto"></div>
      <div className="text-xl font-mono uppercase tracking-[0.2em] text-[#8B949E]">
        Version 1.0.0 Stable
      </div>
      <div className="mt-8 text-sm font-mono text-[#8B949E] uppercase">
        PUBLISHED: {publishDate}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'overview';
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id') || 'overview';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close sidebar on navigation change (mobile)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [activeSection]);

  const jbcCyan = theme === 'dark' ? '#03FDDA' : '#00BFA5';

  return (
    <JBCToastProvider>
      <div className={`flex min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0B0E14] text-[#E6EDF3]' : 'bg-[#F8F9FA] text-[#1C2128]'}`}>
        
        <PrintCover jbcCyan={jbcCyan} />

        {/* Mobile Top Header */}
        <div className={`lg:hidden fixed top-0 left-0 right-0 z-40 h-16 border-b flex items-center justify-between px-4 sm:px-6 transition-colors duration-300 no-print ${
          theme === 'dark' ? 'bg-[#0B0E14] border-[#30363D]' : 'bg-[#FFFFFF] border-[#D0D7DE]'
        }`}>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8">
              <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                <defs>
                  <linearGradient id="cyanGradMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={jbcCyan} />
                    <stop offset="100%" stopColor={jbcCyan} />
                  </linearGradient>
                  <linearGradient id="goldGradMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--jbc-gold)" />
                    <stop offset="100%" stopColor="var(--jbc-gold)" />
                  </linearGradient>
                </defs>
                <path d="M50 10 L90 35 L90 85 L50 110 L10 85 L10 35 Z" fill="url(#cyanGradMobile)" />
                <path d="M50 10 L90 35 L50 60 L10 35 Z" fill="white" fillOpacity="0.2" />
                <rect x="35" y="45" width="30" height="30" fill="url(#goldGradMobile)" transform="rotate(45 50 60)" />
              </svg>
            </div>
            <span className="font-bold tracking-tighter text-sm sm:text-base">JBC FINANCE</span>
          </div>
          <button 
            onClick={toggleSidebar}
            className={`p-2 rounded-lg transition-colors ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-black/5'}`}
            aria-label="Toggle Menu"
          >
            <i className={isSidebarOpen ? "ri-close-line text-2xl" : "ri-menu-4-fill text-2xl"}></i>
          </button>
        </div>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <Sidebar 
          activeSection={activeSection} 
          theme={theme} 
          toggleTheme={toggleTheme} 
          isOpen={isSidebarOpen} 
        />
        
        <main className="flex-1 lg:ml-[320px] p-4 sm:p-8 md:p-12 lg:p-20 relative pt-24 lg:pt-20 overflow-x-hidden">
          {/* Background Gradients */}
          <div className={`fixed top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] rounded-full blur-[100px] sm:blur-[160px] pointer-events-none -z-10 transition-all duration-700 ${theme === 'dark' ? 'bg-jbc-cyan/5 opacity-100' : 'bg-jbc-cyan/[0.08] opacity-50'}`} />
          <div className={`fixed bottom-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full blur-[80px] sm:blur-[140px] pointer-events-none -z-10 transition-all duration-700 ${theme === 'dark' ? 'bg-jbc-gold/5 opacity-100' : 'bg-jbc-gold/[0.05] opacity-40'}`} />

          {/* Hero Header */}
          <header className="mb-12 sm:mb-20 animate-in fade-in slide-in-from-top-4 duration-1000 print:hidden">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="bg-jbc-cyan text-black text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded shadow-sm transition-colors uppercase tracking-wider">v1.0</span>
              <span className={`border text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded transition-colors uppercase tracking-wider ${theme === 'dark' ? 'border-[#8B949E] text-[#8B949E]' : 'border-[#424A53] text-[#424A53]'}`}>STABLE SDK</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tighter leading-tight break-words">
              Brand & Design <span className="transition-colors duration-300" style={{ color: jbcCyan }}>Guidelines</span>
            </h1>
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed transition-colors ${theme === 'dark' ? 'text-[#8B949E]' : 'text-[#424A53]'}`}>
              A unified design language for the JBC Finance platform. Built for trust, speed, and clarity across all devices.
            </p>
          </header>

          <section id="overview" className="scroll-mt-24">
            <SectionHeader num="01" title="Brand Overview" desc={<><strong className={theme === 'dark' ? 'text-white' : 'text-[#1C2128]'}>JBC Finance</strong> combines the <strong className={theme === 'dark' ? 'text-white' : 'text-[#1C2128]'}>reliability</strong> of traditional finance with the <strong className={theme === 'dark' ? 'text-white' : 'text-[#1C2128]'}>innovation of Web3</strong>.</>} />
            <Overview theme={theme} />
          </section>

          <section id="design-intelligence" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="02" title="Design Intelligence" desc="Bridging natural language and JBC production code via Neural Studio Integration." />
            <DesignIntelligence theme={theme} />
          </section>

          <section id="typography" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="03" title="Typography System" desc="We use Plus Jakarta Sans for its geometric yet humanist qualities. Perfectly legible across all screen sizes." />
            <Typography />
          </section>

          <section id="colors" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="04" title="Color Palette" desc="Sophisticated palette with adaptive primary colors for high contrast and accessibility." />
            <Colors theme={theme} />
          </section>

          <section id="semantic-colors" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="05" title="Semantic Entity Color System" desc="Standardizing visual association for external platforms and engagement tasks." />
            <SemanticEntityColors theme={theme} />
          </section>

          <section id="icons" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="06" title="Icon Library" desc="A curated selection of Remix Icons that define the visual dialect of JBC Finance." />
            <Icons theme={theme} />
          </section>

          <section id="icon-governance" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="07" title="Governed Icon System" desc="Formal specifications for geometry, stroke tokens, and cross-platform export pipelines." />
            <IconGovernance theme={theme} />
          </section>

          <section id="automation-systems" className="scroll-mt-24 pt-16 sm:pt-20 no-print">
            <SectionHeader num="08" title="Automation & Registry" desc="Safeguarding the interface through automated normalization and centralized layer control." />
            <AutomationSystem theme={theme} />
          </section>

          <section id="design-sync" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="09" title="Governance / Design Sync" desc="Automated documentation synchronization between Figma assets and the SDK codebase." />
            <DesignSync theme={theme} />
          </section>

          <section id="ci-validation" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="10" title="Governance / CI Validation" desc="Automated adaptive color auditing for native platform exports." />
            <CIValidation theme={theme} />
          </section>

          <section id="versioning" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="11" title="Governance / Versioning" desc="Formal semantic versioning strategy for system releases and backward compatibility." />
            <VersioningSystem theme={theme} />
          </section>

          <section id="layout-nav" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="12" title="Layout & Navigation System" desc="Codified structural foundations for unified grid density, responsive container logic, and navigation patterns." />
            <LayoutNavigationSystem theme={theme} />
          </section>

          <section id="light-mode-elevation" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="13" title="Theme / Elevation (Light Mode)" desc="Introducing tinted shadow tokens for enhanced visual hierarchy on bright surfaces." />
            <LightModeElevation theme={theme} />
          </section>

          <section id="select-picker" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="14" title="Select & Picker System" desc="Standardized interface rules for dropdowns, date/time pickers, and localization selectors across all platforms." />
            <SelectPickerSystem theme={theme} />
          </section>

          <section id="forms" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="15" title="Forms & Input Systems" desc="Standardized components for binary choice and single-selection data entry." />
            <FormSystem theme={theme} />
          </section>

          <section id="validation-summary" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="16" title="Forms / Validation Summary" desc="Formalized pattern for global error aggregation in complex financial forms." />
            <FormValidationSummary theme={theme} />
          </section>

          <section id="components" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="17" title="Generic Components" desc="Core interactive elements that scale gracefully across themes." />
            <Components theme={theme} />
          </section>

          <section id="avatars" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="18" title="Avatars" desc="Standardized identity containers with presence indicators and sizing rules." />
            <Avatars theme={theme} />
          </section>

          <section id="steppers" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="19" title="Process Steppers" desc="Guided transactional flows with adaptive desktop and mobile layouts." />
            <Steppers theme={theme} />
          </section>

          <section id="data-grids" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="20" title="Advanced Data Grids" desc="Sortable, selectable, and high-density tables that collapse into card views for mobile." />
            <DataGrids theme={theme} />
          </section>

          <section id="feedback-states" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="21" title="Feedback & Empty States" desc="Handling predictive loading and blank canvases without breaking the user experience." />
            <FeedbackStates theme={theme} />
          </section>

          <section id="toasts" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="22" title="Feedback / Toasts" desc="Global feedback system for asynchronous actions and platform notifications." />
            <ToastSystem theme={theme} />
          </section>

          <section id="tooltips" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="23" title="Feedback / Tooltips" desc="Contextual help system for interactive components and terminology." />
            <TooltipSystem theme={theme} />
          </section>

          <section id="haptics" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="24" title="Haptic Semantic Mapping" desc="Cross-platform tactile feedback standards for unified sensory dialect." />
            <HapticSystem theme={theme} />
          </section>

          <section id="native-parity" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="25" title="Native Platform Parity" desc="Ensuring consistent component mappings between Web, iOS, and Android ecosystems." />
            <NativeParity theme={theme} />
          </section>

          <section id="breadcrumbs" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="26" title="Navigation / Breadcrumbs" desc="Hierarchical path indicators for deep application structures." />
            <BreadcrumbSystem theme={theme} />
          </section>

          <section id="dividers" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="27" title="Layout / Dividers" desc="Standardized visual separation between content sections." />
            <DividerSystem theme={theme} />
          </section>

          <section id="rtl-support" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="28" title="Internationalization / RTL" desc="Logical property strategies for Right-to-Left market scalability." />
            <RTLSystem theme={theme} />
          </section>

          <section id="error-pages" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="29" title="System Resilience" desc="Templates for platform errors, access control, and maintenance windows." />
            <ErrorPages theme={theme} />
          </section>

          <section id="button-usage" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="30" title="Button Role & Usage Rules" desc="Preventing visual hierarchy intent through role-based action mapping." />
            <ButtonUsageRules theme={theme} />
          </section>

          <section id="platform-sdk" className="scroll-mt-24 pt-16 sm:pt-20 no-print">
            <SectionHeader num="31" title="Platform SDK" desc="Bridging the gap between design tokens and native platform primitives." />
            <PlatformSDK theme={theme} />
          </section>

          <section id="adaptive-layout" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="32" title="Adaptive Layout Rules" desc="Formalized component behavior between desktop pointer inputs and mobile touch environments." />
            <AdaptiveLayout theme={theme} />
          </section>

          <section id="accessibility" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="33" title="Accessibility" desc="Targets WCAG 2.1 AA/AAA. Designed for all users, regardless of lighting or device." />
            <Accessibility theme={theme} />
          </section>

          <section id="implementation" className="scroll-mt-24 pt-16 sm:pt-20 no-print">
            <SectionHeader num="34" title="CSS Implementation" desc="Modern strategies using CSS variables and Tailwind utilities." />
            <Implementation />
          </section>

          <section id="best-practices" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="35" title="Best Practices" desc="Ensuring visual consistency in a multi-platform, multi-theme environment." />
            <BestPractices />
          </section>

          <section id="responsive" className="scroll-mt-24 pt-16 sm:pt-20">
            <SectionHeader num="36" title="Responsive Design" desc="Optimized for every screen, from the palm of your hand to ultra-wide displays." />
            <Responsive />
          </section>

          <footer className={`mt-20 sm:mt-32 pt-10 border-t flex flex-col md:flex-row justify-between items-center text-sm gap-4 pb-12 transition-colors duration-300 no-print ${theme === 'dark' ? 'border-[#30363D] text-[#8B949E]' : 'border-[#D0D7DE] text-[#424A53]'}`}>
            <div>&copy; 2026 JBC Finance.</div>
            <div className="flex gap-4 sm:gap-8 flex-wrap justify-center">
              <a href="#" className="hover:text-jbc-cyan transition-colors">Privacy</a>
              <a href="#" className="hover:text-jbc-cyan transition-colors">Terms</a>
              <a href="#" className="hover:text-jbc-cyan transition-colors">Docs</a>
            </div>
          </footer>
        </main>
      </div>
    </JBCToastProvider>
  );
};

export default App;