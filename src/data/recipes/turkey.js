
import { AUTHENTIC_IMAGES } from '../imageAssets';

export const TURKEY_RECIPES = [
  {
    id: 'tur-iskender-kebap',
    countryId: 'turkey',
    title: 'Bursa İskender Kebap',
    nativeTitle: 'İskender Kebap',
    description: 'Thinly sliced tender döner lamb layered over toasted pide bread cubes, drenched in spiced tomato sauce, brown foaming melted sheep butter, and thick garlic yogurt.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/%C4%B0skender_Kebap.jpg/960px-%C4%B0skender_Kebap.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 25,
    cookTimeMinutes: 20,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 680,
    dietaryTags: ['High-Protein', 'Bursa Signature', 'Halal'],
    course: 'Main',
    ingredients: [
      { name: 'Thinly Sliced Marinated Lamb/Beef Döner or Shaved Roast Beef', amount: 600, unit: 'g', category: 'Meat' },
      { name: 'Turkish Pide Bread (cut into 2cm cubes & toasted)', amount: 300, unit: 'g', category: 'Bread' },
      { name: 'Rich Spiced Tomato Salça Sauce', amount: 250, unit: 'ml', category: 'Sauce' },
      { name: 'Pure Sheep Butter or Grass-Fed Cow Butter (for sizzling pour)', amount: 80, unit: 'g', category: 'Butter' },
      { name: 'Thick Strained Turkish Yogurt (Süzme Yoğurt)', amount: 250, unit: 'g', category: 'Dairy' },
      { name: 'Charred Sivri Biber (Turkish green peppers) & Grilled Tomatoes', amount: 4, unit: 'pcs', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Toast Pide Bread Cubes',
        instruction: 'Toss pide bread cubes with a touch of butter and bake at 190°C for 6 minutes until lightly crisp on outside and soft inside. Spread over serving platter.',
        durationMinutes: 6
      },
      {
        stepNumber: 2,
        title: 'Sear Meat & Simmer Salça Sauce',
        instruction: 'Sear thinly sliced marinated meat in a hot pan until sizzling and browned. Simultaneously simmer tomato puree with Turkish pepper paste (biber salçası) and butter.',
        durationMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Layer the Kebap',
        instruction: 'Ladle hot tomato sauce over the toasted pide cubes. Shingle hot meat ribbons over the bread. Spoon cold thick strained yogurt generously on one side.',
        durationMinutes: 3
      },
      {
        stepNumber: 4,
        title: 'Sizzling Foaming Butter Pour',
        instruction: 'Melt 80g butter in a small copper pan until it foams violently and turns slightly nutty brown. Pour sizzling directly over the meat at the table with an audible sizzle.',
        durationMinutes: 3
      }
    ],
    funFact: 'Invented in 1867 by İskender Efendi in Bursa, who had the revolutionary idea to cook lamb vertically on an upright spit instead of horizontally over coals.',
    servingNotes: 'Serve immediately with grilled green peppers, charred tomatoes, and a cold glass of sour cherry juice or Şıra (grape juice).'
  },
  {
    id: 'tur-menemen',
    countryId: 'turkey',
    title: 'Traditional Turkish Menemen in Sahan',
    nativeTitle: 'Geleneksel Menemen',
    description: 'Silky, soft-scrambled eggs cooked in an authentic copper sahan pan with ripe grated summer tomatoes, Turkish sweet green peppers, and rich butter.',
    image: AUTHENTIC_IMAGES.turkishMenemen,
    prepTimeMinutes: 10,
    cookTimeMinutes: 12,
    servings: 2,
    difficulty: 'Easy',
    caloriesPerServing: 280,
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'Kahvaltı Breakfast'],
    course: 'Breakfast',
    ingredients: [
      { name: 'Large Farm Eggs', amount: 4, unit: 'pcs', category: 'Eggs' },
      { name: 'Turkish Sivri Biber or Mild Green Peppers (sliced)', amount: 4, unit: 'pcs', category: 'Produce' },
      { name: 'Vine-Ripened Ripe Tomatoes (peeled & grated)', amount: 450, unit: 'g', category: 'Produce' },
      { name: 'Turkish Butter or Extra Virgin Olive Oil', amount: 40, unit: 'g', category: 'Fat' },
      { name: 'Pul Biber (Aleppo pepper flakes) & Sea Salt', amount: 6, unit: 'g', category: 'Seasoning' },
      { name: 'Kashar Cheese (Kaşar Peyniri, optional grated)', amount: 50, unit: 'g', category: 'Cheese' },
      { name: 'Crusty Turkish Bread (Somun Ekmek) for dipping', amount: 1, unit: 'loaf', category: 'Bread' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Sauté Green Peppers in Copper Sahan',
        instruction: 'Melt butter in a traditional two-handled copper pan (sahan). Sauté sliced green peppers over medium heat for 4 minutes until softened and sweet.',
        durationMinutes: 4
      },
      {
        stepNumber: 2,
        title: 'Reduce Grated Tomatoes',
        instruction: 'Add grated fresh tomatoes and pul biber. Cook uncovered on medium-low heat for 6-8 minutes until tomato juices reduce to a jammy, concentrated consistency.',
        durationMinutes: 7
      },
      {
        stepNumber: 3,
        title: 'Gentle Swirl of Eggs',
        instruction: 'Crack eggs into pan. Break the yolks gently with a wooden spoon and swirl lightly into the tomato sauce without over-whisking, letting tender ribbons of whites and yolks cook to a soft, custardy wobble.',
        durationMinutes: 3
      }
    ],
    funFact: 'Turks hold a perpetual, passionate national debate over whether authentic Menemen should be made with onions or without (the onion version is usually preferred for dinner).',
    servingNotes: 'Serve straight in the sizzling copper pan with endless warm crusty bread to rip and dip.'
  },
  {
    id: 'tur-lahmacun',
    countryId: 'turkey',
    title: 'Crispy Turkish Lahmacun',
    nativeTitle: 'Taş Fırın Lahmacun',
    description: 'Paper-thin, blistered crisp flatbread topped with finely minced lamb, onions, red peppers, tomatoes, garlic, and Urfa Isot pepper, rolled up with parsley and fresh lemon.',
    image: AUTHENTIC_IMAGES.turkishLahmajo,
    prepTimeMinutes: 30,
    cookTimeMinutes: 10,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 360,
    dietaryTags: ['High-Protein', 'Iconic Street Food'],
    course: 'Street Food',
    ingredients: [
      { name: 'Fine Wheat Flour', nameKa: 'პურის ფქვილი', amount: 280, unit: 'g', category: 'Dough' },
      { name: 'Warm Water', nameKa: 'თბილი წყალი', amount: 160, unit: 'ml', category: 'Dough' },
      { name: 'Active Dry Yeast', nameKa: 'საფუარი', amount: 4, unit: 'g', category: 'Dough' },
      { name: 'Fine Sea Salt', nameKa: 'მარილი', amount: 5, unit: 'g', category: 'Dough' },
      { name: 'Ground Lamb with 20% Fat', amount: 300, unit: 'g', category: 'Meat' },
      { name: 'Red Kapya Pepper & White Onion (finely minced)', amount: 150, unit: 'g', category: 'Aromatics' },
      { name: 'Tomato Paste & Red Pepper Paste (Biber Salçası)', amount: 40, unit: 'g', category: 'Pastes' },
      { name: 'Urfa Isot Pepper / Pul Biber', amount: 10, unit: 'g', category: 'Spices' },
      { name: 'Fresh Flat-Leaf Parsley (chopped)', amount: 60, unit: 'g', category: 'Garnish' },
      { name: 'Fresh Lemon Wedges', amount: 2, unit: 'pcs', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Pulse Meat and Pepper Topping',
        instruction: 'Pulse onions, red peppers, garlic, and parsley in food processor until finely minced. Mix thoroughly by hand with ground lamb, pepper paste, tomato paste, olive oil, and spices.',
        durationMinutes: 12
      },
      {
        stepNumber: 2,
        title: 'Roll Ultra-Thin Dough',
        instruction: 'Divide rested dough into 6 small balls. Roll out on floured surface with a thin rolling pin (oklava) into translucent, 2mm-thin rounds.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Smear Topping to the Edges',
        instruction: 'Using fingertips, spread a very thin, even layer of meat mixture across dough all the way to the rim.',
        durationMinutes: 5
      },
      {
        stepNumber: 4,
        title: 'High-Heat Blister Bake',
        instruction: 'Bake on a preheated pizza stone or hot covered cast iron skillet at 260°C (500°F) for 4-5 minutes until bottom is speckled crispy brown and edges blister.',
        durationMinutes: 5,
        temperature: '260°C / 500°F'
      }
    ],
    funFact: 'Frequently called "Turkish pizza" in the West, the name comes from Arabic "lahm bi-ajin" meaning "meat with dough".',
    servingNotes: 'Heap fresh parsley and sliced sumac onions onto the center, squeeze lemon juice, roll into a wrap, and eat by hand with cold Ayran.'
  },
  {
    id: 'tur-manti',
    countryId: 'turkey',
    title: 'Kayseri Mantısı (Turkish Tiny Meat Dumplings)',
    nativeTitle: 'Kayseri Mantısı',
    description: 'Thimble-sized handmade folded pasta dumplings filled with seasoned spiced minced meat, showered in cool garlic yogurt, foaming pul biber butter, and dried sumac mint.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/960px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 60,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: 'Hard',
    caloriesPerServing: 480,
    dietaryTags: ['High-Protein', 'Anatolian Heritage'],
    course: 'Main',
    ingredients: [
      { name: 'Hard Wheat Flour', nameKa: 'მაგარი ხორბლის ფქვილი', amount: 300, unit: 'g', category: 'Pasta' },
      { name: 'Egg', nameKa: 'კვერცხი', amount: 1, unit: 'pcs', category: 'Pasta' },
      { name: 'Warm Water', nameKa: 'თბილი წყალი', amount: 100, unit: 'ml', category: 'Pasta' },
      { name: 'Fine Salt', nameKa: 'მარილი', amount: 5, unit: 'g', category: 'Pasta' },
      { name: 'Finely Minced Beef or Lamb', amount: 200, unit: 'g', category: 'Meat' },
      { name: 'Grated Onion (juice squeezed out)', amount: 1, unit: 'pc', category: 'Filling' },
      { name: 'Thick Strained Garlic Yogurt', amount: 300, unit: 'g', category: 'Yogurt Sauce' },
      { name: 'Butter', amount: 60, unit: 'g', category: 'Butter Sauce' },
      { name: 'Tomato Paste & Pepper Paste', amount: 30, unit: 'g', category: 'Butter Sauce' },
      { name: 'Dried Spearmint & Ground Sumac', amount: 10, unit: 'g', category: 'Herbs' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Roll and Cut Miniature Squares',
        instruction: 'Knead a firm pasta dough and rest 30 minutes. Roll out into a thin sheet. Cut into tiny 2x2cm squares using a pastry wheel.',
        durationMinutes: 25
      },
      {
        stepNumber: 2,
        title: 'Fill and Pinch Four Corners',
        instruction: 'Place a tiny grain-sized pinch of seasoned raw meat in center of each square. Pinch the four opposite corners together upward to create miniature pyramid pouches.',
        durationMinutes: 30
      },
      {
        stepNumber: 3,
        title: 'Boil Mantı',
        instruction: 'Boil mantı in salted water for 8-10 minutes until they float and pasta is tender al dente. Drain, reserving a splash of pasta water.',
        durationMinutes: 10
      },
      {
        stepNumber: 4,
        title: 'Triple-Layer Assembly',
        instruction: 'Plate warm mantı. Ladle cold creamy garlic yogurt over top. Drizzle sizzling red pepper-tomato butter over the yogurt, and dust with dried mint and sumac.',
        durationMinutes: 3
      }
    ],
    funFact: 'In Kayseri folklore, a bride’s culinary prowess was tested by whether she could fit 40 individual mantı dumplings onto a single soup spoon!',
    servingNotes: 'Serve in wide shallow bowls so the interplay between cold tangy yogurt and hot spiced butter remains distinct.'
  },
  {
    id: 'tur-baklava',
    countryId: 'turkey',
    title: 'Gaziantep Fıstıklı Baklava',
    nativeTitle: 'Gaziantep Baklavası',
    description: 'Forty layers of gossamer-thin handmade phyllo pastry laminated with clarified sheep butter, packed with emerald Antep pistachios, and soaked in light lemon sugar syrup.',
    image: AUTHENTIC_IMAGES.turkishBaklava,
    prepTimeMinutes: 60,
    cookTimeMinutes: 45,
    servings: 12,
    difficulty: 'Hard',
    caloriesPerServing: 420,
    dietaryTags: ['Vegetarian', 'UNESCO Heritage', 'World Famous Pastry'],
    course: 'Dessert',
    ingredients: [
      { name: 'Phyllo Pastry Sheets (ultra-thin)', amount: 40, unit: 'sheets', category: 'Pastry' },
      { name: 'Clarified Pure Butter (Sade Yağ / Ghee)', amount: 250, unit: 'g', category: 'Fat' },
      { name: 'Gaziantep Emerald Green Pistachios (coarsely ground)', amount: 300, unit: 'g', category: 'Pistachio' },
      { name: 'Granulated White Sugar', amount: 400, unit: 'g', category: 'Syrup' },
      { name: 'Water', amount: 350, unit: 'ml', category: 'Syrup' },
      { name: 'Fresh Lemon Juice', amount: 15, unit: 'ml', category: 'Syrup' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Clarify Butter (Sade Yağ)',
        instruction: 'Melt butter gently and skim all white milk solid foam from top until only clear golden butterfat remains. Milk solids would burn during long baking.',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Layer 20 Sheets, Pistachios, and 20 Sheets',
        instruction: 'In a round copper baklava tray, layer 20 phyllo sheets, brushing clarified butter between layers. Spread ground green Antep pistachios evenly. Layer remaining 20 buttered sheets on top.',
        durationMinutes: 30
      },
      {
        stepNumber: 3,
        title: 'Diamond Slice & Oven Bake',
        instruction: 'Carefully cut through all 40 layers into clean geometric diamond shapes with a razor-sharp chef knife. Bake at 170°C (340°F) for 45 minutes until golden and crisp through to the core.',
        durationMinutes: 45,
        temperature: '170°C / 340°F'
      },
      {
        stepNumber: 4,
        title: 'Hot Baklava, Warm Syrup Pour',
        instruction: 'Boil sugar, water, and lemon juice for 15 minutes. Pour warm syrup over hot baklava straight out of the oven. Listen to the dramatic hiss and crackle as it absorbs.',
        durationMinutes: 15
      }
    ],
    funFact: 'Gaziantep baklava holds EU Protected Designation of Origin status. A master baklava usta tests the dough by holding a sheet in front of a newspaper to read the print through it!',
    servingNotes: 'Serve at room temperature with a dollop of thick water-buffalo kaymak (clotted cream) and Turkish black tea.'
  },
  {
    id: 'tur-kofte',
    countryId: 'turkey',
    title: 'Akçaabat Köfte with Piyaz Salad',
    nativeTitle: 'Akçaabat Köftesi',
    description: 'Black Sea region grilled meatballs made with minced beef, suet, garlic, and day-old bread, grilled over oak embers and served with sumac-white bean piyaz salad.',
    image: AUTHENTIC_IMAGES.turkishKofte,
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 490,
    dietaryTags: ['High-Protein', 'Grill Heritage'],
    course: 'Main',
    ingredients: [
      { name: 'Ground Beef Chuck & Brisket', amount: 600, unit: 'g', category: 'Meat' },
      { name: 'Beef Suet / Kidney Fat (minced)', amount: 60, unit: 'g', category: 'Fat' },
      { name: 'Stale Crustless White Bread (soaked in water & squeezed)', amount: 80, unit: 'g', category: 'Binder' },
      { name: 'Garlic Cloves (crushed with salt)', amount: 6, unit: 'cloves', category: 'Aromatics' },
      { name: 'White Beans (Cooked Kuru Fasulye for Piyaz)', amount: 250, unit: 'g', category: 'Piyaz' },
      { name: 'Red Onion (thinly sliced), Sumac & Olive Oil', amount: 60, unit: 'g', category: 'Piyaz' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Knead Köfte to Elasticity',
        instruction: 'Knead ground beef, beef fat, crushed garlic, squeezed bread, and salt for 10 minutes until the meat paste becomes springy and cohesive. Chill for 2 hours.',
        durationMinutes: 15
      },
      {
        stepNumber: 2,
        title: 'Shape Oval Patties',
        instruction: 'Wet hands with cold water and shape into flat oval patties about 1cm thick.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Charcoal Grill Sear',
        instruction: 'Grill over glowing charcoal or hot cast iron grill pan for 3-4 minutes per side until charred on exterior and succulent inside.',
        durationMinutes: 8,
        temperature: 'High Heat'
      },
      {
        stepNumber: 4,
        title: 'Toss Piyaz Bean Salad',
        instruction: 'Toss tender white beans with sliced red onions rubbed with tangy sumac, chopped parsley, olive oil, and lemon juice.',
        durationMinutes: 5
      }
    ],
    funFact: 'Unlike other Turkish köfte variations that use onions and cumin, Akçaabat köfte exclusively uses garlic and suet, giving it a distinctive juicy aroma.',
    servingNotes: 'Serve hot from the grill alongside warm grilled peppers, tomatoes, and piyaz salad.'
  },
  {
    id: 'tur-mercimek-corbasi',
    countryId: 'turkey',
    title: 'Süzme Mercimek Çorbası (Red Lentil Soup)',
    nativeTitle: 'Süzme Mercimek Çorbası',
    description: 'Silky, soothing red lentil soup simmered with potatoes, carrots, and onions, strained to velvety smoothness and crowned with sizzling mint-paprika butter and lemon.',
    image: AUTHENTIC_IMAGES.turkishMercimekCorbasi,
    prepTimeMinutes: 15,
    cookTimeMinutes: 30,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 240,
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'Comfort Soup'],
    course: 'Soup',
    ingredients: [
      { name: 'Split Red Lentils (Kırmızı Mercimek, rinsed)', amount: 250, unit: 'g', category: 'Legumes' },
      { name: 'Yellow Onion (chopped)', amount: 1, unit: 'pc', category: 'Vegetable' },
      { name: 'Carrot & Small Potato (peeled & diced)', amount: 180, unit: 'g', category: 'Vegetable' },
      { name: 'Chicken or Vegetable Broth', amount: 1200, unit: 'ml', category: 'Stock' },
      { name: 'Butter', amount: 40, unit: 'g', category: 'Butter Drizzle' },
      { name: 'Dried Turkish Spearmint (Kuru Nane) & Pul Biber', amount: 8, unit: 'g', category: 'Herbs' },
      { name: 'Fresh Lemon Wedges', amount: 2, unit: 'pcs', category: 'Acid' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Sauté and Simmer Lentils',
        instruction: 'Sauté chopped onion, carrot, and potato in butter for 3 minutes. Add rinsed red lentils and broth. Simmer for 25 minutes until lentils and vegetables disintegrate.',
        durationMinutes: 25
      },
      {
        stepNumber: 2,
        title: 'Puree and Strain (Süzme)',
        instruction: 'Puree soup in a blender, then pass through a fine-mesh strainer (süzgeç) to achieve the trademark restaurant velvet consistency.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Sizzling Nane-Pul Biber Butter',
        instruction: 'In a small pan, melt 40g butter until foaming. Add dried mint and Aleppo pepper flakes; sizzle for 20 seconds. Ladle soup into bowls and drizzle red herb butter over top.',
        durationMinutes: 2
      }
    ],
    funFact: 'Found in every lokanta (bistro) from Istanbul to Kars, it is traditionally eaten as the opening course of both festive dinners and 3 AM post-nightlife recovery.',
    servingNotes: 'Always squeeze half a fresh lemon wedge directly into the soup before enjoying.'
  },
  {
    id: 'tur-kunefe',
    countryId: 'turkey',
    title: 'Hatay Künefe with Kaymak',
    nativeTitle: 'Hatay Künefesi',
    description: 'Crispy shredded kadayıf pastry crisped golden brown in butter, sandwiching stretchy melting unsalted Antakya cheese, drenched in orange-blossom syrup and pistachio dust.',
    image: AUTHENTIC_IMAGES.turkishKunefe,
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 450,
    dietaryTags: ['Vegetarian', 'Hatay Culinary Capital'],
    course: 'Dessert',
    ingredients: [
      { name: 'Fresh Raw Kadayıf (shredded phyllo strands)', amount: 300, unit: 'g', category: 'Pastry' },
      { name: 'Clarified Butter (Sade Yağ)', amount: 120, unit: 'g', category: 'Fat' },
      { name: 'Unsalted Hatay / Dil Cheese or Fresh Mozzarella', amount: 200, unit: 'g', category: 'Cheese' },
      { name: 'Granulated Sugar', nameKa: 'შაქარი', amount: 200, unit: 'g', category: 'Syrup' },
      { name: 'Water for Syrup', nameKa: 'წყალი სიროფისთვის', amount: 150, unit: 'ml', category: 'Syrup' },
      { name: 'Fresh Lemon Juice', nameKa: 'ლიმონის წვენი', amount: 10, unit: 'ml', category: 'Syrup' },
      { name: 'Finely Ground Antep Pistachios', amount: 50, unit: 'g', category: 'Garnish' },
      { name: 'Turkish Kaymak (clotted cream)', amount: 80, unit: 'g', category: 'Serving' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Rub Kadayıf with Butter',
        instruction: 'Chop shredded kadayıf into 1cm pieces. Rub thoroughly with melted clarified butter until every strand glistens.',
        durationMinutes: 8
      },
      {
        stepNumber: 2,
        title: 'Pack the Pan and Layer Cheese',
        instruction: 'Butter a shallow aluminum künefe plate. Press half the kadayıf firmly onto bottom. Layer sliced unsalted string cheese across center. Cover with remaining kadayıf and press down hard with a flat plate.',
        durationMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Stovetop Rotating Crisp & Flip',
        instruction: 'Cook over low stovetop flame, rotating pan continuously for 6 minutes until underside is deep golden and crisp. Flip onto a second greased plate and crisp the second side.',
        durationMinutes: 10
      },
      {
        stepNumber: 4,
        title: 'Syrup and Garnish',
        instruction: 'Immediately pour room-temperature lemon sugar syrup over the hot sizzling künefe. Scatter green pistachio dust across the center.',
        durationMinutes: 2
      }
    ],
    funFact: 'Hatay is a UNESCO City of Gastronomy located near the Syrian border, where künefe master chefs flip heavy brass pans high in the air with one hand.',
    servingNotes: 'Cut with a knife while steaming hot to pull the dramatic, elastic cheese strings; top with a spoonful of chilled kaymak.'
  },
  {
    id: 'tur-karniyarik',
    countryId: 'turkey',
    title: 'Karnıyarık (Stuffed Eggplants)',
    nativeTitle: 'Karnıyarık',
    description: 'Golden pan-roasted eggplants split lengthwise and stuffed with spiced ground beef, sweet onions, garlic, and parsley, baked in rich tomato broth.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Meal_in_Turkey.jpg/960px-Meal_in_Turkey.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 30,
    cookTimeMinutes: 40,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 380,
    dietaryTags: ['Traditional', 'High Protein', 'Gluten-Free'],
    course: 'Main',
    ingredients: [
      { name: 'Medium Italian Eggplants (striped peeled)', amount: 4, unit: 'pcs', category: 'Produce' },
      { name: 'Ground Beef (80/20)', amount: 350, unit: 'g', category: 'Filling' },
      { name: 'Yellow Onion (finely diced)', amount: 200, unit: 'g', category: 'Filling' },
      { name: 'Garlic Cloves (minced)', amount: 4, unit: 'pcs', category: 'Filling' },
      { name: 'Fresh Tomatoes (diced)', amount: 200, unit: 'g', category: 'Filling' },
      { name: 'Tomato Paste (Salça)', amount: 30, unit: 'g', category: 'Filling' },
      { name: 'Fresh Flat-Leaf Parsley (chopped)', amount: 30, unit: 'g', category: 'Herbs' },
      { name: 'Turkish Green Sivri Peppers & Tomato Slices', amount: 4, unit: 'pcs', category: 'Garnish' },
      { name: 'Olive Oil for frying', amount: 80, unit: 'ml', category: 'Cooking' },
      { name: 'Black Pepper, Cumin & Red Pepper Flakes', amount: 6, unit: 'g', category: 'Spices' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Peel and Brown Eggplants',
        instruction: 'Peel eggplants in zebra stripes (alternating lengthwise strips of peel). Soak in salted cold water for 15 minutes, pat bone-dry, and shallow-fry in olive oil over medium-high heat until golden and tender all around. Drain on paper towels.',
        durationMinutes: 15
      },
      {
        stepNumber: 2,
        title: 'Sauté Spiced Filling',
        instruction: 'In a skillet, sauté diced onions and garlic until fragrant. Add ground beef and brown thoroughly. Stir in diced tomatoes, tomato paste, cumin, red pepper flakes, black pepper, and salt. Cook for 8 minutes, remove from heat, and stir in fresh parsley.',
        durationMinutes: 12
      },
      {
        stepNumber: 3,
        title: 'Stuff the Eggplants',
        instruction: 'Place fried eggplants in a baking dish. Cut a slit lengthwise down the center of each, leaving 1cm intact at both ends. Gently open with two spoons to create a boat-like cavity and spoon the savory meat filling generously inside.',
        durationMinutes: 6
      },
      {
        stepNumber: 4,
        title: 'Garnish & Oven Bake',
        instruction: 'Top each stuffed eggplant with a green pepper and a slice of tomato. Whisk 1 tbsp tomato paste with 200ml hot water and pour into the bottom of the baking dish. Bake at 190°C (375°F) for 25 minutes until bubbling.',
        durationMinutes: 25,
        temperature: '190°C / 375°F'
      }
    ],
    funFact: 'Karnıyarık literally translates to "split belly" in Turkish, named after the lengthwise slit cut into the tender eggplant.',
    servingNotes: 'Serve piping hot alongside buttered Turkish şehriyeli rice pilaf and thick sheep’s milk yogurt.'
  },
  {
    id: 'tur-karadeniz-pidesi',
    countryId: 'turkey',
    title: 'Karadeniz Pidesi (Black Sea Cheese Boat)',
    nativeTitle: 'Karadeniz Pidesi',
    description: 'Crisp boat-shaped flatbread filled with melting Kolot and Kaşar cheese, finished in a wood-fired oven with an egg yolk and dollops of Trabzon butter.',
    image: AUTHENTIC_IMAGES.turkishKaradenizPidesi,
    prepTimeMinutes: 40,
    cookTimeMinutes: 15,
    servings: 2,
    difficulty: 'Medium',
    caloriesPerServing: 620,
    dietaryTags: ['Vegetarian', 'Comfort Food', 'Iconic'],
    course: 'Bakery',
    ingredients: [
      { name: 'Bread Flour', amount: 350, unit: 'g', category: 'Dough' },
      { name: 'Warm Water', amount: 210, unit: 'ml', category: 'Dough' },
      { name: 'Instant Yeast', amount: 5, unit: 'g', category: 'Dough' },
      { name: 'Fine Salt', amount: 6, unit: 'g', category: 'Dough' },
      { name: 'Turkish Kaşar or Mozzarella (grated)', amount: 250, unit: 'g', category: 'Cheese' },
      { name: 'Kolot or Mild Feta Cheese (crumbled)', amount: 100, unit: 'g', category: 'Cheese' },
      { name: 'Fresh Egg Yolks', amount: 2, unit: 'pcs', category: 'Topping' },
      { name: 'Butter (cubed, for brushing)', amount: 40, unit: 'g', category: 'Topping' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Knead Elastic Pide Dough',
        instruction: 'Mix flour, yeast, and salt with warm water. Knead for 8 minutes until supple and elastic. Cover and proof for 1 hour until doubled in size.',
        durationMinutes: 68
      },
      {
        stepNumber: 2,
        title: 'Shape the Boat',
        instruction: 'Divide dough in half. Roll each half into an elongated oval (approx. 35x18 cm). Spread cheese blend across the center, leaving a 2cm border.',
        durationMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Fold Borders and Bake',
        instruction: 'Fold the dough borders inward over the cheese and pinch the two ends together tightly into sharp pointed boat tips. Bake at 240°C (465°F) on a preheated pizza stone for 10 to 12 minutes until bubbly and golden.',
        durationMinutes: 12,
        temperature: '240°C / 465°F'
      },
      {
        stepNumber: 4,
        title: 'Add Egg Yolk and Butter',
        instruction: 'Slide out of oven, immediately drop a fresh raw egg yolk into the bubbling molten cheese, dot with cold cubes of butter, and brush hot crust with butter.',
        durationMinutes: 2
      }
    ],
    funFact: 'In the Black Sea coastal province of Trabzon, locals traditionally stir the hot cheese, egg yolk, and butter together at the table using ripped pieces of the crust.',
    servingNotes: 'Eat hot by breaking off the crusty tips and dipping them into the rich, molten cheese center.'
  },
  {
    id: 'tur-hunkar-begendi',
    countryId: 'turkey',
    title: 'Hünkar Beğendi ("The Sultan Pleased")',
    nativeTitle: 'Hünkar Beğendi',
    description: 'An imperial Ottoman palace classic: slow-braised tender lamb chunks simmered in spiced tomato reduction, served atop a silky charcoal-smoked eggplant béchamel purée.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/H%C3%BCnkarbe%C4%9Fendi.jpg/960px-H%C3%BCnkarbe%C4%9Fendi.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 30,
    cookTimeMinutes: 70,
    servings: 4,
    difficulty: 'Hard',
    caloriesPerServing: 580,
    dietaryTags: ['Imperial Heritage', 'High Protein'],
    course: 'Main',
    ingredients: [
      { name: 'Lamb Shoulder (cut into 3cm cubes)', amount: 700, unit: 'g', category: 'Meat' },
      { name: 'Yellow Onions (diced)', amount: 200, unit: 'g', category: 'Meat' },
      { name: 'Tomato Paste & Pepper Paste', amount: 35, unit: 'g', category: 'Meat' },
      { name: 'Butter', amount: 30, unit: 'g', category: 'Meat' },
      { name: 'Globe Eggplants (charred over open flame)', amount: 3, unit: 'pcs', category: 'Purée' },
      { name: 'Butter (for béchamel)', amount: 40, unit: 'g', category: 'Purée' },
      { name: 'Flour', amount: 40, unit: 'g', category: 'Purée' },
      { name: 'Whole Milk (warm)', amount: 350, unit: 'ml', category: 'Purée' },
      { name: 'Grated Aged Kaşar or Parmesan', amount: 60, unit: 'g', category: 'Purée' },
      { name: 'Freshly Grated Nutmeg', amount: 2, unit: 'g', category: 'Purée' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Braise the Lamb',
        instruction: 'Melt 30g butter in a Dutch oven. Brown lamb cubes over high heat. Add onions and cook until softened. Stir in tomato paste, pepper paste, 300ml water, salt, and pepper. Cover and simmer gently on low for 60 minutes until lamb is meltingly tender.',
        durationMinutes: 65
      },
      {
        stepNumber: 2,
        title: 'Char the Eggplants',
        instruction: 'Char whole eggplants directly over gas flame or barbecue until the skins are completely blackened and papery. Scoop out tender smoky flesh, drain excess liquid, and finely chop.',
        durationMinutes: 15
      },
      {
        stepNumber: 3,
        title: 'Prepare Eggplant Béchamel',
        instruction: 'In a saucepan, melt 40g butter, whisk in 40g flour, and cook for 2 minutes. Slowly pour in warm milk while whisking until smooth and thick. Stir in the chopped smoky eggplant, grated cheese, and nutmeg.',
        durationMinutes: 8
      },
      {
        stepNumber: 4,
        title: 'Assemble Imperial Plate',
        instruction: 'Spoon a generous cloud of warm smoky eggplant purée onto each plate. Make a well in the center and ladle the tender braised lamb and tomato gravy over top.',
        durationMinutes: 4
      }
    ],
    funFact: 'Legend has it this dish was created in Topkapı Palace for the French Empress Eugénie during her visit to Sultan Abdülaziz in 1869; the Empress was so captivated she requested the recipe for her private chef.',
    servingNotes: 'Serve immediately with warm flatbread and fresh parsley garnish.'
  },
  {
    id: 'tur-su-boregi',
    countryId: 'turkey',
    title: 'Su Böreği (Traditional Water Burek)',
    nativeTitle: 'Su Böreği',
    description: 'Thin hand-rolled sheets of dough boiled in salted water and layered with creamy Turkish white cheese, melted butter, and fresh parsley, baked until golden and flaky on top.',
    image: AUTHENTIC_IMAGES.turkishSuBoregi,
    prepTimeMinutes: 50,
    cookTimeMinutes: 35,
    servings: 8,
    difficulty: 'Hard',
    caloriesPerServing: 390,
    dietaryTags: ['Vegetarian', 'Artisanal Bakery'],
    course: 'Bakery',
    ingredients: [
      { name: 'All-Purpose Flour', amount: 500, unit: 'g', category: 'Dough' },
      { name: 'Eggs (large)', amount: 4, unit: 'pcs', category: 'Dough' },
      { name: 'Warm Water', amount: 80, unit: 'ml', category: 'Dough' },
      { name: 'Fine Salt', amount: 8, unit: 'g', category: 'Dough' },
      { name: 'Clarified Butter (melted)', amount: 180, unit: 'g', category: 'Layers' },
      { name: 'Turkish White Cheese (Beyaz Peynir or Feta)', amount: 350, unit: 'g', category: 'Filling' },
      { name: 'Fresh Flat-Leaf Parsley (finely chopped)', amount: 40, unit: 'g', category: 'Filling' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Knead Firm Egg Dough',
        instruction: 'Mix flour, salt, eggs, and water into a firm dough. Knead vigorously for 10 minutes until completely smooth. Divide into 10 equal balls and rest under a damp towel for 30 minutes.',
        durationMinutes: 40
      },
      {
        stepNumber: 2,
        title: 'Roll Out Thin Yufka Sheets',
        instruction: 'Roll each ball into a very thin round sheet (approx. 35cm diameter). Leave the bottom and top sheets raw without boiling.',
        durationMinutes: 20
      },
      {
        stepNumber: 3,
        title: 'Boil & Shock in Ice Water',
        instruction: 'Bring a wide pot of salted water to a boil, and prepare a large basin of ice water. Drop each middle yufka sheet into the boiling water for 45 seconds, then immediately transfer to the ice water to stop cooking. Gently drain with hands.',
        durationMinutes: 15
      },
      {
        stepNumber: 4,
        title: 'Layer with Butter & Cheese',
        instruction: 'Butter a baking tray. Lay the raw base sheet on bottom. Brush with butter. Layer 4 boiled crinkled sheets, brushing melted butter between each. Scatter crumbled cheese and parsley across the middle. Layer 4 more boiled buttered sheets. Cover with the second raw sheet and brush with butter.',
        durationMinutes: 15
      },
      {
        stepNumber: 5,
        title: 'Bake to Golden Crisp',
        instruction: 'Bake at 190°C (375°F) for 35 minutes until the top is crisp, puffed, and golden-brown. Rest for 15 minutes before cutting into squares.',
        durationMinutes: 35,
        temperature: '190°C / 375°F'
      }
    ],
    funFact: 'Water Burek gets its name from boiling the delicate pasta-like dough sheets in water before baking, creating a soft, lasagna-like tender interior beneath a crunchy crust.',
    servingNotes: 'Serve warm with hot brewed Turkish black tea in tulip-shaped glasses.'
  }
];
