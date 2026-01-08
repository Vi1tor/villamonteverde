
import React, { useState } from 'react';
import { InfoCard } from '../types';

interface InfoSectionProps {
  card: InfoCard;
}

export const InfoSection: React.FC<InfoSectionProps> = ({ card }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`group relative overflow-hidden transition-all duration-500 rounded-3xl border 
        ${card.isImportant 
          ? 'border-brand-gold/30 bg-brand-gold/5 dark:bg-brand-gold/10' 
          : 'border-black/5 bg-white dark:bg-zinc-900 dark:border-white/10'
        } shadow-sm hover:shadow-xl`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex items-center justify-between outline-none"
      >
        <div className="flex items-center gap-5">
          <div className={`p-3 rounded-2xl transition-colors duration-300 
            ${card.isImportant ? 'bg-brand-gold text-white' : 'bg-brand-olive/10 text-brand-olive dark:bg-brand-olive/20'}`}>
            {card.icon}
          </div>
          <h3 className="text-lg font-semibold tracking-tight dark:text-zinc-100">
            {card.title}
          </h3>
        </div>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-6 pb-6 pt-0 text-gray-600 dark:text-zinc-400 leading-relaxed font-light">
          <div className="h-px w-full bg-black/5 dark:bg-white/5 mb-4" />
          {card.content}
        </div>
      </div>
      
      {card.isImportant && (
        <div className="absolute top-0 right-0 p-2">
          <span className="flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-brand-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
          </span>
        </div>
      )}
    </div>
  );
};
