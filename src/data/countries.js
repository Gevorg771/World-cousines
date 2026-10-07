
export const COUNTRIES = [
  {
    id: 'georgia',
    name: 'Georgia',
    nativeName: 'საქართველო (Sakartvelo)',
    flag: '🇬🇪',
    region: 'Caucasus / Eastern Europe',
    tagline: 'Cradle of Wine & Legendary Supra Feasts',
    description: 'A vibrant crossroad cuisine renowned for spiced walnut sauces, clay-pot stews, bubbling cheese breads, and fragrant mountain herbs.',
    isSpotlight: true,
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=1200&q=80',
    signatureDish: 'Adjaruli Khachapuri',
    primaryFlavor: 'Walnuts, Blue Fenugreek, Purple Basil, Coriander, Garlic'
  },
  {
    id: 'usa',
    name: 'USA',
    nativeName: 'United States of America',
    flag: '🇺🇸',
    region: 'North America',
    tagline: 'Rich Regional Traditions & Bold Comfort Flavors',
    description: 'From low-and-slow Texas barbecue pits to Louisiana Creole pots and coastal seafood boils, celebrating diverse culinary heritage.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80',
    signatureDish: 'Texas Smoked Brisket',
    primaryFlavor: 'Hickory Smoke, Brown Sugar, Buttermilk, Cajun Spices, Apple Cider'
  },
  {
    id: 'italy',
    name: 'Italy',
    nativeName: 'Italia',
    flag: '🇮🇹',
    region: 'Southern Europe',
    tagline: 'Simplicity, Fresh Seasonal Produce & Artisanal Craft',
    description: 'Mastery of regional terroir where premium olive oils, aged cheeses, sun-ripened tomatoes, and hand-rolled pastas take center stage.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
    signatureDish: 'Spaghetti alla Carbonara',
    primaryFlavor: 'San Marzano Tomatoes, Basil, Extra Virgin Olive Oil, Parmigiano, Garlic'
  },
  {
    id: 'japan',
    name: 'Japan',
    nativeName: '日本 (Nihon)',
    flag: '🇯🇵',
    region: 'East Asia',
    tagline: 'Art of Umami, Seasonal Balance & Culinary Precision',
    description: 'A delicate philosophy that honors natural ingredient qualities with intricate knife craft, dashi stocks, fermented sauces, and pristine presentations.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
    signatureDish: 'Tonkotsu Ramen',
    primaryFlavor: 'Dashi, Kombu, Mirin, White & Red Miso, Toasted Sesame, Shoyu'
  },
  {
    id: 'france',
    name: 'France',
    nativeName: 'République Française',
    flag: '🇫🇷',
    region: 'Western Europe',
    tagline: 'The Foundation of Classic Haute Cuisine & Gastronomy',
    description: 'Centuries of refined techniques, slow-simmered reductions, golden butter sauces, and artisanal baking celebrated worldwide.',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=1200&q=80',
    signatureDish: 'Boeuf Bourguignon',
    primaryFlavor: 'Beurre Noisette, Pinot Noir, Bouquet Garni, Shallots, Dijon Mustard'
  },
  {
    id: 'mexico',
    name: 'Mexico',
    nativeName: 'México',
    flag: '🇲🇽',
    region: 'Mesoamerica',
    tagline: 'Ancestral Masa, Complex Chiles & UNESCO Intangible Heritage',
    description: 'Dynamic layers of charred heirloom chiles, aromatic epazote, rich cacao moles, lime, and nixtamalized corn tortillas.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80',
    signatureDish: 'Birria de Res Tacos',
    primaryFlavor: 'Ancho & Guajillo Chiles, Mexican Oregano, Fresh Lime, Cumin, Epazote'
  },
  {
    id: 'india',
    name: 'India',
    nativeName: 'भारत (Bharat)',
    flag: '🇮🇳',
    region: 'South Asia',
    tagline: 'The Sacred Symphony of Spices & Regional Complexity',
    description: 'An immense tapestry of culinary wisdom featuring blooming whole spices, slow-simmered gravies, charcoal tandoor roasts, and fermented flatbreads.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
    signatureDish: 'Murgh Makhani (Butter Chicken)',
    primaryFlavor: 'Kashmiri Chili, Garam Masala, Kasuri Methi, Ginger, Cardamom, Ghee'
  },
  {
    id: 'thailand',
    name: 'Thailand',
    nativeName: 'ประเทศไทย (Prathet Thai)',
    flag: '🇹🇭',
    region: 'Southeast Asia',
    tagline: 'The Harmonious Dance of Sweet, Sour, Salty, Spicy & Bitter',
    description: 'Fresh aromatic pestle-crushed pastes, fragrant coconut broths, fiery bird’s eye chilis, crunchy herbs, and wok-charred street noodles.',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1200&q=80',
    signatureDish: 'Classic Pad Thai Goong',
    primaryFlavor: 'Lemongrass, Galangal, Kaffir Lime, Fish Sauce, Palm Sugar, Thai Basil'
  },
  {
    id: 'turkey',
    name: 'Turkey',
    nativeName: 'Türkiye',
    flag: '🇹🇷',
    region: 'Eurasia',
    tagline: 'Imperial Ottoman Banquets & Silk Road Spice Crossroads',
    description: 'Wood-fired skewered kebabs, stone-baked flatbreads, silky olive oil mezes, layered pistachio phyllo, and roasted eggplant delicacies.',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=1200&q=80',
    signatureDish: 'Traditional İskender Kebap',
    primaryFlavor: 'Urfa & Aleppo Pepper, Sumac, Pomegranate Molasses, Mint, Cumin'
  },
  {
    id: 'armenia',
    name: 'Armenia',
    nativeName: 'Հայաստան (Hayastan)',
    flag: '🇦🇲',
    region: 'Caucasus / West Asia',
    tagline: 'Ancient Mountain Terroir, Wild Herbs & Stone-Oven Feasts',
    description: 'One of humanity’s oldest cuisines: fragrant skewered Khorovats, delicate grape leaf Tolma, mountain herb Jingalov Hats, and rich slow-braised wheat porridges.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
    signatureDish: 'Khorovats (Armenian BBQ)',
    primaryFlavor: 'Purple Basil (Rehan), Tarragon, Sumac, Chaman (Fenugreek), Dried Apricot, Clarified Butter'
  },
  {
    id: 'greece',
    name: 'Greece',
    nativeName: 'Ελλάδα (Ellada)',
    flag: '🇬🇷',
    region: 'Southern Europe',
    tagline: 'Sun-Drenched Olive Groves, Wild Oregano & Aegean Feasts',
    description: 'Centuries of Aegean culinary art combining golden cold-pressed olive oils, mountain oregano, crisp phyllo pastries, barrel-aged feta, and slow-baked clay casseroles.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    signatureDish: 'Traditional Greek Moussaka',
    primaryFlavor: 'Greek Wild Oregano, Extra Virgin Olive Oil, Lemon, Garlic, Barrel Feta, Kalamata Olives'
  },
  {
    id: 'spain',
    name: 'Spain',
    nativeName: 'España',
    flag: '🇪🇸',
    region: 'Southern Europe',
    tagline: 'Saffron Fields, Tapas Culture & Master Wood-Fire Paellas',
    description: 'A rich regional mosaic of saffron-scented socarrat paellas, garlic gambas, slow-cured jamón, and Andalusian chilled summer gazpachos.',
    image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=1200&q=80',
    signatureDish: 'Paella Valenciana',
    primaryFlavor: 'Smoked Pimentón de la Vera, Saffron, Garlic, Sherry Vinegar, Arbequina Olive Oil'
  },
  {
    id: 'china',
    name: 'China',
    nativeName: '中国 (Zhōngguó)',
    flag: '🇨🇳',
    region: 'East Asia',
    tagline: 'Five Flavors Balance, Wok Hei & Millennia of Gastronomic Mastery',
    description: 'An ancient gastronomic empire featuring roaring wok stir-fries, delicate folded dim sum dumplings, Sichuan numbing peppercorns, and slow-roasted glazed poultry.',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=1200&q=80',
    signatureDish: 'Peking Roast Duck',
    primaryFlavor: 'Ginger, Scallions, Sichuan Peppercorn, Shaoxing Wine, Star Anise, Fermented Bean Paste'
  }
];

