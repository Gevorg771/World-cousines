import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  TRANSLATIONS,
  COUNTRY_TRANSLATIONS,
  LANGUAGES
} from '../i18n/translations';
import {
  RECIPE_CONTENT_TRANSLATIONS,
  DIETARY_TAG_TRANSLATIONS,
  UNIT_TRANSLATIONS,
  CATEGORY_TRANSLATIONS
} from '../i18n/recipeTranslations';
import { translateIngredientName } from '../i18n/ingredientDictionary';
import { getTranslatedStep } from '../i18n/recipeStepTranslations';
import { normalizeCountryId } from '../data/countries';


const STORAGE_KEY = 'world_cuisines_language';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && (saved === 'ka' || saved === 'en')) {
        return saved;
      }
      localStorage.setItem(STORAGE_KEY, 'ka');
    } catch {
      
    }
   
    return 'ka';
  });

  const setLanguage = (lang) => {
    const validLang = lang === 'en' ? 'en' : 'ka';
    setLanguageState(validLang);
    try {
      localStorage.setItem(STORAGE_KEY, validLang);
    } catch {
     
    }
    document.documentElement.lang = validLang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = TRANSLATIONS[language] || TRANSLATIONS.ka || TRANSLATIONS.en;

  const getCountryDetails = (countryId, fallback) => {
    if (!countryId) return fallback || {};
    const normalized = normalizeCountryId(countryId);
    const loc = COUNTRY_TRANSLATIONS[normalized] || COUNTRY_TRANSLATIONS[countryId.toLowerCase()];
    if (loc && loc[language]) {
      return loc[language];
    }
    return {
      name: fallback?.name || countryId,
      tagline: fallback?.tagline || '',
      description: fallback?.description || '',
      signatureDish: fallback?.signatureDish || '',
      primaryFlavor: fallback?.primaryFlavor || '',
      region: fallback?.region || ''
    };
  };

  const getCourseLabel = (course) => {
    if (!course) return '';
    const normalized = course.toLowerCase().replace(/[\s&/_-]+/g, '');
    if (normalized === 'all') return t.courses?.all || 'All';
    if (normalized === 'appetizer') return t.courses?.appetizer || 'Appetizer';
    if (normalized === 'main' || normalized === 'maindish') return t.courses?.main || 'Main';
    if (normalized === 'soup') return t.courses?.soup || 'Soup';
    if (normalized === 'dessert') return t.courses?.dessert || 'Dessert';
    if (normalized === 'streetfood') return t.courses?.streetFood || 'Street Food';
    if (normalized === 'bakery' || normalized === 'bread' || normalized === 'bakerybread') return t.courses?.bakery || 'Bakery';
    if (normalized === 'salad') return t.courses?.salad || 'Salad';
    if (normalized === 'breakfast') return t.courses?.breakfast || 'Breakfast';
    return course;
  };

  const getDifficultyLabel = (difficulty) => {
    if (!difficulty) return '';
    const d = difficulty.toLowerCase();
    if (d === 'easy') return t.difficulties?.easy || 'Easy';
    if (d === 'medium') return t.difficulties?.medium || 'Medium';
    if (d === 'hard') return t.difficulties?.hard || 'Hard';
    return difficulty;
  };

  const getRecipeTitle = (recipe) => {
    if (!recipe) return '';
    const recipeId = recipe.id || '';
    const content = RECIPE_CONTENT_TRANSLATIONS[recipeId];

    if (language === 'ka') {
      if (recipe.titleKa) return recipe.titleKa;
      if (content?.titleKa) return content.titleKa;
      if (recipe.countryId === 'georgia' && recipe.nativeTitle) return recipe.nativeTitle;
      return recipe.title || '';
    }
    return recipe.title || '';
  };

  const getRecipeDescription = (recipe) => {
    if (!recipe) return '';
    const recipeId = recipe.id || '';
    const content = RECIPE_CONTENT_TRANSLATIONS[recipeId];

    if (language === 'ka') {
      if (recipe.descriptionKa) return recipe.descriptionKa;
      if (content?.descriptionKa) return content.descriptionKa;
      return recipe.description || '';
    }
    return recipe.description || '';
  };

  const getRecipeFunFact = (recipe) => {
    if (!recipe) return '';
    const recipeId = recipe.id || '';
    const content = RECIPE_CONTENT_TRANSLATIONS[recipeId];

    if (language === 'ka') {
      if (recipe.funFactKa) return recipe.funFactKa;
      if (content?.funFactKa) return content.funFactKa;
      return recipe.funFact || recipe.culturalFunFact || '';
    }
    return recipe.funFact || recipe.culturalFunFact || '';
  };

  const getRecipeServingNotes = (recipe) => {
    if (!recipe) return '';
    const recipeId = recipe.id || '';
    const content = RECIPE_CONTENT_TRANSLATIONS[recipeId];

    if (language === 'ka') {
      if (recipe.servingNotesKa) return recipe.servingNotesKa;
      if (content?.servingNotesKa) return content.servingNotesKa;
      return recipe.servingNotes || '';
    }
    return recipe.servingNotes || '';
  };

  const getStepDetails = (recipeId, step) => {
    if (!step) {
      return { title: '', instruction: '', chefTip: '', temperature: '' };
    }
    if (language === 'ka') {
      const translated = getTranslatedStep(
        recipeId,
        step.stepNumber,
        step.titleKa || step.title,
        step.instructionKa || step.instruction,
        step.chefTipKa || step.chefTip,
        step.temperatureKa || step.temperature,
        'ka'
      );
      return {
        title: step.titleKa || translated.title,
        instruction: step.instructionKa || translated.instruction,
        chefTip: step.chefTipKa || translated.chefTip || '',
        temperature: step.temperatureKa || translated.temperature || ''
      };
    }
    return {
      title: step.title || '',
      instruction: step.instruction || '',
      chefTip: step.chefTip || '',
      temperature: step.temperature || ''
    };
  };

  const translateIngredient = (name, ingredient) => {
    if (language === 'ka' && ingredient?.nameKa) {
      return ingredient.nameKa;
    }
    return translateIngredientName(name, language);
  };

  const translateUnit = (unit) => {
    if (!unit) return '';
    const lower = unit.trim().toLowerCase();
    const match = UNIT_TRANSLATIONS[lower];
    if (match && language === 'ka') {
      return match[language];
    }
    return unit;
  };

  const translateCategory = (category) => {
    if (!category) return '';
    const trimmed = category.trim();
    const directMatch = CATEGORY_TRANSLATIONS[trimmed];
    if (directMatch && language === 'ka') {
      return directMatch[language];
    }

    const lower = trimmed.toLowerCase();
    for (const [key, val] of Object.entries(CATEGORY_TRANSLATIONS)) {
      if (key.toLowerCase() === lower && language === 'ka') {
        return val[language];
      }
    }
    return category;
  };

  const translateDietaryTag = (tag) => {
    if (!tag) return '';
    if (tag.toLowerCase() === 'all') return t.allDietary;
    const trimmed = tag.trim();
    const directMatch = DIETARY_TAG_TRANSLATIONS[trimmed];
    if (directMatch && language === 'ka') {
      return directMatch[language];
    }
   
    const lower = trimmed.toLowerCase();
    for (const [key, val] of Object.entries(DIETARY_TAG_TRANSLATIONS)) {
      if (key.toLowerCase() === lower && language === 'ka') {
        return val[language];
      }
    }
    return tag;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        languages: LANGUAGES,
        getCountryDetails,
        getCourseLabel,
        getDifficultyLabel,
        getRecipeTitle,
        getRecipeDescription,
        getRecipeFunFact,
        getRecipeServingNotes,
        getStepDetails,
        translateIngredient,
        translateUnit,
        translateCategory,
        translateDietaryTag
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

