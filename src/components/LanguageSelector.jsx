import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSelector = () => {
  
  const { language, setLanguage, languages, t } = useLanguage();

  
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  
  const currentOption = languages.find((item) => item.code === language) || languages[0];

 
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  
  const handleSelectLanguage = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown toggle button */}
      <button
        type="button"
        id="language-selector-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="h-10 px-3 rounded-xl bg-white border border-[#D6C7B2] hover:border-[#9A3412] text-stone-800 hover:text-[#9A3412] shadow-xs transition-all flex items-center gap-2 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#9A3412]/20 font-medium text-xs sm:text-sm"
        aria-label="Select language"
        aria-expanded={isOpen}
        title={currentOption.nativeName}
      >
        <span className="text-base leading-none select-none transition-transform group-hover:scale-110">
          {currentOption.flag}
        </span>
        <span className="font-semibold text-stone-700 hidden sm:inline">
          {currentOption.code.toUpperCase()}
        </span>
        <ChevronDown className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#9A3412] transition-colors" />
      </button>

      
      {isOpen && (
        <div
          id="language-selector-dropdown"
          className="absolute right-0 mt-2 w-52 bg-[#FCFAF6] rounded-2xl shadow-xl border border-[#D6C7B2] p-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
        >
        
          <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-stone-500 border-b border-[#E8DEC8] flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-[#9A3412]" />
            <span>{t.languages}</span>
          </div>

          
          <div className="mt-1 space-y-0.5">
            {languages.map((item) => {
              const isSelected = item.code === language;
              return (
                <button
                  key={item.code}
                  id={`lang-option-${item.code}`}
                  type="button"
                  onClick={() => handleSelectLanguage(item.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-colors text-left ${
                    isSelected
                      ? 'bg-[#9A3412]/10 text-[#7C2D12] font-semibold'
                      : 'text-stone-700 hover:bg-[#F2ECE1] hover:text-[#9A3412]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl leading-none">{item.flag}</span>
                    <div className="flex items-center gap-1.5">
                      <span>{item.nativeName}</span>
                      {item.isDefault && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                          {t.defaultLangBadge}
                        </span>
                      )}
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-[#9A3412] stroke-[2.5]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
