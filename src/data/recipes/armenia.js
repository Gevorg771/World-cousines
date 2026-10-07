import { AUTHENTIC_IMAGES } from '../imageAssets';

export const ARMENIA_RECIPES = [
  {
    id: 'arm-khorovats',
    countryId: 'armenia',
    title: 'Khorovats (Armenian Barbecue)',
    nativeTitle: 'Խորոված (Khorovats)',
    description: 'Armenia’s revered national feast centerpiece: succulent pork ribs or neck marinated with sliced onions, wild mountain herbs, and grilled over grapevine coals, wrapped in warm lavash.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Barbecue_Armenian.jpg/960px-Barbecue_Armenian.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 35,
    cookTimeMinutes: 30,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 620,
    dietaryTags: ['High Protein', 'Gluten-Free', 'Traditional', 'Iconic'],
    course: 'Main',
    ingredients: [
      { name: 'Pork Neck or Shoulder (cut into 5cm cubes)', amount: 1200, unit: 'g', category: 'Meat' },
      { name: 'Yellow Onions (thinly sliced)', amount: 400, unit: 'g', category: 'Marinade' },
      { name: 'Dried Purple Basil (Rehan)', amount: 15, unit: 'g', category: 'Marinade' },
      { name: 'Ground Coriander', amount: 8, unit: 'g', category: 'Marinade' },
      { name: 'Ground Black Pepper', amount: 6, unit: 'g', category: 'Marinade' },
      { name: 'Coarse Sea Salt', amount: 14, unit: 'g', category: 'Marinade' },
      { name: 'Mild Ground Paprika', amount: 10, unit: 'g', category: 'Marinade' },
      { name: 'Sparkling Mineral Water (e.g. Jermuk)', amount: 150, unit: 'ml', category: 'Marinade' },
      { name: 'Fresh Thin Armenian Lavash', amount: 4, unit: 'pcs', category: 'Serving' },
      { name: 'Fresh Red Onions & Sumac (for garnish)', amount: 100, unit: 'g', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Tenderize and Marinate the Meat',
        instruction: 'In a large enamel or glass bowl, combine the pork cubes with thinly sliced onions. Massage the onions vigorously with coarse salt until they release their juices. Add dried rehan (purple basil), paprika, black pepper, and coriander. Pour in sparkling mineral water to tenderize the fibers. Massage thoroughly, cover, and chill for at least 4 to 8 hours.',
        durationMinutes: 15,
        chefTip: 'The effervescence of Jermuk mineral water and natural onion enzymes tenderize the meat without needing harsh acids or vinegar.'
      },
      {
        stepNumber: 2,
        title: 'Prepare the Charcoal Mangal',
        instruction: 'Ignite natural hardwood lump charcoal (grapevine cuttings if available). Allow flames to burn down to a glowing, ash-covered red ember bed with steady, even radiant heat without direct flames.',
        durationMinutes: 25,
        temperature: 'Medium-High Embers'
      },
      {
        stepNumber: 3,
        title: 'Skewer on Wide Metal Shampurs',
        instruction: 'Thread meat cubes onto wide stainless steel shampurs (skewers), pressing the pieces snugly against each other to retain moisture during grilling. Shake off loose onion strands so they do not char.',
        durationMinutes: 10
      },
      {
        stepNumber: 4,
        title: 'Charcoal Grilling',
        instruction: 'Place shampurs across the mangal. Grill for 18 to 22 minutes, turning continuously every 2 minutes so all facets caramelize evenly to a mahogany crust while the interior stays juicy and tender (internal temp 68°C / 155°F).',
        durationMinutes: 20
      },
      {
        stepNumber: 5,
        title: 'The Lavash Extraction Ritual',
        instruction: 'Line a deep warm pot with two layers of fresh Armenian lavash. Use a third sheet of lavash to grip the meat and slide it off the hot shampurs directly into the pot. Wrap the lavash over the hot meat, cover the pot tightly with a lid, and rest for 7 minutes so the lavash absorbs all the roasted aromatic pan drippings.',
        durationMinutes: 7,
        chefTip: 'The juices-soaked lavash at the bottom of the khorovats pot is considered the crowning culinary prize of the feast.'
      }
    ],
    servingNotes: 'Serve immediately wrapped in warm lavash, accompanied by thinly sliced red onion dusted with tart sumac, grilled tomatoes, eggplant, and bell peppers.',
    funFact: 'In Armenian tradition, the master of the grill is called the "Khorovadzats". Preparing khorovats is a celebrated social ceremony uniting friends and family around the mangal.'
  },
  {
    id: 'arm-tolma',
    countryId: 'armenia',
    title: 'Traditional Armenian Tolma',
    nativeTitle: 'Հայկական Տոլմա (Armenian Tolma)',
    description: 'Delicate young grapevine leaves parcels tightly rolled around spiced ground beef and lamb, short-grain rice, fresh cilantro, parsley, and purple basil, served with garlicky matzoon.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Stuffed_grape_leaves_%28Dolma%29_and_vegetables_in_a_pot.jpg/960px-Stuffed_grape_leaves_%28Dolma%29_and_vegetables_in_a_pot.jpg',
    prepTimeMinutes: 50,
    cookTimeMinutes: 45,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 420,
    dietaryTags: ['High Protein', 'Traditional', 'UNESCO Heritage'],
    course: 'Main',
    ingredients: [
      { name: 'Ground Beef & Lamb Blend (80/20)', amount: 600, unit: 'g', category: 'Filling' },
      { name: 'Short-Grain Rice (rinsed)', amount: 90, unit: 'g', category: 'Filling' },
      { name: 'Finely Minced Yellow Onion', amount: 200, unit: 'g', category: 'Filling' },
      { name: 'Fresh Purple Basil (Rehan)', amount: 25, unit: 'g', category: 'Herbs' },
      { name: 'Fresh Cilantro (Coriander)', amount: 25, unit: 'g', category: 'Herbs' },
      { name: 'Fresh Dill', amount: 20, unit: 'g', category: 'Herbs' },
      { name: 'Tomato Paste', amount: 40, unit: 'g', category: 'Filling' },
      { name: 'Tender Grape Leaves (fresh blanched or in brine)', amount: 60, unit: 'pcs', category: 'Wrappers' },
      { name: 'Clarified Butter or Ghee', amount: 40, unit: 'g', category: 'Cooking' },
      { name: 'Beef Stock or Water', amount: 350, unit: 'ml', category: 'Cooking' },
      { name: 'Plain Matzoon or Thick Greek Yogurt', amount: 300, unit: 'g', category: 'Sauce' },
      { name: 'Crushed Fresh Garlic Cloves', amount: 3, unit: 'pcs', category: 'Sauce' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Prepare Grape Leaves',
        instruction: 'If using brined grape leaves, soak in warm water for 15 minutes and rinse thoroughly to remove excess brine. If using fresh spring leaves, blanch in boiling water for 2 minutes until pliable and olive green. Drain and snip off tough stems.',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Mix Spiced Meat Filling',
        instruction: 'In a large bowl, combine ground meat, rinsed raw rice, minced onions, chopped herbs (purple basil, cilantro, dill), tomato paste, 1 tsp salt, 1/2 tsp black pepper, and 50ml cold water. Knead with hands for 3 minutes until uniform and slightly sticky.',
        durationMinutes: 10,
        chefTip: 'Adding a splash of cold water makes the meat filling extra juicy as the rice swells during steaming.'
      },
      {
        stepNumber: 3,
        title: 'Tightly Roll the Tolmas',
        instruction: 'Lay a grape leaf flat on a clean board with veins facing up. Place 1 full tablespoon of meat filling along the base of the leaf. Fold the bottom over the filling, tuck both sides in snugly, and roll tightly forward into a neat cylinder.',
        durationMinutes: 25
      },
      {
        stepNumber: 4,
        title: 'Pot Assembly & Slow Simmer',
        instruction: 'Line the bottom of a heavy pot with imperfect grape leaves and sliced onions. Pack rolled tolmas tightly seam-side down in concentric circles. Dot with clarified butter. Pour warm stock or salted water over the tolmas until just reaching the top layer. Invert a heavy ceramic plate over the tolmas to keep them submerged.',
        durationMinutes: 5
      },
      {
        stepNumber: 5,
        title: 'Simmer to Perfection',
        instruction: 'Bring to a boil, then immediately reduce heat to low. Cover tightly with the pot lid and simmer gently for 40 to 45 minutes until the rice is tender and liquid is absorbed. Rest for 10 minutes.',
        durationMinutes: 45,
        temperature: 'Low Heat'
      }
    ],
    servingNotes: 'Serve piping hot with a generous dollop of garlic-infused matzoon (matzoon mixed with crushed garlic and a pinch of salt) and warm flatbread.',
    funFact: 'In Armenia, an annual Tolma Festival (Uduli) is held where master chefs compete to prepare dozens of regional varieties, including summer vegetables tolma stuffed with eggplant, peppers, and tomatoes.'
  },
  {
    id: 'arm-harissa',
    countryId: 'armenia',
    title: 'Authentic Armenian Harissa',
    nativeTitle: 'Հարիսա (Armenian Harissa)',
    description: 'An ancient ceremonial Armenian porridge of cracked hull-less wheat (korkot) and tender shredded chicken or lamb, slow-cooked for hours until silky, finished with foaming browned butter and paprika.',
    image: AUTHENTIC_IMAGES.armenianHarissa,
    prepTimeMinutes: 20,
    cookTimeMinutes: 150,
    servings: 6,
    difficulty: 'Medium',
    caloriesPerServing: 510,
    dietaryTags: ['High Protein', 'Ancient Heritage', 'Comfort Food'],
    course: 'Main',
    ingredients: [
      { name: 'Korkot (Armenian Cracked Pearl Wheat)', amount: 400, unit: 'g', category: 'Grains' },
      { name: 'Whole Chicken or Bone-In Chicken Thighs', amount: 1000, unit: 'g', category: 'Poultry' },
      { name: 'Filtered Cold Water', amount: 2000, unit: 'ml', category: 'Broth' },
      { name: 'Coarse Sea Salt', amount: 15, unit: 'g', category: 'Seasoning' },
      { name: 'High-Fat Clarified Butter (Ghee)', amount: 120, unit: 'g', category: 'Topping' },
      { name: 'Mild Armenian Paprika or Aleppo Pepper', amount: 10, unit: 'g', category: 'Topping' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Rinse the Korkot Wheat',
        instruction: 'Thoroughly wash the cracked korkot wheat in cold water 3 to 4 times until the water runs clear. Soak in lukewarm water for 30 minutes, then drain.',
        durationMinutes: 30
      },
      {
        stepNumber: 2,
        title: 'Poach the Chicken & Build Rich Broth',
        instruction: 'In a deep heavy-bottomed Dutch oven, place the chicken and 2 liters of water. Bring to a boil over medium heat, diligently skimming off any foam. Simmer for 45 minutes until chicken meat is fall-apart tender. Remove chicken to a platter, strain broth, and reserve.',
        durationMinutes: 50
      },
      {
        stepNumber: 3,
        title: 'Shred Meat & Combine with Korkot',
        instruction: 'Debone chicken completely, discarding skin and bones. Shred the meat into fine threads. Add the soaked korkot into the simmering chicken broth along with the shredded meat. Bring to a gentle boil.',
        durationMinutes: 15
      },
      {
        stepNumber: 4,
        title: 'Slow Simmer & Whipping Technique',
        instruction: 'Reduce heat to the lowest possible setting. Cook uncovered or with lid slightly ajar for 1.5 to 2 hours, stirring with a sturdy wooden spoon every 10 minutes to prevent bottom scorching. As the wheat breaks down, vigorously beat the porridge in circular motions until the grain and meat fibers homogenize into a thick, elastic, silky porridge.',
        durationMinutes: 110,
        chefTip: 'The ancient culinary secret: vigorous beating with a wooden paddle emulsifies the chicken fibers directly into the wheat starch.'
      },
      {
        stepNumber: 5,
        title: 'Browned Butter Crown',
        instruction: 'In a small pan, melt 120g of clarified butter until it foams and turns a nutty golden amber. Stir in 10g paprika or Aleppo pepper for 10 seconds, then remove immediately from heat.',
        durationMinutes: 5
      }
    ],
    servingNotes: 'Ladle steaming hot harissa into wide shallow bowls. Make an indentation in the center and pour a generous pool of hot spiced foaming browned butter. Serve with pickles and lavash.',
    funFact: 'Harissa has deep historical significance in Armenian culture; during the heroic 1915 defense of Musa Dagh, defenders survived for 40 days cooking harissa in large caldrons.'
  },
  {
    id: 'arm-spas',
    countryId: 'armenia',
    title: 'Spas (Armenian Matzoon & Wheat Soup)',
    nativeTitle: 'Սպաս / Թանապուր (Spas)',
    description: 'The definitive comfort soup of Armenia: a velvety tangy soup made with fermented matzoon (or whole milk yogurt), cracked wheat grain, sour cream, and fresh fragrant herbs.',
    image: AUTHENTIC_IMAGES.armenianSpas,
    prepTimeMinutes: 15,
    cookTimeMinutes: 35,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 240,
    dietaryTags: ['Vegetarian', 'Healthy', 'Probiotic', 'Traditional'],
    course: 'Soup',
    ingredients: [
      { name: 'Plain Matzoon (or Full-Fat Plain Yogurt)', amount: 700, unit: 'g', category: 'Dairy' },
      { name: 'Sour Cream (Smetana 20%)', amount: 150, unit: 'g', category: 'Dairy' },
      { name: 'Pre-Cooked Dzagavar (Shelled Wheat Berries)', amount: 180, unit: 'g', category: 'Grains' },
      { name: 'Large Egg (room temperature)', amount: 1, unit: 'pcs', category: 'Binder' },
      { name: 'All-Purpose Flour', amount: 25, unit: 'g', category: 'Thickener' },
      { name: 'Cold Filtered Water', amount: 600, unit: 'ml', category: 'Liquid' },
      { name: 'Unsalted Butter', amount: 30, unit: 'g', category: 'Aromatics' },
      { name: 'Yellow Onion (finely diced)', amount: 100, unit: 'g', category: 'Aromatics' },
      { name: 'Fresh Cilantro', nameKa: 'ახალი ქინძი', amount: 25, unit: 'g', category: 'Herbs' },
      { name: 'Fresh Mint', nameKa: 'ახალი პიტნა', amount: 15, unit: 'g', category: 'Herbs' },
      { name: 'Dried Mint (pulverized)', amount: 5, unit: 'g', category: 'Herbs' },
      { name: 'Fine Sea Salt', amount: 8, unit: 'g', category: 'Seasoning' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Whisk the Yogurt & Egg Base',
        instruction: 'In a heavy enameled soup pot, whisk the whole egg, 25g flour, and 150g sour cream until completely lump-free. Gradually whisk in 700g matzoon until smooth. Slowly pour in 600ml cold water while whisking continuously.',
        durationMinutes: 5,
        chefTip: 'The egg and flour are crucial: they prevent the yogurt proteins from curdling when heated.'
      },
      {
        stepNumber: 2,
        title: 'Add Pre-Cooked Wheat',
        instruction: 'Add the 180g cooked dzagavar (shelled wheat berries or pearl barley) to the pot and stir to distribute evenly.',
        durationMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'The Continuous Stirring Technique',
        instruction: 'Place the pot over medium heat. Stir continuously and rhythmically in ONE direction with a wooden spoon without stopping until the soup comes to a gentle rolling boil. Do not add salt yet!',
        durationMinutes: 18,
        chefTip: 'Stirring continuously in a single direction until boiling prevents the soup from breaking or separating.'
      },
      {
        stepNumber: 4,
        title: 'Sauté Onions & Herbs',
        instruction: 'While soup heats, melt butter in a skillet over medium-low heat. Sauté diced onions for 6 minutes until sweet and golden. Stir in dried mint for 30 seconds to bloom the essential oils.',
        durationMinutes: 8
      },
      {
        stepNumber: 5,
        title: 'Finish & Season',
        instruction: 'Once the soup boils, reduce heat to low and simmer gently for 5 minutes. Pour the caramelized onion butter and fresh chopped cilantro and mint into the pot. Remove from heat, stir in salt to taste, and let rest 10 minutes.',
        durationMinutes: 5
      }
    ],
    servingNotes: 'Spas can be enjoyed steaming hot in winter with crusty lavash, or chilled cold straight from the refrigerator as a revitalizing summer quencher.',
    funFact: 'In Armenian folklore, Spas is revered as both a beloved culinary staple and a natural remedy for digestion, cold recovery, and soothing vitality.'
  },
  {
    id: 'arm-jingalov-hats',
    countryId: 'armenia',
    title: 'Jingalov Hats (Wild Greens Stuffed Flatbread)',
    nativeTitle: 'Ժենգյալով Հաց (Jingalov Hats)',
    description: 'An iconic culinary masterpiece from Artsakh: paper-thin unleavened dough stuffed with an aromatic blend of up to 15 wild and cultivated mountain greens, griddled dry on a hot saj.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Jengyal_roll_%E2%80%94_%D4%BA%D5%A5%D5%B6%D5%A3%D5%B5%D5%A1%D5%AC%D5%B8%D5%BE_%D5%B0%D5%A1%D6%81.jpg/960px-Jengyal_roll_%E2%80%94_%D4%BA%D5%A5%D5%B6%D5%A3%D5%B5%D5%A1%D5%AC%D5%B8%D5%BE_%D5%B0%D5%A1%D6%81.jpg',
    prepTimeMinutes: 40,
    cookTimeMinutes: 20,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 310,
    dietaryTags: ['Vegan', 'Plant-Based', 'UNESCO Heritage', 'Mountain Herbs'],
    course: 'Bakery',
    ingredients: [
      { name: 'All-Purpose Flour', amount: 400, unit: 'g', category: 'Dough' },
      { name: 'Warm Filtered Water', amount: 220, unit: 'ml', category: 'Dough' },
      { name: 'Fine Sea Salt', amount: 7, unit: 'g', category: 'Dough' },
      { name: 'Sunflower Oil', amount: 20, unit: 'ml', category: 'Dough' },
      { name: 'Fresh Spinach & Swiss Chard (chopped)', amount: 200, unit: 'g', category: 'Greens' },
      { name: 'Fresh Cilantro & Dill (chopped)', amount: 100, unit: 'g', category: 'Greens' },
      { name: 'Fresh Scallions & Leeks (thinly sliced)', amount: 80, unit: 'g', category: 'Greens' },
      { name: 'Sorrel or Beet Greens (for gentle tartness)', amount: 80, unit: 'g', category: 'Greens' },
      { name: 'Fresh Chervil, Tarragon & Purple Basil', amount: 40, unit: 'g', category: 'Greens' },
      { name: 'Extra Virgin Olive Oil or Sunflower Oil', amount: 40, unit: 'ml', category: 'Filling Dressing' },
      { name: 'Ground Black Pepper & Pinch of Red Pepper', amount: 5, unit: 'g', category: 'Seasoning' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Knead Elastic Dough',
        instruction: 'In a bowl, mix flour with salt. Gradually add warm water and 20ml oil. Knead for 8 minutes until smooth, pliable, and non-sticky. Shape into 6 equal balls, cover with a damp cloth, and rest for 30 minutes.',
        durationMinutes: 38
      },
      {
        stepNumber: 2,
        title: 'Prepare the Mountain Greens Mix',
        instruction: 'Thoroughly wash and spin-dry all greens until completely moisture-free. Finely chop the spinach, chard, herbs, sorrel, and scallions. Toss together in a large bowl. Do NOT add oil or salt until immediately before rolling to prevent premature wilting and weeping.',
        durationMinutes: 15,
        chefTip: 'Spinning the greens bone-dry is the golden rule; excess surface moisture will make the thin dough tear.'
      },
      {
        stepNumber: 3,
        title: 'Roll Paper-Thin Dough',
        instruction: 'Lightly flour your work surface. Roll one dough ball out with a long thin rolling pin (okhlavoo) until paper-thin, translucent, and oval-shaped (approx. 25x35 cm).',
        durationMinutes: 5
      },
      {
        stepNumber: 4,
        title: 'Season & Fill',
        instruction: 'Take a generous double-handful of greens into a small bowl, drizzle with 1 tbsp oil, season with a pinch of salt and pepper, and toss. Heap the seasoned greens abundantly onto the center of the dough oval.',
        durationMinutes: 3
      },
      {
        stepNumber: 5,
        title: 'Pinch & Dry Griddle on Saj',
        instruction: 'Bring the long edges together over the greens and pinch tightly down the middle to form a flat, torpedo-shaped bread. Gently press with palms to flatten. Place dry onto a smoking-hot cast iron skillet or flat griddle (saj) over medium heat. Bake dry for 2.5 to 3 minutes per side until speckled with golden-brown blisters.',
        durationMinutes: 6
      }
    ],
    servingNotes: 'Enjoy hot off the griddle with a glass of crisp Armenian white wine, beer, or chilled matzoon/tan.',
    funFact: 'Traditional Artsakh village grandmothers can name up to 25 different wild herbs gathered from the mountains for authentic Jingalov Hats.'
  },
  {
    id: 'arm-ishli-kufta',
    countryId: 'armenia',
    title: 'Ishli Kufta (Stuffed Torpedo Meatballs)',
    nativeTitle: 'Իշլի Քյուֆթա (Ishli Kufta)',
    description: 'Crisp and delicate pointed bulgur shells filled with seasoned spiced ground beef, toasted walnuts, sautéed onions, and aromatic herbs, boiled or golden pan-fried.',
    image: AUTHENTIC_IMAGES.armenianIshliKufta,
    prepTimeMinutes: 60,
    cookTimeMinutes: 20,
    servings: 4,
    difficulty: 'Hard',
    caloriesPerServing: 480,
    dietaryTags: ['High Protein', 'Traditional Gourmet'],
    course: 'Main',
    ingredients: [
      { name: 'Lean Beef (round or sirloin, ground fine 3 times)', amount: 400, unit: 'g', category: 'Outer Shell' },
      { name: 'Fine Bulgur (No. 1)', amount: 250, unit: 'g', category: 'Outer Shell' },
      { name: 'Ice Cold Water', amount: 150, unit: 'ml', category: 'Outer Shell' },
      { name: 'Ground Cumin & Paprika', amount: 6, unit: 'g', category: 'Outer Shell' },
      { name: 'Ground Beef & Lamb Blend', amount: 350, unit: 'g', category: 'Filling' },
      { name: 'Yellow Onions (finely minced)', amount: 250, unit: 'g', category: 'Filling' },
      { name: 'Crushed English Walnuts (toasted)', amount: 80, unit: 'g', category: 'Filling' },
      { name: 'Clarified Butter', amount: 40, unit: 'g', category: 'Filling' },
      { name: 'Ground Allspice & Black Pepper', amount: 6, unit: 'g', category: 'Filling' },
      { name: 'Fresh Lemon Wedges', amount: 2, unit: 'pcs', category: 'Serving' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Cook the Walnut & Meat Filling',
        instruction: 'Melt clarified butter in a skillet. Sauté minced onions over medium heat for 8 minutes until golden. Add ground beef/lamb and brown thoroughly, breaking lumps. Season with allspice, black pepper, salt, and toasted crushed walnuts. Remove from heat and chill in the refrigerator until firm.',
        durationMinutes: 20,
        chefTip: 'The filling must be completely cold (even semi-solid) before stuffing to prevent melting through the delicate raw outer shell.'
      },
      {
        stepNumber: 2,
        title: 'Knead the Outer Shell Dough',
        instruction: 'Rinse fine bulgur with cold water and drain. In a food processor or by hand, combine ultra-fine lean ground beef, damp bulgur, cumin, paprika, salt, and splashes of ice water. Knead for 10 minutes into an elastic, pliable meat paste that feels like smooth clay.',
        durationMinutes: 15
      },
      {
        stepNumber: 3,
        title: 'Hollow Out the Shells',
        instruction: 'Keep a bowl of cold salted water nearby. Form an egg-sized ball of shell dough. Wet your thumb and press into the center, rotating the ball in your palm while pinching the walls thinner and thinner until you have a thin, hollow cup of uniform thickness.',
        durationMinutes: 20
      },
      {
        stepNumber: 4,
        title: 'Fill & Shape the Torpedo',
        instruction: 'Pack the hollow cavity with cold walnut-meat filling. Wet your fingers and gently taper the top edges closed, shaping into the classic pointed football/torpedo shape with clean, seamless tips.',
        durationMinutes: 15
      },
      {
        stepNumber: 5,
        title: 'Poach to Perfection',
        instruction: 'Bring a pot of generously salted water with 1 lemon slice to a gentle boil. Slide the kuftas in small batches of 3 to 4. Simmer gently for 8 to 10 minutes until they float smoothly to the surface. Lift out with a slotted spoon.',
        durationMinutes: 12
      }
    ],
    servingNotes: 'Serve hot with a squeeze of fresh lemon juice, melted brown butter, and fresh herbs, or optionally flash-fry in clarified butter for a crunchy outer skin.',
    funFact: 'Mastering the art of making translucent, wafer-thin Ishli Kufta shells is considered a badge of culinary prestige in Western Armenian home cooking.'
  },
  {
    id: 'arm-gata',
    countryId: 'armenia',
    title: 'Traditional Van Armenian Gata',
    nativeTitle: 'Հայկական Գաթա (Armenian Gata)',
    description: 'Armenia’s most celebrated sweet pastry: layered buttery yeast or yogurt pastry stuffed with rich vanilla and sugar-crumb "khoriz" filling, decorated with traditional fork fork-crests.',
    image: AUTHENTIC_IMAGES.armenianGata,
    prepTimeMinutes: 45,
    cookTimeMinutes: 30,
    servings: 8,
    difficulty: 'Medium',
    caloriesPerServing: 440,
    dietaryTags: ['Vegetarian', 'Bakery', 'Festive'],
    course: 'Dessert',
    ingredients: [
      { name: 'All-Purpose Flour', amount: 500, unit: 'g', category: 'Dough' },
      { name: 'High-Fat Unsalted Butter (cold, cubed)', amount: 200, unit: 'g', category: 'Dough' },
      { name: 'Matzoon or Sour Cream', amount: 200, unit: 'g', category: 'Dough' },
      { name: 'Large Eggs', amount: 2, unit: 'pcs', category: 'Dough' },
      { name: 'Baking Soda', amount: 5, unit: 'g', category: 'Dough' },
      { name: 'Vanilla Extract', amount: 5, unit: 'ml', category: 'Dough' },
      { name: 'All-Purpose Flour (for Khoriz)', amount: 180, unit: 'g', category: 'Khoriz Filling' },
      { name: 'Melted Clarified Butter', amount: 120, unit: 'g', category: 'Khoriz Filling' },
      { name: 'Granulated Sugar', amount: 160, unit: 'g', category: 'Khoriz Filling' },
      { name: 'Ground Cardamom or Cinnamon (optional)', amount: 3, unit: 'g', category: 'Khoriz Filling' },
      { name: 'Egg Yolk + 1 tsp Milk (for wash)', amount: 1, unit: 'pcs', category: 'Glaze' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Rub Flaky Butter Dough',
        instruction: 'In a large bowl, sift 500g flour with a pinch of salt. Add 200g cold cubed butter and rub with fingertips or pastry cutter until fine coarse crumbs form. In a separate bowl, whisk matzoon with baking soda, 2 eggs, and vanilla. Pour into flour crumbs and bring together into a soft, smooth dough without over-kneading. Divide into 2 disks and chill for 40 minutes.',
        durationMinutes: 45
      },
      {
        stepNumber: 2,
        title: 'Make the Khoriz Filling',
        instruction: 'In a skillet over medium-low heat, toast 180g flour for 4 minutes until warm and fragrant. Remove from heat. Add sugar, vanilla, and pour in 120g melted clarified butter. Rub between palms until it forms a sweet, sandy, clumping filling.',
        durationMinutes: 10,
        chefTip: 'The sweet butter-flour khoriz filling is what gives Gata its signature tender, melt-in-the-mouth texture.'
      },
      {
        stepNumber: 3,
        title: 'Assemble the Round Gata',
        instruction: 'Roll one dough disk out into a 28cm circle (approx. 5mm thick). Pile half the khoriz filling into the center. Gather the edges upward like a drawstring pouch over the filling, pinch the top securely shut, invert seam-side down, and gently roll or press flat into an even 25cm round disk.',
        durationMinutes: 15
      },
      {
        stepNumber: 4,
        title: 'Traditional Fork Scoring',
        instruction: 'Brush the surface with beaten egg yolk and milk. Using the tines of a fork, score traditional geometric crosshatch or diamond patterns across the top, and prick several times with a skewer to allow steam escape.',
        durationMinutes: 5
      },
      {
        stepNumber: 5,
        title: 'Bake to Golden Perfection',
        instruction: 'Preheat oven to 190°C (375°F). Bake for 28 to 32 minutes until the pastry is deep golden-brown with a glossy lacquer sheen. Cool on a wire rack for 30 minutes before slicing.',
        durationMinutes: 30,
        temperature: '190°C / 375°F'
      }
    ],
    servingNotes: 'Slice into diamonds or wedges and serve warm or room temperature alongside freshly brewed Armenian mountain thyme tea or strong coffee.',
    funFact: 'During Armenian holiday feasts, a clean silver coin is traditionally baked inside one Gata round; whoever finds the coin in their slice is blessed with luck and prosperity for the coming year.'
  },
  {
    id: 'arm-lahmacun',
    countryId: 'armenia',
    title: 'Armenian Lahmacun (Meat Flatbread)',
    nativeTitle: 'Լահմաջո (Lahmajo)',
    description: 'Ultra-thin, crisp-edged round flatbread layered with a fragrant spread of finely ground lamb and beef, red peppers, sun-ripened tomatoes, garlic, and fresh herbs, spritzed with lemon.',
    image: AUTHENTIC_IMAGES.armenianLahmajo,
    prepTimeMinutes: 30,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 350,
    dietaryTags: ['High Protein', 'Street Food', 'Traditional'],
    course: 'Street Food',
    ingredients: [
      { name: 'All-Purpose Flour', amount: 350, unit: 'g', category: 'Dough' },
      { name: 'Warm Water', amount: 200, unit: 'ml', category: 'Dough' },
      { name: 'Active Dry Yeast', amount: 4, unit: 'g', category: 'Dough' },
      { name: 'Fine Salt', amount: 6, unit: 'g', category: 'Dough' },
      { name: 'Ground Lamb & Beef Mix', amount: 300, unit: 'g', category: 'Topping' },
      { name: 'Red Bell Pepper (finely puréed)', amount: 100, unit: 'g', category: 'Topping' },
      { name: 'Fresh Ripe Tomato (grated)', amount: 120, unit: 'g', category: 'Topping' },
      { name: 'Garlic Cloves (crushed)', amount: 4, unit: 'pcs', category: 'Topping' },
      { name: 'Tomato Paste', nameKa: 'ტომატ-პასტა', amount: 20, unit: 'g', category: 'Topping' },
      { name: 'Red Pepper Paste', nameKa: 'წიწაკის პასტა', amount: 15, unit: 'g', category: 'Topping' },
      { name: 'Fresh Parsley (finely minced)', amount: 30, unit: 'g', category: 'Topping' },
      { name: 'Aleppo Pepper & Paprika', nameKa: 'ალეპოს წიწაკა და პაპრიკა', amount: 5, unit: 'g', category: 'Topping' },
      { name: 'Ground Black Pepper', nameKa: 'დაფქული შავი პილპილი', amount: 3, unit: 'g', category: 'Topping' },
      { name: 'Fresh Lemon', nameKa: 'ახალი ლიმონი', amount: 1, unit: 'pcs', category: 'Serving' },
      { name: 'Crisp Red Onion (thinly sliced)', nameKa: 'წითელი ხახვი (თხლად დაჭრილი)', amount: 1, unit: 'pcs', category: 'Serving' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Knead Pliable Yeast Dough',
        instruction: 'Dissolve yeast and salt in warm water. Add flour and knead for 6 minutes into a soft, smooth dough. Divide into 6 balls, place on a floured tray, cover, and rest for 45 minutes.',
        durationMinutes: 50
      },
      {
        stepNumber: 2,
        title: 'Blend the Spiced Meat Paste',
        instruction: 'In a food processor, pulse red peppers, tomatoes, garlic, onion, and parsley into a fine slurry. Add ground meat, pepper paste, paprika, black pepper, and salt. Pulse briefly until a spreadable, paste-like consistency is achieved.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Roll Ultra-Thin Disks',
        instruction: 'On a floured surface, roll each dough ball out as thin as a tortilla (approx. 1.5mm thick and 26cm diameter). Transfer to a baking parchment sheet.',
        durationMinutes: 10
      },
      {
        stepNumber: 4,
        title: 'Spread the Meat Layer',
        instruction: 'Spread 2 generous tablespoons of the meat paste all the way to the very edges in a paper-thin layer using the back of a spoon.',
        durationMinutes: 5,
        chefTip: 'The meat topping must be spread very thinly; a thick layer will make the crust soggy rather than crisp.'
      },
      {
        stepNumber: 5,
        title: 'Flash-Bake at Maximum Heat',
        instruction: 'Preheat oven with a baking steel or stone to 250°C (480°F). Slide the lahmacun onto the hot stone. Bake for 5 to 6 minutes until the edges are lightly charred, blistered, and the base is crisp.',
        durationMinutes: 6,
        temperature: '250°C / 480°F'
      }
    ],
    servingNotes: 'Spritz generously with fresh lemon juice, scatter with fresh parsley and red onion slices, roll up tightly into a wrap, and eat immediately.',
    funFact: 'In Yerevan, lahmacun bakeries specialize in rapid high-heat stone ovens that churn out hundreds of piping hot flatbreads per hour to bustling lunch crowds.'
  },
  {
    id: 'arm-khash',
    countryId: 'armenia',
    title: 'Traditional Armenian Khash',
    nativeTitle: 'Խաշ (Traditional Khash)',
    description: 'Armenia’s legendary winter ritual dish: cow feet and shank bones slow-simmered overnight into a rich, pure, collagenous white broth, eaten with crushed garlic and dried lavash.',
    image: AUTHENTIC_IMAGES.armenianKhash,
    prepTimeMinutes: 45,
    cookTimeMinutes: 480,
    servings: 6,
    difficulty: 'Hard',
    caloriesPerServing: 560,
    dietaryTags: ['High Collagen', 'Traditional Ritual', 'Gluten-Free Option'],
    course: 'Soup',
    ingredients: [
      { name: 'Cleaned Beef Feet (cut into rounds)', amount: 2000, unit: 'g', category: 'Meat' },
      { name: 'Beef Shank with Marrow Bone', amount: 800, unit: 'g', category: 'Meat' },
      { name: 'Cold Fresh Spring Water', amount: 6000, unit: 'ml', category: 'Broth' },
      { name: 'Fresh Garlic (crushed in mortar with salt)', amount: 100, unit: 'g', category: 'Condiment' },
      { name: 'Dry Crispy Armenian Lavash', amount: 6, unit: 'pcs', category: 'Accompaniment' },
      { name: 'Radishes & Pickled Hot Peppers', amount: 200, unit: 'g', category: 'Accompaniment' },
      { name: 'Coarse Sea Salt', amount: 25, unit: 'g', category: 'Seasoning' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Soak & Clean the Trotters',
        instruction: 'Soak cleaned cow feet in cold water for 24 hours, changing the water every 3 to 4 hours, until completely white and pristine without any impurities. Scrub thoroughly with a stiff brush.',
        durationMinutes: 45
      },
      {
        stepNumber: 2,
        title: 'Initial Boil & Water Discard',
        instruction: 'Place the trotters in a massive pot, cover with fresh cold water, bring to a rolling boil for 15 minutes, then drain entirely and wash the meat under hot water. Clean the pot.',
        durationMinutes: 25
      },
      {
        stepNumber: 3,
        title: 'The Overnight Gentle Simmer',
        instruction: 'Return trotters and beef shanks to the pot. Add 6 liters of clean cold water. Bring to a gentle boil, reduce heat to the lowest simmer, and cook uncovered or partially covered for 7 to 8 hours without salt, onions, or seasonings until the meat slips off the bones and the broth is rich, milky, and sticky.',
        durationMinutes: 450,
        temperature: 'Gentle Low Simmer',
        chefTip: 'Authentic khash contains NO salt, onions, or spices during the boil. Each diner personalizes salinity and garlic at the table.'
      },
      {
        stepNumber: 4,
        title: 'Prepare the Garlic Broth Infusion',
        instruction: 'Pound fresh peeled garlic cloves with coarse salt in a mortar into a smooth paste. Stir in a ladle of hot khash broth to create the garlic condiment.',
        durationMinutes: 10
      },
      {
        stepNumber: 5,
        title: 'The Table Service Ritual',
        instruction: 'Ladle boiling hot broth and tender meat onto deep plates. Diners add garlic paste and salt to taste, then crumble dry lavash directly into the broth until it softens into a rich, decadent stew.',
        durationMinutes: 5
      }
    ],
    servingNotes: 'Traditionally eaten early in the morning during cold winter months, accompanied by fresh mineral water, radishes, pickles, and dry lavash.',
    funFact: 'Khash is surrounded by strict cultural etiquette in Armenia; traditionally eaten in months that contain the letter "R" (September through April), accompanied by hearty speeches and toasts.'
  },
  {
    id: 'arm-basturmayov-dzvadzegh',
    countryId: 'armenia',
    title: 'Basturmayov Dzvadzegh (Basturma & Eggs)',
    nativeTitle: 'Բաստուրմայով Ձվածեղ (Basturma Eggs)',
    description: 'Armenia’s supreme breakfast pan: wafer-thin ribbons of spiced air-dried cured beef (basturma) sizzled in golden clarified butter, topped with sunny-side-up eggs.',
    image: AUTHENTIC_IMAGES.armenianBasturmaEggs,
    prepTimeMinutes: 5,
    cookTimeMinutes: 7,
    servings: 2,
    difficulty: 'Easy',
    caloriesPerServing: 380,
    dietaryTags: ['High Protein', 'Keto', 'Breakfast Classic'],
    course: 'Breakfast',
    ingredients: [
      { name: 'Armenian Spiced Basturma (thinly sliced)', amount: 100, unit: 'g', category: 'Charcuterie' },
      { name: 'Fresh Farm Eggs', amount: 4, unit: 'pcs', category: 'Eggs' },
      { name: 'Clarified Butter or Salted Butter', amount: 35, unit: 'g', category: 'Cooking' },
      { name: 'Cracked Black Pepper', amount: 2, unit: 'g', category: 'Seasoning' },
      { name: 'Fresh Herbs (Tarragon & Chives)', amount: 15, unit: 'g', category: 'Garnish' },
      { name: 'Fresh Armenian Lavash or Crusty Bread', amount: 2, unit: 'pcs', category: 'Serving' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Sizzle the Basturma',
        instruction: 'Melt clarified butter in a wide cast iron skillet over medium heat. Arrange the thin slices of basturma in a single layer. Fry for 45 to 60 seconds per side until fragrant and slightly crisp around edges.',
        durationMinutes: 2,
        chefTip: 'Do not overcook the basturma; the fenugreek and garlic crust (chaman) becomes bitter if scorched.'
      },
      {
        stepNumber: 2,
        title: 'Crack the Eggs',
        instruction: 'Gently crack the eggs directly between and over the basturma slices into the hot buttered skillet.',
        durationMinutes: 1
      },
      {
        stepNumber: 3,
        title: 'Baste & Set the Whites',
        instruction: 'Spoon hot foaming butter over the egg whites to cook them evenly while keeping the yolks velvety and runny. Season lightly with cracked black pepper (no salt needed due to the savory basturma).',
        durationMinutes: 3
      },
      {
        stepNumber: 4,
        title: 'Garnish & Serve Sizzling',
        instruction: 'Scatter fresh tarragon and chives across the eggs. Remove pan directly to the table on a trivet.',
        durationMinutes: 1
      }
    ],
    servingNotes: 'Serve sizzling hot straight in the cast iron skillet with torn pieces of warm lavash for dipping into the runny golden yolks.',
    funFact: 'Armenian basturma is cured in "chaman"—a fragrant paste of ground blue fenugreek, garlic, cumin, and hot paprika that imparts its legendary aroma.'
  },
  {
    id: 'arm-ghapama',
    countryId: 'armenia',
    title: 'Ghapama (Holiday Stuffed Pumpkin)',
    nativeTitle: 'Ղափամա (Ghapama)',
    description: 'An enchanting Armenian festive centerpiece: sweet baked whole pumpkin stuffed with fluffy rice, honey, melted butter, dried apricots, raisins, prunes, and toasted walnuts.',
    image: AUTHENTIC_IMAGES.armenianGhapama,
    prepTimeMinutes: 30,
    cookTimeMinutes: 75,
    servings: 6,
    difficulty: 'Medium',
    caloriesPerServing: 390,
    dietaryTags: ['Vegetarian', 'Holiday Feast', 'Festive'],
    course: 'Main',
    ingredients: [
      { name: 'Medium Sugar Pumpkin or Butternut (approx. 2kg)', amount: 1, unit: 'pcs', category: 'Produce' },
      { name: 'Long-Grain or Basmati Rice (parboiled)', amount: 200, unit: 'g', category: 'Filling' },
      { name: 'Clarified Butter or Sweet Butter', amount: 100, unit: 'g', category: 'Filling' },
      { name: 'Pure Honey', amount: 90, unit: 'g', category: 'Filling' },
      { name: 'Dried Apricots (chopped)', amount: 80, unit: 'g', category: 'Dried Fruit' },
      { name: 'Golden Raisins & Dried Prunes', amount: 80, unit: 'g', category: 'Dried Fruit' },
      { name: 'Toasted Walnuts or Almonds (chopped)', amount: 60, unit: 'g', category: 'Nuts' },
      { name: 'Ground Cinnamon', amount: 5, unit: 'g', category: 'Spices' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Hollow the Pumpkin',
        instruction: 'Cut a neat circular cap off the top of the pumpkin. Scoop out seeds and fibrous strings using a sharp metal spoon. Rinse and pat dry inside.',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Parboil the Rice',
        instruction: 'Parboil rinsed rice in boiling water for 6 minutes until al dente. Drain thoroughly.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Toss Sweet Fruit & Nut Filling',
        instruction: 'In a bowl, toss the parboiled rice with chopped dried apricots, raisins, prunes, walnuts, cinnamon, melted butter, and honey until glistened and fragrant.',
        durationMinutes: 5
      },
      {
        stepNumber: 4,
        title: 'Stuff and Cap',
        instruction: 'Rub the inside flesh of the pumpkin with 1 tablespoon of butter and honey. Fill with the rice-fruit mixture, leaving 1cm space at top for rice expansion. Replace the pumpkin cap.',
        durationMinutes: 5
      },
      {
        stepNumber: 5,
        title: 'Bake to Caramelized Tenderness',
        instruction: 'Place in a baking dish with 100ml water at the bottom. Bake at 180°C (350°F) for 70 to 80 minutes until a skewer glides effortlessly through the pumpkin wall.',
        durationMinutes: 75,
        temperature: '180°C / 350°F'
      }
    ],
    servingNotes: 'Bring the whole baked pumpkin to the center of the table. Cut down the sides in vertical petal slices from top to bottom; the pumpkin blossoms outward like an open flower!',
    funFact: 'Ghapama is so deeply cherished in Armenian culture that there is an iconic folk song written specifically for it: "Hey Jan Ghapama", celebrating the aroma of the festive pumpkin.'
  },
  {
    id: 'arm-pasut-tolma',
    countryId: 'armenia',
    title: 'Pasut Tolma (Armenian Lenten Dolma)',
    nativeTitle: 'Պասուց Տոլմա (Pasut Tolma)',
    description: 'Armenia’s celebrated grand Lenten parcels: large pickled cabbage leaves stuffed with seven sacred grains and legumes—chickpeas, red beans, lentils, cracked wheat, and caramelized onions.',
    image: AUTHENTIC_IMAGES.armenianPasutTolma,
    prepTimeMinutes: 45,
    cookTimeMinutes: 50,
    servings: 6,
    difficulty: 'Medium',
    caloriesPerServing: 340,
    dietaryTags: ['Vegan', 'Plant-Based', 'High Fiber', 'Traditional'],
    course: 'Main',
    ingredients: [
      { name: 'Pickled Cabbage Leaves (or blanched sour cabbage)', amount: 20, unit: 'pcs', category: 'Wrappers' },
      { name: 'Cooked Chickpeas', amount: 150, unit: 'g', category: 'Legumes' },
      { name: 'Cooked Red Kidney Beans', amount: 150, unit: 'g', category: 'Legumes' },
      { name: 'Brown or Green Lentils (cooked al dente)', amount: 120, unit: 'g', category: 'Legumes' },
      { name: 'Coarse Bulgur Wheat', amount: 100, unit: 'g', category: 'Grains' },
      { name: 'Yellow Onions (finely diced)', amount: 300, unit: 'g', category: 'Aromatics' },
      { name: 'Sunflower Oil', amount: 80, unit: 'ml', category: 'Cooking' },
      { name: 'Tomato Paste', nameKa: 'ტომატ-პასტა', amount: 35, unit: 'g', category: 'Seasoning' },
      { name: 'Red Pepper Paste', nameKa: 'წიწაკის პასტა', amount: 25, unit: 'g', category: 'Seasoning' },
      { name: 'Dried Herb Seasoning (Basil, Thyme, Mint)', nameKa: 'ხმელი მწვანილების საკმაზი (რეჰანი, ბეგქონდარა, პიტნა)', amount: 15, unit: 'g', category: 'Herbs' },
      { name: 'Pomegranate Molasses', amount: 30, unit: 'ml', category: 'Tart Note' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Caramelize the Onion Base',
        instruction: 'In a deep skillet, heat sunflower oil and slowly cook onions for 12 minutes until deeply sweet and golden. Stir in tomato and pepper paste and herbs for 2 minutes.',
        durationMinutes: 14
      },
      {
        stepNumber: 2,
        title: 'Mix Grains and Legumes',
        instruction: 'Combine cooked chickpeas, red beans, lentils, bulgur, pomegranate molasses, salt, and pepper with the warm onion paste. Mix thoroughly.',
        durationMinutes: 6
      },
      {
        stepNumber: 3,
        title: 'Wrap the Large Tolmas',
        instruction: 'Place 2 generous tablespoons of filling onto each pickled cabbage leaf. Fold sides and roll into large, handsome rectangular parcels.',
        durationMinutes: 20
      },
      {
        stepNumber: 4,
        title: 'Layer in Pot & Slow Simmer',
        instruction: 'Pack rolls tightly in a heavy pot. Add 350ml water mixed with 1 tbsp tomato paste. Place a plate on top, cover, and simmer over low heat for 45 to 50 minutes.',
        durationMinutes: 50
      },
      {
        stepNumber: 5,
        title: 'Cool & Rest',
        instruction: 'Traditionally, Pasut Tolma is cooled completely in the pot before serving, as the flavors blossom when cold.',
        durationMinutes: 30
      }
    ],
    servingNotes: 'Traditionally served cold or room temperature, drizzled with pomegranate reduction or olive oil and fresh parsley.',
    funFact: 'The number 7 in the grain mixture represents perfection and cosmic completeness in ancient Armenian Christian tradition during the Great Lent.'
  }
];
