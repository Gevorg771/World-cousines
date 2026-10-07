import React from 'react';
import { Link } from 'react-router-dom';
import { CookingPot, Flame, Sparkles, Globe2, Heart } from 'lucide-react';
import { COUNTRIES } from '../data/countries';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t, getCountryDetails, language } = useLanguage();

 
  let footerSubtext = 'World Culinary Atlas';
  if (language === 'ka') {
    footerSubtext = 'კულინარიული ატლასი';
  }

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#EAE2D5] border-t border-[#D6C7B2] mt-24 text-stone-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Info with Header Medallion Logo & Colors */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-3.5 group shrink-0 w-fit" id="footer-brand">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#9A3412] via-[#7C2D12] to-[#431407] flex items-center justify-center text-white shadow-md shadow-[#7C2D12]/25 ring-1 ring-amber-400/40 group-hover:scale-105 group-hover:shadow-[#7C2D12]/40 transition-all duration-300">
                {/* Subtle radial inner glow */}
                <div className="absolute inset-0.5 rounded-[14px] bg-gradient-to-t from-transparent via-amber-200/10 to-white/20 pointer-events-none" />
                
                
                <div className="relative flex items-center justify-center">
                  <CookingPot className="w-6 h-6 sm:w-6.5 sm:h-6.5 text-amber-100 stroke-[2.2] drop-shadow-sm" />
                  <Flame className="w-3 h-3 text-amber-300 fill-amber-400 absolute -top-1 right-0 animate-pulse" />
                  <Sparkles className="w-2.5 h-2.5 text-amber-200 fill-amber-200 absolute -bottom-1 -left-1 opacity-80" />
                </div>
              </div>

              <div className="flex flex-col">
                <span className="font-serif-display font-extrabold text-2xl tracking-tight text-[#1F2421] group-hover:text-[#9A3412] transition-colors leading-tight">
                  {t.appName}
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-stone-600 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9A3412] inline-block" />
                  <span>{footerSubtext}</span>
                </span>
              </div>
            </Link>

            <p className="text-sm text-stone-600 leading-relaxed">
              {t.subheading}
            </p>
            
            <div className="flex items-center gap-2 text-xs font-semibold text-[#7C2D12] bg-[#9A3412]/10 border border-[#9A3412]/20 px-3 py-1.5 rounded-lg w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#9A3412]" />
              <span>{t.spotlight}</span>
            </div>
          </div>

         
          <div className="md:col-span-2">
            <h3 className="font-serif-display font-bold text-[#1F2421] text-base mb-4 flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-[#9A3412]" />
              <span>{t.exploreCuisines}</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2.5 gap-x-4">
              {COUNTRIES.map((c) => {
                const details = getCountryDetails(c.id, c);
                return (
                  <Link
                    key={c.id}
                    to={`/country/${c.id}`}
                    className="flex items-center gap-2 text-sm text-stone-700 hover:text-[#9A3412] transition-colors group"
                  >
                    <span className="text-base group-hover:scale-110 transition-transform">{c.flag}</span>
                    <span className="truncate group-hover:translate-x-0.5 transition-transform">{details.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

       
          <div className="space-y-3">
            <h3 className="font-serif-display font-bold text-[#1F2421] text-base">
              {t.worldCuisinesTitle}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed italic">
              {t.footerQuote}
            </p>
            <div className="pt-2 text-xs text-stone-500">
              <p>{t.footerSubquote}</p>
            </div>
          </div>

        </div>

        
        <div className="border-t border-[#D6C7B2] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <p>© {currentYear} {t.appName}. {t.allCulinaryHonored}</p>
          <p className="flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-[#9A3412] fill-[#9A3412]" />
            <span>{t.footerCraftedWith}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
