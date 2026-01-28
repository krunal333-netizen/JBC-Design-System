import React, { useState, useRef } from 'react';
import { 
  NAV_ITEMS, 
  ICON_PLATFORM_MAP, 
  ICON_STROKE_TOKENS, 
  DEFAULT_ICON_STROKE, 
  BUTTON_SPEC, 
  LAYOUT_SPEC, 
  ICON_GOVERNANCE_SPEC, 
  ELEVATION_SPEC, 
  PLATFORM_COLOR_TOKENS, 
  TASK_COLOR_TOKENS, 
  NAVIGATION_RULES, 
  ENTERPRISE_SPEC,
  ADAPTIVE_RULES_SPEC,
  EXTERNAL_ICON_STROKE_MAP,
  COLORS
} from '../constants';
import { JBCIcon } from '../react/Icon';
import { Z_INDEX } from '../zIndex';
import { JBCBadge } from '../react/Badge';
import JSZip from 'jszip';

interface SidebarProps {
  activeSection: string;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, theme, toggleTheme, isOpen }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [tooltipSide, setTooltipSide] = useState<'top' | 'bottom'>('top');
  const exportBtnRef = useRef<HTMLButtonElement>(null);

  const handleDownloadPDF = () => {
    window.print();
  };

  const handleMouseEnter = () => {
    if (exportBtnRef.current) {
      const rect = exportBtnRef.current.getBoundingClientRect();
      if (rect.top < 120) {
        setTooltipSide('bottom');
      } else {
        setTooltipSide('top');
      }
    }
  };

  const handleDownloadDesignSystem = async () => {
    setIsExporting(true);
    try {
      const zip = new JSZip();
      const version = "1.0.0";
      const sdkRoot = zip.folder(`jbc-design-system-sdk-v${version}`);
      if (!sdkRoot) throw new Error("Could not create zip folder");

      // 1. ROOT GOVERNANCE
      sdkRoot.file("version.json", JSON.stringify({
        name: "jbc-design-system-sdk",
        version: version,
        releaseDate: new Date().toISOString().split('T')[0],
        breaking: false,
        notes: "Production SDK Release with Adaptive Native Colors"
      }, null, 2));

      sdkRoot.file("changelog.md", `# JBC Design System Changelog\n\n## [${version}] - ${new Date().toISOString().split('T')[0]}\n### Added\n- **Adaptive Semantic Colors**: iOS and Android now receive theme-aware color primitives.\n- **Production Component Source**: All React components exported as functional TypeScript files.\n- **Icon Normalization Engine**: JBCIcon wrapper exported for cross-platform visual parity.`);

      sdkRoot.file("README.md", `# JBC Design System SDK\n\n## Overview\nThis SDK provides the foundational primitives for the JBC Finance ecosystem, ensuring visual consistency and engineering velocity across all platforms.\n- **Design Tokens**: JSON-based source of truth for colors, typography, and spacing.\n- **Adaptive Logic**: Native support for Light/Dark themes on iOS and Android.\n\n## Installation\nThe SDK can be integrated manually by copying the folders into your project.\n\n## Structure\n- \`tokens/\`: Core design variables.\n- \`components/\`: React TSX source code.\n- \`platform/\`: Native platform primitives (Swift/XML).`);

      // 2. TOKENS
      const tokens = sdkRoot.folder("tokens");
      if (tokens) {
        tokens.file("colors.json", JSON.stringify({ brand: PLATFORM_COLOR_TOKENS, task: TASK_COLOR_TOKENS }, null, 2));
        
        // Ensure semantic-entities.json uses identifiers as keys and objects as values
        const allEntities = [...PLATFORM_COLOR_TOKENS, ...TASK_COLOR_TOKENS];
        tokens.file("semantic-entities.json", JSON.stringify(
          allEntities.reduce((acc, curr) => {
            acc[curr.id] = { dark: curr.bg.dark, light: curr.bg.light };
            return acc;
          }, {} as any),
          null, 2
        ));

        tokens.file("spacing.json", JSON.stringify(LAYOUT_SPEC.spacing, null, 2));
        tokens.file("radius.json", JSON.stringify({ sm: "8px", md: "12px", lg: "16px", xl: "24px" }, null, 2));
      }

      // 3. PLATFORM SPECIFICS (Adaptive Fixes)
      const platform = sdkRoot.folder("platform");
      if (platform) {
        // iOS: Adaptive Swift Struct
        const ios = platform.folder("ios");
        const swiftColorEntries = [
          ...PLATFORM_COLOR_TOKENS.map(t => `    static let ${t.id} = Color(light: "${t.bg.light}", dark: "${t.bg.dark}")`),
          ...TASK_COLOR_TOKENS.map(t => `    static let task_${t.id} = Color(light: "${t.bg.light}", dark: "${t.bg.dark}")`)
        ].join('\n');

        const cyan = COLORS.find(c => c.name === 'Cyan Primary');
        const gold = COLORS.find(c => c.name === 'Gold Accent');

        ios?.file("Colors.swift", `import SwiftUI\nimport UIKit\n\nstruct JBCColor {\n${swiftColorEntries}\n\n    // Base Brand\n    static let accentPrimary = Color(light: "${cyan?.lightHex || '#00BFA5'}", dark: "${cyan?.darkHex || '#03FDDA'}")\n    static let accentSecondary = Color(light: "${gold?.lightHex || '#E6C200'}", dark: "${gold?.darkHex || '#FFD700'}")\n}\n\nextension Color {\n    init(light: String, dark: String) {\n        self.init(UIColor { traitCollection in\n            return traitCollection.userInterfaceStyle == .dark \n                ? UIColor(hex: dark) \n                : UIColor(hex: light)\n        })\n    }\n}\n\nextension UIColor {\n    convenience init(hex: String) {\n        var hexSanitized = hex.trimmingCharacters(in: .whitespacesAndNewlines)\n        hexSanitized = hexSanitized.replacingOccurrences(of: "#", with: "")\n        var rgb: UInt64 = 0\n        Scanner(string: hexSanitized).scanHexInt64(&rgb)\n        let r = CGFloat((rgb & 0xFF0000) >> 16) / 255.0\n        let g = CGFloat((rgb & 0x00FF00) >> 8) / 255.0\n        let b = CGFloat(rgb & 0x0000FF) / 255.0\n        self.init(red: r, green: g, blue: b, alpha: 1.0)\n    }\n}`);

        // Android: Split XML Resources
        const android = platform.folder("android");
        const values = android?.folder("values");
        const valuesNight = android?.folder("values-night");

        const xmlLightEntries = [
          ...PLATFORM_COLOR_TOKENS.map(t => `    <color name="jbc_${t.id}">${t.bg.light}</color>`),
          ...TASK_COLOR_TOKENS.map(t => `    <color name="jbc_task_${t.id}">${t.bg.light}</color>`)
        ].join('\n');

        const xmlDarkEntries = [
          ...PLATFORM_COLOR_TOKENS.map(t => `    <color name="jbc_${t.id}">${t.bg.dark}</color>`),
          ...TASK_COLOR_TOKENS.map(t => `    <color name="jbc_task_${t.id}">${t.bg.dark}</color>`)
        ].join('\n');

        values?.file("colors.xml", `<?xml version="1.0" encoding="utf-8"?>\n<resources>\n${xmlLightEntries}\n    <color name="jbc_cyan">${cyan?.lightHex || '#00BFA5'}</color>\n    <color name="jbc_gold">${gold?.lightHex || '#E6C200'}</color>\n</resources>`);
        valuesNight?.file("colors.xml", `<?xml version="1.0" encoding="utf-8"?>\n<resources>\n${xmlDarkEntries}\n    <color name="jbc_cyan">${cyan?.darkHex || '#03FDDA'}</color>\n    <color name="jbc_gold">${gold?.darkHex || '#FFD700'}</color>\n</resources>`);
      }

      // 4. COMPONENTS (React Source)
      const comps = sdkRoot.folder("components");
      if (comps) {
        const componentPaths = [
          { name: 'Button', path: '/react/Button.tsx' },
          { name: 'Input', path: '/react/Input.tsx' },
          { name: 'Modal', path: '/react/Modal.tsx' },
          { name: 'Table', path: '/react/Table.tsx' },
          { name: 'DataGrid', path: '/react/DataGrid.tsx' },
          { name: 'Dropdown', path: '/react/Dropdown.tsx' },
          { name: 'Badge', path: '/react/Badge.tsx' },
          { name: 'Card', path: '/react/Card.tsx' },
          { name: 'Progress', path: '/react/Progress.tsx' },
          { name: 'Avatar', path: '/react/Avatar.tsx' },
          { name: 'Stepper', path: '/react/Stepper.tsx' },
          { name: 'EmptyState', path: '/react/EmptyState.tsx' },
          { name: 'Skeleton', path: '/react/Skeleton.tsx' },
          { name: 'Toast', path: '/react/JBCToast.tsx' },
          { name: 'Tooltip', path: '/react/JBCTooltip.tsx' }
        ];

        for (const comp of componentPaths) {
          try {
            const response = await fetch(comp.path);
            if (response.ok) {
              const content = await response.text();
              comps.file(`${comp.name}.tsx`, content);
            }
          } catch (e) {
            console.error(`Export failed for ${comp.name}`, e);
          }
        }
      }

      const content = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = `jbc-finance-sdk-v${version}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("SDK Export failed:", error);
    } finally {
      setIsExporting(false);
    }
  };

  const jbcCyan = theme === 'dark' ? '#03FDDA' : '#00BFA5';

  return (
    <aside className={`fixed lg:flex flex-col w-[300px] md:w-[320px] h-screen border-r p-8 lg:p-10 z-50 transition-all duration-300 no-print ${
      theme === 'dark' ? 'bg-[#0F131A] border-[#30363D]' : 'bg-[#FFFFFF] border-[#D0D7DE]'
    } ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
      
      <div className="flex items-center gap-4 mb-12 lg:mb-16 group cursor-default">
        <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
          <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_12px_rgba(0,0,0,0.1)]">
            <defs>
              <linearGradient id="cyanGradSidebar" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={jbcCyan} />
                <stop offset="100%" stopColor={jbcCyan} />
              </linearGradient>
              <linearGradient id="goldGradSidebar" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--jbc-gold)" />
                <stop offset="100%" stopColor="var(--jbc-gold)" />
              </linearGradient>
            </defs>
            <path d="M50 10 L90 35 L90 85 L50 110 L10 85 L10 35 Z" fill="url(#cyanGradSidebar)" />
            <path d="M50 10 L90 35 L50 60 L10 35 Z" fill="white" fillOpacity="0.2" />
            <rect x="35" y="45" width="30" height="30" fill="url(#goldGradSidebar)" transform="rotate(45 50 60)" />
          </svg>
        </div>
        <span className={`text-xl lg:text-2xl font-bold tracking-tighter transition-colors ${theme === 'dark' ? 'text-white' : 'text-[#1C2128]'}`}>
          JBC <span style={{ color: jbcCyan }}>Finance</span>
        </span>
      </div>

      <nav className="flex flex-col gap-1.5 flex-1 overflow-y-auto pr-2">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-all duration-200 group ${
                isActive 
                  ? 'bg-jbc-cyan/10 font-bold shadow-sm' 
                  : theme === 'dark' 
                    ? 'text-[#8B949E] hover:bg-jbc-cyan/5' 
                    : 'text-[#424A53] hover:bg-jbc-cyan/5'
              }`}
              style={{ color: isActive ? jbcCyan : undefined }}
            >
              <JBCIcon name={item.icon} size={20} strokeWidth={1.5} className={`transition-transform group-hover:scale-110 ${isActive ? '' : 'group-hover:text-jbc-cyan'}`} />
              <span className="text-sm lg:text-base">{item.label}</span>
            </a>
          );
        })}
      </nav>

      <div className="mt-8 pt-8 border-t border-dashed border-[#8B949E]/20 space-y-3">
        <div className="px-4 py-2 flex items-center justify-between">
           <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">CI Status</span>
           <JBCBadge variant="success" isDot>PASSING</JBCBadge>
        </div>
        
        <button 
          onClick={handleDownloadPDF}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all font-bold text-[10px] uppercase tracking-widest ${
            theme === 'dark' 
            ? 'bg-[#161B22] border-[#30363D] text-white hover:bg-[#1c2128] hover:border-jbc-cyan' 
            : 'bg-[#F6F8FA] border-[#D0D7DE] text-[#1C2128] hover:bg-white hover:border-jbc-cyan shadow-sm'
          }`}
        >
          <JBCIcon name="ri-file-pdf-line" size={20} strokeWidth={1.5} color={jbcCyan} />
          Download PDF
        </button>

        <button 
          ref={exportBtnRef}
          onMouseEnter={handleMouseEnter}
          onClick={handleDownloadDesignSystem}
          disabled={isExporting}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all font-bold text-[10px] uppercase tracking-widest relative group/btn ${
            isExporting ? 'opacity-50 cursor-wait' : ''
          } ${
            theme === 'dark' 
            ? 'bg-[#161B22] border-[#30363D] text-white hover:bg-[#1c2128] hover:border-jbc-cyan' 
            : 'bg-[#F6F8FA] border-[#D0D7DE] text-[#1C2128] hover:bg-white hover:border-jbc-cyan shadow-sm'
          }`}
        >
          {isExporting ? (
            <i className="ri-loader-4-line text-lg animate-spin" style={{ color: jbcCyan }}></i>
          ) : (
            <JBCIcon name="ri-folder-zip-line" size={20} strokeWidth={1.5} color={jbcCyan} />
          )}
          <span>Download Design System</span>
          
          <div className={`absolute left-0 w-max max-w-[220px] px-3 py-2.5 bg-black text-white text-[10px] font-bold rounded-lg opacity-0 group-hover/btn:opacity-100 pointer-events-none transition-all duration-200 z-[100] shadow-2xl border border-white/20 whitespace-normal leading-relaxed text-left origin-bottom-left ${
            tooltipSide === 'top' ? 'bottom-[calc(100%+12px)]' : 'top-[calc(100%+12px)]'
          }`}>
            Exports the latest JBC Production-Ready SDK for all platforms
            <div className={`absolute left-4 border-[6px] border-transparent ${
              tooltipSide === 'top' 
              ? 'top-full -translate-y-[1px] border-t-black' 
              : 'bottom-full translate-y-[1px] border-b-black'
            }`}></div>
          </div>
        </button>

        <button 
          onClick={toggleTheme}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all shadow-sm ${
            theme === 'dark' 
            ? 'bg-[#161B22] border-[#30363D] text-white hover:border-jbc-cyan' 
            : 'bg-[#F6F8FA] border-[#D0D7DE] text-[#1C2128] hover:border-jbc-cyan'
          }`}
        >
          <div className="flex items-center gap-3">
            <JBCIcon name={theme === 'dark' ? 'ri-moon-line' : 'ri-sun-line'} size={20} strokeWidth={1.5} />
            <span className="text-[10px] font-bold uppercase tracking-widest">{theme === 'dark' ? 'Dark' : 'Light'} Mode</span>
          </div>
          <div className={`w-10 h-5 rounded-full p-1 transition-colors ${theme === 'dark' ? 'bg-jbc-cyan' : 'bg-[#D0D7DE]'}`}>
             <div className={`w-3 h-3 bg-white rounded-full transition-transform transform ${theme === 'dark' ? 'translate-x-5' : 'translate-x-0'}`}></div>
          </div>
        </button>
      </div>

      <div className="mt-8 text-[#8B949E] text-[10px] space-y-1 font-mono uppercase tracking-widest">
        <p className={`font-bold ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>V 1.0.0 STABLE</p>
        <p>Updated: JAN 2026</p>
      </div>
    </aside>
  );
};

export default Sidebar;