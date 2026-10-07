
export const USA_RECIPES = [
  {
    id: 'usa-texas-brisket',
    countryId: 'usa',
    title: 'Central Texas Smoked Beef Brisket',
    nativeTitle: 'Hill Country Texas Brisket',
    description: 'Tender, peppery beef brisket with a crunchy obsidian bark and buttery, melting fat, smoked low and slow over post oak wood.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Brisketphoto.jpg/960px-Brisketphoto.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 30,
    cookTimeMinutes: 720,
    servings: 12,
    difficulty: 'Hard',
    caloriesPerServing: 650,
    dietaryTags: ['High-Protein', 'BBQ Legend', 'Keto-Friendly'],
    course: 'Main',
    ingredients: [
      { name: 'Whole Packer Beef Brisket (Prime grade)', amount: 5500, unit: 'g', category: 'Meat' },
      { name: 'Coarse 16-Mesh Black Pepper', amount: 90, unit: 'g', category: 'Rub' },
      { name: 'Coarse Kosher Salt', amount: 80, unit: 'g', category: 'Rub' },
      { name: 'Granulated Garlic', amount: 15, unit: 'g', category: 'Rub' },
      { name: 'Apple Cider Vinegar & Water (50/50 spritz)', amount: 250, unit: 'ml', category: 'Spritz' },
      { name: 'Rendered Beef Tallow', amount: 60, unit: 'g', category: 'Wrap' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Aerodynamic Trim',
        instruction: 'Trim fat cap to a uniform 6mm thickness. Round off blunt corners and slice away hard deckle fat so smoke flows smoothly over the meat surface.',
        durationMinutes: 25
      },
      {
        stepNumber: 2,
        title: 'Dalmatian Rub',
        instruction: 'Mix coarse 16-mesh black pepper, kosher salt, and garlic. Coat brisket uniformly on all sides, pressing gently to adhere without slather.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Smoke over Post Oak',
        instruction: 'Maintain smoker at 110°C (230°F). Smoke fat-side up for 6-8 hours until a jet-black mahogany bark is firmly set and meat reaches ~75°C (165°F). Spritz with cider vinegar after hour 3.',
        durationMinutes: 420,
        temperature: '110°C / 230°F'
      },
      {
        stepNumber: 4,
        title: 'The Texas Crutch (Peach Butcher Paper)',
        instruction: 'Smear butcher paper with beef tallow. Wrap brisket tightly like a package. Return to smoker at 120°C (250°F) until internal temperature registers 95°C (203°F) and a probe slides in like warm butter.',
        durationMinutes: 240,
        temperature: '120°C / 250°F'
      },
      {
        stepNumber: 5,
        title: 'Crucial Extended Rest',
        instruction: 'Rest brisket in an insulated cooler wrapped in towels for a minimum of 2 hours before slicing pencil-thick across the grain.',
        durationMinutes: 120
      }
    ],
    funFact: 'Central Texas barbecue requires no sauce — the true flavor comes strictly from meat quality, pepper, salt, oak smoke, and patience.',
    servingNotes: 'Serve with dill pickles, raw white onions, sliced jalapeños, and white bread.'
  },
  {
    id: 'usa-clam-chowder',
    countryId: 'usa',
    title: 'New England Clam Chowder',
    nativeTitle: 'Boston Clam Chowder',
    description: 'Thick, creamy coastal chowder packed with sweet sea clams, smoky salt pork, tender Russet potato cubes, and fresh thyme.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Cup_of_clam_chowder%2C_with_saltines.jpg/960px-Cup_of_clam_chowder%2C_with_saltines.jpg',
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    servings: 6,
    difficulty: 'Easy',
    caloriesPerServing: 420,
    dietaryTags: ['Seafood', 'Comfort Food', 'Classic'],
    course: 'Soup',
    ingredients: [
      { name: 'Fresh Littleneck Clams (steamed) or Clam Meat', amount: 500, unit: 'g', category: 'Seafood' },
      { name: 'Clam Liquor / Broth', amount: 600, unit: 'ml', category: 'Liquid' },
      { name: 'Smoked Salt Pork or Thick Bacon (diced)', amount: 120, unit: 'g', category: 'Fat' },
      { name: 'Russet Potatoes (peeled & 1cm diced)', amount: 450, unit: 'g', category: 'Vegetable' },
      { name: 'Yellow Onion (finely diced)', amount: 180, unit: 'g', category: 'Aromatics' },
      { name: 'Celery Ribs (finely diced)', amount: 100, unit: 'g', category: 'Aromatics' },
      { name: 'All-Purpose Flour', amount: 35, unit: 'g', category: 'Thickener' },
      { name: 'Heavy Cream', amount: 300, unit: 'ml', category: 'Dairy' },
      { name: 'Fresh Thyme Leaves', amount: 5, unit: 'g', category: 'Herbs' },
      { name: 'Oyster Crackers for serving', amount: 100, unit: 'g', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Render Bacon',
        instruction: 'In a heavy pot, render diced bacon over medium-low heat until golden and crispy, about 8 minutes. Remove bacon bits, leaving 2 tbsp fat.',
        durationMinutes: 8
      },
      {
        stepNumber: 2,
        title: 'Sweat Aromatics & Make Roux',
        instruction: 'Add diced onion and celery to the fat. Cook 5 minutes until soft. Stir in 35g flour and cook for 2 minutes to eliminate raw flour taste.',
        durationMinutes: 7
      },
      {
        stepNumber: 3,
        title: 'Simmer Potatoes in Clam Liquor',
        instruction: 'Whisk in clam liquor and bring to a simmer. Add diced potatoes and fresh thyme. Simmer 12 minutes until potatoes are fork-tender.',
        durationMinutes: 12
      },
      {
        stepNumber: 4,
        title: 'Cream & Clam Finish',
        instruction: 'Pour in heavy cream and chopped clam meat. Bring to a gentle bare simmer for 3 minutes (do not boil hard or clams toughen). Stir in reserved crispy bacon bits.',
        durationMinutes: 5
      }
    ],
    funFact: 'New Englanders take chowder so seriously that in 1939, a Maine politician proposed a bill strictly outlawing the use of tomatoes in clam chowder!',
    servingNotes: 'Serve hot with oyster crackers and a dash of Tabasco.'
  },
  {
    id: 'usa-fried-chicken',
    countryId: 'usa',
    title: 'Southern Buttermilk Fried Chicken',
    nativeTitle: 'Crispy Southern Fried Chicken',
    description: 'Golden, jagged extra-crispy crust encasing juicy, buttermilk-brined chicken seasoned with paprika, cayenne, garlic, and herbs.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Fried-Chicken-Set.jpg/960px-Fried-Chicken-Set.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 30,
    cookTimeMinutes: 25,
    servings: 6,
    difficulty: 'Medium',
    caloriesPerServing: 590,
    dietaryTags: ['High-Protein', 'Crispy', 'Iconic Comfort'],
    course: 'Main',
    ingredients: [
      { name: 'Bone-in, Skin-on Chicken Thighs & Drumsticks', amount: 1200, unit: 'g', category: 'Poultry' },
      { name: 'Full-Fat Buttermilk', amount: 500, unit: 'ml', category: 'Brine' },
      { name: 'Louisiana Hot Sauce', amount: 30, unit: 'ml', category: 'Brine' },
      { name: 'All-Purpose Flour', amount: 350, unit: 'g', category: 'Dredge' },
      { name: 'Cornstarch', amount: 50, unit: 'g', category: 'Dredge' },
      { name: 'Smoked Paprika', amount: 12, unit: 'g', category: 'Spices' },
      { name: 'Garlic Powder & Onion Powder', amount: 15, unit: 'g', category: 'Spices' },
      { name: 'Cayenne Pepper', amount: 5, unit: 'g', category: 'Spices' },
      { name: 'Peanut Oil for deep frying', amount: 1500, unit: 'ml', category: 'Frying' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Buttermilk Brine Overnight',
        instruction: 'Whisk buttermilk with hot sauce, 15g salt, and garlic powder. Submerge chicken completely and refrigerate for 8 to 24 hours to tenderize.',
        durationMinutes: 15
      },
      {
        stepNumber: 2,
        title: 'Prepare Flaky Seasoned Dredge',
        instruction: 'Whisk flour, cornstarch, paprika, onion powder, cayenne, salt, and black pepper. Drizzle 4 tablespoons of the buttermilk brine directly into the dry flour and rub with fingers to create small clumps for maximum crunch.',
        durationMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Double Dredge',
        instruction: 'Lift each chicken piece from brine, press firmly into flour dredge, dip briefly back into buttermilk, and pack dredge on once more. Rest on wire rack for 10 minutes to adhere.',
        durationMinutes: 12
      },
      {
        stepNumber: 4,
        title: 'Deep Fry to Golden Perfection',
        instruction: 'Heat peanut oil in a deep cast iron Dutch oven to 175°C (350°F). Fry chicken pieces in batches for 12-15 minutes, maintaining oil temperature above 150°C, until internal meat temperature reaches 75°C (165°F).',
        durationMinutes: 20,
        temperature: '175°C / 350°F'
      }
    ],
    funFact: 'Adding cornstarch and drizzling liquid into the dry flour creates jagged craggy ridges known in culinary circles as "crunch flakes".',
    servingNotes: 'Serve with warm honey-buttered biscuits and creamy coleslaw.'
  },
  {
    id: 'usa-seafood-gumbo',
    countryId: 'usa',
    title: 'New Orleans Seafood Gumbo',
    nativeTitle: 'Creole Seafood Gumbo',
    description: 'Deep, mahogany-dark roux stew brimming with Gulf shrimp, lump crab, andouille sausage, okra, and Creole holy trinity.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Gumbo.JPG/960px-Gumbo.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 30,
    cookTimeMinutes: 75,
    servings: 8,
    difficulty: 'Hard',
    caloriesPerServing: 480,
    dietaryTags: ['Seafood', 'Cajun/Creole', 'High-Protein'],
    course: 'Main',
    ingredients: [
      { name: 'Gulf Prawns (peeled, shells reserved for stock)', amount: 600, unit: 'g', category: 'Seafood' },
      { name: 'Lump Blue Crabmeat', amount: 250, unit: 'g', category: 'Seafood' },
      { name: 'Smoked Andouille Sausage (sliced)', amount: 300, unit: 'g', category: 'Meat' },
      { name: 'Vegetable Oil or Lard', amount: 120, unit: 'ml', category: 'Roux' },
      { name: 'All-Purpose Flour', amount: 120, unit: 'g', category: 'Roux' },
      { name: 'Yellow Onion, Bell Pepper, Celery (Holy Trinity)', amount: 450, unit: 'g', category: 'Aromatics' },
      { name: 'Fresh Sliced Okra', amount: 200, unit: 'g', category: 'Vegetable' },
      { name: 'Rich Seafood Shell Stock', amount: 1800, unit: 'ml', category: 'Liquid' },
      { name: 'Gumbo Filé Powder (ground sassafras)', amount: 10, unit: 'g', category: 'Finish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Simmer Shell Stock',
        instruction: 'Simmer prawn shells with onion trimmings and thyme in 2L water for 25 minutes. Strain and keep steaming hot.',
        durationMinutes: 25
      },
      {
        stepNumber: 2,
        title: 'Whisk Dark Chocolate Roux',
        instruction: 'In a heavy Dutch oven, whisk oil and flour over medium heat without stopping for 30-40 minutes until it turns the deep dark color of melted dark chocolate.',
        durationMinutes: 35,
        chefTip: 'Never leave the roux unattended for even 5 seconds. If it shows black specks, it is burned and must be discarded.'
      },
      {
        stepNumber: 3,
        title: 'Quench with Holy Trinity',
        instruction: 'Immediately dump the diced onions, celery, and bell peppers into the smoking dark roux. The vegetables will hiss and halt the cooking of the roux. Sauté 5 minutes.',
        durationMinutes: 6
      },
      {
        stepNumber: 4,
        title: 'Simmer Stock, Sausage & Okra',
        instruction: 'Slowly whisk in warm seafood stock. Add browned andouille sausage and sliced okra. Simmer gently for 45 minutes to meld flavors.',
        durationMinutes: 45
      },
      {
        stepNumber: 5,
        title: 'Seafood Finish',
        instruction: 'Add raw shrimp and crabmeat. Simmer for 4 minutes until shrimp are pink. Remove from heat and stir in gumbo filé powder.',
        durationMinutes: 5
      }
    ],
    funFact: 'The word "Gumbo" derives from the West African word for okra ("ki ngombo"), which historically served as the primary natural thickener.',
    servingNotes: 'Ladle generously over a mound of fluffy long-grain white rice with sliced scallions.'
  },
  {
    id: 'usa-smash-burger',
    countryId: 'usa',
    title: 'Double Oklahoma Onion Smash Burger',
    nativeTitle: 'Oklahoma Onion Smash Burger',
    description: 'Twin lacy-edged, crispy griddle patties smashed paper-thin into shaved sweet onions, melted American cheese, and tangy burger sauce on a buttered potato bun.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/960px-RedDot_Burger.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 15,
    cookTimeMinutes: 8,
    servings: 2,
    difficulty: 'Easy',
    caloriesPerServing: 620,
    dietaryTags: ['Comfort Food', 'Fast-Casual Classic'],
    course: 'Main',
    ingredients: [
      { name: '80/20 Ground Beef Chuck (loosely packed balls)', amount: 360, unit: 'g', category: 'Meat' },
      { name: 'Sweet Yellow Onion (paper-thin shaved on mandoline)', amount: 150, unit: 'g', category: 'Topping' },
      { name: 'American Cheese Slices', amount: 4, unit: 'pcs', category: 'Dairy' },
      { name: 'Martin’s Potato Buns', amount: 2, unit: 'pcs', category: 'Bakery' },
      { name: 'Mayo, Ketchup, Relish Special Sauce', amount: 50, unit: 'ml', category: 'Sauce' },
      { name: 'Dill Pickle Chips', amount: 8, unit: 'pcs', category: 'Garnish' },
      { name: 'Unsalted Butter', amount: 25, unit: 'g', category: 'Toasted Bun' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Toast Potato Buns',
        instruction: 'Butter cut sides of potato buns and toast on a hot griddle until deeply golden brown. Set aside.',
        durationMinutes: 3
      },
      {
        stepNumber: 2,
        title: 'Hard Smash with Shaved Onions',
        instruction: 'Heat cast iron griddle to screaming hot (220°C). Place 90g beef balls on griddle. Heap high with shaved onions. Using a heavy flat burger press with parchment paper, smash aggressively flat until paper-thin with lacy edges.',
        durationMinutes: 2,
        temperature: '220°C / 425°F'
      },
      {
        stepNumber: 3,
        title: 'Flip and Melt Cheese',
        instruction: 'Season with salt and pepper. Cook 2 minutes until crust is dark brown. Scrape hard under patty with a sharp spatula and flip so onions caramelize on the bottom. Top immediately with American cheese.',
        durationMinutes: 2
      },
      {
        stepNumber: 4,
        title: 'Stack and Assemble',
        instruction: 'Stack two patties together. Place on sauce-slathered bottom bun with pickles and crown with toasted top bun.',
        durationMinutes: 1
      }
    ],
    funFact: 'Invented during the Great Depression in El Reno, Oklahoma, diners added abundant shaved onions to make expensive beef stretch further.',
    servingNotes: 'Serve immediately with crispy shoestring fries and a cold vanilla shake.'
  },
  {
    id: 'usa-lobster-roll',
    countryId: 'usa',
    title: 'Maine Butter-Poached Lobster Roll',
    nativeTitle: 'Downeast Lobster Roll',
    description: 'Sweet, succulent lobster claw and knuckle meat warmed in rich clarified butter, piled high into a griddled split-top New England brioche roll.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Lobster_Roll.png/960px-Lobster_Roll.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    servings: 2,
    difficulty: 'Easy',
    caloriesPerServing: 490,
    dietaryTags: ['Seafood', 'Iconic Northeast'],
    course: 'Main',
    ingredients: [
      { name: 'Steamed Maine Lobster Meat (claw & tail)', amount: 350, unit: 'g', category: 'Seafood' },
      { name: 'Split-Top Brioche Hot Dog Buns', amount: 2, unit: 'pcs', category: 'Bakery' },
      { name: 'European Cultured Butter', amount: 80, unit: 'g', category: 'Fat' },
      { name: 'Fresh Lemon Juice', amount: 15, unit: 'ml', category: 'Acid' },
      { name: 'Finely Snipped Fresh Chives', amount: 10, unit: 'g', category: 'Garnish' },
      { name: 'Flaky Maldon Sea Salt', amount: 3, unit: 'g', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Warm Butter Poach',
        instruction: 'Melt butter in a small pan over low heat with lemon juice. Add lobster meat and gently warm for 3 minutes without boiling.',
        durationMinutes: 4
      },
      {
        stepNumber: 2,
        title: 'Golden Griddle Buns',
        instruction: 'Butter the flat exterior sides of the split-top buns. Griddle on medium heat until golden and crisp on both sides.',
        durationMinutes: 4
      },
      {
        stepNumber: 3,
        title: 'Mound and Garnish',
        instruction: 'Heap warm lobster meat into the toasted buns. Drizzle warm butter from the pan over top and finish with fresh chives and flaky sea salt.',
        durationMinutes: 2
      }
    ],
    funFact: 'New Englanders divide fiercely between Maine-style (chilled with light mayo and celery) and Connecticut-style (warm with melted drawn butter).',
    servingNotes: 'Pair with Cape Cod kettle potato chips and an ice-cold local craft IPA.'
  },
  {
    id: 'usa-pulled-pork',
    countryId: 'usa',
    title: 'Carolina Slow-Smoked Pulled Pork',
    nativeTitle: 'Carolina Vinegar Pulled Pork',
    description: 'Juicy hickory-smoked pork shoulder shredded into tender strands and dressed in a zesty, peppered cider vinegar mop sauce.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Pulled_pork_while_pulling.JPG/960px-Pulled_pork_while_pulling.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 20,
    cookTimeMinutes: 600,
    servings: 10,
    difficulty: 'Medium',
    caloriesPerServing: 520,
    dietaryTags: ['High-Protein', 'Smoked BBQ'],
    course: 'Main',
    ingredients: [
      { name: 'Bone-in Pork Boston Butt', amount: 3500, unit: 'g', category: 'Meat' },
      { name: 'Brown Sugar & Paprika BBQ Rub', amount: 70, unit: 'g', category: 'Rub' },
      { name: 'Apple Cider Vinegar', amount: 350, unit: 'ml', category: 'Mop Sauce' },
      { name: 'Crushed Red Pepper Flakes & Cayenne', amount: 15, unit: 'g', category: 'Mop Sauce' },
      { name: 'Brown Sugar', amount: 30, unit: 'g', category: 'Mop Sauce' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Rub and Smoke',
        instruction: 'Coat pork shoulder in brown sugar rub. Smoke at 115°C (240°F) over hickory wood for 6 hours until bark sets.',
        durationMinutes: 360,
        temperature: '115°C / 240°F'
      },
      {
        stepNumber: 2,
        title: 'Wrap and Finish',
        instruction: 'Wrap tightly in foil with a splash of apple cider. Continue cooking until the bone wiggles free and internal temp hits 96°C (205°F).',
        durationMinutes: 240
      },
      {
        stepNumber: 3,
        title: 'Shred and Vinegar Mop',
        instruction: 'Rest 1 hour. Shred meat with bear claws, discarding excess fat. Toss with warm cider vinegar and red pepper mop sauce.',
        durationMinutes: 15
      }
    ],
    funFact: 'Eastern North Carolina barbecue prides itself on the whole hog tradition, seasoned exclusively with tart vinegar, salt, and cayenne pepper.',
    servingNotes: 'Serve piled high on soft hamburger buns topped with crisp coleslaw.'
  },
  {
    id: 'usa-buffalo-wings',
    countryId: 'usa',
    title: 'Authentic Buffalo Chicken Wings',
    nativeTitle: 'Anchor Bar Style Buffalo Wings',
    description: 'Crisp, unbattered deep-fried chicken wings tossed in a sizzling emulsion of Frank’s RedHot, melted butter, and vinegar, with blue cheese dip.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Buffalo_wings-01.jpg/960px-Buffalo_wings-01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 15,
    cookTimeMinutes: 18,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 480,
    dietaryTags: ['Keto-Friendly', 'Game Day Favorite'],
    course: 'Appetizer',
    ingredients: [
      { name: 'Fresh Chicken Wings (split into flats and drums)', amount: 1200, unit: 'g', category: 'Poultry' },
      { name: 'Frank’s RedHot Cayenne Pepper Sauce', amount: 150, unit: 'ml', category: 'Sauce' },
      { name: 'Unsalted Butter (melted)', amount: 80, unit: 'g', category: 'Sauce' },
      { name: 'White Vinegar & Worcestershire Sauce', amount: 15, unit: 'ml', category: 'Sauce' },
      { name: 'Celery Sticks & Blue Cheese Dressing', amount: 150, unit: 'g', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Dry Wings Thoroughly',
        instruction: 'Pat wings completely dry with paper towels. Place on a wire rack uncovered in the fridge for 2 hours to dry out the skin for maximum crispness.',
        durationMinutes: 120
      },
      {
        stepNumber: 2,
        title: 'Double Fry',
        instruction: 'Fry wings at 165°C for 10 minutes. Remove for 5 minutes, then flash fry at 195°C for 4 minutes until deeply blistered and shatteringly crispy.',
        durationMinutes: 20,
        temperature: '195°C / 380°F'
      },
      {
        stepNumber: 3,
        title: 'Toss in Warm Buffalo Emulsion',
        instruction: 'Whisk hot sauce with melted butter, vinegar, and Worcestershire. Toss hot wings immediately in a large stainless steel bowl.',
        durationMinutes: 3
      }
    ],
    funFact: 'Invented at the Anchor Bar in Buffalo, New York in 1964 by Teressa Bellissimo as a late-night snack for her son and his friends.',
    servingNotes: 'Serve immediately with cold crisp celery ribs and authentic Roquefort or blue cheese dressing.'
  },
  {
    id: 'usa-apple-pie',
    countryId: 'usa',
    title: 'Traditional Double-Crust All-American Apple Pie',
    nativeTitle: 'Old-Fashioned Apple Pie',
    description: 'Flaky all-butter lattice crust packed with tart Granny Smith apples tossed in Saigon cinnamon, nutmeg, brown sugar, and apple cider caramel.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Apple_pie_14.jpg/960px-Apple_pie_14.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 45,
    cookTimeMinutes: 55,
    servings: 8,
    difficulty: 'Medium',
    caloriesPerServing: 410,
    dietaryTags: ['Vegetarian', 'Classic Dessert'],
    course: 'Dessert',
    ingredients: [
      { name: 'Granny Smith & Honeycrisp Apples (peeled & sliced)', amount: 1200, unit: 'g', category: 'Fruit' },
      { name: 'All-Purpose Flour', amount: 350, unit: 'g', category: 'Pastry' },
      { name: 'Very Cold European Butter (cubed)', amount: 220, unit: 'g', category: 'Pastry' },
      { name: 'Ice Water', amount: 100, unit: 'ml', category: 'Pastry' },
      { name: 'Dark Brown Sugar', amount: 120, unit: 'g', category: 'Filling' },
      { name: 'Ground Saigon Cinnamon & Nutmeg', amount: 8, unit: 'g', category: 'Spices' },
      { name: 'Coarse Demerara Sugar for crust', amount: 20, unit: 'g', category: 'Topping' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Make Flaky Butter Crust',
        instruction: 'Cut cold butter cubes into flour until pea-sized crumbles remain. Add ice water a spoonful at a time until dough just holds together. Divide into 2 disks and chill 1 hour.',
        durationMinutes: 15
      },
      {
        stepNumber: 2,
        title: 'Macerate Apples',
        instruction: 'Toss apple slices with brown sugar, cinnamon, nutmeg, and 2 tbsp flour. Let sit 15 minutes to release aromatic juices.',
        durationMinutes: 15
      },
      {
        stepNumber: 3,
        title: 'Assemble Lattice & Bake',
        instruction: 'Roll bottom crust into 9-inch pie dish. Heap with apples. Weave lattice top crust, crimp edges, brush with egg wash, and sprinkle Demerara sugar. Bake at 200°C for 50-55 minutes until juices bubble.',
        durationMinutes: 55,
        temperature: '200°C / 400°F'
      }
    ],
    funFact: 'Although the phrase "as American as apple pie" became popular in WWII, apples and pie traditions originally arrived with early European settlers.',
    servingNotes: 'Serve warm with a generous scoop of artisanal vanilla bean ice cream.'
  },
  {
    id: 'usa-cornbread',
    countryId: 'usa',
    title: 'Cast-Iron Skillet Golden Cornbread',
    nativeTitle: 'Southern Buttermilk Cornbread',
    description: 'Crisp, sizzling edges baked in smoking bacon fat, with a moist, tender crumb made with yellow stone-ground cornmeal and real buttermilk.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Skillet_cornbread_%28cropped%29.jpg/960px-Skillet_cornbread_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 10,
    cookTimeMinutes: 22,
    servings: 8,
    difficulty: 'Easy',
    caloriesPerServing: 280,
    dietaryTags: ['Vegetarian', 'Quick Bread', 'Southern Classic'],
    course: 'Bakery',
    ingredients: [
      { name: 'Coarse Yellow Cornmeal', amount: 200, unit: 'g', category: 'Dry' },
      { name: 'All-Purpose Flour', amount: 100, unit: 'g', category: 'Dry' },
      { name: 'Baking Powder & Baking Soda', amount: 10, unit: 'g', category: 'Leavening' },
      { name: 'Cultured Whole Buttermilk', amount: 350, unit: 'ml', category: 'Wet' },
      { name: 'Large Eggs', amount: 2, unit: 'pcs', category: 'Wet' },
      { name: 'Rendered Bacon Drippings or Butter', amount: 60, unit: 'g', category: 'Fat' },
      { name: 'Honey or Pure Cane Sugar', amount: 25, unit: 'g', category: 'Sweetener' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Preheat Sizzling Skillet',
        instruction: 'Place a 10-inch cast iron skillet with bacon fat inside the oven while preheating to 220°C (425°F).',
        durationMinutes: 15,
        temperature: '220°C / 425°F'
      },
      {
        stepNumber: 2,
        title: 'Fold Batter Lightly',
        instruction: 'Whisk dry ingredients together. Whisk buttermilk, eggs, and honey. Fold wet into dry until just combined (do not overmix).',
        durationMinutes: 4
      },
      {
        stepNumber: 3,
        title: 'Pour and Bake',
        instruction: 'Carefully pour batter into the smoking hot skillet; it should sizzle vigorously around the edges. Bake for 20-22 minutes until golden brown on top.',
        durationMinutes: 22
      }
    ],
    funFact: 'Pouring batter into smoking hot bacon fat creates the hallmark crackling crust prized by Southern cooks.',
    servingNotes: 'Slice into wedges and slather with honey butter while steaming hot.'
  },
  {
    id: 'usa-jambalaya',
    countryId: 'usa',
    title: 'Louisiana Cajun Jambalaya',
    nativeTitle: 'Cajun Brown Jambalaya',
    description: 'One-pot rice dish packed with browned andouille sausage, chicken, Gulf shrimp, bell peppers, celery, onions, and rich Creole spices.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Homemade_Jambalaya.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
    prepTimeMinutes: 25,
    cookTimeMinutes: 45,
    servings: 6,
    difficulty: 'Medium',
    caloriesPerServing: 520,
    dietaryTags: ['High-Protein', 'Cajun Classic'],
    course: 'Main',
    ingredients: [
      { name: 'Long-Grain Parboiled White Rice', amount: 400, unit: 'g', category: 'Grain' },
      { name: 'Smoked Andouille Sausage (sliced)', amount: 350, unit: 'g', category: 'Meat' },
      { name: 'Boneless Chicken Thighs (cubed)', amount: 400, unit: 'g', category: 'Meat' },
      { name: 'Gulf Shrimp (peeled & deveined)', amount: 300, unit: 'g', category: 'Seafood' },
      { name: 'Onion, Green Bell Pepper, Celery', amount: 350, unit: 'g', category: 'Trinity' },
      { name: 'Garlic Cloves (minced)', amount: 5, unit: 'cloves', category: 'Aromatics' },
      { name: 'Chicken & Seafood Stock', amount: 800, unit: 'ml', category: 'Liquid' },
      { name: 'Cajun Seasoning Blend', amount: 15, unit: 'g', category: 'Spices' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Brown Sausage and Chicken',
        instruction: 'In a large heavy Dutch oven, sear sliced andouille sausage and chicken until deeply browned, rendering savory fond on the bottom of the pot.',
        durationMinutes: 12
      },
      {
        stepNumber: 2,
        title: 'Cook Trinity and Toast Rice',
        instruction: 'Add the diced trinity (onion, celery, bell pepper) and garlic, scraping the browned fond. Stir in rice and toast for 2 minutes to coat with seasoned oil.',
        durationMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Simmer Under Tight Lid',
        instruction: 'Pour in hot stock and Cajun spices. Bring to a boil, cover with a tight-fitting lid, turn heat to lowest setting, and cook undisturbed for 20 minutes.',
        durationMinutes: 20
      },
      {
        stepNumber: 4,
        title: 'Steam Shrimp and Fluff',
        instruction: 'Uncover quickly, scatter raw shrimp on top of rice, replace lid, and let rest off heat for 10 minutes to steam shrimp. Fluff with a fork.',
        durationMinutes: 10
      }
    ],
    funFact: 'Cajun jambalaya is brown with no tomatoes, whereas Creole jambalaya (from New Orleans) includes ripe tomatoes and is often called "red jambalaya".',
    servingNotes: 'Serve straight from the Dutch oven with scallions and Tabasco sauce.'
  }
];
