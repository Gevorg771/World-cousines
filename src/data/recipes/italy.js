
export const ITALY_RECIPES = [
  {
    id: 'ita-carbonara',
    countryId: 'italy',
    title: 'Authentic Roman Spaghetti alla Carbonara',
    nativeTitle: 'Spaghetti alla Carbonara',
    description: 'Crispy cured pork jowl (guanciale), pecorino romano, egg yolks, and coarse freshly cracked black pepper emulsified into a glossy, velvety sauce.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Espaguetis_carbonara.jpg/960px-Espaguetis_carbonara.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    servings: 2,
    difficulty: 'Medium',
    caloriesPerServing: 640,
    dietaryTags: ['High-Protein', 'Roman Classic', 'No Cream'],
    course: 'Main',
    ingredients: [
      { name: 'Spaghetti di Gragnano (Bronze Die)', amount: 220, unit: 'g', category: 'Pasta' },
      { name: 'Guanciale (cured pork jowl, sliced into 5mm lardons)', amount: 150, unit: 'g', category: 'Meat' },
      { name: 'Fresh Egg Yolks (Free-Range)', amount: 4, unit: 'pcs', category: 'Sauce' },
      { name: 'Pecorino Romano DOP (finely grated on microplane)', amount: 60, unit: 'g', category: 'Cheese' },
      { name: 'Whole Black Peppercorns (toasted & cracked)', amount: 6, unit: 'g', category: 'Spices' },
      { name: 'Coarse Sea Salt for pasta water', amount: 15, unit: 'g', category: 'Seasoning' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Toast Pepper & Render Guanciale',
        instruction: 'In a cold skillet, add the guanciale lardons without added oil. Turn heat to medium-low and render slowly for 10 minutes until deeply golden, crispy on the exterior, yet tender inside. Drain fat into a small bowl, reserving lardons.',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Whisk the Pecorino Carbonara Cream',
        instruction: 'In a heatproof bowl, whisk 4 egg yolks, 50g grated Pecorino Romano, half the cracked black pepper, and 2 tablespoons of warm rendered guanciale fat until a dense, glossy paste forms.',
        durationMinutes: 4
      },
      {
        stepNumber: 3,
        title: 'Cook Pasta Al Dente',
        instruction: 'Boil spaghetti in moderately salted water (use half the usual salt as guanciale and pecorino are naturally savory) until 2 minutes shy of package instructions.',
        durationMinutes: 9
      },
      {
        stepNumber: 4,
        title: 'Emulsify Off the Heat (Il Mantecare)',
        instruction: 'Transfer pasta directly into the warm skillet with 60ml starchy pasta water. Toss with crispy guanciale. Take skillet COMPLETELY OFF HEAT. Pour in egg-pecorino mixture and toss continuously for 60 seconds until a creamy emulsion forms without scrambling.',
        durationMinutes: 3,
        chefTip: 'The residual heat of the pasta is all that is needed to gently cook the yolks into cream. Never return skillet to direct flame.'
      },
      {
        stepNumber: 5,
        title: 'Plate Immediately',
        instruction: 'Twirl into warm bowls. Crown with reserved crispy guanciale lardons, extra grated Pecorino Romano, and coarse black pepper.',
        durationMinutes: 2
      }
    ],
    funFact: 'Real Roman carbonara strictly forbids cream, garlic, peas, or onions. Its magic relies entirely on the emulsion of starchy water, pork fat, cheese, and egg yolks.',
    servingNotes: 'Serve immediately with a glass of crisp Frascati Superiore or dry Chianti.'
  },
  {
    id: 'ita-pizza-margherita',
    countryId: 'italy',
    title: 'Pizza Margherita Napoletana',
    nativeTitle: 'Pizza Napoletana Verace',
    description: 'Neapolitan wood-fired pizza with blistered cornicione crust, crushed San Marzano tomatoes, fresh fior di latte mozzarella, basil, and extra virgin olive oil.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Pizza_Margherita_stu_spivack.jpg/960px-Pizza_Margherita_stu_spivack.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 40,
    cookTimeMinutes: 5,
    servings: 2,
    difficulty: 'Hard',
    caloriesPerServing: 580,
    dietaryTags: ['Vegetarian', 'UNESCO Heritage'],
    course: 'Main',
    ingredients: [
      { name: 'Tipo 00 Italian Flour', amount: 350, unit: 'g', category: 'Dough' },
      { name: 'Water (65% hydration)', amount: 228, unit: 'ml', category: 'Dough' },
      { name: 'Fine Sea Salt', amount: 10, unit: 'g', category: 'Dough' },
      { name: 'Fresh Yeast', amount: 1, unit: 'g', category: 'Dough' },
      { name: 'San Marzano Dell’Agro Sarnese DOP Tomatoes', amount: 200, unit: 'g', category: 'Sauce' },
      { name: 'Fresh Fior di Latte Mozzarella (drained)', amount: 180, unit: 'g', category: 'Cheese' },
      { name: 'Fresh Genovese Basil Leaves', amount: 10, unit: 'pcs', category: 'Herb' },
      { name: 'Extra Virgin Olive Oil', amount: 20, unit: 'ml', category: 'Topping' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: '24-Hour Fermentation',
        instruction: 'Dissolve fresh yeast in room temp water. Add flour and salt, kneading 15 minutes. Ferment at room temperature for 6 hours, ball into two 260g dough balls, and cold ferment 18 hours.',
        durationMinutes: 30
      },
      {
        stepNumber: 2,
        title: 'Hand Stretch Cornicione',
        instruction: 'Dust dough ball with semolina. Press from center outward with fingers to push trapped gas bubbles into the outer rim (cornicione). Stretch gently over knuckles.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Top and High Heat Bake',
        instruction: 'Crush San Marzano tomatoes by hand with a pinch of salt. Spoon onto dough. Scatter torn mozzarella and basil leaves. Drizzle extra virgin olive oil. Bake on maximum preheated pizza stone or pizza oven at 450°C for 90 seconds (or 275°C domestic oven for 5 minutes) until leopard-spotted.',
        durationMinutes: 5,
        temperature: '450°C / 850°F'
      }
    ],
    funFact: 'Created in 1889 by pizzaiolo Raffaele Esposito in honor of Queen Margherita of Savoy, featuring the red, white, and green colors of the unified Italian flag.',
    servingNotes: 'Eat hot directly from the stone with scissors or fold into "portafoglio" (wallet style).'
  },
  {
    id: 'ita-risotto-milanese',
    countryId: 'italy',
    title: 'Risotto alla Milanese con Zafferano',
    nativeTitle: 'Risotto alla Milanese',
    description: 'Golden, creamy Carnaroli rice infused with genuine saffron threads, rich beef marrow, white wine, and aged Parmigiano Reggiano.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Risotto_allo_zafferano_%285515768228%29.jpg/960px-Risotto_allo_zafferano_%285515768228%29.jpg',
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 420,
    dietaryTags: ['Gluten-Free', 'Classic Lombardy'],
    course: 'Main',
    ingredients: [
      { name: 'Carnaroli or Vialone Nano Rice', amount: 320, unit: 'g', category: 'Grain' },
      { name: 'Pure Saffron Threads', amount: 0.5, unit: 'g', category: 'Spice' },
      { name: 'Beef Bone Marrow or Butter', amount: 40, unit: 'g', category: 'Fat' },
      { name: 'Shallot (minced)', amount: 60, unit: 'g', category: 'Aromatics' },
      { name: 'Dry White Wine', amount: 100, unit: 'ml', category: 'Liquid' },
      { name: 'Simmering Beef or Veal Broth', amount: 1200, unit: 'ml', category: 'Stock' },
      { name: 'Cold Butter Cubes', amount: 60, unit: 'g', category: 'Mantecatura' },
      { name: 'Parmigiano Reggiano 24-month (grated)', amount: 70, unit: 'g', category: 'Cheese' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Steep Saffron',
        instruction: 'Steep crushed saffron threads in 100ml warm broth for 30 minutes to release intense golden color and perfume.',
        durationMinutes: 30
      },
      {
        stepNumber: 2,
        title: 'Toast the Rice (Tostatura)',
        instruction: 'Melt marrow and butter. Sauté minced shallot until translucent. Add rice and toast dry for 3 minutes until grains are translucent and hot to the touch. Deglaze with white wine.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Slow Broth Addition',
        instruction: 'Ladle simmering broth into rice one ladle at a time, stirring gently. Wait until liquid is almost absorbed before adding next ladle. Cook 14 minutes.',
        durationMinutes: 15
      },
      {
        stepNumber: 4,
        title: 'Saffron & Mantecatura',
        instruction: 'Pour in saffron infusion. Cook 2 more minutes until al dente. Remove from heat. Vigorously whip in cold butter and Parmigiano until wave-like (all’onda).',
        durationMinutes: 4
      }
    ],
    funFact: 'Legend says the dish was created in 1574 when an apprentice glazier working on Milan’s Duomo cathedral added saffron (used to dye stained glass yellow) to the wedding rice!',
    servingNotes: 'Serve on flat plates; tap bottom of plate with your palm so the risotto spreads into an even, glossy pool.'
  },
  {
    id: 'ita-tiramisu',
    countryId: 'italy',
    title: 'Classic Venetian Tiramisù',
    nativeTitle: 'Tiramisù Tradizionale di Treviso',
    description: 'Airy layers of espresso-dipped Italian Savoiardi ladyfingers enveloped in rich mascarpone sabayon cream and dusted with Dutch-process cocoa.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Tiramisu_-_Raffaele_Diomede.jpg/960px-Tiramisu_-_Raffaele_Diomede.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 30,
    cookTimeMinutes: 0,
    servings: 8,
    difficulty: 'Easy',
    caloriesPerServing: 380,
    dietaryTags: ['Vegetarian', 'Iconic Italian Dessert'],
    course: 'Dessert',
    ingredients: [
      { name: 'Italian Savoiardi Ladyfingers', amount: 300, unit: 'g', category: 'Bakery' },
      { name: 'Fresh Mascarpone Cheese', amount: 500, unit: 'g', category: 'Dairy' },
      { name: 'Fresh Egg Yolks', amount: 5, unit: 'pcs', category: 'Custard' },
      { name: 'Granulated Sugar', amount: 100, unit: 'g', category: 'Custard' },
      { name: 'Freshly Brewed Strong Espresso', amount: 300, unit: 'ml', category: 'Liquid' },
      { name: 'Marsala Wine or Dark Rum (optional)', amount: 30, unit: 'ml', category: 'Liquid' },
      { name: 'Bitter Dark Cocoa Powder', amount: 30, unit: 'g', category: 'Dusting' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Whip Sabayon Cream',
        instruction: 'Beat egg yolks and sugar over a double boiler for 6 minutes until pale, thick, and ribbon-like. Cool slightly, then fold gently into mascarpone.',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Quick Dip Savoiardi',
        instruction: 'Combine espresso and Marsala. Quickly dip ladyfingers for 1 second per side (never soak or they collapse).',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Layer and Chill',
        instruction: 'Arrange dipped ladyfingers in a glass dish. Spread half the mascarpone cream. Repeat with second layer. Chill at least 6 hours.',
        durationMinutes: 360
      },
      {
        stepNumber: 4,
        title: 'Cocoa Shower',
        instruction: 'Right before serving, dust top heavily with Dutch cocoa powder through a fine mesh sieve.',
        durationMinutes: 2
      }
    ],
    funFact: 'Tiramisù translates literally to "pick me up" or "cheer me up", referencing the invigorating blend of strong espresso and rich eggs.',
    servingNotes: 'Cut cleanly into squares and serve with an espresso or Vin Santo.'
  },
  {
    id: 'ita-ossobuco',
    countryId: 'italy',
    title: 'Ossobuco alla Milanese con Gremolata',
    nativeTitle: 'Ossobuco alla Milanese',
    description: 'Cross-cut veal shanks braised in dry white wine, broth, and aromatics until meltingly tender, topped with a zesty lemon-parsley gremolata.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Ossobuco.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
    prepTimeMinutes: 25,
    cookTimeMinutes: 120,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 520,
    dietaryTags: ['High-Protein', 'Braised Meat', 'Lombardy Heritage'],
    course: 'Main',
    ingredients: [
      { name: 'Veal Shank Steaks (with bone marrow center)', amount: 1200, unit: 'g', category: 'Meat' },
      { name: 'Dry Italian White Wine', amount: 200, unit: 'ml', category: 'Liquid' },
      { name: 'Rich Veal Broth', amount: 500, unit: 'ml', category: 'Liquid' },
      { name: 'Yellow Onion, Carrot, Celery (diced)', amount: 250, unit: 'g', category: 'Aromatics' },
      { name: 'Flour for dusting', amount: 40, unit: 'g', category: 'Dredge' },
      { name: 'Fresh Flat-Leaf Parsley (chopped)', amount: 30, unit: 'g', category: 'Gremolata' },
      { name: 'Organic Lemon Zest (finely grated)', amount: 2, unit: 'pcs', category: 'Gremolata' },
      { name: 'Garlic Clove (finely grated)', amount: 1, unit: 'clove', category: 'Gremolata' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Tie and Sear Veal',
        instruction: 'Tie kitchen twine around each shank so meat does not detach from bone during braising. Season and dust lightly with flour. Sear in butter over high heat until browned.',
        durationMinutes: 12
      },
      {
        stepNumber: 2,
        title: 'Braise with Wine and Broth',
        instruction: 'Remove shanks, sweat mirepoix vegetables. Deglaze with white wine. Return shanks, add hot veal broth halfway up meat. Cover tightly and simmer on low for 1.5 to 2 hours.',
        durationMinutes: 100
      },
      {
        stepNumber: 3,
        title: 'Gremolata Finish',
        instruction: 'Mix freshly grated lemon zest, minced flat-leaf parsley, and garlic. Scatter over hot braised shanks right before serving.',
        durationMinutes: 3
      }
    ],
    funFact: 'The name "Ossobuco" literally means "bone with a hole", referring to the marrow cavity at the center of the shank.',
    servingNotes: 'Provide small spoons so diners can scoop the prized marrow from the center of the bone.'
  },
  {
    id: 'ita-lasagna',
    countryId: 'italy',
    title: 'Authentic Lasagna alla Bolognese',
    nativeTitle: 'Lasagne alla Bolognese al Forno',
    description: 'Twelve silky layers of fresh green spinach pasta sheets, 4-hour slow-cooked Ragù alla Bolognese, creamy silky béchamel, and Parmigiano.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Lasagne_-_stonesoup.jpg/960px-Lasagne_-_stonesoup.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 60,
    cookTimeMinutes: 50,
    servings: 8,
    difficulty: 'Hard',
    caloriesPerServing: 620,
    dietaryTags: ['High-Protein', 'Bologna Heritage', 'Baked Pasta'],
    course: 'Main',
    ingredients: [
      { name: 'Fresh Spinach Egg Pasta Sheets', amount: 400, unit: 'g', category: 'Pasta' },
      { name: 'Slow-Cooked Ragù Bolognese (beef, pork, milk, wine)', amount: 800, unit: 'g', category: 'Sauce' },
      { name: 'Whole Milk', amount: 800, unit: 'ml', category: 'Besciamella' },
      { name: 'Butter and Flour (Roux)', amount: 60, unit: 'g', category: 'Besciamella' },
      { name: 'Fresh Nutmeg', amount: 2, unit: 'g', category: 'Spice' },
      { name: 'Parmigiano Reggiano DOP (grated)', amount: 150, unit: 'g', category: 'Cheese' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Velvety Besciamella',
        instruction: 'Melt 60g butter, whisk in 60g flour for 2 minutes. Whisk in warm milk gradually until creamy and thick. Season with salt and grated nutmeg.',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Layering Precision',
        instruction: 'Spread a thin film of béchamel on the bottom of baking dish. Layer pasta sheets, ragù bolognese, besciamella, and Parmigiano. Repeat for 5-6 full layers.',
        durationMinutes: 20
      },
      {
        stepNumber: 3,
        title: 'Golden Bake',
        instruction: 'Bake at 190°C (375°F) for 30 minutes until top is deeply browned and edges are bubbling crisp. Rest 15 minutes before slicing.',
        durationMinutes: 45,
        temperature: '190°C / 375°F'
      }
    ],
    funFact: 'In Bologna, authentic traditional lasagna pasta sheets MUST be tinted green with fresh spinach.',
    servingNotes: 'Pair with a glass of sparkling Lambrusco di Sorbara.'
  },
  {
    id: 'ita-pesto-genovese',
    countryId: 'italy',
    title: 'Trofie al Pesto Genovese Tradizionale',
    nativeTitle: 'Pesto Genovese con Trofie',
    description: 'Mortar-ground fresh young Genovese basil, Mediterranean pine nuts, Parmigiano, Pecorino Fiore Sardo, garlic, and Ligurian olive oil.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Trofie_al_pesto_.jpg/960px-Trofie_al_pesto_.jpg',
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 510,
    dietaryTags: ['Vegetarian', 'Ligurian Masterpiece'],
    course: 'Main',
    ingredients: [
      { name: 'Fresh Genovese DOP Basil Leaves', amount: 80, unit: 'g', category: 'Herbs' },
      { name: 'Italian Pine Nuts (pinoli)', amount: 35, unit: 'g', category: 'Nuts' },
      { name: 'Parmigiano Reggiano (grated)', amount: 60, unit: 'g', category: 'Cheese' },
      { name: 'Pecorino Fiore Sardo (grated)', amount: 25, unit: 'g', category: 'Cheese' },
      { name: 'Vessalico Garlic Clove', amount: 1, unit: 'clove', category: 'Aromatics' },
      { name: 'Ligurian Extra Virgin Olive Oil', amount: 100, unit: 'ml', category: 'Oil' },
      { name: 'Fresh Trofie Pasta', amount: 400, unit: 'g', category: 'Pasta' },
      { name: 'Boiled Green Beans & Potato Cubes', amount: 150, unit: 'g', category: 'Traditional Add-in' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Mortar & Pestle Technique',
        instruction: 'In a marble mortar, crush garlic and pine nuts with sea salt into a smooth cream. Add basil leaves with a rotary wrist movement against the marble walls.',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Incorporate Cheeses and Oil',
        instruction: 'Stir in grated cheeses. Slowly drizzle in Ligurian extra virgin olive oil until an emerald green, fragrant paste forms. Never heat pesto.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Cook with Potatoes and Beans',
        instruction: 'Boil trofie with diced potatoes and trimmed green beans in salted water. Drain and toss immediately in a bowl with pesto and 2 tbsp pasta water.',
        durationMinutes: 8
      }
    ],
    funFact: 'Traditionalists insist that metal blender blades heat the basil and oxidize its essential oils, making the wooden pestle mandatory.',
    servingNotes: 'Pair with a glass of crisp Pigato or Vermentino wine from the Ligurian coast.'
  },
  {
    id: 'ita-arancini',
    countryId: 'italy',
    title: 'Sicilian Arancini al Ragù',
    nativeTitle: 'Arancini Catanesi al Ragù',
    description: 'Golden, crispy breaded rice balls infused with saffron, stuffed with slow-cooked meat ragù, sweet peas, and melted caciocavallo cheese.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Arancini_002.jpg/960px-Arancini_002.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 45,
    cookTimeMinutes: 20,
    servings: 6,
    difficulty: 'Medium',
    caloriesPerServing: 460,
    dietaryTags: ['Sicilian Street Food', 'High-Protein'],
    course: 'Street Food',
    ingredients: [
      { name: 'Originario or Carnaroli Rice', amount: 500, unit: 'g', category: 'Grain' },
      { name: 'Saffron Threads', amount: 0.3, unit: 'g', category: 'Spice' },
      { name: 'Concentrated Beef Ragù with Peas', amount: 250, unit: 'g', category: 'Filling' },
      { name: 'Caciocavallo or Fresh Mozzarella (cubed)', amount: 150, unit: 'g', category: 'Cheese' },
      { name: 'Fine Breadcrumbs', amount: 250, unit: 'g', category: 'Crust' },
      { name: 'Flour and Water Batter', amount: 200, unit: 'g', category: 'Crust' },
      { name: 'Peanut Oil for frying', amount: 1000, unit: 'ml', category: 'Frying' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Cook Saffron Rice',
        instruction: 'Cook rice in 1.2L salted water with butter and saffron until completely absorbed and sticky. Spread on a large baking sheet to cool completely.',
        durationMinutes: 20
      },
      {
        stepNumber: 2,
        title: 'Shape and Stuff Cones',
        instruction: 'Moisten hands. Take a ball of rice, flatten into your palm, spoon in a tablespoon of cold ragù and a cheese cube. Close rice around filling and shape into a conical pear (Catania) or round sphere (Palermo).',
        durationMinutes: 20
      },
      {
        stepNumber: 3,
        title: 'Batter and Bread',
        instruction: 'Dip rice balls into thin flour-water batter, roll in fine breadcrumbs, and deep-fry at 175°C for 6-8 minutes until deeply golden.',
        durationMinutes: 15,
        temperature: '175°C / 350°F'
      }
    ],
    funFact: 'Named "arancini" because their golden breaded spheres look like little oranges ("arancia" in Italian). In eastern Sicily, they are pointed like Mount Etna.',
    servingNotes: 'Serve warm wrapped in greaseproof paper as traditional street food.'
  },
  {
    id: 'ita-saltimbocca',
    countryId: 'italy',
    title: 'Saltimbocca alla Romana',
    nativeTitle: 'Saltimbocca alla Romana',
    description: 'Tender milk-fed veal cutlets wrapped with salty prosciutto crudo di Parma and fresh sage leaves, flash-seared in butter and white wine.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Saltimbocca_01.jpg/960px-Saltimbocca_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 15,
    cookTimeMinutes: 8,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 380,
    dietaryTags: ['High-Protein', 'Roman Classic', 'Gluten-Free Option'],
    course: 'Main',
    ingredients: [
      { name: 'Veal Top Round Cutlets (pounded thin)', amount: 500, unit: 'g', category: 'Meat' },
      { name: 'Prosciutto di Parma DOP', amount: 8, unit: 'slices', category: 'Charcuterie' },
      { name: 'Fresh Sage Leaves', amount: 8, unit: 'pcs', category: 'Herb' },
      { name: 'Dry Italian White Wine', amount: 100, unit: 'ml', category: 'Sauce' },
      { name: 'Cultured Butter', amount: 50, unit: 'g', category: 'Sauce' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Assemble Skewered Cutlets',
        instruction: 'Place a slice of prosciutto and a fresh sage leaf on top of each veal cutlet. Secure with a wooden toothpick weaved horizontally through the meat.',
        durationMinutes: 8
      },
      {
        stepNumber: 2,
        title: 'Flash Sear in Butter',
        instruction: 'Melt half the butter in a hot skillet. Sear cutlets prosciutto-side down for 90 seconds, flip and cook 60 seconds on the plain side. Remove to a warm plate.',
        durationMinutes: 4
      },
      {
        stepNumber: 3,
        title: 'Pan Sauce Glaze',
        instruction: 'Pour white wine into skillet, scraping up pan juices. Whisk in remaining cold butter to mount the sauce. Pour sauce over cutlets.',
        durationMinutes: 3
      }
    ],
    funFact: 'The name "Saltimbocca" translates directly to "jumps in the mouth", describing how quickly its delectable flavor is devoured.',
    servingNotes: 'Serve immediately with sautéed bitter greens (cicoria ripassata).'
  },
  {
    id: 'ita-bistecca-fiorentina',
    countryId: 'italy',
    title: 'Bistecca alla Fiorentina',
    nativeTitle: 'Bistecca alla Fiorentina',
    description: 'Legendary Tuscan thick-cut porterhouse steak from Chianina beef, seared over blazing oak charcoal to rare perfection with rosemary and sea salt.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Bistecca_alla_fiorentina-01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    servings: 3,
    difficulty: 'Medium',
    caloriesPerServing: 680,
    dietaryTags: ['High-Protein', 'Tuscan Heritage', 'Keto-Friendly'],
    course: 'Main',
    ingredients: [
      { name: 'Thick-cut T-bone/Porterhouse Steak (3-4 fingers thick)', amount: 1300, unit: 'g', category: 'Meat' },
      { name: 'Flaky Tuscan Sea Salt', amount: 15, unit: 'g', category: 'Seasoning' },
      { name: 'Tuscan Extra Virgin Olive Oil', amount: 30, unit: 'ml', category: 'Finish' },
      { name: 'Fresh Rosemary Sprigs', amount: 2, unit: 'pcs', category: 'Aromatic' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Room Temperature Tempering',
        instruction: 'Remove steak from refrigerator at least 2 hours before cooking so the core reaches ambient temperature.',
        durationMinutes: 120
      },
      {
        stepNumber: 2,
        title: 'Charcoal Sear',
        instruction: 'Grill over glowing hardwood coals for 5 minutes per side without touching, creating a deep charred crust while keeping the interior ruby red.',
        durationMinutes: 10,
        temperature: 'High Embers'
      },
      {
        stepNumber: 3,
        title: 'Stand on the Bone & Rest',
        instruction: 'Stand steak vertically on its T-bone on the grill for 5 minutes to conduct gentle heat into the bone. Rest 7 minutes before carving.',
        durationMinutes: 12
      }
    ],
    funFact: 'In Florence, asking a chef to cook a Bistecca alla Fiorentina "well-done" will typically be met with polite yet firm refusal.',
    servingNotes: 'Carve slices from the bone, dress with fragrant green Tuscan olive oil, and pair with Chianti Classico.'
  },
  {
    id: 'ita-panna-cotta',
    countryId: 'italy',
    title: 'Vanilla Bean Panna Cotta con Frutti di Bosco',
    nativeTitle: 'Panna Cotta Piemontese',
    description: 'Piedmontese cooked cream infused with whole Madagascar vanilla bean pods, set with delicate gelatin and topped with tart wild berry coulis.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Panna_Cotta_with_cream_and_garnish.jpg/960px-Panna_Cotta_with_cream_and_garnish.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    servings: 6,
    difficulty: 'Easy',
    caloriesPerServing: 310,
    dietaryTags: ['Gluten-Free', 'Vegetarian Option', 'Classic Dessert'],
    course: 'Dessert',
    ingredients: [
      { name: 'Fresh Heavy Cream (36% fat)', amount: 500, unit: 'ml', category: 'Dairy' },
      { name: 'Whole Milk', amount: 150, unit: 'ml', category: 'Dairy' },
      { name: 'Granulated Sugar', amount: 80, unit: 'g', category: 'Sweetener' },
      { name: 'Madagascar Vanilla Bean (split & scraped)', amount: 1, unit: 'pod', category: 'Aroma' },
      { name: 'Gelatin Sheets (silver grade)', amount: 8, unit: 'g', category: 'Setting' },
      { name: 'Wild Berries (raspberries, blackberries, blueberries)', amount: 250, unit: 'g', category: 'Coulis' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Bloom Gelatin',
        instruction: 'Soak gelatin sheets in a bowl of ice-cold water for 5 minutes until soft and pliable.',
        durationMinutes: 5
      },
      {
        stepNumber: 2,
        title: 'Infuse Cream & Dissolve Sugar',
        instruction: 'Simmer cream, milk, sugar, and vanilla pod/seeds until sugar dissolves and tiny bubbles form at the edge (do not boil hard). Whisk in drained gelatin off heat.',
        durationMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Pour and Chill',
        instruction: 'Strain cream into 6 ramekins. Chill in refrigerator for at least 4 hours until gently set with a delightful wobble.',
        durationMinutes: 240
      },
      {
        stepNumber: 4,
        title: 'Simmer Berry Coulis',
        instruction: 'Simmer wild berries with a splash of lemon juice and sugar for 5 minutes. Spoon over chilled panna cotta.',
        durationMinutes: 5
      }
    ],
    funFact: 'Originating in the Langhe hills of Piedmont, the name literally translates to "cooked cream". A perfect panna cotta must maintain a soft, hypnotic tremble.',
    servingNotes: 'Serve chilled in clear glass goblets or unmolded onto chilled dessert plates.'
  }
];
