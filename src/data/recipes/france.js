
import { AUTHENTIC_IMAGES } from '../imageAssets';

export const FRANCE_RECIPES = [
  {
    id: 'fra-boeuf-bourguignon',
    countryId: 'france',
    title: 'Boeuf Bourguignon Traditionnel',
    nativeTitle: 'Bœuf Bourguignon',
    description: 'Charolais beef chunks slow-braised for hours in full-bodied Pinot Noir wine with smoked lardons, pearl onions, wild mushrooms, and bouquet garni.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Beef_bourguignon_NYT.jpg/960px-Beef_bourguignon_NYT.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 35,
    cookTimeMinutes: 180,
    servings: 6,
    difficulty: 'Medium',
    caloriesPerServing: 580,
    dietaryTags: ['High-Protein', 'French Classic', 'Braised'],
    course: 'Main',
    ingredients: [
      { name: 'Beef Chuck or Shank (cut into 5cm chunks)', amount: 1200, unit: 'g', category: 'Meat' },
      { name: 'Smoked Pork Lardons', amount: 200, unit: 'g', category: 'Pork' },
      { name: 'Red Burgundy Wine (Pinot Noir)', amount: 750, unit: 'ml', category: 'Wine' },
      { name: 'Rich Beef Stock', amount: 500, unit: 'ml', category: 'Stock' },
      { name: 'Small French Pearl Onions (peeled)', amount: 250, unit: 'g', category: 'Vegetable' },
      { name: 'Cremini or Paris Mushrooms (quartered)', amount: 350, unit: 'g', category: 'Vegetable' },
      { name: 'Carrots (thickly sliced)', amount: 3, unit: 'pcs', category: 'Vegetable' },
      { name: 'Tomato Paste & Flour for dusting', amount: 45, unit: 'g', category: 'Thickener' },
      { name: 'Bouquet Garni (thyme, bay leaf, parsley stems)', amount: 1, unit: 'bundle', category: 'Herbs' },
      { name: 'French Butter', amount: 50, unit: 'g', category: 'Fat' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Render Lardons and Hard Sear Beef',
        instruction: 'Crisp lardons in a heavy enameled cast iron Cocotte. Remove lardons. Pat beef dry, season with salt and pepper, and sear in batches in hot rendered pork fat until mahogany brown on all sides.',
        durationMinutes: 18
      },
      {
        stepNumber: 2,
        title: 'Singer (Dust Flour) and Deglaze',
        instruction: 'Return beef and lardons to pot. Dust with 30g flour and toss for 2 minutes to cook raw starch. Pour in full bottle of Pinot Noir and warm beef stock. Add tomato paste, carrots, and bouquet garni.',
        durationMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Gentle Low Oven Braise',
        instruction: 'Cover cocotte tightly and place in 160°C (320°F) oven for 2.5 to 3 hours until beef is fork-tender.',
        durationMinutes: 160,
        temperature: '160°C / 320°F'
      },
      {
        stepNumber: 4,
        title: 'Glaze Pearl Onions and Sauté Mushrooms',
        instruction: 'Sauté mushrooms in butter until golden. In a separate pan, braise pearl onions in butter, sugar, and a splash of stock until glazed brown. Stir into stew 15 minutes before serving.',
        durationMinutes: 15
      }
    ],
    funFact: 'Originally a humble peasant dish in the Burgundy wine region, it was elevated to international haute cuisine by Auguste Escoffier and later Julia Child.',
    servingNotes: 'Serve with buttery pomme purée (mashed potatoes) or buttered tagliatelle.'
  },
  {
    id: 'fra-coq-au-vin',
    countryId: 'france',
    title: 'Coq au Vin de Bourgogne',
    nativeTitle: 'Coq au Vin',
    description: 'Rustic rooster or chicken pieces braised in red Burgundy wine with crispy lardons, sweet baby onions, button mushrooms, garlic, and thyme.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Gourmet_coq_au_vin.jpg/960px-Gourmet_coq_au_vin.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 25,
    cookTimeMinutes: 60,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 520,
    dietaryTags: ['High-Protein', 'Classic French'],
    course: 'Main',
    ingredients: [
      { name: 'Bone-in Chicken Legs and Thighs', amount: 1200, unit: 'g', category: 'Poultry' },
      { name: 'Dry Red Wine (Bourgogne or Côtes du Rhône)', amount: 600, unit: 'ml', category: 'Wine' },
      { name: 'Smoked Bacon Lardons', amount: 150, unit: 'g', category: 'Meat' },
      { name: 'Button Mushrooms', amount: 250, unit: 'g', category: 'Vegetable' },
      { name: 'Pearl Onions', amount: 150, unit: 'g', category: 'Aromatics' },
      { name: 'Cognac or Brandy', amount: 45, unit: 'ml', category: 'Spirit' },
      { name: 'Butter and Flour (Beurre Manié)', amount: 30, unit: 'g', category: 'Thickener' },
      { name: 'Fresh Thyme and Bay Leaf', amount: 4, unit: 'sprigs', category: 'Herbs' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Sear Poultry and Flambé Cognac',
        instruction: 'Brown chicken in rendered bacon fat. Pour in Cognac and flambé carefully with a long match until flames subside.',
        durationMinutes: 12
      },
      {
        stepNumber: 2,
        title: 'Simmer with Wine and Aromatics',
        instruction: 'Add red wine, chicken stock, garlic, and herbs. Bring to a simmer, cover, and cook on low for 40 minutes.',
        durationMinutes: 40
      },
      {
        stepNumber: 3,
        title: 'Beurre Manié Finish',
        instruction: 'Remove chicken. Whisk equal parts soft butter and flour (beurre manié) into the bubbling wine sauce until glossy and thick. Return chicken with sautéed mushrooms and glazed onions.',
        durationMinutes: 8
      }
    ],
    funFact: 'Legend attributes the origin of Coq au Vin to Julius Caesar’s siege of Gergovia in 52 BC, where Gaul leader Vercingetorix sent Caesar a tough old rooster.',
    servingNotes: 'Serve hot with boiled parsley potatoes and crusty French baguette.'
  },
  {
    id: 'fra-ratatouille',
    countryId: 'france',
    title: 'Ratatouille Provençale Traditionnelle',
    nativeTitle: 'Ratatouille Niçoise',
    description: 'Silky stew of Mediterranean summer vegetables: eggplant, zucchini, sweet bell peppers, and vine-ripe tomatoes simmered with thyme and fragrant olive oil.',
    image: AUTHENTIC_IMAGES.frenchRatatouille,
    prepTimeMinutes: 30,
    cookTimeMinutes: 45,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 210,
    dietaryTags: ['Vegan', 'Gluten-Free', 'Healthy'],
    course: 'Main',
    ingredients: [
      { name: 'Medium Eggplants (cubed 2cm)', amount: 450, unit: 'g', category: 'Vegetable' },
      { name: 'Green and Yellow Zucchini (cubed 2cm)', amount: 450, unit: 'g', category: 'Vegetable' },
      { name: 'Red & Yellow Bell Peppers (diced)', amount: 300, unit: 'g', category: 'Vegetable' },
      { name: 'Ripe Vine Tomatoes (chopped)', amount: 500, unit: 'g', category: 'Vegetable' },
      { name: 'Garlic Cloves (crushed)', amount: 5, unit: 'cloves', category: 'Aromatics' },
      { name: 'Herbes de Provence (thyme, rosemary, savory)', amount: 8, unit: 'g', category: 'Herbs' },
      { name: 'Provence Extra Virgin Olive Oil', amount: 80, unit: 'ml', category: 'Oil' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Sauté Each Vegetable Individually',
        instruction: 'Traditional Niçoise technique requires cooking eggplants, zucchini, and peppers in separate pans with olive oil so each develops its individual roasted character without becoming mushy.',
        durationMinutes: 20
      },
      {
        stepNumber: 2,
        title: 'Simmer Tomato Confit',
        instruction: 'In a large pot, simmer onions, garlic, tomatoes, and Herbes de Provence for 15 minutes until a sweet tomato fondue forms.',
        durationMinutes: 15
      },
      {
        stepNumber: 3,
        title: 'Unite and Low Simmer',
        instruction: 'Combine all sautéed vegetables into the tomato sauce. Cover and simmer gently for 20 minutes so flavors meld into a tender, luscious harmony.',
        durationMinutes: 20
      }
    ],
    funFact: 'Derived from the Occitan word "ratatolha" (to stir up), this staple of Nice was invented to celebrate the peak harvest of Mediterranean gardens.',
    servingNotes: 'Equally divine served hot, at room temperature, or cold the next morning on toasted sourdough.'
  },
  {
    id: 'fra-french-onion-soup',
    countryId: 'france',
    title: 'Soupe à l’Oignon Gratinée',
    nativeTitle: 'Soupe à l’Oignon Gratinée',
    description: 'Deeply caramelized yellow onions simmered in rich beef bone broth, topped with a toasted baguette crouton and an avalanche of broiled melted Comté cheese.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Soupe_%C3%A0_l%27oignon.jpg/960px-Soupe_%C3%A0_l%27oignon.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 20,
    cookTimeMinutes: 60,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 390,
    dietaryTags: ['Comfort Food', 'French Bistro Classic'],
    course: 'Soup',
    ingredients: [
      { name: 'Yellow Onions (thinly sliced from root to stem)', amount: 1200, unit: 'g', category: 'Vegetable' },
      { name: 'French Cultured Butter', amount: 50, unit: 'g', category: 'Fat' },
      { name: 'Dry White Wine', amount: 150, unit: 'ml', category: 'Liquid' },
      { name: 'Rich Beef Stock', amount: 1200, unit: 'ml', category: 'Stock' },
      { name: 'Artisan Baguette Slices (toasted)', amount: 8, unit: 'slices', category: 'Bakery' },
      { name: 'Aged Comté or Gruyère Cheese (grated)', amount: 200, unit: 'g', category: 'Cheese' },
      { name: 'Fresh Thyme and Bay Leaf', amount: 3, unit: 'sprigs', category: 'Herbs' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Slow 45-Minute Caramelization',
        instruction: 'Cook sliced onions in butter in a heavy Dutch oven over medium-low heat for 45 minutes, stirring frequently until deeply jammy and rich dark amber.',
        durationMinutes: 45
      },
      {
        stepNumber: 2,
        title: 'Deglaze and Simmer Broth',
        instruction: 'Deglaze with dry white wine, scraping all caramelized fond from bottom. Pour in hot beef stock and thyme. Simmer gently for 20 minutes.',
        durationMinutes: 20
      },
      {
        stepNumber: 3,
        title: 'Broil the Cheesy Crouton (Gratinée)',
        instruction: 'Ladle soup into oven-safe porcelain crocks. Float toasted baguette slices on top. Heap generously with grated Comté cheese. Broil at 230°C for 4-5 minutes until cheese is blistered and golden brown.',
        durationMinutes: 5,
        temperature: '230°C / 450°F'
      }
    ],
    funFact: 'Traditionally eaten in the Les Halles market of Paris at dawn by market porters and late-night partygoers alike.',
    servingNotes: 'Serve scalding hot; diners use their spoons to break through the crispy cheese crust.'
  },
  {
    id: 'fra-duck-confit',
    countryId: 'france',
    title: 'Confit de Canard aux Pommes Sarladaises',
    nativeTitle: 'Confit de Canard',
    description: 'Salt-cured duck leg quarters slow-cooked submerged in duck fat until tender enough to pull apart with a spoon, then crisped to crackling gold.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Confitdecanard.jpg/960px-Confitdecanard.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 20,
    cookTimeMinutes: 180,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 640,
    dietaryTags: ['High-Protein', 'Gascony Heritage', 'Keto-Friendly'],
    course: 'Main',
    ingredients: [
      { name: 'Moulard or Barbary Duck Legs', amount: 4, unit: 'pcs', category: 'Poultry' },
      { name: 'Rendered Pure Duck Fat', amount: 800, unit: 'g', category: 'Cooking Fat' },
      { name: 'Coarse Sea Salt (Gros Sel de Guérande)', amount: 30, unit: 'g', category: 'Cure' },
      { name: 'Garlic Cloves & Fresh Thyme Sprigs', amount: 8, unit: 'cloves', category: 'Aromatics' },
      { name: 'Yukon Gold Potatoes (thinly sliced for Sarladaises)', amount: 600, unit: 'g', category: 'Side' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: '24-Hour Herb Salt Cure',
        instruction: 'Rub duck legs with coarse salt, crushed garlic, and fresh thyme. Refrigerate for 24 hours to draw out moisture and cure the meat.',
        durationMinutes: 15
      },
      {
        stepNumber: 2,
        title: 'Slow Submerged Confit in Fat',
        instruction: 'Rinse salt off duck and pat dry. Submerge completely in melted duck fat in an oven dish. Cook uncovered at 110°C (230°F) for 3 hours until meat pulls effortlessly from bone.',
        durationMinutes: 180,
        temperature: '110°C / 230°F'
      },
      {
        stepNumber: 3,
        title: 'Crisp Skin & Cook Sarladaises Potatoes',
        instruction: 'Sear duck legs skin-side down in a dry hot pan for 6 minutes until blistered and crispy. In the remaining duck fat, fry sliced potatoes with garlic and parsley.',
        durationMinutes: 15
      }
    ],
    funFact: 'Confit was originally an ancient preservation technique in southwest France before refrigeration existed; meat kept under duck fat stays preserved for months.',
    servingNotes: 'Pair with a bold red wine from Madiran or Cahors.'
  },
  {
    id: 'fra-quiche-lorraine',
    countryId: 'france',
    title: 'Quiche Lorraine Traditionnelle',
    nativeTitle: 'Quiche Lorraine',
    description: 'Crisp buttery pâte brisée pastry crust filled with a silky, delicate baked custard of farm cream, eggs, nutmeg, and smoked thick-cut lardons.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Quiche.jpg/960px-Quiche.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 30,
    cookTimeMinutes: 40,
    servings: 6,
    difficulty: 'Easy',
    caloriesPerServing: 440,
    dietaryTags: ['Classic French', 'Brunch'],
    course: 'Main',
    ingredients: [
      { name: 'Pâte Brisée (Flaky Shortcrust Pastry)', amount: 300, unit: 'g', category: 'Pastry' },
      { name: 'Smoked Pork Lardons', amount: 200, unit: 'g', category: 'Meat' },
      { name: 'Fresh Heavy Cream (Crème Fraîche)', amount: 250, unit: 'ml', category: 'Custard' },
      { name: 'Whole Milk', amount: 150, unit: 'ml', category: 'Custard' },
      { name: 'Whole Large Eggs plus 1 Yolk', amount: 4, unit: 'pcs', category: 'Custard' },
      { name: 'Freshly Grated Nutmeg', amount: 2, unit: 'g', category: 'Spice' },
      { name: 'Gruyère Cheese (optional modern addition)', amount: 80, unit: 'g', category: 'Cheese' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Blind Bake Pastry Crust',
        instruction: 'Roll pastry into a 9-inch tart ring. Prick bottom with fork, line with parchment and pie weights, and blind bake at 190°C for 15 minutes.',
        durationMinutes: 20,
        temperature: '190°C / 375°F'
      },
      {
        stepNumber: 2,
        title: 'Sauté Lardons & Whisk Migaine Custard',
        instruction: 'Brown lardons in a pan and drain. Whisk eggs, crème fraîche, milk, salt, pepper, and freshly grated nutmeg into a smooth custard (migaine).',
        durationMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Pour and Bake',
        instruction: 'Scatter lardons across baked crust. Pour custard to the brim. Bake at 180°C for 30-35 minutes until puffed and barely set with a golden top.',
        durationMinutes: 35
      }
    ],
    funFact: 'Traditionalists in Lorraine state that authentic historical quiche never contains cheese or onions — only eggs, cream, and smoked bacon!',
    servingNotes: 'Serve warm or at room temperature accompanied by a crisp green butterhead lettuce salad.'
  },
  {
    id: 'fra-bouillabaisse',
    countryId: 'france',
    title: 'Bouillabaisse Marseillaise',
    nativeTitle: 'Bouillabaisse de Marseille',
    description: 'Iconic Provençal fisherman’s stew of Mediterranean rockfish simmered with saffron, fennel, orange peel, and pastis, served with rouille garlic mayonnaise.',
    image: AUTHENTIC_IMAGES.frenchBouillabaisse,
    prepTimeMinutes: 40,
    cookTimeMinutes: 30,
    servings: 6,
    difficulty: 'Hard',
    caloriesPerServing: 460,
    dietaryTags: ['Seafood', 'Gluten-Free Option', 'Provencal'],
    course: 'Soup',
    ingredients: [
      { name: 'Mixed Mediterranean White Fish (Rascasse, Rouget, Monkfish)', amount: 1500, unit: 'g', category: 'Seafood' },
      { name: 'Small Rockfish for Broth Stock', amount: 800, unit: 'g', category: 'Stock' },
      { name: 'Saffron Threads', amount: 1, unit: 'g', category: 'Spice' },
      { name: 'Fennel Bulb (sliced) & Leek', amount: 300, unit: 'g', category: 'Aromatics' },
      { name: 'Ripe Tomatoes & Orange Zest', amount: 350, unit: 'g', category: 'Aromatics' },
      { name: 'Pastis or Pernod Anise Liqueur', amount: 40, unit: 'ml', category: 'Spirit' },
      { name: 'Rouille Sauce (garlic, cayenne, egg yolk, olive oil, breadcrumbs)', amount: 150, unit: 'g', category: 'Sauce' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Simmer Intense Rockfish Stock',
        instruction: 'Sauté leeks, fennel, garlic, and small rockfish with orange peel and pastis. Add water, tomatoes, and saffron. Boil vigorously for 20 minutes, then pass through a fine food mill.',
        durationMinutes: 25
      },
      {
        stepNumber: 2,
        title: 'Poach Fish by Firmness',
        instruction: 'Bring strained saffron broth to a boil. Add firm fish (monkfish, rascasse) first, followed by delicate fillets 5 minutes later. Cook until tender.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Two-Plate Service',
        instruction: 'Serve broth in deep bowls with toasted baguette slices smeared with spicy garlic rouille. Serve the poached fish on a separate warm platter.',
        durationMinutes: 5
      }
    ],
    funFact: 'The name comes from Occitan "bolhís" (it boils) and "abaissa" (lower the heat) — boiling hard to emulsify the olive oil and fish gelatin.',
    servingNotes: 'Dollop rouille on toasted croutons, push them into the soup, and eat alongside the fish.'
  },
  {
    id: 'fra-croque-monsieur',
    countryId: 'france',
    title: 'Croque Monsieur & Madame Parisien',
    nativeTitle: 'Croque-Monsieur au Comté',
    description: 'Toasted pain de mie sandwich layered with Jambon de Paris, rich Dijon béchamel, and melted Comté cheese, topped with a fried egg (Madame).',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Croque_monsieur.jpg/960px-Croque_monsieur.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    servings: 2,
    difficulty: 'Easy',
    caloriesPerServing: 560,
    dietaryTags: ['Comfort Food', 'Parisian Bistro'],
    course: 'Main',
    ingredients: [
      { name: 'Thick Artisanal Pain de Mie Bread Slices', amount: 4, unit: 'slices', category: 'Bakery' },
      { name: 'French Cooked Ham (Jambon de Paris)', amount: 150, unit: 'g', category: 'Meat' },
      { name: 'Aged Comté Cheese (shredded)', amount: 160, unit: 'g', category: 'Cheese' },
      { name: 'Velvety Béchamel Sauce with Dijon Mustard', amount: 120, unit: 'g', category: 'Sauce' },
      { name: 'Butter for toasting', amount: 30, unit: 'g', category: 'Fat' },
      { name: 'Fresh Farm Eggs (for Croque Madame)', amount: 2, unit: 'pcs', category: 'Topping' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Toast and Butter Bread',
        instruction: 'Lightly toast bread slices. Spread a thin layer of Dijon béchamel on the inner faces.',
        durationMinutes: 4
      },
      {
        stepNumber: 2,
        title: 'Layer Ham and Cheese',
        instruction: 'Stack sliced ham and shredded Comté between the bread slices. Close the sandwich.',
        durationMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Broil with Béchamel Cap',
        instruction: 'Spread a generous coat of béchamel over the top bread slice and sprinkle with more Comté. Broil at 220°C for 5-6 minutes until bubbling golden brown. Top with a sunny-side-up fried egg for a Croque Madame.',
        durationMinutes: 6,
        temperature: '220°C / 425°F'
      }
    ],
    funFact: 'First appeared on Parisian café menus around 1910; Marcel Proust even famously referenced it in "In Search of Lost Time".',
    servingNotes: 'Serve hot with cornichon pickles and a crisp frisée salad.'
  },
  {
    id: 'fra-cassoulet',
    countryId: 'france',
    title: 'Cassoulet de Castelnaudary',
    nativeTitle: 'Cassoulet Traditionnel',
    description: 'Slow-baked white Tarbais bean casserole with duck confit, Toulouse sausage, pork belly, garlic, and a crust broken seven times during cooking.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Bowl_of_cassoulet.JPG/960px-Bowl_of_cassoulet.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 45,
    cookTimeMinutes: 240,
    servings: 8,
    difficulty: 'Hard',
    caloriesPerServing: 720,
    dietaryTags: ['High-Protein', 'Occitan Heritage'],
    course: 'Main',
    ingredients: [
      { name: 'Dry Tarbais White Beans', amount: 600, unit: 'g', category: 'Legumes' },
      { name: 'Duck Confit Legs', amount: 4, unit: 'pcs', category: 'Poultry' },
      { name: 'Toulouse Pork Sausages', amount: 4, unit: 'pcs', category: 'Meat' },
      { name: 'Salted Pork Belly or Shank', amount: 400, unit: 'g', category: 'Meat' },
      { name: 'Whole Garlic Heads', amount: 2, unit: 'heads', category: 'Aromatics' },
      { name: 'Duck Fat', amount: 60, unit: 'g', category: 'Fat' },
      { name: 'Rich Pork and Poultry Broth', amount: 1500, unit: 'ml', category: 'Stock' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Simmer Tarbais Beans',
        instruction: 'Soak beans overnight. Simmer with pork belly, carrots, and garlic for 60 minutes until tender but not burst.',
        durationMinutes: 60
      },
      {
        stepNumber: 2,
        title: 'Layer the Cassole',
        instruction: 'Brown Toulouse sausages. Rub an earthenware cassole dish with garlic. Layer beans, meats, and duck confit, finishing with beans on top. Pour in broth.',
        durationMinutes: 20
      },
      {
        stepNumber: 3,
        title: 'Break the Crust Seven Times',
        instruction: 'Bake at 150°C (300°F) for 3 hours. Every 30 minutes, push the golden crust formed on top back down into the beans with the back of a spoon to absorb rich gelatin.',
        durationMinutes: 180,
        temperature: '150°C / 300°F'
      }
    ],
    funFact: 'Castelnaudary, Carcassonne, and Toulouse hold an ancient culinary rivalry over which city produces the true supreme cassoulet.',
    servingNotes: 'Serve straight from the bubbling earthenware cassole with rustic red Corbières wine.'
  },
  {
    id: 'fra-souffle-chocolat',
    countryId: 'france',
    title: 'Soufflé au Chocolat Noir Valrhona',
    nativeTitle: 'Soufflé au Chocolat',
    description: 'Dramatic, sky-high rise soufflé made with 70% dark Valrhona chocolate crème pâtissière and airy whipped egg whites, dusted with powdered sugar.',
    image: AUTHENTIC_IMAGES.frenchSouffleChocolat,
    prepTimeMinutes: 25,
    cookTimeMinutes: 14,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 320,
    dietaryTags: ['Vegetarian', 'Classic Dessert'],
    course: 'Dessert',
    ingredients: [
      { name: '70% Dark Valrhona Chocolate (chopped)', amount: 150, unit: 'g', category: 'Chocolate' },
      { name: 'Egg Whites (at room temperature)', amount: 5, unit: 'pcs', category: 'Meringue' },
      { name: 'Egg Yolks', amount: 3, unit: 'pcs', category: 'Base' },
      { name: 'Whole Milk', amount: 125, unit: 'ml', category: 'Base' },
      { name: 'Granulated Sugar', amount: 60, unit: 'g', category: 'Sweetener' },
      { name: 'Cornstarch & Cocoa Powder', amount: 20, unit: 'g', category: 'Base' },
      { name: 'Butter and Sugar to coat ramekins', amount: 30, unit: 'g', category: 'Prep' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Coat Ramekins Vertically',
        instruction: 'Brush ramekins with softened butter using upward vertical brush strokes. Coat interior with granulated sugar, tapping out excess. This directs the soufflé to rise straight.',
        durationMinutes: 6
      },
      {
        stepNumber: 2,
        title: 'Melt Chocolate Pastry Base',
        instruction: 'Whisk milk, yolks, sugar, and cornstarch over medium heat until thickened. Off heat, melt in dark chocolate until glossy and smooth.',
        durationMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Fold Meringue and Bake',
        instruction: 'Whip egg whites with sugar to soft peaks. Fold gently into warm chocolate base. Fill ramekins to top, scrape rim with thumb to release edges, and bake at 200°C for 12-14 minutes without opening oven door.',
        durationMinutes: 14,
        temperature: '200°C / 400°F'
      }
    ],
    funFact: 'The word "soufflé" comes from the French verb "souffler", meaning "to blow" or "to puff up".',
    servingNotes: 'Rush directly to table within 90 seconds before it deflates; pour warm crème anglaise through the crust.'
  },
  {
    id: 'fra-salade-nicoise',
    countryId: 'france',
    title: 'Salade Niçoise Authentique',
    nativeTitle: 'Salade Niçoise',
    description: 'Crisp, vibrant Provençal salad with seared tuna or oil-packed tuna, ripe heirloom tomatoes, Niçoise cailletier olives, hard-boiled eggs, and anchovies.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Nizza-Salat_an_der_F_Mittelmeerk%C3%BCste.JPG/960px-Nizza-Salat_an_der_F_Mittelmeerk%C3%BCste.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 20,
    cookTimeMinutes: 0,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 350,
    dietaryTags: ['Seafood', 'Gluten-Free', 'Healthy Salad'],
    course: 'Salad',
    ingredients: [
      { name: 'Olive Oil-Packed Albacore Tuna or Fresh Seared Tuna', amount: 300, unit: 'g', category: 'Seafood' },
      { name: 'Ripe Heirloom Tomatoes (wedged)', amount: 400, unit: 'g', category: 'Vegetable' },
      { name: 'Hard-Boiled Eggs (quartered)', amount: 4, unit: 'pcs', category: 'Eggs' },
      { name: 'Small Niçoise Olives (cailletier)', amount: 80, unit: 'g', category: 'Olives' },
      { name: 'Anchovy Fillets in Olive Oil', amount: 8, unit: 'pcs', category: 'Fish' },
      { name: 'Tender Green Beans & Radishes', amount: 150, unit: 'g', category: 'Vegetable' },
      { name: 'Dijon Mustard Vinaigrette with Olive Oil', amount: 60, unit: 'ml', category: 'Dressing' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Blanch Green Beans & Cook Eggs',
        instruction: 'Blanch green beans in salted water for 3 minutes until tender-crisp; shock in ice water. Boil eggs for 8 minutes for creamy yolks.',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Whisk Vinaigrette',
        instruction: 'Emulsify red wine vinegar, Dijon mustard, minced shallot, and fruity olive oil with salt and pepper.',
        durationMinutes: 4
      },
      {
        stepNumber: 3,
        title: 'Artful Composed Plating',
        instruction: 'Arrange tomatoes, radishes, beans, flaked tuna, eggs, anchovies, and black Niçoise olives in distinct clusters on a platter. Drizzle vinaigrette over all.',
        durationMinutes: 6
      }
    ],
    funFact: 'Purists in Nice, like former mayor Jacques Médecin, passionately argued that cooked vegetables (like potatoes) should never enter a true Salade Niçoise.',
    servingNotes: 'Serve cool with a chilled glass of Côtes de Provence Rosé.'
  },
  {
    id: 'fra-creme-brulee',
    countryId: 'france',
    title: 'Crème Brûlée à la Vanille Bourbon',
    nativeTitle: 'Crème Brûlée',
    description: 'Chilled, velvety baked vanilla custard topped with a fragile glass-like disk of caramelized sugar that shatters delightfully under the spoon.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/2014_0531_Cr%C3%A8me_br%C3%BBl%C3%A9e_Doi_Mae_Salong_%28cropped%29.jpg/960px-2014_0531_Cr%C3%A8me_br%C3%BBl%C3%A9e_Doi_Mae_Salong_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 20,
    cookTimeMinutes: 35,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 390,
    dietaryTags: ['Gluten-Free', 'Vegetarian', 'Classic Dessert'],
    course: 'Dessert',
    ingredients: [
      { name: 'Heavy Cream (35% fat)', amount: 500, unit: 'ml', category: 'Dairy' },
      { name: 'Egg Yolks (large)', amount: 5, unit: 'pcs', category: 'Custard' },
      { name: 'Bourbon Vanilla Bean Pod (split & scraped)', amount: 1, unit: 'pod', category: 'Aromatics' },
      { name: 'Granulated Sugar', amount: 80, unit: 'g', category: 'Sweetener' },
      { name: 'Superfine Caster Sugar for torching', amount: 40, unit: 'g', category: 'Caramel' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Infuse Cream with Vanilla',
        instruction: 'Scald cream with split vanilla bean pod and seeds. Turn off heat and steep for 20 minutes to infuse deep floral vanilla flavor.',
        durationMinutes: 20
      },
      {
        stepNumber: 2,
        title: 'Whisk Yolks and Temper',
        instruction: 'Whisk yolks with sugar until just combined (avoid frothing). Whisk warm cream into yolks gradually. Strain into a pitcher.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Bain-Marie Low Bake',
        instruction: 'Pour into 4 wide shallow ramekins. Place in a baking pan filled with hot water halfway up ramekins. Bake at 150°C (300°F) for 30-35 minutes until set with slight wobble. Chill 4 hours.',
        durationMinutes: 35,
        temperature: '150°C / 300°F'
      },
      {
        stepNumber: 4,
        title: 'Blowtorch Caramel Crust',
        instruction: 'Sprinkle an even thin veil of superfine sugar over chilled custard. Caramelize with a kitchen blowtorch until deep golden amber and glassy. Rest 2 minutes to harden.',
        durationMinutes: 3
      }
    ],
    funFact: 'First recorded in 1691 by François Massialot, chef to the brother of King Louis XIV, in his cookbook "Le Cuisinier Roïal et Bourgeois".',
    servingNotes: 'Crack the brittle caramel disk with the back of your spoon right before diving into the cold silk underneath.'
  }
];
