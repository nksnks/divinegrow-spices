const assetBase = (import.meta.env.VITE_ASSET_BASE_URL ?? "").replace(/\/+$/, "");

export function assetUrl(fileName: string, webdevFallback: string): string {
  return assetBase ? `${assetBase}/${fileName}` : webdevFallback;
}

export const assetPaths = {
  hero: () => assetUrl("divinegrow-hero.jpg", "/manus-storage/divinegrow-hero_dd8af70f.jpg"),
  spiceGallery: () => assetUrl("divinegrow-spices.jpg", "/manus-storage/divinegrow-spices_23bfd059.jpg"),
  saffronGallery: () => assetUrl("divinegrow-saffron.jpg", "/manus-storage/divinegrow-saffron_0119df15.jpg"),
  logo: () => assetUrl("divinegrow-logo-cropped.png", "/manus-storage/divinegrow-logo-cropped_f7fe5518.png"),
  products: {
    greenCardamom: () => assetUrl("product-green-cardamom.jpg", "/manus-storage/product-green-cardamom_a882f653.jpg"),
    blackPepper: () => assetUrl("product-black-pepper.jpg", "/manus-storage/product-black-pepper_64b3b36a.jpg"),
    clove: () => assetUrl("product-clove.jpg", "/manus-storage/product-clove_7565e3c5.jpg"),
    cinnamon: () => assetUrl("product-cinnamon.jpg", "/manus-storage/product-cinnamon_d2f8a850.jpg"),
    nutmeg: () => assetUrl("product-nutmeg.jpg", "/manus-storage/product-nutmeg_06ba10fd.jpg"),
    mace: () => assetUrl("product-mace-javitri.jpg", "/manus-storage/product-mace-javitri_36981ee1.jpg"),
    saffron: () => assetUrl("product-saffron.jpg", "/manus-storage/product-saffron_6c964780.jpg"),
    starAnise: () => assetUrl("product-star-anise.jpg", "/manus-storage/product-star-anise_19f78fa3.jpg"),
    turmeric: () => assetUrl("product-turmeric.jpg", "/manus-storage/product-turmeric_69eedef0.jpg"),
    redChilli: () => assetUrl("product-red-chilli.jpg", "/manus-storage/product-red-chilli_337a66de.jpg"),
    corianderSeeds: () => assetUrl("product-coriander-seeds.jpg", "/manus-storage/product-coriander-seeds_5bd09f33.jpg"),
    cuminSeeds: () => assetUrl("product-cumin-seeds.jpg", "/manus-storage/product-cumin-seeds_b723ea1c.jpg"),
    foxNut: () => assetUrl("product-fox-nut.jpg", "/manus-storage/product-fox-nut_c2a18d20.jpg"),
    flattenedRice: () => assetUrl("product-flattened-rice.jpg", "/manus-storage/product-flattened-rice_82507da0.jpg"),
  },
};
