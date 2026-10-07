import { AUTHENTIC_IMAGES } from '../imageAssets';

export const GEORGIA_RECIPES = [
  {
    id: 'geo-khachapuri-adjaruli',
    countryId: 'georgia',
    title: 'Adjaruli Khachapuri',
    nativeTitle: 'აჭარული ხაჭაპური',
    description: 'Iconic boat-shaped yeast bread cradling a molten lake of melted Sulguni and Imeretian cheeses, crowned with a fresh egg yolk and sweet butter.',
    image: AUTHENTIC_IMAGES.adjaruliKhachapuri,
    prepTimeMinutes: 45,
    cookTimeMinutes: 18,
    servings: 2,
    difficulty: 'Medium',
    caloriesPerServing: 680,
    dietaryTags: ['Vegetarian', 'Comfort Food', 'Iconic'],
    course: 'Bakery',
    ingredients: [
      { name: 'All-Purpose Wheat Flour', amount: 450, unit: 'g', category: 'Dough' },
      { name: 'Warm Whole Milk (38°C)', amount: 200, unit: 'ml', category: 'Dough' },
      { name: 'Warm Filtered Water', amount: 80, unit: 'ml', category: 'Dough' },
      { name: 'Active Dry Yeast', amount: 7, unit: 'g', category: 'Dough' },
      { name: 'Granulated Sugar', amount: 8, unit: 'g', category: 'Dough' },
      { name: 'Fine Sea Salt', amount: 8, unit: 'g', category: 'Dough' },
      { name: 'Sunflower Oil', amount: 25, unit: 'ml', category: 'Dough' },
      { name: 'Traditional Sulguni Cheese (shredded)', amount: 350, unit: 'g', category: 'Filling' },
      { name: 'Imeretian Cheese (or Mozzarella/Feta 1:1)', amount: 250, unit: 'g', category: 'Filling' },
      { name: 'Fresh Farm Egg Yolks', amount: 2, unit: 'pcs', category: 'Topping' },
      { name: 'High-Fat Unsalted Butter', amount: 50, unit: 'g', category: 'Topping' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Activate Yeast & Mix Wet Base',
        instruction: 'In a glass bowl, whisk 200ml warm milk (38°C) and 80ml warm water with 7g active dry yeast and 8g sugar. Allow to sit undisturbed for 8 minutes until a foamy, aromatic head develops on top.',
        durationMinutes: 8,
        temperature: '38°C / 100°F',
        chefTip: 'If the yeast mixture does not foam after 10 minutes, the yeast may be expired or the liquid too hot. Discard and restart.'
      },
      {
        stepNumber: 2,
        title: 'Knead the Supple Dough',
        instruction: 'Sift 450g flour with 8g salt into a stand mixer bowl. Pour in the activated yeast mixture and 25ml sunflower oil. Knead on low speed for 8 minutes (or 12 minutes by hand) until elastic, smooth, and slightly tacky.',
        durationMinutes: 10,
        chefTip: 'The dough should be softer and silkier than pizza dough. Resist the urge to add excess flour.'
      },
      {
        stepNumber: 3,
        title: 'First Warm Proofing',
        instruction: 'Grease a clean bowl with oil. Place dough inside, cover tightly with a damp linen cloth or cling film, and place in a draft-free warm spot for 60 to 75 minutes until tripled in volume.',
        durationMinutes: 70,
        temperature: '26-28°C / 80°F'
      },
      {
        stepNumber: 4,
        title: 'Prepare the Cheese Lake',
        instruction: 'Coarsely grate 350g Sulguni and crumble 250g Imeretian cheese together. If using a blend of mozzarella and feta, rinse feta lightly to balance salinity. Mix in 30ml warm water or milk to yield a pliable, juicy texture.',
        durationMinutes: 5,
        chefTip: 'The added tablespoon of liquid creates that famous stretch and prevent dry cheese puddling in the oven.'
      },
      {
        stepNumber: 5,
        title: 'Shape the Iconic Boat (Gondola)',
        instruction: 'Preheat oven with baking stone to 240°C (465°F). Punch down dough and divide into 2 equal rounds (approx 360g each). Roll into an oval 32cm long. Roll the two long edges inwards towards the center, then tightly twist and pinch both ends together to form a sturdy boat shape.',
        durationMinutes: 10,
        temperature: '240°C / 465°F',
        chefTip: 'For the authentic touch, tuck a thin string of cheese inside the rim rolls before pinching shut.'
      },
      {
        stepNumber: 6,
        title: 'Fill and High-Heat Bake',
        instruction: 'Generously mound half of the cheese mixture into each dough boat, pressing gently into the corners. Transfer onto parchment on the hot baking stone. Bake at 240°C for 14-16 minutes until edges are blistered amber and cheese is violently bubbling.',
        durationMinutes: 15,
        temperature: '240°C / 465°F'
      },
      {
        stepNumber: 7,
        title: 'Yolk Crown & Table Ritual',
        instruction: 'Remove from oven immediately. Using the back of a spoon, press a shallow well in the center of the molten cheese. Drop one raw egg yolk into the well and place 25g cold butter cubes alongside. Serve immediately piping hot.',
        durationMinutes: 2,
        chefTip: 'To eat like a Georgian: tear off the crispy crust tips with your fingers, vigorously swirl the raw yolk and melting butter into the cheese until an emulsion forms, and dip!'
      }
    ],
    funFact: 'Legend holds that seaside sailors in Adjara created this bread to resemble a boat sailing the Black Sea, with the yolk symbolizing the setting sun.',
    servingNotes: 'Best enjoyed immediately with dry Georgian amber wine (Rkatsiteli) or fresh tarragon lemonade.'
  },
  {
    id: 'geo-khinkali',
    countryId: 'georgia',
    title: 'Georgian Khinkali',
    nativeTitle: 'ხინკალი',
    description: 'Masterful mountain dumplings meticulously pleated with 19 folds, packed with seasoned beef-pork mince and piping hot, rich herbal broth inside.',
    image: AUTHENTIC_IMAGES.khinkali,
    prepTimeMinutes: 60,
    cookTimeMinutes: 12,
    servings: 4,
    difficulty: 'Hard',
    caloriesPerServing: 520,
    dietaryTags: ['High-Protein', 'Signature Dumpling', 'Street Food'],
    course: 'Main',
    ingredients: [
      { name: 'High-Gluten Wheat Flour', amount: 500, unit: 'g', category: 'Dough' },
      { name: 'Cold Water', amount: 220, unit: 'ml', category: 'Dough' },
      { name: 'Fine Salt', amount: 10, unit: 'g', category: 'Dough' },
      { name: 'Ground Beef Chuck (80/20)', amount: 300, unit: 'g', category: 'Filling' },
      { name: 'Ground Pork Belly', amount: 200, unit: 'g', category: 'Filling' },
      { name: 'Finely Minced Yellow Onion', amount: 180, unit: 'g', category: 'Filling' },
      { name: 'Fresh Cilantro (stems & leaves)', amount: 35, unit: 'g', category: 'Filling' },
      { name: 'Ground Coriander Seed', amount: 4, unit: 'g', category: 'Spices' },
      { name: 'Ground Blue Fenugreek (Utskho Suneli)', amount: 3, unit: 'g', category: 'Spices' },
      { name: 'Dried Red Chili Flakes', amount: 3, unit: 'g', category: 'Spices' },
      { name: 'Iced Beef Broth or Ice Water', amount: 160, unit: 'ml', category: 'Filling' },
      { name: 'Coarse Black Pepper', amount: 10, unit: 'g', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Knead Extra-Firm Dough',
        instruction: 'Mix 500g flour, 10g salt, and 220ml cold water. Knead vigorously for 12 minutes. The dough will feel exceptionally stiff and tough. Wrap tightly in plastic and rest for 30 minutes to relax the gluten.',
        durationMinutes: 15,
        chefTip: 'Firm dough is essential; soft dough will tear under boiling water pressure and leak the sacred internal broth.'
      },
      {
        stepNumber: 2,
        title: 'Hydrate the Broth-Rich Filling',
        instruction: 'Combine ground beef, pork, minced onion, fresh cilantro, coriander, blue fenugreek, and chili flakes. Gradually beat in 160ml iced beef broth in increments with a wooden spoon until fully absorbed into a juicy, glossy meat paste.',
        durationMinutes: 10,
        chefTip: 'The meat will absorb the liquid like a sponge. When cooked, this trapped liquid turns into the celebrated soup inside.'
      },
      {
        stepNumber: 3,
        title: 'Roll and Cut Disks',
        instruction: 'Roll dough out to 2mm thickness using a heavy rolling pin. Using a round cutter, cut 10cm-12cm disks. Roll the outermost 1.5cm perimeter of each disk even thinner while leaving the center thicker.',
        durationMinutes: 15
      },
      {
        stepNumber: 4,
        title: 'The Sacred 19 Pleats',
        instruction: 'Place 40g filling into center. Gather the edges accordion-style with your thumb and index finger, creating 15 to 19 tight pleats around the circumference. Twist the top stem firmly and pinch off the excess nub (kudi).',
        durationMinutes: 20,
        chefTip: 'A traditional supra master seeks at least 19 folds per dumpling for optimal structural integrity.'
      },
      {
        stepNumber: 5,
        title: 'Whirlpool Boil',
        instruction: 'Bring 5 liters of heavily salted water to a vigorous rolling boil. Swirl the water with a wooden spoon to create a deep vortex, then slide khinkali in one by one. Boil gently for 8-9 minutes until they flip upside down and float.',
        durationMinutes: 10,
        temperature: '100°C / 212°F'
      },
      {
        stepNumber: 6,
        title: 'Plate with Black Pepper',
        instruction: 'Lift each khinkali gently with a slotted skimmer onto a warm platter. Shower generously with freshly cracked coarse black pepper. Eat by grabbing the top knob, taking a tiny nibble from the side, drinking the broth, then devouring the dumpling.',
        durationMinutes: 2
      }
    ],
    funFact: 'Georgians never eat the thick top stem ("kudi"). They leave it on the rim of the plate to keep count of how many khinkali they have conquered!',
    servingNotes: 'Do not use a knife and fork! Eating khinkali with utensils causes the broth to leak onto the plate and is considered culinary sacrilege.'
  },
  {
    id: 'geo-shkmeruli',
    countryId: 'georgia',
    title: 'Shkmeruli (Garlic Roasted Chicken)',
    nativeTitle: 'შქმერული',
    description: 'Crispy roasted whole young chicken submerged in an aromatic, bubbling skillet of crushed garlic, warm milk, cultured butter, and rendered poultry juices.',
    image: AUTHENTIC_IMAGES.shkmeruli,
    prepTimeMinutes: 20,
    cookTimeMinutes: 35,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 610,
    dietaryTags: ['High-Protein', 'Keto-Friendly', 'Gluten-Free'],
    course: 'Main',
    ingredients: [
      { name: 'Whole Young Chicken (Corn-fed)', amount: 1200, unit: 'g', category: 'Poultry' },
      { name: 'Fresh Garlic Cloves (peeled)', amount: 16, unit: 'cloves', category: 'Aromatics' },
      { name: 'Whole Milk or Light Cream', amount: 250, unit: 'ml', category: 'Sauce' },
      { name: 'Clarified Butter or Ghee', amount: 40, unit: 'g', category: 'Sauce' },
      { name: 'Coarse Sea Salt', amount: 12, unit: 'g', category: 'Seasoning' },
      { name: 'Blue Fenugreek (Utskho Suneli)', amount: 4, unit: 'g', category: 'Spices' },
      { name: 'Cracked Black Pepper', amount: 5, unit: 'g', category: 'Seasoning' },
      { name: 'Fresh Chopped Cilantro for garnish', amount: 15, unit: 'g', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Spatchcock & Flatten Chicken',
        instruction: 'Cut down both sides of the chicken backbone with kitchen shears and remove. Flip chicken skin-side up and press down firmly on the breastbone until you hear a crack. Rub generously with coarse salt and black pepper.',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Crispy Pan-Roast Under Weight',
        instruction: 'Heat a heavy cast-iron skillet (or traditional Georgian ketsi) over medium-high heat with 15ml oil. Place chicken skin-side down. Place a heavy weight (like another cast iron skillet or foil-wrapped brick) on top. Sear 12 minutes until deep golden brown, flip, and cook 10 more minutes.',
        durationMinutes: 25,
        temperature: 'Medium-High'
      },
      {
        stepNumber: 3,
        title: 'Pound Garlic Paste',
        instruction: 'In a stone mortar, crush 16 garlic cloves with 3g salt and 4g blue fenugreek into a creamy, pungent paste.',
        durationMinutes: 5
      },
      {
        stepNumber: 4,
        title: 'Simmer the Garlic Bath',
        instruction: 'Cut roasted chicken into 8 serving pieces. Pour off excess black grease from skillet, retaining 2 tbsp rendered fat. Add 40g clarified butter and the garlic paste, sizzling gently for 60 seconds. Pour in 250ml milk and bring to a gentle simmer.',
        durationMinutes: 5
      },
      {
        stepNumber: 5,
        title: 'Infuse and Bubble',
        instruction: 'Return chicken pieces to the bubbling skillet. Baste meat continuously with the creamy garlic sauce for 5 minutes until fully saturated and sauce thickens slightly. Garnish with fresh cilantro and serve straight from the sizzling skillet with crusty bread.',
        durationMinutes: 6
      }
    ],
    funFact: 'Hailing from the high mountain village of Shkmeri in Racha, this dish was invented by a village cook who needed to prepare a sumptuous meal for visiting nobles on extremely short notice.',
    servingNotes: 'Serve piping hot with Georgian shoti bread to dip into every drop of the garlic cream.'
  },
  {
    id: 'geo-satsivi',
    countryId: 'georgia',
    title: 'Satsivi (Poultry in Spiced Walnut Sauce)',
    nativeTitle: 'საცივი',
    description: 'Aristocratic feast dish featuring tender poultry steeped in a velvety walnut sauce fragrant with blue fenugreek, marigold petals, garlic, and coriander.',
    image: AUTHENTIC_IMAGES.satsivi,
    prepTimeMinutes: 35,
    cookTimeMinutes: 40,
    servings: 6,
    difficulty: 'Medium',
    caloriesPerServing: 540,
    dietaryTags: ['Festive', 'Gluten-Free', 'Traditional'],
    course: 'Main',
    ingredients: [
      { name: 'Whole Chicken or Turkey Parts', amount: 1400, unit: 'g', category: 'Meat' },
      { name: 'Shelled Raw Walnut Halves', amount: 450, unit: 'g', category: 'Sauce' },
      { name: 'Finely Minced Sweet White Onions', amount: 300, unit: 'g', category: 'Aromatics' },
      { name: 'Garlic Cloves', amount: 6, unit: 'cloves', category: 'Aromatics' },
      { name: 'Ground Blue Fenugreek (Utskho Suneli)', amount: 6, unit: 'g', category: 'Spices' },
      { name: 'Georgian Dried Marigold Petals (Imeretian Saffron)', amount: 5, unit: 'g', category: 'Spices' },
      { name: 'Ground Coriander Seeds', amount: 6, unit: 'g', category: 'Spices' },
      { name: 'White Wine Vinegar', amount: 20, unit: 'ml', category: 'Acid' },
      { name: 'Reserved Rich Poultry Broth', amount: 800, unit: 'ml', category: 'Liquid' },
      { name: 'Walnut Oil or Cold Pressed Oil', amount: 15, unit: 'ml', category: 'Garnish' },
      { name: 'Pomegranate Arils', amount: 50, unit: 'g', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Poach and Roast Poultry',
        instruction: 'Simmer chicken in 1.5L salted water for 25 minutes. Skim broth and reserve. Transfer chicken to roasting pan, brush with butter, and roast at 200°C for 15 minutes to crisp skin. Cut into serving portions.',
        durationMinutes: 40,
        temperature: '200°C / 400°F'
      },
      {
        stepNumber: 2,
        title: 'Grind the Walnut Paste Twice',
        instruction: 'Pass 450g walnuts through a fine meat grinder or high-powered blender twice until powdery and oily. Squeeze walnut oil from 50g of the paste by hand and set the amber drops aside for final garnish.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Sweat Onions to Translucence',
        instruction: 'Slowly sweat minced onions in poultry fat over low heat for 18 minutes until deeply sweet and completely translucent without taking color.',
        durationMinutes: 20
      },
      {
        stepNumber: 4,
        title: 'Blend the Spiced Emulsion',
        instruction: 'In a blender, combine sweated onions, ground walnuts, garlic, blue fenugreek, dried marigold, coriander, salt, and vinegar. Blend while streaming in warm poultry broth until smooth like heavy cream.',
        durationMinutes: 8
      },
      {
        stepNumber: 5,
        title: 'Gentle Simmer and Steep',
        instruction: 'Pour walnut sauce into a wide pan. Bring to a bare simmer (do not boil hard or walnuts turn bitter). Submerge roasted chicken pieces. Turn off heat and cool to room temperature.',
        durationMinutes: 10
      },
      {
        stepNumber: 6,
        title: 'Chill Overnight and Serve',
        instruction: 'Refrigerate for at least 6 hours (preferably overnight). The word Satsivi literally means "cold dish". Drizzle with extracted walnut oil and ruby pomegranate arils before serving.',
        durationMinutes: 5
      }
    ],
    funFact: 'Satsivi is the undisputed king of the Georgian New Year and Christmas feast tables, prepared days in advance so flavors deepen.',
    servingNotes: 'Serve cool or at room temperature accompanied by steaming hot gomi (cornmeal porridge).'
  },
  {
    id: 'geo-lobio',
    countryId: 'georgia',
    title: 'Lobio Nigvzit (Stewed Beans with Walnuts)',
    nativeTitle: 'ლობიო ნიგვზით',
    description: 'Slow-simmered dark red kidney beans mashed in a clay pot with crushed walnuts, fresh purple basil, cilantro, savory spices, and garlic.',
    image: AUTHENTIC_IMAGES.lobio,
    prepTimeMinutes: 20,
    cookTimeMinutes: 70,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 380,
    dietaryTags: ['Vegan', 'Gluten-Free', 'High-Fiber'],
    course: 'Main',
    ingredients: [
      { name: 'Dry Red Kidney Beans', amount: 400, unit: 'g', category: 'Legumes' },
      { name: 'Shelled Walnuts', amount: 150, unit: 'g', category: 'Nuts' },
      { name: 'Large Yellow Onions (diced)', amount: 2, unit: 'pcs', category: 'Aromatics' },
      { name: 'Fresh Garlic Cloves', amount: 5, unit: 'cloves', category: 'Aromatics' },
      { name: 'Fresh Cilantro', amount: 50, unit: 'g', category: 'Fresh Herbs' },
      { name: 'Fresh Purple Basil', amount: 25, unit: 'g', category: 'Fresh Herbs' },
      { name: 'Red Wine Vinegar', amount: 25, unit: 'ml', category: 'Acid' },
      { name: 'Blue Fenugreek & Coriander', amount: 8, unit: 'g', category: 'Spices' },
      { name: 'Sunflower Oil', amount: 35, unit: 'ml', category: 'Fat' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Soak and Simmer Beans',
        instruction: 'Soak beans overnight. Drain and cover with 1.8L fresh water. Simmer on medium-low for 60 minutes until completely creamy and tender.',
        durationMinutes: 60
      },
      {
        stepNumber: 2,
        title: 'Caramelize Onions',
        instruction: 'In sunflower oil, sauté diced onions until golden amber and sweet, about 12 minutes.',
        durationMinutes: 12
      },
      {
        stepNumber: 3,
        title: 'Mortar Spice Paste',
        instruction: 'Crush walnuts, garlic, blue fenugreek, coriander seeds, and a pinch of salt in a mortar into a paste. Stir in red wine vinegar.',
        durationMinutes: 5
      },
      {
        stepNumber: 4,
        title: 'Crush and Marry in Clay Pot',
        instruction: 'Mash half of the cooked beans with a wooden potato masher directly in the pot. Stir in the walnut-spice paste and caramelized onions. Simmer 10 minutes to thicken.',
        durationMinutes: 10
      },
      {
        stepNumber: 5,
        title: 'Herb Finish',
        instruction: 'Fold in finely chopped fresh cilantro and purple basil. Season with salt to taste and remove from heat immediately to preserve herb brightness.',
        durationMinutes: 3
      }
    ],
    funFact: 'Traditionally served in rustic unglazed clay pots called "ketsi" accompanied by mchadi (pan-fried cornbread) and pickled jonjoli.',
    servingNotes: 'Pair with hot Mchadi cornbread and crunchy pickled wild garlic or peppers.'
  },
  {
    id: 'geo-pkhali',
    countryId: 'georgia',
    title: 'Pkhali Assortment (Spinach & Beetroot)',
    nativeTitle: 'ფხალი',
    description: 'Vibrant, velvety vegetable pâté quenelles ground with toasted walnuts, fresh herbs, aromatic garlic, and crowned with jeweled pomegranate seeds.',
    image: AUTHENTIC_IMAGES.pkhali,
    prepTimeMinutes: 35,
    cookTimeMinutes: 15,
    servings: 6,
    difficulty: 'Easy',
    caloriesPerServing: 240,
    dietaryTags: ['Vegan', 'Gluten-Free', 'Appetizer'],
    course: 'Appetizer',
    ingredients: [
      { name: 'Fresh Spinach Leaves', amount: 500, unit: 'g', category: 'Vegetable' },
      { name: 'Red Beets (boiled & peeled)', amount: 400, unit: 'g', category: 'Vegetable' },
      { name: 'Shelled Walnuts', amount: 300, unit: 'g', category: 'Nuts' },
      { name: 'Garlic Cloves', amount: 6, unit: 'cloves', category: 'Aromatics' },
      { name: 'Fresh Cilantro', amount: 60, unit: 'g', category: 'Herbs' },
      { name: 'Ground Blue Fenugreek', amount: 6, unit: 'g', category: 'Spices' },
      { name: 'Ground Coriander', amount: 6, unit: 'g', category: 'Spices' },
      { name: 'White Wine Vinegar', amount: 30, unit: 'ml', category: 'Acid' },
      { name: 'Fresh Pomegranate Seeds', amount: 60, unit: 'g', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Blanch Spinach and Drain',
        instruction: 'Blanch spinach in boiling water for 90 seconds. Shock in ice water, then squeeze in a clean kitchen towel until completely dry.',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Process Base Paste',
        instruction: 'In a food processor, pulse walnuts, garlic, cilantro, fenugreek, coriander, salt, and vinegar until a fine, moist paste forms. Divide into two bowls.',
        durationMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Mix Spinach Pkhali',
        instruction: 'Finely chop the squeezed spinach and fold into the first bowl of walnut paste until emerald green and uniform.',
        durationMinutes: 5
      },
      {
        stepNumber: 4,
        title: 'Mix Beetroot Pkhali',
        instruction: 'Grate cooked beets finely and fold into the second bowl of walnut paste, yielding a radiant magenta pâté.',
        durationMinutes: 5
      },
      {
        stepNumber: 5,
        title: 'Shape and Garnish',
        instruction: 'Roll into 4cm balls or oval quenelles. Press a shallow thumbprint in the center of each and nestle fresh pomegranate seeds inside.',
        durationMinutes: 10
      }
    ],
    funFact: 'Pkhali embodies the Georgian aesthetic of "Supra" — converting everyday garden vegetables into works of celebratory art.',
    servingNotes: 'Serve chilled on a vintage ceramic platter with warm flatbreads.'
  },
  {
    id: 'geo-badrijani',
    countryId: 'georgia',
    title: 'Badrijani Nigvzit (Walnut Stuffed Eggplant)',
    nativeTitle: 'ბადრიჯანი ნიგვზით',
    description: 'Tender pan-fried ribbons of eggplant rolled around a rich, creamy paste of spiced garlic walnuts, finished with tart pomegranate seeds.',
    image: AUTHENTIC_IMAGES.badrijani,
    prepTimeMinutes: 25,
    cookTimeMinutes: 20,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 310,
    dietaryTags: ['Vegan', 'Gluten-Free', 'Cold Appetizer'],
    course: 'Appetizer',
    ingredients: [
      { name: 'Firm Medium Eggplants', amount: 3, unit: 'pcs', category: 'Vegetable' },
      { name: 'Shelled Walnuts', amount: 200, unit: 'g', category: 'Nuts' },
      { name: 'Garlic Cloves', amount: 4, unit: 'cloves', category: 'Aromatics' },
      { name: 'White Wine Vinegar', amount: 20, unit: 'ml', category: 'Acid' },
      { name: 'Warm Water', amount: 40, unit: 'ml', category: 'Liquid' },
      { name: 'Blue Fenugreek and Marigold', amount: 5, unit: 'g', category: 'Spices' },
      { name: 'Sunflower Oil for frying', amount: 60, unit: 'ml', category: 'Fat' },
      { name: 'Pomegranate Arils', amount: 40, unit: 'g', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Slice and Salt Eggplant',
        instruction: 'Slice eggplants lengthwise into 5mm thick ribbons. Sprinkle with salt and rest 20 minutes to draw out moisture and bitterness. Pat completely dry with paper towels.',
        durationMinutes: 20
      },
      {
        stepNumber: 2,
        title: 'Pan-Sear Ribbons',
        instruction: 'Heat sunflower oil in a wide skillet over medium heat. Fry eggplant strips in batches for 3-4 minutes per side until tender and golden brown. Drain on wire rack.',
        durationMinutes: 15
      },
      {
        stepNumber: 3,
        title: 'Blend Walnut Filling',
        instruction: 'Pulse walnuts, garlic, spices, vinegar, and warm water in a food processor until it reaches the consistency of smooth hummus.',
        durationMinutes: 5
      },
      {
        stepNumber: 4,
        title: 'Roll and Chill',
        instruction: 'Spread a heaping tablespoon of walnut paste down the length of each eggplant strip. Roll up tightly into cylinders. Chill for 1 hour before serving.',
        durationMinutes: 10
      }
    ],
    funFact: 'This is the most ubiquitous appetizer across Tbilisi wine bars and traditional supra celebrations.',
    servingNotes: 'Serve chilled, decorated with ruby pomegranate arils.'
  },
  {
    id: 'geo-chashushuli',
    countryId: 'georgia',
    title: 'Chashushuli (Spiced Beef Stew)',
    nativeTitle: 'ჩაშუშული',
    description: 'Slow-braised beef chunks stewed in their own juices with ripe crushed tomatoes, onions, garlic, fresh purple basil, and fiery hot peppers.',
    image: AUTHENTIC_IMAGES.chashushuli,
    prepTimeMinutes: 20,
    cookTimeMinutes: 65,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 460,
    dietaryTags: ['High-Protein', 'Hearty Stew', 'Gluten-Free'],
    course: 'Main',
    ingredients: [
      { name: 'Beef Chuck or Shank (cut in 3cm cubes)', amount: 800, unit: 'g', category: 'Meat' },
      { name: 'Ripe Plum Tomatoes (grated)', amount: 500, unit: 'g', category: 'Vegetable' },
      { name: 'Sweet Yellow Onions (finely sliced)', amount: 350, unit: 'g', category: 'Aromatics' },
      { name: 'Garlic Cloves (minced)', amount: 5, unit: 'cloves', category: 'Aromatics' },
      { name: 'Georgian Ajika Paste or Chili Flakes', amount: 15, unit: 'g', category: 'Spices' },
      { name: 'Ground Blue Fenugreek & Marigold', amount: 6, unit: 'g', category: 'Spices' },
      { name: 'Fresh Purple Basil & Cilantro', amount: 40, unit: 'g', category: 'Herbs' },
      { name: 'Dry White Wine', amount: 100, unit: 'ml', category: 'Liquid' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Sweat Beef in Own Juices',
        instruction: 'Place beef cubes into a deep heavy casserole with 2 tbsp water. Cover tightly and cook on medium-low for 25 minutes, letting the beef release and simmer in its rich juices.',
        durationMinutes: 25
      },
      {
        stepNumber: 2,
        title: 'Add Onions and Wine',
        instruction: 'Uncover, add 2 tbsp butter and sliced onions. Sauté with beef until onions soften and beef begins to brown. Deglaze with 100ml dry white wine.',
        durationMinutes: 12
      },
      {
        stepNumber: 3,
        title: 'Simmer in Tomatoes & Spices',
        instruction: 'Pour in grated fresh tomatoes, minced garlic, ajika paste, blue fenugreek, and marigold. Cover and simmer gently for 30 minutes until beef is meltingly tender.',
        durationMinutes: 30
      },
      {
        stepNumber: 4,
        title: 'Herb Infusion',
        instruction: 'Stir in chopped purple basil and cilantro. Let rest off the heat for 5 minutes before serving.',
        durationMinutes: 5
      }
    ],
    funFact: 'The name comes from the Georgian verb "chashushva", which means to braise or stew slowly in its own savory steam.',
    servingNotes: 'Serve in rustic earthenware bowls with plenty of bread to mop up the tomato sauce.'
  },
  {
    id: 'geo-mtsvadi',
    countryId: 'georgia',
    title: 'Kakhetian Mtsvadi (Vine-Wood Pork Skewers)',
    nativeTitle: 'მწვადი',
    description: 'Tender cubes of pork tenderloin skewered on iron swords and grilled over dried grape vine embers, tossed with fresh raw onions and sour pomegranate juice.',
    image: AUTHENTIC_IMAGES.mtsvadi,
    prepTimeMinutes: 15,
    cookTimeMinutes: 18,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 490,
    dietaryTags: ['High-Protein', 'Gluten-Free', 'Grilled'],
    course: 'Main',
    ingredients: [
      { name: 'Pork Neck or Shoulder (cut into 4cm cubes)', amount: 1000, unit: 'g', category: 'Meat' },
      { name: 'Coarse Sea Salt', amount: 15, unit: 'g', category: 'Seasoning' },
      { name: 'Thinly Sliced Red Onions', amount: 200, unit: 'g', category: 'Garnish' },
      { name: 'Fresh Tart Pomegranate Juice', amount: 60, unit: 'ml', category: 'Toss' },
      { name: 'Fresh Ground Sumac', amount: 10, unit: 'g', category: 'Spices' },
      { name: 'Fresh Lavash Bread', amount: 4, unit: 'pcs', category: 'Serving' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Prepare Meat',
        instruction: 'Traditional Kakhetian mtsvadi is not marinated in advance. Season freshly cut pork cubes thoroughly with coarse sea salt right before skewering.',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Grill Over Charcoal or Grape Vines',
        instruction: 'Thread meat tightly onto flat steel skewers. Grill over glowing embers (traditionally dried grape vines) for 15-18 minutes, rotating frequently until caramelized and smoky.',
        durationMinutes: 18,
        temperature: 'Medium-High Embers'
      },
      {
        stepNumber: 3,
        title: 'The Pot Toss Ritual',
        instruction: 'Line a deep pot with sliced raw onions, pomegranate juice, and sumac. Use a sheet of lavash bread to grasp the skewer and strip the sizzling hot meat directly into the pot. Cover and shake vigorously for 2 minutes to steep the meat in onion steam.',
        durationMinutes: 5
      }
    ],
    funFact: 'Kakheti, Georgia’s premier wine region, uses pruned grapevine wood ("tsalami") which burns with a sweet, aromatic heat perfect for pork.',
    servingNotes: 'Serve wrapped in thin lavash with tkemali plum sauce and Kakhetian amber wine.'
  },
  {
    id: 'geo-ajapsandali',
    countryId: 'georgia',
    title: 'Ajapsandali (Summer Vegetable Medley)',
    nativeTitle: 'აჯაფსანდალი',
    description: 'A comforting, silky summer stew of roasted eggplant, sweet bell peppers, ripe tomatoes, onions, garlic, and an explosion of fresh coriander and basil.',
    image: AUTHENTIC_IMAGES.ajapsandali,
    prepTimeMinutes: 25,
    cookTimeMinutes: 35,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 220,
    dietaryTags: ['Vegan', 'Gluten-Free', 'Healthy'],
    course: 'Main',
    ingredients: [
      { name: 'Medium Eggplants (cubed)', amount: 600, unit: 'g', category: 'Vegetable' },
      { name: 'Red & Green Bell Peppers (sliced)', amount: 400, unit: 'g', category: 'Vegetable' },
      { name: 'Ripe Heirloom Tomatoes (chopped)', amount: 500, unit: 'g', category: 'Vegetable' },
      { name: 'Yellow Onions (sliced)', amount: 250, unit: 'g', category: 'Aromatics' },
      { name: 'Garlic Cloves (minced)', amount: 5, unit: 'cloves', category: 'Aromatics' },
      { name: 'Fresh Purple Basil and Cilantro', amount: 50, unit: 'g', category: 'Herbs' },
      { name: 'Sunflower Oil', amount: 50, unit: 'ml', category: 'Fat' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Sauté Eggplant Separately',
        instruction: 'Sauté cubed eggplant in sunflower oil until tender and browned. Transfer to a bowl to avoid turning mushy.',
        durationMinutes: 12
      },
      {
        stepNumber: 2,
        title: 'Sauté Aromatics and Peppers',
        instruction: 'In the same pan, cook sliced onions and bell peppers for 10 minutes until soft and fragrant.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Simmer with Tomatoes',
        instruction: 'Add chopped tomatoes and minced garlic. Simmer for 15 minutes until a sweet, velvety sauce forms. Return the sautéed eggplant to the pan.',
        durationMinutes: 15
      },
      {
        stepNumber: 4,
        title: 'Herb Finish',
        instruction: 'Turn off heat, fold in generous amounts of purple basil and cilantro. Serve warm or cold.',
        durationMinutes: 5
      }
    ],
    funFact: 'Equally popular across the South Caucasus, every Georgian family holds their own treasured grandmother’s recipe.',
    servingNotes: 'Delicious eaten warm as a main dish or chilled the next day with crusty bread.'
  },
  {
    id: 'geo-kharcho',
    countryId: 'georgia',
    title: 'Kharcho (Beef & Walnut Rice Soup)',
    nativeTitle: 'ხარჩო',
    description: 'Hearty, warming Georgian soup made with slow-simmered beef, round rice, crushed walnuts, and sour tkemali plum puree spiced with blue fenugreek.',
    image: AUTHENTIC_IMAGES.kharcho,
    prepTimeMinutes: 20,
    cookTimeMinutes: 75,
    servings: 6,
    difficulty: 'Medium',
    caloriesPerServing: 420,
    dietaryTags: ['Soup', 'Comfort Food', 'High-Protein'],
    course: 'Soup',
    ingredients: [
      { name: 'Beef Short Ribs or Chuck', amount: 800, unit: 'g', category: 'Meat' },
      { name: 'Short Grain Round Rice', amount: 100, unit: 'g', category: 'Grain' },
      { name: 'Shelled Walnuts (finely ground)', amount: 150, unit: 'g', category: 'Nuts' },
      { name: 'Sour Plum Tkemali Sauce or Puree', amount: 70, unit: 'g', category: 'Acid' },
      { name: 'Tomato Paste', amount: 30, unit: 'g', category: 'Base' },
      { name: 'Yellow Onions (minced)', amount: 200, unit: 'g', category: 'Aromatics' },
      { name: 'Garlic Cloves (crushed)', amount: 6, unit: 'cloves', category: 'Aromatics' },
      { name: 'Khmeli Suneli Spice Blend', amount: 8, unit: 'g', category: 'Spices' },
      { name: 'Fresh Cilantro and Parsley', amount: 40, unit: 'g', category: 'Herbs' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Simmer Beef Broth',
        instruction: 'Cover beef ribs with 2.2L cold water. Bring to a gentle boil, skim foam, and simmer gently for 60 minutes until beef pulls tender.',
        durationMinutes: 60
      },
      {
        stepNumber: 2,
        title: 'Add Rice and Aromatics',
        instruction: 'Add rinsed rice, sautéed onions, and tomato paste to the pot. Cook for 12 minutes until rice is tender.',
        durationMinutes: 12
      },
      {
        stepNumber: 3,
        title: 'Incorporate Walnuts and Plum Sourness',
        instruction: 'Whisk ground walnuts with 150ml warm broth and tkemali plum puree until smooth. Stir into the soup alongside khmeli suneli spices and crushed garlic.',
        durationMinutes: 8
      },
      {
        stepNumber: 4,
        title: 'Final Herb Simmer',
        instruction: 'Simmer for 5 minutes. Stir in chopped fresh cilantro and parsley, then rest 10 minutes before ladling.',
        durationMinutes: 10
      }
    ],
    funFact: 'Kharcho is renowned across the Caucasus as the ultimate cure for cold winter days and festive morning recoveries.',
    servingNotes: 'Ladle into deep ceramic bowls and serve piping hot with crusty shoti bread.'
  },
  {
    id: 'geo-elarji',
    countryId: 'georgia',
    title: 'Samegrelo Elarji (Cornmeal Cheese Fondue)',
    nativeTitle: 'ელარჯი',
    description: 'A hypnotic, stretchy cornmeal porridge churned with copious amounts of fresh Sulguni cheese until it forms silky, elastic golden ribbons.',
    image: AUTHENTIC_IMAGES.elarji,
    prepTimeMinutes: 15,
    cookTimeMinutes: 40,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 510,
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'Megrelian Special'],
    course: 'Main',
    ingredients: [
      { name: 'Coarse White Cornmeal', amount: 250, unit: 'g', category: 'Grain' },
      { name: 'Fine Corn Flour', amount: 80, unit: 'g', category: 'Grain' },
      { name: 'Cold Water', amount: 1000, unit: 'ml', category: 'Liquid' },
      { name: 'Fresh Sulguni Cheese (sliced thin)', amount: 500, unit: 'g', category: 'Cheese' },
      { name: 'Unsalted Butter', amount: 30, unit: 'g', category: 'Fat' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Cook Coarse Cornmeal',
        instruction: 'Whisk coarse cornmeal into cold water in a heavy cast-iron pot. Cook on low heat, stirring continuously with a wooden paddle for 25 minutes until thick.',
        durationMinutes: 25
      },
      {
        stepNumber: 2,
        title: 'Incorporate Fine Corn Flour',
        instruction: 'Sprinkle fine corn flour over the porridge while vigorously beating to prevent lumps. Cook 10 more minutes until glossy and smooth.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Churn the Sulguni Ribbons',
        instruction: 'Add sliced Sulguni cheese. Beat and stretch vigorously with the wooden paddle until the cheese melts completely and pulls up in long, continuous, glossy elastic sheets.',
        durationMinutes: 8,
        chefTip: 'The dish is ready when you can lift the paddle and stretch cheese ribbons 2 feet above the pot without breaking.'
      }
    ],
    funFact: 'In Samegrelo, a bride’s skill was historically judged by her ability to stretch Elarji with grace and strength.',
    servingNotes: 'Serve immediately on warm plates, traditionally paired with spiced Bazhe walnut sauce.'
  },
  {
    id: 'geo-khachapuri-megruli',
    countryId: 'georgia',
    title: 'Megrelian Khachapuri',
    titleKa: 'მეგრული ხაჭაპური',
    nativeTitle: 'მეგრული ხაჭაპური',
    description: 'Round golden cheese bread with a double layer of Sulguni cheese — stuffed with rich cheese filling and crusted on top with blistering, golden-browned melted Sulguni.',
    descriptionKa: 'მრგვალი, ორმაგყველიანი ხაჭაპური — შიგნით ნაზი იმერული ყველითა და სულგუნით, ხოლო ზემოდან დაბრაწული, მბზინავი სულგუნის ხრაშუნა ქერქით.',
    image: AUTHENTIC_IMAGES.megruliKhachapuri,
    prepTimeMinutes: 40,
    cookTimeMinutes: 18,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 640,
    dietaryTags: ['Vegetarian', 'Comfort Food', 'Iconic'],
    course: 'Bakery',
    ingredients: [
      { name: 'All-Purpose Flour', nameKa: 'ხორბლის ფქვილი', amount: 500, unit: 'g', category: 'Dough' },
      { name: 'Warm Milk', nameKa: 'თბილი რძე', amount: 200, unit: 'ml', category: 'Dough' },
      { name: 'Warm Water', nameKa: 'თბილი წყალი', amount: 100, unit: 'ml', category: 'Dough' },
      { name: 'Active Dry Yeast', nameKa: 'საფუარი', amount: 7, unit: 'g', category: 'Dough' },
      { name: 'Granulated Sugar', nameKa: 'შაქარი', amount: 5, unit: 'g', category: 'Dough' },
      { name: 'Fine Sea Salt', nameKa: 'მარილი', amount: 8, unit: 'g', category: 'Dough' },
      { name: 'Sunflower Oil', nameKa: 'ზეთი', amount: 30, unit: 'ml', category: 'Dough' },
      { name: 'Sulguni Cheese (coarsely grated for inside & topping)', nameKa: 'სულგუნი (გახეხილი)', amount: 600, unit: 'g', category: 'Filling' },
      { name: 'Imeretian Cheese (or Mozzarella blend)', nameKa: 'იმერული ყველი', amount: 300, unit: 'g', category: 'Filling' },
      { name: 'Egg Yolk (for glazing)', nameKa: 'კვერცხის გული', amount: 1, unit: 'pcs', category: 'Topping' },
      { name: 'Unsalted Butter', nameKa: 'კარაქი', amount: 40, unit: 'g', category: 'Topping' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Knead and Proof the Yeast Dough',
        titleKa: 'საფუვრიანი ცომის მოზელა და აფუება',
        instruction: 'Combine warm milk, water, sugar, and yeast. Whisk and leave for 10 minutes until foamy. Add flour, salt, and oil, kneading into a soft, elastic dough. Cover and let double in volume for 1 hour.',
        instructionKa: 'თბილ რძეში, წყალში, შაქარსა და საფუარში გახსენით ნარევი და დააყოვნეთ 10 წუთი. შეურიეთ ფქვილი, მარილი და ზეთი, მოზილეთ ნაზი ცომი და დააფარეთ 1 საათით ასაფუებლად.',
        durationMinutes: 60
      },
      {
        stepNumber: 2,
        title: 'Prepare the Double Cheese Blend',
        titleKa: 'ორმაგი ყველის გულსართის მომზადება',
        instruction: 'Mix grated Sulguni and crumbled Imeretian cheese. Set aside 1/3 of the Sulguni for the top crust and shape the remaining cheese into a firm ball.',
        instructionKa: 'შეურიეთ გახეხილი სულგუნი და იმერული ყველი. 1/3 სულგუნი გადაინახეთ ზემოდან მოსაყრელად, დანარჩენი კი შეკარით ბურთულად.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Encase Cheese and Roll Out',
        titleKa: 'ყველის ჩადება და გაბრტყელება',
        instruction: 'Roll dough into a disc. Place the cheese ball in the center, gather dough edges around it like a purse, pinch tightly shut, flip seam-down, and gently roll into a flat 28cm circle.',
        instructionKa: 'გააბრტყელეთ ცომი, ცენტრში ჩადეთ ყველის ბურთი, მოუკარით პირი ხინკალივით, გადმოაბრუნეთ და ნაზად გააბრტყელეთ 28 სმ დიამეტრის წრედ.',
        durationMinutes: 10
      },
      {
        stepNumber: 4,
        title: 'Glaze and Top with Sulguni Crust',
        titleKa: 'კვერცხის გადასმა და სულგუნის მოყრა',
        instruction: 'Brush top with beaten egg yolk. Poke a tiny steam vent in center. Generously scatter the reserved Sulguni cheese over the entire surface right to the rim.',
        instructionKa: 'ზედაპირს გადაუსვით კვერცხის გული, ცენტრში გაუკეთეთ პატარა ნახვრეტი ორთქლისთვის და მთელ ზედაპირზე უხვად მოაყარეთ გადანახული სულგუნი.',
        durationMinutes: 5
      },
      {
        stepNumber: 5,
        title: 'High-Heat Golden Bake',
        titleKa: 'გამოცხობა ცხელ ღუმელში',
        instruction: 'Bake at 240°C (465°F) for 15-18 minutes until the top cheese forms bubbling, deep golden-brown blisters. Brush hot crust with melted butter and slice into wedges.',
        instructionKa: 'გამოაცხვეთ 240°C-ზე 15-18 წუთი, სანამ ზედა ყველი ოქროსფრად არ დაიბრაწება და არ აბუშტუკდება. წაუსვით კარაქი და დაჭერით სამკუთხედებად.',
        durationMinutes: 18,
        temperature: '240°C / 465°F'
      }
    ],
    funFact: 'In Samegrelo, khachapuri is celebrated as an art form — the addition of cheese directly on top makes it uniquely decadent compared to other regional styles.',
    servingNotes: 'Serve piping hot right out of the oven with crisp Megrelian dry white wine.'
  },
  {
    id: 'geo-lobiani',
    countryId: 'georgia',
    title: 'Rachan Lobiani',
    titleKa: 'რაჭული ლობიანი',
    nativeTitle: 'რაჭული ლობიანი',
    description: 'Crispy, paper-flaky golden flatbread filled with seasoned mashed red beans cooked with Rachan smoked ham (Lori), savory herbs, and cracked black pepper.',
    descriptionKa: 'რაჭული ტრადიციული ცომეული, დატენილი ნაზად შეზავებული მოხარშული წითელი ლობიოთი, რაჭული ლორითა და სურნელოვანი სანელებლებით.',
    image: AUTHENTIC_IMAGES.lobiani,
    prepTimeMinutes: 45,
    cookTimeMinutes: 25,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 520,
    dietaryTags: ['Comfort Food', 'Iconic', 'Traditional'],
    course: 'Bakery',
    ingredients: [
      { name: 'Dried Red Kidney Beans', nameKa: 'წითელი ლობიო', amount: 400, unit: 'g', category: 'Filling' },
      { name: 'Rachan Smoked Ham or Bacon (Lori)', nameKa: 'რაჭული ლორი', amount: 150, unit: 'g', category: 'Filling' },
      { name: 'Yellow Onions (finely chopped)', nameKa: 'ხახვი', amount: 2, unit: 'pcs', category: 'Filling' },
      { name: 'Ground Blue Fenugreek', nameKa: 'უცხო სუნელი', amount: 5, unit: 'g', category: 'Spices' },
      { name: 'Ground Dried Coriander', nameKa: 'ქინძის თესლი', amount: 5, unit: 'g', category: 'Spices' },
      { name: 'Freshly Ground Black Pepper', nameKa: 'შავი პილპილი', amount: 6, unit: 'g', category: 'Spices' },
      { name: 'All-Purpose Flour', nameKa: 'პურის ფქვილი', amount: 500, unit: 'g', category: 'Dough' },
      { name: 'Active Dry Yeast', nameKa: 'საფუარი', amount: 7, unit: 'g', category: 'Dough' },
      { name: 'Warm Water', nameKa: 'თბილი წყალი', amount: 300, unit: 'ml', category: 'Dough' },
      { name: 'Butter (for brushing)', nameKa: 'კარაქი', amount: 50, unit: 'g', category: 'Topping' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Cook Beans with Smoked Ham',
        titleKa: 'ლობიოსა და ლორის მოხარშვა',
        instruction: 'Soak beans overnight. Boil with Rachan smoked ham in water for 1.5 hours until beans are tender and have absorbed rich smoky flavor.',
        instructionKa: 'ლობიო ჩაალბეთ წინა ღამით. მოხარშეთ რაჭულ ლორთან ერთად 1.5 საათი, სანამ ლობიო სრულად არ დარბილდება და შებოლილ არომატს არ შეიწოვს.',
        durationMinutes: 90
      },
      {
        stepNumber: 2,
        title: 'Mash and Season Filling',
        titleKa: 'შიგთავსის ჩაზელა და შეზავება',
        instruction: 'Sauté onions in ham fat or butter. Mash beans coarsely with cooked ham bits, sautéed onion, blue fenugreek, coriander, black pepper, and salt into a smooth, fragrant paste.',
        instructionKa: 'მოშუშეთ ხახვი კარაქში. ჩაზილეთ მოხარშული ლობიო ლორის ნაჭრებთან, ხახვთან, უცხო სუნელთან, ქინძის თესლთან და პილპილთან ერთად ერთგვაროვან გულსართად.',
        durationMinutes: 15
      },
      {
        stepNumber: 3,
        title: 'Shape Dough and Envelop Filling',
        titleKa: 'ცომის გაბრტყელება და ლობიოს შეხვევა',
        instruction: 'Roll proofed yeast dough into a circle. Place a ball of spiced bean puree in the center. Pinch dough closed over the filling and roll flat to 1.5cm thickness.',
        instructionKa: 'გააბრტყელეთ აფუებული ცომი, ცენტრში ჩადეთ ლობიოს გულსართი, მოუკარით თავი და ნაზად გააბრტყელეთ 1.5 სმ სისქის დისკოდ.',
        durationMinutes: 10
      },
      {
        stepNumber: 4,
        title: 'Bake to a Golden Crisp',
        titleKa: 'გამოცხობა და კარაქის წასმა',
        instruction: 'Bake in preheated oven at 230°C (450°F) or in dry skillet for 12-15 minutes until blistered and golden. Immediately lavish with melted butter while piping hot.',
        instructionKa: 'გამოაცხვეთ 230°C-ზე 12-15 წუთი ოქროსფერ დაბრაწვამდე. გამოღებისთანავე უხვად გადაუსვით გამდნარი კარაქი.',
        durationMinutes: 15,
        temperature: '230°C / 450°F'
      }
    ],
    funFact: 'In Racha, traditional Lobiani is celebrated during St. Barbara’s Day (Barbaroba) as a cherished sacred staple.',
    servingNotes: 'Serve hot with Georgian sour pickled green peppers and Jonjoli.'
  },
  {
    id: 'geo-gurian-pie',
    countryId: 'georgia',
    title: 'Gurian Christmas Pie',
    titleKa: 'გურული საშობაო ღვეზელი',
    nativeTitle: 'გურული ღვეზელი',
    description: 'Traditional crescent-shaped savory feast pastry stuffed with fresh salted cheese and whole halved hard-boiled farm eggs, symbolizing renewed life and celebration.',
    descriptionKa: 'ნახევარმთვარის ფორმის საფუვრიანი ღვეზელი, ამოვსებული ჭყინტი ყველითა და შუაზე გაჭრილი მოხარშული კვერცხებით.',
    image: AUTHENTIC_IMAGES.gurianPie,
    prepTimeMinutes: 40,
    cookTimeMinutes: 20,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 490,
    dietaryTags: ['Vegetarian', 'Comfort Food', 'Traditional'],
    course: 'Bakery',
    ingredients: [
      { name: 'All-Purpose Wheat Flour', nameKa: 'პურის ფქვილი', amount: 450, unit: 'g', category: 'Dough' },
      { name: 'Warm Milk', nameKa: 'თბილი რძე', amount: 150, unit: 'ml', category: 'Dough' },
      { name: 'Warm Water', nameKa: 'თბილი წყალი', amount: 100, unit: 'ml', category: 'Dough' },
      { name: 'Active Dry Yeast', nameKa: 'საფუარი', amount: 7, unit: 'g', category: 'Dough' },
      { name: 'Fine Salt', nameKa: 'წვრილი მარილი', amount: 6, unit: 'g', category: 'Dough' },
      { name: 'Granulated Sugar', nameKa: 'შაქარი', amount: 6, unit: 'g', category: 'Dough' },
      { name: 'Imeretian Cheese', nameKa: 'იმერული ყველი', amount: 200, unit: 'g', category: 'Filling' },
      { name: 'Sulguni Cheese', nameKa: 'სულგუნი', amount: 200, unit: 'g', category: 'Filling' },
      { name: 'Hard-Boiled Eggs (halved lengthwise)', nameKa: 'მოხარშული კვერცხი', amount: 4, unit: 'pcs', category: 'Filling' },
      { name: 'Butter', nameKa: 'კარაქი', amount: 40, unit: 'g', category: 'Topping' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Prepare Tender Yeast Dough',
        titleKa: 'საფუვრიანი ცომის მომზადება',
        instruction: 'Knead flour with warm yeast-milk liquid into a supple dough. Rest in warm place for 50 minutes until doubled in size.',
        instructionKa: 'მოზილეთ რბილი, ელასტიური ცომი და დაასვენეთ 50 წუთი თბილ ადგილას ასაფუებლად.',
        durationMinutes: 50
      },
      {
        stepNumber: 2,
        title: 'Crescent Moon Assembly',
        titleKa: 'ნახევარმთვარის ფორმირება',
        instruction: 'Roll dough into an oval. Layer crumbled fresh cheese along one half. Place halved boiled eggs on top of cheese. Fold top dough over and tightly pinch into a curved crescent moon shape.',
        instructionKa: 'ცომი გააბრტყელეთ ოვალურად. ერთ ნახევარზე დააფინეთ დაფშხვნილი ყველი, ზემოდან დააწყვეთ შუაზე გაჭრილი მოხარშული კვერცხები, გადმოაფარეთ მეორე ნახევარი და მჭიდროდ შემოუკეცეთ ნახევარმთვარის ფორმით.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Golden Hearth Bake',
        titleKa: 'ოქროსფრად გამოცხობა',
        instruction: 'Brush with egg yolk and bake at 210°C (410°F) for 18-20 minutes until gleaming and deep golden. Brush with melted butter upon removal.',
        instructionKa: 'გადაუსვით კვერცხის გული და გამოაცხვეთ 210°C-ზე 18-20 წუთი მბზინავ ოქროსფერ ქერქამდე. ცხელს გადაუსვით კარაქი.',
        durationMinutes: 20,
        temperature: '210°C / 410°F'
      }
    ],
    funFact: 'In Guria, these crescent pies (Kvenchi) are traditionally baked on Christmas Eve, with one pie prepared for each member of the family as an amulet of protection.',
    servingNotes: 'Serve fresh and warm on Christmas morning with fragrant black tea or young Gurian Chkhaveri wine.'
  }
];
