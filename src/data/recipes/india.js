
export const INDIA_RECIPES = [
  {
    id: 'ind-butter-chicken',
    countryId: 'india',
    title: 'Murgh Makhani (Authentic Butter Chicken)',
    nativeTitle: 'मुर्ग़ मखनी',
    description: 'Charred smoky tandoori-spiced chicken steeped in a silky makhani gravy of San Marzano tomatoes, cashew paste, cultured butter, cream, and dried fenugreek leaves (kasuri methi).',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg/960px-Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 30,
    cookTimeMinutes: 35,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 620,
    dietaryTags: ['High-Protein', 'Iconic Indian Classic', 'Gluten-Free'],
    course: 'Main',
    ingredients: [
      { name: 'Boneless Chicken Thighs (cut into 4cm pieces)', amount: 800, unit: 'g', category: 'Poultry' },
      { name: 'Greek Yogurt or Hung Curd', amount: 150, unit: 'g', category: 'Marinade' },
      { name: 'Ginger-Garlic Paste', amount: 35, unit: 'g', category: 'Marinade' },
      { name: 'Degi Mirch / Kashmiri Chili Powder', amount: 20, unit: 'g', category: 'Spices' },
      { name: 'Ripe Plum Tomatoes (pureed)', amount: 800, unit: 'g', category: 'Makhani Gravy' },
      { name: 'Soaked Cashew Nuts (blended with water)', amount: 60, unit: 'g', category: 'Makhani Gravy' },
      { name: 'Unsalted Cultured Butter (Makhan)', amount: 80, unit: 'g', category: 'Makhani Gravy' },
      { name: 'Heavy Cream', amount: 100, unit: 'ml', category: 'Makhani Gravy' },
      { name: 'Kasuri Methi (dried fenugreek leaves, crushed)', amount: 8, unit: 'g', category: 'Key Herb' },
      { name: 'Green Cardamom Pods & Garam Masala', amount: 6, unit: 'g', category: 'Spices' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Two-Stage Tandoori Marinade',
        instruction: 'Marinate chicken first with Kashmiri chili, lemon juice, and salt for 15 minutes. Add yogurt, mustard oil, ginger-garlic paste, and garam masala. Marinate for at least 2 hours.',
        durationMinutes: 30
      },
      {
        stepNumber: 2,
        title: 'Broil / Char Chicken Pieces',
        instruction: 'Thread chicken onto skewers or arrange on a wire rack. Broil in oven at 240°C (465°F) for 12 minutes until edges are charred with smoky blisters. Reserve pan juices.',
        durationMinutes: 15,
        temperature: '240°C / 465°F'
      },
      {
        stepNumber: 3,
        title: 'Simmer and Strain Velvety Makhani Gravy',
        instruction: 'Simmer tomato puree with cardamom, cloves, and ginger for 20 minutes until reduced and oil separates. Blend with cashew paste and pass through a fine sieve for signature silkiness.',
        durationMinutes: 25
      },
      {
        stepNumber: 4,
        title: 'Incorporate Butter, Chicken and Cream',
        instruction: 'Return strained gravy to pan. Whisk in 80g cold butter cubes and heavy cream. Slide charred chicken and pan juices into gravy. Simmer for 8 minutes.',
        durationMinutes: 10
      },
      {
        stepNumber: 5,
        title: 'Kasuri Methi Fragrance Crown',
        instruction: 'Toast kasuri methi leaves in your palm, rub into a fragrant dust, and shower over the simmering gravy. Stir once and serve.',
        durationMinutes: 2
      }
    ],
    funFact: 'Invented in Delhi in the 1950s at Moti Mahal restaurant by Kundan Lal Gujral, who combined leftover tandoori chicken with a rich buttery tomato gravy so the meat wouldn’t dry out.',
    servingNotes: 'Serve hot with garlic butter naan and fragrant basmati jeera rice.'
  },
  {
    id: 'ind-hyderabadi-biryani',
    countryId: 'india',
    title: 'Hyderabadi Dum Goat/Lamb Biryani',
    nativeTitle: 'हैदराबादी दम बिरयानी',
    description: 'Regal layered rice dish of marinated spiced meat cooked together with aged basmati rice infused with saffron milk, caramelized onions (birista), mint, and whole spices under a sealed dough lid (dum).',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/960px-%22Hyderabadi_Dum_Biryani%22.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 45,
    cookTimeMinutes: 50,
    servings: 6,
    difficulty: 'Hard',
    caloriesPerServing: 680,
    dietaryTags: ['High-Protein', 'Royal Mughlai Heritage', 'Gluten-Free'],
    course: 'Main',
    ingredients: [
      { name: 'Bone-in Lamb or Goat Shoulder Pieces', amount: 900, unit: 'g', category: 'Meat' },
      { name: 'Aged Long-Grain Basmati Rice', amount: 500, unit: 'g', category: 'Rice' },
      { name: 'Birista (deep-fried crispy golden onions)', amount: 200, unit: 'g', category: 'Aromatics' },
      { name: 'Full Fat Curd (Yogurt)', amount: 200, unit: 'g', category: 'Marinade' },
      { name: 'Pure Saffron Threads steeped in warm milk', amount: 80, unit: 'ml', category: 'Aroma' },
      { name: 'Desi Ghee (clarified butter)', amount: 70, unit: 'g', category: 'Fat' },
      { name: 'Fresh Mint & Cilantro Leaves', amount: 60, unit: 'g', category: 'Herbs' },
      { name: 'Whole Shahi Jeera, Star Anise, Mace, Cardamom', amount: 15, unit: 'g', category: 'Whole Spices' },
      { name: 'Wheat Flour Dough to seal pot', amount: 200, unit: 'g', category: 'Dum Seal' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Marinate Meat Overnight',
        instruction: 'Massage lamb with raw papaya paste (natural meat tenderizer), ginger-garlic paste, chili, curd, birista, mint, cilantro, ghee, and whole spices for at least 4 hours.',
        durationMinutes: 20
      },
      {
        stepNumber: 2,
        title: 'Cook Basmati to 70% Doneness',
        instruction: 'Boil aged basmati in salted water with whole spices for 5-6 minutes until grains have lengthened but still possess a firm bite in the center. Drain immediately.',
        durationMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Layer the Handi (Kacchi Biryani)',
        instruction: 'Place marinated raw lamb flat at the bottom of a heavy bottomed handi. Spread 70% parboiled rice evenly on top. Scatter mint, cilantro, remaining birista, saffron milk, and dollops of melted ghee.',
        durationMinutes: 10
      },
      {
        stepNumber: 4,
        title: 'The Dum Cooking Seal',
        instruction: 'Roll wheat dough into a rope and press around rim of handi. Press heavy lid firmly onto dough to seal all steam. Cook on high heat for 15 minutes, then place handi on a cast-iron tawa on low heat for 35 minutes.',
        durationMinutes: 50,
        temperature: 'Dum Sealed'
      },
      {
        stepNumber: 5,
        title: 'The Unsealing Ritual',
        instruction: 'Cut open the hardened dough seal at the table. A plume of fragrant saffron and spiced steam will billow out. Plunge a flat spoon down to lift both tender meat and fluffy tinted rice without breaking grains.',
        durationMinutes: 5
      }
    ],
    funFact: 'In the royal kitchens of the Nizams of Hyderabad, the recipe was considered a guarded state secret, with royal banquets offering up to 49 variations.',
    servingNotes: 'Serve with Mirchi ka Salan (peanut-chili gravy) and cooling cucumber raita.'
  },
  {
    id: 'ind-palak-paneer',
    countryId: 'india',
    title: 'Dhabha-Style Palak Paneer',
    nativeTitle: 'पालक पनीर',
    description: 'Golden pan-seared cubes of fresh artisanal paneer cottage cheese simmered in a vibrant spiced green gravy of blanched spinach, garlic, green chilies, and cream.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Palakpaneer_Rayagada_Odisha_0009.jpg/960px-Palakpaneer_Rayagada_Odisha_0009.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 20,
    cookTimeMinutes: 20,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 380,
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'High-Protein'],
    course: 'Main',
    ingredients: [
      { name: 'Fresh Paneer Cheese (cubed into 2cm dice)', amount: 400, unit: 'g', category: 'Dairy' },
      { name: 'Fresh English or Desi Spinach Leaves', amount: 600, unit: 'g', category: 'Greens' },
      { name: 'Garlic Cloves (finely chopped)', amount: 8, unit: 'cloves', category: 'Aromatics' },
      { name: 'Green Chilies (slit)', amount: 3, unit: 'pcs', category: 'Heat' },
      { name: 'Desi Ghee or Butter', amount: 40, unit: 'g', category: 'Fat' },
      { name: 'Heavy Cream', amount: 50, unit: 'ml', category: 'Finish' },
      { name: 'Kasuri Methi & Garam Masala', amount: 6, unit: 'g', category: 'Spices' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Blanch and Ice-Shock Spinach',
        instruction: 'Blanch washed spinach in boiling water with a pinch of sugar for 90 seconds. Immediately plunge into ice-cold water to lock in the radiant emerald green color. Puree coarsely with green chilies.',
        durationMinutes: 8
      },
      {
        stepNumber: 2,
        title: 'Golden Pan-Sear Paneer',
        instruction: 'Lightly fry paneer cubes in 1 tbsp ghee until edges are golden. Soak immediately in warm salted water for 10 minutes to keep them soft and pillowy.',
        durationMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Tadka and Simmer Gravy',
        instruction: 'Heat remaining ghee, sauté cumin seeds and copious minced garlic until golden. Add onions and tomatoes, then pour in spinach puree. Simmer 5 minutes.',
        durationMinutes: 7
      },
      {
        stepNumber: 4,
        title: 'Fold Paneer and Cream',
        instruction: 'Add paneer cubes, garam masala, and kasuri methi. Swirl in heavy cream and remove from heat.',
        durationMinutes: 3
      }
    ],
    funFact: 'Ice-shocking blanched spinach halts enzymatic breakdown of chlorophyll, preventing the spinach from turning dull olive-gray.',
    servingNotes: 'Pair with hot tandoori roti or flaky lachha paratha with a pat of white butter.'
  },
  {
    id: 'ind-dal-makhani',
    countryId: 'india',
    title: 'Slow-Cooked Punjabi Dal Makhani',
    nativeTitle: 'दाल मखनी',
    description: 'Black urad lentils and kidney beans simmered overnight over slow charcoal embers with ripe tomatoes, churned white butter, cream, and ginger.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Punjabi_style_Dal_Makhani.jpg/960px-Punjabi_style_Dal_Makhani.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 20,
    cookTimeMinutes: 120,
    servings: 6,
    difficulty: 'Medium',
    caloriesPerServing: 420,
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'High-Fiber'],
    course: 'Main',
    ingredients: [
      { name: 'Whole Black Urad Dal (soaked overnight)', amount: 300, unit: 'g', category: 'Lentils' },
      { name: 'Rajma (Red Kidney Beans, soaked)', amount: 80, unit: 'g', category: 'Legumes' },
      { name: 'Cultured Butter (Makhan)', amount: 100, unit: 'g', category: 'Fat' },
      { name: 'Fresh Tomato Puree', amount: 400, unit: 'g', category: 'Base' },
      { name: 'Ginger-Garlic Paste & Julienned Ginger', amount: 30, unit: 'g', category: 'Aromatics' },
      { name: 'Kashmiri Red Chili Powder', amount: 15, unit: 'g', category: 'Spices' },
      { name: 'Fresh Heavy Cream', amount: 80, unit: 'ml', category: 'Finish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Pressure Cook Lentils',
        instruction: 'Cook soaked urad dal and rajma with 1.5L water and salt for 8 whistles until soft and easily crushed between thumb and forefinger.',
        durationMinutes: 30
      },
      {
        stepNumber: 2,
        title: 'Tomato Makhani Base',
        instruction: 'Cook ginger-garlic paste and Kashmiri chili in 40g butter. Add tomato puree and cook until butter glistens at the edges.',
        durationMinutes: 15
      },
      {
        stepNumber: 3,
        title: 'The Slow 90-Minute Simmer & Mash',
        instruction: 'Combine cooked lentils with tomato base. Simmer on lowest heat for 90 minutes, periodically mashing against the side of the pot with a ladle to release creamy starches. Stir in remaining butter.',
        durationMinutes: 90
      },
      {
        stepNumber: 4,
        title: 'Cream Swirl Finish',
        instruction: 'Stir in heavy cream and crushed kasuri methi. Simmer 5 more minutes until rich and velvety.',
        durationMinutes: 5
      }
    ],
    funFact: 'In Punjab, the pot of dal was placed on dying charcoal tandoor fires before bed, gently bubbling all night until lunch the next day.',
    servingNotes: 'Serve in copper bowls with a swirl of fresh cream and hot garlic naan.'
  },
  {
    id: 'ind-rogan-josh',
    countryId: 'india',
    title: 'Kashmiri Mutton Rogan Josh',
    nativeTitle: 'रोग़न जोश',
    description: 'Tender bone-in lamb simmered in an aromatic crimson gravy infused with dried Kashmiri chilies, fennel powder, dried ginger (sonth), and asafoetida.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Rogan_Josh_Kashmiri.jpg/960px-Rogan_Josh_Kashmiri.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 20,
    cookTimeMinutes: 80,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 560,
    dietaryTags: ['High-Protein', 'Kashmiri Wazwan', 'Gluten-Free'],
    course: 'Main',
    ingredients: [
      { name: 'Bone-in Mutton / Lamb Pieces', amount: 900, unit: 'g', category: 'Meat' },
      { name: 'Pure Mustard Oil or Ghee', amount: 60, unit: 'ml', category: 'Cooking Fat' },
      { name: 'Kashmiri Chili Paste (soaked & ground)', amount: 30, unit: 'g', category: 'Color & Heat' },
      { name: 'Ground Fennel Seed Powder (Saunf)', amount: 15, unit: 'g', category: 'Aromatics' },
      { name: 'Dried Ginger Powder (Sonth)', amount: 10, unit: 'g', category: 'Aromatics' },
      { name: 'Whisked Plain Yogurt (Curd)', amount: 150, unit: 'g', category: 'Base' },
      { name: 'Black Cardamom, Cloves, Cinnamon & Ratanjot', amount: 10, unit: 'g', category: 'Spices' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Smoke Mustard Oil',
        instruction: 'Heat mustard oil until it reaches smoking point to eliminate raw pungency; cool slightly. Add whole spices and mutton pieces, searing until lightly browned.',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Bloom Kashmiri Red Chilies',
        instruction: 'Pour in Kashmiri chili paste with a splash of water. Fry until vibrant crimson oil ("rogan") rises to the surface.',
        durationMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Whisked Yogurt & Fennel-Ginger Simmer',
        instruction: 'Beat yogurt into the pot on low heat to prevent curdling. Add ground fennel, ginger powder, and 500ml water. Cover and simmer gently for 60 minutes until meat melts off bone.',
        durationMinutes: 60
      }
    ],
    funFact: 'Rogan Josh is a centerpiece of the 36-course Kashmiri feast called "Wazwan". Traditional Pandit versions use asafoetida instead of onions and garlic.',
    servingNotes: 'Serve with steamed Kashmiri white basmati rice and walnut chutney.'
  },
  {
    id: 'ind-samosas',
    countryId: 'india',
    title: 'Crispy Punjabi Aloo Samosas',
    nativeTitle: 'पंजाबी समोसा',
    description: 'Crispy, flaky carom-scented pastry cones stuffed with chunky spiced potatoes, green peas, toasted cashews, ginger, and coriander, served with tangy tamarind chutney.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Samosas%2C_snack_food_at_Wikipedia%27s_16th_Birthday_celebration_in_Chittagong_%2801%29.jpg/960px-Samosas%2C_snack_food_at_Wikipedia%27s_16th_Birthday_celebration_in_Chittagong_%2801%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 40,
    cookTimeMinutes: 25,
    servings: 8,
    difficulty: 'Medium',
    caloriesPerServing: 260,
    dietaryTags: ['Vegan', 'Iconic Street Food'],
    course: 'Street Food',
    ingredients: [
      { name: 'All-Purpose Flour (Maida)', amount: 350, unit: 'g', category: 'Pastry' },
      { name: 'Ajwain (Carom Seeds)', amount: 5, unit: 'g', category: 'Pastry' },
      { name: 'Ghee or Oil for dough (Moyen)', amount: 70, unit: 'g', category: 'Pastry' },
      { name: 'Boiled Potatoes (crushed roughly by hand)', amount: 600, unit: 'g', category: 'Filling' },
      { name: 'Sweet Green Peas', amount: 100, unit: 'g', category: 'Filling' },
      { name: 'Coriander Seeds, Cumin & Amchur (dry mango powder)', amount: 15, unit: 'g', category: 'Spices' },
      { name: 'Oil for deep frying', amount: 1000, unit: 'ml', category: 'Frying' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Rub Moyen into Dough',
        instruction: 'Rub warm ghee into flour and ajwain with fingers until breadcrumb texture forms. Add cold water in small splashes to form a stiff, tough dough. Rest 30 minutes.',
        durationMinutes: 15
      },
      {
        stepNumber: 2,
        title: 'Sauté Spiced Potato Filling',
        instruction: 'Toast whole coriander seeds and cumin in ghee. Add ginger, peas, crushed potatoes, amchur, and garam masala. Cool filling completely.',
        durationMinutes: 12
      },
      {
        stepNumber: 3,
        title: 'Cone Folding and Stuffing',
        instruction: 'Roll dough into oval disks, cut in half. Form half into a cone by overlapping straight edges with water. Stuff with potato filling, pleat back edge, and seal base tightly.',
        durationMinutes: 20
      },
      {
        stepNumber: 4,
        title: 'Low-Temperature Slow Fry',
        instruction: 'Drop samosas into moderately warm oil (150°C). Fry slowly for 20 minutes without rushing so the pastry becomes flaky and bubble-free, finishing at 170°C for golden color.',
        durationMinutes: 20,
        temperature: '150°C / 300°F'
      }
    ],
    funFact: 'Samosas originally journeyed from Central Asia (sambosa) along Silk Road trade routes before adopting their signature spiced potato filling in India.',
    servingNotes: 'Serve steaming hot with fresh mint-coriander chutney and sweet-sour tamarind saunth.'
  },
  {
    id: 'ind-masala-dosa',
    countryId: 'india',
    title: 'Crispy South Indian Masala Dosa',
    nativeTitle: 'मसाला दोसा',
    description: 'Paper-thin, golden lace crepe made from fermented rice and urad dal batter, wrapped around spiced mustard-seed potato masala with sambar and coconut chutney.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Dosa_at_Sri_Ganesha_Restauran%2C_Bangkok_%2844570742744%29.jpg/960px-Dosa_at_Sri_Ganesha_Restauran%2C_Bangkok_%2844570742744%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 30,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 340,
    dietaryTags: ['Vegan', 'Gluten-Free', 'South Indian Classic'],
    course: 'Main',
    ingredients: [
      { name: 'Parboiled Rice & Sona Masoori Rice', amount: 400, unit: 'g', category: 'Batter' },
      { name: 'Whole White Urad Dal', amount: 120, unit: 'g', category: 'Batter' },
      { name: 'Fenugreek Seeds (Methi)', amount: 5, unit: 'g', category: 'Ferment' },
      { name: 'Boiled Potatoes (mashed)', amount: 400, unit: 'g', category: 'Filling' },
      { name: 'Mustard Seeds, Curry Leaves & Green Chilies', amount: 15, unit: 'g', category: 'Tadka' },
      { name: 'Ghee or Sesame Oil for griddle', amount: 50, unit: 'ml', category: 'Fat' },
      { name: 'Fresh Coconut Chutney & Vegetable Sambar', amount: 300, unit: 'ml', category: 'Accompaniments' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Ferment Batter for 12 Hours',
        instruction: 'Soak rice and urad dal with fenugreek. Grind with cold water to a silky aerated batter. Ferment in a warm spot for 12 hours until aerated and doubled.',
        durationMinutes: 20
      },
      {
        stepNumber: 2,
        title: 'Cook Potato Palya Filling',
        instruction: 'Splutter mustard seeds and curry leaves in oil. Add sliced onions, turmeric, green chilies, and mashed potatoes. Simmer with a splash of water until soft.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Spread Spiral Crepe on Tawa',
        instruction: 'Heat cast iron dosa tawa. Pour a ladle of batter in center, spreading in quick outward concentric circles with bottom of ladle. Drizzle ghee around edges.',
        durationMinutes: 3,
        temperature: 'Medium-High'
      },
      {
        stepNumber: 4,
        title: 'Roll with Potato Masala',
        instruction: 'When underside turns deep golden brown and edges lift crisp, place a cylinder of potato masala across center. Roll into a cylinder and serve immediately.',
        durationMinutes: 2
      }
    ],
    funFact: 'Fenugreek seeds contain unique mucilage that feeds wild lactobacillus bacteria, accelerating the fermentation and giving dosas their crisp texture.',
    servingNotes: 'Serve immediately straight off the tawa onto a banana leaf with piping hot sambar and fresh white coconut chutney.'
  },
  {
    id: 'ind-chana-masala',
    countryId: 'india',
    title: 'Amritsari Chana Masala (Pindi Chole)',
    nativeTitle: 'पिंडी छोले',
    description: 'Dark, tangy chickpeas brewed with dried black tea leaves, pomegranate seeds (anardana), dry ginger, and whole roasted spices, tossed in ghee and green chilies.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Chole_Bhature_from_Nagpur.JPG/960px-Chole_Bhature_from_Nagpur.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 20,
    cookTimeMinutes: 45,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 350,
    dietaryTags: ['Vegan', 'Gluten-Free', 'High-Fiber'],
    course: 'Main',
    ingredients: [
      { name: 'White Kabuli Chickpeas (soaked overnight)', amount: 400, unit: 'g', category: 'Legumes' },
      { name: 'Black Tea Bags (for dark color infusion)', amount: 2, unit: 'pcs', category: 'Brew' },
      { name: 'Dried Pomegranate Seed Powder (Anardana)', amount: 15, unit: 'g', category: 'Tang' },
      { name: 'Roasted Cumin, Coriander & Amchur', amount: 20, unit: 'g', category: 'Spices' },
      { name: 'Desi Ghee', amount: 40, unit: 'g', category: 'Fat' },
      { name: 'Ginger Matchsticks & Slit Green Chilies', amount: 25, unit: 'g', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Boil Chickpeas with Tea Sachet',
        instruction: 'Boil chickpeas with black tea bags, black cardamom, and baking soda. Cook until chickpeas are buttery tender and stained dark charcoal.',
        durationMinutes: 30
      },
      {
        stepNumber: 2,
        title: 'Coat in Dry Roasted Masala',
        instruction: 'Drain chickpeas (reserve dark broth). Toss warm chickpeas in anardana powder, roasted cumin, and amchur.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Sizzling Ghee Tadka',
        instruction: 'Heat ghee to smoking, add ginger matchsticks and green chilies. Pour sizzling over chickpeas with a splash of reserved broth and simmer 10 minutes.',
        durationMinutes: 10
      }
    ],
    funFact: 'Boiling with black tea leaves and baking soda creates an alkaline brew that softens chickpea skins while staining them the prized Pindi dark brown.',
    servingNotes: 'Serve with puffed golden bhature or warm kulcha bread and pickled onions.'
  },
  {
    id: 'ind-tandoori-chicken',
    countryId: 'india',
    title: 'Tandoori Chicken Tikka Kebabs',
    nativeTitle: 'तंदूरी चिकन टिक्का',
    description: 'Juicy skewered chunks of chicken marinated in hung curd, mustard oil, Kashmiri chili, and garam masala, roasted over high charcoal heat with lemon and chaat masala.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Chickentandoori.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
    prepTimeMinutes: 25,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 420,
    dietaryTags: ['High-Protein', 'Keto-Friendly', 'Gluten-Free'],
    course: 'Appetizer',
    ingredients: [
      { name: 'Boneless Skinless Chicken Thighs (cubed 4cm)', amount: 750, unit: 'g', category: 'Meat' },
      { name: 'Thick Greek Yogurt / Hung Curd', amount: 150, unit: 'g', category: 'Marinade' },
      { name: 'Raw Mustard Oil', amount: 30, unit: 'ml', category: 'Marinade' },
      { name: 'Kashmiri Chili Powder', amount: 20, unit: 'g', category: 'Spices' },
      { name: 'Ginger-Garlic Paste & Lemon Juice', amount: 30, unit: 'g', category: 'Aromatics' },
      { name: 'Chaat Masala & Melted Butter for basting', amount: 30, unit: 'g', category: 'Basting' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Whisk Tandoori Marinade',
        instruction: 'Whisk mustard oil with Kashmiri chili until brilliant orange. Whisk in hung curd, ginger-garlic paste, lemon juice, and spices.',
        durationMinutes: 8
      },
      {
        stepNumber: 2,
        title: 'Marinate & Skewer',
        instruction: 'Coat chicken cubes and marinate for 3 hours. Thread onto flat steel skewers.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Charcoal Roast & Baste',
        instruction: 'Roast over high heat or 250°C oven broiler for 12-14 minutes, basting twice with melted butter until edges blister.',
        durationMinutes: 14,
        temperature: '250°C / 480°F'
      }
    ],
    funFact: 'Authentic clay tandoors reach temperatures above 480°C (900°F), locking in internal juices while charring the exterior.',
    servingNotes: 'Scatter with fresh mint leaves, sliced red onion rings, and a dusting of tangy chaat masala.'
  },
  {
    id: 'ind-malai-kofta',
    countryId: 'india',
    title: 'Shahi Malai Kofta in Cashew Gravy',
    nativeTitle: 'शाही मलाई कोफ़्ता',
    description: 'Melt-in-your-mouth fried dumplings of fresh paneer, mawa, and potato stuffed with raisins and nuts, served in a velvety white cashew-cream gravy fragrant with cardamom.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Koofteh_tabrizi.jpg/960px-Koofteh_tabrizi.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 35,
    cookTimeMinutes: 25,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 540,
    dietaryTags: ['Vegetarian', 'Royal Mughlai'],
    course: 'Main',
    ingredients: [
      { name: 'Fresh Paneer (grated fine)', amount: 250, unit: 'g', category: 'Kofta' },
      { name: 'Boiled Potatoes (grated)', amount: 200, unit: 'g', category: 'Kofta' },
      { name: 'Cashews & Golden Raisins (chopped for stuffing)', amount: 50, unit: 'g', category: 'Kofta Stuffing' },
      { name: 'Cashew Nut Paste (soaked & blended)', amount: 100, unit: 'g', category: 'Gravy' },
      { name: 'White Onion & Ginger Puree', amount: 150, unit: 'g', category: 'Gravy' },
      { name: 'Heavy Cream and Butter', amount: 80, unit: 'g', category: 'Dairy' },
      { name: 'White Pepper & Green Cardamom', amount: 5, unit: 'g', category: 'Spices' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Shape Stuffed Koftas',
        instruction: 'Knead paneer, potato, and cornstarch until smooth. Form small balls, stuff with cashew-raisin mixture, and roll smooth.',
        durationMinutes: 15
      },
      {
        stepNumber: 2,
        title: 'Deep Fry Koftas',
        instruction: 'Fry in medium-hot oil until golden and delicate. Drain gently on paper towels.',
        durationMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Simmer Shahi Cashew Gravy',
        instruction: 'Cook white onion puree in butter until sweet. Stir in cashew paste, cream, milk, white pepper, and cardamom. Simmer for 10 minutes until glossy.',
        durationMinutes: 12
      },
      {
        stepNumber: 4,
        title: 'Plate Separately',
        instruction: 'Arrange koftas in serving dish and ladle steaming hot cashew cream gravy over them right before eating to prevent koftas from breaking.',
        durationMinutes: 2
      }
    ],
    funFact: '"Malai" means cream and "Kofta" refers to meatball-style dumplings; this regal vegetarian creation was a favorite in Mughal royal courts.',
    servingNotes: 'Garnish with a drizzle of cream and slivered almonds, accompanied by saffron pulao.'
  },
  {
    id: 'ind-garlic-naan',
    countryId: 'india',
    title: 'Garlic Butter Tandoori Naan',
    nativeTitle: 'गार्लिक नान',
    description: 'Pillowy, blistered flatbread slapped against smoking cast-iron or clay tandoor walls, brushed generously with minced garlic, fresh cilantro, and melted ghee.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Annapurna_Naan.jpg/960px-Annapurna_Naan.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 25,
    cookTimeMinutes: 10,
    servings: 6,
    difficulty: 'Easy',
    caloriesPerServing: 260,
    dietaryTags: ['Vegetarian', 'Tandoor Bread'],
    course: 'Bakery',
    ingredients: [
      { name: 'All-Purpose Flour (Maida)', amount: 400, unit: 'g', category: 'Flour' },
      { name: 'Plain Yogurt', amount: 80, unit: 'g', category: 'Wet' },
      { name: 'Warm Whole Milk', nameKa: 'თბილი რძე', amount: 100, unit: 'ml', category: 'Wet' },
      { name: 'Warm Water', nameKa: 'თბილი წყალი', amount: 80, unit: 'ml', category: 'Wet' },
      { name: 'Active Dry Yeast or Baking Powder', amount: 7, unit: 'g', category: 'Leavening' },
      { name: 'Garlic Cloves (finely minced)', amount: 35, unit: 'g', category: 'Topping' },
      { name: 'Melted Ghee or Butter', amount: 60, unit: 'g', category: 'Brush' },
      { name: 'Fresh Cilantro (chopped)', amount: 20, unit: 'g', category: 'Topping' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Knead Soft Elastic Dough',
        instruction: 'Knead flour, yogurt, warm milk, yeast, sugar, and salt for 8 minutes until supple and elastic. Proof in a warm place for 90 minutes until doubled.',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Stretch Teardrop & Press Garlic',
        instruction: 'Divide into 6 balls. Roll and stretch by hand into teardrop shapes. Press minced garlic and cilantro firmly into top surface.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Inverted Cast Iron Tawa Bake',
        instruction: 'Brush underside of naan with water. Slap wet side onto a smoking hot cast iron skillet (it will stick). Cook 1 minute until large bubbles inflate. Invert skillet directly over open gas flame for 30 seconds to blister and char garlic.',
        durationMinutes: 8,
        temperature: 'Screaming Hot'
      },
      {
        stepNumber: 4,
        title: 'Slather Butter',
        instruction: 'Brush immediately with warm melted ghee while steaming hot.',
        durationMinutes: 1
      }
    ],
    funFact: 'Wetting the back of the dough recreates the adhesive moisture required to stick the bread to the vertical clay wall of a traditional tandoor.',
    servingNotes: 'Serve piping hot right off the skillet alongside curry or dal.'
  },
  {
    id: 'ind-gulab-jamun',
    countryId: 'india',
    title: 'Warm Saffron Rose Gulab Jamun',
    nativeTitle: 'गुलाब जामुन',
    description: 'Golden fried dumplings made from milk solids (khoya) and chenna, soaked in a fragrant warm sugar syrup infused with green cardamom, saffron, and rose water.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Gulab-jamun-wallpaper-1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
    prepTimeMinutes: 25,
    cookTimeMinutes: 20,
    servings: 6,
    difficulty: 'Easy',
    caloriesPerServing: 320,
    dietaryTags: ['Vegetarian', 'Festive Celebration'],
    course: 'Dessert',
    ingredients: [
      { name: 'Fresh Soft Khoya (Mawa) or Milk Powder Dough', amount: 250, unit: 'g', category: 'Base' },
      { name: 'Paneer or Chenna (finely mashed)', amount: 80, unit: 'g', category: 'Base' },
      { name: 'All-Purpose Flour', amount: 35, unit: 'g', category: 'Binder' },
      { name: 'Granulated Sugar', amount: 400, unit: 'g', category: 'Syrup' },
      { name: 'Water', amount: 400, unit: 'ml', category: 'Syrup' },
      { name: 'Saffron Threads & Rose Water', amount: 15, unit: 'ml', category: 'Syrup Essence' },
      { name: 'Desi Ghee for deep frying', amount: 500, unit: 'ml', category: 'Frying' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Simmer Saffron Rose Syrup',
        instruction: 'Simmer sugar, water, and crushed cardamom for 8 minutes until slightly sticky (half-string consistency). Stir in saffron and rose water. Keep warm.',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Knead Crack-Free Dough Balls',
        instruction: 'Knead khoya, paneer, and flour with the heel of your hand until completely silky. Roll into smooth, seamless bite-sized spheres without any cracks.',
        durationMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Gentle Low Fry in Ghee',
        instruction: 'Fry balls in warm ghee on low heat for 12 minutes, swirling the ghee continuously so they brown evenly to deep golden mahogany.',
        durationMinutes: 12,
        temperature: '140°C / 285°F'
      },
      {
        stepNumber: 4,
        title: 'Soak in Warm Syrup',
        instruction: 'Drop hot fried balls directly into warm syrup. Let soak for at least 1 hour so they absorb syrup and expand into soft, spongy pillows.',
        durationMinutes: 60
      }
    ],
    funFact: '"Gulab" comes from Persian "gul" (flower) and "ab" (water), referencing rose water, while "jamun" refers to the South Asian blackberry it resembles.',
    servingNotes: 'Serve warm garnished with slivered pistachios and silver leaf (vark).'
  }
];
