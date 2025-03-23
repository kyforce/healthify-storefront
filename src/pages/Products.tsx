
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Search, SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 30000]);

  const categories = Array.from(new Set(products.map(product => product.category)));

  const toggleCategory = (category: string) => {
    if (categoryFilters.includes(category)) {
      setCategoryFilters(categoryFilters.filter(cat => cat !== category));
    } else {
      setCategoryFilters([...categoryFilters, category]);
    }
  };

  const filteredProducts = products.filter(product => {
    // Filtre par recherche
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filtre par catégorie
    const matchesCategory = categoryFilters.length === 0 || categoryFilters.includes(product.category);
    
    // Filtre par prix
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* En-tête */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Nos Produits</h1>
            <p className="text-muted-foreground max-w-2xl">
              Découvrez notre gamme complète de compléments alimentaires premium, 
              formulés avec des ingrédients naturels de haute qualité.
            </p>
          </div>
        </section>
        
        {/* Filtres et produits */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar filtres (bureau) */}
              <div className="hidden lg:block w-64 shrink-0">
                <div className="sticky top-24">
                  <h2 className="text-xl font-semibold mb-4">Filtres</h2>
                  
                  {/* Recherche */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-2">Recherche</h3>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Rechercher..." 
                        className="pl-9"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  {/* Catégories */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-2">Catégories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`category-${category}`}
                            checked={categoryFilters.includes(category)}
                            onCheckedChange={() => toggleCategory(category)}
                          />
                          <label 
                            htmlFor={`category-${category}`}
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Prix */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-2">Prix</h3>
                    <div className="flex items-center space-x-2">
                      <Input
                        type="number"
                        placeholder="Min"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                        className="w-full"
                      />
                      <span>-</span>
                      <Input
                        type="number"
                        placeholder="Max"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 30000])}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  {/* Réinitialiser */}
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSearchTerm('');
                      setCategoryFilters([]);
                      setPriceRange([0, 30000]);
                    }}
                  >
                    Réinitialiser les filtres
                  </Button>
                </div>
              </div>
              
              {/* Contenu principal */}
              <div className="flex-1">
                {/* Filtres mobiles */}
                <div className="lg:hidden mb-6">
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-between"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <div className="flex items-center">
                      <SlidersHorizontal className="mr-2 h-4 w-4" />
                      Filtres
                    </div>
                    {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                  
                  {showFilters && (
                    <div className="mt-4 p-4 border rounded-md">
                      {/* Recherche */}
                      <div className="mb-4">
                        <h3 className="text-sm font-medium mb-2">Recherche</h3>
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input 
                            placeholder="Rechercher..." 
                            className="pl-9"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      {/* Catégories */}
                      <div className="mb-4">
                        <h3 className="text-sm font-medium mb-2">Catégories</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {categories.map((category) => (
                            <div key={category} className="flex items-center space-x-2">
                              <Checkbox 
                                id={`mobile-category-${category}`}
                                checked={categoryFilters.includes(category)}
                                onCheckedChange={() => toggleCategory(category)}
                              />
                              <label 
                                htmlFor={`mobile-category-${category}`}
                                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {category}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      {/* Prix */}
                      <div className="mb-4">
                        <h3 className="text-sm font-medium mb-2">Prix</h3>
                        <div className="flex items-center space-x-2">
                          <Input
                            type="number"
                            placeholder="Min"
                            value={priceRange[0]}
                            onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                            className="w-full"
                          />
                          <span>-</span>
                          <Input
                            type="number"
                            placeholder="Max"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 30000])}
                            className="w-full"
                          />
                        </div>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className="w-full mt-2"
                        onClick={() => {
                          setSearchTerm('');
                          setCategoryFilters([]);
                          setPriceRange([0, 30000]);
                        }}
                      >
                        Réinitialiser les filtres
                      </Button>
                    </div>
                  )}
                </div>
                
                {/* Résultats */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold">
                      {filteredProducts.length} Produit{filteredProducts.length !== 1 ? 's' : ''}
                    </h2>
                  </div>
                  
                  {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 px-4">
                      <h3 className="text-lg font-medium mb-2">Aucun produit trouvé</h3>
                      <p className="text-muted-foreground mb-6">
                        Aucun produit ne correspond à vos critères de recherche.
                      </p>
                      <Button
                        onClick={() => {
                          setSearchTerm('');
                          setCategoryFilters([]);
                          setPriceRange([0, 30000]);
                        }}
                      >
                        Réinitialiser les filtres
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
