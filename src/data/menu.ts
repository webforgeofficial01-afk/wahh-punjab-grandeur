export type MenuVariant = { label: string; price: number };
export type MenuItem = {
  id: string;
  name: string;
  category: string;
  veg: boolean;
  variants: MenuVariant[];
  desc?: string;
};

let _id = 0;
const mk = (
  name: string,
  category: string,
  veg: boolean,
  variants: MenuVariant[],
  desc?: string,
): MenuItem => ({
  id: `i${++_id}`,
  name,
  category,
  veg,
  variants,
  desc,
});
const one = (p: number): MenuVariant[] => [{ label: "Regular", price: p }];

export const categories = [
  "Soups",
  "Chinese Starter",
  "Rolls",
  "Veg Tandoori Khazana",
  "Non Veg Tandoori Khazana",
  "Rice & Noodles",
  "Subji-e-Bahaar",
  "Gosh-e-Bahaar",
  "Chicken Spl. Curry",
  "Chawal-e-Lazeez",
  "Tandoor-Se",
  "Raita & Salad",
  "Momos",
  "Pasta",
  "Drinks",
  "Mocktails & Shakes",
  "Dessert",
  "Tea & Coffee",
  "Kids Menu",
] as const;

export const menu: MenuItem[] = [
  // Soups
  mk("Veg Manchou Soup", "Soups", true, one(160)),
  mk("Chicken Manchou Soup", "Soups", false, one(180)),
  mk("Veg Sweet Corn Soup", "Soups", true, one(160)),
  mk("Chicken Sweet Corn Soup", "Soups", false, one(180)),
  mk("Veg Hot N Sour Soup", "Soups", true, one(160)),
  mk("Chicken Hot N Sour Soup", "Soups", false, one(180)),

  // Chinese Starter
  mk("Chilli Potato", "Chinese Starter", true, one(200)),
  mk("Honey Chilli Potato", "Chinese Starter", true, one(210)),
  mk("Chilli Mashroom", "Chinese Starter", true, one(250)),
  mk("Veg. Salt N Pepper", "Chinese Starter", true, one(250)),
  mk("Spring Roll", "Chinese Starter", true, one(200)),
  mk("Chilli Gobhi", "Chinese Starter", true, one(220)),
  mk("Chilli Soya Chaap Dry", "Chinese Starter", true, one(220)),
  mk("Chilli Paneer Dry", "Chinese Starter", true, one(240)),
  mk("Chilli Paneer Gravy", "Chinese Starter", true, one(260)),
  mk("Veg. Manchurian Dry", "Chinese Starter", true, one(220)),
  mk("Veg. Manchurian Gravy", "Chinese Starter", true, one(240)),
  mk("French Fries", "Chinese Starter", true, one(180)),
  mk("Crispi Corn", "Chinese Starter", true, one(210)),
  mk("Chilli Chicken", "Chinese Starter", false, [
    { label: "Dry", price: 260 },
    { label: "Gravy", price: 280 },
  ]),
  mk("Chicken Manchurian", "Chinese Starter", false, [
    { label: "Dry", price: 260 },
    { label: "Gravy", price: 280 },
  ]),
  mk("Chicken Lolipop", "Chinese Starter", false, one(250)),
  mk("Chicken Salt And Pepper", "Chinese Starter", false, one(280)),
  mk("Drums Of Heaven", "Chinese Starter", false, one(270)),

  // Rolls
  mk("Mutton Seekh Roll", "Rolls", false, one(170)),
  mk("Chicken Seekh Roll", "Rolls", false, one(170)),
  mk("Chicken Tikka Roll", "Rolls", false, one(180)),
  mk("Paneer Tikka Roll", "Rolls", true, one(170)),
  mk("Malai Chaap Roll", "Rolls", true, one(150)),
  mk("Masala Tandoori Chaap Roll", "Rolls", true, one(150)),

  // Veg Tandoori Khazana
  mk("Paneer Tikka", "Veg Tandoori Khazana", true, one(270)),
  mk("Lemon Paneer Tikka", "Veg Tandoori Khazana", true, one(280)),
  mk("Achari Paneer Tikka", "Veg Tandoori Khazana", true, one(280)),
  mk("Pudina Chaap", "Veg Tandoori Khazana", true, one(260)),
  mk("Achari Chaap", "Veg Tandoori Khazana", true, one(260)),
  mk("Malai Chaap", "Veg Tandoori Khazana", true, one(260)),
  mk("Tandoori Chaap", "Veg Tandoori Khazana", true, one(260)),
  mk("Tandoori Mushroom", "Veg Tandoori Khazana", true, one(270)),
  mk("Veg Platter", "Veg Tandoori Khazana", true, one(470)),

  // Non Veg Tandoori Khazana
  mk("Tandoori Chicken", "Non Veg Tandoori Khazana", false, [{ label: "Half", price: 280 }, { label: "Full", price: 530 }]),
  mk("Garlic Chicken", "Non Veg Tandoori Khazana", false, [{ label: "Half", price: 290 }, { label: "Full", price: 550 }]),
  mk("Afgani Chicken", "Non Veg Tandoori Khazana", false, [{ label: "Half", price: 300 }, { label: "Full", price: 560 }]),
  mk("Chicken Tikka", "Non Veg Tandoori Khazana", false, [{ label: "Half", price: 300 }, { label: "Full", price: 550 }]),
  mk("Chicken Malai Tikka", "Non Veg Tandoori Khazana", false, [{ label: "Half", price: 310 }, { label: "Full", price: 560 }]),
  mk("Chicken Seekh Kabab", "Non Veg Tandoori Khazana", false, [{ label: "Half", price: 210 }, { label: "Full", price: 410 }]),
  mk("Mutton Seekh Kabab", "Non Veg Tandoori Khazana", false, [{ label: "Half", price: 230 }, { label: "Full", price: 460 }]),
  mk("Non Veg Platter", "Non Veg Tandoori Khazana", false, one(650)),

  // Rice & Noodles
  mk("Veg Fried Rice", "Rice & Noodles", true, one(200)),
  mk("Chicken Fried Rice", "Rice & Noodles", false, one(220)),
  mk("Egg Fried Rice", "Rice & Noodles", false, one(210)),
  mk("Veg Singapuri Rice", "Rice & Noodles", true, one(220)),
  mk("Chicken Singapuri Fry Rice", "Rice & Noodles", false, one(250)),
  mk("Veg. Hakka Noodles", "Rice & Noodles", true, one(220)),
  mk("Egg Hakka Noodles", "Rice & Noodles", false, one(240)),
  mk("Chicken Hakka Noodles", "Rice & Noodles", false, one(250)),
  mk("Veg Garlic Noodles", "Rice & Noodles", true, one(230)),
  mk("Egg Garlic Noodles", "Rice & Noodles", false, one(240)),
  mk("Chicken Garlic Noodles", "Rice & Noodles", false, one(250)),
  mk("Veg. Noodles", "Rice & Noodles", true, one(200)),
  mk("Egg Noodles", "Rice & Noodles", false, one(240)),
  mk("Chicken Noodles", "Rice & Noodles", false, one(250)),
  mk("Schezwan Noodles", "Rice & Noodles", true, one(250)),
  mk("Special Chicken Schezwan Noodles", "Rice & Noodles", false, one(270)),

  // Subji-e-Bahaar
  ...(
    [
      ["Dal Makhani", 250],
      ["Daal Tadka", 240],
      ["Shahi Paneer", 270],
      ["Matar Paneer", 270],
      ["Paneer Do Pyaza", 270],
      ["Kadhai Paneer", 270],
      ["Paneer Butter Masala", 270],
      ["Paneer Labab Daar", 270],
      ["Paneer Changezi", 270],
      ["Paneer Tikka Masala Gravy", 270],
      ["Khoya Paneer", 270],
      ["Aloo Gobhi", 250],
      ["Haandi Paneer", 270],
      ["Paneer Kali Mirch", 270],
      ["Paneer Bhurji", 280],
      ["Matter Mushroom", 270],
      ["Kadhai Mushroom", 270],
      ["Mushroom Do Pyaza", 270],
      ["Mushroom Butter Masala", 270],
      ["Mushroom Labab Daar", 270],
      ["Aloo Jeera", 250],
      ["Navratan Korma", 270],
      ["Kadhai Chaap", 270],
      ["Chaap Do Pyaza", 260],
      ["Chaap Butter Masala", 260],
      ["Chaap Labab Daar", 260],
      ["Malai Kofta", 270],
      ["Chana Masala", 260],
      ["Mix Veg.", 270],
      ["Paneer Angara", 270],
      ["Veg. Keema", 270],
      ["Soya Chaap Masala", 260],
    ] as [string, number][]
  ).map(([n, p]) => mk(n, "Subji-e-Bahaar", true, one(p))),

  // Gosh-e-Bahaar
  ...[
    "Kadai Mutton",
    "Mutton Do Pyaza",
    "Mutton Handi",
    "Bhuna Gosh",
    "Mutton Rara",
    "Mutton Rogan Josh",
    "Mutton Curry",
    "Mutton Masala",
    "Mutton Kali Mirch",
    "Mutton Saag Wala",
    "Keema Kaleji",
    "Mutton Korma",
    "Tawa Mutton",
  ].map((n) =>
    mk(n, "Gosh-e-Bahaar", false, [
      { label: "2 Pcs", price: 399 },
      { label: "4 Pcs", price: 550 },
    ]),
  ),

  // Chicken Spl. Curry
  ...(
    [
      ["Handi Chicken", 340, 450, 700],
      ["Tawa Chicken", 340, 450, 700],
      ["Butter Chicken", 340, 450, 700],
      ["Butter Chicken Boneless", 370, 480, 730],
      ["Chicken Tikka Masala", 370, 480, 730],
      ["Chicken Rara", 340, 450, 700],
      ["Chicken Do Pyaza", 340, 450, 700],
      ["Kadhai Chicken", 340, 450, 700],
      ["Chicken Curry", 340, 450, 700],
      ["Chicken Saag Wala", 340, 450, 700],
      ["Chicken Labab Daar", 340, 450, 700],
      ["Chicken Butter Masala", 340, 450, 700],
      ["Chicken Chingezi", 340, 450, 700],
      ["Chicken Korma", 340, 450, 700],
      ["Chicken Seekh Masala", 340, 450, 700],
      ["Chicken Kali Mirch", 340, 450, 700],
      ["Chicken Peshawari", 340, 450, 700],
      ["Chicken Rogan Josh", 340, 450, 700],
      ["Punjabi Kukad", 340, 450, 700],
      ["Methi Malai Chicken", 340, 450, 700],
      ["Waah Punjab Spl. Chicken", 360, 480, 730],
    ] as [string, number, number, number][]
  ).map(([n, q, h, f]) =>
    mk(
      n,
      "Chicken Spl. Curry",
      false,
      [
        { label: "Qtr", price: q },
        { label: "Half", price: h },
        { label: "Full", price: f },
      ],
      "Boneless ₹30 extra.",
    ),
  ),

  // Chawal-e-Lazeez
  mk("Plain Rice", "Chawal-e-Lazeez", true, one(140)),
  mk("Jeera Rice", "Chawal-e-Lazeez", true, one(150)),
  mk("Peas Rice", "Chawal-e-Lazeez", true, one(160)),
  mk("Veg Pulao", "Chawal-e-Lazeez", true, one(180)),
  mk("Navratan Pulao", "Chawal-e-Lazeez", true, one(200)),
  mk("Veg Briyani", "Chawal-e-Lazeez", true, one(220)),
  mk("Chicken Briyani", "Chawal-e-Lazeez", false, one(250)),
  mk("Mutton Briyani", "Chawal-e-Lazeez", false, one(280)),
  mk("Chicken Hyderabadi Briyani", "Chawal-e-Lazeez", false, one(250)),
  mk("Mutton Hyderabadi Briyani", "Chawal-e-Lazeez", false, one(280)),

  // Tandoor-Se
  ...(
    [
      ["Tandoori Roti", 20],
      ["Tandoori Butter Roti", 25],
      ["Rumali Roti", 15],
      ["Laccha Parantha", 60],
      ["Butter Naan", 70],
      ["Garlic Naan", 75],
      ["Missi Roti", 55],
      ["Aloo Naan", 75],
      ["Green Chilli Parantha", 70],
      ["Stuff Naan", 80],
      ["Stuff Parantha", 80],
      ["Red Chilli Parantha", 70],
    ] as [string, number][]
  ).map(([n, p]) => mk(n, "Tandoor-Se", true, one(p))),
  mk("Keema Naan", "Tandoor-Se", false, one(120)),

  // Raita & Salad
  mk("Boondi Raita", "Raita & Salad", true, one(170)),
  mk("Pine Apple Raita", "Raita & Salad", true, one(200)),
  mk("Mix Raita", "Raita & Salad", true, one(180)),
  mk("Aloo Raita", "Raita & Salad", true, one(170)),
  mk("Kheera Salad", "Raita & Salad", true, one(100)),
  mk("Green Salad", "Raita & Salad", true, one(100)),
  mk("Plain Curd", "Raita & Salad", true, one(100)),
  mk("Papad", "Raita & Salad", true, one(25)),

  // Momos
  ...(
    [
      ["Steam Momos", 130, 160, 190],
      ["Fried Momos", 160, 190, 230],
      ["Chilli Momos", 160, 190, 230],
      ["Tandoori Momos", 180, 190, 230],
      ["Afgani Momos", 180, 200, 230],
      ["Kurkure Momos", 180, 200, 230],
    ] as [string, number, number, number][]
  ).flatMap(([n, v, p, c]) => [
    mk(`${n} (Veg)`, "Momos", true, one(v)),
    mk(`${n} (Paneer)`, "Momos", true, one(p)),
    mk(`${n} (Chicken)`, "Momos", false, one(c)),
  ]),

  // Pasta
  mk("Mix Sauce Pasta (Veg.)", "Pasta", true, one(230)),
  mk("Red Sauce Pasta (Veg.)", "Pasta", true, one(230)),
  mk("White Sauce Pasta (Veg.)", "Pasta", true, one(230)),
  mk("Mix Sauce Pasta (Non Veg.)", "Pasta", false, one(260)),
  mk("Red Sauce Pasta (Non Veg.)", "Pasta", false, one(260)),
  mk("White Sauce Pasta (Non Veg.)", "Pasta", false, one(260)),

  // Drinks
  mk("Sweet Lassi", "Drinks", true, one(80)),
  mk("Salted Lassi", "Drinks", true, one(80)),
  mk("Cold Drinks", "Drinks", true, one(40)),
  mk("Water Bottle", "Drinks", true, [{ label: "On MRP", price: 0 }]),

  // Mocktails & Shakes
  ...(
    [
      ["Virgin Mojito", 120],
      ["Fresh Lime Soda", 99],
      ["Blue Heaven", 120],
      ["Strawberry Shake", 150],
      ["Kit-Kat Shake", 150],
      ["Oreo Shake", 150],
      ["Vanilla Shake", 150],
      ["Butter Scotch Shake", 150],
      ["Cold Coffee Shake", 150],
      ["Chocklate Shake", 150],
    ] as [string, number][]
  ).map(([n, p]) => mk(n, "Mocktails & Shakes", true, one(p))),

  // Dessert
  mk("Gulab Jamun", "Dessert", true, [
    { label: "1 Pc", price: 40 },
    { label: "2 Pcs", price: 80 },
  ]),
  mk("Ice Cream", "Dessert", true, one(100)),

  // Tea & Coffee
  mk("Tea", "Tea & Coffee", true, one(49)),
  mk("Masala Tea", "Tea & Coffee", true, one(59)),
  mk("Hot Coffee", "Tea & Coffee", true, one(59)),

  // Kids Menu
  mk("French Fries", "Kids Menu", true, one(180)),
  mk("Smiley", "Kids Menu", true, one(190)),
  mk("Potato Wedges", "Kids Menu", true, one(190)),
  mk("Pom Pom", "Kids Menu", true, one(190)),
  mk("Cheese Corn Nuggets", "Kids Menu", true, one(230)),
  mk("Kid's Platter", "Kids Menu", true, one(300)),
];
