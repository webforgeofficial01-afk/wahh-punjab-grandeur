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
  "Chinese Starters",
  "Rolls",
  "Veg Tandoori",
  "Non Veg Tandoori",
  "Chicken Curry",
  "Mutton",
  "Momos",
  "Pasta",
  "Rice & Biryani",
  "Subji-e-Bahaar",
  "Tandoor Se",
  "Drinks & Shakes",
  "Desserts",
  "Thalis",
] as const;

export const menu: MenuItem[] = [
  // Soups
  mk("Veg Manchow Soup", "Soups", true, one(140)),
  mk("Chicken Manchow Soup", "Soups", false, one(150)),
  mk("Tomato Soup", "Soups", true, one(140)),
  mk("Veg Sweet Corn Soup", "Soups", true, one(140)),
  mk("Chicken Sweet Corn Soup", "Soups", false, one(150)),
  mk("Veg Hot N Sour Soup", "Soups", true, one(140)),
  mk("Chicken Hot N Sour Soup", "Soups", false, one(150)),

  // Chinese Starters
  mk("Chilli Paneer Dry", "Chinese Starters", true, one(220)),
  mk("Chilli Paneer Gravy", "Chinese Starters", true, one(240)),
  mk("Veg Manchurian Dry", "Chinese Starters", true, one(200)),
  mk("Veg Manchurian Gravy", "Chinese Starters", true, one(220)),
  mk("Chilli Potato", "Chinese Starters", true, one(180)),
  mk("Honey Chilli Potato", "Chinese Starters", true, one(190)),
  mk("Chilli Mushroom", "Chinese Starters", true, one(200)),
  mk("Veg Salt N Pepper", "Chinese Starters", true, one(210)),
  mk("Spring Roll", "Chinese Starters", true, one(160)),
  mk("Chilli Chicken Dry", "Chinese Starters", false, one(240)),
  mk("Chilli Chicken Gravy", "Chinese Starters", false, one(260)),
  mk("Chicken Manchurian Dry", "Chinese Starters", false, one(210)),
  mk("Chicken Manchurian Gravy", "Chinese Starters", false, one(250)),
  mk("Chicken Lollipop", "Chinese Starters", false, one(230)),
  mk("Chicken Popcorn", "Chinese Starters", false, one(230)),
  mk("Chicken Salt & Pepper", "Chinese Starters", false, one(240)),
  mk("Chilli Gobhi", "Chinese Starters", true, one(200)),
  mk("Chilli Soya Chaap Dry", "Chinese Starters", true, one(200)),
  mk("Veg Thupka", "Chinese Starters", true, one(160)),
  mk("Chicken Thupka", "Chinese Starters", false, one(180)),
  mk("Veg 65 Dry", "Chinese Starters", true, one(200)),
  mk("Mushroom Lollipop", "Chinese Starters", true, one(210)),
  mk("Chicken 65 Dry", "Chinese Starters", false, one(250)),
  mk("Drums of Heaven", "Chinese Starters", false, one(250)),

  // Rolls
  mk("Mutton Seekh Roll", "Rolls", false, one(150)),
  mk("Chicken Seekh Roll", "Rolls", false, one(150)),
  mk("Chicken Tikka Roll", "Rolls", false, one(160)),
  mk("Paneer Tikka Roll", "Rolls", true, one(150)),
  mk("Malai Chaap Roll", "Rolls", true, one(120)),
  mk("Masala Tandoori Chaap Roll", "Rolls", true, one(120)),

  // Veg Tandoori
  mk("Paneer Tikka", "Veg Tandoori", true, one(230)),
  mk("Lemon Paneer Tikka", "Veg Tandoori", true, one(250)),
  mk("Achari Paneer Tikka", "Veg Tandoori", true, one(250)),
  mk("Veg Seekh Kabab", "Veg Tandoori", true, one(220)),
  mk("Pudina Chaap", "Veg Tandoori", true, one(220)),
  mk("Achari Chaap", "Veg Tandoori", true, one(220)),
  mk("Malai Chaap", "Veg Tandoori", true, one(220)),
  mk("Tandoori Chaap", "Veg Tandoori", true, one(230)),
  mk("Tandoori Mushroom", "Veg Tandoori", true, one(230)),
  mk("Veg Platter", "Veg Tandoori", true, one(410)),

  // Non Veg Tandoori
  mk("Tandoori Chicken", "Non Veg Tandoori", false, [{ label: "Half", price: 250 }, { label: "Full", price: 480 }]),
  mk("Garlic Chicken", "Non Veg Tandoori", false, [{ label: "Half", price: 260 }, { label: "Full", price: 500 }]),
  mk("Afghani Chicken", "Non Veg Tandoori", false, [{ label: "Half", price: 270 }, { label: "Full", price: 510 }]),
  mk("Peshwari Chicken", "Non Veg Tandoori", false, [{ label: "Half", price: 260 }, { label: "Full", price: 500 }]),
  mk("Chicken Tikka", "Non Veg Tandoori", false, [{ label: "Half", price: 270 }, { label: "Full", price: 430 }]),
  mk("Chicken Malai Tikka", "Non Veg Tandoori", false, [{ label: "Half", price: 280 }, { label: "Full", price: 440 }]),
  mk("Chicken Seekh Kabab", "Non Veg Tandoori", false, [{ label: "Half", price: 180 }, { label: "Full", price: 360 }]),
  mk("Mutton Seekh Kabab", "Non Veg Tandoori", false, [{ label: "Half", price: 200 }, { label: "Full", price: 410 }]),

  // Chicken Curry
  ...[
    ["Handi Chicken", 230, 400, 650],
    ["Tawa Chicken", 240, 400, 650],
    ["Butter Chicken", 240, 400, 680],
    ["Butter Chicken Boneless", 240, 400, 680],
    ["Chicken Tikka Masala", 250, 400, 650],
    ["Chicken Rara", 250, 400, 650],
    ["Chicken Do Pyaza", 250, 400, 650],
    ["Kadhai Chicken", 250, 400, 650],
    ["Chicken Curry", 250, 400, 650],
    ["Chicken Saag Wala", 250, 400, 650],
    ["Chicken Labab Daar", 250, 400, 650],
    ["Chicken Butter Masala", 250, 400, 650],
    ["Chicken Changezi", 250, 400, 650],
    ["Chicken Korma", 250, 400, 650],
    ["Chicken Seekh Masala", 250, 400, 650],
    ["Chicken Kali Mirch", 250, 400, 650],
    ["Chicken Peshawari", 250, 400, 650],
    ["Chicken Rogan Josh", 250, 400, 650],
    ["Punjabi Kukad", 250, 400, 650],
    ["Methi Malai Chicken", 250, 400, 650],
    ["Chicken Dahi Wala", 250, 400, 650],
    ["Wahh Punjab Special Chicken", 280, 430, 680],
  ].map(([n, q, h, f]) =>
    mk(n as string, "Chicken Curry", false, [
      { label: "Quarter", price: q as number },
      { label: "Half", price: h as number },
      { label: "Full", price: f as number },
    ]),
  ),
  mk("Egg Bhurji", "Chicken Curry", false, one(120)),
  mk("Egg Curry", "Chicken Curry", false, one(160)),

  // Mutton
  ...[
    "Kadai Mutton",
    "Mutton Do Pyaza",
    "Mutton Handi",
    "Steam Mutton",
    "Bhuna Gosh",
    "Mutton Rara",
    "Mutton Rogan Josh",
    "Mutton Curry",
    "Mutton Masala",
    "Mutton Dahi Wala",
    "Mutton Kali Mirch",
    "Mutton Saag Wala",
    "Keema Kaleji",
    "Mutton Seekh Masala",
    "Mutton Korma",
  ].map((n) =>
    mk(n, "Mutton", false, [
      { label: "Half", price: 270 },
      { label: "Full", price: 450 },
    ]),
  ),
  mk("Wahh Punjab Special Mutton", "Mutton", false, [
    { label: "Half", price: 280 },
    { label: "Full", price: 480 },
  ]),

  // Momos
  ...(
    [
      ["Steam Momos", 120, 140, 160],
      ["Fried Momos", 130, 150, 170],
      ["Chilli Momos", 140, 160, 180],
      ["Tandoori Momos", 150, 160, 180],
      ["Afghani Momos", 150, 170, 190],
      ["Kurkure Momos", 170, 180, 200],
    ] as [string, number, number, number][]
  ).flatMap(([n, v, p, c]) => [
    mk(`${n} (Veg)`, "Momos", true, one(v)),
    mk(`${n} (Paneer)`, "Momos", true, one(p)),
    mk(`${n} (Chicken)`, "Momos", false, one(c)),
  ]),

  // Pasta
  mk("Veg Mix Sauce Pasta", "Pasta", true, one(200)),
  mk("Veg Red Sauce Pasta", "Pasta", true, one(190)),
  mk("Veg White Sauce Pasta", "Pasta", true, one(190)),
  mk("Non Veg Mix Sauce Pasta", "Pasta", false, one(230)),
  mk("Non Veg Red Sauce Pasta", "Pasta", false, one(220)),
  mk("Non Veg White Sauce Pasta", "Pasta", false, one(220)),

  // Rice & Biryani
  mk("Plain Rice", "Rice & Biryani", true, one(110)),
  mk("Jeera Rice", "Rice & Biryani", true, one(120)),
  mk("Peas Rice", "Rice & Biryani", true, one(130)),
  mk("Veg Pulao", "Rice & Biryani", true, one(150)),
  mk("Navratan Pulao", "Rice & Biryani", true, one(160)),
  mk("Veg Biryani", "Rice & Biryani", true, one(160)),
  mk("Chicken Biryani", "Rice & Biryani", false, one(220)),
  mk("Mutton Biryani", "Rice & Biryani", false, one(220)),
  mk("Chicken Hyderabadi Biryani", "Rice & Biryani", false, one(220)),
  mk("Mutton Hyderabadi Biryani", "Rice & Biryani", false, one(240)),

  // Subji-e-Bahaar
  ...(
    [
      ["Dal Makhani", 230],
      ["Dal Tadka", 200],
      ["Shahi Paneer", 230],
      ["Matar Paneer", 240],
      ["Paneer Do Pyaza", 240],
      ["Kadhai Paneer", 240],
      ["Paneer Butter Masala", 240],
      ["Paneer Labab Daar", 240],
      ["Paneer Changezi", 250],
      ["Paneer Tikka Masala", 250],
      ["Khoya Paneer", 250],
      ["Aloo Gobhi", 200],
      ["Handi Paneer", 240],
      ["Paneer Kali Mirch", 250],
      ["Paneer Bhurji", 260],
      ["Matter Mushroom", 240],
      ["Kadhai Mushroom", 240],
      ["Mushroom Do Pyaza", 240],
      ["Mushroom Butter Masala", 240],
      ["Mushroom Labab Daar", 240],
      ["Aloo Jeera", 200],
      ["Navratan Korma", 260],
      ["Kadhai Chaap", 230],
      ["Chaap Do Pyaza", 230],
      ["Chaap Butter Masala", 230],
      ["Chaap Labab Daar", 230],
      ["Malai Kofta", 260],
      ["Veg Kolhapur", 240],
      ["Kadai Kolhapuri", 250],
      ["Paneer Angara", 250],
    ] as [string, number][]
  ).map(([n, p]) => mk(n, "Subji-e-Bahaar", true, one(p))),

  // Tandoor Se
  ...(
    [
      ["Tandoori Roti", 15],
      ["Tandoori Butter Roti", 17],
      ["Rumali Roti", 15],
      ["Laccha Parantha", 45],
      ["Plain Naan", 45],
      ["Butter Naan", 50],
      ["Garlic Naan", 60],
      ["Stuffed Naan", 60],
      ["Missi Roti", 45],
      ["Aloo Naan", 50],
      ["Red & Green Chilli Parantha", 60],
    ] as [string, number][]
  ).map(([n, p]) => mk(n, "Tandoor Se", true, one(p))),
  mk("Keema Naan", "Tandoor Se", false, one(80)),

  // Drinks & Shakes
  ...(
    [
      ["Sweet Lassi", 80],
      ["Salted Lassi", 80],
      ["Butter Milk", 80],
      ["Cold Drinks", 40],
      ["Virgin Mojito", 99],
      ["Fresh Lime Soda", 99],
      ["Blue Heaven", 99],
      ["Strawberry Shake", 109],
      ["Kit-Kat Shake", 109],
      ["Oreo Shake", 109],
      ["Vanilla Shake", 109],
      ["Butterscotch Shake", 119],
      ["Cold Coffee Shake", 119],
      ["Chocolate Shake", 119],
    ] as [string, number][]
  ).map(([n, p]) => mk(n, "Drinks & Shakes", true, one(p))),

  // Desserts
  mk("Gulab Jamun (2 pcs)", "Desserts", true, one(60)),
  mk("Thandi Badam Kheer", "Desserts", true, one(70)),
  mk("Ice Cream", "Desserts", true, one(70)),

  // Thalis
  mk("Deluxe Thali", "Thalis", true, one(249), "A grand spread of seasonal Punjabi favourites."),
  mk("Wahh Punjab Special Thali", "Thalis", true, one(299), "Our signature royal thali — house specialties on a single platter."),
];
