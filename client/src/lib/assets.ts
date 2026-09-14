const assetBase = (import.meta.env.VITE_ASSET_BASE_URL ?? "").replace(/\/+$/, "");

export function assetUrl(fileName: string, webdevFallback: string): string {
  return assetBase ? `${assetBase}/${fileName}` : webdevFallback;
}

export const assetPaths = {
  hero: () => assetUrl("divinegrow-hero.jpg", "/manus-storage/divinegrow-hero_dd8af70f.jpg"),
  spiceGallery: () => assetUrl("divinegrow-spices.jpg", "/manus-storage/divinegrow-spices_23bfd059.jpg"),
  saffronGallery: () => assetUrl("divinegrow-saffron.jpg", "/manus-storage/divinegrow-saffron_0119df15.jpg"),
  logo: () => assetUrl("divinegrow-logo-cropped.png", "/manus-storage/divinegrow-logo-cropped_f7fe5518.png"),
};
