
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  image?: string;
  content: string;
  rating: number;
  product: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie L.",
    title: "Cliente fidèle",
    content: "Le Trimtone Enhancer a complètement transformé ma routine de gestion du poids. J'ai plus d'énergie et je me sens plus légère après un mois d'utilisation!",
    rating: 5,
    product: "Trimtone Enhancer"
  },
  {
    id: 2,
    name: "Thomas D.",
    title: "Sportif amateur",
    content: "Depuis que j'ai commencé à prendre Super Focus, ma concentration pendant mes entraînements s'est nettement améliorée. Je recommande vivement!",
    rating: 4,
    product: "Super Focus"
  },
  {
    id: 3,
    name: "Sophie M.",
    title: "Naturopathe",
    content: "En tant que professionnelle de la santé, je suis exigeante sur la qualité des compléments. Les produits OQATA sont irréprochables et efficaces.",
    rating: 5,
    product: "Resveratrol"
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="pill bg-primary/10 text-primary mb-4">Témoignages</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ce que nos clients disent
          </h2>
          <p className="text-muted-foreground">
            Découvrez les expériences de personnes qui ont intégré nos produits dans leur quotidien
            et constaté des résultats positifs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id}
              testimonial={testimonial}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  style?: React.CSSProperties;
}

function TestimonialCard({ testimonial, className, style }: TestimonialCardProps) {
  return (
    <div 
      className={cn(
        "p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all relative",
        className
      )}
      style={style}
    >
      <Quote className="absolute top-6 right-6 h-12 w-12 text-gray-100 rotate-180" />
      
      <div className="mb-6 relative z-10">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i}
              className={cn(
                "h-5 w-5",
                i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              )}
            />
          ))}
        </div>
        <p className="text-sm text-primary font-medium mt-2">Pour {testimonial.product}</p>
      </div>
      
      <p className="text-muted-foreground mb-6 relative z-10">"{testimonial.content}"</p>
      
      <div className="flex items-center">
        <Avatar className="h-12 w-12 border-2 border-primary/10">
          <AvatarFallback className="bg-primary/5 text-primary">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
          {testimonial.image && (
            <AvatarImage src={testimonial.image} alt={testimonial.name} />
          )}
        </Avatar>
        <div className="ml-4">
          <h4 className="font-medium">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
}
