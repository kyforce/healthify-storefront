
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ShoppingCart, 
  Menu, 
  X, 
  Search, 
  User,
  Heart
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-2 glass-effect" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl md:text-3xl font-display font-bold text-primary">
            OQATA
            <span className="text-sm ml-1 text-foreground/80">WELLNESS</span>
          </Link>

          {/* Navigation Desktop */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink to="/">Accueil</NavLink>
              <NavLink to="/produits">Produits</NavLink>
              <NavLink to="/bienfaits">Bienfaits</NavLink>
              <NavLink to="/a-propos">À propos</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
          )}

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative" aria-label="Rechercher">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative" aria-label="Favoris">
              <Heart className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative" aria-label="Compte">
              <User className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative" aria-label="Panier">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </Button>
            
            {isMobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleMenu} 
                className="md:hidden" 
                aria-label="Menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div 
          className={cn(
            "fixed inset-0 bg-background z-50 transform transition-transform duration-300 ease-in-out", 
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <Link to="/" className="text-2xl font-display font-bold text-primary">
              OQATA
              <span className="text-sm ml-1 text-foreground/80">WELLNESS</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          <nav className="flex flex-col p-6 space-y-6">
            <MobileNavLink to="/" onClick={toggleMenu}>Accueil</MobileNavLink>
            <MobileNavLink to="/produits" onClick={toggleMenu}>Produits</MobileNavLink>
            <MobileNavLink to="/bienfaits" onClick={toggleMenu}>Bienfaits</MobileNavLink>
            <MobileNavLink to="/a-propos" onClick={toggleMenu}>À propos</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

function NavLink({ to, children }: NavLinkProps) {
  return (
    <Link 
      to={to} 
      className="relative font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
    >
      {children}
    </Link>
  );
}

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}

function MobileNavLink({ to, children, onClick }: MobileNavLinkProps) {
  return (
    <Link 
      to={to} 
      className="text-xl font-medium text-foreground border-b border-border pb-2 transition-colors hover:text-primary"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
