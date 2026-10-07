
export const THAILAND_RECIPES = [
  {
    id: 'tha-pad-thai',
    countryId: 'thailand',
    title: 'Classic Pad Thai Goong',
    nativeTitle: 'ผัดไทยกุ้งสด',
    description: 'Wok-charred chewy rice noodles stir-fried with wild river prawns, pressed tofu, sweet tamarind pulp, palm sugar, fish sauce, crushed peanuts, and crisp bean sprouts.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/960px-Phat_Thai_kung_Chang_Khien_street_stall.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    servings: 2,
    difficulty: 'Medium',
    caloriesPerServing: 540,
    dietaryTags: ['Seafood', 'Gluten-Free', 'Street Food Legend'],
    course: 'Street Food',
    ingredients: [
      { name: 'Dry Flat Rice Stick Noodles (soaked in room-temp water 45 mins)', amount: 180, unit: 'g', category: 'Noodles' },
      { name: 'Fresh Tiger Prawns (peeled, deveined, tails on)', amount: 8, unit: 'pcs', category: 'Seafood' },
      { name: 'Yellow Pressed Firm Tofu (cut into matchsticks)', amount: 80, unit: 'g', category: 'Protein' },
      { name: 'Sweet Preserved Radish (finely chopped)', amount: 25, unit: 'g', category: 'Flavor' },
      { name: 'Pure Tamarind Concentrate Paste', amount: 45, unit: 'g', category: 'Pad Thai Sauce' },
      { name: 'Thai Fish Sauce (Nam Pla)', amount: 35, unit: 'ml', category: 'Pad Thai Sauce' },
      { name: 'Palm Sugar (shaved)', amount: 40, unit: 'g', category: 'Pad Thai Sauce' },
      { name: 'Large Eggs', amount: 2, unit: 'pcs', category: 'Protein' },
      { name: 'Fresh Bean Sprouts & Chinese Garlic Chives', amount: 120, unit: 'g', category: 'Greens' },
      { name: 'Roasted Peanuts (crushed) & Lime Wedges', amount: 40, unit: 'g', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Boil Tamarind Palm Sugar Sauce',
        instruction: 'Simmer tamarind paste, palm sugar, fish sauce, and a splash of water for 5 minutes until sugar dissolves into a balanced sweet, sour, and savory syrup.',
        durationMinutes: 5
      },
      {
        stepNumber: 2,
        title: 'Sear Prawns in Smoking Hot Wok',
        instruction: 'Heat wok over maximum heat with peanut oil. Sear prawns for 90 seconds until pink and caramelized; remove to a plate to prevent overcooking.',
        durationMinutes: 2,
        temperature: 'High Wok Heat'
      },
      {
        stepNumber: 3,
        title: 'Wok-Fry Aromatics and Noodles',
        instruction: 'Add diced shallots, pressed tofu, and preserved radish to wok, frying for 1 minute. Add soaked rice noodles and 4 tablespoons of tamarind sauce. Toss vigorously, splashing water as needed until noodles absorb sauce and become chewy.',
        durationMinutes: 4
      },
      {
        stepNumber: 4,
        title: 'Scramble Eggs & Flash Toss',
        instruction: 'Push noodles to one side of wok. Crack eggs into the bare wok, scramble lightly until half-set, then fold noodles back over eggs. Toss in cooked prawns, garlic chives, and half the bean sprouts for 30 seconds.',
        durationMinutes: 2
      }
    ],
    funFact: 'Promoted in the late 1930s by Prime Minister Plaek Phibunsongkhram as a nationwide dish to foster Thai nationalism and reduce national rice consumption during WWII.',
    servingNotes: 'Serve immediately with crushed peanuts, fresh lime wedges, chili flakes, and raw bean sprouts on the side.'
  },
  {
    id: 'tha-tom-yum-goong',
    countryId: 'thailand',
    title: 'Tom Yum Goong (Spicy Sour Prawn Soup)',
    nativeTitle: 'ต้มยำกุ้ง',
    description: 'Electrifying herbal broth bursting with wild river prawns, bruised lemongrass stalks, sliced galangal, torn kaffir lime leaves, roasted chili paste, and lime juice.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tom_yam_kung_maenam.jpg/960px-Tom_yam_kung_maenam.jpg',
    prepTimeMinutes: 15,
    cookTimeMinutes: 12,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 280,
    dietaryTags: ['Seafood', 'Gluten-Free', 'Iconic Soup'],
    course: 'Soup',
    ingredients: [
      { name: 'Head-on, Shell-on River Prawns', amount: 500, unit: 'g', category: 'Seafood' },
      { name: 'Lemongrass Stalks (bruised & cut on bias)', amount: 3, unit: 'stalks', category: 'Aromatics' },
      { name: 'Fresh Galangal Root (sliced into coins)', amount: 30, unit: 'g', category: 'Aromatics' },
      { name: 'Fresh Kaffir Lime Leaves (torn, center rib removed)', amount: 6, unit: 'leaves', category: 'Herbs' },
      { name: 'Thai Bird’s Eye Chilis (bruised with pestle)', amount: 6, unit: 'pcs', category: 'Heat' },
      { name: 'Fresh Straw Mushrooms or Oyster Mushrooms', amount: 150, unit: 'g', category: 'Vegetable' },
      { name: 'Nam Prik Pao (Thai roasted chili paste in oil)', amount: 30, unit: 'g', category: 'Base' },
      { name: 'Fresh Lime Juice', nameKa: 'ახალი ლაიმის წვენი', amount: 30, unit: 'ml', category: 'Seasoning' },
      { name: 'Thai Fish Sauce (Nam Pla)', nameKa: 'ტაილანდური თევზის სოუსი (ნამ პლა)', amount: 30, unit: 'ml', category: 'Seasoning' },
      { name: 'Evaporated Milk (for creamy Tom Yum Nam Khon)', amount: 60, unit: 'ml', category: 'Optional' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Extract Prawn Head Broth',
        instruction: 'Twist heads off prawns. Sauté heads in 1 tbsp oil in a pot, crushing with a spoon to release rich orange head fat. Pour in 1 liter water and simmer 8 minutes; strain broth.',
        durationMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Infuse Aromatics',
        instruction: 'Bring prawn broth to a boil. Add bruised lemongrass, galangal slices, and torn kaffir lime leaves. Simmer 3 minutes until intensely fragrant.',
        durationMinutes: 3
      },
      {
        stepNumber: 3,
        title: 'Cook Prawns & Mushrooms',
        instruction: 'Stir in roasted chili paste (nam prik pao) and mushrooms. Add raw prawn bodies. Cook for 2 minutes just until prawns turn opaque pink and curl into C-shapes.',
        durationMinutes: 3
      },
      {
        stepNumber: 4,
        title: 'Season Off Heat',
        instruction: 'Turn off the heat completely (lime juice turns bitter if boiled). Stir in fresh lime juice, fish sauce, bruised bird’s eye chilies, and evaporated milk. Garnish with fresh cilantro.',
        durationMinutes: 2
      }
    ],
    funFact: 'The citrusy aromatics in Tom Yum (lemongrass, galangal, kaffir lime) are traditionally not eaten; they are left in the bowl purely to perfume the broth.',
    servingNotes: 'Serve steaming hot in a traditional charcoal-warmed brass hot pot with jasmine rice.'
  },
  {
    id: 'tha-green-curry',
    countryId: 'thailand',
    title: 'Gaeng Kiew Wan Gai (Thai Green Chicken Curry)',
    nativeTitle: 'แกงเขียวหวานไก่',
    description: 'Fragrant emerald coconut curry simmered with tender chicken, round pea and apple eggplants, makrut lime leaves, and sweet Thai basil in fresh mortar-pounded green curry paste.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Thai_green_chicken_curry_and_roti.jpg/960px-Thai_green_chicken_curry_and_roti.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 25,
    cookTimeMinutes: 20,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 520,
    dietaryTags: ['High-Protein', 'Gluten-Free', 'Classic Curry'],
    course: 'Main',
    ingredients: [
      { name: 'Boneless Skinless Chicken Thighs (sliced)', amount: 500, unit: 'g', category: 'Poultry' },
      { name: 'First-Press Coconut Cream', amount: 250, unit: 'ml', category: 'Fat & Liquid' },
      { name: 'Coconut Milk', amount: 350, unit: 'ml', category: 'Liquid' },
      { name: 'Authentic Thai Green Curry Paste', amount: 60, unit: 'g', category: 'Paste' },
      { name: 'Thai Round Green Eggplants (quartered)', amount: 150, unit: 'g', category: 'Vegetable' },
      { name: 'Pea Eggplants (Makhuea Phuang)', amount: 40, unit: 'g', category: 'Vegetable' },
      { name: 'Fish Sauce & Palm Sugar', amount: 30, unit: 'g', category: 'Seasoning' },
      { name: 'Fresh Thai Sweet Basil Leaves (Horapha)', amount: 30, unit: 'g', category: 'Herbs' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Crack the Coconut Cream',
        instruction: 'Heat 150ml thick coconut cream in a pot over medium-high heat. Simmer undisturbed for 6 minutes until the water evaporates and glistening coconut oil separates out.',
        durationMinutes: 6
      },
      {
        stepNumber: 2,
        title: 'Fry Green Curry Paste',
        instruction: 'Add the green curry paste directly into the bubbling cracked coconut oil. Fry for 4 minutes until paste is fragrant and glossy green oil beads on top.',
        durationMinutes: 4
      },
      {
        stepNumber: 3,
        title: 'Sear Chicken and Simmer Eggplants',
        instruction: 'Add sliced chicken, coating pieces in the fried paste. Pour in remaining coconut milk. Bring to a simmer, add quartered eggplants and pea eggplants, and cook 8 minutes until tender.',
        durationMinutes: 8
      },
      {
        stepNumber: 4,
        title: 'Sweet Basil Wilting Finish',
        instruction: 'Season with fish sauce and palm sugar. Turn off heat and immediately submerge fresh Thai sweet basil leaves and torn kaffir lime leaves.',
        durationMinutes: 2
      }
    ],
    funFact: '"Kiew Wan" translates literally to "sweet green", which refers not to sugary sweetness, but to the pastel creamy green color of the coconut emulsion.',
    servingNotes: 'Serve with steamed Thai Hom Mali jasmine rice or fermented rice noodles (khanom jeen).'
  },
  {
    id: 'tha-som-tum',
    countryId: 'thailand',
    title: 'Som Tum Thai (Green Papaya Salad)',
    nativeTitle: 'ส้มตำไทย',
    description: 'Crisp shredded unripe green papaya, snake beans, and cherry tomatoes pounded in a clay mortar with roasted peanuts, dried shrimp, garlic, fiery chilis, lime, and palm sugar.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/2013_Tam_Lao.jpg/960px-2013_Tam_Lao.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 20,
    cookTimeMinutes: 0,
    servings: 2,
    difficulty: 'Easy',
    caloriesPerServing: 210,
    dietaryTags: ['Gluten-Free', 'Zesty & Crisp', 'Isan Heritage'],
    course: 'Salad',
    ingredients: [
      { name: 'Shredded Green Unripe Papaya', amount: 250, unit: 'g', category: 'Produce' },
      { name: 'Thai Bird’s Eye Chilis', amount: 4, unit: 'pcs', category: 'Heat' },
      { name: 'Garlic Cloves', amount: 3, unit: 'cloves', category: 'Aromatics' },
      { name: 'Dried Shrimp', amount: 15, unit: 'g', category: 'Umami' },
      { name: 'Yardlong Snake Beans (cut 3cm pieces)', amount: 40, unit: 'g', category: 'Produce' },
      { name: 'Cherry Tomatoes (halved)', amount: 6, unit: 'pcs', category: 'Produce' },
      { name: 'Roasted Peanuts', amount: 30, unit: 'g', category: 'Crunch' },
      { name: 'Fish Sauce, Fresh Lime Juice & Palm Sugar', amount: 50, unit: 'ml', category: 'Dressing' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Pound Garlic, Chilis & Dried Shrimp',
        instruction: 'In a wooden or clay mortar (krok), crush garlic and bird’s eye chilies with pestle. Add dried shrimp and bruise lightly.',
        durationMinutes: 3
      },
      {
        stepNumber: 2,
        title: 'Dissolve Palm Sugar in Lime & Fish Sauce',
        instruction: 'Add shaved palm sugar, fresh lime juice, and fish sauce into the mortar. Work with the pestle until sugar is completely dissolved into dressing.',
        durationMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Bruise Yardlong Beans & Tomatoes',
        instruction: 'Add snake beans and cherry tomatoes. Pound lightly with pestle just to crack skins and release juices.',
        durationMinutes: 2
      },
      {
        stepNumber: 4,
        title: 'Toss and Bruise Papaya',
        instruction: 'Add shredded green papaya and peanuts. Use pestle in one hand to press while lifting and turning with a spoon in the other hand for 1 minute until papaya softens slightly and drinks the dressing.',
        durationMinutes: 2
      }
    ],
    funFact: 'Originating in Isan (Northeastern Thailand), Som Tum is pounded in clay mortars because stone mortars would crush the delicate shredded papaya into mush.',
    servingNotes: 'Serve with sticky rice in a small bamboo woven basket (kratip) and Thai grilled chicken (Gai Yang).'
  },
  {
    id: 'tha-massaman-curry',
    countryId: 'thailand',
    title: 'Royal Southern Thai Massaman Beef Curry',
    nativeTitle: 'แกงมัสมั่นเนื้อ',
    description: 'Rich, velvet southern curry of fork-tender braised beef chuck, waxy potatoes, roasted peanuts, and pearl onions perfumed with Persian spices: cinnamon, cloves, cardamom, and tamarind.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Kaeng_matsaman_kai.JPG/960px-Kaeng_matsaman_kai.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 25,
    cookTimeMinutes: 120,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 640,
    dietaryTags: ['High-Protein', 'Gluten-Free', 'Southern Thai'],
    course: 'Main',
    ingredients: [
      { name: 'Beef Chuck or Shank (cut into large 4cm cubes)', amount: 800, unit: 'g', category: 'Meat' },
      { name: 'Thick Coconut Milk', amount: 600, unit: 'ml', category: 'Liquid' },
      { name: 'Massaman Curry Paste', amount: 80, unit: 'g', category: 'Paste' },
      { name: 'Yukon Gold Potatoes (peeled & halved)', amount: 350, unit: 'g', category: 'Vegetable' },
      { name: 'Small Shallots or Pearl Onions (peeled)', amount: 150, unit: 'g', category: 'Aromatics' },
      { name: 'Roasted Unsalted Peanuts', amount: 50, unit: 'g', category: 'Nuts' },
      { name: 'Tamarind Paste', nameKa: 'თამარინდის პასტა', amount: 25, unit: 'g', category: 'Seasoning' },
      { name: 'Palm Sugar', nameKa: 'პალმის შაქარი', amount: 20, unit: 'g', category: 'Seasoning' },
      { name: 'Cinnamon Stick, Cardamom Pods & Star Anise', amount: 5, unit: 'g', category: 'Whole Spices' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Braise Beef in Coconut Milk',
        instruction: 'Simmer beef cubes in 400ml coconut milk with 300ml water on low heat for 90 minutes until fork tender.',
        durationMinutes: 90
      },
      {
        stepNumber: 2,
        title: 'Fry Massaman Paste',
        instruction: 'In a separate pot, fry Massaman curry paste in 100ml thick coconut cream with cinnamon, cardamom, and star anise until fragrant oil beads.',
        durationMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Unite and Simmer Potatoes',
        instruction: 'Add braised beef with its rich coconut cooking broth into the fried curry paste. Add potatoes, whole shallots, and roasted peanuts. Simmer 20 minutes until potatoes are tender.',
        durationMinutes: 20
      },
      {
        stepNumber: 4,
        title: 'Balance Three Flavors',
        instruction: 'Season with tamarind paste, palm sugar, and fish sauce. The taste should be warmly spiced, subtly tart, mildly sweet, and deeply savory.',
        durationMinutes: 5
      }
    ],
    funFact: 'Ranked repeatedly by CNN Travel as the #1 Most Delicious Food in the World. The name derives from archaic Thai for "Muslim", reflecting Persian spice trader roots.',
    servingNotes: 'Serve in wide bowls garnished with extra roasted peanuts and steamed jasmine rice.'
  },
  {
    id: 'tha-mango-sticky-rice',
    countryId: 'thailand',
    title: 'Mango Sticky Rice (Khao Niew Mamuang)',
    nativeTitle: 'ข้าวเหนียวมะม่วง',
    description: 'Steamed glutinous sweet sticky rice infused with rich salted coconut cream, paired with sweet ripe Nam Dok Mai mangoes and crunchy toasted yellow mung beans.',
    image: 'https://www.allrecipes.com/thmb/yeUwoCu2irwqGDb-3PHJHnaX2C4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-150313-thai-sweet-sticky-rice-with-mango-khao-neeo-mamuang-ddmfs-4x3-hero-0da7a9b26cce4d07aea44f2f2b6abd95.jpg',
    prepTimeMinutes: 20,
    cookTimeMinutes: 25,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 380,
    dietaryTags: ['Vegan', 'Gluten-Free', 'Iconic Dessert'],
    course: 'Dessert',
    ingredients: [
      { name: 'Thai Sweet Glutinous Sticky Rice (soaked 4 hours)', amount: 300, unit: 'g', category: 'Rice' },
      { name: 'Ripe Thai Honey Mangoes (Nam Dok Mai)', amount: 2, unit: 'pcs', category: 'Fruit' },
      { name: 'Rich Coconut Cream', amount: 350, unit: 'ml', category: 'Dairy Alternative' },
      { name: 'Pure Granulated Palm or Cane Sugar', amount: 80, unit: 'g', category: 'Sweetener' },
      { name: 'Sea Salt', amount: 6, unit: 'g', category: 'Seasoning' },
      { name: 'Crispy Toasted Split Yellow Mung Beans', amount: 20, unit: 'g', category: 'Crunch' },
      { name: 'Pandan Leaves (tied in a knot)', amount: 2, unit: 'leaves', category: 'Aroma' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Steam Sticky Rice in Bamboo Steamer',
        instruction: 'Drain soaked glutinous rice. Steam in a cheesecloth-lined bamboo cone (huad) over boiling water for 20-25 minutes until translucent and tender.',
        durationMinutes: 25
      },
      {
        stepNumber: 2,
        title: 'Simmer Sweet Salted Coconut Bath',
        instruction: 'Simmer coconut cream with sugar, sea salt, and knotted pandan leaves until sugar dissolves. Do not boil hard. Reserve 60ml for final topping drizzle.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Soak Hot Rice in Coconut Cream (Moon Khao)',
        instruction: 'Dump steaming hot rice into a bowl. Pour warm coconut syrup immediately over rice. Stir gently, cover tightly with plastic wrap, and rest 20 minutes so rice absorbs every drop.',
        durationMinutes: 20
      },
      {
        stepNumber: 4,
        title: 'Slice Mangoes and Assemble',
        instruction: 'Peel and slice ripe mangoes into golden ribbons. Scoop warm coconut sticky rice alongside. Drizzle with reserved salted coconut cream and scatter crispy mung beans.',
        durationMinutes: 4
      }
    ],
    funFact: 'The hallmark secret of Thai street vendors is the pronounced salinity in the coconut drizzle, which enhances the floral sweetness of the mango.',
    servingNotes: 'Serve warm or at room temperature; never refrigerate sticky rice as it hardens.'
  },
  {
    id: 'tha-khao-soi',
    countryId: 'thailand',
    title: 'Northern Chiang Mai Khao Soi Gai',
    nativeTitle: 'ข้าวซอยไก่',
    description: 'Northern Thai coconut curry noodle soup with tender chicken drumstick, boiled egg noodles, topped with a nest of crispy fried noodles, pickled mustard greens, and shallots.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Khao_Soi_Northern_Thai_food_%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%8B%E0%B8%AD%E0%B8%A2_%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%94%E0%B8%AD%E0%B8%87.jpg/960px-Khao_Soi_Northern_Thai_food_%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%8B%E0%B8%AD%E0%B8%A2_%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%94%E0%B8%AD%E0%B8%87.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 25,
    cookTimeMinutes: 35,
    servings: 4,
    difficulty: 'Medium',
    caloriesPerServing: 590,
    dietaryTags: ['High-Protein', 'Chiang Mai Specialty'],
    course: 'Main',
    ingredients: [
      { name: 'Fresh Chinese Egg Noodles', amount: 400, unit: 'g', category: 'Noodles' },
      { name: 'Chicken Drumsticks', amount: 4, unit: 'pcs', category: 'Poultry' },
      { name: 'Khao Soi Curry Paste with Black Cardamom & Turmeric', amount: 70, unit: 'g', category: 'Paste' },
      { name: 'Coconut Milk', amount: 600, unit: 'ml', category: 'Liquid' },
      { name: 'Chicken Stock', amount: 400, unit: 'ml', category: 'Stock' },
      { name: 'Pickled Mustard Greens (sliced) & Sliced Red Shallots', amount: 100, unit: 'g', category: 'Garnish' },
      { name: 'Roasted Chili Flakes in Oil (Prik Pao)', amount: 20, unit: 'g', category: 'Condiment' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Fry Paste in Coconut Fat',
        instruction: 'Fry curry paste in 150ml coconut cream until fragrant. Add chicken drumsticks and brown lightly.',
        durationMinutes: 8
      },
      {
        stepNumber: 2,
        title: 'Simmer Tender Chicken',
        instruction: 'Add remaining coconut milk and chicken stock. Simmer gently for 25 minutes until chicken drumsticks are meltingly tender.',
        durationMinutes: 25
      },
      {
        stepNumber: 3,
        title: 'Fry Crispy Noodle Nest',
        instruction: 'Deep fry 100g egg noodles in hot oil for 30 seconds until puffed, golden, and crispy. Drain.',
        durationMinutes: 4
      },
      {
        stepNumber: 4,
        title: 'Boil Fresh Noodles & Assemble',
        instruction: 'Boil remaining egg noodles for 60 seconds; divide into deep bowls. Ladle hot coconut curry and chicken drumstick over noodles. Crown with crispy noodle nest, pickled mustard greens, lime, and chili oil.',
        durationMinutes: 4
      }
    ],
    funFact: 'Influenced by Chinese-Muslim (Chin Haw) traders traversing trade routes between Yunnan, Myanmar, and northern Thailand.',
    servingNotes: 'Squeeze a fresh lime wedge over the crispy noodles and stir before slurping.'
  },
  {
    id: 'tha-pad-kra-pao',
    countryId: 'thailand',
    title: 'Pad Kra Pao Gai (Holy Basil Stir-Fry)',
    nativeTitle: 'ผัดกะเพราไก่ไข่ดาว',
    description: 'Fiery wok-tossed minced chicken with fresh Thai holy basil leaves, garlic, bird’s eye chilis, dark soy, and fish sauce, crowned with a crispy-edged fried runny egg.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Basil_fried_crispy_pork_with_rice_-_Chiang_Mai_-_2017-07-11_%28002%29.jpg/960px-Basil_fried_crispy_pork_with_rice_-_Chiang_Mai_-_2017-07-11_%28002%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 10,
    cookTimeMinutes: 8,
    servings: 2,
    difficulty: 'Easy',
    caloriesPerServing: 460,
    dietaryTags: ['High-Protein', 'Quick Street Food'],
    course: 'Main',
    ingredients: [
      { name: 'Chicken Breast or Thighs (hand-minced coarsely)', amount: 350, unit: 'g', category: 'Poultry' },
      { name: 'Fresh Thai Holy Basil Leaves (Bai Kra Pao)', amount: 40, unit: 'g', category: 'Herb' },
      { name: 'Thai Bird’s Eye Chilis & Garlic Cloves (pounded)', amount: 35, unit: 'g', category: 'Aromatics' },
      { name: 'Oyster Sauce, Fish Sauce & Dark Sweet Soy', amount: 35, unit: 'ml', category: 'Sauce' },
      { name: 'Eggs for crispy fried egg (Kai Dao)', amount: 2, unit: 'pcs', category: 'Egg' },
      { name: 'Steamed Jasmine Rice', amount: 300, unit: 'g', category: 'Grain' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Fry Crispy Blistered Kai Dao Egg',
        instruction: 'Heat 3 tbsp oil in wok until smoking. Crack egg in; edges should immediately blister into a crunchy brown lace while yolk remains runny. Remove.',
        durationMinutes: 2,
        temperature: 'Smoking Hot'
      },
      {
        stepNumber: 2,
        title: 'Flash-Sauté Garlic and Chilis',
        instruction: 'In remaining oil, flash fry pounded garlic and chilies for 30 seconds until coughing pungency fills the air.',
        durationMinutes: 1
      },
      {
        stepNumber: 3,
        title: 'Wok-Toss Minced Chicken',
        instruction: 'Add hand-minced chicken. Stir-fry over highest heat for 3 minutes, breaking meat into small crumbles. Drizzle in sauce mixture.',
        durationMinutes: 3
      },
      {
        stepNumber: 4,
        title: 'Wilt Holy Basil Off Heat',
        instruction: 'Turn off heat. Dump holy basil into wok and toss for 15 seconds until wilted by residual heat. Spoon over hot rice, topped with crispy egg.',
        durationMinutes: 1
      }
    ],
    funFact: 'Pad Kra Pao is the true national dish ordered when Thais don’t know what else to eat, often dubbed the "default dish" of Thailand.',
    servingNotes: 'Drizzle with Prik Nam Pla (sliced raw chilies in fish sauce) before eating.'
  },
  {
    id: 'tha-tom-kha-gai',
    countryId: 'thailand',
    title: 'Tom Kha Gai (Galangal Coconut Chicken Soup)',
    nativeTitle: 'ต้มข่าไก่',
    description: 'Velvety, aromatic soup of coconut milk infused with woody galangal root slices, bruised lemongrass, tender chicken pieces, straw mushrooms, and fresh lime.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Flickr_preppybyday_4711943668--Tom_kha_gai.jpg/960px-Flickr_preppybyday_4711943668--Tom_kha_gai.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: 'Easy',
    caloriesPerServing: 360,
    dietaryTags: ['Gluten-Free', 'Comfort Soup'],
    course: 'Soup',
    ingredients: [
      { name: 'Boneless Chicken Thighs (sliced)', amount: 400, unit: 'g', category: 'Poultry' },
      { name: 'Coconut Milk', amount: 600, unit: 'ml', category: 'Liquid' },
      { name: 'Chicken Stock', amount: 300, unit: 'ml', category: 'Stock' },
      { name: 'Fresh Young Galangal (sliced into thin discs)', amount: 50, unit: 'g', category: 'Key Aromatic' },
      { name: 'Lemongrass, Kaffir Lime Leaves & Bird’s Eye Chilies', amount: 25, unit: 'g', category: 'Herbs' },
      { name: 'Oyster Mushrooms or Straw Mushrooms', amount: 150, unit: 'g', category: 'Vegetable' },
      { name: 'Fresh Lime Juice', nameKa: 'ახალი ლაიმის წვენი', amount: 25, unit: 'ml', category: 'Seasoning' },
      { name: 'Thai Fish Sauce (Nam Pla)', nameKa: 'ტაილანდური თევზის სოუსი (ნამ პლა)', amount: 25, unit: 'ml', category: 'Seasoning' },
      { name: 'Chili Oil for drizzle', amount: 10, unit: 'ml', category: 'Garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Gentle Aromatic Coconut Simmer',
        instruction: 'Simmer chicken stock, half coconut milk, sliced galangal, lemongrass, and kaffir lime leaves for 8 minutes on medium heat (do not boil violently or coconut milk separates).',
        durationMinutes: 8
      },
      {
        stepNumber: 2,
        title: 'Poach Chicken & Mushrooms',
        instruction: 'Add chicken slices and mushrooms with fish sauce. Simmer gently for 5 minutes until chicken is cooked through.',
        durationMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Lime Juice & Coconut Cream Finish',
        instruction: 'Stir in remaining coconut milk to cool slightly. Turn off heat, stir in fresh lime juice and bruised chilies. Drizzle chili oil.',
        durationMinutes: 2
      }
    ],
    funFact: '"Kha" means galangal in Thai. While Tom Yum centers on lemongrass, Tom Kha makes galangal the undisputed fragrant star.',
    servingNotes: 'Serve in wide bowls with steamed jasmine rice.'
  },
  {
    id: 'tha-larb-gai',
    countryId: 'thailand',
    title: 'Larb Gai Isan (Spiced Minced Chicken Salad)',
    nativeTitle: 'ลาบไก่',
    description: 'Zesty, herbaceous warm salad of minced chicken tossed with toasted glutinous rice powder (khao khua), fresh mint, cilantro, sliced shallots, lime, and roasted chili.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/LaoFood_LarbNeua.JPG/960px-LaoFood_LarbNeua.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 15,
    cookTimeMinutes: 8,
    servings: 2,
    difficulty: 'Easy',
    caloriesPerServing: 290,
    dietaryTags: ['High-Protein', 'Gluten-Free', 'Healthy'],
    course: 'Salad',
    ingredients: [
      { name: 'Ground Chicken Thighs or Breast', amount: 350, unit: 'g', category: 'Poultry' },
      { name: 'Khao Khua (Toasted Sticky Rice Powder)', amount: 25, unit: 'g', category: 'Texture & Nutty Aroma' },
      { name: 'Fresh Mint Leaves & Cilantro', amount: 30, unit: 'g', category: 'Herbs' },
      { name: 'Red Shallots (thinly sliced)', amount: 40, unit: 'g', category: 'Aromatics' },
      { name: 'Culantro / Sawtooth Coriander', amount: 15, unit: 'g', category: 'Herbs' },
      { name: 'Fresh Lime Juice', nameKa: 'ახალი ლაიმის წვენი', amount: 25, unit: 'ml', category: 'Dressing' },
      { name: 'Thai Fish Sauce (Nam Pla)', nameKa: 'ტაილანდური თევზის სოუსი (ნამ პლა)', amount: 25, unit: 'ml', category: 'Dressing' },
      { name: 'Dried Roasted Red Chili Flakes', amount: 8, unit: 'g', category: 'Heat' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Toast Sticky Rice Powder (Khao Khua)',
        instruction: 'Dry-toast raw sticky rice with a kaffir lime leaf in a skillet over low heat for 10 minutes until deep golden brown. Grind to a coarse sand texture in a mortar.',
        durationMinutes: 12
      },
      {
        stepNumber: 2,
        title: 'Poach Minced Chicken',
        instruction: 'Cook minced chicken in a pot with 3 tablespoons of water, stirring rapidly to break up clumps until fully cooked and juicy, about 4 minutes.',
        durationMinutes: 4
      },
      {
        stepNumber: 3,
        title: 'Toss Warm Salad',
        instruction: 'Remove pot from heat. Add fish sauce, lime juice, and chili flakes. Fold in shallots, fresh mint, cilantro, culantro, and toasted rice powder.',
        durationMinutes: 2
      }
    ],
    funFact: 'Toasted sticky rice powder is the essential secret ingredient that lends Larb its signature smoky, nutty crunch and thickens the tart dressing.',
    servingNotes: 'Serve warm with crisp raw cabbage wedges, long beans, and steamed sticky rice.'
  },
  {
    id: 'tha-spring-rolls',
    countryId: 'thailand',
    title: 'Crispy Thai Spring Rolls (Por Pia Tod)',
    nativeTitle: 'เปาะเปี๊ยะทอด',
    description: 'Golden crispy pastry rolls filled with seasoned glass noodles, wood ear mushrooms, shredded cabbage, carrots, and garlic, served with sweet plum chili dip.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Spring_Rolls_%283357696061%29.jpg/960px-Spring_Rolls_%283357696061%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 30,
    cookTimeMinutes: 15,
    servings: 6,
    difficulty: 'Easy',
    caloriesPerServing: 240,
    dietaryTags: ['Vegetarian', 'Crispy Street Snack'],
    course: 'Appetizer',
    ingredients: [
      { name: 'Spring Roll Pastry Wrappers', amount: 12, unit: 'sheets', category: 'Wrappers' },
      { name: 'Mung Bean Glass Noodles (soaked & chopped)', amount: 100, unit: 'g', category: 'Filling' },
      { name: 'Green Cabbage & Carrots (shredded)', amount: 200, unit: 'g', category: 'Filling' },
      { name: 'Dried Shiitake or Wood Ear Mushrooms (soaked & sliced)', amount: 50, unit: 'g', category: 'Filling' },
      { name: 'Garlic, Coriander Roots & White Pepper', amount: 15, unit: 'g', category: 'Seasoning' },
      { name: 'Light Soy Sauce', nameKa: 'ღია სოიოს სოუსი', amount: 15, unit: 'ml', category: 'Seasoning' },
      { name: 'Toasted Sesame Oil', nameKa: 'მოხალული სეზამის ზეთი', amount: 5, unit: 'ml', category: 'Seasoning' },
      { name: 'Oil for deep frying & Sweet Plum Chili Sauce', amount: 500, unit: 'ml', category: 'Frying' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Stir-Fry Filling',
        instruction: 'Sauté garlic, mushrooms, shredded cabbage, carrots, and glass noodles with soy sauce and white pepper for 3 minutes. Cool completely.',
        durationMinutes: 8
      },
      {
        stepNumber: 2,
        title: 'Roll and Seal Tightly',
        instruction: 'Place filling on wrapper diamond-style. Fold bottom corner up, tuck both side flaps inward, roll tightly, and seal tip with cornstarch paste.',
        durationMinutes: 15
      },
      {
        stepNumber: 3,
        title: 'Deep Fry to Golden Crunch',
        instruction: 'Fry in 175°C oil for 5 minutes until crispy and golden amber. Drain on paper towels.',
        durationMinutes: 8,
        temperature: '175°C / 350°F'
      }
    ],
    funFact: 'A staple festival food across Thailand, the name "Por Pia" originates from the Teochew Chinese dialect.',
    servingNotes: 'Slice diagonally and dip into sweet Thai chili sauce.'
  },
  {
    id: 'tha-pad-see-ew',
    countryId: 'thailand',
    title: 'Wok-Charred Pad See Ew',
    nativeTitle: 'ผัดซีอิ๊ว',
    description: 'Wide fresh rice noodles charred in a smoking hot wok with Chinese broccoli (gai lan), tender pork or chicken slices, scrambled egg, and dark sweet soy sauce.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Pad_see_ew.jpg/960px-Pad_see_ew.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    prepTimeMinutes: 15,
    cookTimeMinutes: 8,
    servings: 2,
    difficulty: 'Easy',
    caloriesPerServing: 510,
    dietaryTags: ['High-Protein', 'Street Food Classic'],
    course: 'Main',
    ingredients: [
      { name: 'Fresh Wide Rice Noodles (Sen Yai, separated)', amount: 350, unit: 'g', category: 'Noodles' },
      { name: 'Pork Tenderloin or Chicken (sliced thin)', amount: 200, unit: 'g', category: 'Meat' },
      { name: 'Chinese Broccoli (Gai Lan, sliced on diagonal)', amount: 150, unit: 'g', category: 'Greens' },
      { name: 'Dark Sweet Soy Sauce (See Ew Dum)', amount: 25, unit: 'ml', category: 'Sauce' },
      { name: 'Thai Light Soy Sauce & Oyster Sauce', amount: 25, unit: 'ml', category: 'Sauce' },
      { name: 'Large Eggs', amount: 2, unit: 'pcs', category: 'Protein' },
      { name: 'Garlic Cloves (minced)', amount: 4, unit: 'cloves', category: 'Aromatics' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Coat Noodles in Dark Soy',
        instruction: 'Gently toss wide rice noodles with dark sweet soy sauce before hitting the wok so they color evenly and caramelize quickly.',
        durationMinutes: 3
      },
      {
        stepNumber: 2,
        title: 'Sear Meat and Gai Lan',
        instruction: 'In a smoking hot wok with lard or oil, sear meat and garlic for 90 seconds. Add gai lan stems and leaves, tossing until tender-crisp.',
        durationMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Wok Char (Wok Hei) Sear',
        instruction: 'Push meat aside, scramble eggs. Add dark soy-coated noodles. Spread noodles flat against the sizzling wok wall without moving for 30 seconds to achieve smoky wok hei charring.',
        durationMinutes: 3,
        temperature: 'Maximum Heat'
      }
    ],
    funFact: '"Pad See Ew" literally means "stir-fried with soy sauce". The key to great Pad See Ew is leaving the noodles untouched for moments on the blazing metal to achieve caramelized char.',
    servingNotes: 'Serve hot with pickled chilis in vinegar (Prik Nam Som) and dried chili flakes.'
  }
];
