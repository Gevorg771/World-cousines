
import { AUTHENTIC_IMAGES } from '../imageAssets';

export const CHINA_RECIPES = [
  {
    id: 'cn-peking-duck',
    countryId: 'china',
    title: 'Authentic Peking Roast Duck',
    nativeTitle: '北京烤鸭 (Běijīng Kǎoyā)',
    description: 'The pinnacle of Chinese imperial banquet cuisine: whole duck pumped with air, bathed in maltose syrup, hung to dry, and roasted until the skin turns into shatteringly crisp amber glass.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Peking_Duck%2C_2014_%2802%29.jpg/960px-Peking_Duck%2C_2014_%2802%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 60,
    cookTimeMinutes: 70,
    servings: 4,
    difficulty: 'Hard',
    caloriesPerServing: 620,
    dietaryTags: ['Imperial Heritage', 'Iconic', 'High Protein'],
    course: 'Main',
    ingredients: [
      { name: 'Whole Fresh Duck (head & neck intact or trimmed)', amount: 2200, unit: 'g', category: 'Poultry' },
      { name: 'Pure Maltose or Honey', amount: 80, unit: 'g', category: 'Glaze' },
      { name: 'Red Rice Vinegar or Chinese Black Vinegar', amount: 40, unit: 'ml', category: 'Glaze' },
      { name: 'Shaoxing Cooking Wine', amount: 40, unit: 'ml', category: 'Glaze' },
      { name: 'Chinese Five-Spice Powder & Sichuan Peppercorns', amount: 8, unit: 'g', category: 'Aromatics' },
      { name: 'Boiling Filtered Water (for scalding)', amount: 2000, unit: 'ml', category: 'Glaze' },
      { name: 'Mandarin Pancakes (Chun Bing)', amount: 16, unit: 'pcs', category: 'Serving' },
      { name: 'Sweet Bean Sauce (Tianmianjiang) or Hoisin', amount: 100, unit: 'g', category: 'Sauce' },
      { name: 'Scallions & Cucumbers (julienned into fine matchsticks)', amount: 120, unit: 'g', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Scald & Tighten Duck Skin',
        instruction: 'Hang duck by neck. Ladle boiling water continuously over the entire duck skin for 2 minutes until the skin tightens, turns porcelain smooth, and goosebumps recede.',
        durationMinutes: 10,
        chefTip: 'Scalding shrinks the skin and opens pores to absorb the maltose lacquer evenly.'
      },
      {
        stepNumber: 2,
        title: 'Brush with Maltose Vinegar Lacquer',
        instruction: 'Whisk maltose syrup with vinegar, Shaoxing wine, and warm water. Brush the warm glaze in two even coats over every millimeter of the duck skin.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Overnight Fan Drying (Crucial Step)',
        instruction: 'Hang duck in front of a cool electric fan or in an airy refrigerator for 18 to 24 hours until the skin feels completely dry, leathery, and parchment-like.',
        durationMinutes: 1080,
        chefTip: 'The skin must be bone-dry like parchment; any moisture will steam the skin rather than crisp it.'
      },
      {
        stepNumber: 4,
        title: 'Oven Roasting to Amber Glass',
        instruction: 'Roast vertically or on a wire rack over a water-filled tray at 190°C (375°F) for 60 to 70 minutes until skin is puffed, mahogany amber, and crackles like glass.',
        durationMinutes: 70,
        temperature: '190°C / 375°F'
      },
      {
        stepNumber: 5,
        title: 'Master Tableside Carving',
        instruction: 'Rest 10 minutes. Carve the crisp skin first into delicate bite-sized rectangles, followed by thin slices of succulent meat.',
        durationMinutes: 10
      }
    ],
    servingNotes: 'Dip crispy skin directly into white sugar crystals for the imperial tasting. Wrap sliced duck with scallion threads, cucumber, and sweet bean sauce inside steamed thin pancakes.',
    funFact: 'Peking Duck has been roasted in imperial Beijing kilns since the Ming Dynasty (1416), where it was served exclusively to the Son of Heaven inside the Forbidden City.'
  },
  {
    id: 'cn-mapo-tofu',
    countryId: 'china',
    title: 'Authentic Sichuan Mapo Tofu',
    nativeTitle: '麻婆豆腐 (Mápó Dòufu)',
    description: 'The defining dish of Sichuan Sichuanese gastronomy: silken tofu cubes bathed in a fiery, brick-red fermented chili paste sauce with minced beef, scallions, and numbing ground Sichuan peppercorns.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Chen_Mapo_Tofu.jpg/960px-Chen_Mapo_Tofu.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 310,
    dietaryTags: ['Sichuan Masterpiece', 'High Protein', 'Spicy'],
    course: 'Main',
    ingredients: [
      { name: 'Silken or Medium Soft Tofu (cut into 2cm cubes)', amount: 500, unit: 'g', category: 'Tofu' },
      { name: 'Lean Ground Beef (or Pork)', amount: 150, unit: 'g', category: 'Meat' },
      { name: 'Pixian Fermented Chili Broad Bean Paste (Doubanjiang)', amount: 45, unit: 'g', category: 'Sauce' },
      { name: 'Fermented Black Beans (Douchi, roughly chopped)', amount: 15, unit: 'g', category: 'Sauce' },
      { name: 'Sichuan Chili Flakes & Powder', amount: 10, unit: 'g', category: 'Heat' },
      { name: 'Red Sichuan Peppercorns (freshly toasted & ground fine)', amount: 6, unit: 'g', category: 'Mala Numbness' },
      { name: 'Garlic & Ginger (finely minced)', amount: 30, unit: 'g', category: 'Aromatics' },
      { name: 'Chicken Broth', amount: 250, unit: 'ml', category: 'Sauce' },
      { name: 'Cornstarch Slurry (cornstarch mixed with water)', amount: 30, unit: 'ml', category: 'Thickener' },
      { name: 'Garlic Greens or Scallions (sliced)', amount: 50, unit: 'g', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Salt Water Blanch the Tofu',
        instruction: 'Gently simmer tofu cubes in salted boiling water for 2 minutes, then remove with a slotted spoon. This seasons the tofu and keeps it firm without breaking in the wok.',
        durationMinutes: 5,
        chefTip: 'Gentle blanching in salted water firms the tofu proteins so they hold their pristine cubical shape in the roaring wok.'
      },
      {
        stepNumber: 2,
        title: 'Crisp the Beef in Wok',
        instruction: 'Heat 2 tbsp oil in a wok. Add minced beef and stir-fry over medium heat for 4 minutes until deeply browned, crispy, and dry.',
        durationMinutes: 4
      },
      {
        stepNumber: 3,
        title: 'Bloom Doubanjiang for Red Oil',
        instruction: 'Add Pixian Doubanjiang, fermented black beans, minced garlic, and ginger. Stir-fry over low heat for 1 minute until the oil turns a glistening, fiery ruby red.',
        durationMinutes: 2
      },
      {
        stepNumber: 4,
        title: 'Slide Tofu and Simmer',
        instruction: 'Pour in broth and chili powder. Carefully slide in the warm blanched tofu. Simmer gently on medium-low for 5 minutes so tofu absorbs the deep savory sauce.',
        durationMinutes: 5
      },
      {
        stepNumber: 5,
        title: 'Triple Starch Slurry & Sichuan Peppercorn',
        instruction: 'Swirl in cornstarch slurry in three separate additions, swirling the wok gently between each until the sauce clings luxuriously to the tofu. Fold in scallion greens, ladle into bowl, and shower with freshly ground toasted Sichuan peppercorn powder.',
        durationMinutes: 3
      }
    ],
    servingNotes: 'Serve steaming hot accompanied by bowls of fragrant white jasmine rice to absorb the intoxicating red oil.',
    funFact: 'Mapo Tofu was created in Chengdu in the 1860s by Mrs. Chen, a restaurant owner whose facial pockmarks inspired the name ("Ma" for pockmarked, "Po" for elderly woman).'
  },
  {
    id: 'cn-xiaolongbao',
    countryId: 'china',
    title: 'Shanghai Xiaolongbao (Soup Dumplings)',
    nativeTitle: '小笼包 (Xiǎolóngbāo)',
    description: 'Masterwork Shanghai steamed buns with translucent hand-rolled skins pleated with 18 delicate folds, cradling seasoned ground pork and a burst of rich, piping hot pork broth.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/A_Xiaolongbao_from_The_Modern_Shanghai.jpg/960px-A_Xiaolongbao_from_The_Modern_Shanghai.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 60,
    cookTimeMinutes: 10,
    servings: 4,
    difficulty: 'Hard',
    caloriesPerServing: 380,
    dietaryTags: ['Shanghai Dim Sum', 'Artisanal Craft', 'Iconic'],
    course: 'Street Food',
    ingredients: [
      { name: 'Rich Pork Skin Aspic/Gelatin Broth (diced tiny)', amount: 250, unit: 'g', category: 'Soup Gelatin' },
      { name: 'Ground Pork Collar (70/30 meat-to-fat)', amount: 350, unit: 'g', category: 'Filling' },
      { name: 'All-Purpose Flour', amount: 250, unit: 'g', category: 'Dough' },
      { name: 'Warm Water', amount: 130, unit: 'ml', category: 'Dough' },
      { name: 'Minced Fresh Ginger & Scallion Water', amount: 40, unit: 'ml', category: 'Seasoning' },
      { name: 'Shaoxing Rice Wine, Soy Sauce & Sesame Oil', amount: 25, unit: 'ml', category: 'Seasoning' },
      { name: 'Chinkiang Black Vinegar & Ginger Matchsticks', amount: 60, unit: 'ml', category: 'Dipping Sauce' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Mince the Solid Aspic Gelatin',
        instruction: 'Chill homemade collagen-rich pork skin broth until set solid like jelly. Cut into tiny 3mm cubes. Gently fold the cold aspic into the seasoned ground pork meatball mixture.',
        durationMinutes: 15,
        chefTip: 'The solid gelatin cubes melt into liquid gold inside the dumpling during steaming.'
      },
      {
        stepNumber: 2,
        title: 'Knead Dumpling Dough',
        instruction: 'Mix flour and warm water. Knead for 8 minutes until completely smooth. Cover with plastic wrap and rest for 30 minutes.',
        durationMinutes: 38
      },
      {
        stepNumber: 3,
        title: 'Roll Ultra-Thin Round Wrappers',
        instruction: 'Roll dough into a rope and cut into 10g pieces. Roll each piece into a 8cm circular wrapper that is thin at the edges and slightly thicker in the center.',
        durationMinutes: 15
      },
      {
        stepNumber: 4,
        title: 'Pleat 18 Folds & Seal',
        instruction: 'Place 1 tbsp filling in center. Using thumb and index finger, make 18-20 tiny pleats in a circle, twisting tightly at the top to seal completely.',
        durationMinutes: 20
      },
      {
        stepNumber: 5,
        title: 'Bamboo Basket Steam',
        instruction: 'Line bamboo steamer baskets with parchment or napa cabbage leaves. Steam over rapidly boiling water for 8 minutes until translucent and swollen with soup.',
        durationMinutes: 8,
        temperature: 'High Steam'
      }
    ],
    servingNotes: 'Gently transfer with chopsticks into a soup spoon. Nibble a tiny hole in the side of the skin, sip the hot fragrant broth, then dip in black vinegar and fresh ginger matchsticks.',
    funFact: 'True dim sum masters in Shanghai pride themselves on making wrappers so thin they are nearly translucent, yet strong enough to hold a tablespoon of broth without leaking.'
  },
  {
    id: 'cn-kung-pao-chicken',
    countryId: 'china',
    title: 'Authentic Sichuan Kung Pao Chicken',
    nativeTitle: '宫保鸡丁 (Gōngbǎo Jīdīng)',
    description: 'The definitive Sichuan stir-fry: marinated chicken thigh cubes seared in a raging wok with toasted crunchy peanuts, dried red chili pods, leeks, and a complex sweet-sour-savory sauce.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Kung-pao-shanghai.jpg/960px-Kung-pao-shanghai.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 20,
    cookTimeMinutes: 6,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 420,
    dietaryTags: ['High Protein', 'Sichuan Classic', 'Iconic'],
    course: 'Main',
    ingredients: [
      { name: 'Boneless Skinless Chicken Thighs (cut into 1.5cm cubes)', amount: 500, unit: 'g', category: 'Poultry' },
      { name: 'Crispy Roasted Peanuts (unsalted, skins removed)', amount: 80, unit: 'g', category: 'Nuts' },
      { name: 'Dried Sichuan Red Chilies (snipped, seeds shaken out)', amount: 15, unit: 'pcs', category: 'Spices' },
      { name: 'Whole Sichuan Peppercorns', amount: 5, unit: 'g', category: 'Spices' },
      { name: 'Scallion Whites (cut into 1.5cm lengths)', amount: 80, unit: 'g', category: 'Aromatics' },
      { name: 'Garlic & Ginger (thinly sliced)', amount: 25, unit: 'g', category: 'Aromatics' },
      { name: 'Chinkiang Black Vinegar', amount: 25, unit: 'ml', category: 'Kung Pao Sauce' },
      { name: 'Soy Sauce & Dark Soy Sauce', amount: 25, unit: 'ml', category: 'Kung Pao Sauce' },
      { name: 'Granulated Sugar', amount: 18, unit: 'g', category: 'Kung Pao Sauce' },
      { name: 'Cornstarch & Chicken Broth', amount: 40, unit: 'ml', category: 'Kung Pao Sauce' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Velvet the Chicken Cubes',
        instruction: 'Toss chicken cubes with 1 tbsp Shaoxing wine, 1 tsp soy sauce, a pinch of salt, and 1 tbsp cornstarch. Coat with 1 tsp oil and marinate for 15 minutes.',
        durationMinutes: 15,
        chefTip: 'Velveting with cornstarch locks in moisture, ensuring the chicken stays juicy in the blazing wok.'
      },
      {
        stepNumber: 2,
        title: 'Whisk Kung Pao Sweet-Sour Glaze',
        instruction: 'In a small bowl, whisk black vinegar, soy sauces, sugar, chicken broth, and cornstarch until sugar dissolves completely.',
        durationMinutes: 3
      },
      {
        stepNumber: 3,
        title: 'Toast Chilies & Peppercorns in Oil',
        instruction: 'Heat 3 tbsp oil in a roaring wok over medium heat. Add dried chilies and Sichuan peppercorns. Fry for 30 seconds until chilies darken to fragrant maroon (do not burn).',
        durationMinutes: 1
      },
      {
        stepNumber: 4,
        title: 'High-Heat Wok Searing',
        instruction: 'Turn heat to highest setting. Toss in chicken and stir-fry vigorously for 2 minutes until cubes turn opaque. Add garlic, ginger, and scallion whites; toss for 30 seconds.',
        durationMinutes: 3
      },
      {
        stepNumber: 5,
        title: 'Glaze with Sauce & Peanuts',
        instruction: 'Pour the bowl of sauce down the sides of the wok. Toss rapidly as the sauce bubbles and glazes the chicken with a glossy sheen. Toss in roasted peanuts and transfer immediately to plate.',
        durationMinutes: 1
      }
    ],
    servingNotes: 'Serve immediately with steaming rice so the peanuts retain their crunchy snap.',
    funFact: 'Named after Ding Baozhen (1820–1886), a Qing Dynasty governor of Sichuan whose official title was "Taizi Gongbao" (Palace Guardian).'
  },
  {
    id: 'cn-dan-dan-noodles',
    countryId: 'china',
    title: 'Sichuan Dan Dan Noodles',
    nativeTitle: '担担面 (Dàndàn Miàn)',
    description: 'Chewy fresh wheat noodles layered over a rich bowl base of roasted sesame paste, chili oil, Chinkiang vinegar, and Sichuan pepper, topped with crispy spiced pork and sui mi ya cai.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Dan-dan_noodles%2C_Shanghai.jpg/960px-Dan-dan_noodles%2C_Shanghai.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 490,
    dietaryTags: ['Sichuan Street Food', 'Spicy Mala', 'High Protein'],
    course: 'Main',
    ingredients: [
      { name: 'Fresh Chinese Wheat Noodles', amount: 400, unit: 'g', category: 'Noodles' },
      { name: 'Ground Pork', amount: 200, unit: 'g', category: 'Crispy Topping' },
      { name: 'Sichuan Sui Mi Ya Cai (preserved mustard greens)', amount: 60, unit: 'g', category: 'Crispy Topping' },
      { name: 'Chinese Roasted Sesame Paste (or Tahini)', amount: 60, unit: 'g', category: 'Sauce' },
      { name: 'Sichuan Red Chili Oil with sediment', amount: 50, unit: 'ml', category: 'Sauce' },
      { name: 'Light Soy Sauce & Chinkiang Vinegar', amount: 40, unit: 'ml', category: 'Sauce' },
      { name: 'Toasted Ground Sichuan Peppercorn', amount: 6, unit: 'g', category: 'Sauce' },
      { name: 'Crushed Peanuts & Chopped Scallions', amount: 40, unit: 'g', category: 'Garnish' },
      { name: 'Baby Bok Choy (blanched)', amount: 4, unit: 'pcs', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Fry Crispy Pork & Ya Cai',
        instruction: 'In a hot wok, brown ground pork with 1 tsp Shaoxing wine until crispy. Add chopped ya cai preserved greens and stir-fry for 2 minutes until fragrant and dry.',
        durationMinutes: 6
      },
      {
        stepNumber: 2,
        title: 'Whisk Spicy Bowl Sauce Base',
        instruction: 'Divide into 4 serving bowls: 1 tbsp sesame paste, 1 tbsp chili oil, 1 tbsp soy sauce, 1 tsp vinegar, ground Sichuan pepper, minced garlic, and 2 tbsp hot noodle cooking water.',
        durationMinutes: 4,
        chefTip: 'The sauce goes into the bottom of the bowl before the noodles; diners mix it themselves at the table.'
      },
      {
        stepNumber: 3,
        title: 'Boil Fresh Noodles & Greens',
        instruction: 'Boil fresh wheat noodles in boiling water for 2.5 minutes until springy and chewy. Add bok choy in the last 30 seconds. Drain well.',
        durationMinutes: 3
      },
      {
        stepNumber: 4,
        title: 'Assemble & Garnish',
        instruction: 'Place noodles over the sauce. Top with crispy pork-yacai mixture, crushed peanuts, blanched bok choy, and scallions.',
        durationMinutes: 2
      }
    ],
    servingNotes: 'Toss noodles vigorously from bottom to top before eating to coat every strand in the fiery sesame sauce.',
    funFact: 'Dan Dan refers to the shoulder bamboo carrying pole ("dan") used by 19th-century street peddlers in Chengdu who carried noodles on one end and boiling broth on the other.'
  },
  {
    id: 'cn-char-siu',
    countryId: 'china',
    title: 'Cantonese Char Siu (Honey BBQ Pork)',
    nativeTitle: '蜜汁叉烧 (Chāshāo)',
    description: 'Iconic Cantonese roasted pork shoulder with charred edges and a glistening crimson honey glaze, flavored with red fermented bean curd, five-spice, maltose, and rose cooking wine.',
    image: AUTHENTIC_IMAGES.cantoneseCharSiu,
    prepTimeMinutes: 20,
    cookTimeMinutes: 40,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 520,
    dietaryTags: ['Cantonese Roast Meat', 'High Protein', 'Iconic'],
    course: 'Main',
    ingredients: [
      { name: 'Pork Collar / Shoulder (cut into 4cm thick strips)', amount: 1000, unit: 'g', category: 'Pork' },
      { name: 'Fermented Red Bean Curd (Nanru)', amount: 30, unit: 'g', category: 'Marinade' },
      { name: 'Hoisin Sauce & Oyster Sauce', amount: 60, unit: 'g', category: 'Marinade' },
      { name: 'Shaoxing Rice Wine or Mei Kuei Lu Chiew', amount: 30, unit: 'ml', category: 'Marinade' },
      { name: 'Chinese Five-Spice Powder', amount: 4, unit: 'g', category: 'Marinade' },
      { name: 'Brown Sugar & Soy Sauce', amount: 50, unit: 'g', category: 'Marinade' },
      { name: 'Maltose or Pure Honey (for roasting glaze)', amount: 80, unit: 'g', category: 'Basting Glaze' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Marinate Pork Collar',
        instruction: 'Mash red bean curd with hoisin, oyster sauce, wine, five-spice, sugar, and soy sauce. Rub all over pork strips. Refrigerate covered for at least 8 to 12 hours.',
        durationMinutes: 15
      },
      {
        stepNumber: 2,
        title: 'First Oven Roast',
        instruction: 'Preheat oven to 200°C (400°F). Place pork on a wire rack over a foil-lined baking sheet filled with 1 cup water. Roast for 20 minutes.',
        durationMinutes: 20,
        temperature: '200°C / 400°F'
      },
      {
        stepNumber: 3,
        title: 'Baste with Sweet Honey Lacquer',
        instruction: 'Mix maltose with 2 tbsp reserved marinade. Brush generously over pork strips. Roast for 10 minutes. Flip, brush again, and roast 10 minutes more until edges are caramelized and lightly charred.',
        durationMinutes: 20,
        chefTip: 'The high sugar content caramelizes quickly in the last minutes, creating the famous sweet charred tips ("char").'
      },
      {
        stepNumber: 4,
        title: 'Rest and Slice',
        instruction: 'Rest for 8 minutes on a cutting board, then slice across the grain into thick, juicy slices.',
        durationMinutes: 8
      }
    ],
    servingNotes: 'Serve hot with steamed jasmine rice, garlic greens, and a bowl of scallion-ginger dipping sauce.',
    funFact: 'In Cantonese culture, Char Siu is so universally loved that mothers playfully scold misbehaving children: "It would have been better to give birth to a piece of char siu than to you!"'
  },
  {
    id: 'cn-steamed-fish',
    countryId: 'china',
    title: 'Cantonese Steamed Whole Fish',
    nativeTitle: '清蒸鱼 (Qīngzhēng Yú)',
    description: 'The crowning testament to Cantonese culinary purity: fresh whole sea bass steamed with ginger and scallions, topped with matchstick herbs and splashed with smoking-hot oil and sweet seasoned soy sauce.',
    image: AUTHENTIC_IMAGES.chineseSteamedFish,
    prepTimeMinutes: 15,
    cookTimeMinutes: 9,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 240,
    dietaryTags: ['Seafood', 'Gluten-Free Option', 'Imperial Purity'],
    course: 'Main',
    ingredients: [
      { name: 'Fresh Whole Sea Bass or Branzino (cleaned & scaled)', amount: 800, unit: 'g', category: 'Fish' },
      { name: 'Fresh Ginger (peeled and sliced into thin matchsticks)', amount: 40, unit: 'g', category: 'Aromatics' },
      { name: 'Scallions (shredded into curly fine threads)', amount: 50, unit: 'g', category: 'Aromatics' },
      { name: 'Fresh Cilantro Sprigs', amount: 20, unit: 'g', category: 'Garnish' },
      { name: 'Shaoxing Rice Wine', amount: 20, unit: 'ml', category: 'Aromatics' },
      { name: 'Light Soy Sauce & Warm Water', amount: 60, unit: 'ml', category: 'Sweet Soy' },
      { name: 'Rock Sugar or Granulated Sugar', amount: 15, unit: 'g', category: 'Sweet Soy' },
      { name: 'Peanut Oil or Neutral Oil', amount: 50, unit: 'ml', category: 'Hot Oil Splash' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Prep Fish & Arrange on Plate',
        instruction: 'Pat fish dry. Make 3 diagonal shallow slits on both sides. Place 3 scallion stalks on an oval heatproof platter and lay fish on top (this elevates the fish for even steam circulation). Tuck half the ginger inside cavity.',
        durationMinutes: 5,
        chefTip: 'Elevating the fish on scallion stalks ensures hot steam circulates freely underneath for uniform cooking.'
      },
      {
        stepNumber: 2,
        title: 'Vigorous High-Heat Steaming',
        instruction: 'Place platter in a wide bamboo or metal steamer over furiously boiling water. Cover tightly and steam over highest heat for 8 to 9 minutes until meat flakes easily.',
        durationMinutes: 9,
        temperature: 'High Steam'
      },
      {
        stepNumber: 3,
        title: 'Drain Steaming Juices',
        instruction: 'Carefully remove platter from steamer. Pour off all accumulated cloudy steaming liquid from the plate (it contains fishiness). Discard cooked ginger and scallions.',
        durationMinutes: 2
      },
      {
        stepNumber: 4,
        title: 'The Sizzling Hot Oil Splash',
        instruction: 'Heap fresh curly shredded scallions, ginger matchsticks, and cilantro down the spine of the fish. Heat 50ml peanut oil in a small pan until smoking hot. Pour boiling oil directly over the scallions to release an explosion of aroma.',
        durationMinutes: 2
      },
      {
        stepNumber: 5,
        title: 'Pour Sweet Soy Sauce Around Rim',
        instruction: 'Simmer soy sauce, sugar, and water for 1 minute. Pour the hot sweet soy sauce around the sides of the plate (not directly over the crisp herbs).',
        durationMinutes: 2
      }
    ],
    servingNotes: 'Serve whole at the center of the table; gently separate meat fillets from the spine with a serving spoon into the seasoned soy sauce.',
    funFact: 'In Chinese New Year banquets, whole fish is mandatory because the Chinese word for fish ("yú") is a homophone for "surplus and abundance", symbolizing endless prosperity for the year ahead.'
  },
  {
    id: 'cn-wonton-soup',
    countryId: 'china',
    title: 'Cantonese Shrimp & Pork Wonton Soup',
    nativeTitle: '鲜虾云吞面 (Xiānxiā Yúntūn)',
    description: 'Translucent pleated dumplings shaped like goldfish swimming in clear golden broth: crunchy fresh prawns, ground pork, and toasted flounder powder wrapped in gossamer-thin yellow wrappers.',
    image: AUTHENTIC_IMAGES.cantoneseWontonSoup,
    prepTimeMinutes: 40,
    cookTimeMinutes: 10,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 320,
    dietaryTags: ['Hong Kong Classic', 'High Protein'],
    course: 'Soup',
    ingredients: [
      { name: 'Raw Prawns (peeled, deveined, chopped into chunks)', amount: 300, unit: 'g', category: 'Filling' },
      { name: 'Ground Pork (fatty)', amount: 150, unit: 'g', category: 'Filling' },
      { name: 'Hong Kong Thin Yellow Wonton Wrappers', amount: 30, unit: 'pcs', category: 'Wrappers' },
      { name: 'Toasted Dried Flounder Fish Powder (or dashi)', amount: 5, unit: 'g', category: 'Secret Umami' },
      { name: 'Sesame Oil, White Pepper & Salt', amount: 10, unit: 'g', category: 'Filling' },
      { name: 'Rich Pork and Chicken Broth', amount: 1200, unit: 'ml', category: 'Broth' },
      { name: 'Yellow Chinese Chives (cut into lengths)', amount: 40, unit: 'g', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Slap Filling for Crunchy Prawn Texture',
        instruction: 'Mix prawns, pork, flounder powder, white pepper, salt, and sesame oil. Slap the meat mixture against the bowl 15 times until it turns springy and bouncy.',
        durationMinutes: 8,
        chefTip: 'Slapping the prawn filling aligns the proteins to create the famous Cantonese "bouncy" (saang-chui) snap.'
      },
      {
        stepNumber: 2,
        title: 'Wrap Goldfish Wontons',
        instruction: 'Place 1 tsp filling in the center of a wrapper. Moisten edges, fold gently into a loose bundle, and pinch together at the waist, leaving the wrapper tails flowing free like a goldfish tail.',
        durationMinutes: 15
      },
      {
        stepNumber: 3,
        title: 'Boil in Ample Water',
        instruction: 'Drop wontons into a large pot of boiling water. Cook for 3 to 4 minutes until they float to the surface and wrappers become translucent.',
        durationMinutes: 4
      },
      {
        stepNumber: 4,
        title: 'Assemble with Clear Broth',
        instruction: 'Ladle hot seasoned chicken broth into bowls. Add yellow Chinese chives. Lift wontons with a strainer and place gently into the broth.',
        durationMinutes: 2
      }
    ],
    servingNotes: 'Serve piping hot with a small saucer of red vinegar or chili oil on the side.',
    funFact: 'In Cantonese, wonton ("wàhn tān") literally means "swallowing clouds", describing the delicate white dough tails floating like ethereal clouds in clear soup.'
  },
  {
    id: 'cn-di-san-xian',
    countryId: 'china',
    title: 'Di San Xian (Three Treasures of the Earth)',
    nativeTitle: '地三鲜 (Dìsānxiān)',
    description: 'Northeastern China’s beloved home-style classic: tender potato chunks, silky purple eggplant, and crisp green bell peppers flash-fried and tossed in a savory garlic soy glaze.',
    image: AUTHENTIC_IMAGES.chineseDiSanXian,
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 280,
    dietaryTags: ['Vegan', 'Comfort Food', 'Dongbei Classic'],
    course: 'Main',
    ingredients: [
      { name: 'Yukon Gold Potatoes (cut into irregular rolling chunks)', amount: 300, unit: 'g', category: 'Vegetables' },
      { name: 'Chinese Eggplant (cut into rolling wedge chunks)', amount: 300, unit: 'g', category: 'Vegetables' },
      { name: 'Green Bell Pepper (cut into bite-sized pieces)', amount: 150, unit: 'g', category: 'Vegetables' },
      { name: 'Garlic (finely minced)', amount: 25, unit: 'g', category: 'Aromatics' },
      { name: 'Light Soy Sauce & Dark Soy Sauce', amount: 30, unit: 'ml', category: 'Sauce' },
      { name: 'Granulated Sugar & Cornstarch Slurry', amount: 25, unit: 'g', category: 'Sauce' },
      { name: 'Oil for flash-frying', amount: 400, unit: 'ml', category: 'Cooking' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Dust Eggplant with Starch',
        instruction: 'Toss eggplant chunks with 1 tbsp water, then dust lightly with 1 tbsp cornstarch. This creates a protective seal so eggplant absorbs zero excess oil during frying.',
        durationMinutes: 5,
        chefTip: 'A light starch coating forms a crisp shell that prevents the spongy eggplant from absorbing cooking oil.'
      },
      {
        stepNumber: 2,
        title: 'Flash-Fry Potatoes & Eggplant',
        instruction: 'Heat oil to 180°C (350°F). Fry potato chunks for 5 minutes until tender and golden. Remove. Fry eggplant for 2 minutes until tender. Fry green peppers for 20 seconds. Drain all.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Sizzle Garlic & Sauce in Wok',
        instruction: 'Leave 1 tbsp oil in wok. Sauté minced garlic for 20 seconds. Pour in soy sauce, sugar, water, and cornstarch slurry until bubbling and glossy.',
        durationMinutes: 2
      },
      {
        stepNumber: 4,
        title: 'Toss the Three Treasures',
        instruction: 'Add all fried vegetables back into the wok. Toss rapidly for 30 seconds until every piece is coated in the savory garlic glaze.',
        durationMinutes: 1
      }
    ],
    servingNotes: 'Serve immediately with steaming rice; the tender potatoes and melting eggplant are delicious when mashed over rice.',
    funFact: 'Di San Xian originates from Heilongjiang in China’s northeastern rust belt, celebrating the autumn harvest of the three humble garden crops.'
  },
  {
    id: 'cn-yang-chow-fried-rice',
    countryId: 'china',
    title: 'Traditional Yangchow Fried Rice',
    nativeTitle: '扬州炒饭 (Yángzhōu Chǎofàn)',
    description: 'The golden benchmark of Chinese wok mastery: day-old Jasmine rice grains dancing individually in a screaming-hot wok with Char Siu pork, bay shrimp, farm eggs, and sweet green peas.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Chinese_fried_rice_by_stu_spivack_in_Cleveland%2C_OH.jpg/960px-Chinese_fried_rice_by_stu_spivack_in_Cleveland%2C_OH.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 15,
    cookTimeMinutes: 8,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 440,
    dietaryTags: ['High Protein', 'Iconic Wok Hei'],
    course: 'Main',
    ingredients: [
      { name: 'Chilled Day-Old Cooked Jasmine Rice', amount: 600, unit: 'g', category: 'Rice' },
      { name: 'Cantonese Char Siu Pork (finely diced)', amount: 120, unit: 'g', category: 'Meat' },
      { name: 'Small Bay Shrimp (peeled & cooked)', amount: 120, unit: 'g', category: 'Seafood' },
      { name: 'Fresh Farm Eggs (beaten)', amount: 3, unit: 'pcs', category: 'Eggs' },
      { name: 'Sweet Green Peas & Diced Carrots', amount: 80, unit: 'g', category: 'Vegetables' },
      { name: 'Scallions (finely sliced)', amount: 40, unit: 'g', category: 'Aromatics' },
      { name: 'Shaoxing Rice Wine, White Pepper & Sea Salt', amount: 10, unit: 'g', category: 'Seasoning' },
      { name: 'Lard or Peanut Oil', amount: 40, unit: 'ml', category: 'Wok Cooking' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Break Up Cold Rice Grains',
        instruction: 'Wet hands and gently massage cold day-old rice to separate every clump into individual loose grains.',
        durationMinutes: 3,
        chefTip: 'Day-old refrigerated rice has a dry surface starch that allows each grain to fry separately without mushiness.'
      },
      {
        stepNumber: 2,
        title: 'Scramble Eggs in Hot Wok',
        instruction: 'Heat 2 tbsp oil in a smoking wok. Pour in beaten eggs; immediately stir with chopsticks to create delicate, soft yellow egg ribbons.',
        durationMinutes: 1
      },
      {
        stepNumber: 3,
        title: 'Add Rice & Toss for Wok Hei',
        instruction: 'Dump in rice. Press and toss continuously over maximum heat with a wok spatula for 4 minutes until you hear the rice grains crackling and dancing in the wok.',
        durationMinutes: 4
      },
      {
        stepNumber: 4,
        title: 'Add Meats & Vegetables',
        instruction: 'Add diced Char Siu, shrimp, peas, and carrots. Season with salt, white pepper, and a splash of Shaoxing wine around the wok perimeter. Toss for 2 minutes.',
        durationMinutes: 2
      },
      {
        stepNumber: 5,
        title: 'Finish with Fresh Scallions',
        instruction: 'Toss in scallions in the final 15 seconds. Remove from heat and plate immediately.',
        durationMinutes: 1
      }
    ],
    servingNotes: 'Serve piled high on a plate with individual colorful gems of Char Siu, shrimp, and peas shimmering against golden rice.',
    funFact: 'Authentic Yangchow fried rice never uses dark soy sauce; the rice should remain pale and golden so the colorful ingredients stand out.'
  },
  {
    id: 'cn-gong-bao-prawns',
    countryId: 'china',
    title: 'Szechuan Firecracker Prawns',
    nativeTitle: '宫保虾球 (Gōngbǎo Xiāqiú)',
    description: 'Jumbo prawns scored into blooming flowers, wok-seared until curled and crunchy, tossed with whole Sichuan chilies, roasted cashews, scallions, and a tart ginger glaze.',
    image: AUTHENTIC_IMAGES.chineseKungPaoPrawns,
    prepTimeMinutes: 15,
    cookTimeMinutes: 5,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 350,
    dietaryTags: ['Seafood', 'High Protein', 'Spicy'],
    course: 'Main',
    ingredients: [
      { name: 'Jumbo Tiger Prawns (peeled, tail-on, butterfly scored)', amount: 500, unit: 'g', category: 'Seafood' },
      { name: 'Roasted Cashews or Peanuts', amount: 70, unit: 'g', category: 'Nuts' },
      { name: 'Dried Red Sichuan Chilies & Peppercorns', amount: 15, unit: 'g', category: 'Spices' },
      { name: 'Scallion Whites, Ginger & Garlic', amount: 40, unit: 'g', category: 'Aromatics' },
      { name: 'Chinkiang Black Vinegar & Sugar', amount: 30, unit: 'g', category: 'Sauce' },
      { name: 'Soy Sauce, Shaoxing Wine & Cornstarch', amount: 30, unit: 'ml', category: 'Sauce' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Butterfly Score Prawns',
        instruction: 'Cut a deep slit along the back of each prawn. Toss with a pinch of salt and cornstarch. They will blossom like flowers when hitting hot oil.',
        durationMinutes: 5
      },
      {
        stepNumber: 2,
        title: 'Flash Sear Prawns',
        instruction: 'Sear prawns in hot wok for 90 seconds until pink and curled. Remove to plate.',
        durationMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Wok Toss Aromatics & Glaze',
        instruction: 'Fry chilies, peppercorns, and garlic. Pour in vinegar-sugar glaze. Return prawns and cashews, toss for 30 seconds until prawns are lacquered.',
        durationMinutes: 2
      }
    ],
    servingNotes: 'Serve hot with steamed rice and chilled cucumber slices.',
    funFact: 'Scoring the shrimp deeply along the dorsal vein causes them to curl into round spheres called "shrimp balls" (xiāqiú).'
  },
  {
    id: 'cn-egg-tarts',
    countryId: 'china',
    title: 'Hong Kong Flaky Egg Custard Tarts',
    nativeTitle: '港式蛋挞 (Dàntà)',
    description: 'Hong Kong bakery royalty: hundreds of paper-thin buttery puff pastry layers cradling an ultra-smooth, glossy, golden egg custard baked to trembling perfection.',
    image: AUTHENTIC_IMAGES.hongKongEggTarts,
    prepTimeMinutes: 45,
    cookTimeMinutes: 20,
    servings: 8,
    difficulty: 'Hard',
    caloriesPerServing: 260,
    dietaryTags: ['Vegetarian', 'Hong Kong Bakery', 'Iconic Dim Sum'],
    course: 'Dessert',
    ingredients: [
      { name: 'All-Purpose Flour', amount: 250, unit: 'g', category: 'Pastry' },
      { name: 'Unsalted Butter (cold)', amount: 150, unit: 'g', category: 'Pastry' },
      { name: 'Cold Water', amount: 80, unit: 'ml', category: 'Pastry' },
      { name: 'Large Farm Eggs', amount: 3, unit: 'pcs', category: 'Custard' },
      { name: 'Evaporated Milk', amount: 80, unit: 'ml', category: 'Custard' },
      { name: 'Warm Water & Granulated Sugar', amount: 150, unit: 'ml', category: 'Custard' },
      { name: 'Pure Vanilla Extract', amount: 4, unit: 'ml', category: 'Custard' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Laminate Flaky Pastry Dough',
        instruction: 'Prepare a laminated puff dough by folding cold butter into water dough through three letter-folds. Chill for 40 minutes.',
        durationMinutes: 50
      },
      {
        stepNumber: 2,
        title: 'Whisk Silky Custard & Strain Twice',
        instruction: 'Dissolve sugar in warm water. Whisk eggs with evaporated milk, vanilla, and sugar water. Pass through a fine strainer twice to eliminate all air bubbles.',
        durationMinutes: 8,
        chefTip: 'Straining twice removes chalazae and bubbles, giving the baked custard its mirror-like glassy surface.'
      },
      {
        stepNumber: 3,
        title: 'Line Fluted Tart Molds',
        instruction: 'Roll pastry to 3mm thick. Cut circles and press into fluted tart tins, pushing pastry slightly above the rim.',
        durationMinutes: 10
      },
      {
        stepNumber: 4,
        title: 'Fill and Bake to Trembling Set',
        instruction: 'Pour custard into shells 80% full. Bake at 200°C (400°F) for 15 to 18 minutes until pastry puffs and custard is gently set with a slight jiggle in the center.',
        durationMinutes: 18,
        temperature: '200°C / 400°F'
      }
    ],
    servingNotes: 'Best enjoyed warm from the bakery oven with a cup of silky Hong Kong milk tea.',
    funFact: 'Introduced to Hong Kong tea cafes (cha chaan tengs) in the 1940s, evolving from British custard tarts and Portuguese pastéis de nata into a unique Cantonese cultural icon.'
  }
];
