import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Bookmark, Trash2, ArrowRight, Clock } from 'lucide-react';
import { useFavorites } from '../utils/favorites';
import { ALL_RECIPES } from '../data/recipes';
import { COUNTRIES } from '../data/countries';
import { useLanguage } from '../context/LanguageContext';


export const FavoritesDrawer = ({ isOpen, onClose }) => {
  const { favorites, toggle } = useFavorites();
  const { t, getRecipeTitle, getCountryDetails, getDifficultyLabel } = useLanguage();
  const navigate = useNavigate();

  
  if (!isOpen) {
    return null;
  }

  
  const savedRecipes = ALL_RECIPES.filter((recipe) => favorites.includes(recipe.id));

  
  const handleOpenRecipe = (countryId, recipeId) => {
    onClose();
    navigate(`/country/${countryId}/recipe/${recipeId}`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
     
      <div 
        className="absolute inset-0 bg-stone-900/50 backdrop-blur-sm transition-opacity cursor-pointer"
        onClick={onClose}
      />

     
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div 
          className="w-screen max-w-md bg-[#FAF6EF] border-l border-[#D6C7B2] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300"
          id="favorites-drawer-panel"
        >
         
          <div className="p-5 border-b border-[#D6C7B2] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#9A3412]/10 text-[#9A3412] flex items-center justify-center">
                <Bookmark className="w-4 h-4 fill-[#9A3412] text-[#9A3412]" />
              </div>
              <div>
                <h3 className="font-serif-display font-bold text-lg text-stone-900 leading-tight">
                  {t.saved}
                </h3>
                <p className="text-xs text-stone-500">
                  {savedRecipes.length} {t.dishesCount}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label={t.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

         
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {savedRecipes.length > 0 ? (
              savedRecipes.map((recipe) => {
                const country = COUNTRIES.find((c) => c.id === recipe.countryId);
                const countryDetails = country ? getCountryDetails(country.id, country) : null;
                const recipeTitle = getRecipeTitle(recipe);
                const totalCookTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

                return (
                  <div
                    key={recipe.id}
                    className="group flex gap-3 p-3 rounded-2xl bg-white border border-[#D6C7B2] hover:border-[#9A3412] shadow-sm hover:shadow-md transition-all relative"
                  >
                    <img
                      src={recipe.image}
                      alt={recipeTitle}
                      className="w-20 h-20 rounded-xl object-cover shrink-0 cursor-pointer"
                      onClick={() => handleOpenRecipe(recipe.countryId, recipe.id)}
                      referrerPolicy="no-referrer"
                    />

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        {countryDetails && (
                          <div className="text-[11px] font-semibold text-stone-400 flex items-center gap-1">
                            <span>{country?.flag}</span>
                            <span>{countryDetails.name}</span>
                          </div>
                        )}
                        <h4 
                          onClick={() => handleOpenRecipe(recipe.countryId, recipe.id)}
                          className="font-serif-display font-bold text-sm text-stone-900 line-clamp-1 hover:text-[#9A3412] cursor-pointer transition-colors"
                        >
                          {recipeTitle}
                        </h4>
                        <div className="flex items-center gap-2 mt-1 text-[11px] text-stone-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-[#9A3412]" />
                            {totalCookTime} {t.mins}
                          </span>
                          <span>•</span>
                          <span className="font-medium text-stone-700">
                            {getDifficultyLabel(recipe.difficulty)}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <button
                          onClick={() => handleOpenRecipe(recipe.countryId, recipe.id)}
                          className="text-xs font-bold text-[#9A3412] hover:text-[#7C2D12] flex items-center gap-1"
                        >
                          <span>{t.viewRecipe}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => toggle(recipe.id)}
                          title={t.removeBookmark}
                          className="text-stone-300 hover:text-stone-500 p-1 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="py-20 text-center px-4">
                <div className="w-14 h-14 rounded-2xl bg-[#9A3412]/10 text-[#9A3412] flex items-center justify-center mx-auto mb-3 border border-[#9A3412]/20">
                  <Bookmark className="w-7 h-7" />
                </div>
                <h4 className="font-serif-display font-bold text-stone-800 text-base">
                  {t.noFavoritesYet}
                </h4>
                <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto leading-relaxed">
                  {t.noFavoritesDesc}
                </p>
                <button
                  onClick={onClose}
                  className="mt-5 px-4 py-2 rounded-xl bg-[#9A3412] hover:bg-[#7C2D12] text-white font-bold text-xs shadow-sm transition-all"
                >
                  {t.exploreCuisines}
                </button>
              </div>
            )}
          </div>

          
          {savedRecipes.length > 0 && (
            <div className="p-4 border-t border-[#D6C7B2] bg-[#FAF6EF] text-center">
              <p className="text-xs text-stone-400">
                {t.localStorageNote}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
