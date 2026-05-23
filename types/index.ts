export type ProductItem = {
  slug: string;
  name: string;
  image: string;
};

export type FeaturedProductItem = {
  slug: string;
  name: string;
  brand: string;
  frontImage: string;
  backImage: string;
};

export type MixRatioRow = {
  material: string;
  unit: string;
  concrete250?: string;
  mortar100?: string;
};

export type ProductDetail = {
  slug: string;
  name: string;
  brand: string;
  image: string;
  packageImage?: string;
  frontImage?: string;
  backImage?: string;
  desc: string;
  isMain?: boolean;
  usage: {
    storage: string[];
    mixRatio?: MixRatioRow[];
    advantages?: string[];
    applications?: string[];
  };
};
