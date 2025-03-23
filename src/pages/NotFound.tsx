
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-lg mx-auto text-center">
            <div className="text-6xl font-display font-bold text-primary mb-6">404</div>
            <h1 className="text-3xl font-display font-bold mb-4">Page non trouvée</h1>
            <p className="text-muted-foreground mb-8">
              La page que vous recherchez n'existe pas ou a été déplacée.
              Veuillez vérifier l'URL ou utiliser les liens ci-dessous pour naviguer.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild>
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Accueil
                </Link>
              </Button>
              
              <Button variant="outline" asChild>
                <Link to="/produits">
                  <Search className="mr-2 h-4 w-4" />
                  Voir nos produits
                </Link>
              </Button>
              
              <Button variant="ghost" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
