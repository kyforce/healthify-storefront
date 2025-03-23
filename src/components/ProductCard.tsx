
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  color: 'blue' | 'red' | 'green' | 'black' | 'orange' | 'brown' | 'pink' | 'purple';
  benefits: string[];
  quantity: number;
  isNew?: boolean;
  isPopular?: boolean;
  isSale?: boolean;
}

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div className={cn("product-card group", className)}>
      {/* Image et badges */}
      <div className="product-image">
        <Link to={`/produits/${product.slug}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="image-lazy-load image-lazy-loaded"
            loading="lazy"
          />
        </Link>
        
        {/* Overlay actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/50 to-transparent">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-white text-black hover:bg-primary hover:text-white"
            aria-label="Ajouter aux favoris"
          >
            <Heart className="h-4 w-4" />
          </Button>
          
          <Button 
            className="rounded-full bg-white text-black hover:bg-primary hover:text-white"
            size="sm"
            aria-label="Ajouter au panier"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            <span className="text-xs">Ajouter</span>
          </Button>
        </div>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-primary">Nouveau</Badge>
          )}
          {product.isPopular && (
            <Badge className="bg-orange-500">Populaire</Badge>
          )}
          {product.isSale && product.originalPrice && (
            <Badge className="bg-red-500">-{discount}%</Badge>
          )}
        </div>
      </div>
      
      {/* Informations produit */}
      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <div>
            <Link to={`/produits/${product.slug}`} className="block">
              <h3 className="font-medium text-lg hover:text-primary transition-colors">
                {product.name}
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {product.description}
            </p>
          </div>
        </div>
        
        {/* Prix */}
        <div className="flex items-end mt-2">
          <span className={cn(
            "text-lg font-semibold",
            product.originalPrice ? "text-primary" : ""
          )}>
            {product.price.toLocaleString('fr-FR')} F
          </span>
          
          {product.originalPrice && (
            <span className="ml-2 text-sm text-muted-foreground line-through">
              {product.originalPrice.toLocaleString('fr-FR')} F
            </span>
          )}
        </div>
        
        {/* Pastille couleur catégorie */}
        <div className="flex items-center mt-1">
          <div className={cn(
            "h-3 w-3 rounded-full mr-2",
            `bg-product-${product.color}`,
          )} />
          <span className="text-xs text-muted-foreground">{product.category}</span>
        </div>
      </div>
    </div>
  );
}
