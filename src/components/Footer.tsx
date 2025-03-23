
import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* À propos */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold">À propos d'OQATA</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              OQATA Wellness Solutions propose des compléments alimentaires premium
              de qualité supérieure, conçus pour améliorer votre santé et votre
              bien-être général.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook size={18} />} label="Facebook" />
              <SocialLink href="#" icon={<Instagram size={18} />} label="Instagram" />
              <SocialLink href="#" icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href="#" icon={<Youtube size={18} />} label="Youtube" />
            </div>
          </div>

          {/* Liens rapides */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold">Liens rapides</h3>
            <ul className="space-y-2">
              <FooterLink to="/produits">Nos produits</FooterLink>
              <FooterLink to="/bienfaits">Bienfaits</FooterLink>
              <FooterLink to="/a-propos">Notre histoire</FooterLink>
              <FooterLink to="/contact">Contactez-nous</FooterLink>
              <FooterLink to="/mentions-legales">Mentions légales</FooterLink>
              <FooterLink to="/politique-confidentialite">Politique de confidentialité</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-gray-600">123 Rue Santé, 75000 Paris, France</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-gray-600">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-gray-600">contact@oqata-wellness.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold">Newsletter</h3>
            <p className="text-sm text-gray-600">
              Inscrivez-vous à notre newsletter pour recevoir nos offres spéciales et
              conseils santé.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Votre email"
                className="rounded-r-none"
              />
              <Button className="rounded-l-none" aria-label="S'inscrire">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {currentYear} OQATA Wellness Solutions. Tous droits réservés.</p>
          <p className="mt-2 md:mt-0">
            Site conçu avec <span className="text-red-500">♥</span> pour votre bien-être
          </p>
        </div>
      </div>
    </footer>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-primary hover:text-white"
    >
      {icon}
    </a>
  );
}

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

function FooterLink({ to, children }: FooterLinkProps) {
  return (
    <li>
      <Link
        to={to}
        className="text-sm text-gray-600 hover:text-primary transition-colors flex items-center"
      >
        <ArrowRight className="mr-1 h-3 w-3" />
        {children}
      </Link>
    </li>
  );
}
