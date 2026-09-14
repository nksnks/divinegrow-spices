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

const spiceImage = assetPaths.spiceGallery();
const saffronImage = assetPaths.saffronGallery();

export const products: Product[] = [
  { slug: "cardamom", name: "Green Cardamom", scientific: "Elettaria cardamomum", description: "One of the world's most valuable spices, known for an intense aroma and naturally sweet flavour.", uses: ["Tea & coffee", "Desserts", "Baking", "Pharmaceuticals"], origin: "India", packaging: ["250g", "500g", "1kg", "Bulk bags"], accent: "#91ad42", image: spiceImage },
  { slug: "black-pepper", name: "Black Pepper", scientific: "Piper nigrum", description: "The King of Spices—bold, pungent, and aromatic for food processors, kitchens, and global trade.", uses: ["Food processing", "Restaurants", "Seasoning", "Export markets"], origin: "India", packaging: ["250g", "500g", "1kg", "Bulk bags"], accent: "#6b5a44", image: spiceImage },
  { slug: "clove", name: "Clove", scientific: "Syzygium aromaticum", description: "Highly aromatic dried flower buds selected for culinary, essential oil, and medicinal applications.", uses: ["Spice blends", "Baking", "Essential oils", "Pharmaceuticals"], origin: "India / Indonesia", packaging: ["250g", "500g", "1kg", "Bulk bags"], accent: "#9f6440", image: spiceImage },
  { slug: "cinnamon", name: "Cinnamon", scientific: "Cinnamomum verum", description: "Premium aromatic bark with a warm, sweet, woody flavour for bakery, beverage, and wellness buyers.", uses: ["Bakery", "Desserts", "Tea", "Health products"], origin: "India / Sri Lanka", packaging: ["250g", "500g", "1kg", "Bulk bags"], accent: "#b66b2c", image: spiceImage },
  { slug: "nutmeg", name: "Nutmeg", scientific: "Myristica fragrans", description: "Aromatic seed spice with a warm, sweet profile that adds depth to mixes and food applications.", uses: ["Food industry", "Bakery products", "Spice mixes"], origin: "India / Indonesia", packaging: ["250g", "500g", "1kg", "Bulk bags"], accent: "#8a684c", image: saffronImage },
  { slug: "mace", name: "Mace (Javitri)", description: "The delicate outer covering of nutmeg, valued for its vivid colour and layered aroma.", uses: ["Garam masala", "Premium foods", "Herbal products"], origin: "India / Indonesia", packaging: ["250g", "500g", "1kg", "Bulk bags"], accent: "#d57930", image: saffronImage },
  { slug: "saffron", name: "Saffron", description: "Among the world's most precious spices, prized for colour, aroma, and flavour.", uses: ["Premium cooking", "Sweets", "Health applications", "Beverages"], origin: "Kashmir / premium sources", packaging: ["1g", "2g", "5g", "Bulk"], accent: "#b6381d", image: saffronImage },
  { slug: "star-anise", name: "Star Anise", scientific: "Illicium verum", description: "A distinctive star-shaped spice with a strong, sweet licorice-like flavour.", uses: ["Culinary applications", "Spice blends", "Beverages"], origin: "India / Vietnam", packaging: ["250g", "500g", "1kg", "Bulk bags"], accent: "#a77943", image: spiceImage },
];
