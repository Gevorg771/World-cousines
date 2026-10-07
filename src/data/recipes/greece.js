
import { AUTHENTIC_IMAGES } from '../imageAssets';

export const GREECE_RECIPES = [
  {
    id: 'gr-moussaka',
    countryId: 'greece',
    title: 'Traditional Greek Moussaka',
    nativeTitle: 'Μουσακάς (Moussakas)',
    description: 'The crowning jewel of Greek cuisine: layers of roasted eggplants, tender potatoes, and spiced cinnamon-infused minced beef-lamb sauce, topped with a velvety golden baked béchamel custard.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/MussakasMeMelitsanesKePatates01.JPG/960px-MussakasMeMelitsanesKePatates01.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 45,
    cookTimeMinutes: 50,
    servings: 6,
    difficulty: 'Hard',
    caloriesPerServing: 640,
    dietaryTags: ['Traditional', 'Iconic', 'Comfort Food'],
    course: 'Main',
    ingredients: [
      { name: 'Globe Eggplants (sliced into 1cm rounds)', amount: 800, unit: 'g', category: 'Vegetables' },
      { name: 'Yukon Gold Potatoes (peeled and sliced)', amount: 500, unit: 'g', category: 'Vegetables' },
      { name: 'Extra Virgin Greek Olive Oil', amount: 90, unit: 'ml', category: 'Cooking' },
      { name: 'Ground Beef & Lamb Blend', amount: 600, unit: 'g', category: 'Meat Sauce' },
      { name: 'Yellow Onion (finely diced)', amount: 200, unit: 'g', category: 'Meat Sauce' },
      { name: 'Garlic Cloves (minced)', amount: 4, unit: 'pcs', category: 'Meat Sauce' },
      { name: 'Crushed San Marzano or Greek Plum Tomatoes', amount: 400, unit: 'g', category: 'Meat Sauce' },
      { name: 'Ground Cinnamon & Allspice', amount: 5, unit: 'g', category: 'Meat Sauce' },
      { name: 'Greek Red Wine (or dry white)', amount: 80, unit: 'ml', category: 'Meat Sauce' },
      { name: 'Whole Milk (warm)', amount: 700, unit: 'ml', category: 'Béchamel' },
      { name: 'Unsalted Butter', amount: 70, unit: 'g', category: 'Béchamel' },
      { name: 'All-Purpose Flour', amount: 70, unit: 'g', category: 'Béchamel' },
      { name: 'Egg Yolks', amount: 2, unit: 'pcs', category: 'Béchamel' },
      { name: 'Kefalotyri or Pecorino Cheese (grated)', amount: 100, unit: 'g', category: 'Béchamel' },
      { name: 'Ground Nutmeg', amount: 3, unit: 'g', category: 'Béchamel' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Roast Potatoes & Eggplants',
        instruction: 'Toss potato and eggplant slices with 60ml olive oil, sea salt, and oregano. Spread across baking trays in single layers. Roast at 200°C (400°F) for 20 to 25 minutes until tender and light golden.',
        durationMinutes: 25,
        chefTip: 'Roasting the eggplants rather than deep-frying produces a lighter moussaka that retains clean structural layers without feeling greasy.'
      },
      {
        stepNumber: 2,
        title: 'Simmer Cinnamon Spiced Meat Sauce',
        instruction: 'In a deep pan, sauté onions and garlic in olive oil until soft. Add ground meat and brown completely. Deglaze with wine. Add tomatoes, cinnamon, allspice, salt, and pepper. Simmer on low for 30 minutes until thick and dry.',
        durationMinutes: 35
      },
      {
        stepNumber: 3,
        title: 'Whisk Velvety Béchamel Custard',
        instruction: 'In a saucepan, melt 70g butter and whisk in 70g flour for 2 minutes. Gradually whisk in warm milk until smooth, thick, and simmering. Take off heat, whisk in egg yolks, grated Kefalotyri, and nutmeg.',
        durationMinutes: 10
      },
      {
        stepNumber: 4,
        title: 'Layer the Casserole',
        instruction: 'In a deep 25x35cm baking dish, lay roasted potatoes first. Layer roasted eggplant over potatoes. Spread the spiced meat sauce evenly. Pour the luxurious béchamel on top, smoothing with an offset spatula, and dust with grated cheese.',
        durationMinutes: 10
      },
      {
        stepNumber: 5,
        title: 'Bake to Golden Bronze Crust',
        instruction: 'Bake at 180°C (350°F) for 45 to 50 minutes until the béchamel develops a puffed, blistered golden-bronze top. Let rest for at least 30 minutes before slicing.',
        durationMinutes: 50,
        temperature: '180°C / 350°F',
        chefTip: 'Resting for 30 to 45 minutes is mandatory! Hot moussaka will collapse; resting lets the custard set into pristine, photogenic squares.'
      }
    ],
    servingNotes: 'Serve warm with a side of crisp Greek village salad and chilled Assyrtiko white wine.',
    funFact: 'The iconic modern béchamel topping on Moussaka was introduced in the 1920s by legendary Greek chef Nikolaos Tselementes, who trained in Vienna and revolutionized modern Greek cooking.'
  },
  {
    id: 'gr-souvlaki',
    countryId: 'greece',
    title: 'Pork Souvlaki Kalamaki & Tzatziki',
    nativeTitle: 'Σουβλάκι Καλαμάκι (Souvlaki)',
    description: 'Charred skewers of marinated pork shoulder kissed by lemon, Greek mountain oregano, and extra virgin olive oil, served with cool cucumber-garlic tzatziki and charred pitas.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/%CE%95%CE%BB%CE%BB%CE%B7%CE%BD%CE%B9%CE%BA%CF%8C_%CE%A3%CE%BF%CF%85%CE%B2%CE%BB%CE%AC%CE%BA%CE%B9_-_panoramio.jpg/960px-%CE%95%CE%BB%CE%BB%CE%B7%CE%BD%CE%B9%CE%BA%CF%8C_%CE%A3%CE%BF%CF%85%CE%B2%CE%BB%CE%AC%CE%BA%CE%B9_-_panoramio.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 30,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 520,
    dietaryTags: ['High Protein', 'Street Food', 'Traditional'],
    course: 'Main',
    ingredients: [
      { name: 'Pork Shoulder or Tenderloin (cut into 3cm cubes)', amount: 800, unit: 'g', category: 'Meat' },
      { name: 'Extra Virgin Olive Oil', amount: 60, unit: 'ml', category: 'Marinade' },
      { name: 'Fresh Lemon Juice', amount: 45, unit: 'ml', category: 'Marinade' },
      { name: 'Dried Greek Mountain Oregano', amount: 12, unit: 'g', category: 'Marinade' },
      { name: 'Garlic Cloves (crushed)', amount: 4, unit: 'pcs', category: 'Marinade' },
      { name: 'Authentic Thick Greek Yogurt (10%)', amount: 350, unit: 'g', category: 'Tzatziki' },
      { name: 'English Cucumber (coarsely grated & squeezed dry)', amount: 200, unit: 'g', category: 'Tzatziki' },
      { name: 'Fresh Dill (chopped)', amount: 15, unit: 'g', category: 'Tzatziki' },
      { name: 'Red Wine Vinegar', amount: 15, unit: 'ml', category: 'Tzatziki' },
      { name: 'Greek Pocketless Pita Breads', amount: 4, unit: 'pcs', category: 'Serving' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Marinate the Pork Cubes',
        instruction: 'Whisk olive oil, lemon juice, crushed garlic, wild oregano, salt, and black pepper. Toss pork cubes in the marinade, cover, and chill for 2 to 4 hours.',
        durationMinutes: 15
      },
      {
        stepNumber: 2,
        title: 'Craft Authentic Thick Tzatziki',
        instruction: 'Grate cucumber and squeeze firmly in a clean kitchen towel until completely dry. Whisk thick Greek yogurt with grated cucumber, minced garlic, olive oil, red wine vinegar, dill, and salt. Chill.',
        durationMinutes: 12,
        chefTip: 'Wringing the cucumber bone-dry is the secret to tzatziki that stays thick and velvety rather than watery.'
      },
      {
        stepNumber: 3,
        title: 'Thread on Bamboo Skewers',
        instruction: 'Soak wooden skewers in water for 30 minutes. Thread pork snugly onto skewers, leaving 5cm at the base for handling.',
        durationMinutes: 10
      },
      {
        stepNumber: 4,
        title: 'High-Heat Char Grilling',
        instruction: 'Grill over hot charcoal or cast iron grill pan for 10 to 12 minutes, turning frequently until nicely charred on all edges and juicy inside (65°C / 150°F). Brush with lemon-herb oil.',
        durationMinutes: 12
      },
      {
        stepNumber: 5,
        title: 'Warm Pita & Assemble',
        instruction: 'Brush pitas with olive oil and grill for 1 minute per side until blistered. Slather with cold tzatziki, slide hot pork off skewers, add sliced red onion and tomato, and wrap.',
        durationMinutes: 4
      }
    ],
    servingNotes: 'Wrap tightly in greaseproof paper street-food style with a few hot crispy french fries tucked inside the wrap.',
    funFact: 'Excavations on Santorini island (Akrotiri) discovered stone barbecue racks used to hold skewered meats dating back to the 17th century BC, making souvlaki one of humanity’s oldest recorded street foods.'
  },
  {
    id: 'gr-spanakopita',
    countryId: 'greece',
    title: 'Authentic Greek Spanakopita',
    nativeTitle: 'Σπανακόπιτα (Spanakopita)',
    description: 'Crisp, golden layers of paper-thin phyllo pastry crackling around a luscious filling of fresh wild spinach, barrel-aged feta, scallions, fresh dill, and nutmeg.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Spanakopita.jpg/960px-Spanakopita.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 40,
    cookTimeMinutes: 45,
    servings: 8,
    difficulty: 'Medium',
    caloriesPerServing: 380,
    dietaryTags: ['Vegetarian', 'Authentic Bakery', 'Iconic'],
    course: 'Bakery',
    ingredients: [
      { name: 'Fresh Baby Spinach (washed and chopped)', amount: 800, unit: 'g', category: 'Filling' },
      { name: 'Greek Barrel-Aged Feta Cheese (crumbled)', amount: 350, unit: 'g', category: 'Filling' },
      { name: 'Fresh Scallions & Leeks (thinly sliced)', amount: 150, unit: 'g', category: 'Filling' },
      { name: 'Fresh Dill (finely chopped)', amount: 35, unit: 'g', category: 'Filling' },
      { name: 'Large Eggs (lightly beaten)', amount: 3, unit: 'pcs', category: 'Filling' },
      { name: 'Nutmeg (freshly grated)', amount: 2, unit: 'g', category: 'Filling' },
      { name: 'Phyllo Pastry Sheets (thawed)', amount: 16, unit: 'pcs', category: 'Pastry' },
      { name: 'Extra Virgin Olive Oil & Melted Butter Blend', amount: 140, unit: 'ml', category: 'Pastry' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Wilt & Dry the Spinach',
        instruction: 'Toss spinach with 1 tsp salt. Let sit for 10 minutes, then squeeze tightly with hands in a cheesecloth until completely moisture-free.',
        durationMinutes: 15,
        chefTip: 'Any trapped water in the spinach will turn the bottom phyllo soggy. Squeeze until no drops emerge.'
      },
      {
        stepNumber: 2,
        title: 'Mix Feta & Herb Filling',
        instruction: 'Sauté scallions and leeks in 2 tbsp olive oil until sweet. Mix with dried spinach, crumbled feta, beaten eggs, chopped dill, grated nutmeg, and black pepper.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Layer Bottom Phyllo Sheets',
        instruction: 'Brush a 25x35cm baking pan with olive oil. Lay down 8 sheets of phyllo one by one, brushing each generously with the olive oil-butter mixture, allowing pastry edges to drape over the pan sides.',
        durationMinutes: 12
      },
      {
        stepNumber: 4,
        title: 'Fill & Cover with Top Sheets',
        instruction: 'Spread the spinach-feta mixture evenly over the pastry base. Fold hanging edges inward. Layer the remaining 8 phyllo sheets on top, brushing each with oil-butter. Trim excess edges and tuck in neatly.',
        durationMinutes: 10
      },
      {
        stepNumber: 5,
        title: 'Score & Bake to Golden Shards',
        instruction: 'Score the top 3 layers of phyllo into squares with a razor-sharp knife (do not cut all the way through). Spritz lightly with water drops. Bake at 180°C (350°F) for 45 minutes until golden-amber and loudly crisp.',
        durationMinutes: 45,
        temperature: '180°C / 350°F'
      }
    ],
    servingNotes: 'Cool for 20 minutes before cutting completely through scored squares. Serve warm or room temperature.',
    funFact: 'In Epirus, Greece’s mountainous northwest, baking savory pita pies with wild mountain greens has been an art passed down from mothers to daughters for over a thousand years.'
  },
  {
    id: 'gr-horiatiki',
    countryId: 'greece',
    title: 'Horiatiki (Authentic Greek Village Salad)',
    nativeTitle: 'Χωριάτικη Σαλάτα (Horiatiki)',
    description: 'The authentic Greek summer classic: sweet sun-ripened tomatoes, crisp Persian cucumbers, Kalamata olives, red onion, and a solid slab of barrel-aged feta crowned with wild oregano and cold-pressed olive oil.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Greece_Food_Horiatiki.JPG/960px-Greece_Food_Horiatiki.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 15,
    cookTimeMinutes: 0,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 280,
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'Iconic', 'Raw Food'],
    course: 'Salad',
    ingredients: [
      { name: 'Vine-Ripened Ripe Summer Tomatoes', amount: 500, unit: 'g', category: 'Vegetables' },
      { name: 'Cucumbers (partially peeled and sliced into thick half-moons)', amount: 250, unit: 'g', category: 'Vegetables' },
      { name: 'Green Bell Pepper (thinly sliced rings)', amount: 100, unit: 'g', category: 'Vegetables' },
      { name: 'Red Onion (thinly sliced into half-moons)', amount: 100, unit: 'g', category: 'Vegetables' },
      { name: 'Kalamata Olives (whole with pits)', amount: 80, unit: 'g', category: 'Vegetables' },
      { name: 'Authentic Greek Feta (one whole thick slab)', amount: 200, unit: 'g', category: 'Cheese' },
      { name: 'Extra Virgin Greek Olive Oil (Koroneiki variety)', amount: 60, unit: 'ml', category: 'Dressing' },
      { name: 'Red Wine Vinegar', amount: 15, unit: 'ml', category: 'Dressing' },
      { name: 'Dried Greek Wild Oregano (Rigani)', amount: 8, unit: 'g', category: 'Seasoning' },
      { name: 'Flaky Sea Salt', amount: 5, unit: 'g', category: 'Seasoning' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Chop Tomatoes into Irregular Wedges',
        instruction: 'Cut room-temperature ripe tomatoes into hearty, rustic wedges over the serving bowl to catch all the flavorful sweet juices.',
        durationMinutes: 5,
        chefTip: 'Never refrigerate salad tomatoes! Chilling destroys their aromatic esters and softens texture.'
      },
      {
        stepNumber: 2,
        title: 'Combine Crisp Vegetables',
        instruction: 'Add sliced cucumbers, green pepper rings, thinly sliced red onion, and whole Kalamata olives to the tomatoes. Sprinkle with flaky sea salt and red wine vinegar. Toss gently.',
        durationMinutes: 4
      },
      {
        stepNumber: 3,
        title: 'Crest with the Feta Slab',
        instruction: 'Place one single, generous rectangular slab of barrel-aged sheep’s feta right across the top of the vegetables (do NOT crumble or dice the feta).',
        durationMinutes: 2
      },
      {
        stepNumber: 4,
        title: 'Drizzle Olive Oil & Oregano',
        instruction: 'Douse the feta slab and vegetables lavishly with premium cold-pressed extra virgin olive oil. Rub wild dried Greek oregano between palms over the feta.',
        durationMinutes: 2
      }
    ],
    servingNotes: 'Serve with crusty rustic bread for "papara"—the sacred Greek ritual of dipping warm bread into the pool of olive oil, tomato juice, and feta brine at the bottom of the bowl.',
    funFact: 'In Greece, a true horiatiki never contains lettuce, cabbage, or bottled dressings—those are tourist inventions!'
  },
  {
    id: 'gr-pastitsio',
    countryId: 'greece',
    title: 'Pastitsio (Greek Baked Pasta)',
    nativeTitle: 'Παστίτσιο (Pastitsio)',
    description: 'Greek culinary grandeur: tubular bucatini pasta bound with egg white and grated cheese, layered with cinnamon-clove spiced minced meat and blanketed with a thick, puffed béchamel crown.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Pastitsio_homemade.jpg/960px-Pastitsio_homemade.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 45,
    cookTimeMinutes: 45,
    servings: 8,
    difficulty: 'Hard',
    caloriesPerServing: 620,
    dietaryTags: ['Traditional', 'High Protein', 'Comfort Food'],
    course: 'Main',
    ingredients: [
      { name: 'Greek Pasta No. 2 (or Bucatini/Ziti)', amount: 400, unit: 'g', category: 'Pasta' },
      { name: 'Kefalotyri or Parmesan (grated)', amount: 120, unit: 'g', category: 'Pasta & Béchamel' },
      { name: 'Egg Whites (lightly beaten)', amount: 2, unit: 'pcs', category: 'Pasta Binder' },
      { name: 'Ground Beef', amount: 600, unit: 'g', category: 'Meat Sauce' },
      { name: 'Yellow Onion & Garlic', amount: 200, unit: 'g', category: 'Meat Sauce' },
      { name: 'Tomato Purée & Paste', amount: 400, unit: 'g', category: 'Meat Sauce' },
      { name: 'Ground Cinnamon, Clove & Allspice', amount: 6, unit: 'g', category: 'Meat Sauce' },
      { name: 'Butter', amount: 75, unit: 'g', category: 'Béchamel' },
      { name: 'Flour', amount: 75, unit: 'g', category: 'Béchamel' },
      { name: 'Warm Milk', amount: 800, unit: 'ml', category: 'Béchamel' },
      { name: 'Egg Yolks', amount: 2, unit: 'pcs', category: 'Béchamel' },
      { name: 'Nutmeg', amount: 3, unit: 'g', category: 'Béchamel' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Cook & Bind Bucatini',
        instruction: 'Boil bucatini pasta in salted water until very al dente (2 minutes less than package directions). Drain, toss with 2 tbsp melted butter, beaten egg whites, and 40g grated cheese. This binds the pasta into neat sliceable tubes.',
        durationMinutes: 15
      },
      {
        stepNumber: 2,
        title: 'Simmer Spiced Meat Sauce',
        instruction: 'Brown beef with onions and garlic. Add tomatoes, cinnamon, pinch of ground cloves, allspice, salt, and pepper. Simmer for 25 minutes until rich and thick.',
        durationMinutes: 30
      },
      {
        stepNumber: 3,
        title: 'Prepare Custard Béchamel',
        instruction: 'Melt butter, whisk in flour for 2 minutes, then slowly pour in warm milk. Cook until thick. Off heat, whisk in egg yolks, grated cheese, and nutmeg.',
        durationMinutes: 10
      },
      {
        stepNumber: 4,
        title: 'Assemble Layers',
        instruction: 'In a deep baking pan, arrange the aligned bucatini pasta flat on bottom. Pour meat sauce over pasta. Top with the thick béchamel layer and dust with cheese.',
        durationMinutes: 10
      },
      {
        stepNumber: 5,
        title: 'Bake to Deep Amber',
        instruction: 'Bake at 180°C (350°F) for 45 minutes until golden brown. Cool for 25 minutes before cutting into neat rectangular portions.',
        durationMinutes: 45,
        temperature: '180°C / 350°F'
      }
    ],
    servingNotes: 'Serve warm with a crisp green salad and a glass of Greek red Agiorgitiko.',
    funFact: 'Pastitsio evolved from the Italian "pasticcio", but Greeks transformed it into an iconic national Sunday dinner dish with its distinctive touch of sweet warming cinnamon.'
  },
  {
    id: 'gr-gemista',
    countryId: 'greece',
    title: 'Gemista (Stuffed Tomatoes & Peppers)',
    nativeTitle: 'Γεμιστά (Gemista)',
    description: 'Plump summer tomatoes and bell peppers stuffed with herb-infused rice, pine nuts, raisins, and roasted sweet tomato pulp, baked alongside crisp potato wedges in olive oil.',
    image: AUTHENTIC_IMAGES.greekGemista,
    prepTimeMinutes: 35,
    cookTimeMinutes: 60,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 360,
    dietaryTags: ['Vegan', 'Plant-Based', 'Lenten Classic', 'Gluten-Free'],
    course: 'Main',
    ingredients: [
      { name: 'Large Beefsteak Tomatoes', amount: 4, unit: 'pcs', category: 'Produce' },
      { name: 'Large Green & Red Bell Peppers', amount: 4, unit: 'pcs', category: 'Produce' },
      { name: 'Yukon Gold Potatoes (cut into wedges)', amount: 400, unit: 'g', category: 'Produce' },
      { name: 'Greek Short-Grain Rice (Karolina or Arborio)', amount: 200, unit: 'g', category: 'Filling' },
      { name: 'Yellow Onions (finely grated)', amount: 250, unit: 'g', category: 'Filling' },
      { name: 'Zucchini (grated)', amount: 150, unit: 'g', category: 'Filling' },
      { name: 'Fresh Spearmint & Parsley (chopped)', amount: 50, unit: 'g', category: 'Herbs' },
      { name: 'Pine Nuts & Dark Raisins (optional)', amount: 40, unit: 'g', category: 'Filling' },
      { name: 'Extra Virgin Olive Oil', amount: 120, unit: 'ml', category: 'Cooking' },
      { name: 'Breadcrumbs for dusting', amount: 20, unit: 'g', category: 'Topping' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Hollow Vegetables & Scoop Pulp',
        instruction: 'Slice tops off tomatoes and peppers to create lids. Scoop tomato pulp with a spoon into a bowl and purée. Remove pepper seeds. Place hollowed vegetables upright in a baking dish.',
        durationMinutes: 15
      },
      {
        stepNumber: 2,
        title: 'Sauté Rice & Herb Filling',
        instruction: 'In a skillet with 50ml olive oil, sauté onions and grated zucchini for 6 minutes. Add rice, puréed tomato pulp, mint, parsley, pine nuts, raisins, salt, and pepper. Cook for 5 minutes (the rice will finish cooking in the oven).',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Fill Vegetables Loosely',
        instruction: 'Spoon rice filling into vegetables, filling only 3/4 full to leave room for rice expansion. Replace the vegetable caps.',
        durationMinutes: 8
      },
      {
        stepNumber: 4,
        title: 'Tuck Potatoes & Douse in Olive Oil',
        instruction: 'Wedge potato pieces in between the stuffed vegetables. Season everything with salt and oregano. Pour remaining olive oil and 100ml water over the dish. Sprinkle breadcrumbs on vegetable lids.',
        durationMinutes: 5
      },
      {
        stepNumber: 5,
        title: 'Slow Roast to Sweet Confit',
        instruction: 'Bake at 190°C (375°F) for 60 minutes until vegetable skins blister and potato wedges are golden, caramelized, and tender.',
        durationMinutes: 60,
        temperature: '190°C / 375°F'
      }
    ],
    servingNotes: 'Gemista tastes even better served lukewarm or room temperature the next day, paired with a wedge of salty feta.',
    funFact: 'Greek mothers traditionally make Gemista in large roasting pans on summer Fridays so the family can eat from the pan all weekend long after swimming in the Aegean sea.'
  },
  {
    id: 'gr-kleftiko',
    countryId: 'greece',
    title: 'Lamb Kleftiko (Bandit’s Slow-Baked Lamb)',
    nativeTitle: 'Αρνί Κλέφτικο (Arni Kleftiko)',
    description: 'Tender lamb chunks sealed in parchment paper bundles with garlic cloves, wild oregano, lemon juice, potatoes, and cubes of feta, slow-baked until falling apart at the touch of a fork.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Kleftiko.JPG/960px-Kleftiko.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 25,
    cookTimeMinutes: 150,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 680,
    dietaryTags: ['Gluten-Free', 'High Protein', 'Historic Heritage'],
    course: 'Main',
    ingredients: [
      { name: 'Bone-In Lamb Shoulder (cut into large chunks)', amount: 1000, unit: 'g', category: 'Meat' },
      { name: 'Baby Yukon Gold Potatoes (halved)', amount: 500, unit: 'g', category: 'Vegetables' },
      { name: 'Whole Garlic Cloves (peeled)', amount: 10, unit: 'pcs', category: 'Aromatics' },
      { name: 'Greek Barrel-Aged Feta (cubed)', amount: 150, unit: 'g', category: 'Cheese' },
      { name: 'Fresh Lemons (juiced)', amount: 2, unit: 'pcs', category: 'Marinade' },
      { name: 'Extra Virgin Olive Oil', amount: 60, unit: 'ml', category: 'Marinade' },
      { name: 'Dried Wild Oregano, Thyme & Rosemary', amount: 15, unit: 'g', category: 'Herbs' },
      { name: 'Heavy Parchment Paper & Kitchen Twine', amount: 4, unit: 'pcs', category: 'Wrapping' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Toss Lamb with Marinade',
        instruction: 'In a bowl, toss lamb chunks and potatoes with olive oil, fresh lemon juice, whole garlic cloves, wild oregano, rosemary, salt, and pepper.',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Wrap in Parchment Pouches',
        instruction: 'Divide lamb and potatoes onto 4 large parchment paper sheets. Scatter cubes of feta cheese on top. Fold edges upward and tie securely with kitchen twine into airtight parcels (or seal tightly in a Dutch oven).',
        durationMinutes: 15,
        chefTip: 'The airtight parchment pouch seals in 100% of the meat juices and steam, preventing moisture loss during long roasting.'
      },
      {
        stepNumber: 3,
        title: 'Low and Slow Baking',
        instruction: 'Place parchment parcels on a baking sheet. Bake at 160°C (320°F) for 2.5 hours without opening.',
        durationMinutes: 150,
        temperature: '160°C / 320°F'
      },
      {
        stepNumber: 4,
        title: 'Open and Brown',
        instruction: 'Carefully snip twine and open parchment tops. Increase heat to 200°C (400°F) for 10 minutes to brown the edges of the lamb and caramelize potatoes.',
        durationMinutes: 10
      }
    ],
    servingNotes: 'Serve each diner their own steaming parchment parcel on a plate; tear it open at the table to release the burst of fragrant garlic and oregano steam.',
    funFact: 'Kleftiko translates to "stolen meat", named after the Klephts (Greek mountain bandits) who hid in mountain caves and cooked stolen sheep in sealed subterranean earthen pits so no telltale smoke would betray their location.'
  },
  {
    id: 'gr-kolokithokeftedes',
    countryId: 'greece',
    title: 'Kolokithokeftedes (Crisp Zucchini Fritters)',
    nativeTitle: 'Κολοκυθοκεφτέδες (Kolokithokeftedes)',
    description: 'Crisp, golden Aegean fritters made from shredded summer zucchini, fresh spearmint, dill, scallions, and tangy crumbled feta, fried to a crunchy exterior with a pillowy herbal center.',
    image: AUTHENTIC_IMAGES.greekKolokithokeftedes,
    prepTimeMinutes: 25,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 260,
    dietaryTags: ['Vegetarian', 'Meze', 'Aegean Island Classic'],
    course: 'Appetizer',
    ingredients: [
      { name: 'Fresh Medium Zucchini (grated)', amount: 600, unit: 'g', category: 'Vegetables' },
      { name: 'Greek Feta Cheese (crumbled)', amount: 150, unit: 'g', category: 'Cheese' },
      { name: 'Scallions (finely sliced)', amount: 60, unit: 'g', category: 'Aromatics' },
      { name: 'Fresh Spearmint & Dill (chopped)', amount: 35, unit: 'g', category: 'Herbs' },
      { name: 'Large Eggs', amount: 2, unit: 'pcs', category: 'Binder' },
      { name: 'All-Purpose Flour or Self-Rising Flour', amount: 90, unit: 'g', category: 'Binder' },
      { name: 'Extra Virgin Olive Oil for shallow frying', amount: 100, unit: 'ml', category: 'Cooking' },
      { name: 'Lemon Wedges & Tzatziki for serving', amount: 1, unit: 'pcs', category: 'Serving' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Salt and Drain Zucchini',
        instruction: 'Toss grated zucchini with 1 tsp salt. Place in a colander for 15 minutes. Squeeze forcefully with hands in a kitchen towel to expel all liquid.',
        durationMinutes: 18,
        chefTip: 'Removing every drop of water ensures light, crisp fritters that never turn soggy or absorb excess oil.'
      },
      {
        stepNumber: 2,
        title: 'Mix the Herbal Batter',
        instruction: 'In a bowl, combine dry zucchini, crumbled feta, sliced scallions, mint, dill, black pepper, beaten eggs, and flour. Mix into a soft, scoopable batter.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Shallow Golden Fry',
        instruction: 'Heat olive oil in a skillet over medium-high heat. Drop tablespoons of batter into the shimmering oil. Flatten slightly with the back of a spoon. Fry for 3 minutes per side until deeply golden and crisp.',
        durationMinutes: 12
      },
      {
        stepNumber: 4,
        title: 'Drain & Season',
        instruction: 'Transfer to paper towels and dust immediately with a pinch of sea salt.',
        durationMinutes: 2
      }
    ],
    servingNotes: 'Serve hot and crunchy straight from the pan with cool tzatziki and a wedge of fresh lemon.',
    funFact: 'These fritters are the undisputed queen of taverna meze across the Cycladic islands, especially on Crete and Paros where summer mint grows wild on rocky hillsides.'
  },
  {
    id: 'gr-fasolada',
    countryId: 'greece',
    title: 'Fasolada (National White Bean Olive Oil Soup)',
    nativeTitle: 'Φασολάδα (Fasolada)',
    description: 'Greece’s revered national comfort soup: creamy white cannellini beans gently stewed with sweet carrots, celery, tomatoes, and an abundant pour of extra virgin olive oil.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Fasolada.JPG/960px-Fasolada.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 15,
    cookTimeMinutes: 70,
    servings: 6,
    difficulty: 'Easy',
    caloriesPerServing: 320,
    dietaryTags: ['Vegan', 'High Fiber', 'National Dish', 'Gluten-Free'],
    course: 'Soup',
    ingredients: [
      { name: 'Dry White Cannellini or Navy Beans (soaked overnight)', amount: 400, unit: 'g', category: 'Legumes' },
      { name: 'Carrots (sliced into rounds)', amount: 200, unit: 'g', category: 'Vegetables' },
      { name: 'Celery Ribs with Leaves (chopped)', amount: 150, unit: 'g', category: 'Vegetables' },
      { name: 'Yellow Onion (finely chopped)', amount: 200, unit: 'g', category: 'Vegetables' },
      { name: 'Tomato Paste', amount: 40, unit: 'g', category: 'Seasoning' },
      { name: 'Crushed Greek Tomatoes', amount: 300, unit: 'g', category: 'Vegetables' },
      { name: 'Extra Virgin Olive Oil (Greek)', amount: 120, unit: 'ml', category: 'Cooking' },
      { name: 'Fresh Flat-Leaf Parsley', amount: 25, unit: 'g', category: 'Garnish' },
      { name: 'Crushed Red Pepper Flakes (Boukovo)', amount: 3, unit: 'g', category: 'Spices' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Initial Bean Parboil',
        instruction: 'Drain soaked beans. Place in a pot, cover with cold water, boil for 10 minutes, and drain completely to ensure easy digestibility.',
        durationMinutes: 15
      },
      {
        stepNumber: 2,
        title: 'Simmer with Vegetables',
        instruction: 'Return beans to pot with fresh water (approx. 1.5 liters), sliced carrots, celery, and chopped onions. Bring to a gentle boil and simmer for 40 minutes.',
        durationMinutes: 40
      },
      {
        stepNumber: 3,
        title: 'Add Tomatoes & Generous Olive Oil',
        instruction: 'Add tomatoes, tomato paste, boukovo red pepper flakes, and pour in the full 120ml of olive oil. Simmer vigorously for another 20 minutes until the beans are meltingly tender and the broth turns rich, orange, and emulsified.',
        durationMinutes: 20,
        chefTip: 'Adding the olive oil toward the end and boiling rapidly emulsifies the starch from the beans with the oil into a naturally thick, velvety broth.'
      },
      {
        stepNumber: 4,
        title: 'Season & Rest',
        instruction: 'Season with salt, black pepper, and stir in fresh chopped parsley. Let rest for 10 minutes off heat.',
        durationMinutes: 10
      }
    ],
    servingNotes: 'Serve steaming hot with crusty village bread, Kalamata olives, and pickled peppers.',
    funFact: 'Ancient Greeks dedicated Fasolada to the sun god Apollo during the ancient autumn festival of Pyanopsia, making it over 2,500 years old.'
  },
  {
    id: 'gr-saganaki',
    countryId: 'greece',
    title: 'Saganaki (Pan-Fried Flambéed Cheese)',
    nativeTitle: 'Σαγανάκι (Saganaki)',
    description: 'Thick slabs of rich Greek sheep’s milk cheese dredged in flour, pan-seared to a crunchy golden crust with a molten gooey center, flambéed with ouzo and doused in fresh lemon.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Grekiska_koket_02.jpg/960px-Grekiska_koket_02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 5,
    cookTimeMinutes: 5,
    servings: 2,
    difficulty: 'Easy',
    caloriesPerServing: 340,
    dietaryTags: ['Vegetarian', 'Quick Meze', 'Iconic'],
    course: 'Appetizer',
    ingredients: [
      { name: 'Kefalograviera or Graviera Cheese (1.5cm thick slab)', amount: 200, unit: 'g', category: 'Cheese' },
      { name: 'All-Purpose Flour for dredging', amount: 40, unit: 'g', category: 'Crust' },
      { name: 'Cold Water', amount: 50, unit: 'ml', category: 'Crust' },
      { name: 'Extra Virgin Olive Oil', amount: 40, unit: 'ml', category: 'Frying' },
      { name: 'Greek Ouzo or Metaxa (optional)', amount: 30, unit: 'ml', category: 'Flambé' },
      { name: 'Fresh Lemon Wedges', amount: 1, unit: 'pcs', category: 'Serving' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Dip & Dredge',
        instruction: 'Quickly dip the cold cheese slab into cold water, then press firmly into flour on all sides until completely coated. Shake off excess.',
        durationMinutes: 2,
        chefTip: 'Dipping the cheese in cold water first creates a sturdy starch barrier that keeps the cheese inside molten without leaking into the pan.'
      },
      {
        stepNumber: 2,
        title: 'Sizzle in Olive Oil',
        instruction: 'Heat olive oil in a small heavy skillet (a saganaki pan) over medium-high heat. Add cheese and fry for 2 minutes per side until the crust is deep golden brown and bubbling.',
        durationMinutes: 4
      },
      {
        stepNumber: 3,
        title: 'Flambé and Quench with Lemon',
        instruction: 'Pour ouzo into the pan and ignite carefully with a long match (shouting "Opa!"). Squeeze fresh lemon juice over the flaming cheese to extinguish.',
        durationMinutes: 1
      }
    ],
    servingNotes: 'Serve instantly while the cheese is bubbling hot, bubbling with lemon juice and olive oil, accompanied by crusty bread.',
    funFact: 'The word "saganaki" refers to the two-handled copper or cast-iron frying pan in which the dish is both cooked and presented directly at the taverna table.'
  },
  {
    id: 'gr-loukoumades',
    countryId: 'greece',
    title: 'Loukoumades (Greek Honey Puffs)',
    nativeTitle: 'Λουκουμάδες (Loukoumades)',
    description: 'Golden spheres of puffed fried dough crispy on the exterior and airy inside, soaked in warm spiced Thyme honey syrup and dusted with cinnamon and toasted walnuts.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Sam%27dan_lokma_tatlisi.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
    prepTimeMinutes: 30,
    cookTimeMinutes: 15,
    servings: 6,
    difficulty: 'Medium',
    caloriesPerServing: 350,
    dietaryTags: ['Vegetarian', 'Historic Dessert', 'Olympic Heritage'],
    course: 'Dessert',
    ingredients: [
      { name: 'All-Purpose Flour', amount: 300, unit: 'g', category: 'Batter' },
      { name: 'Cornstarch', amount: 30, unit: 'g', category: 'Batter' },
      { name: 'Instant Dry Yeast', amount: 7, unit: 'g', category: 'Batter' },
      { name: 'Lukewarm Water', amount: 280, unit: 'ml', category: 'Batter' },
      { name: 'Greek Thyme Honey', amount: 150, unit: 'g', category: 'Syrup' },
      { name: 'Ground Ceylon Cinnamon', amount: 6, unit: 'g', category: 'Topping' },
      { name: 'Toasted Walnuts (finely chopped)', amount: 50, unit: 'g', category: 'Topping' },
      { name: 'Sunflower Oil for deep frying', amount: 500, unit: 'ml', category: 'Frying' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Whisk Elastic Batter',
        instruction: 'In a bowl, whisk flour, cornstarch, yeast, and warm water for 3 minutes until an elastic, sticky, thick batter forms. Cover and proof in a warm spot for 45 minutes until bubbly and doubled.',
        durationMinutes: 48
      },
      {
        stepNumber: 2,
        title: 'The Hand-Squeeze Dropping Technique',
        instruction: 'Heat oil to 180°C (350°F). Dip a teaspoon in water. Grab a handful of batter, squeeze your fist so a sphere pops out between thumb and forefinger, and scoop into hot oil with the wet spoon.',
        durationMinutes: 5,
        chefTip: 'Dipping the spoon in water between every scoop allows the dough balls to slide cleanly into the oil.'
      },
      {
        stepNumber: 3,
        title: 'Fry to Light Golden Spheres',
        instruction: 'Fry in batches, turning continuously with a slotted spoon for 3 to 4 minutes until puffed, hollow, and light golden. Drain on paper towels.',
        durationMinutes: 12
      },
      {
        stepNumber: 4,
        title: 'Drizzle Warm Honey & Cinnamon',
        instruction: 'Pile hot loukoumades onto a serving platter. Douse generously with warm thyme honey, scatter ground cinnamon, and top with toasted chopped walnuts.',
        durationMinutes: 3
      }
    ],
    servingNotes: 'Must be eaten piping hot while the exterior crackles and the interior releases sweet steam.',
    funFact: 'Loukoumades were awarded to the victorious athletes at the ancient Olympic Games in 776 BC, described by ancient poet Callimachus as "honey tokens".'
  },
  {
    id: 'gr-giouvetsi',
    countryId: 'greece',
    title: 'Giouvetsi (Baked Beef & Kritharaki Orzo)',
    nativeTitle: 'Γιουβέτσι (Giouvetsi)',
    description: 'Tender beef chunks slow-braised in a cinnamon-spiced tomato gravy, baked in a clay dish with tender kritharaki (orzo pasta) until the pasta absorbs every drop of savory broth, topped with grated cheese.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Giouvetsi.JPG/960px-Giouvetsi.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 20,
    cookTimeMinutes: 90,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 590,
    dietaryTags: ['High Protein', 'Clay Pot Classic', 'Comfort Food'],
    course: 'Main',
    ingredients: [
      { name: 'Beef Chuck Roast (cut into 4cm pieces)', amount: 800, unit: 'g', category: 'Meat' },
      { name: 'Kritharaki (Greek Orzo Pasta)', amount: 300, unit: 'g', category: 'Pasta' },
      { name: 'Yellow Onion (chopped)', amount: 150, unit: 'g', category: 'Meat' },
      { name: 'Greek Red Wine', amount: 100, unit: 'ml', category: 'Meat' },
      { name: 'Crushed Plum Tomatoes', amount: 400, unit: 'g', category: 'Meat' },
      { name: 'Cinnamon Stick & Allspice Berries', amount: 5, unit: 'g', category: 'Spices' },
      { name: 'Beef Stock or Water (boiling)', amount: 700, unit: 'ml', category: 'Baking' },
      { name: 'Extra Virgin Olive Oil', amount: 50, unit: 'ml', category: 'Cooking' },
      { name: 'Grated Mizithra or Kefalotyri Cheese', amount: 60, unit: 'g', category: 'Serving' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Brown Beef & Simmer Gravy',
        instruction: 'Brown beef cubes in olive oil in a Dutch oven. Add onions and cook 5 minutes. Deglaze with red wine. Add tomatoes, cinnamon stick, allspice, salt, and pepper. Cover and simmer for 60 minutes until beef is tender.',
        durationMinutes: 70
      },
      {
        stepNumber: 2,
        title: 'Toast the Orzo',
        instruction: 'In a clay baking dish (or deep casserole), toss raw orzo with 1 tbsp olive oil to lightly coat every grain.',
        durationMinutes: 3
      },
      {
        stepNumber: 3,
        title: 'Combine & Oven Bake',
        instruction: 'Transfer tender beef and its spiced tomato sauce into the clay dish with the orzo. Pour 700ml boiling stock over top and stir well to distribute. Bake at 180°C (350°F) for 22 minutes until orzo is tender and plump.',
        durationMinutes: 25,
        temperature: '180°C / 350°F',
        chefTip: 'Stir once halfway through baking to prevent the bottom orzo from catching on the clay.'
      },
      {
        stepNumber: 4,
        title: 'Rest and Cheese Crust',
        instruction: 'Remove from oven; the dish will look slightly saucy, but the orzo will absorb the remaining sauce in 10 minutes. Scatter generous grated Mizithra cheese on top.',
        durationMinutes: 10
      }
    ],
    servingNotes: 'Serve warm directly from the clay baking dish with a dusting of extra cheese and fresh cracked pepper.',
    funFact: 'Giouvetsi is named after the traditional Turkish/Balkan clay cooking pot ("güveç") which imparts an earthy aroma and maintains even radiant heat throughout baking.'
  }
];
