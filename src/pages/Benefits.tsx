
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Brain, Heart, Leaf, Droplets, Battery } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import Newsletter from '@/components/Newsletter';

interface BenefitSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  color: string;
  direction?: 'left' | 'right';
  products: { name: string; slug: string }[];
}

const Benefits = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* En-tête */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="pill bg-primary/10 text-primary mb-4">Santé naturelle</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Les bienfaits de nos compléments
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Découvrez comment nos formules naturelles peuvent améliorer votre santé et votre bien-être,
                avec des ingrédients de qualité supérieure pour des résultats optimaux.
              </p>
              <Button size="lg" asChild>
                <Link to="/produits">
                  Découvrir nos produits
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Sections de bienfaits */}
        <BenefitSection 
          title="Système immunitaire"
          subtitle="Renforcez vos défenses naturelles"
          description="Nos formules de soutien immunitaire contiennent des ingrédients clés comme la vitamine C, le zinc et des extraits de plantes qui aident votre corps à maintenir un système immunitaire fort et réactif. Un système immunitaire sain est essentiel pour vous protéger contre les agents pathogènes et maintenir votre bien-être général."
          image="/lovable-uploads/998b6abe-b64c-48af-8727-033b1b40b202.png"
          icon={<Shield className="h-6 w-6" />}
          color="blue"
          direction="right"
          products={[
            { name: "Super Omega-3", slug: "super-omega-3" },
            { name: "Liver Care", slug: "liver-care" }
          ]}
        />
        
        <BenefitSection 
          title="Fonction cognitive"
          subtitle="Améliorez concentration et mémoire"
          description="Notre cerveau a besoin de nutriments spécifiques pour fonctionner de manière optimale. Nos compléments pour la fonction cognitive contiennent des ingrédients comme les acides gras oméga-3, la phosphatidylsérine et des extraits de plantes qui soutiennent la clarté mentale, la mémoire et la concentration."
          image="/lovable-uploads/b879c311-bd86-4612-9c99-1721bb899f50.png"
          icon={<Brain className="h-6 w-6" />}
          color="purple"
          direction="left"
          products={[
            { name: "Super Focus", slug: "super-focus" },
            { name: "Super Omega-3", slug: "super-omega-3" }
          ]}
        />
        
        <BenefitSection 
          title="Santé cardiovasculaire"
          subtitle="Prenez soin de votre cœur"
          description="La santé cardiaque est fondamentale pour une vie longue et active. Nos formules cardiovasculaires contiennent des ingrédients comme le resvératrol, la coenzyme Q10 et des acides gras essentiels qui soutiennent la fonction cardiaque, la circulation sanguine et des niveaux de cholestérol sains."
          image="/lovable-uploads/380b2546-be66-4e41-babf-1051a906c648.png"
          icon={<Heart className="h-6 w-6" />}
          color="red"
          direction="right"
          products={[
            { name: "Resveratrol", slug: "resveratrol" },
            { name: "Super Omega-3", slug: "super-omega-3" }
          ]}
        />
        
        <BenefitSection 
          title="Détoxification naturelle"
          subtitle="Purifiez votre corps"
          description="Notre environnement moderne nous expose à de nombreuses toxines. Nos formules de détoxification contiennent des ingrédients comme le chardon-Marie, l'artichaut et le brocoli qui soutiennent les fonctions naturelles de détoxification du foie et d'autres organes, aidant à éliminer les toxines et à maintenir un corps plus sain."
          image="/lovable-uploads/5dc5191b-3ac9-4e43-93d3-7925f94163a2.png"
          icon={<Leaf className="h-6 w-6" />}
          color="green"
          direction="left"
          products={[
            { name: "Colon Detox", slug: "colon-detox" },
            { name: "Liver Care", slug: "liver-care" }
          ]}
        />
        
        <BenefitSection 
          title="Hydratation et vitalité"
          subtitle="Retrouvez toute votre énergie"
          description="Une bonne hydratation et un équilibre électrolytique sont essentiels pour l'énergie et la vitalité. Nos compléments contiennent des vitamines du groupe B, du magnésium et d'autres nutriments qui aident à combattre la fatigue, à soutenir le métabolisme énergétique et à maintenir une hydratation optimale à l'échelle cellulaire."
          image="/lovable-uploads/80e3326f-6c36-419a-85c8-441ad92554ce.png"
          icon={<Droplets className="h-6 w-6" />}
          color="orange"
          direction="right"
          products={[
            { name: "Liver Care", slug: "liver-care" },
            { name: "Muscle-Bone Care", slug: "muscle-bone-care" }
          ]}
        />
        
        <BenefitSection 
          title="Performance et récupération"
          subtitle="Optimisez votre condition physique"
          description="Pour les personnes actives, la performance et la récupération sont cruciales. Nos formules contiennent des protéines, des acides aminés et des antioxydants qui aident à soutenir la force musculaire, à accélérer la récupération après l'exercice et à améliorer l'endurance générale."
          image="/lovable-uploads/84a7932a-61c0-4d27-a0c3-1c8879a462c1.png"
          icon={<Battery className="h-6 w-6" />}
          color="black"
          direction="left"
          products={[
            { name: "Andro-T", slug: "andro-t" },
            { name: "Muscle-Bone Care", slug: "muscle-bone-care" }
          ]}
        />
        
        {/* Appel à l'action */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Prêt à améliorer votre santé ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Explorez notre gamme complète de compléments alimentaires de haute qualité 
                et trouvez les solutions qui correspondent à vos besoins spécifiques.
              </p>
              <Button size="lg" asChild className="mr-4">
                <Link to="/produits">
                  Voir tous les produits
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">
                  Nous contacter
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

function BenefitSection({ title, subtitle, description, image, icon, color, direction = 'left', products }: BenefitSectionProps) {
  const isLeftAligned = direction === 'left';
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isLeftAligned ? '' : 'lg:flex-row-reverse'}`}>
          <div className={`order-2 ${isLeftAligned ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className={`inline-flex items-center space-x-2 bg-product-${color}/10 rounded-full px-4 py-2 mb-4`}>
              {icon}
              <span className={`text-sm font-medium text-product-${color}`}>{subtitle}</span>
            </div>
            <h2 className="text-3xl font-display font-bold mb-4">{title}</h2>
            <p className="text-muted-foreground mb-6">{description}</p>
            
            <h4 className="font-medium mb-3">Produits recommandés:</h4>
            <ul className="space-y-2 mb-6">
              {products.map((product, index) => (
                <li key={index} className="flex items-center">
                  <div className={`h-2 w-2 rounded-full bg-product-${color} mr-2`}></div>
                  <Link to={`/produits/${product.slug}`} className="hover:text-primary transition-colors">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <Button asChild>
              <Link to={`/produits/${products[0].slug}`}>
                Découvrir {products[0].name}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className={`order-1 ${isLeftAligned ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-sm flex items-center justify-center">
              <div className="relative w-full max-w-sm mx-auto">
                <div className={`absolute inset-0 bg-product-${color}/5 rounded-full blur-3xl`}></div>
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-auto object-contain relative z-10 animate-float"
                  style={{ animationDuration: '6s' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator className="mt-12 container mx-auto" />
    </section>
  );
}

export default Benefits;
