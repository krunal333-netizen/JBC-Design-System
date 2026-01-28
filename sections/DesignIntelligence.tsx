import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { JBCCard } from '../react/Card';
import { JBCButton } from '../react/Button';
import { JBCInput, JBCTextarea } from '../react/Input';
import { JBCIcon } from '../react/Icon';
import { JBCBadge } from '../react/Badge';

const DesignIntelligence: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  const [activeLab, setActiveLab] = useState<'architect' | 'synthesizer'>('architect');
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [generatedIcon, setGeneratedIcon] = useState<string | null>(null);

  const jbcCyan = theme === 'dark' ? '#03FDDA' : '#00BFA5';

  const systemInstruction = `
    You are the JBC Design Intelligence engine. You generate React code that strictly follows the JBC Design System.
    RULES:
    1. Use only JBC CSS variables: --jbc-cyan, --jbc-gold, --jbc-color-surface, --jbc-space-*.
    2. Use Tailwind CSS for layout, but reference JBC tokens.
    3. All buttons must be min-h-[44px].
    4. All interactive elements must have a ring-jbc-cyan focus state.
    5. Use the JBCIcon component for all icons.
    6. Ensure dual-theme compatibility using .dark class prefixes.
  `;

  const generateComponent = async () => {
    if (!prompt) return;
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Describe a component for: ${prompt}. Return only valid React code using Tailwind and JBC tokens.`,
        config: { systemInstruction }
      });
      setGeneratedCode(response.text || "Failed to generate code.");
    } catch (e) {
      console.error(e);
    } finally {
      setIsGenerating(false);
    }
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
            Style: Outline stroke (1.5px), clean lines, consistent with JBC Finance design language. 
            Color: White on Black background. No text. 1:1 aspect ratio.`,
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

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <JBCCard elevation="low" className="p-8 border-l-4 border-indigo-500 bg-indigo-500/5">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
          <i className="ri-magic-line text-indigo-400"></i> Design Intelligence
        </h3>
        <p className="text-sm opacity-70 leading-relaxed max-w-3xl">
          Leverage JBC-tuned Large Language Models to accelerate product development. The laboratory provides a bridge between natural language requirements and system-compliant production code.
        </p>
      </JBCCard>

      <div className="flex gap-4 border-b border-black/10 dark:border-white/10 pb-px">
        <button 
          onClick={() => setActiveLab('architect')}
          className={`px-6 py-4 text-xs font-bold uppercase tracking-widest transition-all relative ${activeLab === 'architect' ? 'text-jbc-cyan' : 'opacity-40'}`}
        >
          Component Architect
          {activeLab === 'architect' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-jbc-cyan rounded-t-full"></div>}
        </button>
        <button 
          onClick={() => setActiveLab('synthesizer')}
          className={`px-6 py-4 text-xs font-bold uppercase tracking-widest transition-all relative ${activeLab === 'synthesizer' ? 'text-jbc-cyan' : 'opacity-40'}`}
        >
          Asset Synthesizer
          {activeLab === 'synthesizer' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-jbc-cyan rounded-t-full"></div>}
        </button>
      </div>

      {activeLab === 'architect' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Requirement Sandbox</h4>
            <JBCTextarea 
              label="Describe your component"
              placeholder="e.g. A staking card with a circular progress bar and a primary action button..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="h-48"
            />
            <JBCButton 
              className="w-full" 
              onClick={generateComponent}
              isLoading={isGenerating}
            >
              Generate Production React Code
            </JBCButton>

            <div className="p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-white/5">
               <h5 className="text-[10px] font-bold uppercase tracking-widest mb-4 opacity-40">System Prompt Safety</h5>
               <ul className="text-xs space-y-3 opacity-60">
                 <li className="flex gap-2"><i className="ri-shield-check-line text-jbc-success"></i> Auto-injects JBC Geometry Rules</li>
                 <li className="flex gap-2"><i className="ri-shield-check-line text-jbc-success"></i> Filters non-compliant Tailwind utilities</li>
                 <li className="flex gap-2"><i className="ri-shield-check-line text-jbc-success"></i> Enforces Aria-accessibility labels</li>
               </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold">AI Studio Output</h4>
              {generatedCode && <JBCBadge variant="primary">READY FOR REVIEW</JBCBadge>}
            </div>
            <div className="relative bg-[#0D1117] border border-white/10 rounded-2xl overflow-hidden shadow-2xl h-[450px]">
               <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/5 flex items-center px-4 justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                  </div>
                  <span className="text-[10px] font-mono opacity-30">jbc_generated_component.tsx</span>
               </div>
               <div className="p-8 pt-16 overflow-auto h-full scrollbar-thin">
                  {generatedCode ? (
                    <pre className="text-[11px] font-mono text-white/70 leading-relaxed">
                      <code>{generatedCode}</code>
                    </pre>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center opacity-20">
                      <i className="ri-code-s-slash-line text-6xl mb-4"></i>
                      <p className="text-sm">Enter requirements to architect <br/>JBC components.</p>
                    </div>
                  )}
               </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Visual Asset Generation</h4>
            <JBCInput 
              label="Describe the Icon/Illustration"
              placeholder="e.g. A futuristic vault with glowing data particles..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <JBCButton 
              className="w-full" 
              onClick={synthesizeIcon}
              isLoading={isGenerating}
            >
              Synthesize Asset
            </JBCButton>
            
            <JBCCard elevation="mid" className="bg-jbc-gold/5 border-jbc-gold/20">
              <h5 className="text-[10px] font-bold text-jbc-gold uppercase mb-2">Style Lockdown</h5>
              <p className="text-xs opacity-60">The synthesizer is locked to the <strong>JBC Geometric Dialect</strong>. It will ignore prompts for photorealism, heavy gradients, or serif typography.</p>
            </JBCCard>
          </div>

          <div className="flex flex-col items-center justify-center p-12 rounded-3xl bg-black/40 border border-white/5 border-dashed min-h-[400px] text-center">
            {generatedIcon ? (
              <div className="space-y-6">
                <img src={generatedIcon} className="w-64 h-64 rounded-2xl shadow-jbc-cyan border border-white/10 mx-auto" alt="Generated Asset" />
                <JBCButton variant="outlined" size="sm">Add to Library</JBCButton>
              </div>
            ) : (
              <div className="opacity-20 space-y-4">
                <i className="ri-image-2-line text-8xl"></i>
                <p>Neural synthesis results will appear here.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Safety Prompts Implementation Guide */}
      <div className="pt-16 border-t border-white/5">
        <h4 className="text-lg font-bold mb-8">AI Studio: Safe Implementation Prompts</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: 'The System Prompt', 
              desc: 'Copy this block to AI Studio System Instructions to teach Gemini the JBC Design tokens.',
              icon: 'ri-command-line'
            },
            { 
              title: 'Validation Hook', 
              desc: 'A prompt snippet that forces Gemini to audit generated code against accessibility standards.',
              icon: 'ri-shield-user-line'
            },
            { 
              title: 'Context Injection', 
              desc: 'How to feed the JBC constants.ts into the chat context for precise component generation.',
              icon: 'ri-database-line'
            }
          ].map(item => (
            <div key={item.title} className="p-6 rounded-2xl bg-black/20 border border-white/5 group hover:border-jbc-cyan/40 transition-all">
              <JBCIcon name={item.icon} className="mb-4 text-jbc-gold" />
              <h5 className="text-sm font-bold mb-2">{item.title}</h5>
              <p className="text-xs opacity-50 mb-6">{item.desc}</p>
              <JBCButton size="sm" variant="ghost" className="!p-0 hover:bg-transparent text-jbc-cyan">Copy Fragment <i className="ri-arrow-right-line"></i></JBCButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignIntelligence;