
import React from 'react';
import { Activity, Brain, Heart, Shield, Leaf, Battery } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BenefitProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const benefits: BenefitProps[] = [
  {
    title: "Ingrédients naturels",
    description: "Tous nos produits sont formulés à partir d'ingrédients naturels soigneusement sélectionnés pour leur efficacité.",
    icon: <Leaf className="h-6 w-6" />,
    color: "bg-product-green/10 text-product-green",
  },
  {
    title: "Santé cardiaque",
    description: "Soutenez la santé de votre cœur avec nos formules conçues pour optimiser la fonction cardiovasculaire.",
    icon: <Heart className="h-6 w-6" />,
    color: "bg-product-red/10 text-product-red",
  },
  {
    title: "Fonction cognitive",
    description: "Améliorez votre concentration et votre mémoire grâce à nos compléments spécialement formulés pour le cerveau.",
    icon: <Brain className="h-6 w-6" />,
    color: "bg-product-purple/10 text-product-purple",
  },
  {
    title: "Système immunitaire",
    description: "Renforcez vos défenses naturelles avec des nutriments essentiels qui soutiennent votre système immunitaire.",
    icon: <Shield className="h-6 w-6" />,
    color: "bg-product-blue/10 text-product-blue",
  },
  {
    title: "Énergie et vitalité",
    description: "Retrouvez toute votre énergie et combattez la fatigue grâce à nos formules revitalisantes.",
    icon: <Battery className="h-6 w-6" />,
    color: "bg-product-orange/10 text-product-orange",
  },
  {
    title: "Performance physique",
    description: "Soutenez votre activité physique et récupérez plus efficacement avec nos compléments nutritionnels.",
    icon: <Activity className="h-6 w-6" />,
    color: "bg-product-black/10 text-product-black",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <span className="pill bg-primary/10 text-primary mb-4">Nos promesses</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Les bienfaits de nos compléments alimentaires
          </h2>
          <p className="text-muted-foreground">
            Découvrez comment nos formules scientifiquement éprouvées peuvent améliorer
            votre santé et votre bien-être au quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Benefit
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              color={benefit.color}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" variant="outline" className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
            En savoir plus sur nos formules
          </Button>
        </div>
      </div>
    </section>
  );
}

interface BenefitComponentProps extends BenefitProps {
  delay: number;
}

function Benefit({ icon, title, description, color, delay }: BenefitComponentProps) {
  return (
    <div 
      className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow animate-fade-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", color)}>
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
