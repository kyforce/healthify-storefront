
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle2
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Formulaire incomplet",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulation d'envoi d'email
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les meilleurs délais.",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* En-tête */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="pill bg-primary/10 text-primary mb-4">Contactez-nous</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Nous sommes à votre écoute
              </h1>
              <p className="text-lg text-muted-foreground">
                Une question sur nos produits ? Besoin de conseils personnalisés ?
                Notre équipe est là pour vous aider et vous répondre rapidement.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contenu principal */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Informations de contact */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Nos informations</h2>
                <div className="space-y-8">
                  <ContactInfo 
                    icon={<MapPin className="h-5 w-5" />}
                    title="Adresse"
                    details={[
                      "123 Rue Santé",
                      "75000 Paris, France"
                    ]}
                  />
                  
                  <ContactInfo 
                    icon={<Phone className="h-5 w-5" />}
                    title="Téléphone"
                    details={[
                      "+33 1 23 45 67 89",
                      "+33 1 23 45 67 90"
                    ]}
                  />
                  
                  <ContactInfo 
                    icon={<Mail className="h-5 w-5" />}
                    title="Email"
                    details={[
                      "contact@oqata-wellness.com",
                      "support@oqata-wellness.com"
                    ]}
                  />
                  
                  <ContactInfo 
                    icon={<Clock className="h-5 w-5" />}
                    title="Horaires"
                    details={[
                      "Lundi - Vendredi: 9h00 - 18h00",
                      "Samedi: 10h00 - 15h00",
                      "Dimanche: Fermé"
                    ]}
                  />
                </div>
                
                {/* Carte */}
                <div className="mt-8 rounded-xl bg-gray-200 h-[300px] w-full flex items-center justify-center">
                  <p className="text-muted-foreground">Carte interactive</p>
                </div>
              </div>
              
              {/* Formulaire de contact */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Envoyez-nous un message</h2>
                
                {isSubmitted ? (
                  <div className="bg-green-50 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message envoyé !</h3>
                    <p className="text-muted-foreground mb-6">
                      Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.
                    </p>
                    <Button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          subject: '',
                          message: ''
                        });
                      }}
                    >
                      Envoyer un autre message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Nom complet <span className="text-primary">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Votre nom"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Adresse email <span className="text-primary">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="votre.email@exemple.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Sujet
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Sujet de votre message"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message <span className="text-primary">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Votre message..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Envoi en cours..."
                      ) : (
                        <>
                          Envoyer le message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      En soumettant ce formulaire, vous acceptez notre 
                      <a href="/politique-confidentialite" className="underline hover:text-primary ml-1">politique de confidentialité</a>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ rapide */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-display font-bold mb-8 text-center">Questions fréquentes</h2>
              
              <div className="space-y-6">
                <FaqItem 
                  question="Quels sont les délais de livraison ?"
                  answer="Nos délais de livraison sont généralement de 3 à 5 jours ouvrables pour les destinations nationales, et de 7 à 14 jours pour les livraisons internationales."
                />
                
                <FaqItem 
                  question="Comment suivre ma commande ?"
                  answer="Une fois votre commande expédiée, vous recevrez un email contenant un numéro de suivi et un lien pour suivre votre colis en temps réel."
                />
                
                <FaqItem 
                  question="Proposez-vous des échantillons gratuits ?"
                  answer="Oui, pour certains produits, nous proposons des échantillons gratuits. Contactez notre service client pour plus d'informations ou consultez notre page promotions."
                />
                
                <FaqItem 
                  question="Comment puis-je retourner un produit ?"
                  answer="Si vous n'êtes pas satisfait de votre achat, vous pouvez retourner le produit dans les 30 jours suivant la réception pour un remboursement complet. Consultez notre politique de retour pour plus de détails."
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

function ContactInfo({ icon, title, details }: ContactInfoProps) {
  return (
    <div className="flex">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
        <div className="text-primary">{icon}</div>
      </div>
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <div className="space-y-1">
          {details.map((detail, index) => (
            <p key={index} className="text-muted-foreground">{detail}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

interface FaqItemProps {
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <div className="bg-white shadow-sm rounded-xl p-6">
      <h3 className="font-semibold mb-2">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  );
}

export default Contact;
