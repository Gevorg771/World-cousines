import { normalizeCountryId } from '../countries.js';
import { GEORGIA_RECIPES } from './georgia';
import { ARMENIA_RECIPES } from './armenia';
import { USA_RECIPES } from './usa';
import { ITALY_RECIPES } from './italy';
import { JAPAN_RECIPES } from './japan';
import { FRANCE_RECIPES } from './france';
import { SPAIN_RECIPES } from './spain';
import { GREECE_RECIPES } from './greece';
import { MEXICO_RECIPES } from './mexico';
import { INDIA_RECIPES } from './india';
import { THAILAND_RECIPES } from './thailand';
import { TURKEY_RECIPES } from './turkey';
import { CHINA_RECIPES } from './china';

export {
  GEORGIA_RECIPES,
  ARMENIA_RECIPES,
  USA_RECIPES,
  ITALY_RECIPES,
  JAPAN_RECIPES,
  FRANCE_RECIPES,
  SPAIN_RECIPES,
  GREECE_RECIPES,
  MEXICO_RECIPES,
  INDIA_RECIPES,
  THAILAND_RECIPES,
  TURKEY_RECIPES,
  CHINA_RECIPES
};

export const ALL_RECIPES = [
  ...GEORGIA_RECIPES,
  ...ARMENIA_RECIPES,
  ...USA_RECIPES,
  ...ITALY_RECIPES,
  ...JAPAN_RECIPES,
  ...FRANCE_RECIPES,
  ...SPAIN_RECIPES,
  ...GREECE_RECIPES,
  ...MEXICO_RECIPES,
  ...INDIA_RECIPES,
  ...THAILAND_RECIPES,
  ...TURKEY_RECIPES,
  ...CHINA_RECIPES
];

export const RECIPES_BY_COUNTRY = {
  georgia: GEORGIA_RECIPES,
  armenia: ARMENIA_RECIPES,
  usa: USA_RECIPES,
  italy: ITALY_RECIPES,
  japan: JAPAN_RECIPES,
  france: FRANCE_RECIPES,
  spain: SPAIN_RECIPES,
  greece: GREECE_RECIPES,
  mexico: MEXICO_RECIPES,
  india: INDIA_RECIPES,
  thailand: THAILAND_RECIPES,
  turkey: TURKEY_RECIPES,
  china: CHINA_RECIPES
};

/**
 * Retrieves all recipes for a given country.
 */
export function getRecipesByCountry(countryId) {
  const normalized = normalizeCountryId(countryId);
  return RECIPES_BY_COUNTRY[normalized] || RECIPES_BY_COUNTRY[countryId.toLowerCase()] || [];
}

/**
 * Retrieves a single recipe by unique ID.
 */
export function getRecipeById(recipeId) {
  return ALL_RECIPES.find(r => r.id === recipeId);
}

/**
 * Returns the count of recipes available for a given country.
 */
export function getRecipeCountByCountry(countryId) {
  const recipes = getRecipesByCountry(countryId);
  return recipes.length;
}

/**
 * Quick search across all recipes.
 */
export function searchRecipes(query, countryId) {
  let list = countryId ? getRecipesByCountry(countryId) : ALL_RECIPES;
  const q = query.trim().toLowerCase();
  if (!q) return list;
  return list.filter(r => 
    r.title.toLowerCase().includes(q) ||
    (r.nativeTitle && r.nativeTitle.toLowerCase().includes(q)) ||
    r.description.toLowerCase().includes(q) ||
    r.ingredients.some(i => i.name.toLowerCase().includes(q)) ||
    (r.dietaryTags && r.dietaryTags.some(t => t.toLowerCase().includes(q)))
  );
}
