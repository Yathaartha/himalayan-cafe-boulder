export type Category =
  | "All"
  | "Himalayan Bites"
  | "Brunch & Sweets"
  | "Coffee"
  | "Teas"
  | "Specials"
  | "Cold Drinks";

export const categories: Category[] = [
  "Specials",
  "Himalayan Bites",
  "Brunch & Sweets",
  "Coffee",
  "Teas",
  "Cold Drinks",
  "All",
];

export const menuItems: Array<{
  name: string;
  category: Exclude<Category, "All">;
  description: string;
  price: string;
  note?: string;
}> = [
  {
    name: "Nepalese Egg Mash",
    category: "Himalayan Bites",
    description:
      "Mashed boiled eggs with mayo, ketchup and spices on croissant or sourdough, topped with bacon, avocado and tangy sauce. Served with fruit.",
    price: "$13.99",
    note: "Gluten-free available · Ham available to substitute for avocado",
  },
  {
    name: "Nepalese Chicken Crepe",
    category: "Himalayan Bites",
    description:
      "Folded crepe with sweet pickles, egg, Nepalese-style spiced chicken and tangy sauce.",
    price: "$15.99",
    note: "Gluten-free available",
  },
  {
    name: "Alu Sandwich",
    category: "Himalayan Bites",
    description:
      "Spiced mashed potatoes, onion and cilantro on toasted sourdough with Swiss cheese, green chutney and tomato chutney. Served with fruit.",
    price: "$12.99",
    note: "Gluten-free available",
  },
  {
    name: "Classic Ham and Cheese Sandwich",
    category: "Himalayan Bites",
    description:
      "Ham, melted Swiss, tomato, pickles and Nepali house sauce on olive-oil toasted sourdough. Served with fruit.",
    price: "$14.99",
    note: "Gluten-free available",
  },
  {
    name: "Bagel with Cream Cheese",
    category: "Brunch & Sweets",
    description: "A classic bagel with cream cheese.",
    price: "$4.99",
    note: "Plain · Everything · Gluten-free",
  },
  {
    name: "Bagel Sandwich",
    category: "Brunch & Sweets",
    description: "Toasted bagel with cream cheese, poached egg, avocado, tomato and pickles.",
    price: "$10.99",
    note: "Gluten-free available",
  },
  {
    name: "Premium Pistachio Crepe",
    category: "Brunch & Sweets",
    description:
      "Folded crepe with fruits and Nutella, topped with fruits, pistachio and dark chocolate sauce.",
    price: "$14.99",
    note: "Gluten-free available",
  },
  {
    name: "Chocolate Waffle",
    category: "Brunch & Sweets",
    description:
      "Waffle with chocolate ice cream, whipped cream, chocolate chips and chocolate sauce.",
    price: "$12.99",
    note: "Gluten-free available",
  },
  {
    name: "Tropical Waffle",
    category: "Brunch & Sweets",
    description:
      "Waffle with ice cream, seasonal fruits, whipped cream, caramel sauce and white and dark chocolate sauce.",
    price: "$13.99",
    note: "Gluten-free available",
  },
  {
    name: "Premium Pistachio Waffle",
    category: "Brunch & Sweets",
    description:
      "Waffle with ice cream, Biscoff cookie, fruits, chocolate sauce and pistachio sauce and flakes.",
    price: "$15.99",
    note: "Gluten-free available",
  },
  {
    name: "Parfait",
    category: "Brunch & Sweets",
    description: "Non-fat yogurt with granola, fruits and chocolate chips.",
    price: "$7.99",
  },
  {
    name: "Brownie with Ice Cream",
    category: "Brunch & Sweets",
    description: "Warm chocolate brownie with a scoop of ice cream and chocolate sauce.",
    price: "$8.99",
  },
  {
    name: "Espresso",
    category: "Coffee",
    description: "A concentrated shot of espresso.",
    price: "$3.50",
  },
  {
    name: "Americano",
    category: "Coffee",
    description: "Espresso lengthened with hot water.",
    price: "$4.00",
  },
  {
    name: "Cafe Macchiato",
    category: "Coffee",
    description: "Espresso marked with a touch of steamed milk.",
    price: "$4.50",
  },
  {
    name: "Cortado",
    category: "Coffee",
    description: "Equal parts espresso and warm steamed milk.",
    price: "$5.00",
  },
  {
    name: "Cappuccino",
    category: "Coffee",
    description: "Espresso with steamed milk and a generous cap of foam.",
    price: "$5.25",
  },
  {
    name: "Flat White",
    category: "Coffee",
    description: "Espresso with silky steamed milk.",
    price: "$5.50",
  },
  {
    name: "Latte",
    category: "Coffee",
    description: "Espresso and smooth steamed milk.",
    price: "$5.75",
  },
  {
    name: "Mocha",
    category: "Coffee",
    description: "Espresso, chocolate and steamed milk.",
    price: "$6.50",
  },
  {
    name: "Hot Chocolate",
    category: "Coffee",
    description: "Rich chocolate with steamed milk.",
    price: "$5.00",
  },
  {
    name: "Cold Brew",
    category: "Coffee",
    description: "Slow-steeped coffee served cold.",
    price: "$5.00",
  },
  {
    name: "Cafe au Lait",
    category: "Coffee",
    description: "Brewed coffee with warm milk.",
    price: "$5.00",
  },
  {
    name: "Coffee of the Day",
    category: "Coffee",
    description: "Our rotating daily brewed coffee.",
    price: "$4.25",
  },
  {
    name: "Black Tea",
    category: "Teas",
    description: "Darjeeling tea, decaf English tea, Earl Grey tea or Mountain High Chai.",
    price: "$4.75",
  },
  {
    name: "Green Tea",
    category: "Teas",
    description: "Lemon green tea or Refresher Mint Tea.",
    price: "$4.75",
  },
  {
    name: "Herbal Tea",
    category: "Teas",
    description: "Chamomile tea.",
    price: "$4.75",
  },
  {
    name: "Himalayan Chai",
    category: "Specials",
    description:
      "Rich Nepalese chai steeped with creamy milk and warming spices, finished with aromatic spice dust and coconut flakes.",
    price: "$5.75",
    note: "Signature drink",
  },
  {
    name: "Dirty Himalayan Chai",
    category: "Specials",
    description: "Himalayan chai with a shot of espresso for a bold taste.",
    price: "$6.75",
  },
  {
    name: "Matcha Latte",
    category: "Specials",
    description: "Steamed milk with premium matcha.",
    price: "$5.75",
  },
  {
    name: "Dirty Matcha Latte",
    category: "Specials",
    description: "Matcha latte with a shot of espresso.",
    price: "$6.75",
  },
  {
    name: "Matcha Chai Latte",
    category: "Specials",
    description: "A combination of Himalayan chai with premium matcha.",
    price: "$6.50",
  },
  {
    name: "Salted Caramel Latte",
    category: "Specials",
    description:
      "Double-shot espresso with steamed milk and caramel syrup, finished with caramel sauce and sea salt.",
    price: "$6.75",
  },
  {
    name: "Biscoff Latte",
    category: "Specials",
    description:
      "Double-shot espresso with steamed milk and Biscoff butter, topped with Biscoff crumbs.",
    price: "$6.75",
  },
  {
    name: "Latte with Vanilla Coldfoam",
    category: "Cold Drinks",
    description: "Espresso and chilled milk topped with vanilla coldfoam.",
    price: "$7.70",
  },
  {
    name: "Iced Matcha",
    category: "Cold Drinks",
    description:
      "Chilled milk and premium matcha with your choice of fruit blend, finished with chilled milk.",
    price: "$6.75",
    note: "Strawberry · Mango · Peach · Pineapple",
  },
  {
    name: "Cloud Matcha",
    category: "Cold Drinks",
    description: "Refreshing coconut water topped with matcha coldfoam and coconut flakes.",
    price: "$6.75",
  },
  {
    name: "Iced Vietnamese Coffee",
    category: "Cold Drinks",
    description:
      "Bold coffee blended with sweetened condensed milk and poured over ice for a smooth finish.",
    price: "$6.75",
  },
  {
    name: "Mango Sunset",
    category: "Cold Drinks",
    description:
      "Red Bull, tropical mango puree and mango syrup poured over ice for a fruity, refreshing sip.",
    price: "$8.75",
  },
];
