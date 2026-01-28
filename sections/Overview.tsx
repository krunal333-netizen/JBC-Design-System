import React from 'react';
import { BRAND_TRAITS } from '../constants';
import { JBCIcon } from '../react/Icon';

interface OverviewProps {
  theme: 'light' | 'dark';
}

const Overview: React.FC<OverviewProps> = ({ theme }) => {
  const jbcCyan = theme === 'dark' ? '#03FDDA' : '#00BFA5';

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
      <div className="xl:col-span-2 space-y-4 sm:space-y-6">
        {BRAND_TRAITS.map((trait, index) => (
          <div key={index} className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl border border-transparent hover:border-jbc-cyan/30 transition-all group shadow-sm ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
            <div 
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl group-hover:scale-110 transition-transform flex-shrink-0 bg-jbc-cyan/20`}
              style={{ color: jbcCyan }}
            >
              <JBCIcon name={trait.icon} size={24} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className={`text-lg sm:text-xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-[#1C2128]'}`}>
                {trait.title}
              </h3>
              <p className={`text-sm sm:text-base transition-colors ${theme === 'dark' ? 'text-[#8B949E]' : 'text-[#424A53]'}`}>{trait.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-tr from-[#F6F8FA] to-white dark:from-[#0D1117] dark:to-[#1C2128] border border-black/5 dark:border-[#30363D] rounded-3xl p-6 sm:p-10 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group transition-all duration-500">
        <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 blur-[40px] sm:blur-[50px] rounded-full transition-all bg-jbc-cyan/10 group-hover:bg-jbc-cyan/20`}></div>
        
        {/* JBC Token Official Logo Integration - Updated Mark */}
        <div className="relative mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-700 ease-out">
          {/* Decorative Glow */}
          <div className={`absolute inset-0 blur-[40px] sm:blur-[60px] rounded-full scale-90 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity bg-jbc-cyan/30`}></div>
           <div className="w-28 h-28 sm:w-40 sm:h-40 relative z-10 drop-shadow-[0_0_25px_rgba(0,0,0,0.1)]">
            <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="cyanGradOverview" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={jbcCyan} />
                  <stop offset="100%" stopColor={jbcCyan} />
                </linearGradient>
                <linearGradient id="goldGradOverview" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--jbc-gold)" />
                  <stop offset="100%" stopColor="var(--jbc-gold)" />
                </linearGradient>
              </defs>
              <path d="M50 10 L90 35 L90 85 L50 110 L10 85 L10 35 Z" fill="url(#cyanGradOverview)" />
              <path d="M50 10 L90 35 L50 60 L10 35 Z" fill="white" fillOpacity="0.2" />
              <path d="M50 110 L90 85 L90 35 L50 60 Z" fill="black" fillOpacity="0.1" />
              <rect x="35" y="45" width="30" height="30" fill="url(#goldGradOverview)" transform="rotate(45 50 60)" />
            </svg>
          </div>
        </div>

        <h3 className={`text-xl sm:text-2xl font-bold mb-2 transition-colors ${theme === 'dark' ? 'text-white' : 'text-[#1C2128]'}`}>JBC Token</h3>
        <p className={`text-sm sm:text-base transition-colors ${theme === 'dark' ? 'text-[#8B949E]' : 'text-[#424A53]'}`}>The heart of our ecosystem</p>
        <div 
          className={`mt-6 sm:mt-8 px-4 sm:px-6 py-2 rounded-full border border-jbc-cyan/30 bg-jbc-cyan/10 text-xs sm:text-sm font-bold tracking-widest uppercase`}
          style={{ color: jbcCyan }}
        >
          NATIVE ASSET
        </div>
      </div>
    </div>
  );
};

export default Overview;