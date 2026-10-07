// Dictionary for translating ingredient names to Georgian and Russian
import { ADDITIONAL_INGREDIENTS } from './ingredientAdditional';

export const INGREDIENT_DICTIONARY = {
  ...ADDITIONAL_INGREDIENTS,
  // Georgian specialties
  'Sulguni cheese (grated)': { ka: 'სულგუნი (გახეხილი)' },
  'Imeretian cheese (or fresh mozzarella/feta blend)': { ka: 'იმერული ყველი (ან მოცარელა/ფეტა)' },
  'All-purpose flour': { ka: 'პურის ფქვილი (უმაღლესი ხარისხის)' },
  'Whole milk': { ka: 'რძე' },
  'Warm water': { ka: 'თბილი წყალი' },
  'Active dry yeast': { ka: 'მშრალი საფუარი' },
  'Granulated sugar': { ka: 'შაქარი' },
  'Fine sea salt': { ka: 'ზღვის წვრილი მარილი' },
  'Salt': { ka: 'მარილი' },
  'Black pepper': { ka: 'შავი პილპილი' },
  'Ground black pepper': { ka: 'დაფქული შავი პილპილი' },
  'Fresh eggs': { ka: 'ახალი კვერცხი' },
  'Egg': { ka: 'კვერცხი' },
  'Eggs': { ka: 'კვერცხი' },
  'Egg yolks': { ka: 'კვერცხის გული' },
  'Egg yolk': { ka: 'კვერცხის გული' },
  'Unsalted butter': { ka: 'უმაღილო კარაქი' },
  'Butter': { ka: 'კარაქი' },
  'Minced beef': { ka: 'საქონლის ფარში' },
  'Minced pork': { ka: 'ღორის ფარში' },
  'Onion': { ka: 'ხახვი' },
  'Onions': { ka: 'ხახვი' },
  'Garlic': { ka: 'ნიორი' },
  'Garlic cloves': { ka: 'ნივრის კბილი' },
  'Fresh cilantro': { ka: 'ახალი ქინძი' },
  'Cilantro': { ka: 'ქინძი' },
  'Parsley': { ka: 'ოხრახუში' },
  'Fresh parsley': { ka: 'ახალი ოხრახუში' },
  'Dill': { ka: 'კამა' },
  'Tarragon': { ka: 'ტარხუნა' },
  'Fresh tarragon': { ka: 'ახალი ტარხუნა' },
  'Basil': { ka: 'რეჰანი' },
  'Fresh basil': { ka: 'ახალი რეჰანი' },
  'Walnuts': { ka: 'ნიგოზი' },
  'Pomegranate seeds': { ka: 'ბროწეულის მარცვლები' },
  'Pomegranate juice': { ka: 'ბროწეულის წვენი' },
  'Blue fenugreek': { ka: 'უცხო სუნელი' },
  'Marigold petals (Imeretian saffron)': { ka: 'ყვითელი ყვავილი (ზაფრანა)' },
  'Coriander seeds': { ka: 'ქინძის თესლი (დაფქული)' },
  'White wine vinegar': { ka: 'თეთრი ღვინის ძმარი' },
  'Red wine': { ka: 'წითელი ღვინო' },
  'White wine': { ka: 'თეთრი ღვინო' },
  'Olive oil': { ka: 'ზეითუნის ზეთი' },
  'Extra virgin olive oil': { ka: 'ექსტრა ვირჯინ ზეითუნის ზეთი' },
  'Vegetable oil': { ka: 'მცენარეული ზეთი' },
  'Sunflower oil': { ka: 'მზესუმზირის ზეთი' },
  'Tomatoes': { ka: 'პომიდორი' },
  'Tomato paste': { ka: 'ტომატ-პასტა' },
  'Potatoes': { ka: 'კარტოფილი' },
  'Carrots': { ka: 'სტაფილო' },
  'Chicken': { ka: 'ქათამი' },
  'Chicken breast': { ka: 'ქათმის ფილე' },
  'Chicken thighs': { ka: 'ქათმის ბარკლები' },
  'Beef': { ka: 'საქონლის ხორცი' },
  'Beef chuck': { ka: 'საქონლის რბილი ხორცი' },
  'Pork': { ka: 'ღორის ხორცი' },
  'Heavy cream': { ka: 'ცხიმიანი ნაღები' },
  'Sour cream': { ka: 'არაჟანი' },
  'Parmesan cheese': { ka: 'პარმეზანი' },
  'Parmigiano-Reggiano': { ka: 'პარმიჯანო რეჯანო' },
  'Mozzarella': { ka: 'მოცარელა' },
  'Guanciale': { ka: 'გუანჩალე (ღორის ლოყა)' },
  'Pecorino Romano': { ka: 'პეკორინო რომანო' },
  'Spaghetti': { ka: 'სპაგეტი' },
  'Rigatoni': { ka: 'რიგატონი' },
  'Rice': { ka: 'ბრინჯი' },
  'Jasmine rice': { ka: 'ჟასმინის ბრინჯი' },
  'Basmati rice': { ka: 'ბასმატის ბრინჯი' },
  'Sushi rice': { ka: 'სუშის ბრინჯი' },
  'Arborio rice': { ka: 'არბორიოს ბრინჯი' },
  'Soy sauce': { ka: 'სოიოს სოუსი' },
  'Fish sauce': { ka: 'თევზის სოუსი' },
  'Sesame oil': { ka: 'სეზამის ზეთი' },
  'Ginger': { ka: 'კოჭა (ჯანჯაფილი)' },
  'Fresh ginger': { ka: 'ახალი კოჭა' },
  'Green onions': { ka: 'მწვანე ხახვი' },
  'Scallions': { ka: 'მწვანე ხახვი (შალოტი)' },
  'Lime': { ka: 'ლაიმი' },
  'Lemon': { ka: 'ლიმონი' },
  'Lemon juice': { ka: 'ლიმონის წვენი' },
  'Lime juice': { ka: 'ლაიმის წვენი' },
  'Cumin': { ka: 'ძირა' },
  'Ground cumin': { ka: 'დაფქული ძირა' },
  'Turmeric': { ka: 'კურკუმა' },
  'Garam masala': { ka: 'გარამ მასალა' },
  'Cardamom': { ka: 'ილი (კარდამონი)' },
  'Cinnamon': { ka: 'დარიჩინი' },
  'Cloves': { ka: 'მიხაკი' },
  'Bay leaf': { ka: 'დაფნის ფოთოლი' },
  'Bay leaves': { ka: 'დაფნის ფოთლები' },
  'Red pepper flakes': { ka: 'მწარე წიწაკის ფანტელები' },
  'Chili powder': { ka: 'ჩილის ფხვნილი' },
  'Paprika': { ka: 'პაპრიკა' },
  'Smoked paprika': { ka: 'შებოლილი პაპრიკა' },
  'Honey': { ka: 'თაფლი' },
  'Brown sugar': { ka: 'ყავისფერი შაქარი' },
  'Vanilla extract': { ka: 'ვანილის ექსტრაქტი' },
  'Baking powder': { ka: 'გაფხვიერებელი' },
  'Cornstarch': { ka: 'სიმინდის სახამებელი' },
  'Cocoa powder': { ka: 'კაკაოს ფხვნილი' },
  'Dark chocolate': { ka: 'შავი შოკოლადი' },
  'Avocado': { ka: 'ავოკადო' },
  'Shrimp': { ka: 'კრევეტები' },
  'Salmon': { ka: 'ორაგული' },
  'Tuna': { ka: 'თინუსი' },
  'Red lentils': { ka: 'წითელი ოსპი' },
  'Chickpeas': { ka: 'მუხუდო' },
  'Kidney beans': { ka: 'წითელი ლობიო' },
  'Dried Red Kidney Beans': { ka: 'მშრალი წითელი ლობიო' },
  'Coconut milk': { ka: 'ქოქოსის რძე' },
  'Lemongrass': { ka: 'ლიმონგრასი' },
  'Mushrooms': { ka: 'სოკო' },
  'Shiitake mushrooms': { ka: 'შიიტაკეს სოკო' },
  'Tofu': { ka: 'ტოფუ' },
  'Nori seaweed': { ka: 'ნორის წყალმცენარე' },
  'Pistachios': { ka: 'ფსტა (ფისტაშკები)' },

  // Armenian additions
  'Pork Neck or Shoulder (cut into 5cm cubes)': { ka: 'ღორის კისერი ან ბეჭი (დაჭრილი 5 სმ კუბებად)' },
  'Yellow Onions (thinly sliced)': { ka: 'ხახვი (თხლად დაჭრილი)' },
  'Dried Purple Basil (Rehan)': { ka: 'ხმელი მეწამული რეჰანი (რეჰანი)' },
  'Ground Coriander': { ka: 'დაფქული ქინძი' },
  'Coarse Sea Salt': { ka: 'მსხვილი ზღვის მარილი' },
  'Mild Ground Paprika': { ka: 'ტკბილი დაფქული პაპრიკა' },
  'Sparkling Mineral Water (e.g. Jermuk)': { ka: 'გაზირებული მინერალური წყალი (მაგ. ბორჯომი)' },
  'Fresh Thin Armenian Lavash': { ka: 'ახალი თხელი ლავაში' },
  'Fresh Red Onions & Sumac (for garnish)': { ka: 'წითელი ხახვი და სუმაკი (გასაფორმებლად)' },
  'Ground Beef & Lamb Blend (80/20)': { ka: 'საქონლისა და ცხვრის ფარში (80/20)' },
  'Short-Grain Rice (rinsed)': { ka: 'მრგვალი ბრინჯი (გარეცხილი)' },
  'Finely Minced Yellow Onion': { ka: 'წვრილად დაკეპილი ხახვი' },
  'Fresh Purple Basil (Rehan)': { ka: 'ახალი მეწამული რეჰანი' },
  'Fresh Cilantro (Coriander)': { ka: 'ახალი ქინძი' },
  'Fresh Dill': { ka: 'ახალი კამა' },
  'Tender Grape Leaves (fresh blanched or in brine)': { ka: 'ვაზის ნაზი ფოთლები (მარილწყალში ან ნედლი)' },
  'Clarified Butter or Ghee': { ka: 'ერბო (გამდნარი კარაქი)' },
  'Beef Stock or Water': { ka: 'საქონლის ბულიონი ან წყალი' },
  'Plain Matzoon or Thick Greek Yogurt': { ka: 'მაწონი ან სქელი ბერძნული იოგურტი' },
  'Crushed Fresh Garlic Cloves': { ka: 'დანაყილი ნივრის კბილები' },
  'Whole Wheat Berries or Korkot (Dざavar)': { ka: 'მთლიანი ხორბლის მარცვლები (ძავარი / კორკოტი)' },
  'Whole Bone-in Chicken (or bone-in breast/thighs)': { ka: 'ქათამი ძვლიანი (ან ბარკლები/მკერდი)' },
  'Ground Cumin': { ka: 'დაფქული ძირა' },
  'Fresh Mint Leaves (chopped)': { ka: 'ახალი პიტნის ფოთლები (დაჭრილი)' },
  'Plain Yogurt (Matzoon)': { ka: 'მაწონი' },
  'Bulgur Wheat (fine or medium)': { ka: 'ბულგური (წვრილი ან საშუალო)' },
  'Wild Mountain Greens & Herbs (mixed)': { ka: 'მთის ველური და კულტურული მწვანილის მიქსი' },
  'Grape Leaves': { ka: 'ვაზის ფოთლები' },
  'Lavash Flatbread': { ka: 'ლავაშის პური' },
  'Matzoon': { ka: 'მაწონი' },
  'Khoriz (flour and butter crumb filling)': { ka: 'ხორიზი (ფქვილისა და კარაქის ტკბილი შიგთავსი)' },
  'Sumac': { ka: 'სუმაკი' },

  // Greek & Spanish additions
  'Eggplants (sliced)': { ka: 'ბადრიჯანი (დაჭრილი)' },
  'Feta cheese': { ka: 'ფეტას ყველი' },
  'Kalamata olives': { ka: 'კალამატას ზეთისხილი' },
  'Phyllo pastry sheets': { ka: 'ფილოს ცომის ფურცლები' },
  'Bomba rice': { ka: 'ბომბას ბრინჯი' },
  'Saffron threads': { ka: 'ზაფრანის ძაფები' },
  'Chorizo': { ka: 'ჩორიზო' },
  'Pita bread': { ka: 'პიტას პური' },
  'Greek yogurt': { ka: 'ბერძნული იოგურტი' },
  'Cucumber': { ka: 'კიტრი' },

  // USA & World additions
  'Ground beef patty': { ka: 'საქონლის კოტლეტი' },
  'Cheddar cheese slices': { ka: 'ჩედარის ყველის ნაჭრები' },
  'Brioche buns': { ka: 'ბრიოშის ფუნთუშები' },
  'Pork ribs': { ka: 'ღორის ნეკნები' },
  'BBQ sauce': { ka: 'ბარბექიუს სოუსი' },
  'Macaroni pasta': { ka: 'მაკარონი' },
  'Apples': { ka: 'ვაშლი' },
  'Whole Packer Beef Brisket (Prime grade)': { ka: 'საქონლის მთლიანი მკერდი (Prime კატეგორიის ბრისკეტი)' },
  'Coarse 16-Mesh Black Pepper': { ka: 'მსხვილად დაფქული შავი პილპილი (16-Mesh)' },
  'Coarse Kosher Salt': { ka: 'მსხვილი კოშერული მარილი' },
  'Granulated Garlic': { ka: 'გრანულირებული ნიორი' },
  'Apple Cider Vinegar & Water (50/50 spritz)': { ka: 'ვაშლის ძმარი და წყალი (50/50 სპრეი)' },
  'Rendered Beef Tallow': { ka: 'საქონლის გამდნარი ქონი (Tallow)' },
  'Fresh Littleneck Clams (steamed) or Clam Meat': { ka: 'ახალი მოლუსკები (Clams) ან მოლუსკის ხორცი' },
  'Clam Liquor / Broth': { ka: 'მოლუსკის წვენი / ბულიონი' },
  'Smoked Salt Pork or Thick Bacon (diced)': { ka: 'შებოლილი ბეკონი (კუბიკებად დაჭრილი)' },
  'Russet Potatoes (peeled & 1cm diced)': { ka: 'რასეტის კარტოფილი (გათლილი, 1სმ კუბიკებად)' },
  'Yellow Onion (finely diced)': { ka: 'ყვითელი ხახვი (წვრილად დაჭრილი)' },
  'Celery Ribs (finely diced)': { ka: 'ნიახურის ღეროები (წვრილად დაჭრილი)' },
  'All-Purpose Flour': { ka: 'პურის ფქვილი (უმაღლესი ხარისხის)' },
  'Heavy Cream': { ka: 'ცხიმიანი ნაღები (35%)' },
  'Fresh Thyme Leaves': { ka: 'ახალი ბეგქონდარას ფოთლები' },
  'Oyster Crackers for serving': { ka: 'ხამანწკის ხრაშუნა კრეკერები' },
  'Bone-in, Skin-on Chicken Thighs & Drumsticks': { ka: 'ქათმის ბარკლები და ბარკლის ძვლები (კანიანი)' },
  'Full-Fat Buttermilk': { ka: 'ცხიმიანი დო (Buttermilk / მაწონი)' },
  'Louisiana Hot Sauce': { ka: 'ლუიზიანური ცხარე წიწაკის სოუსი' },
  'Smoked Paprika': { ka: 'შებოლილი პაპრიკა' },
  'Garlic Powder & Onion Powder': { ka: 'ნივრისა და ხახვის ფხვნილი' },
  'Cayenne Pepper': { ka: 'კაიენის წითელი წიწაკა' },
  'Peanut Oil for deep frying': { ka: 'არაქისის ზეთი შესაწვავად' },
  'Gulf Prawns (peeled, shells reserved for stock)': { ka: 'მექსიკის ყურის კრევეტები (გასუფთავებული)' },
  'Lump Blue Crabmeat': { ka: 'ლურჯი კიბორჩხალას რბილი ხორცი' },
  'Smoked Andouille Sausage (sliced)': { ka: 'შებოლილი ანდუის ძეხვი (დაჭრილი)' },
  'Vegetable Oil or Lard': { ka: 'მცენარეული ზეთი ან ღორის ქონი' },
  'Yellow Onion, Bell Pepper, Celery (Holy Trinity)': { ka: 'ხახვი, ბულგარული წიწაკა, ნიახური (წმინდა სამება)' },
  'Fresh Sliced Okra': { ka: 'ახალი დაჭრილი ბამია (ოქრა)' },
  'Rich Seafood Shell Stock': { ka: 'ზღვის პროდუქტების მდიდარი ბულიონი' },
  'Gumbo Filé Powder (ground sassafras)': { ka: 'გამბო ფილეს ფხვნილი (Gumbo Filé)' },
  '80/20 Ground Beef Chuck (loosely packed balls)': { ka: 'საქონლის ფარში (80/20 ცხიმიანობით)' },
  'Sweet Yellow Onion (paper-thin shaved on mandoline)': { ka: 'ტკბილი ყვითელი ხახვი (ძალიან თხლად დაჭრილი)' },
  'American Cheese Slices': { ka: 'ამერიკული ყველის ფირფიტები' },
  'Martin’s Potato Buns': { ka: 'კარტოფილის რბილი ფუნთუშები' },
  'Mayo, Ketchup, Relish Special Sauce': { ka: 'სპეციალური სოუსი (მაიონეზი, კეტჩუპი, რელიში)' },
  'Dill Pickle Chips': { ka: 'დამწნილებული კიტრის რგოლები (კამით)' },
  'Unsalted Butter': { ka: 'უმარილო კარაქი' },
  'Steamed Maine Lobster Meat (claw & tail)': { ka: 'მენის მოხარშული ომარის (ლობსტერის) ხორცი' },
  'Split-Top Brioche Hot Dog Buns': { ka: 'ბრიოშის გაჭრილი ფუნთუშები' },
  'European Cultured Butter': { ka: 'ევროპული ნაღების კარაქი' },
  'Fresh Lemon Juice': { ka: 'ახალი ლიმონის წვენი' },
  'Finely Snipped Fresh Chives': { ka: 'წვრილად დაჭრილი მწვანე ხახვი (Chives)' },
  'Flaky Maldon Sea Salt': { ka: 'მალდონის ფანტელოვანი ზღვის მარილი' },
  'Bone-in Pork Boston Butt': { ka: 'ღორის ბეჭი ძვლით (Boston Butt)' },
  'Brown Sugar & Paprika BBQ Rub': { ka: 'ყავისფერი შაქრისა და პაპრიკის ბარბექიუ რაბი' },
  'Apple Cider Vinegar': { ka: 'ვაშლის ძმარი' },
  'Crushed Red Pepper Flakes & Cayenne': { ka: 'დაფხვნილი წითელი წიწაკა და კაიენი' },
  'Brown Sugar': { ka: 'ყავისფერი შაქარი' },
  'Fresh Chicken Wings (split into flats and drums)': { ka: 'ქათმის ახალი ფრთები (განცალკევებული)' },
  'Frank’s RedHot Cayenne Pepper Sauce': { ka: 'ცხარე სოუსი Frank’s RedHot' },
  'White Vinegar & Worcestershire Sauce': { ka: 'თეთრი ძმარი და ვუსტერშირის სოუსი' },
  'Celery Sticks & Blue Cheese Dressing': { ka: 'ნიახურის ღეროები და ცისფერი ყველის დრესინგი' },
  'Granny Smith & Honeycrisp Apples (peeled & thinly sliced)': { ka: 'გრენი სმიტისა და ჰანიკრისპის ვაშლები (გათლილი, თხლად დაჭრილი)' },
  'Cinnamon, Nutmeg, Allspice': { ka: 'დარიჩინი, მუსკატის კაკალი, ბაჰარი' },
  'Apple Cider': { ka: 'ვაშლის სიდრი' },
  'Coarse Turbinado Sugar for crust': { ka: 'მსხვილი ტურბინადო შაქარი მოსაყრელად' },
  'Cold Unsalted Butter (cubed)': { ka: 'ცივი უმარილო კარაქი (კუბიკებად)' },
  'Ice Water': { ka: 'ყინულიანი წყალი' },
  'Stone-Ground Yellow Cornmeal': { ka: 'ქვის წისქვილზე დაფქული ყვითელი სიმინდის ფქვილი' },
  'Baking Powder & Baking Soda': { ka: 'გამაფხვიერებელი და საჭმელი სოდა' },
  'Bacon Drippings or Melted Butter': { ka: 'ბეკონის გამონადენი ცხიმი ან გამდნარი კარაქი' },
  'Clover Honey': { ka: 'სამყურას ნატურალური თაფლი' },
  'Long-Grain White Rice': { ka: 'გრძელმარცვლოვანი თეთრი ბრინჯი' },
  'Boneless Chicken Thighs (cut into 2cm cubes)': { ka: 'ქათმის ბარკლის ფილე (2 სმ კუბიკებად)' },
  'Diced Tomatoes with Chilies (Ro-Tel style)': { ka: 'დაჭრილი პომიდორი მწვანე წიწაკით (Ro-Tel)' },
  'Rich Chicken Broth': { ka: 'ქათმის მდიდარი ბულიონი' },
  'Cajun/Creole Seasoning Blend': { ka: 'კეიჯუნური / კრეოლური სანელებლების ნაზავი' },
  'Green Onions / Scallions (thinly sliced)': { ka: 'მწვანე ხახვი (თხლად დაჭრილი)' },
  'Whole Packer Beef Brisket (Prime grade)': { ka: 'საქონლის მთლიანი მკერდის ნაჭერი (ბრისკეტი, უმაღლესი პრაიმ ხარისხი)' },
  'Coarse 16-Mesh Black Pepper': { ka: 'მსხვილად დაფქული შავი პილპილი (საშუალო-მსხვილი დაფქვა)' },
  'Rendered Beef Tallow': { ka: 'გამდნარი საქონლის ქონი (ტალოვი)' },
  'Fresh Littleneck Clams (steamed) or Clam Meat': { ka: 'ახალი მოლუსკები (ორთქლზე მომზადებული) ან მოლუსკის ხორცი' },
  'Full-Fat Buttermilk': { ka: 'ნაღებმოუხდელი დო (ბატერმილკი)' },
  'Gumbo Filé Powder (ground sassafras)': { ka: 'გამბოს ფილეს ფხვნილი (დაფქული სასაფრასი)' },
  'Finely Snipped Fresh Chives': { ka: 'წვრილად დაჭრილი ახალი ხახვი-შნიტი' },
  'Bone-in Pork Boston Butt': { ka: 'ღორის ბეჭი ძვლით (ბოსტონ ბატი, ხორციანი ნაჭერი)' },
  'Frank’s RedHot Cayenne Pepper Sauce': { ka: 'ცხარე კაიენური წიწაკის სოუსი (ფრენქს რედჰოტი)' },
  "Frank's RedHot Cayenne Pepper Sauce": { ka: 'ცხარე კაიენური წიწაკის სოუსი (ფრენქს რედჰოტი)' },
  'Prosciutto di Parma DOP': { ka: 'პარმის პროშუტო (დაცული წარმოშობის იტალიური ლორი)' },
  'Thick-cut T-bone/Porterhouse Steak (3-4 fingers thick)': { ka: 'სქლად დაჭრილი ტი-ბოუნ / პორტერჰაუს სტეიკი (3-4 თითის სისქე)' },
  'Kewpie Japanese Mayonnaise': { ka: 'იაპონური მაიონეზი (კიუპი)' },
  'Pâte Brisée (Flaky Shortcrust Pastry)': { ka: 'ფრანგული ფხვიერი ცომი (პატ ბრიზე)' },
  'Pastis or Pernod Anise Liqueur': { ka: 'ანისულის ლიქიორი (პასტისი ან პერნო)' },
  'White Prepared Hominy Corn (Maíz Pozolero)': { ka: 'თეთრი ჰომინის სიმინდი (პოზოლესთვის)' },
  'Fresh Nixtamal Corn Masa (Masa Harina)': { ka: 'სიმინდის ახალი ნიქსტამალიზებული ფქვილი (მასა ჰარინა)' },
  'Ground Chile Piquín or Tajín Seasoning': { ka: 'დაფქული წიწაკა პიკინი ან ტახინის საკმაზი' },
  'Iced Beef Broth or Ice Water': { ka: 'ყინულიანი წყალი ან ბულიონი' },
  'Iced Water or Broth': { ka: 'ყინულიანი წყალი ან ბულიონი' },
  'Cold Water': { ka: 'ცივი წყალი' },
  'High-Gluten Wheat Flour': { ka: 'უმაღლესი ხარისხის პურის ფქვილი' },
  'Ground Beef Chuck (80/20)': { ka: 'საქონლის ფარში (80/20)' },
  'Ground Pork Belly': { ka: 'ღორის ხორცის ფარში' },
  'Finely Minced Yellow Onion': { ka: 'წვრილად დაკეპილი ხახვი' },
  'Fresh Cilantro (stems & leaves)': { ka: 'ახალი ქინძი' },
  'Ground Coriander Seed': { ka: 'დაფქული ქინძის თესლი' },
  'Ground Blue Fenugreek (Utskho Suneli)': { ka: 'უცხო სუნელი' },
  'Dried Red Chili Flakes': { ka: 'დაღერღილი წითელი წიწაკა' },
  'Coarse Black Pepper': { ka: 'მსხვილად დაფქული შავი პილპილი' },
  'Eggplant': { ka: 'ბადრიჯანი' },
  'Eggplants': { ka: 'ბადრიჯანი' },
  'Chinese Eggplant': { ka: 'ჩინური ბადრიჯანი' },
  'Chinese Eggplant (cut into rolling wedge chunks)': { ka: 'ბადრიჯანი (დაჭრილი კუბებად)' },
  'Japanese Eggplant': { ka: 'იაპონური ბადრიჯანი' },
  'Globe Eggplants': { ka: 'მრგვალი ბადრიჯანი' },
  'Medium Italian Eggplants (striped peeled)': { ka: 'ბადრიჯანი (ზოლებად გათლილი)' },
  'Thai Round Green Eggplants (quartered)': { ka: 'ტაილანდური მწვანე ბადრიჯანი' },
  'Pea Eggplants (Makhuea Phuang)': { ka: 'ტაილანდური მინი ბადრიჯანი' },
  'Fresh Chinese Egg Noodles': { ka: 'ახალი ჩინური კვერცხის ატრია (ნუდლსი)' },
  'Chinese Egg Noodles': { ka: 'კვერცხის ატრია (ნუდლსი)' },
  'Egg noodles': { ka: 'კვერცხის ატრია' },
  'Wide Rice Noodles': { ka: 'ბრინჯის ფართო ატრია' },
  'Fresh Wide Rice Noodles (Sen Yai, separated)': { ka: 'ახალი ბრინჯის ფართო ატრია' },
  'Mung Bean Glass Noodles (soaked & chopped)': { ka: 'მუნგის გამჭვირვალე მინის ატრია' },
  'Chicken Broth': { ka: 'ქათმის ბულიონი' },
  'Chicken Stock': { ka: 'ქათმის ბულიონი' },
  'Rich Pork and Chicken Broth': { ka: 'ღორისა და ქათმის ნაჯერი ბულიონი' },
  'Rich Pork Skin Aspic/Gelatin Broth (diced tiny)': { ka: 'ჟელატინიანი ბულიონის კუბები (ხინკლისა და სიოლუნბაოსთვის)' },
  'Beef Broth': { ka: 'საქონლის ბულიონი' },
  'Beef Bone Broth': { ka: 'საქონლის ძვლის ბულიონი' },
  'Chicken or Vegetable Broth': { ka: 'ქათმის ან ბოსტნეულის ბულიონი' },
  'Vegetable Broth': { ka: 'ბოსტნეულის ბულიონი' },
  'Sweet Bean Sauce (Tianmianjiang) or Hoisin': { ka: 'ტკბილი სოიოს ლობიოს სოუსი (ტიანმიენძიანი ან ჰოისინი)' },
  'Pixian Fermented Chili Broad Bean Paste (Doubanjiang)': { ka: 'ფერმენტირებული ჩილის მარცვლოვანი პასტა (დოუბანძიანი)' },
  'Cornstarch Slurry (cornstarch mixed with water)': { ka: 'წყალში გახსნილი სიმინდის სახამებელი' },
  'Minced Fresh Ginger & Scallion Water': { ka: 'ჯანჯაფილისა და მწვანე ხახვის არომატული წყალი' },
  'Shaoxing Rice Wine': { ka: 'შაოსინის ბრინჯის ღვინო' },
  'Shaoxing Rice Wine, Soy Sauce & Sesame Oil': { ka: 'შაოსინის ღვინო, სოიოს სოუსი და სეზამის ზეთი' },
  'Light Soy Sauce & Warm Water': { ka: 'ღია სოიოს სოუსი და თბილი წყალი' },
  'Rich Spiced Tomato Salça Sauce': { ka: 'სუნელებიანი თურქული ტომატ-სალჩას სოუსი' },
  'Turkish Butter or Extra Virgin Olive Oil': { ka: 'თურქული კარაქი ან ზეითუნის ზეთი' },
  'Tamarind Paste & Palm Sugar': { ka: 'თამარინდის პასტა და პალმის შაქარი' },
  'Fresh Lime Juice & Fish Sauce': { ka: 'ახალი ლაიმის წვენი და თევზის სოუსი' },
  'Fish Sauce & Palm Sugar': { ka: 'თევზის სოუსი და პალმის შაქარი' },
  'Fish Sauce, Fresh Lime Juice & Palm Sugar': { ka: 'თევზის სოუსი, ლაიმის წვენი და პალმის შაქარი' },
  'Khao Soi Curry Paste with Black Cardamom & Turmeric': { ka: 'ქაო სოის კარის პასტა კარდამონითა და კურკუმით' }
};

