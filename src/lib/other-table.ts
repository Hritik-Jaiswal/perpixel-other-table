export const otherTableBase = "";

export type MenuCategory = "Small plates" | "Larger plates" | "Sides" | "Desserts" | "Drinks";
export type MenuItem = {
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  tags?: readonly string[];
};

export const menuCategories: MenuCategory[] = ["Small plates", "Larger plates", "Sides", "Desserts", "Drinks"];

export const menuItems: MenuItem[] = [
  { name: "Warm bread & cultured butter", description: "Torn at the table, with smoked sea salt.", price: 320, category: "Small plates", tags: ["Vegetarian"] },
  { name: "Tomatoes, stone fruit & whipped curd", description: "Basil, aged vinegar, olive oil.", price: 490, category: "Small plates", tags: ["Vegetarian"] },
  { name: "Charred aubergine", description: "Labneh, tomato, toasted seeds, flatbread.", price: 540, category: "Small plates", tags: ["Vegetarian"] },
  { name: "Crisp potatoes", description: "Saffron aioli, lemon, soft herbs.", price: 390, category: "Small plates", tags: ["Vegetarian"] },
  { name: "Market fish for two", description: "Roasted whole, with greens and bright herb oil.", price: 1450, category: "Larger plates" },
  { name: "Slow cooked lamb shoulder", description: "Flatbread, pickled onion, warm spice.", price: 1320, category: "Larger plates" },
  { name: "Butter bean & squash pie", description: "Flaky pastry, bitter leaves, gravy.", price: 980, category: "Larger plates", tags: ["Vegetarian"] },
  { name: "Little gem salad", description: "Lemon dressing, shaved fennel, herbs.", price: 360, category: "Sides", tags: ["Vegetarian"] },
  { name: "Greens from the pan", description: "Garlic, olive oil, chilli.", price: 340, category: "Sides", tags: ["Vegetarian"] },
  { name: "Olive oil cake", description: "Poached fruit, lightly whipped cream.", price: 420, category: "Desserts", tags: ["Vegetarian"] },
  { name: "Dark chocolate & sea salt", description: "A small, generous ending.", price: 390, category: "Desserts", tags: ["Vegetarian"] },
  { name: "House spritz", description: "Citrus, rosemary, a little bitterness.", price: 460, category: "Drinks" },
  { name: "Seasonal cooler", description: "Fresh fruit, herbs, sparkling water. No alcohol.", price: 340, category: "Drinks" },
];

export const featuredDishes = [menuItems[2], menuItems[1], menuItems[6]];
export const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;
