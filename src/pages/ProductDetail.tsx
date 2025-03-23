
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Separator } from '@/components/ui/separator';
import { Check, Minus, Plus, ShoppingCart, Heart, ShieldCheck, ArrowLeft } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');
  const relatedProducts = product ? getRelatedProducts(product.id) : [];
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16 container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-16">
            <h1 className="text-3xl font-display font-bold mb-4">Produit non trouvé</h1>
            <p className="text-muted-foreground mb-8">
              Le produit que vous recherchez n'existe pas ou a été supprimé.
            </p>
            <Button asChild>
              <Link to="/produits">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux produits
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "Produit ajouté au panier",
      description: `${quantity} x ${product.name} a été ajouté à votre panier`,
    });
  };

  const handleAddToWishlist = () => {
    toast({
      title: "Produit ajouté aux favoris",
      description: `${product.name} a été ajouté à votre liste de favoris`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Fil d'Ariane */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Accueil</Link>
            <span className="mx-2">/</span>
            <Link to="/produits" className="hover:text-primary">Produits</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
        
        {/* Détails du produit */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image du produit */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm flex items-center justify-center">
              <div className="relative w-full max-w-sm mx-auto animate-float" style={{ animationDuration: '6s' }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            
            {/* Informations produit */}
            <div className="flex flex-col">
              {/* Catégorie et badges */}
              <div className="flex flex-wrap gap-2 mb-2">
                <span className={`pill bg-product-${product.color}/10 text-product-${product.color}`}>
                  {product.category}
                </span>
                {product.isNew && <span className="pill bg-primary/10 text-primary">Nouveau</span>}
                {product.isPopular && <span className="pill bg-orange-500/10 text-orange-500">Populaire</span>}
              </div>
              
              {/* Nom et description */}
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">{product.name}</h1>
              <p className="text-muted-foreground mb-6">{product.description}</p>
              
              {/* Prix */}
              <div className="flex items-end mb-6">
                <span className={`text-2xl md:text-3xl font-semibold ${product.originalPrice ? "text-primary" : ""}`}>
                  {product.price.toLocaleString('fr-FR')} F
                </span>
                
                {product.originalPrice && (
                  <span className="ml-3 text-lg text-muted-foreground line-through">
                    {product.originalPrice.toLocaleString('fr-FR')} F
                  </span>
                )}
              </div>
              
              {/* Quantité et boutons d'action */}
              <div className="flex flex-col space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium">Quantité:</span>
                  <div className="flex items-center border rounded-md">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-10 w-10 rounded-none"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center">{quantity}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-10 w-10 rounded-none"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="flex-1" 
                    size="lg"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Ajouter au panier
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={handleAddToWishlist}
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              {/* Informations clés */}
              <div className="bg-gray-50 rounded-xl p-4 mb-8">
                <h3 className="font-medium mb-3">Informations clés:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>{product.quantity} capsules par flacon</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Ingrédients de qualité supérieure</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>Fabrication selon des normes strictes</span>
                  </li>
                </ul>
              </div>
              
              {/* Garantie */}
              <div className="flex items-center border-t pt-4">
                <ShieldCheck className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm">Garantie satisfait ou remboursé 30 jours</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Onglets détaillés */}
        <section className="container mx-auto px-4 py-12">
          <Tabs defaultValue="benefits">
            <TabsList className="grid grid-cols-3 max-w-2xl mx-auto">
              <TabsTrigger value="benefits">Bienfaits</TabsTrigger>
              <TabsTrigger value="ingredients">Ingrédients</TabsTrigger>
              <TabsTrigger value="usage">Utilisation</TabsTrigger>
            </TabsList>
            
            <div className="mt-8 bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <TabsContent value="benefits" className="animate-fade-in">
                <h3 className="text-xl font-display font-semibold mb-4">Bienfaits de {product.name}</h3>
                <ul className="space-y-4">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className={`h-6 w-6 rounded-full bg-product-${product.color}/10 flex items-center justify-center mr-3 shrink-0 mt-0.5`}>
                        <Check className={`h-4 w-4 text-product-${product.color}`} />
                      </div>
                      <p>{benefit}</p>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              
              <TabsContent value="ingredients" className="animate-fade-in">
                <h3 className="text-xl font-display font-semibold mb-4">Ingrédients</h3>
                <p className="mb-4">
                  Nos ingrédients sont soigneusement sélectionnés pour leur pureté et leur efficacité:
                </p>
                <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                  <li>Extraits naturels de plantes</li>
                  <li>Vitamines et minéraux essentiels</li>
                  <li>Formule sans OGM</li>
                  <li>Sans additifs artificiels ni conservateurs nocifs</li>
                  <li>Testé en laboratoire pour garantir la pureté</li>
                </ul>
              </TabsContent>
              
              <TabsContent value="usage" className="animate-fade-in">
                <h3 className="text-xl font-display font-semibold mb-4">Conseils d'utilisation</h3>
                <p className="mb-4">
                  Pour des résultats optimaux, suivez ces recommandations:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className={`h-6 w-6 rounded-full bg-product-${product.color}/10 flex items-center justify-center mr-3 shrink-0 mt-0.5`}>
                      <span className="text-sm font-semibold">1</span>
                    </div>
                    <p>Prendre 1 capsule par jour avec un grand verre d'eau</p>
                  </li>
                  <li className="flex items-start">
                    <div className={`h-6 w-6 rounded-full bg-product-${product.color}/10 flex items-center justify-center mr-3 shrink-0 mt-0.5`}>
                      <span className="text-sm font-semibold">2</span>
                    </div>
                    <p>Idéalement pendant ou juste après un repas pour une meilleure absorption</p>
                  </li>
                  <li className="flex items-start">
                    <div className={`h-6 w-6 rounded-full bg-product-${product.color}/10 flex items-center justify-center mr-3 shrink-0 mt-0.5`}>
                      <span className="text-sm font-semibold">3</span>
                    </div>
                    <p>Pour des résultats optimaux, utiliser régulièrement pendant au moins 8 semaines</p>
                  </li>
                </ul>
              </TabsContent>
            </div>
          </Tabs>
        </section>
        
        {/* Produits connexes */}
        {relatedProducts.length > 0 && (
          <section className="container mx-auto px-4 py-12">
            <Separator className="mb-12" />
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">Produits similaires</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
