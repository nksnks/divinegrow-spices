import { assetPaths } from "@/lib/assets";

export type Product = {
  slug: string;
  name: string;
  scientific?: string;
  description: string;
  uses: string[];
  origin: string;
  packaging: string[];
  accent: string;
  image: string;
};

const p = assetPaths.products;

export const products: Product[] = [
  { slug: "cardamom", name: "Green Cardamom", scientific: "Elettaria cardamomum", description: "One of the world's most valuable spices, known for an intense aroma and naturally sweet flavour.", uses: ["Tea & coffee", "Desserts", "Baking", "Pharmaceuticals"], origin: "India", packaging: ["250g", "500g", "1kg", "Bulk bags"], accent: "#91ad42", image: p.greenCardamom() },
  { slug: "black-pepper", name: "Black Pepper", scientific: "Piper nigrum", description: "The King of Spices—bold, pungent, and aromatic for food processors, kitchens, and global trade.", uses: ["Food processing", "Restaurants", "Seasoning", "Export markets"], origin: "India", packaging: ["250g", "500g", "1kg", "Bulk bags"], accent: "#6b5a44", image: p.blackPepper() },
  { slug: "clove", name: "Clove", scientific: "Syzygium aromaticum", description: "Highly aromatic dried flower buds selected for culinary, essential oil, and medicinal applications.", uses: ["Spice blends", "Baking", "Essential oils", "Pharmaceuticals"], origin: "India / Indonesia", packaging: ["250g", "500g", "1kg", "Bulk bags"], accent: "#9f6440", image: p.clove() },
  { slug: "cinnamon", name: "Cinnamon", scientific: "Cinnamomum verum", description: "Premium aromatic bark with a warm, sweet, woody flavour for bakery, beverage, and wellness buyers.", uses: ["Bakery", "Desserts", "Tea", "Health products"], origin: "India / Sri Lanka", packaging: ["250g", "500g", "1kg", "Bulk bags"], accent: "#b66b2c", image: p.cinnamon() },
  { slug: "nutmeg", name: "Nutmeg", scientific: "Myristica fragrans", description: "Aromatic seed spice with a warm, sweet profile that adds depth to mixes and food applications.", uses: ["Food industry", "Bakery products", "Spice mixes"], origin: "India / Indonesia", packaging: ["250g", "500g", "1kg", "Bulk bags"], accent: "#8a684c", image: p.nutmeg() },
  { slug: "mace", name: "Mace (Javitri)", description: "The delicate outer covering of nutmeg, valued for its vivid colour and layered aroma.", uses: ["Garam masala", "Premium foods", "Herbal products"], origin: "India / Indonesia", packaging: ["250g", "500g", "1kg", "Bulk bags"], accent: "#d57930", image: p.mace() },
  { slug: "saffron", name: "Saffron", description: "Among the world's most precious spices, prized for colour, aroma, and flavour.", uses: ["Premium cooking", "Sweets", "Health applications", "Beverages"], origin: "Kashmir / premium sources", packaging: ["1g", "2g", "5g", "Bulk"], accent: "#b6381d", image: p.saffron() },
  { slug: "star-anise", name: "Star Anise", scientific: "Illicium verum", description: "A distinctive star-shaped spice with a strong, sweet licorice-like flavour.", uses: ["Culinary applications", "Spice blends", "Beverages"], origin: "India / Vietnam", packaging: ["250g", "500g", "1kg", "Bulk bags"], accent: "#a77943", image: p.starAnise() },
  { slug: "turmeric", name: "Turmeric", scientific: "Curcuma longa", description: "Bright golden turmeric with a warm earthy profile for spice blends, food processing, and wellness products.", uses: ["Curry blends", "Food colouring", "Wellness products", "Beverages"], origin: "India", packaging: ["250g", "500g", "1kg", "Bulk bags"], accent: "#d49b16", image: p.turmeric() },
  { slug: "red-chilli", name: "Red Chilli", scientific: "Capsicum annuum", description: "Vibrant dried red chillies selected for colour, aroma, and balanced heat across culinary applications.", uses: ["Seasonings", "Sauces", "Spice blends", "Food processing"], origin: "India", packaging: ["250g", "500g", "1kg", "Bulk bags"], accent: "#b83b25", image: p.redChilli() },
  { slug: "coriander-seeds", name: "Coriander Seeds", scientific: "Coriandrum sativum", description: "Fragrant whole coriander seeds with a warm citrus note for masalas, pickles, and food manufacturing.", uses: ["Curry powders", "Pickles", "Seasonings", "Food processing"], origin: "India", packaging: ["250g", "500g", "1kg", "Bulk bags"], accent: "#b69a5b", image: p.corianderSeeds() },
  { slug: "cumin-seeds", name: "Cumin Seeds", scientific: "Cuminum cyminum", description: "Aromatic cumin seeds with a warm, earthy character for seasoning blends, snacks, and ready foods.", uses: ["Masalas", "Snacks", "Seasonings", "Food processing"], origin: "India", packaging: ["250g", "500g", "1kg", "Bulk bags"], accent: "#9d7644", image: p.cuminSeeds() },
  { slug: "fox-nut", name: "Fox Nut (Makhana)", scientific: "Euryale ferox", description: "Light, crisp fox nuts sourced for healthy snacks, roasting, seasoning, and modern food applications.", uses: ["Healthy snacks", "Roasting", "Seasoned foods", "Retail packs"], origin: "India", packaging: ["250g", "500g", "1kg", "Bulk bags"], accent: "#d6c49e", image: p.foxNut() },
  { slug: "flattened-rice", name: "Flattened Rice (Poha)", description: "Clean, delicate flattened rice flakes for breakfast foods, snack mixes, ready meals, and food manufacturing.", uses: ["Breakfast foods", "Snack mixes", "Ready meals", "Retail packs"], origin: "India", packaging: ["500g", "1kg", "5kg", "Bulk bags"], accent: "#c5ad79", image: p.flattenedRice() },
];
