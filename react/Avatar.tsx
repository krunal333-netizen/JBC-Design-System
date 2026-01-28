import React from 'react';
import { JBCIcon } from './Icon';

export type AvatarSize = 24 | 32 | 40 | 56;
export type AvatarStatus = 'online' | 'offline' | 'none';

export interface JBCAvatarProps {
  src?: string;
  initials?: string;
  icon?: string;
  size?: AvatarSize;
  status?: AvatarStatus;
  className?: string;
}

export const JBCAvatar: React.FC<JBCAvatarProps> = ({
  src,
  initials,
  icon = 'ri-user-line',
  size = 40,
  status = 'none',
  className = ''
}) => {
  const sizeMap: Record<AvatarSize, string> = {
    24: 'w-6 h-6 text-[10px]',
    32: 'w-8 h-8 text-xs',
    40: 'w-10 h-10 text-sm',
    56: 'w-14 h-14 text-base'
  };

  const statusSizeMap: Record<AvatarSize, string> = {
    24: 'w-2 h-2',
    32: 'w-2.5 h-2.5',
    40: 'w-3 h-3',
    56: 'w-4 h-4'
  };

  const renderContent = () => {
    if (src) {
      return (
        <img 
          src={src} 
          alt={initials || 'Avatar'} 
          className="w-full h-full object-cover" 
        />
      );
    }
    if (initials) {
      return (
        <span className="font-bold text-black dark:text-white uppercase tracking-tighter">
          {initials.substring(0, 2)}
        </span>
      );
    }
    return <JBCIcon name={icon} size={size > 32 ? 24 : 16} />;
  };

  return (
    <div className={`relative inline-block shrink-0 ${className}`}>
      <div className={`
        ${sizeMap[size]} 
        rounded-xl overflow-hidden flex items-center justify-center 
        bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10
        ring-2 ring-transparent group-hover:ring-jbc-cyan transition-all
      `}>
        {renderContent()}
      </div>
      
      {status !== 'none' && (
        <div className={`
          absolute -bottom-0.5 -right-0.5 rounded-full border-2 border-jbc-lightSurface dark:border-jbc-surface
          ${statusSizeMap[size]}
          ${status === 'online' ? 'bg-jbc-success shadow-[0_0_8px_rgba(46,160,67,0.4)]' : 'bg-jbc-icon-neutral'}
        `} />
      )}
    </div>
  );
};