
import React from 'react';
import { CreditCard, Banknote, Truck, ShieldCheck } from 'lucide-react';

export default function PaymentMethods() {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureItem 
            icon={<CreditCard className="h-6 w-6" />}
            title="Paiement sécurisé"
            description="Carte bancaire, mobile money et autres options disponibles"
          />
          <FeatureItem 
            icon={<Truck className="h-6 w-6" />}
            title="Livraison rapide"
            description="Expédition sous 24h et suivi de commande en temps réel"
          />
          <FeatureItem 
            icon={<ShieldCheck className="h-6 w-6" />}
            title="Produits certifiés"
            description="Ingrédients de qualité pharmaceutique testés et approuvés"
          />
          <FeatureItem 
            icon={<Banknote className="h-6 w-6" />}
            title="Satisfait ou remboursé"
            description="Garantie de remboursement pendant 30 jours après achat"
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
