import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, BookOpen, Flame } from 'lucide-react';
import { getRecipeCountByCountry } from '../data/recipes';
import { useLanguage } from '../context/LanguageContext';


export const CountryCard = ({ country }) => {
  const { t, language, getCountryDetails } = useLanguage();
  
 
  const dishCount = getRecipeCountByCountry(country.id);
  const details = getCountryDetails(country.id, country);

  
  let cardClass = 'bg-white border border-[#D6C7B2] hover:border-[#9A3412] shadow-sm hover:shadow-xl hover:shadow-[#7C2D12]/10';
  if (country.isSpotlight) {
    cardClass = 'bg-gradient-to-b from-amber-50/70 to-white border-2 border-[#9A3412] shadow-xl shadow-[#7C2D12]/10 ring-4 ring-[#9A3412]/15';
  }

  return (
    <Link
      to={`/country/${country.id}`}
      id={`country-card-${country.id}`}
      className={`group relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${cardClass}`}
    >
     
      {country.isSpotlight && (
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9A3412] text-white font-bold text-xs shadow-md shadow-[#7C2D12]/30">
          <Sparkles className="w-3.5 h-3.5 fill-white" />
          <span>{t.spotlight}</span>
        </div>
      )}

     
      <div className="relative h-48 w-full overflow-hidden bg-stone-100">
        <img
          src={country.image}
          alt={details.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-transparent" />
        
       
        <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-3xl filter drop-shadow-md">{country.flag}</span>
            <div>
              <h3 className="text-xl font-serif-display font-bold text-white leading-tight drop-shadow-sm flex items-center gap-2">
                {details.name}
              </h3>
              {language !== 'ka' && (
                <p className="text-[11px] text-amber-200 font-medium tracking-wide">
                  {country.nativeName}
                </p>
              )}
            </div>
          </div>
          
         
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-stone-800 text-xs font-bold shadow-sm">
            <BookOpen className="w-3 h-3 text-[#9A3412]" />
            <span>{dishCount} {dishCount === 1 ? t.dishSingle : t.dishesCount}</span>
          </div>
        </div>
      </div>

    
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          <p className="text-xs font-semibold text-[#9A3412] uppercase tracking-wider mb-1">
            {details.tagline}
          </p>
          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
            {details.description}
          </p>
        </div>

      
        <div className="bg-[#FAF7F2] rounded-xl p-2.5 border border-[#E8DEC8] space-y-1">
          <div className="flex items-center gap-1 text-[11px] font-bold text-stone-700">
            <Flame className="w-3 h-3 text-[#9A3412]" />
            <span>{t.keyFlavors}</span>
          </div>
          <p className="text-[11px] text-stone-500 truncate">
            {details.primaryFlavor}
          </p>
        </div>

      
        <div className="pt-2 border-t border-[#E8DEC8] flex items-center justify-between text-xs">
          <div className="text-stone-500 truncate mr-2">
            <span className="text-stone-400">{t.signature} </span>
            <span className="font-semibold text-stone-800">{details.signatureDish}</span>
          </div>

          <span className="inline-flex items-center gap-1 font-bold text-[#9A3412] group-hover:text-[#7C2D12] shrink-0 group-hover:translate-x-1 transition-transform">
            <span>{t.viewRecipes}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>

      </div>
    </Link>
  );
};
