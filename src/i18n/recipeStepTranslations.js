// Localized cooking steps translations (Georgian & English)
import { GEORGIA_STEPS } from './steps/georgiaSteps';
import { ARMENIA_STEPS } from './steps/armeniaSteps';
import { USA_STEPS } from './steps/usaSteps';
import { ITALY_STEPS } from './steps/italySteps';
import { FRANCE_STEPS } from './steps/franceSteps';
import { SPAIN_STEPS } from './steps/spainSteps';
import { GREECE_STEPS } from './steps/greeceSteps';
import { MEXICO_STEPS } from './steps/mexicoSteps';
import { CHINA_STEPS } from './steps/chinaSteps';
import { JAPAN_STEPS } from './steps/japanSteps';
import { INDIA_STEPS } from './steps/indiaSteps';
import { THAILAND_STEPS } from './steps/thailandSteps';
import { TURKEY_STEPS } from './steps/turkeySteps';
import { EXTENDED_STEPS_KA } from './steps/extendedStepsKa';
import { CHEF_TIPS_KA } from './chefTipsKa';
import { TEMPERATURES_KA } from './temperaturesKa';

export const RECIPE_STEP_TRANSLATIONS = {
  ...GEORGIA_STEPS,
  ...ARMENIA_STEPS,
  ...USA_STEPS,
  ...ITALY_STEPS,
  ...FRANCE_STEPS,
  ...SPAIN_STEPS,
  ...GREECE_STEPS,
  ...MEXICO_STEPS,
  ...CHINA_STEPS,
  ...JAPAN_STEPS,
  ...INDIA_STEPS,
  ...THAILAND_STEPS,
  ...TURKEY_STEPS,

  'arm-tolma': ARMENIA_STEPS['arm-dolma'] || ARMENIA_STEPS['arm-tolma'],
  'usa-cheeseburger': USA_STEPS['usa-smash-burger'],
  'usa-mac-and-cheese': USA_STEPS['usa-cornbread'],
  'usa-bbq-ribs': USA_STEPS['usa-pulled-pork'],
  'usa-philly-cheesesteak': USA_STEPS['usa-smash-burger'],
  'usa-chocolate-chip-cookies': USA_STEPS['usa-apple-pie'],
  'geo-ajapsandali-classic': GEORGIA_STEPS['geo-ajapsandali'],
  'ita-pizza': ITALY_STEPS['ita-margherita-pizza'],
  'ita-pasta-carbonara': ITALY_STEPS['ita-carbonara'],
  'ita-pasta-bolognese': ITALY_STEPS['ita-bolognese'],
  'fra-onion-soup': FRANCE_STEPS['fra-french-onion-soup'],
  'esp-paella': SPAIN_STEPS['esp-valencian-paella'],
  'gre-moussaka-traditional': GREECE_STEPS['gre-moussaka'],
  'mex-guacamole-dip': MEXICO_STEPS['mex-guacamole'],
  'chn-kung-pao': CHINA_STEPS['chn-kung-pao-chicken'],
  'jpn-ramen': JAPAN_STEPS['jpn-tonkotsu-ramen'],
  'ind-butter-chicken-delhi': INDIA_STEPS['ind-butter-chicken'],
  'tha-pad-thai-classic': THAILAND_STEPS['tha-pad-thai'],
  'tur-iskender': TURKEY_STEPS['tur-iskender-kebap']
};


export function getTranslatedStep(
  recipeId,
  stepNumber,
  fallbackTitle,
  fallbackInstruction,
  fallbackChefTip,
  fallbackTemperature,
  lang = 'ka'
) {
  if (lang === 'en') {
    return {
      title: fallbackTitle,
      instruction: fallbackInstruction,
      chefTip: fallbackChefTip || '',
      temperature: fallbackTemperature || ''
    };
  }


  const ext = EXTENDED_STEPS_KA[recipeId]?.[stepNumber];


  const recipeSteps = RECIPE_STEP_TRANSLATIONS[recipeId];
  const dictStep = recipeSteps?.[stepNumber];

  const s = ext || dictStep;

  const tipKey = `${recipeId}_${stepNumber}`;
  const localizedChefTip = CHEF_TIPS_KA[tipKey] || s?.chefTipKa || '';

  const rawTemp = s?.temperatureKa || s?.temperature || fallbackTemperature || '';
  const localizedTemperature = TEMPERATURES_KA[rawTemp] || s?.temperatureKa || rawTemp;

  if (s && s.titleKa && s.instructionKa) {
    return {
      title: s.titleKa,
      instruction: s.instructionKa,
      chefTip: localizedChefTip,
      temperature: localizedTemperature
    };
  }

  if (s) {
    return {
      title: s.titleKa || fallbackTitle,
      instruction: s.instructionKa || fallbackInstruction,
      chefTip: localizedChefTip,
      temperature: localizedTemperature
    };
  }

  
  return {
    title: fallbackTitle,
    instruction: fallbackInstruction,
    chefTip: localizedChefTip,
    temperature: localizedTemperature
  };
}
