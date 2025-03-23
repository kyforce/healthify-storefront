
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email requis",
        description: "Veuillez entrer votre adresse email",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulation d'une requête API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      toast({
        title: "Inscription réussie !",
        description: "Merci de vous être inscrit à notre newsletter",
      });
    }, 1000);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="newsletter-container relative overflow-hidden">
          {/* Forme décorative */}
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -left-12 -bottom-12 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <span className="pill bg-primary/10 text-primary mb-4">Restez informé</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Abonnez-vous à notre newsletter
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Recevez nos dernières offres, conseils santé et nouveautés directement dans votre boîte mail.
            </p>
            
            {isSubscribed ? (
              <div className="flex items-center justify-center space-x-2 text-primary animate-fade-in">
                <CheckCircle2 className="h-5 w-5" />
                <span>Merci pour votre inscription !</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Votre adresse email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-md flex-grow"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-primary text-white w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    "Inscription..."
                  ) : (
                    <>
                      S'inscrire
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
            
            <p className="text-xs text-muted-foreground mt-4">
              En vous inscrivant, vous acceptez de recevoir nos emails et confirmez avoir lu notre 
              <a href="/politique-confidentialite" className="underline hover:text-primary ml-1">politique de confidentialité</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
