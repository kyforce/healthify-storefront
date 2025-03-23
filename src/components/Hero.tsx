
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center parallax-header overflow-hidden pt-16">
      {/* Background avec effet de verre */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-gray-50 z-0">
        {/* Formes décoratives */}
        <div className="absolute top-1/4 right-1/3 h-64 w-64 rounded-full bg-primary/10 blur-3xl animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-1/4 left-1/3 h-80 w-80 rounded-full bg-product-green/10 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/3 right-1/4 h-40 w-40 rounded-full bg-product-red/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Contenu texte */}
          <div className="space-y-6 max-w-xl animate-fade-up">
            <span className="pill bg-primary/10 text-primary">Bien-être naturel</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Des solutions naturelles pour votre santé
            </h1>
            <p className="text-lg text-muted-foreground">
              Découvrez notre gamme de compléments alimentaires premium, formulés avec des ingrédients naturels 
              de haute qualité pour soutenir votre bien-être quotidien.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" asChild>
                <Link to="/produits">
                  Découvrir nos produits
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/bienfaits">
                  Leurs bienfaits
                </Link>
              </Button>
            </div>
          </div>

          {/* Image produit */}
          <div className="relative h-[500px] w-full animate-fade-in">
            <div className="absolute inset-0 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 relative rounded-2xl overflow-hidden bg-white p-8 shadow-lg transform translate-y-8 animate-float" style={{ animationDelay: '0.5s' }}>
                  <img
                    src="/lovable-uploads/6182663e-4ced-40cd-b660-4489815d2c35.png"
                    alt="Trimtone Enhancer"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="h-48 relative rounded-2xl overflow-hidden bg-white p-6 shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                  <img
                    src="/lovable-uploads/5dc5191b-3ac9-4e43-93d3-7925f94163a2.png"
                    alt="Colon Detox"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-48 relative rounded-2xl overflow-hidden bg-white p-6 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <img
                    src="/lovable-uploads/380b2546-be66-4e41-babf-1051a906c648.png"
                    alt="Resveratrol"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="h-64 relative rounded-2xl overflow-hidden bg-white p-8 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                  <img
                    src="/lovable-uploads/84a7932a-61c0-4d27-a0c3-1c8879a462c1.png"
                    alt="Andro-T"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
