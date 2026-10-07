
import { AUTHENTIC_IMAGES } from '../imageAssets';

export const SPAIN_RECIPES = [
  {
    id: 'es-paella-valenciana',
    countryId: 'spain',
    title: 'Authentic Paella Valenciana',
    nativeTitle: 'Paella Valenciana',
    description: 'The definitive Spanish rice masterwork from Valencia: Bomba rice simmered in saffron broth with browned chicken, rabbit, flat green beans, butter beans, and rosemary, forming the crispy "socarrat" crust.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/01_Paella_Valenciana_original.jpg/960px-01_Paella_Valenciana_original.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 30,
    cookTimeMinutes: 40,
    servings: 4,
    difficulty: 'Hard',
    caloriesPerServing: 590,
    dietaryTags: ['Traditional', 'Gluten-Free', 'Iconic', 'UNESCO Heritage'],
    course: 'Main',
    ingredients: [
      { name: 'Spanish Bomba Rice (D.O. Valencia)', amount: 400, unit: 'g', category: 'Rice' },
      { name: 'Bone-in Chicken (chopped into small pieces)', amount: 500, unit: 'g', category: 'Meat' },
      { name: 'Rabbit or Chicken Thighs (chopped)', amount: 400, unit: 'g', category: 'Meat' },
      { name: 'Ferroen / Flat Green Beans (trimmed)', amount: 200, unit: 'g', category: 'Vegetables' },
      { name: 'Garrofó or Large Butter Beans', amount: 150, unit: 'g', category: 'Vegetables' },
      { name: 'Grated Ripe Tomato', amount: 150, unit: 'g', category: 'Sofrito' },
      { name: 'Extra Virgin Spanish Olive Oil', amount: 90, unit: 'ml', category: 'Cooking' },
      { name: 'Spanish Saffron Strands', amount: 1, unit: 'g', category: 'Spices' },
      { name: 'Sweet Smoked Paprika (Pimentón de la Vera)', amount: 8, unit: 'g', category: 'Spices' },
      { name: 'Fresh Rosemary Sprig', amount: 1, unit: 'pcs', category: 'Aromatics' },
      { name: 'Water or Chicken Broth', amount: 1200, unit: 'ml', category: 'Liquid' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Deep Brown the Meat in Paella Pan',
        instruction: 'Heat olive oil in a wide 38-42cm paella pan over medium heat. Season chicken and rabbit generously with salt. Brown patiently for 15 minutes until every piece has a deep mahogany crust.',
        durationMinutes: 18,
        chefTip: 'The rich brown caramelized bits on the bottom of the pan provide the foundational flavor for the rice broth.'
      },
      {
        stepNumber: 2,
        title: 'Sauté Green Beans & Tomato Sofrito',
        instruction: 'Push meat to the outer rim. Add green beans and garrofó beans to center and sauté for 5 minutes. Push aside, add grated tomato and smoked paprika to center, stirring for 2 minutes until caramelized.',
        durationMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Build the Saffron Broth',
        instruction: 'Pour in 1.2 liters of water. Add toasted saffron threads and fresh rosemary sprig. Bring to a rapid rolling boil for 15 minutes to infuse all flavors into a golden broth. Remove rosemary.',
        durationMinutes: 15
      },
      {
        stepNumber: 4,
        title: 'Scatter the Rice & Simmer',
        instruction: 'Sprinkle Bomba rice in a diagonal cross through the pan, then distribute evenly with a wooden spatula. Do NOT stir the rice again! Cook on high heat for 8 minutes, then reduce to medium-low for 10 minutes.',
        durationMinutes: 18,
        chefTip: 'Never stir paella rice after the initial distribution! Stirring releases amylopectin starch, ruining the distinct individual grain texture.'
      },
      {
        stepNumber: 5,
        title: 'Create the Crispy Socarrat',
        instruction: 'In the final 2 minutes, turn heat up to medium-high. Listen for a crackling, sizzling sound and a toasty aroma (not burnt). Remove from heat, cover with a clean kitchen towel, and rest 5 minutes.',
        durationMinutes: 7
      }
    ],
    servingNotes: 'Serve straight in the pan in the center of the table, accompanied by fresh lemon wedges and rustic bread.',
    funFact: 'In Valencia, adding chorizo or seafood to a Paella Valenciana is considered culinary heresy; authentic Paella Valenciana is strictly a land dish created by agricultural workers in the Albufera lagoons.'
  },
  {
    id: 'es-tortilla-espanola',
    countryId: 'spain',
    title: 'Tortilla Española (Classic Potato Omelette)',
    nativeTitle: 'Tortilla de Patatas',
    description: 'Spain’s most beloved national tapas staple: tender poached potatoes and sweet slow-caramelized onions suspended in a silky, creamy egg omelette, gently seared to a golden disk.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Tortilla_de_patata_-_San_Sebasti%C3%A1n.jpg/960px-Tortilla_de_patata_-_San_Sebasti%C3%A1n.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 20,
    cookTimeMinutes: 25,
    servings: 6,
    difficulty: 'Medium',
    caloriesPerServing: 320,
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'National Tapas', 'Iconic'],
    course: 'Appetizer',
    ingredients: [
      { name: 'Yukon Gold or Kennebec Potatoes (sliced into 3mm chips)', amount: 800, unit: 'g', category: 'Vegetables' },
      { name: 'Yellow Onions (thinly sliced)', amount: 300, unit: 'g', category: 'Vegetables' },
      { name: 'Large Farm Eggs (room temperature)', amount: 7, unit: 'pcs', category: 'Eggs' },
      { name: 'Extra Virgin Spanish Olive Oil (for confiting)', amount: 250, unit: 'ml', category: 'Cooking' },
      { name: 'Fine Sea Salt', amount: 8, unit: 'g', category: 'Seasoning' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Confit the Potatoes & Onions',
        instruction: 'Heat olive oil in a deep skillet over medium-low heat. Add sliced potatoes and onions with 1 tsp salt. Cook gently (poaching, not crisp-frying) for 20 minutes, turning occasionally, until potatoes are tender enough to cut with a fork.',
        durationMinutes: 22,
        chefTip: 'The potatoes should poach gently in the olive oil until tender and melting, without developing browned crispy edges.'
      },
      {
        stepNumber: 2,
        title: 'Drain and Infuse Eggs',
        instruction: 'Drain potatoes and onions through a colander, reserving the fragrant olive oil for future cooking. In a large bowl, beat the 7 eggs with salt. While hot, gently fold the drained potatoes and onions into the eggs. Let sit undisturbed for 10 minutes so the warm potatoes absorb the egg.',
        durationMinutes: 12
      },
      {
        stepNumber: 3,
        title: 'Set the Base in Skillet',
        instruction: 'Heat 1 tbsp reserved olive oil in a 24cm nonstick skillet over medium heat until smoking hot. Pour in the egg mixture. Shake pan in circular motion and tuck edges in with a spatula for 2 minutes to form a firm outer rim.',
        durationMinutes: 3
      },
      {
        stepNumber: 4,
        title: 'The Confident Plate Flip',
        instruction: 'Place a large flat plate over the skillet. With one swift, confident motion, flip the pan over onto the plate. Slide the tortilla smoothly back into the skillet to cook the other side for 2 minutes for a juicy "meloso" center.',
        durationMinutes: 3
      },
      {
        stepNumber: 5,
        title: 'Rest to Settle',
        instruction: 'Slide onto a clean serving plate. Let rest for at least 15 minutes before cutting.',
        durationMinutes: 15
      }
    ],
    servingNotes: 'Delicious hot, warm, or room temperature, cut into pincho wedges and served on crusty baguette slices with a glass of vermouth or beer.',
    funFact: 'In Spain, the debate over whether an authentic tortilla should include onion ("concebollistas") or omit onion ("sincebollistas") is a passionate national culinary debate.'
  },
  {
    id: 'es-gazpacho',
    countryId: 'spain',
    title: 'Authentic Andalusian Gazpacho',
    nativeTitle: 'Gazpacho Andaluz',
    description: 'The ultimate refreshing Spanish summer soup: ripe vine tomatoes, crisp cucumber, green pepper, garlic, and stale bread blended with cold-pressed olive oil and sherry vinegar into a creamy chilled silk.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Gazpacho_Malague%C3%B1o_con_su_%E2%80%9Cpica%C3%ADto%E2%80%9D_-_Moreno%2C_Playa_Burriana_%28cropped%29.jpg/960px-Gazpacho_Malague%C3%B1o_con_su_%E2%80%9Cpica%C3%ADto%E2%80%9D_-_Moreno%2C_Playa_Burriana_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 20,
    cookTimeMinutes: 0,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 180,
    dietaryTags: ['Vegan', 'Raw', 'Refreshing', 'Andalusian Classic'],
    course: 'Soup',
    ingredients: [
      { name: 'Ultra-Ripe Vine Tomatoes (cored and chopped)', amount: 1000, unit: 'g', category: 'Vegetables' },
      { name: 'Italian Green Pepper (cubanelle or bell)', amount: 100, unit: 'g', category: 'Vegetables' },
      { name: 'Persian or English Cucumber (peeled)', amount: 100, unit: 'g', category: 'Vegetables' },
      { name: 'Small Garlic Clove (germ removed)', amount: 1, unit: 'pcs', category: 'Aromatics' },
      { name: 'Stale Crustless White Bread', amount: 50, unit: 'g', category: 'Emulsifier' },
      { name: 'Extra Virgin Olive Oil (Spanish Picual or Arbequina)', amount: 100, unit: 'ml', category: 'Emulsifier' },
      { name: 'Sherry Vinegar (Vinagre de Jerez)', amount: 30, unit: 'ml', category: 'Acidity' },
      { name: 'Fine Sea Salt & Cold Water', amount: 8, unit: 'g', category: 'Seasoning' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Blend Vegetables & Bread',
        instruction: 'Soak stale bread in 2 tbsp water. In a high-speed blender, combine chopped tomatoes, green pepper, peeled cucumber, garlic, soaked bread, salt, and sherry vinegar. Blend on high speed for 2 minutes until liquefied.',
        durationMinutes: 5
      },
      {
        stepNumber: 2,
        title: 'Emulsify with Olive Oil',
        instruction: 'With the blender running on medium speed, slowly drizzle in 100ml extra virgin olive oil. The mixture will magically transform from red to a creamy, pale coral emulsion.',
        durationMinutes: 3,
        chefTip: 'Slowly streaming in the olive oil creates an emulsion similar to mayonnaise, giving gazpacho its luscious creamy body without any dairy.'
      },
      {
        stepNumber: 3,
        title: 'Pass Through Chinois Sieve',
        instruction: 'Pour soup through a fine-mesh strainer (chinois), pressing firmly with a ladle to remove all seeds and skins, yielding an ultra-smooth velvety soup.',
        durationMinutes: 5
      },
      {
        stepNumber: 4,
        title: 'Chill Thoroughly',
        instruction: 'Refrigerate in a covered pitcher for at least 3 hours until icy cold. Adjust salt and vinegar if needed.',
        durationMinutes: 180
      }
    ],
    servingNotes: 'Serve in chilled glasses or shallow bowls garnished with tiny cubes of cucumber, bell pepper, and a drizzle of emerald olive oil.',
    funFact: 'Before tomatoes arrived from the Americas in the 16th century, original Roman-era gazpacho in Andalusia was white ("Ajo Blanco"), made purely with bread, garlic, almonds, water, and olive oil.'
  },
  {
    id: 'es-gambas-al-ajillo',
    countryId: 'spain',
    title: 'Gambas al Ajillo (Sizzling Garlic Shrimp)',
    nativeTitle: 'Gambas al Ajillo',
    description: 'Plump wild prawns flash-sizzled in aromatic Spanish olive oil with thinly sliced garlic chips, spicy guindilla pepper, dry sherry, and fresh parsley, served sizzling hot.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Gambas_al_ajillo_en_madrid.jpg/960px-Gambas_al_ajillo_en_madrid.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 10,
    cookTimeMinutes: 5,
    servings: 2,
    difficulty: 'Easy',
    caloriesPerServing: 310,
    dietaryTags: ['Gluten-Free', 'High Protein', 'Iconic Tapas'],
    course: 'Appetizer',
    ingredients: [
      { name: 'Raw Large Prawns/Shrimp (peeled, deveined, patted dry)', amount: 400, unit: 'g', category: 'Seafood' },
      { name: 'Fresh Garlic Cloves (thinly sliced into chips)', amount: 8, unit: 'pcs', category: 'Aromatics' },
      { name: 'Dried Spanish Guindilla or Red Chili Peppers', amount: 2, unit: 'pcs', category: 'Spices' },
      { name: 'Extra Virgin Spanish Olive Oil', amount: 90, unit: 'ml', category: 'Cooking' },
      { name: 'Dry Fino Sherry (or dry white wine)', amount: 30, unit: 'ml', category: 'Deglaze' },
      { name: 'Fresh Flat-Leaf Parsley (chopped)', amount: 20, unit: 'g', category: 'Herbs' },
      { name: 'Flaky Sea Salt & Lemon Wedge', amount: 1, unit: 'pcs', category: 'Serving' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Toast Garlic Chips in Olive Oil',
        instruction: 'In an earthenware cazuela or small skillet, heat olive oil over medium-low heat. Add sliced garlic and dried chili. Fry gently for 2 minutes until garlic turns pale golden (do not allow it to brown or turn bitter).',
        durationMinutes: 3,
        chefTip: 'Low heat gently perfumes the oil with sweet garlic essence without scorching.'
      },
      {
        stepNumber: 2,
        title: 'Flash Sizzle the Prawns',
        instruction: 'Turn heat up to high. Drop in prawns in a single layer. Season with flaky sea salt. Sizzle for 60 to 90 seconds until pink and opaque on one side, flip, and cook 30 seconds more.',
        durationMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Deglaze with Sherry & Herbs',
        instruction: 'Pour in Fino sherry; it will bubble violently. Toss in chopped parsley and remove pan immediately from heat.',
        durationMinutes: 1
      }
    ],
    servingNotes: 'Serve instantly while the oil is still furiously bubbling in the cazuela, with plenty of crusty bread to mop up the garlic-infused oil.',
    funFact: 'Found in tapas bars throughout Madrid and Seville, Gambas al Ajillo is traditionally served in the exact same terracotta bowl it was cooked in.'
  },
  {
    id: 'es-patatas-bravas',
    countryId: 'spain',
    title: 'Patatas Bravas with Spicy Paprika Sauce',
    nativeTitle: 'Patatas Bravas',
    description: 'Crisp golden potato chunks double-fried to crunchy exterior perfection, smothered in authentic Madrid brava sauce made with sweet and hot smoked pimentón and garlic alioli.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Patatas_bravas_madrid.jpg/960px-Patatas_bravas_madrid.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 20,
    cookTimeMinutes: 20,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 350,
    dietaryTags: ['Vegetarian', 'Vegan Option', 'Bar Classic'],
    course: 'Appetizer',
    ingredients: [
      { name: 'Starchy Potatoes (peeled and cut into irregular 3cm chunks)', amount: 800, unit: 'g', category: 'Potatoes' },
      { name: 'Olive Oil for double frying', amount: 500, unit: 'ml', category: 'Cooking' },
      { name: 'Sweet Smoked Paprika (Pimentón Dulce)', amount: 15, unit: 'g', category: 'Salsa Brava' },
      { name: 'Hot Smoked Paprika (Pimentón Picante)', amount: 6, unit: 'g', category: 'Salsa Brava' },
      { name: 'All-Purpose Flour', amount: 25, unit: 'g', category: 'Salsa Brava' },
      { name: 'Warm Chicken or Vegetable Broth', amount: 300, unit: 'ml', category: 'Salsa Brava' },
      { name: 'Garlic Alioli (garlic mayonnaise)', amount: 80, unit: 'g', category: 'Serving' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Make Authentic Madrid Salsa Brava',
        instruction: 'In a saucepan, heat 3 tbsp olive oil. Whisk in flour for 1 minute. Add both smoked paprikas off the heat so they don’t scorch. Gradually pour in warm broth while whisking until smooth and velvety. Simmer for 8 minutes until thickened.',
        durationMinutes: 10,
        chefTip: 'Authentic Madrid brava sauce contains no tomatoes! The deep red color and flavor come purely from smoked pimentón and broth roux.'
      },
      {
        stepNumber: 2,
        title: 'First Low-Temp Potato Poach',
        instruction: 'Submerge potato chunks in oil heated to 140°C (285°F). Cook for 8 minutes until cooked through and tender inside, but pale. Drain on a wire rack.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Second High-Heat Crisp Fry',
        instruction: 'Heat oil to 190°C (375°F). Return potatoes to oil in batches for 3 to 4 minutes until exterior turns blistered, crunchy, and deep golden. Drain and salt immediately.',
        durationMinutes: 5
      },
      {
        stepNumber: 4,
        title: 'Sauce and Plating',
        instruction: 'Pile hot crispy potatoes onto a platter. Ladle warm spicy brava sauce over the center and drizzle with cool creamy garlic alioli.',
        durationMinutes: 2
      }
    ],
    servingNotes: 'Serve immediately with wooden toothpicks and a cold draft Spanish beer (caña).',
    funFact: 'Created in the 1950s in traditional Madrid taverns like Casa Pellico, Patatas Bravas are celebrated for "brava" (fierce/brave) spicy heat.'
  },
  {
    id: 'es-pulpo-a-la-gallega',
    countryId: 'spain',
    title: 'Pulpo a la Gallega (Galician Octopus)',
    nativeTitle: 'Polbo á Feira',
    description: 'Tender Galician octopus boiled to melt-in-the-mouth perfection, sliced with culinary shears over warm sliced potatoes, dusted with sweet and spicy pimentón, sea salt, and olive oil.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Polbo_a_feira.jpg/960px-Polbo_a_feira.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 15,
    cookTimeMinutes: 45,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 290,
    dietaryTags: ['Gluten-Free', 'High Protein', 'Seafood Masterpiece'],
    course: 'Main',
    ingredients: [
      { name: 'Whole Cleaned Octopus (fresh or thawed)', amount: 1200, unit: 'g', category: 'Seafood' },
      { name: 'Yukon Gold Potatoes (peeled & sliced into 1cm rounds)', amount: 500, unit: 'g', category: 'Potatoes' },
      { name: 'Sweet Smoked Paprika (Pimentón de la Vera)', amount: 15, unit: 'g', category: 'Seasoning' },
      { name: 'Hot Smoked Paprika', amount: 5, unit: 'g', category: 'Seasoning' },
      { name: 'Coarse Flaky Sea Salt (Sal Marina)', amount: 10, unit: 'g', category: 'Seasoning' },
      { name: 'Extra Virgin Spanish Olive Oil', amount: 80, unit: 'ml', category: 'Dressing' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Scare the Octopus (Asustar el Pulpo)',
        instruction: 'Bring a large pot of unsalted water to a rolling boil. Holding the octopus by its head, dip tentacles into boiling water for 3 seconds, then lift out. Repeat 3 times until tentacles curl into tight spirals.',
        durationMinutes: 5,
        chefTip: '"Scaring" the octopus curls the collagen fibers, preventing the tender skin from tearing off during cooking.'
      },
      {
        stepNumber: 2,
        title: 'Slow Simmer',
        instruction: 'Submerge octopus completely, cover, and simmer on medium-low heat for 35 to 40 minutes until a skewer glides into the thickest part with gentle resistance. Turn off heat and rest in the hot water for 15 minutes.',
        durationMinutes: 55
      },
      {
        stepNumber: 3,
        title: 'Boil Potatoes in Octopus Water',
        instruction: 'Remove octopus. In the same purple boiling octopus broth, cook potato rounds for 12 minutes until tender. Drain.',
        durationMinutes: 15
      },
      {
        stepNumber: 4,
        title: 'Traditional Wooden Platter Assembly',
        instruction: 'Arrange warm potato slices across a traditional round wooden platter. Using kitchen scissors, snip the octopus tentacles into 1cm thick medallions directly over the potatoes.',
        durationMinutes: 5
      },
      {
        stepNumber: 5,
        title: 'Finish with Olive Oil & Paprika',
        instruction: 'Douse generously with premium Spanish olive oil. Dust liberally with coarse sea salt and both sweet and spicy smoked paprika.',
        durationMinutes: 2
      }
    ],
    servingNotes: 'Serve warm on the traditional wooden platter with wooden toothpicks and a chilled glass of Galician Albariño or Ribeiro wine.',
    funFact: 'At countryside fairs ("feiras") across Galicia, women called "polbeiras" boil massive copper caldrons of octopus, seasoning each wooden plate to order.'
  },
  {
    id: 'es-croquetas-de-jamon',
    countryId: 'spain',
    title: 'Croquetas de Jamón Ibérico',
    nativeTitle: 'Croquetas de Jamón',
    description: 'Crispy, shatteringly crisp golden breaded cylinders with a molten, creamy Spanish jamón béchamel filling that liquefies upon taking the first bite.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Croquetas_Caseras_%287068664101%29.jpg/960px-Croquetas_Caseras_%287068664101%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 45,
    cookTimeMinutes: 20,
    servings: 6,
    difficulty: 'Hard',
    caloriesPerServing: 340,
    dietaryTags: ['Traditional', 'Tapas Royalty'],
    course: 'Appetizer',
    ingredients: [
      { name: 'Cured Jamón Ibérico or Serrano (finely diced)', amount: 150, unit: 'g', category: 'Filling' },
      { name: 'Unsalted Butter', amount: 80, unit: 'g', category: 'Béchamel' },
      { name: 'All-Purpose Flour', amount: 80, unit: 'g', category: 'Béchamel' },
      { name: 'Whole Milk (warm)', amount: 700, unit: 'ml', category: 'Béchamel' },
      { name: 'Ground Nutmeg', amount: 2, unit: 'g', category: 'Béchamel' },
      { name: 'Eggs (beaten) & Fine Breadcrumbs', amount: 150, unit: 'g', category: 'Breading' },
      { name: 'Olive Oil for frying', amount: 500, unit: 'ml', category: 'Frying' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Infuse Butter with Jamón',
        instruction: 'Melt butter in a saucepan. Add diced jamón and sauté for 1 minute to release its savory fat. Whisk in flour and cook for 3 minutes to toast.',
        durationMinutes: 5
      },
      {
        stepNumber: 2,
        title: 'Cook Ultra-Thick Béchamel',
        instruction: 'Gradually pour in warm milk while whisking constantly. Cook over medium heat, stirring vigorously with a wooden spoon for 10 minutes until the dough pulls away cleanly from the sides and bottom of the pan. Stir in nutmeg and pepper.',
        durationMinutes: 12,
        chefTip: 'The béchamel must be cooked until thick enough to hold its shape when cool, ensuring effortless rolling later.'
      },
      {
        stepNumber: 3,
        title: 'Chill Overnight',
        instruction: 'Spread the béchamel into a shallow greased dish. Press plastic wrap directly onto the surface and refrigerate for at least 4 hours (preferably overnight).',
        durationMinutes: 240
      },
      {
        stepNumber: 4,
        title: 'Shape and Double Bread',
        instruction: 'Scoop tablespoons of chilled dough and roll into neat cylinders. Dip into beaten egg, then coat thoroughly in fine breadcrumbs.',
        durationMinutes: 20
      },
      {
        stepNumber: 5,
        title: 'Flash Fry to Golden Crunch',
        instruction: 'Heat oil to 180°C (350°F). Fry croquetas in small batches for 2 minutes until deep golden brown. Drain on paper towels.',
        durationMinutes: 6
      }
    ],
    servingNotes: 'Serve hot when the crust is crackling and the inside is creamy and molten.',
    funFact: 'In Spain, the quality of a tavern’s homemade croquetas is universally regarded as the ultimate litmus test of the kitchen’s overall cooking skill.'
  },
  {
    id: 'es-fabada-asturiana',
    countryId: 'spain',
    title: 'Fabada Asturiana (Rich White Bean Stew)',
    nativeTitle: 'Fabada Asturiana',
    description: 'Northern Spain’s legendary mountain winter stew: giant creamy Asturian faba beans slow-simmered with smoked chorizo, morcilla blood sausage, pancetta, and saffron.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Fabada_en_cazuela_de_barro.jpg/960px-Fabada_en_cazuela_de_barro.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 20,
    cookTimeMinutes: 120,
    servings: 6,
    difficulty: 'Medium',
    caloriesPerServing: 620,
    dietaryTags: ['High Protein', 'Historic Heritage', 'Hearty'],
    course: 'Main',
    ingredients: [
      { name: 'Faba Asturiana White Beans (soaked overnight)', amount: 500, unit: 'g', category: 'Beans' },
      { name: 'Asturian Smoked Chorizo', amount: 2, unit: 'pcs', category: 'Compango' },
      { name: 'Asturian Smoked Morcilla (blood sausage)', amount: 2, unit: 'pcs', category: 'Compango' },
      { name: 'Cured Pork Belly / Panceta', amount: 200, unit: 'g', category: 'Compango' },
      { name: 'Spanish Saffron Strands', amount: 1, unit: 'g', category: 'Spices' },
      { name: 'Sweet Smoked Paprika', amount: 8, unit: 'g', category: 'Spices' },
      { name: 'Cold Water', amount: 1800, unit: 'ml', category: 'Liquid' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Combine Beans & Compango',
        instruction: 'In a large heavy Dutch oven, place soaked drained faba beans, chorizo, morcilla, and panceta. Cover with cold water by 3cm. Bring to a boil over medium heat.',
        durationMinutes: 15
      },
      {
        stepNumber: 2,
        title: 'Skim & "Shock" the Beans (Asustar las Fabas)',
        instruction: 'Skim off any foam. Add 100ml cold water to drop the boiling temperature. Repeat twice during cooking. This keeps the delicate bean skins tender and intact.',
        durationMinutes: 10,
        chefTip: 'Adding splashes of cold water ("shocking") prevents the skins of the giant beans from splitting open.'
      },
      {
        stepNumber: 3,
        title: 'Add Saffron and Slow Simmer',
        instruction: 'Add saffron threads and paprika. Cover partially and simmer over low heat for 2 hours, gently shaking the pot in circular motions (never stir with a spoon).',
        durationMinutes: 110
      },
      {
        stepNumber: 4,
        title: 'Thicken & Rest',
        instruction: 'Remove meats and slice into thick rounds. The starch from the beans will have thickened the broth into liquid silk. Return sliced meats to stew.',
        durationMinutes: 10
      }
    ],
    servingNotes: 'Serve hot in wide shallow clay bowls with crusty bread and a glass of naturally poured Asturian cider.',
    funFact: 'True Asturian faba beans have a Protected Designation of Origin (D.O.P.) and are prized for their buttery, skinless mouthfeel when cooked.'
  },
  {
    id: 'es-churros-con-chocolate',
    countryId: 'spain',
    title: 'Churros con Chocolate Caliente',
    nativeTitle: 'Churros con Chocolate',
    description: 'Crisp fluted golden churros fried to perfection, dusted with sugar and dipped into an intensely thick, bittersweet dark Spanish drinking chocolate.',
    image: 'https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&w=1200&q=80',
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 420,
    dietaryTags: ['Vegetarian', 'Breakfast & Merienda', 'Iconic'],
    course: 'Dessert',
    ingredients: [
      { name: 'Filtered Water', amount: 250, unit: 'ml', category: 'Dough' },
      { name: 'All-Purpose Flour', amount: 200, unit: 'g', category: 'Dough' },
      { name: 'Fine Sea Salt', amount: 4, unit: 'g', category: 'Dough' },
      { name: 'Unsalted Butter', amount: 20, unit: 'g', category: 'Dough' },
      { name: 'High-Fat Whole Milk', amount: 400, unit: 'ml', category: 'Hot Chocolate' },
      { name: 'Spanish Dark Chocolate (70% chopped)', amount: 180, unit: 'g', category: 'Hot Chocolate' },
      { name: 'Cornstarch', amount: 15, unit: 'g', category: 'Hot Chocolate' },
      { name: 'Granulated Sugar & Cinnamon for dusting', amount: 60, unit: 'g', category: 'Sugar Dust' },
      { name: 'Mild Olive Oil or Sunflower Oil for frying', amount: 600, unit: 'ml', category: 'Frying' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Scald Dough in Saucepan',
        instruction: 'Bring water, butter, and salt to a boil. Remove from heat, dump in all flour at once, and stir vigorously with a wooden spoon until a smooth, shiny dough forms and pulls away from pan.',
        durationMinutes: 5
      },
      {
        stepNumber: 2,
        title: 'Pipe Fluted Ribbons into Hot Oil',
        instruction: 'Load dough into a sturdy piping bag fitted with a closed star nozzle. Heat oil to 190°C (375°F). Pipe 12cm lengths directly into the oil, snipping with kitchen shears.',
        durationMinutes: 10,
        chefTip: 'The star tip creates ridges that maximize surface area for supreme crunch and prevent dangerous steam steam-trapping.'
      },
      {
        stepNumber: 3,
        title: 'Fry to Deep Golden Crunch',
        instruction: 'Fry for 3 to 4 minutes until crisp and golden all around. Drain on paper towels and immediately roll in cinnamon-sugar.',
        durationMinutes: 6
      },
      {
        stepNumber: 4,
        title: 'Prepare Thick Spanish Chocolate',
        instruction: 'Whisk cold milk with cornstarch. Heat in a saucepan, add chopped dark chocolate, and whisk constantly over medium heat until thickened into a glossy, pudding-like dipping chocolate.',
        durationMinutes: 8
      }
    ],
    servingNotes: 'Dip hot, crunchy churros straight into the thick chocolate so the chocolate clings to the ridges.',
    funFact: 'Chocolatería San Ginés in Madrid has been serving night owls and morning early birds piping hot churros and thick chocolate since 1894.'
  },
  {
    id: 'es-pisto-manchego',
    countryId: 'spain',
    title: 'Pisto Manchego with Fried Farm Egg',
    nativeTitle: 'Pisto Manchego',
    description: 'The Spanish cousin of ratatouille from Don Quixote’s La Mancha: slow-stewed tomatoes, zucchini, sweet bell peppers, and onions in olive oil, crowned with an olive-oil fried runny egg.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Pisto.jpg/960px-Pisto.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 20,
    cookTimeMinutes: 40,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 280,
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'Comfort Food'],
    course: 'Main',
    ingredients: [
      { name: 'Zucchini (diced into 1cm cubes)', amount: 400, unit: 'g', category: 'Vegetables' },
      { name: 'Red and Green Bell Peppers (diced)', amount: 300, unit: 'g', category: 'Vegetables' },
      { name: 'Yellow Onions (finely chopped)', amount: 250, unit: 'g', category: 'Vegetables' },
      { name: 'Ripe Tomatoes (peeled, seeded, and puréed)', amount: 500, unit: 'g', category: 'Vegetables' },
      { name: 'Extra Virgin Spanish Olive Oil', amount: 80, unit: 'ml', category: 'Cooking' },
      { name: 'Fresh Farm Eggs', amount: 4, unit: 'pcs', category: 'Serving' },
      { name: 'Fine Salt & Pinch of Sugar', amount: 6, unit: 'g', category: 'Seasoning' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Sequential Sautéing',
        instruction: 'Heat olive oil in a wide skillet. Cook onions for 10 minutes until sweet. Add diced bell peppers and cook 10 minutes. Add diced zucchini and cook 8 minutes until tender.',
        durationMinutes: 28,
        chefTip: 'Cooking each vegetable sequentially respects their distinct water contents and cooking times.'
      },
      {
        stepNumber: 2,
        title: 'Add Tomatoes & Slow Confit',
        instruction: 'Pour in crushed tomatoes, salt, and a pinch of sugar. Simmer on low heat for 15 minutes until the oil separates and the vegetables are meltingly sweet.',
        durationMinutes: 15
      },
      {
        stepNumber: 3,
        title: 'Crisp Olive Oil Fried Eggs',
        instruction: 'In a separate small skillet, heat 2 tbsp olive oil until shimmering. Fry eggs sunny-side up with crispy frilly edges ("puntilla") and runny yolks.',
        durationMinutes: 4
      }
    ],
    servingNotes: 'Spoon warm pisto into bowls and top each with a fried egg; break the yolk so it flows into the sweet braised vegetables.',
    funFact: 'Pisto Manchego was historically prepared by field laborers in Castilla-La Mancha using garden vegetables harvested in late summer.'
  },
  {
    id: 'es-albondigas-en-salsa',
    countryId: 'spain',
    title: 'Albóndigas en Salsa Española',
    nativeTitle: 'Albóndigas en Salsa',
    description: 'Tender Spanish meatballs crafted with beef, pork, garlic, and soaked breadcrumbs, browned and braised in a rich sauce of onions, carrots, white wine, and smoked pimentón.',
    image: AUTHENTIC_IMAGES.spanishAlbondigas,
    prepTimeMinutes: 25,
    cookTimeMinutes: 30,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 460,
    dietaryTags: ['High Protein', 'Traditional Tapas'],
    course: 'Main',
    ingredients: [
      { name: 'Ground Beef & Pork Blend (50/50)', amount: 600, unit: 'g', category: 'Meat' },
      { name: 'White Breadcrumbs (soaked in milk)', amount: 60, unit: 'g', category: 'Meat' },
      { name: 'Large Egg', amount: 1, unit: 'pcs', category: 'Meat' },
      { name: 'Garlic & Fresh Parsley (minced)', amount: 25, unit: 'g', category: 'Meat' },
      { name: 'Yellow Onion & Carrot (finely diced)', amount: 200, unit: 'g', category: 'Salsa' },
      { name: 'Spanish Dry White Wine', amount: 120, unit: 'ml', category: 'Salsa' },
      { name: 'Beef or Chicken Broth', amount: 350, unit: 'ml', category: 'Salsa' },
      { name: 'Flour for dusting', amount: 40, unit: 'g', category: 'Coating' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Shape the Meatballs',
        instruction: 'Mix ground meat, soaked breadcrumbs, egg, garlic, parsley, salt, and pepper. Shape into 16 golf-ball sized rounds and lightly dust with flour.',
        durationMinutes: 12
      },
      {
        stepNumber: 2,
        title: 'Brown in Olive Oil',
        instruction: 'Heat olive oil in a skillet and brown meatballs on all sides for 4 minutes. Transfer to a plate.',
        durationMinutes: 6
      },
      {
        stepNumber: 3,
        title: 'Simmer Spanish Sauce',
        instruction: 'In the same oil, sauté onions and carrots for 8 minutes. Add 1 tbsp flour, deglaze with white wine, then add broth and simmer. Return meatballs to sauce, cover, and cook for 15 minutes until tender and sauce is rich and glossy.',
        durationMinutes: 20
      }
    ],
    servingNotes: 'Serve hot in terracotta tapas dishes with french fries or crusty bread for dipping in the savory gravy.',
    funFact: 'The concept of meatballs ("al-bunduq") was introduced to the Iberian Peninsula during the Moorish period in the 8th century and evolved into one of Spain’s most universal dishes.'
  },
  {
    id: 'es-crema-catalana',
    countryId: 'spain',
    title: 'Crema Catalana (Catalan Brûlée Custard)',
    nativeTitle: 'Crema Catalana',
    description: 'Catalonia’s legendary silken custard infused with fresh lemon and orange zest and cinnamon stick, crowned with a crackling, glassy caramelized sugar shell.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Creme_catalane.jpg/960px-Creme_catalane.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 290,
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'Catalan Heritage'],
    course: 'Dessert',
    ingredients: [
      { name: 'Whole Milk', amount: 500, unit: 'ml', category: 'Custard' },
      { name: 'Egg Yolks (large)', amount: 4, unit: 'pcs', category: 'Custard' },
      { name: 'Granulated Sugar', amount: 90, unit: 'g', category: 'Custard' },
      { name: 'Cornstarch (Maizena)', amount: 20, unit: 'g', category: 'Custard' },
      { name: 'Cinnamon Stick & Lemon/Orange Peel Strips', amount: 10, unit: 'g', category: 'Aromatics' },
      { name: 'Extra Sugar for Caramelizing Crust', amount: 40, unit: 'g', category: 'Brûlée' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Infuse Milk with Citrus & Cinnamon',
        instruction: 'Heat milk with cinnamon stick and orange/lemon peels until steaming. Remove from heat and steep for 15 minutes to extract the fragrant essential oils.',
        durationMinutes: 18,
        chefTip: 'Unlike French Crème Brûlée which uses heavy cream and vanilla, Crema Catalana is made with milk infused with bright citrus zest and cinnamon.'
      },
      {
        stepNumber: 2,
        title: 'Whisk Yolks & Starch',
        instruction: 'In a bowl, whisk egg yolks with 90g sugar and cornstarch until pale and smooth.',
        durationMinutes: 4
      },
      {
        stepNumber: 3,
        title: 'Cook to Silky Custard',
        instruction: 'Strain warm milk into yolks while whisking. Return to saucepan and cook over low heat, whisking constantly until it bubbles and thickens into luscious custard. Pour into shallow terracotta dishes and chill for 3 hours.',
        durationMinutes: 10
      },
      {
        stepNumber: 4,
        title: 'Torch Glass Sugar Shell',
        instruction: 'Sprinkle 1 tbsp sugar evenly across the cold custard. Caramelize with a kitchen blowtorch (or traditional hot iron plate) until dark amber and glassy.',
        durationMinutes: 3
      }
    ],
    servingNotes: 'Crack the glass-like caramelized sugar with the back of a dessert spoon immediately after torching and enjoy the contrast of cold custard and warm brittle sugar.',
    funFact: 'Crema Catalana is documented in 14th-century Catalan medieval recipe books ("Llibre de Sent Soví"), making it one of the oldest recorded desserts in Europe.'
  }
];
