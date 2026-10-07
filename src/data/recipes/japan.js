
export const JAPAN_RECIPES = [
  {
    id: 'jpn-tonkotsu-ramen',
    countryId: 'japan',
    title: 'Hakata Tonkotsu Ramen',
    nativeTitle: '博多豚骨ラーメン',
    description: 'Creamy 12-hour pork marrow bone broth with springy thin Hakata noodles, tender rolled chashu pork belly, marinated ajitsuke tamago, and fragrant black garlic oil.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Shoyu_Ramen%EF%BC%88Tokyo_Ramen%EF%BC%89_-_01.jpg/960px-Shoyu_Ramen%EF%BC%88Tokyo_Ramen%EF%BC%89_-_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 45,
    cookTimeMinutes: 720,
    servings: 4,
    difficulty: 'Hard',
    caloriesPerServing: 720,
    dietaryTags: ['High-Protein', 'Iconic Street Food'],
    course: 'Main',
    ingredients: [
      { name: 'Pork Femur & Trotter Bones (cut open)', amount: 2000, unit: 'g', category: 'Broth' },
      { name: 'Rolled Pork Belly Chashu', amount: 400, unit: 'g', category: 'Topping' },
      { name: 'Fresh Hakata Style Thin Ramen Noodles', amount: 480, unit: 'g', category: 'Noodles' },
      { name: 'Ajitsuke Tamago (soft boiled marinated eggs)', amount: 4, unit: 'pcs', category: 'Topping' },
      { name: 'Shoyu Tare (soy sauce seasoning base)', amount: 120, unit: 'ml', category: 'Tare' },
      { name: 'Mayu (Black Garlic Oil)', amount: 40, unit: 'ml', category: 'Aroma Oil' },
      { name: 'Wood Ear Mushrooms (kikurage)', amount: 60, unit: 'g', category: 'Garnish' },
      { name: 'Finely Sliced Tokyo Negi Scallions', amount: 50, unit: 'g', category: 'Garnish' },
      { name: 'Nori Seaweed Sheets', amount: 4, unit: 'pcs', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Blanch and Clean Pork Bones',
        instruction: 'Boil bones for 15 minutes, dump all bloody water, and scrub bones clean under cold running water with a stiff brush to remove dark marrow impurities.',
        durationMinutes: 30
      },
      {
        stepNumber: 2,
        title: 'Rolling Emulsion Boil',
        instruction: 'Cover cleaned bones with 5L fresh water. Maintain a violent rolling boil for 10-12 hours, replenishing water as needed, until collagen emulsifies into an opaque, milky white broth.',
        durationMinutes: 600,
        temperature: 'Rolling Boil'
      },
      {
        stepNumber: 3,
        title: 'Braised Chashu Roll',
        instruction: 'Sear rolled pork belly in a pan, then braise in soy sauce, mirin, sake, and ginger for 2 hours until tender. Slice into medallions.',
        durationMinutes: 120
      },
      {
        stepNumber: 4,
        title: 'Assemble the Ramen Bowl',
        instruction: 'Warm bowls with hot water. Add 30ml shoyu tare and a spoonful of lard/mayu. Pour 350ml boiling tonkotsu broth. Boil noodles for 45-60 seconds (katame/firm), drain vigorously, and fold into broth.',
        durationMinutes: 5
      },
      {
        stepNumber: 5,
        title: 'Top and Slurp',
        instruction: 'Arrange sliced chashu, halved ramen egg, shredded kikurage mushrooms, scallions, nori, and a swirl of black garlic oil. Slurp loudly while piping hot.',
        durationMinutes: 2
      }
    ],
    funFact: 'In Fukuoka (Hakata), customers routinely order "Kaedama" — an extra serving of hot noodles tossed straight into their leftover broth!',
    servingNotes: 'Serve immediately; ramen noodles continue softening in hot soup every passing second.'
  },
  {
    id: 'jpn-chicken-katsu-curry',
    countryId: 'japan',
    title: 'Crispy Chicken Katsu Japanese Curry',
    nativeTitle: 'チキンカツカレー',
    description: 'Shatteringly crisp panko-breaded chicken cutlet served over steaming Japanese short-grain rice with a rich, spiced sweet-savory vegetable curry.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Beef_curry_rice_003.jpg/960px-Beef_curry_rice_003.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 25,
    cookTimeMinutes: 35,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 650,
    dietaryTags: ['High-Protein', 'Japanese Comfort Food'],
    course: 'Main',
    ingredients: [
      { name: 'Chicken Thigh Fillets (skinless, boneless)', amount: 600, unit: 'g', category: 'Poultry' },
      { name: 'Japanese Panko Breadcrumbs', amount: 150, unit: 'g', category: 'Breading' },
      { name: 'Koshihikari Short-Grain Rice (cooked)', amount: 600, unit: 'g', category: 'Rice' },
      { name: 'Japanese S&B Curry Roux Block', amount: 100, unit: 'g', category: 'Curry' },
      { name: 'Carrots and Yukon Gold Potatoes (cubed)', amount: 350, unit: 'g', category: 'Vegetable' },
      { name: 'Yellow Onions (thinly sliced)', amount: 300, unit: 'g', category: 'Aromatics' },
      { name: 'Grated Apple & Honey', amount: 40, unit: 'g', category: 'Curry Secret' },
      { name: 'Fukujinzuke (red pickled relish)', amount: 60, unit: 'g', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Caramelize Curry Onions',
        instruction: 'Cook sliced onions in butter over medium heat for 20 minutes until sweet and deep amber. Add cubed carrots and potatoes, sauté 3 minutes.',
        durationMinutes: 22
      },
      {
        stepNumber: 2,
        title: 'Simmer Curry Base',
        instruction: 'Pour in 700ml dashi or water, grated apple, and honey. Simmer for 15 minutes until vegetables are tender. Stir in curry roux blocks off heat until dissolved, then simmer 5 minutes to thicken.',
        durationMinutes: 20
      },
      {
        stepNumber: 3,
        title: 'Panko Dredge Cutlets',
        instruction: 'Dredge chicken in seasoned flour, beaten egg, and press firmly into coarse Japanese panko flakes.',
        durationMinutes: 8
      },
      {
        stepNumber: 4,
        title: 'Crispy Deep Fry',
        instruction: 'Fry in vegetable oil at 170°C for 5-6 minutes until golden brown and crunchy. Slice into strips.',
        durationMinutes: 8,
        temperature: '170°C / 340°F'
      },
      {
        stepNumber: 5,
        title: 'Plate Half-and-Half',
        instruction: 'Mound rice on one side of an oval plate, ladle curry on the other, rest sliced katsu over both, and garnish with crimson fukujinzuke pickles.',
        durationMinutes: 3
      }
    ],
    funFact: 'Japanese curry was introduced by the British Royal Navy in the Meiji era and adapted to suit local palates with sweeter notes like apple and honey.',
    servingNotes: 'Eat with a spoon, scooping a bite of rice, curry, and crunchy cutlet together.'
  },
  {
    id: 'jpn-okonomiyaki',
    countryId: 'japan',
    title: 'Osaka-Style Savory Okonomiyaki',
    nativeTitle: '大阪お好み焼き',
    description: 'Thick savory pancake loaded with sweet shredded cabbage, nagaimo mountain yam batter, and pork belly strips, drizzled with Kewpie mayo, sweet sauce, and dancing bonito flakes.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Okonomiyaki_001.jpg/960px-Okonomiyaki_001.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 2,
    difficulty: 'Easy',
    caloriesPerServing: 520,
    dietaryTags: ['Street Food', 'Comfort Food'],
    course: 'Main',
    ingredients: [
      { name: 'Green Cabbage (finely chopped into 5mm squares)', amount: 350, unit: 'g', category: 'Vegetable' },
      { name: 'Flour & Dashi Batter', amount: 150, unit: 'g', category: 'Batter' },
      { name: 'Grated Nagaimo Mountain Yam (for fluffiness)', amount: 50, unit: 'g', category: 'Batter' },
      { name: 'Large Eggs', amount: 2, unit: 'pcs', category: 'Batter' },
      { name: 'Thin Pork Belly Slices', amount: 120, unit: 'g', category: 'Meat' },
      { name: 'Otafuku Okonomiyaki Sauce', amount: 50, unit: 'ml', category: 'Topping' },
      { name: 'Kewpie Japanese Mayonnaise', amount: 40, unit: 'ml', category: 'Topping' },
      { name: 'Katsuobushi Bonito Flakes', amount: 10, unit: 'g', category: 'Topping' },
      { name: 'Aonori Seaweed Powder', amount: 5, unit: 'g', category: 'Topping' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Fold Batter Lightly',
        instruction: 'Whisk flour, dashi, grated nagaimo, and eggs. Fold in chopped cabbage with a spoon from the bottom up to incorporate air (do not overmix or compress).',
        durationMinutes: 5
      },
      {
        stepNumber: 2,
        title: 'Griddle and Top with Pork',
        instruction: 'Pour batter onto a 200°C teppan griddle or nonstick skillet into a 2.5cm thick circle. Lay raw pork belly strips across the top. Cover and steam for 5 minutes.',
        durationMinutes: 6,
        temperature: '200°C / 400°F'
      },
      {
        stepNumber: 3,
        title: 'Flip and Crisp',
        instruction: 'Flip pancake so pork belly is on the griddle. Cook uncovered for 5 minutes until pork is sizzling crisp and pancake is cooked through. Flip back up.',
        durationMinutes: 6
      },
      {
        stepNumber: 4,
        title: 'Decorate & Bonito Dance',
        instruction: 'Brush generously with brown okonomiyaki sauce. Zigzag Kewpie mayo in fine stripes. Dust with aonori and top with bonito flakes, which flutter from the rising steam.',
        durationMinutes: 2
      }
    ],
    funFact: 'Okonomiyaki literally means "grilled as you like it", reflecting how diner patrons in Osaka select their own favorite ingredients.',
    servingNotes: 'Slice into grid wedges using small metal spatulas (hera) directly at the table.'
  },
  {
    id: 'jpn-tempura',
    countryId: 'japan',
    title: 'Ebi & Seasonal Vegetable Tempura',
    nativeTitle: '天ぷら盛り合わせ',
    description: 'Feather-light, lace-crusted wild black tiger prawns, sweet kabocha pumpkin, lotus root, and shiso leaves fried in ice-cold batter with tensuyu dipping broth.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Tempura_01.jpg/960px-Tempura_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 25,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 420,
    dietaryTags: ['Seafood', 'Crispy', 'Classic'],
    course: 'Main',
    ingredients: [
      { name: 'Black Tiger Prawns (shelled, tail on, straightened)', amount: 8, unit: 'pcs', category: 'Seafood' },
      { name: 'Kabocha Pumpkin & Lotus Root (sliced 5mm)', amount: 250, unit: 'g', category: 'Vegetables' },
      { name: 'Fresh Shiso Green Perilla Leaves', amount: 4, unit: 'pcs', category: 'Herb' },
      { name: 'Cake Flour (low gluten)', amount: 120, unit: 'g', category: 'Batter' },
      { name: 'Ice-Cold Sparkling Water or Water with Ice', amount: 200, unit: 'ml', category: 'Batter' },
      { name: 'Egg Yolk', amount: 1, unit: 'pc', category: 'Batter' },
      { name: 'Tensuyu Dip (dashi, mirin, soy sauce) & Grated Daikon', amount: 200, unit: 'ml', category: 'Dip' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Straighten Prawns',
        instruction: 'Make small diagonal slits along the belly of each prawn and press gently until you feel the tendons snap, keeping the prawn straight when fried.',
        durationMinutes: 8
      },
      {
        stepNumber: 2,
        title: 'Barely-Mixed Ice Batter',
        instruction: 'Whisk egg yolk into iced water. Add cake flour all at once and stir with chopsticks only 10 times. Visible lumps of dry flour must remain to prevent gluten formation.',
        durationMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Flash Fry in Sesame Oil Blend',
        instruction: 'Dust ingredients lightly in dry flour, dip into ice batter, and slide into oil heated to 180°C. Flick drops of batter onto the frying items to create lacy crisp bloom (hana). Fry 2-3 minutes.',
        durationMinutes: 12,
        temperature: '180°C / 350°F'
      }
    ],
    funFact: 'Tempura was introduced to Nagasaki by Portuguese Jesuit missionaries in the 16th century (from "ad tempora quadragesimae", referring to meatless fasting seasons).',
    servingNotes: 'Serve immediately on washi paper with tensuyu dipping broth and grated daikon radish.'
  },
  {
    id: 'jpn-miso-black-cod',
    countryId: 'japan',
    title: 'Saikyo Miso-Glazed Black Cod',
    nativeTitle: '銀鱈の西京焼き',
    description: 'Velvety Alaskan sablefish marinated for 72 hours in sweet Kyoto white Saikyo miso, mirin, and sake, then broiled until caramelized and lacquered.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80',
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 390,
    dietaryTags: ['Seafood', 'Gluten-Free Option', 'Gourmet'],
    course: 'Main',
    ingredients: [
      { name: 'Black Cod (Sablefish) Fillets', amount: 650, unit: 'g', category: 'Fish' },
      { name: 'Saikyo Sweet White Miso', amount: 250, unit: 'g', category: 'Marinade' },
      { name: 'Hon-Mirin (sweet rice wine)', amount: 80, unit: 'ml', category: 'Marinade' },
      { name: 'Cooking Sake', amount: 80, unit: 'ml', category: 'Marinade' },
      { name: 'Granulated Sugar', amount: 40, unit: 'g', category: 'Marinade' },
      { name: 'Pickled Hajikami Ginger Shoots', amount: 4, unit: 'pcs', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Simmer Miso Marinade',
        instruction: 'Bring sake and mirin to a boil to evaporate alcohol. Whisk in sweet white miso and sugar over low heat until smooth. Let cool completely.',
        durationMinutes: 8
      },
      {
        stepNumber: 2,
        title: 'Cure in Refrigerator',
        instruction: 'Salt fish fillets lightly, wipe dry after 20 minutes. Slather fish thoroughly with miso marinade, wrap in parchment, and cure in fridge for 48 to 72 hours.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Caramelized Broil',
        instruction: 'Wipe excess miso from fish (do not rinse). Broil under high oven broiler for 8-10 minutes, watching carefully until edges blister and brown in spots.',
        durationMinutes: 10,
        temperature: 'Broiler High'
      }
    ],
    funFact: 'Made world-famous by Chef Nobu Matsuhisa, Saikyo miso comes from Kyoto and has a naturally sweet, low-sodium profile.',
    servingNotes: 'Garnish with an elegant pink hajikami pickled ginger stem.'
  },
  {
    id: 'jpn-gyudon',
    countryId: 'japan',
    title: 'Tokyo Gyudon (Simmered Beef Bowl)',
    nativeTitle: '牛丼',
    description: 'Paper-thin ribbons of marbled beef and sweet yellow onions gently simmered in a sweet soy-dashi broth over a steaming bowl of Koshihikari rice.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Gyuu-don_001.jpg/960px-Gyuu-don_001.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    servings: 2,
    difficulty: 'Easy',
    caloriesPerServing: 510,
    dietaryTags: ['High-Protein', 'Quick Comfort'],
    course: 'Main',
    ingredients: [
      { name: 'Thinly Sliced Ribeye Beef (shabu-shabu cut)', amount: 300, unit: 'g', category: 'Meat' },
      { name: 'Yellow Onion (thinly sliced)', amount: 180, unit: 'g', category: 'Aromatics' },
      { name: 'Dashi Stock', amount: 200, unit: 'ml', category: 'Broth' },
      { name: 'Japanese Soy Sauce', amount: 45, unit: 'ml', category: 'Seasoning' },
      { name: 'Mirin & Sake', amount: 60, unit: 'ml', category: 'Seasoning' },
      { name: 'Brown Sugar', amount: 15, unit: 'g', category: 'Seasoning' },
      { name: 'Steamed Japanese Short-Grain Rice', amount: 400, unit: 'g', category: 'Grain' },
      { name: 'Beni Shoga (red pickled ginger) & Onsen Egg', amount: 2, unit: 'pcs', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Simmer Onions in Dashi',
        instruction: 'Combine dashi, soy sauce, mirin, sake, and sugar in a shallow pan. Bring to a boil, add sliced onions, and simmer 6 minutes until sweet and tender.',
        durationMinutes: 7
      },
      {
        stepNumber: 2,
        title: 'Gently Poach Shaved Beef',
        instruction: 'Add thinly shaved beef slices one by one, separating pieces. Skim any foam and simmer for 4 minutes just until pink fades to retain tender juiciness.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Ladle Over Hot Rice',
        instruction: 'Heap hot rice into deep bowls. Spoon simmering beef and sweet onions with plenty of aromatic broth over the rice. Top with an onsen egg and red ginger.',
        durationMinutes: 2
      }
    ],
    funFact: 'Gyudon arose during the Meiji era as Japan began embracing beef; it remains Japan’s quintessential quick gourmet fast food.',
    servingNotes: 'Break the runny egg yolk and stir into the hot beef and rice.'
  },
  {
    id: 'jpn-yakitori',
    countryId: 'japan',
    title: 'Tokyo Charcoal Yakitori (Tare Glaze)',
    nativeTitle: '焼き鳥 盛り合わせ',
    description: 'Skewered bite-sized chicken thighs and crisp sweet scallions grilled over binchotan white charcoal, glazed repeatedly in sweet tare sauce.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Cooking_yakitori.jpg/960px-Cooking_yakitori.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 25,
    cookTimeMinutes: 12,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 380,
    dietaryTags: ['High-Protein', 'Izakaya Classic', 'Gluten-Free Option'],
    course: 'Appetizer',
    ingredients: [
      { name: 'Chicken Thigh Meat (cut into 2.5cm pieces)', amount: 600, unit: 'g', category: 'Meat' },
      { name: 'Tokyo Negi or Thick Scallions (cut into 2.5cm cylinders)', amount: 8, unit: 'stalks', category: 'Aromatics' },
      { name: 'Soy Sauce, Mirin, Sake & Sugar (Yakitori Tare)', amount: 150, unit: 'ml', category: 'Glaze' },
      { name: 'Shichimi Togarashi (7-spice blend)', amount: 5, unit: 'g', category: 'Garnish' },
      { name: 'Bamboo Skewers (soaked in water 30 mins)', amount: 10, unit: 'pcs', category: 'Hardware' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Reduce Tare Glaze',
        instruction: 'Simmer soy sauce, mirin, sake, sugar, and scallion greens for 15 minutes until glossy and thick enough to coat the back of a spoon.',
        durationMinutes: 15
      },
      {
        stepNumber: 2,
        title: 'Thread Negima Skewers',
        instruction: 'Alternate threading chicken thigh chunks and scallion rounds snugly onto bamboo skewers.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Grill and Dip',
        instruction: 'Grill skewers over high heat for 6 minutes, turning once. Dip entire skewer into the tare pot, return to grill for 2 minutes, dip a second time, and grill until caramelized.',
        durationMinutes: 10,
        temperature: 'High Heat'
      }
    ],
    funFact: 'Yakitori masters in Tokyo use white binchotan charcoal from Kishu oak, which burns virtually smokeless at over 1000°C with steady infrared heat.',
    servingNotes: 'Serve with ice cold draft beer and dusting of shichimi togarashi.'
  },
  {
    id: 'jpn-takoyaki',
    countryId: 'japan',
    title: 'Osaka Street Food Takoyaki',
    nativeTitle: 'たこ焼き',
    description: 'Crispy sphere cakes with creamy molten interiors packed with tender octopus chunks, pickled red ginger, green onions, and tempura flakes.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/%E3%82%BD%E3%83%BC%E3%82%B9%E3%81%A8%E3%83%9D%E3%83%B3%E9%85%A2%E3%81%AE%E3%81%9F%E3%81%93%E7%84%BC%E3%81%8D.jpg/960px-%E3%82%BD%E3%83%BC%E3%82%B9%E3%81%A8%E3%83%9D%E3%83%B3%E9%85%A2%E3%81%AE%E3%81%9F%E3%81%93%E7%84%BC%E3%81%8D.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 350,
    dietaryTags: ['Street Food', 'Seafood'],
    course: 'Street Food',
    ingredients: [
      { name: 'Boiled Octopus (cut into 1cm cubes)', amount: 200, unit: 'g', category: 'Seafood' },
      { name: 'Dashi & Flour Takoyaki Batter', amount: 600, unit: 'ml', category: 'Batter' },
      { name: 'Tenkasu (crunchy tempura scrap flakes)', amount: 50, unit: 'g', category: 'Filling' },
      { name: 'Beni Shoga (pickled red ginger, minced)', amount: 30, unit: 'g', category: 'Filling' },
      { name: 'Takoyaki Sauce & Japanese Mayo', amount: 80, unit: 'ml', category: 'Topping' },
      { name: 'Katsuobushi (shaved bonito) & Aonori', amount: 15, unit: 'g', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Oil Takoyaki Pan',
        instruction: 'Heat cast iron hemispherical takoyaki mold to 200°C. Generously oil each cup and the top surface with vegetable oil.',
        durationMinutes: 3
      },
      {
        stepNumber: 2,
        title: 'Fill with Batter and Fillings',
        instruction: 'Pour batter into cups until overflowing onto the flat deck. Drop an octopus cube into each mold, then scatter tenkasu, ginger, and scallions everywhere.',
        durationMinutes: 3
      },
      {
        stepNumber: 3,
        title: 'The 90-Degree Turn Technique',
        instruction: 'Once bottoms crisp, use two bamboo skewers to cut the surface batter into squares, tuck excess into the cups, and rotate balls 90 degrees. Turn continually until perfectly round and crispy golden.',
        durationMinutes: 8
      },
      {
        stepNumber: 4,
        title: 'Dress and Serve',
        instruction: 'Brush with sweet takoyaki sauce, zigzag mayo, and scatter bonito flakes and aonori on top.',
        durationMinutes: 2
      }
    ],
    funFact: 'Invented in 1935 in Osaka by street vendor Tomekichi Endo, inspired by radio-yaki and akashiyaki dumplings.',
    servingNotes: 'Eat with toothpicks, but beware: the molten center stays volcanic for several minutes!'
  },
  {
    id: 'jpn-tamagoyaki',
    countryId: 'japan',
    title: 'Dashi Tamagoyaki (Rolled Japanese Omelet)',
    nativeTitle: 'だし巻き卵',
    description: 'Silky, multi-layered rolled sweet and savory omelet infused with smoky bonito dashi, mirin, and light soy sauce, rolled in a square makiyakinabe pan.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/%E9%B3%A5%E7%84%BC%E3%81%8D%E5%B1%85%E9%85%92%E5%B1%8B_%2839394233682%29.jpg/960px-%E9%B3%A5%E7%84%BC%E3%81%8D%E5%B1%85%E9%85%92%E5%B1%8B_%2839394233682%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    servings: 2,
    difficulty: 'Medium',
    caloriesPerServing: 220,
    dietaryTags: ['Vegetarian', 'Gluten-Free Option', 'Breakfast'],
    course: 'Appetizer',
    ingredients: [
      { name: 'Large Fresh Eggs', amount: 4, unit: 'pcs', category: 'Egg' },
      { name: 'Dashi Stock', amount: 60, unit: 'ml', category: 'Liquid' },
      { name: 'Granulated Sugar', amount: 12, unit: 'g', category: 'Seasoning' },
      { name: 'Mirin', amount: 15, unit: 'ml', category: 'Seasoning' },
      { name: 'Usukuchi Light Soy Sauce', amount: 5, unit: 'ml', category: 'Seasoning' },
      { name: 'Grated Daikon Radish for serving', amount: 50, unit: 'g', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Gentle Whisk Without Froth',
        instruction: 'Whisk eggs with dashi, sugar, mirin, and soy sauce using chopsticks in a cutting motion to avoid incorporating air bubbles. Strain through a fine sieve.',
        durationMinutes: 4
      },
      {
        stepNumber: 2,
        title: 'Roll Layer by Layer',
        instruction: 'Heat a rectangular tamagoyaki pan over medium-low heat. Oil lightly. Pour a thin film of egg. When half-set, roll from far end towards you. Push roll back to far side, oil pan, pour next layer lifting the roll so egg flows underneath. Repeat 4 times.',
        durationMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Shape in Bamboo Mat',
        instruction: 'Transfer hot roll to a bamboo sushi mat (makisu). Wrap gently for 5 minutes to set rectangular shape. Slice into 2cm medallions.',
        durationMinutes: 5
      }
    ],
    funFact: 'In traditional sushi restaurants, patrons historically ordered tamago first to test the chef’s mastery and attention to detail.',
    servingNotes: 'Serve warm or chilled with a mound of grated daikon splashed with soy sauce.'
  },
  {
    id: 'jpn-gyoza',
    countryId: 'japan',
    title: 'Crispy Skirt Pan-Fried Pork Gyoza',
    nativeTitle: '羽根つき焼き餃子',
    description: 'Juicy pork, garlic chive, and cabbage potstickers pan-fried to a crisp golden lace skirt on the bottom while steaming tender and succulent on top.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/%E5%8F%B0%E7%81%A3%E5%8D%97%E6%8A%95%E8%8D%89%E5%B1%AF%E6%B0%B4%E9%A4%83Nantou%2C_Taiwan_Caotun_dumplings.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
    prepTimeMinutes: 30,
    cookTimeMinutes: 12,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 420,
    dietaryTags: ['High-Protein', 'Izakaya Classic'],
    course: 'Appetizer',
    ingredients: [
      { name: 'Round Gyoza Wrappers', amount: 24, unit: 'pcs', category: 'Wrappers' },
      { name: 'Ground Pork Belly', amount: 300, unit: 'g', category: 'Meat' },
      { name: 'Finely Chopped Cabbage (salted & squeezed dry)', amount: 200, unit: 'g', category: 'Vegetable' },
      { name: 'Nira (Garlic Chives, finely chopped)', amount: 50, unit: 'g', category: 'Aromatics' },
      { name: 'Grated Ginger & Garlic', amount: 15, unit: 'g', category: 'Aromatics' },
      { name: 'Sesame Oil & Soy Sauce', amount: 25, unit: 'ml', category: 'Seasoning' },
      { name: 'Cornstarch Slurry for Lace Skirt (hanetsuki)', amount: 80, unit: 'ml', category: 'Lace Skirt' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Knead Juicy Filling',
        instruction: 'Knead pork with seasonings until pale and sticky. Fold in squeezed cabbage and nira garlic chives.',
        durationMinutes: 8
      },
      {
        stepNumber: 2,
        title: 'Pleat Wrappers',
        instruction: 'Place a spoonful of meat in center of wrapper. Wet edge, fold in half, and make 4-5 single-direction pleats on front face while keeping back flat.',
        durationMinutes: 15
      },
      {
        stepNumber: 3,
        title: 'Pan-Fry and Steam Lace Skirt',
        instruction: 'Arrange gyoza in oiled pan. Fry 2 minutes until bottom is golden. Pour cornstarch slurry around dumplings, cover immediately, and steam 5 minutes until water evaporates and a crisp wafer skirt forms.',
        durationMinutes: 8
      }
    ],
    funFact: 'Japanese gyoza are distinguished from Chinese jiaozi by their thinner skins and distinct emphasis on garlic and garlic chives (nira).',
    servingNotes: 'Invert pan onto plate to showcase the golden crispy lace skirt. Dip in soy sauce, rice vinegar, and chili rayu oil.'
  },
  {
    id: 'jpn-sushi-platter',
    countryId: 'japan',
    title: 'Edomae Nigiri Sushi Platter',
    nativeTitle: '江戸前握り寿司',
    description: 'Pristine cuts of bluefin tuna (akami & otoro), king salmon, and sea bream hand-pressed over seasoned warm Koshihikari sushi rice with fresh grated wasabi.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/960px-Sushi_platter.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 40,
    cookTimeMinutes: 20,
    servings: 2,
    difficulty: 'Hard',
    caloriesPerServing: 480,
    dietaryTags: ['Seafood', 'Gluten-Free', 'Masterpiece'],
    course: 'Main',
    ingredients: [
      { name: 'Sashimi-Grade Bluefin Tuna & Salmon', amount: 350, unit: 'g', category: 'Fish' },
      { name: 'Koshihikari Sushi Rice', amount: 300, unit: 'g', category: 'Grain' },
      { name: 'Red Vinegar (Akasu) or Rice Vinegar Seasoning', amount: 50, unit: 'ml', category: 'Seasoning' },
      { name: 'Fresh Grated Real Wasabi', amount: 20, unit: 'g', category: 'Condiment' },
      { name: 'Nikiri Sweet Soy Brush', amount: 40, unit: 'ml', category: 'Glaze' },
      { name: 'Pickled Gari Ginger', amount: 40, unit: 'g', category: 'Palate Cleanser' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Season Shari Rice (Hangiri)',
        instruction: 'Fan freshly cooked rice while cutting seasoned vinegar through with a wooden shamoji spatula. Keep rice at human body temperature (36°C).',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Precision Fish Slicing',
        instruction: 'Using a single fluid pull of a yanagiba knife, slice fish against the grain at a 45-degree angle into 15g neta slices.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Two-Hand Press Technique (Ni-Te Nigiri)',
        instruction: 'Form a 15g airy rice cylinder in your right hand. Dab a touch of wasabi on the fish slice in your left hand. Marry fish and rice, pressing twice with fingers to form a pillowy nigiri.',
        durationMinutes: 15
      },
      {
        stepNumber: 4,
        title: 'Nikiri Glaze',
        instruction: 'Brush delicate nikiri soy sauce over fish. Serve immediately onto ceramic geta plate.',
        durationMinutes: 2
      }
    ],
    funFact: 'Traditional sushi was originally fast food sold at Tokyo street stalls in the 1800s, meant to be eaten with bare hands in a single bite.',
    servingNotes: 'Pick up with your fingers, turn slightly upside down so fish touches your tongue first, and eat in one bite.'
  },
  {
    id: 'jpn-souffle-pancakes',
    countryId: 'japan',
    title: 'Tokyo Fluffy Soufflé Pancakes',
    nativeTitle: 'ふわふわスフレパンケーキ',
    description: 'Cloud-like, jiggly Japanese pancakes made with whipped meringue batter, served with Uji matcha cream, sweet adzuki beans, and whipped butter.',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1200&q=80',
    prepTimeMinutes: 20,
    cookTimeMinutes: 16,
    servings: 2,
    difficulty: 'Medium',
    caloriesPerServing: 360,
    dietaryTags: ['Vegetarian', 'Trend Dessert'],
    course: 'Dessert',
    ingredients: [
      { name: 'Egg Whites (whipped to stiff glossy peaks)', amount: 3, unit: 'pcs', category: 'Meringue' },
      { name: 'Egg Yolks', amount: 2, unit: 'pcs', category: 'Batter' },
      { name: 'Cake Flour', amount: 35, unit: 'g', category: 'Batter' },
      { name: 'Granulated Sugar', amount: 35, unit: 'g', category: 'Sweetener' },
      { name: 'Whole Milk', amount: 25, unit: 'ml', category: 'Liquid' },
      { name: 'Pure Vanilla Extract', amount: 5, unit: 'ml', category: 'Flavor' },
      { name: 'Uji Ceremonial Matcha Cream & Pure Maple Syrup', amount: 60, unit: 'g', category: 'Topping' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Whip Stiff Meringue',
        instruction: 'Beat cold egg whites with sugar in 3 additions until firm, glossy stiff peaks form.',
        durationMinutes: 6
      },
      {
        stepNumber: 2,
        title: 'Fold Batter Gently',
        instruction: 'Whisk yolks, milk, and flour until smooth. Fold 1/3 meringue into yolk base, then gently fold back into remaining meringue with a rubber spatula, preserving air bubbles.',
        durationMinutes: 4
      },
      {
        stepNumber: 3,
        title: 'Steam-Griddle on Low Heat',
        instruction: 'Pipe high towers of batter onto a nonstick pan on low heat (140°C). Add 1 tsp water to the pan and cover with lid. Steam 4-5 minutes, stack another scoop of batter on top, flip carefully, add water, and steam 4 more minutes.',
        durationMinutes: 10,
        temperature: '140°C / 285°F'
      }
    ],
    funFact: 'These viral pancakes rely on air trapped inside the whipped egg whites rather than heavy baking powder to create their famous hypnotic wobble.',
    servingNotes: 'Serve straight from the griddle with matcha dust and pure Canadian maple syrup before they deflate.'
  }
];
