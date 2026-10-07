import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CookingPot, Flame, Sparkles, Shuffle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';
import { ALL_RECIPES } from '../data/recipes';

export const Navbar = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [isSpinning, setIsSpinning] = useState(false);

  
  const handleSurpriseMe = () => {
    if (ALL_RECIPES.length === 0) return;

   
    setIsSpinning(true);
    
  
    try {
      confetti({
        particleCount: 35,
        spread: 55,
        origin: { y: 0.1, x: 0.7 },
        colors: ['#9A3412', '#C2410C', '#D97706', '#F59E0B']
      });
    } catch {
     
    }

    // Pick a random recipe from the full recipes list
    const randomIndex = Math.floor(Math.random() * ALL_RECIPES.length);
    const chosenRecipe = ALL_RECIPES[randomIndex];


    setTimeout(() => {
      setIsSpinning(false);
      navigate(`/country/${chosenRecipe.countryId}/recipe/${chosenRecipe.id}`);
    }, 250);
  };

  
  let subheaderText = 'World Culinary Atlas';
  if (language === 'ka') {
    subheaderText = 'კულინარიული ატლასი';
  }

  
  let surpriseButtonText = 'Surprise Dish';
  if (language === 'ka') {
    surpriseButtonText = 'რა მოვამზადო?';
  }

  return (
    <header className="sticky top-0 z-40 bg-[#EAE2D5]/95 backdrop-blur-md border-b border-[#D6C7B2] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
       
        <Link 
          to="/" 
          className="flex items-center gap-3.5 group shrink-0"
          id="navbar-brand"
        >
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#9A3412] via-[#7C2D12] to-[#431407] flex items-center justify-center text-white shadow-lg shadow-[#7C2D12]/25 ring-1 ring-amber-400/40 group-hover:scale-105 group-hover:shadow-[#7C2D12]/40 transition-all duration-300">
          
            <div className="absolute inset-0.5 rounded-[14px] bg-gradient-to-t from-transparent via-amber-200/10 to-white/20 pointer-events-none" />
            
           
            <div className="relative flex items-center justify-center">
              <CookingPot className="w-6 h-6 sm:w-6.5 sm:h-6.5 text-amber-100 stroke-[2.2] drop-shadow-sm" />
              <Flame className="w-3 h-3 text-amber-300 fill-amber-400 absolute -top-1 right-0 animate-pulse" />
              <Sparkles className="w-2.5 h-2.5 text-amber-200 fill-amber-200 absolute -bottom-1 -left-1 opacity-80" />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-serif-display font-extrabold text-2xl sm:text-[25px] tracking-tight text-[#1F2421] group-hover:text-[#9A3412] transition-colors leading-tight">
              {t.appName}
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-stone-600 flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9A3412] inline-block" />
              <span>{subheaderText}</span>
            </span>
          </div>
        </Link>

       
        <div className="flex items-center gap-2.5 sm:gap-3">
          
         
          <button
            type="button"
            onClick={handleSurpriseMe}
            id="surprise-recipe-btn"
            title={language === 'ka' ? 'შემთხვევითი რეცეპტი: რა მოვამზადო?' : 'Surprise me: What to cook?'}
            className="group relative flex items-center gap-2 h-10 px-3 sm:px-4 rounded-xl bg-white border border-[#D6C7B2] hover:border-[#9A3412] text-stone-800 hover:text-[#9A3412] shadow-xs hover:shadow-md transition-all active:scale-95"
          >
            <Shuffle className={`w-4 h-4 text-[#9A3412] transition-transform duration-300 ${isSpinning ? 'rotate-180 scale-125' : 'group-hover:rotate-45'}`} />
            <span className="text-xs sm:text-sm font-bold text-stone-800 group-hover:text-[#9A3412] hidden sm:inline">
              {surpriseButtonText}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#9A3412] animate-ping sm:hidden" />
          </button>

         
          <LanguageSelector />
        </div>

      </div>
    </header>
  );
};
