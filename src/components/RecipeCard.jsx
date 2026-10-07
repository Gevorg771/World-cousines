import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ChefHat } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';


export const RecipeCard = ({ recipe }) => {
  const { 
    t, 
    language, 
    getRecipeTitle, 
    getRecipeDescription, 
    getCourseLabel, 
    getDifficultyLabel, 
    translateDietaryTag 
  } = useLanguage();

 
  const totalMinutes = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  
  let difficultyClass = 'bg-stone-100/90 text-stone-700 border-stone-300/80';
  if (recipe.difficulty === 'Medium') {
    difficultyClass = 'bg-amber-100/90 text-amber-900 border-amber-300/80';
  } else if (recipe.difficulty === 'Hard') {
    difficultyClass = 'bg-stone-800/90 text-white border-stone-700';
  }

  
  const displayTitle = getRecipeTitle(recipe);
  const displayDescription = getRecipeDescription(recipe);

  
  return (
    <Link
      to={`/country/${recipe.countryId}/recipe/${recipe.id}`}
      id={`recipe-card-${recipe.id}`}
      className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-[#D6C7B2] hover:border-[#9A3412] shadow-sm hover:shadow-xl hover:shadow-[#7C2D12]/10 transition-all duration-300 hover:-translate-y-1.5"
    >
      
      <div className="relative h-52 w-full overflow-hidden bg-stone-100">
        <img
          src={recipe.image}
          alt={displayTitle}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/75 via-stone-900/20 to-transparent" />

        
        {recipe.course && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-stone-900/60 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide border border-white/10">
            {getCourseLabel(recipe.course)}
          </div>
        )}

        
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>{totalMinutes} {t.mins}</span>
          </div>

          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border backdrop-blur-md ${difficultyClass}`}>
            {getDifficultyLabel(recipe.difficulty)}
          </span>
        </div>
      </div>

     
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        
        <div>
          
          {language !== 'ka' && recipe.nativeTitle && recipe.nativeTitle !== displayTitle && (
            <p className="text-[11px] font-semibold text-[#9A3412] tracking-wider mb-0.5">
              {recipe.nativeTitle}
            </p>
          )}
          
          <h4 className="font-serif-display font-bold text-lg text-stone-900 leading-snug group-hover:text-[#9A3412] transition-colors line-clamp-1">
            {displayTitle}
          </h4>

          <p className="text-xs text-stone-600 line-clamp-2 mt-1.5 leading-relaxed">
            {displayDescription}
          </p>
        </div>

       
        {recipe.dietaryTags && recipe.dietaryTags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {recipe.dietaryTags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#FAF7F2] text-stone-600 border border-[#E8DEC8]"
              >
                {translateDietaryTag(tag)}
              </span>
            ))}
          </div>
        )}

       
        <div className="pt-3 border-t border-[#E8DEC8] flex items-center justify-between text-xs text-stone-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-stone-400" />
              <span>{recipe.servings} {t.servings}</span>
            </span>

            {recipe.caloriesPerServing && (
              <span className="hidden sm:inline-block">
                • {recipe.caloriesPerServing} {t.caloriesUnit}
              </span>
            )}
          </div>

          <span className="flex items-center gap-1 font-bold text-[#9A3412] group-hover:text-[#7C2D12]">
            <ChefHat className="w-3.5 h-3.5" />
            <span>{t.cook}</span>
          </span>
        </div>

      </div>
    </Link>
  );
};