export function translateIngredientName(name, lang = 'ka') {
  if (!name) return '';
  if (lang === 'en') return name;
  
  // 1. Direct exact match
  if (INGREDIENT_DICTIONARY[name]) {
    return INGREDIENT_DICTIONARY[name][lang];
  }
  
  // 2. Case-insensitive exact match
  const lower = name.trim().toLowerCase();
  for (const [key, val] of Object.entries(INGREDIENT_DICTIONARY)) {
    if (key.toLowerCase() === lower) {
      return val[lang];
    }
  }

  // 3. Prioritized compound overrides
  if (lower.includes('eggplant')) {
    if (lower.includes('chinese')) return 'ჩინური ბადრიჯანი';
    if (lower.includes('japanese')) return 'იაპონური ბადრიჯანი';
    if (lower.includes('green') || lower.includes('pea')) return 'ტაილანდური ბადრიჯანი';
    return 'ბადრიჯანი';
  }
  if (lower.includes('egg noodle') || lower.includes('egg noodles')) {
    return 'კვერცხის ატრია (ნუდლსი)';
  }
  if (lower.includes('iced beef broth') || lower.includes('ice water') || lower.includes('iced water')) {
    return 'ყინულიანი წყალი ან ბულიონი';
  }
  if (lower.includes('chicken broth') || lower.includes('chicken stock')) {
    return 'ქათმის ბულიონი';
  }
  if (lower.includes('beef broth') || lower.includes('beef stock')) {
    return 'საქონლის ბულიონი';
  }
  if (lower.includes('vegetable broth') || lower.includes('vegetable stock')) {
    return 'ბოსტნეულის ბულიონი';
  }
  if (lower.includes('fish sauce')) {
    if (lower.includes('lime')) return 'ლაიმის წვენი და თევზის სოუსი';
    return 'თევზის სოუსი';
  }
  if (lower.includes('rice noodles')) {
    return 'ბრინჯის ატრია (ნუდლსი)';
  }
  if (lower.includes('glass noodles') || lower.includes('cellophane noodles')) {
    return 'გამჭვირვალე მინის ატრია';
  }
  if (lower.includes('sesame oil')) {
    return 'სეზამის ზეთი';
  }
  if (lower.includes('lime juice')) {
    return 'ლაიმის წვენი';
  }
  if (lower.includes('lemon juice')) {
    return 'ლიმონის წვენი';
  }
  if (lower.includes('tomato paste')) {
    return 'ტომატ-პასტა';
  }
  if (lower.includes('curry paste')) {
    return 'კარის პასტა';
  }
  if (lower.includes('cornstarch')) {
    return 'სიმინდის სახამებელი';
  }

  // 4. Sorted match by descending key length for multi-word phrases
  const sortedKeys = Object.keys(INGREDIENT_DICTIONARY).sort((a, b) => b.length - a.length);
  for (const key of sortedKeys) {
    if (key.length < 4) continue; // avoid tiny substrings
    const kLower = key.toLowerCase();
    // Match only full words or at boundaries
    const regex = new RegExp(`(^|\\b|\\s)${kLower.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}(\\b|\\s|$)`, 'i');
    if (regex.test(lower)) {
      return INGREDIENT_DICTIONARY[key][lang];
    }
  }

  // 5. Word-boundary fallback dictionary
  const subMap = [
    { word: 'pork', ka: 'ღორის ხორცი' },
    { word: 'beef', ka: 'საქონლის ხორცი' },
    { word: 'lamb', ka: 'ცხვრის ხორცი' },
    { word: 'chicken', ka: 'ქათამი' },
    { word: 'grape leaves', ka: 'ვაზის ფოთლები' },
    { word: 'lavash', ka: 'ლავაში' },
    { word: 'matzoon', ka: 'მაწონი' },
    { word: 'onion', ka: 'ხახვი' },
    { word: 'garlic', ka: 'ნიორი' },
    { word: 'butter', ka: 'კარაქი' },
    { word: 'flour', ka: 'ფქვილი' },
    { word: 'sugar', ka: 'შაქარი' },
    { word: 'salt', ka: 'მარილი' },
    { word: 'pepper', ka: 'პილპილი' },
    { word: 'water', ka: 'წყალი' },
    { word: 'milk', ka: 'რძე' },
    { word: 'egg', ka: 'კვერცხი' },
    { word: 'oil', ka: 'ზეთი' },
    { word: 'cheese', ka: 'ყველი' },
    { word: 'rice', ka: 'ბრინჯი' },
    { word: 'potato', ka: 'კარტოფილი' },
    { word: 'tomato', ka: 'პომიდორი' },
    { word: 'basil', ka: 'რეჰანი' },
    { word: 'cilantro', ka: 'ქინძი' },
    { word: 'dill', ka: 'კამა' },
    { word: 'parsley', ka: 'ოხრახუში' },
    { word: 'mint', ka: 'პიტნა' },
    { word: 'walnut', ka: 'ნიგოზი' },
    { word: 'pomegranate', ka: 'ბროწეული' },
    { word: 'vinegar', ka: 'ძმარი' },
    { word: 'wine', ka: 'ღვინო' },
    { word: 'yeast', ka: 'საფუარი' },
    { word: 'cinnamon', ka: 'დარიჩინი' },
    { word: 'honey', ka: 'თაფლი' },
    { word: 'cream', ka: 'ნაღები' },
    { word: 'yogurt', ka: 'იოგურტი' },
    { word: 'bean', ka: 'ლობიო' }
  ];

  for (const { word, ka } of subMap) {
    const regex = new RegExp(`(^|\\b|\\s)${word}(\\b|\\s|$)`, 'i');
    if (regex.test(lower)) {
      return ka;
    }
  }

  return name;
}
