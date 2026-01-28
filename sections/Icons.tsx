import React, { useState, useEffect } from 'react';
import { ICON_CATEGORIES, ICON_STYLES, ICON_SIZES, ICON_LIBRARY_VERSION, ICON_STROKE_TOKENS, DEFAULT_ICON_STROKE } from '../constants';
import { GoogleGenAI } from "@google/genai";
import { JBCIcon } from '../react/Icon';

interface IconsProps {
  theme?: 'light' | 'dark';
}

const Icons: React.FC<IconsProps> = ({ theme = 'dark' }) => {
  const [selectedStyle, setSelectedStyle] = useState('outline');
  const [selectedSize, setSelectedSize] = useState<16 | 20 | 24 | 32 | 48>(32);
  const [selectedStroke, setSelectedStroke] = useState(DEFAULT_ICON_STROKE);
  const [useGradient, setUseGradient] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [activeTab, setActiveTab] = useState<'brand' | 'utilities'>('brand');
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [generatedIcon, setGeneratedIcon] = useState<string | null>(null);

  // Initialize from persistence and sync token
  useEffect(() => {
    const savedStroke = localStorage.getItem('jbc-selected-stroke');
    if (savedStroke) {
      const val = parseFloat(savedStroke);
      setSelectedStroke(val);
      document.documentElement.style.setProperty('--jbc-icon-stroke', savedStroke);
    } else {
      document.documentElement.style.setProperty('--jbc-icon-stroke', DEFAULT_ICON_STROKE.toString());
    }
  }, []);

  const updateStrokeToken = (val: number) => {
    setSelectedStroke(val);
    document.documentElement.style.setProperty('--jbc-icon-stroke', val.toString());
    localStorage.setItem('jbc-selected-stroke', val.toString());
  };

  const handleDownloadLibrary = () => {
    const libraryExport = {
      version: ICON_LIBRARY_VERSION,
      timestamp: new Date().toISOString(),
      categories: ICON_CATEGORIES,
      styles: ICON_STYLES,
      tokens: {
        sizes: ICON_SIZES,
        strokes: ICON_STROKE_TOKENS,
        defaultStroke: DEFAULT_ICON_STROKE,
        motion: "150ms-300ms ease"
      }
    };
    const blob = new Blob([JSON.stringify(libraryExport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `jbc-icon-library-v${ICON_LIBRARY_VERSION}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const synthesizeIcon = async () => {
    if (!prompt) return;
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{
            text: `Professional, geometric, minimalist vector icon for: "${prompt}". 
            Style: ${selectedStyle} stroke (${selectedStroke}px), clean lines, consistent with JBC Finance design language. 
            Aspect Ratio: 1:1. 
            Presentation: Solid white line art on deep black background. No text.`,
          }],
        },
      });
      const part = response.candidates[0].content.parts.find(p => p.inlineData);
      if (part) setGeneratedIcon(`data:image/png;base64,${part.inlineData.data}`);
    } catch (e) {
      console.error(e);
    } finally {
      setIsGenerating(false);
    }
  };

  const brandActionColor = theme === 'dark' ? 'bg-jbc-cyan' : 'bg-[#00BFA5]';
  const brandActionText = 'text-black';

  return (
    <div className="space-y-10">
      {/* Navigation Tabs */}
      <div className="flex border-b border-black/10 dark:border-white/10 no-print">
        <button 
          onClick={() => setActiveTab('brand')}
          className={`px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all relative ${activeTab === 'brand' ? 'text-jbc-cyan' : 'opacity-40 hover:opacity-100'}`}
        >
          Brand Library
          {activeTab === 'brand' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-jbc-cyan rounded-t-full"></div>}
        </button>
        <button 
          onClick={() => setActiveTab('utilities')}
          className={`px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all relative ${activeTab === 'utilities' ? 'text-jbc-cyan' : 'opacity-40 hover:opacity-100'}`}
        >
          Utilities (External)
          {activeTab === 'utilities' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-jbc-cyan rounded-t-full"></div>}
        </button>
      </div>

      {activeTab === 'brand' ? (
        <>
          {/* Controls & Customization */}
          <div className={`border rounded-2xl p-6 shadow-sm sticky top-20 z-30 backdrop-blur-md transition-colors ${theme === 'dark' ? 'bg-[#161B22]/90 border-[#30363D]' : 'bg-white/90 border-black/10'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
              <div>
                <label className={`text-[10px] font-bold uppercase tracking-widest mb-2 block ${theme === 'dark' ? 'text-[#8B949E]' : 'text-[#57606A]'}`}>Icon Style</label>
                <div className="flex flex-wrap gap-2">
                  {ICON_STYLES.map(style => (
                    <button 
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border ${
                        selectedStyle === style.id 
                        ? `${brandActionColor} border-transparent ${brandActionText}` 
                        : 'bg-transparent border-black/10 dark:border-white/10 hover:border-jbc-cyan/40'
                      }`}
                    >
                      {style.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={`text-[10px] font-bold uppercase tracking-widest mb-2 block ${theme === 'dark' ? 'text-[#8B949E]' : 'text-[#57606A]'}`}>Scale (PX)</label>
                <div className="flex gap-2">
                  {ICON_SIZES.map(size => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size as 16 | 20 | 24 | 32 | 48)}
                      className={`w-8 h-8 rounded-lg text-[10px] font-bold transition-all border flex items-center justify-center ${
                        selectedSize === size 
                        ? `${brandActionColor} border-transparent ${brandActionText}` 
                        : 'bg-transparent border-black/10 dark:border-white/10'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={`text-[10px] font-bold uppercase tracking-widest mb-2 block ${theme === 'dark' ? 'text-[#8B949E]' : 'text-[#57606A]'}`}>Stroke Token (PX)</label>
                <div className="flex gap-2">
                  {ICON_STROKE_TOKENS.map(stroke => (
                    <button 
                      key={stroke}
                      onClick={() => updateStrokeToken(stroke)}
                      className={`px-2 h-8 rounded-lg text-[10px] font-bold transition-all border flex items-center justify-center ${
                        selectedStroke === stroke 
                        ? `${brandActionColor} border-transparent ${brandActionText}` 
                        : 'bg-transparent border-black/10 dark:border-white/10'
                      }`}
                    >
                      {stroke}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex gap-4 mb-2">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={useGradient} 
                      onChange={(e) => setUseGradient(e.target.checked)}
                      className={`w-4 h-4 rounded focus:ring-jbc-cyan ${theme === 'dark' ? 'bg-[#0B0E14] border-jbc-cyan' : 'bg-[#F6F8FA] border-black/20'}`}
                    />
                    <span className={`text-[10px] font-bold uppercase tracking-widest opacity-70 group-hover:opacity-100 ${theme === 'dark' ? 'text-white' : 'text-[#1C2128]'}`}>Gradient</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={animate} 
                      onChange={(e) => setAnimate(e.target.checked)}
                      className={`w-4 h-4 rounded focus:ring-jbc-cyan ${theme === 'dark' ? 'bg-[#0B0E14] border-jbc-cyan' : 'bg-[#F6F8FA] border-black/20'}`}
                    />
                    <span className={`text-[10px] font-bold uppercase tracking-widest opacity-70 group-hover:opacity-100 ${theme === 'dark' ? 'text-white' : 'text-[#1C2128]'}`}>Animate</span>
                  </label>
                </div>
                <button 
                  onClick={handleDownloadLibrary}
                  className={`w-full ${brandActionColor} ${brandActionText} font-bold py-3 rounded-xl shadow-lg transition-all text-xs uppercase tracking-widest flex items-center justify-center gap-2`}
                >
                  <i className="ri-download-cloud-2-line"></i> Download Package
                </button>
              </div>
            </div>
          </div>

          {/* Synthesizer Tool */}
          <div className={`border rounded-2xl p-8 relative overflow-hidden group ${theme === 'dark' ? 'bg-gradient-to-br from-jbc-cyan/5 to-jbc-gold/5 border-jbc-cyan/20' : 'bg-gradient-to-br from-[#00BFA5]/5 to-jbc-gold/5 border-[#00BFA5]/20'}`}>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#1C2128]'}`}>Icon Synthesizer</h3>
                <p className={`text-sm opacity-70 mb-6 ${theme === 'dark' ? 'text-[#8B949E]' : 'text-[#57606A]'}`}>Generate consistent JBC-style icons using AI for future ecosystem expansion.</p>
                <div className="flex gap-2">
                  <input 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe new icon (e.g., 'NFT Bridge')..." 
                    className={`flex-1 border rounded-xl px-4 py-3 text-sm focus:outline-none transition-all ${theme === 'dark' ? 'bg-white/5 border-white/10 focus:border-jbc-cyan' : 'bg-black/5 border-black/10 focus:border-[#00BFA5]'}`}
                  />
                  <button 
                    onClick={synthesizeIcon}
                    disabled={isGenerating || !prompt}
                    className={`px-6 ${brandActionColor} ${brandActionText} font-bold rounded-xl disabled:opacity-50 hover:scale-105 transition-transform`}
                  >
                    {isGenerating ? <i className="ri-loader-4-line animate-spin"></i> : 'Generate'}
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className={`w-24 h-24 border rounded-2xl flex items-center justify-center overflow-hidden ${theme === 'dark' ? 'bg-black/40 border-white/10' : 'bg-black/5 border-black/10'}`}>
                  {generatedIcon ? <img src={generatedIcon} className="w-16 h-16" /> : <i className="ri-magic-line text-2xl opacity-20"></i>}
                </div>
              </div>
            </div>
          </div>

          {/* Library Display */}
          <div className="space-y-16">
            {ICON_CATEGORIES.map(category => (
              <div key={category.category}>
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#8B949E]">{category.category}</h3>
                  <div className="h-px flex-1 bg-black/5 dark:bg-white/5"></div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {category.icons.map(icon => (
                    <div key={icon.name} className={`flex flex-col items-center p-6 border rounded-2xl transition-all group cursor-default ${theme === 'dark' ? 'bg-[#161B22] border-[#30363D] hover:border-jbc-cyan' : 'bg-white border-black/10 hover:border-[#00BFA5]'}`}>
                      <div className="mb-4">
                        <JBCIcon 
                          name={icon.class}
                          size={selectedSize}
                          variant={useGradient ? 'gradient' : (selectedStyle as any)}
                          animate={animate ? 'fade' : false}
                          className="transition-all duration-300"
                        />
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider mb-1 opacity-80 ${theme === 'dark' ? 'text-white' : 'text-[#1C2128]'}`}>{icon.name}</span>
                      <span className="text-[8px] font-mono opacity-40">{icon.class}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* External Utilities Section */
        <div className="space-y-12 animate-in fade-in duration-500">
          <div className={`p-8 rounded-2xl border ${theme === 'dark' ? 'bg-jbc-cyan/5 border-jbc-cyan/20' : 'bg-jbc-cyan/5 border-jbc-cyan/10'}`}>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <i className="ri-tools-line text-jbc-gold"></i> Utility Icon Normalization
            </h3>
            <p className="text-sm opacity-70 max-w-2xl leading-relaxed">
              External libraries (Lucide, Tabler, Phosphor) are supported for UI utilities only. The JBC wrapper automatically normalizes their stroke weights and geometry to ensure brand parity. <strong>External icons must never replace JBC brand icons.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['lucide', 'tabler', 'phosphor'].map((source) => (
              <div key={source} className="space-y-6">
                <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-jbc-cyan">{source} Library</h4>
                  <JBCIcon source={source as any} name="chevron-right" size={20} />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {['close', 'chevron-right', 'menu', 'search', 'info', 'arrow-left', 'plus', 'bell'].map(name => (
                    <div key={name} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-transparent hover:border-jbc-cyan/20 transition-all">
                      <JBCIcon source={source as any} name={name} size={selectedSize} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-12 border-t border-black/10 dark:border-white/10">
             <h4 className="text-lg font-bold mb-6">Figma Integration</h4>
             <div className={`p-6 rounded-2xl border font-mono text-xs ${theme === 'dark' ? 'bg-black/40 border-white/5' : 'bg-black/5 border-black/10'}`}>
                <div className="text-jbc-cyan mb-2">Icons / External (Normalized)</div>
                <div className="pl-4 opacity-40">├── Lucide_Utilities</div>
                <div className="pl-4 opacity-40">├── Tabler_Utilities</div>
                <div className="pl-4 opacity-40">└── Phosphor_Utilities</div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Icons;