
import { AUTHENTIC_IMAGES } from '../imageAssets';

export const MEXICO_RECIPES = [
  {
    id: 'mex-birria-tacos',
    countryId: 'mexico',
    title: 'Quesabirria Tacos con Consomé',
    nativeTitle: 'Tacos de Birria de Res',
    description: 'Crispy corn tortillas dipped in spiced red beef chile fat, griddled with melting Oaxaca cheese, tender shredded braised beef, and served with rich sipping consomé.',
    image: AUTHENTIC_IMAGES.mexicanQuesabirria,
    prepTimeMinutes: 30,
    cookTimeMinutes: 200,
    servings: 6,
    difficulty: 'Medium',
    caloriesPerServing: 620,
    dietaryTags: ['High-Protein', 'Iconic Street Food', 'Jalisco Style'],
    course: 'Street Food',
    ingredients: [
      { name: 'Beef Chuck Roast & Beef Shank with Bone', amount: 1500, unit: 'g', category: 'Meat' },
      { name: 'Dried Guajillo Chiles (stemmed & seeded)', amount: 6, unit: 'pcs', category: 'Chiles' },
      { name: 'Dried Ancho Chiles & Chiles de Árbol', amount: 4, unit: 'pcs', category: 'Chiles' },
      { name: 'Ripe Plum Tomatoes & White Onion', amount: 400, unit: 'g', category: 'Aromatics' },
      { name: 'Mexican Cinnamon Stick (Canela) & Cloves', amount: 5, unit: 'g', category: 'Spices' },
      { name: 'Mexican Oregano & Ground Cumin', amount: 8, unit: 'g', category: 'Spices' },
      { name: 'Fresh Corn Tortillas', amount: 18, unit: 'pcs', category: 'Tortillas' },
      { name: 'Queso Oaxaca or Mozzarella (shredded)', amount: 400, unit: 'g', category: 'Cheese' },
      { name: 'Fresh Cilantro, Diced White Onion & Lime', amount: 100, unit: 'g', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Toast and Rehydrate Dried Chiles',
        instruction: 'Toast dried guajillo and ancho chiles on a hot comal for 30 seconds per side. Submerge in boiling water for 15 minutes to soften.',
        durationMinutes: 18
      },
      {
        stepNumber: 2,
        title: 'Blend Adobo Marinade',
        instruction: 'Blend softened chiles with charred tomatoes, onion, garlic, vinegar, cinnamon, cloves, cumin, and oregano until silky smooth. Strain.',
        durationMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Slow Braise Beef to Shredding Tenderness',
        instruction: 'Sear seasoned beef in a Dutch oven. Pour in strained chile adobo and 1.5L water or beef broth. Simmer covered on low heat for 3 to 3.5 hours until beef shreds with a fork.',
        durationMinutes: 200
      },
      {
        stepNumber: 4,
        title: 'Skim Chile Consomé Oil',
        instruction: 'Shred the meat and return to broth. Skim the bright red, flavorful spiced fat that rises to the surface into a bowl for frying tortillas.',
        durationMinutes: 10
      },
      {
        stepNumber: 5,
        title: 'Griddle Quesabirria Tacos',
        instruction: 'Dip corn tortillas into the red chile fat, place on hot griddle, top with shredded Oaxaca cheese and juicy beef. Fold in half and griddle until cheese is melted and shell is crispy.',
        durationMinutes: 10
      }
    ],
    funFact: 'Originating in Jalisco as a goat stew, Birria migrated to Tijuana where food truck taqueros invented dipping tortillas into the rendered red fat to create quesabirria.',
    servingNotes: 'Serve tacos piping hot with a cup of steaming consomé topped with onion, cilantro, and lime juice for dipping.'
  },
  {
    id: 'mex-mole-poblano',
    countryId: 'mexico',
    title: 'Traditional Mole Poblano',
    nativeTitle: 'Mole Poblano Tradicional',
    description: 'Complex, velvety sauce marrying dried mulato, ancho, and pasilla chiles with Mexican dark chocolate, toasted pumpkin seeds, plantains, raisins, and warm spices.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/ChickRedMole.JPG/960px-ChickRedMole.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 60,
    cookTimeMinutes: 90,
    servings: 8,
    difficulty: 'Hard',
    caloriesPerServing: 580,
    dietaryTags: ['UNESCO Heritage', 'Puebla Classic'],
    course: 'Main',
    ingredients: [
      { name: 'Bone-in Chicken Parts or Turkey', amount: 1500, unit: 'g', category: 'Poultry' },
      { name: 'Dried Ancho, Mulato & Pasilla Chiles', amount: 200, unit: 'g', category: 'Chiles' },
      { name: 'Mexican Dark Chocolate (Ibarra or Abuelita)', amount: 80, unit: 'g', category: 'Chocolate' },
      { name: 'Ripe Plantain (sliced & fried)', amount: 1, unit: 'pc', category: 'Thickener' },
      { name: 'Toasted White Sesame Seeds & Pepitas', amount: 60, unit: 'g', category: 'Seeds' },
      { name: 'Raisins & Almonds', amount: 50, unit: 'g', category: 'Nuts & Dried Fruit' },
      { name: 'Charred Corn Tortilla & Bolillo bread', amount: 50, unit: 'g', category: 'Thickener' },
      { name: 'Cinnamon, Anise, Cloves, Coriander', amount: 10, unit: 'g', category: 'Spices' },
      { name: 'Lard or Vegetable Oil', amount: 80, unit: 'g', category: 'Fat' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Individually Fry and Char Chiles',
        instruction: 'Stem and seed dried chiles. Fry quickly in hot lard for 10 seconds per side without burning. Soak in warm broth for 30 minutes.',
        durationMinutes: 35
      },
      {
        stepNumber: 2,
        title: 'Toast Spices, Nuts & Thickeners',
        instruction: 'Individually fry almonds, pepitas, raisins, sliced plantain, and stale tortilla until charred dark brown. Toast cinnamon and anise.',
        durationMinutes: 15
      },
      {
        stepNumber: 3,
        title: 'Grind to Velvety Paste',
        instruction: 'Grind softened chiles, roasted vegetables, spices, seeds, and plantains in batches in a high-speed blender with warm broth until completely smooth.',
        durationMinutes: 15
      },
      {
        stepNumber: 4,
        title: 'Fry Paste in Hot Lard and Melt Chocolate',
        instruction: 'Heat remaining lard in a clay cazuela until smoking. Pour in blended mole paste (it will splatter vigorously). Fry for 10 minutes, stirring constantly. Add dark chocolate and simmer for 45 minutes.',
        durationMinutes: 50
      },
      {
        stepNumber: 5,
        title: 'Coat Poultry and Garnish',
        instruction: 'Simmer poached chicken pieces in the glistening mole sauce for 10 minutes. Garnish with toasted white sesame seeds.',
        durationMinutes: 10
      }
    ],
    funFact: 'Legend attributes the invention of mole to Sister Andrea de la Asunción at the Santa Rosa convent in Puebla in the 17th century to honor the visiting Viceroy.',
    servingNotes: 'Serve with Mexican red rice, warm corn tortillas, and pickled onions.'
  },
  {
    id: 'mex-pozole-rojo',
    countryId: 'mexico',
    title: 'Pozole Rojo de Puerco',
    nativeTitle: 'Pozole Rojo de Jalisco',
    description: 'Ancestral ceremonial soup of tender pork shoulder and blossoming nixtamalized hominy corn in an aromatic broth of guajillo and ancho chiles.',
    image: AUTHENTIC_IMAGES.mexicanPozoleRojo,
    prepTimeMinutes: 25,
    cookTimeMinutes: 120,
    servings: 8,
    difficulty: 'Medium',
    caloriesPerServing: 460,
    dietaryTags: ['High-Protein', 'Celebratory Stew'],
    course: 'Soup',
    ingredients: [
      { name: 'Pork Shoulder & Pork Trotter (for gelatin)', amount: 1500, unit: 'g', category: 'Meat' },
      { name: 'White Prepared Hominy Corn (Maíz Pozolero)', amount: 800, unit: 'g', category: 'Grain' },
      { name: 'Dried Guajillo Chiles & Ancho Chiles', amount: 8, unit: 'pcs', category: 'Chiles' },
      { name: 'Garlic Head & Whole White Onion', amount: 1, unit: 'each', category: 'Aromatics' },
      { name: 'Mexican Dried Oregano', amount: 10, unit: 'g', category: 'Herb' },
      { name: 'Shredded Green Cabbage, Sliced Radishes, Limes', amount: 200, unit: 'g', category: 'Table Garnishes' },
      { name: 'Crispy Corn Tostadas', amount: 12, unit: 'pcs', category: 'Serving' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Simmer Pork & Hominy',
        instruction: 'In a huge stockpot, simmer pork pieces and rinsed hominy with garlic and onion in 4L water for 90 minutes until pork is tender and hominy blossoms open like flowers.',
        durationMinutes: 90
      },
      {
        stepNumber: 2,
        title: 'Blend Red Chile Salsa',
        instruction: 'Boil stemmed chiles with garlic. Puree in blender with a ladle of broth, then strain directly into the simmering soup pot.',
        durationMinutes: 15
      },
      {
        stepNumber: 3,
        title: 'Shred Meat & Final Simmer',
        instruction: 'Remove pork, shred into bite-sized pieces, and return to the crimson broth. Simmer 20 minutes to marry flavors.',
        durationMinutes: 20
      }
    ],
    funFact: 'Pozole was a sacred ritual dish of the Aztecs prepared during harvest celebrations, where blooming white hominy kernels symbolized purity.',
    servingNotes: 'Serve in deep bowls with side dishes of shredded cabbage, sliced radishes, dried oregano, lime wedges, and tostadas.'
  },
  {
    id: 'mex-carnitas',
    countryId: 'mexico',
    title: 'Michoacán-Style Crispy Pork Carnitas',
    nativeTitle: 'Carnitas de Michoacán',
    description: 'Succulent pork shoulder confited in pure lard with Mexican orange peel, Mexican Coke, evaporated milk, and Mexican cinnamon until meltingly tender inside and crispy caramelized outside.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Carnitas.jpg/960px-Carnitas.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 20,
    cookTimeMinutes: 150,
    servings: 8,
    difficulty: 'Medium',
    caloriesPerServing: 590,
    dietaryTags: ['High-Protein', 'Keto-Friendly', 'Street Food Legend'],
    course: 'Main',
    ingredients: [
      { name: 'Pork Shoulder / Butt (cut into 6cm cubes)', amount: 2000, unit: 'g', category: 'Meat' },
      { name: 'Pure Rendered Pork Lard (Manteca)', amount: 500, unit: 'g', category: 'Cooking Fat' },
      { name: 'Fresh Orange (halved and juiced with peels included)', amount: 1, unit: 'pc', category: 'Flavor' },
      { name: 'Mexican Coca-Cola (cane sugar)', amount: 150, unit: 'ml', category: 'Caramelization' },
      { name: 'Evaporated Milk', amount: 60, unit: 'ml', category: 'Browning' },
      { name: 'Garlic Head, Bay Leaves & Mexican Oregano', amount: 15, unit: 'g', category: 'Aromatics' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Confit in Lard',
        instruction: 'Melt lard in a large heavy copper or cast-iron pot. Add pork chunks, orange juice, orange rinds, evaporated milk, Mexican cola, garlic, and bay leaves. Simmer on low for 2 hours.',
        durationMinutes: 120
      },
      {
        stepNumber: 2,
        title: 'Crank Heat to Crisp Edges',
        instruction: 'Once liquid has evaporated and meat is tender, raise heat so pork fries in its own rendered lard for 15 minutes until edges are crispy and golden mahogany.',
        durationMinutes: 15,
        temperature: 'Medium-High'
      },
      {
        stepNumber: 3,
        title: 'Chop and Assemble Tacos',
        instruction: 'Roughly chop meat on a wooden cutting board with a heavy cleaver. Spoon into warm corn tortillas with salsa verde.',
        durationMinutes: 5
      }
    ],
    funFact: 'Quiroga in Michoacán is considered the carnitas capital of the world, where copper cauldrons (cazos de cobre) have been used for generations.',
    servingNotes: 'Serve on double corn tortillas with chopped cilantro, white onion, lime, and spicy salsa verde.'
  },
  {
    id: 'mex-guacamole-totopos',
    countryId: 'mexico',
    title: 'Molcajete Guacamole con Totopos Caseros',
    nativeTitle: 'Guacamole Tradicional en Molcajete',
    description: 'Creamy Hass avocados pounded in a volcanic stone molcajete with serrano chiles, white onion, cilantro, sea salt, and fresh lime juice, served with warm house-fried corn chips.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Guacamole_IMGP1271.jpg/960px-Guacamole_IMGP1271.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 15,
    cookTimeMinutes: 5,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 280,
    dietaryTags: ['Vegan', 'Gluten-Free', 'Healthy Fat'],
    course: 'Appetizer',
    ingredients: [
      { name: 'Ripe Hass Avocados', amount: 4, unit: 'pcs', category: 'Produce' },
      { name: 'Fresh Serrano or Jalapeño Chiles (minced)', amount: 2, unit: 'pcs', category: 'Heat' },
      { name: 'White Onion (finely diced)', amount: 60, unit: 'g', category: 'Aromatics' },
      { name: 'Fresh Cilantro (chopped)', amount: 30, unit: 'g', category: 'Herbs' },
      { name: 'Fresh Lime Juice', amount: 25, unit: 'ml', category: 'Acid' },
      { name: 'Coarse Sea Salt', amount: 6, unit: 'g', category: 'Seasoning' },
      { name: 'Fresh Crispy Corn Totopos (tortilla chips)', amount: 200, unit: 'g', category: 'Chips' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Grind the Flavor Base (Pasta)',
        instruction: 'In a volcanic stone molcajete, grind minced serrano chiles, half the onion, salt, and cilantro stems with the pestle (tejolote) until an aromatic paste forms.',
        durationMinutes: 4
      },
      {
        stepNumber: 2,
        title: 'Coarsely Mash Avocados',
        instruction: 'Halve avocados, scoop flesh into molcajete, and mash coarsely with a fork or pestle, leaving rustic chunks.',
        durationMinutes: 3
      },
      {
        stepNumber: 3,
        title: 'Fold and Finish',
        instruction: 'Gently fold in lime juice, remaining diced white onion, and chopped cilantro leaves. Taste and adjust salt.',
        durationMinutes: 2
      }
    ],
    funFact: 'The Aztecs called it "āhuacamolli" (avocado sauce). The molcajete stone releases microscopic mineral seasoning into the mash.',
    servingNotes: 'Serve directly in the volcanic stone molcajete surrounded by hot, freshly salted totopos.'
  },
  {
    id: 'mex-enchiladas-suizas',
    countryId: 'mexico',
    title: 'Enchiladas Suizas Gratinadas',
    nativeTitle: 'Enchiladas Suizas',
    description: 'Rolled shredded chicken corn tortillas bathed in a creamy roasted tomatillo-serrano green sauce, smothered in melted Chihuahua cheese and broiled.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Enchilada_Rice_Beans.jpg/960px-Enchilada_Rice_Beans.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 25,
    cookTimeMinutes: 20,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 520,
    dietaryTags: ['High-Protein', 'Mexican Classic'],
    course: 'Main',
    ingredients: [
      { name: 'Corn Tortillas', amount: 12, unit: 'pcs', category: 'Tortillas' },
      { name: 'Poached Shredded Chicken Breast', amount: 450, unit: 'g', category: 'Poultry' },
      { name: 'Fresh Husked Tomatillos (roasted)', amount: 600, unit: 'g', category: 'Salsa' },
      { name: 'Serrano Chiles & Garlic Cloves', amount: 4, unit: 'pcs', category: 'Salsa' },
      { name: 'Mexican Crema or Sour Cream', amount: 150, unit: 'ml', category: 'Salsa' },
      { name: 'Queso Chihuahua or Monterey Jack (shredded)', amount: 250, unit: 'g', category: 'Cheese' },
      { name: 'Fresh Cilantro', amount: 25, unit: 'g', category: 'Herbs' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Roast Green Salsa Base',
        instruction: 'Broil husked tomatillos, serrano chiles, onion, and garlic until charred. Blend with fresh cilantro and Mexican crema until velvety green.',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Quick Flash-Fry Tortillas',
        instruction: 'Dip tortillas in warm oil for 5 seconds to soften so they roll without cracking.',
        durationMinutes: 4
      },
      {
        stepNumber: 3,
        title: 'Roll and Fill',
        instruction: 'Fill tortillas with seasoned chicken, roll into cylinders, and arrange snugly in a baking dish. Pour warm creamy green sauce over all.',
        durationMinutes: 6
      },
      {
        stepNumber: 4,
        title: 'Gratinate Cheese Cap',
        instruction: 'Cover heavily with shredded Chihuahua cheese. Broil at 220°C for 10 minutes until cheese is bubbly and speckled brown.',
        durationMinutes: 10,
        temperature: '220°C / 425°F'
      }
    ],
    funFact: 'Named "Suizas" (Swiss) because the lavish use of cream and melted cheese reminded Mexico City diners of Swiss dairy culture.',
    servingNotes: 'Garnish with thinly sliced white onion rings and cilantro leaves.'
  },
  {
    id: 'mex-chiles-nogada',
    countryId: 'mexico',
    title: 'Chiles en Nogada de Puebla',
    nativeTitle: 'Chiles en Nogada',
    description: 'Roasted poblano chiles stuffed with sweet-savory shredded pork picadillo with apples, pears, and raisins, blanketed in creamy walnut nogada and pomegranate seeds.',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=1200&q=80',
    prepTimeMinutes: 45,
    cookTimeMinutes: 30,
    servings: 4,
    difficulty: 'Hard',
    caloriesPerServing: 510,
    dietaryTags: ['UNESCO Heritage', 'Independence Dish'],
    course: 'Main',
    ingredients: [
      { name: 'Large Fresh Poblano Chiles', amount: 4, unit: 'pcs', category: 'Produce' },
      { name: 'Ground Pork & Beef', amount: 400, unit: 'g', category: 'Meat' },
      { name: 'Crisp Apple, Pear & Peach (diced)', amount: 200, unit: 'g', category: 'Fruit' },
      { name: 'Peeled Fresh Walnuts (Nueces de Castilla)', amount: 200, unit: 'g', category: 'Sauce' },
      { name: 'Queso de Cabra (goat cheese) & Milk', amount: 150, unit: 'g', category: 'Sauce' },
      { name: 'Ruby Pomegranate Arils', amount: 80, unit: 'g', category: 'Garnish' },
      { name: 'Fresh Flat-Leaf Parsley', amount: 20, unit: 'g', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Char and Steam Poblanos',
        instruction: 'Char poblanos directly over open flame until black. Steam in a plastic bag for 10 minutes, then peel off charred skin. Make a single slit down one side and remove seeds.',
        durationMinutes: 15
      },
      {
        stepNumber: 2,
        title: 'Cook Fruit Picadillo Filling',
        instruction: 'Sauté minced meat with diced apples, pears, peaches, raisins, almonds, and spices until caramelized and fragrant.',
        durationMinutes: 20
      },
      {
        stepNumber: 3,
        title: 'Blend Velvety Nogada Cream',
        instruction: 'Blend peeled walnuts, goat cheese, milk, a dash of sherry, and sugar until silky smooth and porcelain white.',
        durationMinutes: 5
      },
      {
        stepNumber: 4,
        title: 'Stuff and Plate Patriotic Colors',
        instruction: 'Stuff chiles with warm picadillo. Place on plate, ladle cold white nogada sauce completely over each pepper, and garnish with green parsley and red pomegranate seeds.',
        durationMinutes: 5
      }
    ],
    funFact: 'Created by Augustinian nuns in Puebla in 1821 to celebrate Mexican Independence general Agustín de Iturbide, displaying the green, white, and red colors of the new flag.',
    servingNotes: 'Traditionally served at room temperature during Mexican Independence month (September).'
  },
  {
    id: 'mex-ceviche-pescado',
    countryId: 'mexico',
    title: 'Ceviche de Pescado estilo Costeño',
    nativeTitle: 'Ceviche de Pescado al Estilo Costeño',
    description: 'Fresh wild white sea bass cured in tart Mexican lime juice, tossed with vine tomatoes, serrano peppers, red onion, cilantro, cucumber, and avocado.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Cebiche_de_corvina.JPG/960px-Cebiche_de_corvina.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 25,
    cookTimeMinutes: 0,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 240,
    dietaryTags: ['Seafood', 'Gluten-Free', 'Healthy & Fresh'],
    course: 'Appetizer',
    ingredients: [
      { name: 'Fresh Wild White Fish Fillet (Snapper, Bass or Corvina, 1cm diced)', amount: 500, unit: 'g', category: 'Fish' },
      { name: 'Fresh Mexican Lime Juice', amount: 180, unit: 'ml', category: 'Acid' },
      { name: 'Persian Cucumber (peeled & seeded)', amount: 150, unit: 'g', category: 'Produce' },
      { name: 'Ripe Roma Tomatoes (diced)', amount: 200, unit: 'g', category: 'Produce' },
      { name: 'Red Onion (finely diced)', amount: 80, unit: 'g', category: 'Aromatics' },
      { name: 'Fresh Serrano Chile & Cilantro', amount: 30, unit: 'g', category: 'Heat & Herb' },
      { name: 'Hass Avocado (cubed) & Sea Salt', amount: 1, unit: 'pc', category: 'Garnish' },
      { name: 'Crispy Corn Tostadas or Saltines', amount: 8, unit: 'pcs', category: 'Serving' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Citrus Cure Fish',
        instruction: 'Submerge cubed fish in fresh lime juice with sea salt. Refrigerate for 20 minutes until the fish turns opaque white and firm.',
        durationMinutes: 20
      },
      {
        stepNumber: 2,
        title: 'Toss Fresh Vegetables',
        instruction: 'Drain half the excess lime juice. Toss fish with cucumber, tomato, red onion, minced serrano, and cilantro.',
        durationMinutes: 4
      },
      {
        stepNumber: 3,
        title: 'Avocado Finish',
        instruction: 'Gently fold in cubed avocado and a drizzle of olive oil. Mound generously onto crispy corn tostadas.',
        durationMinutes: 2
      }
    ],
    funFact: 'Coastal palapas in Sinaloa and Veracruz serve ceviche with fiery habanero salsas and cold Pacifico beer.',
    servingNotes: 'Serve icy cold on crispy corn tostadas with Mexican hot sauce like Cholula or Valentina.'
  },
  {
    id: 'mex-tamales-oaxaquenos',
    countryId: 'mexico',
    title: 'Tamales Oaxaqueños en Hoja de Plátano',
    nativeTitle: 'Tamales de Mole en Hoja de Plátano',
    description: 'Tender stone-ground corn masa whipped with pork lard, filled with rich black mole and shredded chicken, wrapped in fragrant steamed banana leaves.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Tamale_Oaxaque%C3%B1o.jpg/960px-Tamale_Oaxaque%C3%B1o.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 45,
    cookTimeMinutes: 75,
    servings: 12,
    difficulty: 'Hard',
    caloriesPerServing: 380,
    dietaryTags: ['High-Protein', 'Oaxacan Heritage'],
    course: 'Main',
    ingredients: [
      { name: 'Fresh Nixtamal Corn Masa (Masa Harina)', amount: 600, unit: 'g', category: 'Masa' },
      { name: 'Whipped Pork Lard or Shortening', amount: 200, unit: 'g', category: 'Fat' },
      { name: 'Warm Rich Chicken Broth', amount: 400, unit: 'ml', category: 'Liquid' },
      { name: 'Shredded Chicken in Black Mole Sauce', amount: 400, unit: 'g', category: 'Filling' },
      { name: 'Fresh Banana Leaves (softened over flame)', amount: 12, unit: 'sheets', category: 'Wrappers' },
      { name: 'Baking Powder and Sea Salt', amount: 10, unit: 'g', category: 'Seasoning' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Whip Masa to Float Test',
        instruction: 'Beat lard until fluffy and white like buttercream. Gradually beat in masa, baking powder, salt, and warm broth until a small dollop floats in a cup of water.',
        durationMinutes: 15
      },
      {
        stepNumber: 2,
        title: 'Spread and Fold Banana Leaves',
        instruction: 'Spread a rectangle of masa onto a pliable softened banana leaf. Place a spoonful of chicken mole in center. Fold leaf into a neat envelope and tie with leaf strips.',
        durationMinutes: 20
      },
      {
        stepNumber: 3,
        title: 'Steam to Perfection',
        instruction: 'Stand tamales upright in a steamer (tamalera). Steam over boiling water for 65-75 minutes until masa easily separates from the banana leaf.',
        durationMinutes: 75
      }
    ],
    funFact: 'In Oaxaca, banana leaves are preferred over corn husks because they impart a floral, tea-like herbal perfume to the masa.',
    servingNotes: 'Unwrap while steaming hot and serve with hot Mexican spiced chocolate (champurrado).'
  },
  {
    id: 'mex-elote-callejero',
    countryId: 'mexico',
    title: 'Elote Callejero Asado (Mexican Street Corn)',
    nativeTitle: 'Elote Preparado Callejero',
    description: 'Charred sweet corn on the cob slathered in Mexican crema and lime-spiked mayonnaise, coated in crumbled Queso Cotija, chile piquín, and cilantro.',
    image: AUTHENTIC_IMAGES.mexicanElote,
    prepTimeMinutes: 10,
    cookTimeMinutes: 12,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 260,
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'Street Food'],
    course: 'Street Food',
    ingredients: [
      { name: 'Fresh Sweet Corn on the Cob (husks stripped)', amount: 4, unit: 'ears', category: 'Corn' },
      { name: 'Mexican Crema or Mayonnaise', amount: 80, unit: 'g', category: 'Slather' },
      { name: 'Aged Queso Cotija (finely crumbled)', amount: 100, unit: 'g', category: 'Cheese' },
      { name: 'Ground Chile Piquín or Tajín Seasoning', amount: 10, unit: 'g', category: 'Spice' },
      { name: 'Fresh Lime Wedges', amount: 2, unit: 'pcs', category: 'Acid' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Char Corn on Grill or Comal',
        instruction: 'Grill sweet corn ears directly over hot coals or cast-iron skillet, rotating every 2 minutes until kernels are blistered with smoky black spots.',
        durationMinutes: 10,
        temperature: 'High Heat'
      },
      {
        stepNumber: 2,
        title: 'Slather with Crema',
        instruction: 'Insert wooden skewers into the bottom. Brush hot corn generously with crema or mayonnaise.',
        durationMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Roll in Cotija & Chile',
        instruction: 'Roll corn in crumbled Cotija cheese until thickly coated. Dust with chile piquín and squeeze fresh lime juice over top.',
        durationMinutes: 2
      }
    ],
    funFact: 'Found on street carts throughout Mexico City, "Eloteros" push wheeled carts with steaming cauldrons and open grills.',
    servingNotes: 'Eat hot directly off the skewer.'
  },
  {
    id: 'mex-tlayuda-oaxaquena',
    countryId: 'mexico',
    title: 'Oaxacan Tlayuda con Tasajo',
    nativeTitle: 'Tlayuda Oaxaqueña con Tasajo',
    description: 'Giant crisp toasted corn tortilla smeared with unrefined pork asiento, refried black beans, stringy quesillo cheese, shredded cabbage, and grilled salted beef tasajo.',
    image: AUTHENTIC_IMAGES.mexicanTlayuda,
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    servings: 2,
    difficulty: 'Easy',
    caloriesPerServing: 620,
    dietaryTags: ['High-Protein', 'Oaxacan Pizza', 'Street Food'],
    course: 'Main',
    ingredients: [
      { name: 'Giant 30cm Thin Oaxacan Corn Tortillas (Tlayudas)', amount: 2, unit: 'pcs', category: 'Masa' },
      { name: 'Asiento (unrefined toasted pork lard)', amount: 40, unit: 'g', category: 'Fat' },
      { name: 'Refried Black Beans with Avocado Leaves', amount: 200, unit: 'g', category: 'Beans' },
      { name: 'Quesillo (Oaxacan string cheese, shredded)', amount: 200, unit: 'g', category: 'Cheese' },
      { name: 'Tasajo (thin salted beef steak, grilled)', amount: 250, unit: 'g', category: 'Meat' },
      { name: 'Shredded Green Cabbage & Sliced Avocado', amount: 150, unit: 'g', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Grill Tasajo Beef',
        instruction: 'Grill salted tasajo beef steaks over hot coals for 2 minutes per side until charred and tender.',
        durationMinutes: 5
      },
      {
        stepNumber: 2,
        title: 'Crisp Tlayuda Base',
        instruction: 'Warm giant tlayuda tortilla over wire grill. Smear with unrefined asiento and spread black bean puree.',
        durationMinutes: 4
      },
      {
        stepNumber: 3,
        title: 'Mound Toppings and Fold',
        instruction: 'Top with shredded cabbage, pulled quesillo cheese, and grilled tasajo strips. Fold in half like a giant book or serve open-faced.',
        durationMinutes: 3
      }
    ],
    funFact: 'Often dubbed "Mexican pizza", Tlayudas were recognized in 2020 on Netflix’s Street Food Latin America as the top street food in the Americas.',
    servingNotes: 'Slice into large wedges and serve with charred chilhuacle salsa.'
  },
  {
    id: 'mex-churros-con-chocolate',
    countryId: 'mexico',
    title: 'Churros Caseros con Salsa de Chocolate',
    nativeTitle: 'Churros con Chocolate Mexicano',
    description: 'Golden ridged choux pastry piped into hot oil until crispy outside and tender inside, rolled in cinnamon sugar and served with thick spiced Mexican dark chocolate dip.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Chocolate_con_churros_%2827343655726%29.jpg/960px-Chocolate_con_churros_%2827343655726%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 6,
    difficulty: 'Easy',
    caloriesPerServing: 350,
    dietaryTags: ['Vegetarian', 'Classic Dessert'],
    course: 'Dessert',
    ingredients: [
      { name: 'All-Purpose Flour', amount: 250, unit: 'g', category: 'Pastry' },
      { name: 'Water', amount: 250, unit: 'ml', category: 'Liquid' },
      { name: 'Unsalted Butter', amount: 50, unit: 'g', category: 'Fat' },
      { name: 'Cane Sugar', amount: 20, unit: 'g', category: 'Pastry' },
      { name: 'Large Eggs', amount: 2, unit: 'pcs', category: 'Pastry' },
      { name: 'Granulated Sugar & Mexican Cinnamon for dusting', amount: 120, unit: 'g', category: 'Dusting' },
      { name: 'Mexican Dark Stone-Ground Chocolate for dipping', amount: 150, unit: 'g', category: 'Dip' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Cook Choux Panade Dough',
        instruction: 'Boil water, butter, and sugar. Dump flour all at once and stir vigorously with a wooden spoon over medium heat until dough pulls cleanly from pot walls.',
        durationMinutes: 6
      },
      {
        stepNumber: 2,
        title: 'Beat in Eggs',
        instruction: 'Cool dough for 5 minutes. Beat in eggs one at a time until dough is smooth, glossy, and pipeable.',
        durationMinutes: 4
      },
      {
        stepNumber: 3,
        title: 'Pipe and Deep Fry',
        instruction: 'Transfer to piping bag with a closed star tip (1M). Pipe 15cm lengths directly into 180°C oil, snipping with kitchen shears. Fry 4-5 minutes until deep golden brown.',
        durationMinutes: 10,
        temperature: '180°C / 350°F'
      },
      {
        stepNumber: 4,
        title: 'Roll in Cinnamon Sugar',
        instruction: 'Drain on paper towels for 30 seconds, then roll immediately in cinnamon sugar while hot so sugar clings to ridges.',
        durationMinutes: 3
      }
    ],
    funFact: 'The star-shaped nozzle is not merely decorative: the ridges ensure the expanding dough cooks evenly without steam pockets exploding in hot oil.',
    servingNotes: 'Dip immediately into thick hot Mexican chocolate spiced with cinnamon and chili.'
  }
];
