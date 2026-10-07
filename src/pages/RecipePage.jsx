import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, Users, ChefHat, Printer, 
  Minus, Plus, Check, Copy, Sparkles, Flame, Info, 
  ArrowLeft, RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COUNTRIES, normalizeCountryId } from '../data/countries';
import { getRecipeById } from '../data/recipes';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { formatScaledAmount } from '../utils/scaler';
import { useLanguage } from '../context/LanguageContext';

export const RecipePage = () => {
 
  const { countryId, recipeId } = useParams();
  const recipe = getRecipeById(recipeId || '');
  const normalizedCountryId = normalizeCountryId(recipe?.countryId || countryId);
  const country = COUNTRIES.find((c) => c.id === (recipe?.countryId || normalizedCountryId));


  const { 
    t, 
    language,
    getRecipeTitle, 
    getRecipeDescription,
    getRecipeFunFact,
    getRecipeServingNotes,
    getStepDetails,
    translateIngredient,
    translateUnit,
    translateCategory,
    getCountryDetails, 
    getCourseLabel, 
    getDifficultyLabel 
  } = useLanguage();

 
  const defaultServings = recipe ? recipe.servings : 4;
  const [servings, setServings] = useState(defaultServings);
  const [unitSystem, setUnitSystem] = useState('metric');
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [completedSteps, setCompletedSteps] = useState({});
  const [copied, setCopied] = useState(false);

  
  if (!recipe || !country) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-4 text-center">
        <AlertCircleIcon className="w-12 h-12 text-[#9A3412] mx-auto mb-4" />
        <h2 className="font-serif-display font-bold text-2xl text-stone-900 mb-2">
          {t.recipeNotFound}
        </h2>
        <p className="text-stone-500 text-sm mb-6">
          {t.recipeNotFoundDesc}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#9A3412] hover:bg-[#7C2D12] text-white font-bold text-sm shadow-sm transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.returnToHome}</span>
        </Link>
      </div>
    );
  }

  
  const countryDetails = getCountryDetails(country.id, country);
  const recipeTitle = getRecipeTitle(recipe);
  const recipeDesc = getRecipeDescription(recipe);
  const recipeFunFact = getRecipeFunFact(recipe) || recipe.funFact;
  const recipeServingNotes = getRecipeServingNotes(recipe) || recipe.servingNotes;
  const totalTimeMinutes = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  
  const categorizedIngredients = {};
  recipe.ingredients.forEach((item) => {
    const category = item.category || 'Main';
    if (!categorizedIngredients[category]) {
      categorizedIngredients[category] = [];
    }
    categorizedIngredients[category].push(item);
  });

  
  const handleIncreaseServings = () => {
    if (servings < 24) {
      setServings(servings + 1);
    }
  };

  const handleDecreaseServings = () => {
    if (servings > 1) {
      setServings(servings - 1);
    }
  };

  const handleResetServings = () => {
    setServings(recipe.servings);
  };

  
  const toggleIngredientCheck = (ingredientName) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [ingredientName]: !prev[ingredientName]
    }));
  };

  const toggleStepComplete = (stepNumber) => {
    const isCurrentlyDone = !!completedSteps[stepNumber];
    const updatedSteps = {
      ...completedSteps,
      [stepNumber]: !isCurrentlyDone
    };
    setCompletedSteps(updatedSteps);

  
    const allStepsDone = recipe.steps.every((s) => updatedSteps[s.stepNumber]);
    if (allStepsDone && !isCurrentlyDone) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch {
     
      }
    }
  };


  const handleCopyIngredients = () => {
    const lines = [];
    recipe.ingredients.forEach((ing) => {
      const scaled = formatScaledAmount(ing.amount, recipe.servings, servings, ing.unit, unitSystem);
      const name = translateIngredient(ing.name);
      const unit = translateUnit(scaled.unit);
      lines.push(`• ${scaled.amount} ${unit} ${name}`);
    });

    const clipboardText = `${recipeTitle} (${servings} ${t.servings})\n\n${t.ingredientsTitle}:\n${lines.join('\n')}\n\n${t.appName}`;
    navigator.clipboard.writeText(clipboardText);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  
  const handlePrint = () => {
    window.print();
  };

  const difficultyColors = {
    Easy: 'bg-stone-100 text-stone-700 border-stone-300',
    Medium: 'bg-amber-100 text-amber-900 border-amber-300',
    Hard: 'bg-stone-800 text-white border-stone-700'
  };

  const checkedIngredientsCount = Object.values(checkedIngredients).filter(Boolean).length;
  const completedStepsCount = Object.values(completedSteps).filter(Boolean).length;
  const isAllStepsFinished = recipe.steps.length > 0 && completedStepsCount === recipe.steps.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      
  
      <div className="no-print">
        <Breadcrumbs
          items={[
            { label: countryDetails.name, to: `/country/${country.id}`, flag: country.flag },
            { label: recipeTitle }
          ]}
        />
      </div>

     
      <div className="bg-white rounded-3xl overflow-hidden border border-[#D6C7B2] shadow-sm">
        
     
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
       
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            
            <div>
             
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Link
                  to={`/country/${country.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold hover:bg-amber-100 transition-colors"
                >
                  <span>{country.flag}</span>
                  <span>{countryDetails.name}</span>
                </Link>

                {recipe.course && (
                  <span className="px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold">
                    {getCourseLabel(recipe.course)}
                  </span>
                )}

                <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${difficultyColors[recipe.difficulty]}`}>
                  {getDifficultyLabel(recipe.difficulty)}
                </span>
              </div>

             
              {language !== 'ka' && recipe.nativeTitle && recipe.nativeTitle !== recipeTitle && (
                <p className="text-sm font-serif-display font-semibold text-[#9A3412] mb-1">
                  {recipe.nativeTitle}
                </p>
              )}

             
              <h1 className="font-serif-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight leading-tight">
                {recipeTitle}
              </h1>

             
              <p className="text-base text-stone-600 mt-4 leading-relaxed font-normal">
                {recipeDesc}
              </p>
            </div>

          
            <div className="pt-4 border-t border-[#E8DEC8] grid grid-cols-2 sm:grid-cols-4 gap-4">
              
              <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#D6C7B2]">
                <div className="flex items-center gap-1.5 text-stone-500 text-xs font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#9A3412]" />
                  <span>{t.prepTime}</span>
                </div>
                <div className="text-base font-bold text-stone-800 mt-0.5">
                  {recipe.prepTimeMinutes} {t.mins}
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#D6C7B2]">
                <div className="flex items-center gap-1.5 text-stone-500 text-xs font-medium">
                  <Flame className="w-3.5 h-3.5 text-[#9A3412]" />
                  <span>{t.cookTime}</span>
                </div>
                <div className="text-base font-bold text-stone-800 mt-0.5">
                  {recipe.cookTimeMinutes} {t.mins}
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#D6C7B2]">
                <div className="flex items-center gap-1.5 text-stone-500 text-xs font-medium">
                  <ChefHat className="w-3.5 h-3.5 text-[#9A3412]" />
                  <span>{t.totalTime}</span>
                </div>
                <div className="text-base font-bold text-stone-800 mt-0.5">
                  {totalTimeMinutes} {t.mins}
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#D6C7B2]">
                <div className="flex items-center gap-1.5 text-stone-500 text-xs font-medium">
                  <Users className="w-3.5 h-3.5 text-[#9A3412]" />
                  <span>{t.calories}</span>
                </div>
                <div className="text-base font-bold text-stone-800 mt-0.5">
                  {recipe.caloriesPerServing ? `${recipe.caloriesPerServing} ${t.caloriesUnit}` : 'N/A'}
                </div>
              </div>

            </div>

            
            <div className="flex flex-wrap items-center gap-3 pt-2 no-print">
              <button
                type="button"
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#D6C7B2] hover:bg-[#FAF7F2] text-stone-700 font-semibold text-sm transition-colors"
              >
                <Printer className="w-4 h-4 text-stone-500" />
                <span>{t.printRecipe}</span>
              </button>

              <button
                type="button"
                onClick={handleCopyIngredients}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#D6C7B2] hover:bg-[#FAF7F2] text-stone-700 font-semibold text-sm transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-[#9A3412]" /> : <Copy className="w-4 h-4 text-stone-500" />}
                <span>{copied ? t.ingredientsCopied : t.copyIngredients}</span>
              </button>
            </div>

          </div>

          
          <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full overflow-hidden bg-stone-100">
            <img
              src={recipe.image}
              alt={recipeTitle}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent lg:hidden" />
          </div>

        </div>

      </div>

     
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
     
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
          
          <div className="bg-white rounded-3xl p-6 border border-[#D6C7B2] shadow-sm space-y-6">
            
            <div className="flex items-center justify-between border-b border-[#E8DEC8] pb-4">
              <div>
                <h3 className="font-serif-display font-bold text-xl text-stone-900">
                  {t.ingredientsTitle}
                </h3>
                <p className="text-xs text-stone-500">
                  {recipe.ingredients.length} {t.itemsListed}
                </p>
              </div>

            
              <div className="flex bg-[#FAF7F2] p-1 rounded-xl border border-[#D6C7B2] text-xs">
                <button
                  type="button"
                  onClick={() => setUnitSystem('metric')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                    unitSystem === 'metric'
                      ? 'bg-[#9A3412] text-white shadow-2xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {t.metricUnit}
                </button>
                <button
                  type="button"
                  onClick={() => setUnitSystem('imperial')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                    unitSystem === 'imperial'
                      ? 'bg-[#9A3412] text-white shadow-2xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {t.usUnit}
                </button>
              </div>
            </div>

           
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#D6C7B2] flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-stone-700 block">
                  {t.servingsAdjuster}
                </span>
                <span className="text-[11px] text-stone-500">
                  {servings === recipe.servings ? t.defaultYield : t.autoScaled}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handleDecreaseServings}
                  disabled={servings <= 1}
                  className="w-8 h-8 rounded-xl bg-white border border-[#D6C7B2] flex items-center justify-center text-stone-700 hover:bg-stone-50 disabled:opacity-30 transition-all active:scale-95 shadow-2xs"
                  aria-label="Decrease servings"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>

                <span className="w-8 text-center font-bold text-stone-900 text-sm">
                  {servings}
                </span>

                <button
                  type="button"
                  onClick={handleIncreaseServings}
                  disabled={servings >= 24}
                  className="w-8 h-8 rounded-xl bg-white border border-[#D6C7B2] flex items-center justify-center text-stone-700 hover:bg-stone-50 disabled:opacity-30 transition-all active:scale-95 shadow-2xs"
                  aria-label="Increase servings"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>

                {servings !== recipe.servings && (
                  <button
                    type="button"
                    onClick={handleResetServings}
                    className="p-1 text-xs text-[#9A3412] hover:text-[#7C2D12] ml-1"
                    title={t.resetFilters}
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

          
            <div className="space-y-5" id="ingredients-checklist">
              {Object.entries(categorizedIngredients).map(([category, items]) => (
                <div key={category} className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#7C2D12]">
                    {translateCategory(category)}
                  </h4>
                  
                  <div className="space-y-2">
                    {items.map((item, idx) => {
                      const scaled = formatScaledAmount(
                        item.amount, 
                        recipe.servings, 
                        servings, 
                        item.unit, 
                        unitSystem
                      );
                      const isChecked = !!checkedIngredients[item.name];
                      const translatedName = translateIngredient(item.name, item);
                      const translatedUnit = translateUnit(scaled.unit);

                      return (
                        <div
                          key={idx}
                          onClick={() => toggleIngredientCheck(item.name)}
                          className={`flex items-start gap-3 p-2.5 rounded-xl cursor-pointer transition-all border ${
                            isChecked
                              ? 'bg-stone-50 border-[#E8DEC8] text-stone-400'
                              : 'bg-white border-transparent hover:border-[#D6C7B2] hover:bg-amber-50/30 text-stone-800'
                          }`}
                        >
                          <div className={`mt-0.5 w-5 h-5 rounded-lg flex items-center justify-center shrink-0 border transition-all ${
                            isChecked
                              ? 'bg-[#9A3412] border-[#9A3412] text-white'
                              : 'bg-white border-stone-300'
                          }`}>
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>

                          <div className="flex-1 min-w-0 text-xs sm:text-sm">
                            <span className={`font-bold mr-1.5 ${isChecked ? 'line-through text-stone-400' : 'text-stone-900'}`}>
                              {scaled.amount} {translatedUnit}
                            </span>
                            <span className={isChecked ? 'line-through text-stone-400' : 'text-stone-700'}>
                              {translatedName}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

           
            <div className="pt-2 border-t border-[#E8DEC8] flex items-center justify-between text-xs text-stone-500">
              <span>
                {checkedIngredientsCount} {t.ofCount} {recipe.ingredients.length} {t.preparedSummary}
              </span>
              {checkedIngredientsCount > 0 && (
                <button
                  type="button"
                  onClick={() => setCheckedIngredients({})}
                  className="text-[#9A3412] hover:underline text-[11px]"
                >
                  {t.uncheckAll}
                </button>
              )}
            </div>

          </div>

        </div>

       
        <div className="lg:col-span-8 space-y-8">
          
        
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D6C7B2] shadow-sm space-y-6">
            
            <div className="flex items-center justify-between border-b border-[#E8DEC8] pb-4">
              <div>
                <h3 className="font-serif-display font-bold text-2xl text-stone-900">
                  {t.stepByStepGuide}
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  {t.followInstructions}
                </p>
              </div>

            
              <div className="text-xs font-bold text-[#7C2D12] bg-[#9A3412]/10 border border-[#9A3412]/20 px-3 py-1 rounded-full">
                {completedStepsCount} / {recipe.steps.length} {t.stepProgress}
              </div>
            </div>

          
            <div className="space-y-6" id="cooking-steps-list">
              {recipe.steps.map((step) => {
                const isStepDone = !!completedSteps[step.stepNumber];
                const stepInfo = getStepDetails(recipe.id, step);

                return (
                  <div
                    key={step.stepNumber}
                    className={`relative p-5 sm:p-6 rounded-3xl border transition-all ${
                      isStepDone
                        ? 'bg-[#FAF7F2] border-[#D6C7B2] opacity-80'
                        : 'bg-white border-[#D6C7B2] shadow-xs hover:border-[#9A3412]'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      
                     
                      <button
                        type="button"
                        onClick={() => toggleStepComplete(step.stepNumber)}
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center font-bold text-sm shrink-0 transition-all ${
                          isStepDone
                            ? 'bg-[#9A3412] text-white shadow-sm'
                            : 'bg-[#9A3412] text-white shadow-md shadow-[#9A3412]/20 hover:scale-105 hover:bg-[#7C2D12]'
                        }`}
                        title={isStepDone ? t.completed : t.markDone}
                      >
                        {isStepDone ? (
                          <Check className="w-5 h-5 stroke-[3]" />
                        ) : (
                          <span>{step.stepNumber}</span>
                        )}
                      </button>

                      
                      <div className="flex-1 min-w-0 space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className={`font-serif-display font-bold text-lg ${
                            isStepDone ? 'text-stone-500 line-through' : 'text-stone-900'
                          }`}>
                            {stepInfo.title}
                          </h4>

                         
                          {(stepInfo.temperature || step.temperature) && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-950 border border-amber-300">
                              <Flame className="w-3 h-3 text-[#9A3412]" />
                              <span>{stepInfo.temperature || step.temperature}</span>
                            </span>
                          )}
                        </div>

                        <p className={`text-sm leading-relaxed ${
                          isStepDone ? 'text-stone-500' : 'text-stone-700'
                        }`}>
                          {stepInfo.instruction}
                        </p>

                       
                        {stepInfo.chefTip && (
                          <div className="mt-2 text-xs text-[#7C2D12] bg-amber-50/80 border border-amber-200/70 rounded-xl p-2.5 flex items-start gap-2">
                            <Info className="w-3.5 h-3.5 text-[#9A3412] shrink-0 mt-0.5" />
                            <span><strong className="font-semibold">{language === 'ka' ? 'შეფ-მზარეულის რჩევა:' : 'Chef Tip:'}</strong> {stepInfo.chefTip}</span>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            
            {isAllStepsFinished && (
              <div className="p-6 rounded-3xl bg-gradient-to-r from-[#9A3412] via-[#7C2D12] to-stone-900 text-white text-center space-y-2 shadow-lg shadow-[#9A3412]/20 animate-in fade-in duration-300">
                <Sparkles className="w-8 h-8 mx-auto text-amber-300" />
                <h4 className="font-serif-display font-bold text-xl">
                  {t.congratulationsChef}
                </h4>
                <p className="text-xs sm:text-sm text-amber-100 max-w-md mx-auto">
                  {recipeTitle} • {countryDetails.name}
                </p>
              </div>
            )}

          </div>

         
          {recipeFunFact && (
            <div className="rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-[#9A3412]/5 via-[#FAF7F2] to-amber-50/30 border border-[#D6C7B2] shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7C2D12]">
                <Sparkles className="w-4 h-4 text-[#9A3412]" />
                <span>{t.culinaryHistoryTitle}</span>
              </div>
              <h4 className="font-serif-display font-bold text-xl text-stone-900">
                {recipeTitle}
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed font-normal">
                {recipeFunFact}
              </p>
            </div>
          )}

          
          {recipeServingNotes && (
            <div className="rounded-3xl p-6 sm:p-7 bg-white border border-[#D6C7B2] shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500">
                <Info className="w-4 h-4 text-[#9A3412]" />
                <span>{t.servingNotesTitle}</span>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed">
                {recipeServingNotes}
              </p>
            </div>
          )}

        
          <div className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#D6C7B2] flex flex-col sm:flex-row items-center justify-between gap-4 no-print">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{country.flag}</span>
              <div>
                <h5 className="font-serif-display font-bold text-base text-stone-900">
                  {countryDetails.name}
                </h5>
                <p className="text-xs text-stone-500">
                  {countryDetails.tagline}
                </p>
              </div>
            </div>

            <Link
              to={`/country/${country.id}`}
              className="px-4 py-2 rounded-xl bg-[#9A3412] hover:bg-[#7C2D12] text-white font-bold text-xs shadow-sm transition-all whitespace-nowrap"
            >
              {countryDetails.name} — {t.viewRecipes}
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
};


function AlertCircleIcon(props) {
  return (
    <svg 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
