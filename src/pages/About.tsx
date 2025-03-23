
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, 
  FlaskConical, 
  HeartHandshake, 
  Leaf, 
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import Newsletter from '@/components/Newsletter';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* En-tête */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="pill bg-primary/10 text-primary mb-4">Notre histoire</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                À propos d'OQATA Wellness
              </h1>
              <p className="text-lg text-muted-foreground">
                Découvrez notre engagement envers votre bien-être et notre mission
                de vous proposer les meilleurs compléments alimentaires naturels.
              </p>
            </div>
          </div>
        </section>
        
        {/* Notre histoire */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm font-medium text-primary">Notre parcours</span>
                <h2 className="text-3xl font-display font-bold mt-2 mb-6">
                  Une histoire née de la passion pour le bien-être naturel
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    OQATA Wellness Solutions est né en 2010 d'une vision simple mais puissante : rendre accessibles des compléments alimentaires de qualité supérieure, formulés selon les plus hauts standards scientifiques, tout en respectant notre engagement envers des ingrédients naturels et durables.
                  </p>
                  <p>
                    Fondée par une équipe de passionnés de santé naturelle et de scientifiques, notre entreprise s'est construite sur la conviction que la nature offre les meilleurs outils pour soutenir notre bien-être, lorsqu'ils sont correctement formulés et dosés.
                  </p>
                  <p>
                    Au fil des années, nous avons développé une gamme de produits répondant aux besoins spécifiques de nos clients, en nous appuyant sur les dernières recherches scientifiques et en collaborant avec des experts en nutrition, médecine préventive et biochimie.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-64 relative rounded-2xl overflow-hidden bg-white p-8 shadow-lg transform translate-y-8 animate-float" style={{ animationDelay: '0.5s' }}>
                    <img
                      src="/lovable-uploads/5dc5191b-3ac9-4e43-93d3-7925f94163a2.png"
                      alt="Colon Detox"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="h-48 relative rounded-2xl overflow-hidden bg-white p-6 shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                    <img
                      src="/lovable-uploads/80e3326f-6c36-419a-85c8-441ad92554ce.png"
                      alt="Liver Care"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="h-48 relative rounded-2xl overflow-hidden bg-white p-6 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                    <img
                      src="/lovable-uploads/a622272a-815d-4504-a6b3-a1e576272c8c.png"
                      alt="Hair Skin Nails"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="h-64 relative rounded-2xl overflow-hidden bg-white p-8 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                    <img
                      src="/lovable-uploads/57f25eba-4562-4e00-8ec9-0ceb45348bc7.png"
                      alt="Super Omega 3"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Nos valeurs */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="pill bg-primary/10 text-primary mb-4">Nos valeurs</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ce qui nous définit
              </h2>
              <p className="text-muted-foreground">
                Chez OQATA, nous sommes guidés par des valeurs fondamentales qui orientent chacune de nos décisions
                et façonnent nos relations avec nos clients, partenaires et la planète.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ValueCard 
                icon={<Leaf className="h-6 w-6" />}
                title="Naturalité"
                description="Nous privilégions des ingrédients naturels, sans OGM, et cherchons toujours à minimiser les additifs dans nos formulations."
                color="green"
              />
              <ValueCard 
                icon={<FlaskConical className="h-6 w-6" />}
                title="Rigueur scientifique"
                description="Chaque formule est développée selon les dernières avancées scientifiques et testée pour garantir son efficacité et sa sécurité."
                color="blue"
              />
              <ValueCard 
                icon={<HeartHandshake className="h-6 w-6" />}
                title="Transparence"
                description="Nous communiquons clairement sur nos ingrédients, nos processus de fabrication et l'origine de nos matières premières."
                color="red"
              />
              <ValueCard 
                icon={<Users className="h-6 w-6" />}
                title="Proximité client"
                description="Nous écoutons activement nos clients et développons des produits répondant à leurs besoins réels en matière de santé."
                color="purple"
              />
              <ValueCard 
                icon={<GraduationCap className="h-6 w-6" />}
                title="Innovation continue"
                description="Nous investissons constamment dans la recherche pour améliorer nos formules et développer de nouvelles solutions."
                color="orange"
              />
              <ValueCard 
                icon={<Leaf className="h-6 w-6" />}
                title="Durabilité"
                description="Nous nous engageons à réduire notre impact environnemental à chaque étape de notre chaîne de production."
                color="black"
              />
            </div>
          </div>
        </section>
        
        {/* Notre équipe */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="pill bg-primary/10 text-primary mb-4">Notre équipe</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Les experts derrière nos produits
              </h2>
              <p className="text-muted-foreground">
                Notre équipe pluridisciplinaire réunit des experts passionnés qui partagent une mission commune :
                vous aider à atteindre votre plein potentiel de santé grâce à des solutions naturelles efficaces.
              </p>
            </div>
          </div>
        </section>
        
        {/* Appel à l'action */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold mb-6">
                Prêt à découvrir nos produits ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Explorez notre gamme complète de compléments alimentaires naturels et 
                trouvez les solutions qui correspondent à vos besoins.
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
        
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

function ValueCard({ icon, title, description, color }: ValueCardProps) {
  return (
    <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-product-${color}/10`}>
        <div className={`text-product-${color}`}>{icon}</div>
      </div>
      <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default About;