export const COUNTRY_ALIASES = {
  // USA / America
  'america': 'usa',
  'ამერიკა': 'usa',
  'united-states': 'usa',
  'unitedstates': 'usa',
  'united_states': 'usa',
  'us': 'usa',
  'usa': 'usa',
  'აშშ': 'usa',
  // Georgia
  'georgia': 'georgia',
  'sakartvelo': 'georgia',
  'საქართველო': 'georgia',
  // Italy
  'italy': 'italy',
  'italia': 'italy',
  'იტალია': 'italy',
  // Armenia
  'armenia': 'armenia',
  'სომხეთი': 'armenia',
  'hayastan': 'armenia',
  // Japan
  'japan': 'japan',
  'იაპონია': 'japan',
  'nihon': 'japan',
  // France
  'france': 'france',
  'საფრანგეთი': 'france',
  // Spain
  'spain': 'spain',
  'espana': 'spain',
  'ესპანეთი': 'spain',
  // Mexico
  'mexico': 'mexico',
  'მექსიკა': 'mexico',
  // Greece
  'greece': 'greece',
  'hellas': 'greece',
  'საბერძნეთი': 'greece',
  // India
  'india': 'india',
  'bharat': 'india',
  'ინდოეთი': 'india',
  // Thailand
  'thailand': 'thailand',
  'ტაილანდი': 'thailand',
  // Turkey
  'turkey': 'turkey',
  'turkiye': 'turkey',
  'თურქეთი': 'turkey',
  // China
  'china': 'china',
  'ჩინეთი': 'china'
};

export function normalizeCountryId(id) {
  if (!id) return '';
  const clean = decodeURIComponent(id).trim().toLowerCase();
  return COUNTRY_ALIASES[clean] || clean;
}
