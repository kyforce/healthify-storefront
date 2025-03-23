
import { Product } from "@/components/ProductCard";

export const products: Product[] = [
  {
    id: "1",
    slug: "trimtone-enhancer",
    name: "Trimtone Enhancer",
    description: "Soutien à la gestion du poids et au métabolisme des graisses",
    price: 22500,
    image: "/lovable-uploads/6182663e-4ced-40cd-b660-4489815d2c35.png",
    category: "Gestion du poids",
    color: "blue",
    benefits: [
      "Aide à augmenter la combustion des graisses",
      "Aide à maintenir des niveaux de sucre normaux"
    ],
    quantity: 30,
    isPopular: true
  },
  {
    id: "2",
    slug: "resveratrol",
    name: "Resveratrol",
    description: "Puissant antioxydant pour le vieillissement et la santé cardiovasculaire",
    price: 19800,
    originalPrice: 24000,
    image: "/lovable-uploads/380b2546-be66-4e41-babf-1051a906c648.png",
    category: "Antioxydants",
    color: "red",
    benefits: [
      "Super antioxydant",
      "Favorise l'anti-âge et la longévité",
      "Soutient la santé cardiovasculaire"
    ],
    quantity: 30,
    isSale: true
  },
  {
    id: "3",
    slug: "colon-detox",
    name: "Colon Detox",
    description: "Formule probiotique pour améliorer l'absorption des nutriments",
    price: 21000,
    image: "/lovable-uploads/5dc5191b-3ac9-4e43-93d3-7925f94163a2.png",
    category: "Digestion",
    color: "green",
    benefits: [
      "Améliore l'absorption des nutriments",
      "Laxatif naturel à base de plantes"
    ],
    quantity: 30
  },
  {
    id: "4",
    slug: "andro-t",
    name: "Andro-T",
    description: "Booster naturel de testostérone pour la libido et la vitalité",
    price: 27500,
    image: "/lovable-uploads/84a7932a-61c0-4d27-a0c3-1c8879a462c1.png",
    category: "Hormones",
    color: "black",
    benefits: [
      "Booste la libido et la vitalité",
      "Aide à augmenter l'énergie et le dynamisme"
    ],
    quantity: 30,
    isNew: true
  },
  {
    id: "5",
    slug: "liver-care",
    name: "Liver Care",
    description: "Soutien au processus de détoxification et à la santé du foie",
    price: 23500,
    image: "/lovable-uploads/80e3326f-6c36-419a-85c8-441ad92554ce.png",
    category: "Détoxification",
    color: "orange",
    benefits: [
      "Soutient le processus de détoxification",
      "Aide à renforcer les défenses antioxydantes",
      "Soutient la santé globale"
    ],
    quantity: 30
  },
  {
    id: "6",
    slug: "muscle-bone-care",
    name: "Muscle-Bone Care",
    description: "Calcium, magnésium et zinc pour les os et les muscles",
    price: 24000,
    image: "/lovable-uploads/998b6abe-b64c-48af-8727-033b1b40b202.png",
    category: "Minéraux",
    color: "brown",
    benefits: [
      "Soutient le fonctionnement des nerfs et des muscles",
      "Favorise des os et des dents solides"
    ],
    quantity: 30
  },
  {
    id: "7",
    slug: "hair-skin-nails",
    name: "Hair, Skin + Nails",
    description: "22 ingrédients clés pour la santé des cheveux, de la peau et des ongles",
    price: 26000,
    image: "/lovable-uploads/a622272a-815d-4504-a6b3-a1e576272c8c.png",
    category: "Beauté",
    color: "pink",
    benefits: [
      "Favorise une peau plus saine",
      "Favorise des cheveux plus épais",
      "Renforce les ongles"
    ],
    quantity: 30,
    isNew: true
  },
  {
    id: "8",
    slug: "super-omega-3",
    name: "Super Omega-3",
    description: "Acides gras essentiels pour la santé cardiaque et cérébrale",
    price: 25000,
    image: "/lovable-uploads/57f25eba-4562-4e00-8ec9-0ceb45348bc7.png",
    category: "Acides gras",
    color: "red",
    benefits: [
      "Favorise la santé du cœur et du cerveau",
      "Soutient la santé circulatoire",
      "Favorise le bien-être général"
    ],
    quantity: 30
  },
  {
    id: "9",
    slug: "super-focus",
    name: "Super Focus",
    description: "Formule pour la concentration, la mémoire et la clarté mentale",
    price: 28000,
    image: "/lovable-uploads/b879c311-bd86-4612-9c99-1721bb899f50.png",
    category: "Cognition",
    color: "purple",
    benefits: [
      "Soutient la concentration et la mémoire",
      "Favorise une humeur positive",
      "Aide à augmenter la concentration"
    ],
    quantity: 30,
    isPopular: true
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getRelatedProducts(currentProductId: string, limit: number = 4): Product[] {
  return products
    .filter(product => product.id !== currentProductId)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
}
