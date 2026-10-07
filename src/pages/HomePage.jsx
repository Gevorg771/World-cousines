import React from 'react';
import { Sparkles, Globe, ChefHat, Award } from 'lucide-react';
import { COUNTRIES } from '../data/countries';
import { CountryCard } from '../components/CountryCard';
import { useLanguage } from '../context/LanguageContext';
import familyCookingBannerImg from '../assets/images/family_cooking_home_1790191071016.jpg';

export const HomePage = () => {
 
  const { t } = useLanguage();

 
  return (
    <div className="space-y-12 pb-16">
      
    
      <section 
        className="relative overflow-hidden mx-4 sm:mx-6 lg:mx-8 mt-4 sm:mt-6 rounded-3xl sm:rounded-[36px] border border-[#D6C7B2] shadow-xl min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex items-center bg-stone-950 text-white"
        id="hero-culinary-banner"
      >
       
        <img
          src={familyCookingBannerImg}
          alt="Happy family cooking together at home"
          className="absolute inset-0 w-full h-full object-cover object-center sm:object-[center_right]"
          referrerPolicy="no-referrer"
        />

      
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent sm:hidden pointer-events-none" />

        
        <div className="relative z-10 max-w-2xl my-6 sm:my-10 lg:my-12 mx-4 sm:mx-8 lg:mx-14 p-0 space-y-6">
          
         
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-amber-300 border border-white/20 text-xs font-bold shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.heroBadge}</span>
          </div>

         
          <h1 className="font-serif-display font-extrabold text-3xl sm:text-5xl lg:text-[50px] text-white tracking-tight leading-[1.18] drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
            {t.heroTitle}
          </h1>

         
          <p className="text-base sm:text-lg text-stone-100 leading-relaxed font-normal max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
            {t.heroSubtitle}
          </p>

         
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold">
            
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 text-white shadow-md">
              <Globe className="w-4 h-4 text-amber-400" />
              <span>{t.cuisinesCountBadge}</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 text-white shadow-md">
              <ChefHat className="w-4 h-4 text-amber-400" />
              <span>{t.authenticBadge}</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 text-white shadow-md">
              <Award className="w-4 h-4 text-amber-400" />
              <span>{t.exactGramsBadge}</span>
            </div>

          </div>

        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="country-grid-section">
        
       
        <div className="mb-8 border-b border-[#D6C7B2] pb-5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9A3412] mb-1">
            <Globe className="w-4 h-4 text-[#9A3412]" />
            <span>{t.exploreCuisines}</span>
          </div>
          <h2 className="font-serif-display font-bold text-3xl text-[#1F2421]">
            {t.cuisines}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            {t.heroSubtitle}
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COUNTRIES.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>

      </section>

    </div>
  );
};
