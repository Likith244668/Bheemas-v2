'use client';

import { useState } from 'react';

const menuItems = {
  biryani: [
    { name: 'SPL Boneless Chicken Biryani', description: 'Authentic Indian boneless chicken biryani in Little Rock. Signature traditional biryani with aromatic basmati rice, handmade spices, and tender chicken. Best chicken biryani near me.', price: '$14.99', veg: false },
    { name: 'Chicken 65 Biryani', description: 'Spicy Indian Chicken 65 biryani in Little Rock. Traditional biryani with fried chicken 65, aromatic rice, and authentic Indian spices. Popular Indian restaurant dish.', price: '$14.99', veg: false },
    { name: 'Gongura Chicken biryan', description: 'Authentic South Indian gongura chicken biryani in Little Rock. Tangy gongura leaves with traditional biryani spices and aromatic basmati rice. Best Indian food.', price: '$15.99', veg: false },
    { name: 'Goat Biryani', description: 'Traditional Indian goat biryani in Little Rock. Slow-cooked goat meat with authentic masala, aromatic basmati rice, and handmade spices. Authentic Indian restaurant specialty.', price: '$15.99', veg: false },
    { name: 'Lamb Biryani', description: 'Authentic Indian lamb biryani in Little Rock. Tender lamb slow-cooked with traditional biryani masala, aromatic basmati rice, and premium Indian spices. Best biryani near me.', price: '$15.99', veg: false },
    { name: 'Shrimp Biryani', description: 'Coastal Indian shrimp biryani in Little Rock. Fresh shrimp with traditional coastal spices, aromatic basmati rice, and authentic Indian biryani masala. Seafood biryani specialty.', price: '$17.99', veg: false },
    { name: 'Fish Biryani', description: 'Traditional Indian fish biryani in Little Rock. Fresh fish with mild masala, aromatic basmati rice, and authentic Indian spices. Best seafood biryani in Little Rock.', price: '$17.99', veg: false },
    { name: 'Paneer Biryani', description: 'Vegetarian paneer biryani in Little Rock. Authentic Indian paneer biryani with fragrant basmati rice, traditional spices, and creamy paneer. Best veg biryani near me.', price: '$17.99', veg: true },
    { name: 'Mushroom Biryani', description: 'Vegetarian mushroom biryani in Little Rock. Traditional Indian mushroom biryani with aromatic basmati rice, herb spices, and fresh mushrooms. Authentic veg biryani.', price: '$17.99', veg: true },
    { name: 'Veg Biryani', description: 'Authentic vegetarian biryani in Little Rock. Traditional vegetable biryani with seasonal veggies, aromatic basmati rice, and handmade Indian spices. Best veg biryani in Little Rock.', price: '$17.99', veg: true },
    { name: 'Veg Kheema Biryani (soya chunks)', description: 'Vegetarian soya kheema biryani in Little Rock. Traditional Indian veg kheema biryani with soya chunks, hearty spices, and aromatic basmati rice. Authentic veg Indian food.', price: '$14.99', veg: true },
    { name: 'Egg Biryani', description: 'Traditional Indian egg biryani in Little Rock. Authentic egg biryani with boiled eggs, aromatic basmati rice, and traditional biryani masala. Best egg biryani near me.', price: '$14.99', veg: false },
  ],
  pulavs: [
    { name: 'Chicken Pulav (bone in)', description: 'Authentic Indian chicken pulav in Little Rock. Traditional bone-in chicken pulav with aromatic basmati rice, handmade spices, and authentic Indian masala. Best chicken pulav near me.', price: '$14.99', veg: false },
    { name: 'Vijayawada Chicken Pulav', description: 'Authentic South Indian Vijayawada style chicken pulav in Little Rock. Traditional Andhra chicken pulav with aromatic rice and regional spices. Best Indian restaurant pulav.', price: '$15.99', veg: false },
    { name: 'Chicken 65 pulav', description: 'Spicy Indian Chicken 65 pulav in Little Rock. Traditional pulav with fried chicken 65, aromatic basmati rice, and authentic Indian spices. Popular Indian food dish.', price: '$15.99', veg: false },
    { name: 'Goat pulav', description: 'Traditional Indian goat pulav in Little Rock. Slow-cooked goat meat with authentic masala, aromatic basmati rice, and handmade Indian spices. Best goat pulav in Little Rock.', price: '$17.99', veg: false },
    { name: 'Lamb pulav', description: 'Authentic Indian lamb pulav in Little Rock. Tender lamb with traditional pulav masala, aromatic basmati rice, and premium Indian spices. Best lamb pulav near me.', price: '$17.99', veg: false },
    { name: 'Shrimp pulav', description: 'Coastal Indian shrimp pulav in Little Rock. Fresh shrimp with traditional coastal flavors, aromatic basmati rice, and authentic Indian spices. Seafood pulav specialty.', price: '$17.99', veg: false },
    { name: 'Fish pulav', description: 'Traditional Indian fish pulav in Little Rock. Fresh fish with light spices, aromatic basmati rice, and authentic Indian masala. Best seafood pulav in Little Rock.', price: '$17.99', veg: false },
    { name: 'Paneer pulav', description: 'Vegetarian paneer pulav in Little Rock. Authentic Indian paneer pulav with gentle masala, aromatic basmati rice, and creamy paneer. Best veg pulav near me.', price: '$14.99', veg: true },
    { name: 'Mushroom pulav', description: 'Vegetarian mushroom pulav in Little Rock. Traditional Indian mushroom pulav with herbs, aromatic basmati rice, and fresh mushrooms. Authentic veg Indian food.', price: '$14.99', veg: true },
    { name: 'Veg pulav', description: 'Authentic vegetarian pulav in Little Rock. Traditional vegetable pulav with mixed veggies, aromatic basmati rice, and handmade Indian spices. Best veg pulav in Little Rock.', price: '$14.99', veg: true },
  ],
  chickenCurries: [
    { name: 'Andhra ChickenCurry', description: 'Authentic South Indian Andhra style spicy chicken curry in Little Rock. Traditional Andhra chicken curry with bold spices, handmade masala, and rich gravy. Best Indian chicken curry near me.', price: '$14.99', veg: false },
    { name: 'Telangana Chicken Curry', description: 'Authentic South Indian Telangana style chicken curry in Little Rock. Traditional Telangana chicken curry with regional spices and authentic Indian masala. Best Indian restaurant curry.', price: '$14.99', veg: false },
    { name: 'Chicken Kadai', description: 'Traditional Indian chicken kadai in Little Rock. Authentic kadai chicken with bell peppers, onions, and handmade Indian spices. Best chicken kadai curry near me.', price: '$14.99', veg: false },
    { name: 'Chicken Korma', description: 'Authentic North Indian chicken korma in Little Rock. Creamy traditional chicken korma with nuts, cashews, and rich Indian gravy. Best chicken korma in Little Rock.', price: '$15.99', veg: false },
    { name: 'Panjabi chicken Curry', description: 'Authentic North Indian Punjabi chicken curry in Little Rock. Traditional Punjabi chicken curry with rich gravy, handmade spices, and authentic Indian flavors. Best Punjabi food.', price: '$15.99', veg: false },
    { name: 'Saag Chicken Curry', description: 'Traditional Indian saag chicken curry in Little Rock. Authentic chicken curry with spinach saag, handmade spices, and rich Indian gravy. Best saag chicken near me.', price: '$15.99', veg: false },
    { name: 'Butter chicken', description: 'Classic North Indian butter chicken in Little Rock. Authentic butter chicken with creamy tomato sauce, handmade spices, and tender chicken. Best butter chicken in Little Rock.', price: '$15.99', veg: false },
    { name: 'Chicken Tikka Masala', description: 'Authentic Indian chicken tikka masala in Little Rock. Traditional tikka masala with rich tomato gravy, grilled chicken, and handmade Indian spices. Best tikka masala near me.', price: '$15.99', veg: false },
    { name: 'Creamy Kodi Makhana', description: 'Traditional Indian creamy chicken makhana curry in Little Rock. Authentic chicken curry with creamy makhana, handmade spices, and rich Indian gravy. Best Indian food.', price: '$15.99', veg: false },
    { name: "Bheema's Kodi roast", description: 'House special authentic Indian chicken roast in Little Rock. Traditional kodi roast masala with handmade spices, roasted chicken, and authentic Indian flavors. Best chicken roast near me.', price: '$16.99', veg: false },
    { name: 'Gongura Chicken Curry', description: 'Authentic South Indian gongura chicken curry in Little Rock. Traditional tangy gongura chicken curry with sour leaves, handmade spices, and rich Indian gravy. Best gongura curry.', price: '$16.99', veg: false },
    { name: 'Chicken Chettinad', description: 'Authentic South Indian Chettinad chicken in Little Rock. Traditional Chettinad chicken with bold spices, handmade masala, and rich Indian curry. Best Chettinad food near me.', price: '$16.99', veg: false },
    { name: 'Kodi Kura (Home Style)', description: 'Authentic home style Indian chicken kura in Little Rock. Traditional home style chicken kura gravy with handmade spices and authentic Indian flavors. Best Indian restaurant dish.', price: '$15.99', veg: false },
  ],
  goatLambCurries: [
    { name: 'Goat/Lamb Kadai', description: 'Authentic Indian goat or lamb kadai in Little Rock. Traditional kadai masala with tender meat, bell peppers, onions, and handmade Indian spices. Best goat kadai curry near me.', price: '$17.99', veg: false },
    { name: 'Goat/Lamb Korma', description: 'Authentic North Indian goat or lamb korma in Little Rock. Slow-cooked traditional korma with creamy gravy, nuts, and handmade Indian spices. Best lamb korma in Little Rock.', price: '$17.99', veg: false },
    { name: 'Saag Goat or Lamb', description: 'Traditional Indian saag goat or lamb in Little Rock. Authentic goat or lamb curry with spinach saag, handmade spices, and rich Indian gravy. Best saag mutton near me.', price: '$17.99', veg: false },
    { name: 'Lamb/Goat Rogan Josh', description: 'Authentic North Indian lamb or goat rogan josh in Little Rock. Traditional rogan josh with rich spices, handmade masala, and tender meat. Best rogan josh in Little Rock.', price: '$17.99', veg: false },
    { name: 'Gongura Goat/Lam Curry', description: 'Authentic South Indian gongura goat or lamb curry in Little Rock. Traditional tangy gongura curry with sour leaves, handmade spices, and rich Indian gravy. Best gongura mutton.', price: '$17.99', veg: false },
    { name: 'Goat Curry', description: 'Traditional Indian goat curry in Little Rock. Authentic goat curry with handmade spices, rich masala, and tender meat. Best goat curry in Little Rock Indian restaurant.', price: '$17.99', veg: false },
  ],
  vegCurries: [
    { name: 'Cheesy Kofta Curry', description: 'Authentic Indian vegetarian kofta curry in Little Rock. Traditional cheesy kofta curry with creamy gravy, handmade spices, and rich Indian masala. Best veg kofta near me.', price: '$14.99', veg: true },
    { name: 'Corn Methi Malai Curry', description: 'Traditional Indian vegetarian corn methi malai curry in Little Rock. Authentic sweet corn in creamy methi malai sauce with handmade spices. Best veg curry in Little Rock.', price: '$14.99', veg: true },
    { name: 'Methi Chammon', description: 'Authentic Indian vegetarian methi mushroom curry in Little Rock. Traditional methi mushroom curry with fenugreek leaves, handmade spices, and rich Indian gravy. Best Indian food.', price: '$14.99', veg: true },
    { name: 'Paneer Butter Masala', description: 'Classic North Indian paneer butter masala in Little Rock. Authentic paneer in buttery tomato gravy with handmade spices and creamy sauce. Best paneer butter masala near me.', price: '$14.99', veg: true },
    { name: 'Paneer Tikka Masala', description: 'Authentic Indian paneer tikka masala in Little Rock. Traditional grilled paneer in rich tikka masala with handmade spices and creamy tomato gravy. Best paneer tikka masala.', price: '$14.99', veg: true },
    { name: 'Paneer Mutter', description: 'Traditional Indian paneer mutter in Little Rock. Authentic paneer and peas curry in rich gravy with handmade spices. Best paneer mutter curry in Little Rock.', price: '$14.99', veg: true },
    { name: 'Paneer Kadai', description: 'Authentic Indian paneer kadai in Little Rock. Traditional paneer kadai with bell peppers, onions, and handmade Indian spices. Best paneer kadai curry near me.', price: '$14.99', veg: true },
    { name: 'Palak Paneer', description: 'Classic North Indian palak paneer in Little Rock. Authentic paneer in spinach puree with handmade spices and rich Indian gravy. Best palak paneer in Little Rock.', price: '$14.99', veg: true },
    { name: 'Veg Butter Masala Deluxe', description: 'Authentic Indian vegetarian butter masala deluxe in Little Rock. Traditional mixed vegetables in rich butter masala with handmade spices. Best veg curry near me.', price: '$14.99', veg: true },
    { name: 'Navaratna Korma', description: 'Traditional North Indian navaratna korma in Little Rock. Authentic mixed vegetables in creamy korma with nine gems, nuts, and handmade spices. Best Indian restaurant dish.', price: '$14.99', veg: true },
    { name: 'Kaju Masala', description: 'Authentic Indian vegetarian kaju masala in Little Rock. Traditional cashew curry in smooth gravy with handmade spices and rich Indian masala. Best kaju curry near me.', price: '$14.99', veg: true },
    { name: 'Mushroom Curry', description: 'Traditional Indian vegetarian mushroom curry in Little Rock. Authentic mushrooms simmered in rich masala with handmade spices and Indian gravy. Best mushroom curry in Little Rock.', price: '$13.99', veg: true },
    { name: 'Aloo Gobi Curry', description: 'Classic Indian vegetarian aloo gobi curry in Little Rock. Traditional potato and cauliflower curry with handmade spices and rich Indian gravy. Best aloo gobi near me.', price: '$14.99', veg: true },
    { name: 'Chana Masala', description: 'Authentic North Indian chana masala in Little Rock. Traditional chickpeas cooked in rich masala with handmade spices and Indian curry. Best chana masala in Little Rock.', price: '$13.99', veg: true },
    { name: 'Mix veg Curry', description: 'Traditional Indian vegetarian mix veg curry in Little Rock. Authentic seasonal vegetables in curry sauce with handmade spices and rich Indian gravy. Best veg curry near me.', price: '$13.99', veg: true },
    { name: 'Dal (Tadaka / Spinach / Methi / Tomato )', description: 'Authentic Indian dal in Little Rock. Traditional dal with tadka, spinach, methi, or tomato options. Handmade spices and rich Indian lentil curry. Best dal near me.', price: '$12.99', veg: true },
    { name: 'Dal Makhani deluxe', description: 'Classic North Indian dal makhani deluxe in Little Rock. Slow-cooked traditional dal makhani with butter, cream, and handmade spices. Best dal makhani in Little Rock.', price: '$12.99', veg: true },
  ],
  eggCurries: [
    { name: 'EGG Curry', description: 'Authentic Indian egg curry in Little Rock. Traditional egg curry with spiced gravy, boiled eggs, and handmade Indian spices. Best egg curry near me.', price: '$13.99', veg: false },
    { name: 'Egg Bhurji', description: 'Traditional Indian egg bhurji in Little Rock. Authentic spiced scrambled eggs bhurji with onions, tomatoes, and handmade Indian spices. Best egg bhurji in Little Rock.', price: '$12.99', veg: false },
  ],
  soups: [
    { name: 'Lentil Soups', description: 'Authentic Indian lentil soup in Little Rock. Traditional comforting lentil soup with handmade spices and rich Indian flavors. Best Indian soup near me.', price: '$5.99', veg: true },
    { name: 'Hot & Sour', description: 'Indo-Chinese hot and sour soup in Little Rock. Traditional spicy and tangy soup with vegetables and authentic flavors. Best hot and sour soup near me.', price: '$5.99', veg: true },
    { name: 'Tomato Soup', description: 'Traditional Indian tomato soup in Little Rock. Authentic tomato soup with gentle spices and rich Indian flavors. Best tomato soup in Little Rock.', price: '$5.99', veg: true },
  ],
  starters: [
    { name: 'Veg samosa', description: 'Authentic Indian vegetarian samosa in Little Rock. Traditional crispy veg samosa with spiced potatoes, handmade pastry, and chutney. Best samosa near me.', price: '$5.99', veg: true },
    { name: 'Onion Pakodi', description: 'Traditional Indian onion pakodi in Little Rock. Authentic onion fritters with chickpea batter, handmade spices, and crispy texture. Best pakodi in Little Rock.', price: '$5.99', veg: true },
    { name: 'Samosa Chat', description: 'Authentic Indian samosa chaat in Little Rock. Traditional samosa topped with chutneys, yogurt, and Indian spices. Best samosa chaat near me.', price: '$6.99', veg: true },
    { name: 'VegSpring Rolls', description: 'Indo-Chinese vegetarian spring rolls in Little Rock. Crispy spring rolls with mixed vegetables and authentic flavors. Best spring rolls near me.', price: '$5.99', veg: true },
    { name: 'Crispy Corn', description: 'Authentic Indian crispy corn in Little Rock. Traditional crispy corn with spice toss, handmade spices, and tangy flavors. Best crispy corn in Little Rock.', price: '$11.99', veg: true },
    { name: 'Onion Samosa', description: 'Traditional Indian onion samosa in Little Rock. Authentic onion-filled samosa with chutney and handmade spices. Best onion samosa near me.', price: '$4.99', veg: true },
    { name: 'Mirchi Bajji', description: 'Authentic South Indian mirchi bajji in Little Rock. Traditional fried chili bajji with chickpea batter, handmade spices, and crispy texture. Best mirchi bajji.', price: '$6.99', veg: true },
    { name: 'Stuffed Mirchi Bajji', description: 'Traditional South Indian stuffed mirchi bajji in Little Rock. Authentic chili bajji stuffed with spices, fried in chickpea batter. Best stuffed mirchi bajji.', price: '$7.99', veg: true },
    { name: 'Cut Mirchi', description: 'Authentic South Indian cut mirchi in Little Rock. Traditional cut mirchi fritters with spice, chickpea batter, and crispy texture. Best cut mirchi near me.', price: '$7.99', veg: true },
    { name: 'Cut MirchiChat', description: 'Traditional South Indian cut mirchi chaat in Little Rock. Authentic cut mirchi chaat with chutneys, yogurt, and Indian spices. Best mirchi chaat in Little Rock.', price: '$8.99', veg: true },
  ],
  southIndian: [
    { name: 'Idli', description: 'Authentic South Indian idli in Little Rock. Traditional steamed idli served with coconut chutney and sambar. Best idli near me.', price: '$8.99', veg: true },
    { name: 'Ghee Karam Idli', description: 'Authentic South Indian ghee karam idli in Little Rock. Traditional idli tossed with ghee karam, spicy flavors, and handmade spices. Best ghee karam idli.', price: '$9.99', veg: true },
    { name: 'Punugulu', description: 'Authentic South Indian punugulu in Little Rock. Traditional crispy punugulu with coconut chutney and sambar. Best punugulu in Little Rock.', price: '$7.99', veg: true },
    { name: 'Medu vada', description: 'Authentic South Indian medu vada in Little Rock. Traditional crispy medu vada with sambar and coconut chutney. Best medu vada near me.', price: '$8.99', veg: true },
    { name: 'Uthappam', description: 'Authentic South Indian uthappam in Little Rock. Traditional soft uthappam with vegetable toppings, chutney, and sambar. Best uthappam in Little Rock.', price: '$9.99', veg: true },
    { name: 'Onion Uthappam', description: 'Authentic South Indian onion uthappam in Little Rock. Traditional soft uthappam with onions, chutney, and sambar. Best onion uthappam near me.', price: '$10.99', veg: true },
    { name: 'Plain Dosa', description: 'Classic South Indian plain dosa in Little Rock. Traditional crispy plain dosa with coconut chutney and sambar. Best dosa in Little Rock.', price: '$8.99', veg: true },
    { name: 'Gunturu/Ghee Karam Dosa', description: 'Authentic South Indian Guntur ghee karam dosa in Little Rock. Traditional spicy ghee karam dosa with handmade spices. Best ghee karam dosa near me.', price: '$9.99', veg: true },
    { name: 'Masala Dosa', description: 'Authentic South Indian masala dosa in Little Rock. Traditional crispy dosa filled with spiced potato masala, chutney, and sambar. Best masala dosa in Little Rock.', price: '$9.99', veg: true },
    { name: 'Mysore Masala Dosa', description: 'Authentic South Indian Mysore masala dosa in Little Rock. Traditional spicy Mysore masala dosa with red chutney, potato filling, and sambar. Best Mysore dosa.', price: '$10.99', veg: true },
    { name: 'Onion Dosa', description: 'Authentic South Indian onion dosa in Little Rock. Traditional crispy onion dosa with coconut chutney and sambar. Best onion dosa near me.', price: '$9.99', veg: true },
    { name: 'Paneer Dosa', description: 'Authentic South Indian paneer dosa in Little Rock. Traditional crispy dosa stuffed with spiced paneer, chutney, and sambar. Best paneer dosa in Little Rock.', price: '$11.99', veg: true },
    { name: 'Egg Dosa', description: 'Authentic South Indian egg dosa in Little Rock. Traditional crispy dosa layered with scrambled eggs, chutney, and sambar. Best egg dosa near me.', price: '$11.99', veg: false },
    { name: 'Chocolate Dosa', description: 'Authentic South Indian chocolate dosa in Little Rock. Traditional sweet chocolate dosa with chocolate spread and toppings. Best chocolate dosa in Little Rock.', price: '$10.99', veg: true },
    { name: 'Puri', description: 'Authentic Indian puri in Little Rock. Traditional crispy puri served with spiced potato curry and chutney. Best puri near me.', price: '$11.99', veg: true },
  ],
  vegAppetizers: [
    { name: 'Gobi Manchurian', description: 'Authentic Indo-Chinese gobi manchurian in Little Rock. Traditional crispy cauliflower in spicy manchurian sauce with authentic flavors. Best gobi manchurian near me.', price: '$13.99', veg: true },
    { name: 'Veg Manchurian', description: 'Authentic Indo-Chinese veg manchurian in Little Rock. Traditional vegetable balls in spicy manchurian sauce with authentic flavors. Best veg manchurian in Little Rock.', price: '$14.99', veg: true },
    { name: 'Chili Garlic Gobi', description: 'Authentic Indo-Chinese chili garlic gobi in Little Rock. Traditional cauliflower tossed in spicy chili garlic sauce with authentic flavors. Best chili garlic gobi.', price: '$14.99', veg: true },
    { name: 'Chili Paneer', description: 'Authentic Indo-Chinese chili paneer in Little Rock. Traditional paneer tossed in spicy chili sauce with authentic flavors. Best chili paneer near me.', price: '$14.99', veg: true },
    { name: 'Chili Garlic Paneer', description: 'Authentic Indo-Chinese chili garlic paneer in Little Rock. Traditional paneer in spicy chili garlic sauce with authentic flavors. Best chili garlic paneer.', price: '$14.99', veg: true },
    { name: 'Chili Garlic Baby Corn', description: 'Authentic Indo-Chinese chili garlic baby corn in Little Rock. Traditional baby corn in spicy chili garlic sauce with authentic flavors. Best baby corn near me.', price: '$13.99', veg: true },
  ],
  appetizers: [
    { name: 'Chicken 65', description: 'Authentic Indian chicken 65 in Little Rock. Traditional spicy fried chicken 65 with curry leaves, handmade spices, and bold flavors. Best chicken 65 near me.', price: '$14.99', veg: false },
    { name: 'Chili Chicken', description: 'Authentic Indo-Chinese chili chicken in Little Rock. Traditional chili chicken with bell peppers, spicy sauce, and authentic flavors. Best chili chicken in Little Rock.', price: '$14.99', veg: false },
    { name: 'Chicken Manchurian', description: 'Authentic Indo-Chinese chicken manchurian in Little Rock. Traditional chicken in spicy manchurian sauce with authentic flavors. Best chicken manchurian near me.', price: '$14.99', veg: false },
    { name: 'Pepper Chicken', description: 'Authentic Indian pepper chicken in Little Rock. Traditional pepper chicken with bold spices, black pepper, and handmade masala. Best pepper chicken in Little Rock.', price: '$14.99', veg: false },
    { name: 'Chicken Butter Roast', description: 'Authentic Indian chicken butter roast in Little Rock. Traditional chicken roasted in butter masala with handmade spices. Best chicken roast near me.', price: '$14.99', veg: false },
    { name: 'Chicken Majestic', description: 'Authentic Indian chicken majestic in Little Rock. Traditional majestic chicken with creamy spice, handmade masala, and rich flavors. Best chicken majestic.', price: '$15.99', veg: false },
    { name: 'Chicken 555', description: 'Authentic South Indian chicken 555 in Little Rock. Traditional spicy chicken 555 with curry leaves, handmade spices, and bold flavors. Best chicken 555 near me.', price: '$15.99', veg: false },
    { name: 'Chicken Chettinad Reloaded', description: 'Authentic South Indian chicken Chettinad reloaded in Little Rock. Traditional Chettinad chicken with extra spice, bold masala, and authentic flavors. Best Chettinad chicken.', price: '$15.99', veg: false },
    { name: 'Apollo fish', description: 'Authentic South Indian apollo fish in Little Rock. Traditional crispy apollo fish with spicy masala, curry leaves, and handmade spices. Best apollo fish near me.', price: '$15.99', veg: false },
    { name: 'Pepper Shrimp', description: 'Authentic Indian pepper shrimp in Little Rock. Traditional shrimp tossed in pepper masala with bold spices and handmade flavors. Best pepper shrimp in Little Rock.', price: '$15.99', veg: false },
    { name: 'Shrimp Chettinad Reloaded', description: 'Authentic South Indian shrimp Chettinad reloaded in Little Rock. Traditional shrimp Chettinad with bold spice, extra masala, and authentic flavors. Best shrimp Chettinad.', price: '$16.99', veg: false },
    { name: 'Chicken Wings', description: 'Authentic Indian spiced chicken wings in Little Rock. Traditional fried chicken wings with handmade spices and bold Indian flavors. Best chicken wings near me.', price: '$15.99', veg: false },
  ],
  tandoori: [
    { name: 'Chicken TandooriHalf', description: 'Authentic North Indian half tandoori chicken in Little Rock. Traditional tandoori chicken, smoky and juicy, marinated with handmade spices and yogurt. Best tandoori chicken near me.', price: '$16.99', veg: false },
    { name: 'Shrimp Tandoori', description: 'Authentic Indian tandoori shrimp in Little Rock. Traditional tandoori shrimp with charred spices, handmade marinade, and smoky flavors. Best tandoori shrimp in Little Rock.', price: '$17.99', veg: false },
    { name: "Bheema's SPL Chicken Tandoori", description: 'House special authentic Indian tandoori chicken in Little Rock. Traditional tandoori chicken with signature marinade, handmade spices, and smoky flavors. Best tandoori near me.', price: '$17.99', veg: false },
    { name: 'Chicken Tikka', description: 'Authentic North Indian chicken tikka in Little Rock. Traditional boneless chicken tikka skewers marinated with yogurt, handmade spices, and grilled in tandoor. Best chicken tikka in Little Rock.', price: '$16.99', veg: false },
    { name: 'Chicken Malai kebab', description: 'Authentic North Indian chicken malai kebab in Little Rock. Traditional creamy malai chicken kebab with cashews, cream, and handmade spices. Best malai kebab near me.', price: '$16.99', veg: false },
    { name: 'Chicken Seekh Kebab', description: 'Authentic North Indian chicken seekh kebab in Little Rock. Traditional minced chicken seekh kebab with handmade spices, grilled on skewers. Best seekh kebab in Little Rock.', price: '$16.99', veg: false },
    { name: 'Paneer Tikka', description: 'Authentic North Indian paneer tikka in Little Rock. Traditional vegetarian paneer tikka with tandoor spices, yogurt marinade, and grilled vegetables. Best paneer tikka near me.', price: '$14.99', veg: true },
    { name: 'Chicken Tandoori Full', description: 'Authentic North Indian full tandoori chicken in Little Rock. Traditional full tandoori chicken for sharing, marinated with handmade spices and yogurt. Best tandoori chicken in Little Rock.', price: '$27.99', veg: false },
  ],
  beverages: [
    { name: 'Soft Drinks', description: 'Assorted chilled soft drinks at our Indian restaurant in Little Rock. Refreshing beverages to complement your authentic Indian meal. Best drinks near me.', price: '$2.99', veg: true },
    { name: 'Ice Tea', description: 'Refreshing iced tea at our Indian restaurant in Little Rock. Traditional iced tea to complement your authentic Indian food. Best iced tea near me.', price: '$2.99', veg: true },
    { name: 'Butter Milk', description: 'Authentic Indian buttermilk in Little Rock. Traditional seasoned buttermilk cooler with spices, perfect with spicy Indian food. Best buttermilk in Little Rock.', price: '$5.99', veg: true },
    { name: 'Sweet Lassi', description: 'Authentic Indian sweet lassi in Little Rock. Traditional sweet yogurt lassi, creamy and refreshing. Best lassi near me.', price: '$5.99', veg: true },
    { name: 'Mango Lassi', description: 'Authentic Indian mango lassi in Little Rock. Traditional mango yogurt lassi, creamy and fruity. Best mango lassi in Little Rock.', price: '$5.99', veg: true },
  ],
  mocktails: [
    { name: 'Fresh LimeSoda', description: 'Authentic Indian fresh lime soda in Little Rock. Traditional fresh lime soda with fizz, refreshing and tangy. Best lime soda near me.', price: '$5.99', veg: true },
    { name: 'Virgin Mojito', description: 'Refreshing virgin mojito at our Indian restaurant in Little Rock. Minty virgin mojito mocktail, perfect with Indian food. Best mojito in Little Rock.', price: '$7.99', veg: true },
    { name: 'Fruit Punch', description: 'Mixed fruit punch at our Indian restaurant in Little Rock. Traditional fruit punch cooler, refreshing and fruity. Best fruit punch near me.', price: '$5.99', veg: true },
    { name: 'Very Berry', description: 'Berry blend mocktail at our Indian restaurant in Little Rock. Traditional very berry mocktail, fruity and refreshing. Best berry mocktail in Little Rock.', price: '$6.99', veg: true },
  ],
  kidsMeal: [
    { name: 'Chicken Nuggets', description: 'Crispy chicken nuggets for kids at our Indian restaurant in Little Rock. Family-friendly meal option for children. Best kids meal near me.', price: '$5.99', veg: false },
    { name: 'Maggie Noodles', description: 'Authentic Indian maggie noodles for kids in Little Rock. Traditional maggie noodles with mild spice, perfect for children. Best kids meal in Little Rock.', price: '$6.99', veg: true },
    { name: 'Chocolate Dosa', description: 'Kids favorite chocolate dosa at our Indian restaurant in Little Rock. Traditional sweet chocolate dosa, perfect for children. Best kids dosa near me.', price: '$6.99', veg: true },
  ],
  deserts: [
    { name: 'Gulab Jam', description: 'Authentic Indian gulab jamun in Little Rock. Traditional gulab jamun in sugar syrup, soft and sweet. Best Indian dessert near me.', price: '$4.99', veg: true },
    { name: 'Carrot Halwa', description: 'Authentic Indian carrot halwa in Little Rock. Traditional carrot halwa with ghee, nuts, and cardamom. Best carrot halwa in Little Rock.', price: '$5.99', veg: true },
    { name: 'Rasmali', description: 'Authentic Indian rasmalai in Little Rock. Traditional rasmalai in sweet milk, creamy and rich. Best rasmalai near me.', price: '$5.99', veg: true },
    { name: 'Rice Keer', description: 'Authentic Indian rice kheer in Little Rock. Traditional rice kheer with cardamom, nuts, and saffron. Best kheer in Little Rock.', price: '$4.99', veg: true },
    { name: 'Double Ka Meeta', description: 'Authentic Indian double ka meetha in Little Rock. Traditional double ka meetha dessert with bread, milk, and nuts. Best Indian dessert near me.', price: '$5.99', veg: true },
  ],
};

