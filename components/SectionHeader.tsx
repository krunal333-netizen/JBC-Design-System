
import React from 'react';

interface SectionHeaderProps {
  num: string;
  title: string;
  desc: string | React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ num, title, desc }) => {
  return (
    <div className="mb-8 sm:mb-12 border-b border-black/10 dark:border-[#30363D] pb-6 sm:pb-8">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-br from-black to-[#6E7781] dark:from-white dark:to-[#8B949E] bg-clip-text text-transparent break-words">
        {num}. {title}
      </h2>
      <div className="text-base sm:text-lg md:text-xl text-[#57606A] dark:text-[#8B949E] max-w-4xl leading-relaxed">
        {desc}
      </div>
    </div>
  );
};

export default SectionHeader;
