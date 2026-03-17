import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "fr";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Nav
  "nav.home": { en: "Home", fr: "Accueil" },
  "nav.about": { en: "About Us", fr: "À propos" },
  "nav.services": { en: "Services", fr: "Services" },
  "nav.achievements": { en: "Achievements", fr: "Réalisations" },
  "nav.equipment": { en: "Equipment", fr: "Équipements" },
  "nav.faq": { en: "FAQ", fr: "FAQ" },
  "nav.contact": { en: "Contact", fr: "Contact" },
  "nav.history": { en: "Our History", fr: "Notre Histoire" },
  "nav.values": { en: "Our Values", fr: "Nos Valeurs" },
  "nav.printing": { en: "Printing", fr: "Imprimerie" },
  "nav.stationery": { en: "Stationery", fr: "Papeterie" },
  "nav.nfi": { en: "NFI Kits", fr: "Kits NFI" },
  "nav.archiving": { en: "Data Archiving", fr: "Archivage" },
  "nav.webdev": { en: "Web Development", fr: "Développement Web" },
  "nav.policy": { en: "Policy", fr: "Politique" },

  // Hero
  "hero.title": { en: "Printing, Stationery & Humanitarian Solutions", fr: "Imprimerie, Fournitures & Solutions Humanitaires" },
  "hero.subtitle": { en: "Empowering communities through quality printing, stationery supplies, and essential humanitarian logistics across the Democratic Republic of Congo.", fr: "Renforcer les communautés grâce à l'imprimerie de qualité, les fournitures de bureau et la logistique humanitaire à travers la RDC." },
  "hero.cta": { en: "Discover Our Services", fr: "Découvrir Nos Services" },
  "hero.contact": { en: "Get in Touch", fr: "Nous Contacter" },

  // About
  "about.title": { en: "About ORVAN", fr: "À propos d'ORVAN" },
  "about.subtitle": { en: "A legacy of commitment, quality, and social impact since our founding.", fr: "Un héritage d'engagement, de qualité et d'impact social depuis notre création." },
  "about.history": { en: "Our History", fr: "Notre Histoire" },
  "about.values": { en: "Our Values", fr: "Nos Valeurs" },
  "values.commitment": { en: "Commitment", fr: "Engagement" },
  "values.commitment.desc": { en: "Dedicated to delivering excellence in every project we undertake for our partners and communities.", fr: "Dédiés à l'excellence dans chaque projet que nous entreprenons pour nos partenaires et communautés." },
  "values.quality": { en: "Quality", fr: "Qualité" },
  "values.quality.desc": { en: "Using state-of-the-art equipment and materials to ensure the highest standards in all our deliverables.", fr: "Utilisant des équipements et matériaux de pointe pour garantir les plus hauts standards." },
  "values.impact": { en: "Social Impact", fr: "Impact Social" },
  "values.impact.desc": { en: "Creating meaningful change through humanitarian logistics and community-focused initiatives.", fr: "Créer un changement significatif à travers la logistique humanitaire et les initiatives communautaires." },

  // Services
  "services.title": { en: "Our Services", fr: "Nos Services" },
  "services.subtitle": { en: "Comprehensive solutions for printing, stationery, humanitarian logistics, and digital transformation.", fr: "Des solutions complètes pour l'imprimerie, les fournitures, la logistique humanitaire et la transformation numérique." },
  "services.printing.desc": { en: "Graphic design, digital & offset printing, aluminum printing, and full branding solutions.", fr: "Design graphique, impression numérique & offset, impression aluminium et solutions de branding complètes." },
  "services.stationery.desc": { en: "Ergonomic desk organizers, professional notebooks, eco-friendly pens, premium paper, and academic kits.", fr: "Organiseurs de bureau ergonomiques, cahiers professionnels, stylos écologiques, papier premium et kits scolaires." },
  "services.nfi.desc": { en: "Shovels, tarpaulins, blankets, kitchen sets, hygiene kits, water kits, and solar lamps for humanitarian operations.", fr: "Pelles, bâches, couvertures, kits cuisine, kits hygiène, kits eau et lampes solaires pour les opérations humanitaires." },
  "services.archiving.desc": { en: "Physical and electronic archiving solutions for large enterprises and organizations.", fr: "Solutions d'archivage physique et électronique pour les grandes entreprises et organisations." },
  "services.webdev.desc": { en: "Modern web design and development services tailored to your organization's needs.", fr: "Services de conception et développement web modernes adaptés aux besoins de votre organisation." },

  // Partners
  "partners.title": { en: "Our Partners", fr: "Nos Partenaires" },
  "partners.subtitle": { en: "Trusted by leading international organizations and NGOs.", fr: "La confiance des grandes organisations internationales et ONG." },

  // Contact
  "contact.title": { en: "Contact Us", fr: "Contactez-nous" },
  "contact.subtitle": { en: "Get in touch with our team in Goma, DRC.", fr: "Contactez notre équipe à Goma, RDC." },
  "contact.name": { en: "Full Name", fr: "Nom complet" },
  "contact.email": { en: "Email Address", fr: "Adresse e-mail" },
  "contact.message": { en: "Your Message", fr: "Votre message" },
  "contact.send": { en: "Send Message", fr: "Envoyer le message" },
  "contact.address": { en: "Goma, North Kivu, DRC", fr: "Goma, Nord-Kivu, RDC" },

  // Footer
  "footer.rights": { en: "All rights reserved.", fr: "Tous droits réservés." },
  "footer.tagline": { en: "Printing, Stationery & Humanitarian Solutions", fr: "Imprimerie, Fournitures & Solutions Humanitaires" },

  // Achievements
  "achievements.title": { en: "Our Achievements", fr: "Nos Réalisations" },
  "achievements.subtitle": { en: "A portfolio of impactful projects delivered for international organizations.", fr: "Un portfolio de projets impactants réalisés pour des organisations internationales." },

  // Equipment
  "equipment.title": { en: "Our Equipment", fr: "Nos Équipements" },
  "equipment.subtitle": { en: "State-of-the-art printing machines and logistics fleet.", fr: "Machines d'impression de pointe et flotte logistique." },

  // FAQ
  "faq.title": { en: "Frequently Asked Questions", fr: "Questions Fréquentes" },
  "faq.subtitle": { en: "Find answers to common questions about our services.", fr: "Trouvez les réponses aux questions courantes sur nos services." },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
