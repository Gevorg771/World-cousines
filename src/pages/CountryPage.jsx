import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Search, ChefHat, Flame, AlertCircle } from 'lucide-react';
import { COUNTRIES, normalizeCountryId } from '../data/countries';
import { getRecipesByCountry } from '../data/recipes';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { RecipeCard } from '../components/RecipeCard';
import { useLanguage } from '../context/LanguageContext';

export const CountryPage = () => {
  
  const { countryId } = useParams();
  const { 
    t, 
    language, 
    getCountryDetails, 
    getCourseLabel, 
    getDifficultyLabel, 
    translateDietaryTag, 
    getRecipeTitle, 
    getRecipeDescription, 
    translateIngredient 
  } = useLanguage();

  
  const normalizedId = normalizeCountryId(countryId);
  const country = COUNTRIES.find((c) => c.id === normalizedId || c.id === countryId?.toLowerCase());
  const allCountryRecipes = getRecipesByCountry(normalizedId || countryId || '');
  const countryDetails = country ? getCountryDetails(country.id, country) : null;

 
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [selectedDietary, setSelectedDietary] = useState('All');

  
  const availableCourses = ['All'];
  allCountryRecipes.forEach((recipe) => {
    if (recipe.course && !availableCourses.includes(recipe.course)) {
      availableCourses.push(recipe.course);
    }
  });

  
  const availableDietaryTags = ['All'];
  allCountryRecipes.forEach((recipe) => {
    if (recipe.dietaryTags) {
      recipe.dietaryTags.forEach((tag) => {
        if (!availableDietaryTags.includes(tag) && availableDietaryTags.length <= 6) {
          availableDietaryTags.push(tag);
        }
      });
    }
  });

  
  const cleanSearchText = searchQuery.trim().toLowerCase();

  const filteredRecipes = allCountryRecipes.filter((recipe) => {
    
    if (cleanSearchText !== '') {
      const titleEn = recipe.title.toLowerCase();
      const titleNative = recipe.nativeTitle ? recipe.nativeTitle.toLowerCase() : '';
      const titleTranslated = getRecipeTitle(recipe).toLowerCase();
      const descEn = recipe.description.toLowerCase();
      const descTranslated = getRecipeDescription(recipe).toLowerCase();

      const titleMatches = titleEn.includes(cleanSearchText) || titleNative.includes(cleanSearchText) || titleTranslated.includes(cleanSearchText);
      const descMatches = descEn.includes(cleanSearchText) || descTranslated.includes(cleanSearchText);
      const ingredientMatches = recipe.ingredients.some((item) => {
        const itemEn = item.name.toLowerCase();
        const itemTranslated = translateIngredient(item.name, item).toLowerCase();
        return itemEn.includes(cleanSearchText) || itemTranslated.includes(cleanSearchText);
      });

      if (!titleMatches && !descMatches && !ingredientMatches) {
        return false;
      }
    }



    if (selectedDifficulty !== 'All' && recipe.difficulty !== selectedDifficulty) {
      return false;
    }

   
    if (selectedCourse !== 'All' && recipe.course !== selectedCourse) {
      return false;
    }

   
    if (selectedDietary !== 'All') {
      if (!recipe.dietaryTags || !recipe.dietaryTags.includes(selectedDietary)) {
        return false;
      }
    }

    return true;
  });


  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedDifficulty('All');
    setSelectedCourse('All');
    setSelectedDietary('All');
  };

  const hasActiveFilters = searchQuery !== '' || selectedDifficulty !== 'All' || selectedCourse !== 'All' || selectedDietary !== 'All';


  if (!country || !countryDetails) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-4 text-center">
        <AlertCircle className="w-12 h-12 text-[#9A3412] mx-auto mb-4" />
        <h2 className="font-serif-display font-bold text-2xl text-stone-900 mb-2">
          {t.countryNotFound}
        </h2>
        <p className="text-stone-500 text-sm mb-6">
          {t.countryNotFoundDesc}
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


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      
    
      <Breadcrumbs
        items={[
          { label: countryDetails.name, flag: country.flag }
        ]}
      />

    
      <div 
        className="relative rounded-3xl overflow-hidden border border-[#D6C7B2] shadow-lg bg-stone-900 text-white"
        id="country-hero-banner"
      >
        <div className="absolute inset-0">
          <img
            src={country.image}
            alt={countryDetails.name}
            className="w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/30" />
        </div>

        <div className="relative z-10 p-6 sm:p-10 lg:p-12 space-y-6">
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-md transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.returnToHome}</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#9A3412] text-white backdrop-blur-md">
                {countryDetails.region}
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/15">
                {allCountryRecipes.length} {t.dishesCount}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <span className="text-5xl filter drop-shadow-md">{country.flag}</span>
              <div>
                <h1 className="font-serif-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
                  {countryDetails.name}
                </h1>
                {language !== 'ka' && (
                  <p className="text-sm font-semibold text-amber-200">
                    {country.nativeName}
                  </p>
                )}
              </div>
            </div>

            <p className="text-base sm:text-lg text-stone-200 max-w-3xl font-normal leading-relaxed">
              {countryDetails.description}
            </p>
          </div>

       
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl text-xs">
            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
              <Flame className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="font-bold text-amber-200">{t.keyFlavors} </span>
                <span className="text-stone-300">{countryDetails.primaryFlavor}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
              <ChefHat className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="font-bold text-amber-200">{t.signatureDishTitle}: </span>
                <span className="text-stone-300">{countryDetails.signatureDish}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

     
      <div className="bg-[#FAF7F2] rounded-3xl p-5 border border-[#D6C7B2] shadow-xs space-y-4" id="recipes-filter-bar">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
        
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t.searchInCuisine}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#D6C7B2] focus:border-[#9A3412] text-sm text-stone-800 placeholder-stone-400 transition-all focus:outline-none shadow-2xs"
            />
          </div>

        
          <div className="text-xs font-semibold text-stone-500 flex items-center gap-2">
            <span>{t.foundMatches}: {filteredRecipes.length} / {allCountryRecipes.length}</span>
            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="text-[#9A3412] hover:text-[#7C2D12] underline text-xs font-medium"
              >
                {t.resetFilters}
              </button>
            )}
          </div>

        </div>

        
        <div className="pt-2 border-t border-[#E8DEC8] flex flex-wrap items-center gap-6 text-xs">
          
          
          <div className="flex items-center gap-2">
            <span className="font-bold text-stone-400 uppercase text-[10px]">{t.filterDifficulty}:</span>
            <div className="flex gap-1">
              {['All', 'Easy', 'Medium', 'Hard'].map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                    selectedDifficulty === diff
                      ? 'bg-[#9A3412] text-white shadow-xs'
                      : 'bg-white border border-[#E8DEC8] text-stone-700 hover:border-[#9A3412] hover:text-[#9A3412]'
                  }`}
                >
                  {diff === 'All' ? t.allDifficulties : getDifficultyLabel(diff)}
                </button>
              ))}
            </div>
          </div>

         
          {availableCourses.length > 2 && (
            <div className="flex items-center gap-2">
              <span className="font-bold text-stone-400 uppercase text-[10px]">{t.filterCourse}:</span>
              <div className="flex flex-wrap gap-1">
                {availableCourses.map((course) => (
                  <button
                    key={course}
                    onClick={() => setSelectedCourse(course)}
                    className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                      selectedCourse === course
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'bg-white border border-[#E8DEC8] text-stone-700 hover:border-[#9A3412] hover:text-[#9A3412]'
                    }`}
                  >
                    {course === 'All' ? t.allCourses : getCourseLabel(course)}
                  </button>
                ))}
              </div>
            </div>
          )}

          
          {availableDietaryTags.length > 2 && (
            <div className="flex items-center gap-2">
              <span className="font-bold text-stone-400 uppercase text-[10px]">{t.filterDietary}:</span>
              <div className="flex flex-wrap gap-1">
                {availableDietaryTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedDietary(tag)}
                    className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                      selectedDietary === tag
                        ? 'bg-[#9A3412]/10 text-[#7C2D12] border border-[#9A3412]/30 font-bold'
                        : 'bg-white border border-[#E8DEC8] text-stone-700 hover:border-[#9A3412] hover:text-[#9A3412]'
                    }`}
                  >
                    {tag === 'All' ? t.allDietary : translateDietaryTag(tag)}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

     
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-serif-display font-bold text-2xl text-stone-900">
              {countryDetails.name} — {t.exploreAllInCountry}
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              {countryDetails.tagline}
            </p>
          </div>
        </div>

        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="dishes-grid">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-white rounded-3xl border border-[#D6C7B2]">
            <ChefHat className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="font-serif-display font-bold text-lg text-stone-800">
              {t.noMatchingRecipes}
            </h3>
            <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
              {t.noMatchingRecipesDesc}
            </p>
          </div>
        )}
      </div>

    </div>
  );
};
