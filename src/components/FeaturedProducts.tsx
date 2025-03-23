
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard, { Product } from './ProductCard';

// Données des produits
const featuredProducts: Product[] = [
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
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl">
            <span className="pill bg-primary/10 text-primary mb-4">Nos meilleurs produits</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Produits populaires
            </h2>
            <p className="text-muted-foreground">
              Découvrez notre sélection de produits les plus appréciés par nos clients pour 
              répondre à vos besoins de santé et de bien-être.
            </p>
          </div>
          
          <Button variant="outline" size="lg" className="mt-4 md:mt-0" asChild>
            <Link to="/produits">
              Voir tous les produits
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