// ─── Menu categories: add/remove/edit items here only ─────────────────────
const MENU_CATEGORIES = [
  { key: 'biryani', label: 'Biryani' },
  { key: 'pulavs', label: 'Pulavs' },
  { key: 'chickenCurries', label: 'Chicken Curries' },
  { key: 'goatLambCurries', label: 'Goat & Lamb Curries' },
  { key: 'vegCurries', label: 'Veg Curries' },
  { key: 'eggCurries', label: 'Egg Curries' },
  { key: 'soups', label: 'Soups' },
  { key: 'starters', label: 'Starters' },
  { key: 'southIndian', label: 'South Indian' },
  { key: 'vegAppetizers', label: 'Veg Appetizers' },
  { key: 'appetizers', label: 'Appetizers' },
  { key: 'tandoori', label: 'Tandoori' },
  { key: 'beverages', label: "Beverage's" },
  { key: 'mocktails', label: 'Mocktails' },
  { key: 'kidsMeal', label: 'Kids Meal' },
  { key: 'deserts', label: 'Deserts' },
];

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState(MENU_CATEGORIES[0].key);

  return (
    <section id="menu" className="py-16 md:py-24 bg-[#F5F1ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#2A2420] mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Explore Our Indian Food Menu
          </h2>
          <p className="text-lg text-[#6B5D54] max-w-2xl mx-auto">
            Authentic Indian restaurant menu featuring North Indian, South Indian, tandoori and traditional cuisine in Little Rock
          </p>
        </div>

        {/* Categories: mobile = scroll row, desktop = wrap. Change list in MENU_CATEGORIES. */}
        <div className="mb-10 sm:mb-12 -mx-4 sm:mx-0 px-4 sm:px-0">
          <div className="flex gap-2 sm:flex-wrap sm:justify-center overflow-x-auto pb-2 sm:pb-0 scrollbar-hide sm:overflow-visible">
            {MENU_CATEGORIES.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`
                    shrink-0 h-11 sm:h-auto sm:py-3 px-4 sm:px-6 rounded-full sm:rounded-lg
                    text-sm font-semibold whitespace-nowrap
                    transition-all duration-200 active:scale-[0.98]
                    border-2 sm:border
                    ${isActive
                      ? 'bg-[#782B23] text-white border-[#782B23] shadow-md'
                      : 'bg-white text-[#2A2420] border-[#D4C4B8] hover:border-[#782B23] hover:bg-[#FDFBFA]'
                    }
                  `}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {menuItems[activeTab as keyof typeof menuItems].map((item) => (
            <article key={item.name} className="bg-white p-6 rounded-lg border border-[#E8DDD5] hover:shadow-md transition">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-[#2A2420] flex-1">
                  {item.name}
                  <span className={`ml-2 inline-block text-xs px-2 py-1 rounded ${
                    item.veg 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {item.veg ? 'Veg' : 'Non-Veg'}
                  </span>
                </h3>
                <span className="text-[#782B23] font-bold text-lg ml-4">{item.price}</span>
              </div>
              <p className="text-[#6B5D54] text-sm">{item.description}</p>
            </article>
          ))}
        </div>

        {/* SEO Content Block */}
        <div className="bg-white rounded-lg p-8 border border-[#E8DDD5]">
          <h3 className="text-2xl font-bold text-[#2A2420] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Best Indian Restaurant in Little Rock
          </h3>
          <p className="text-[#6B5D54] leading-relaxed mb-3">
            Our Indian restaurant in Little Rock offers the finest selection of authentic Indian cuisine including premium North Indian and South Indian dishes,
            handcrafted with our own handmade spices. Whether you're looking for traditional tandoori specialties, aromatic biryani, or family-friendly veg and
            non-veg options, we serve the best Indian food in Little Rock with genuine recipes passed down through generations.
          </p>
          <p className="text-[#6B5D54] leading-relaxed">
            For Search Optimization for Static Websites, this menu highlights popular Indian food keywords like biryani, tandoori, curries, dosas, and pulav,
            making it easy to find our authentic flavors online. As the premier fine dining Indian restaurant in Little Rock, we specialize in authentic Indian
            culinary traditions providing an exceptional dining experience for families, working professionals, and food enthusiasts.
          </p>
        </div>
      </div>
    </section>
  );
}
