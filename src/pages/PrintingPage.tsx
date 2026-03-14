import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Printer, Palette, Layers, Stamp, BookOpen } from "lucide-react";
import heroImg from "@/assets/service-printing.jpg";

const services = [
  { icon: Palette, titleEn: "Graphic Design", titleFr: "Design Graphique", descEn: "Professional visual identity creation, brochures, flyers, and marketing materials.", descFr: "Création d'identité visuelle professionnelle, brochures, flyers et supports marketing." },
  { icon: Printer, titleEn: "Digital Printing", titleFr: "Impression Numérique", descEn: "High-quality digital printing for small to medium print runs with fast turnaround.", descFr: "Impression numérique haute qualité pour petits et moyens tirages avec un délai rapide." },
  { icon: Layers, titleEn: "Aluminum Printing", titleFr: "Impression Aluminium", descEn: "Durable aluminum plate printing for signage, plaques, and industrial applications.", descFr: "Impression sur plaques aluminium pour signalétique et applications industrielles." },
  { icon: Stamp, titleEn: "Branding", titleFr: "Image de Marque", descEn: "Complete branding solutions including logos, business cards, and corporate stationery.", descFr: "Solutions de branding complètes : logos, cartes de visite et papeterie d'entreprise." },
  { icon: BookOpen, titleEn: "Offset Printing", titleFr: "Impression Offset", descEn: "Large-volume offset printing for books, newspapers, and high-volume publications.", descFr: "Impression offset grand volume pour livres, journaux et publications." },
];

export default function PrintingPage() {
  const { lang, t } = useLanguage();
  return (
    <PageLayout title={t("nav.printing")} subtitle={t("services.printing.desc")} heroImage={heroImg}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="inline-flex p-3 rounded-lg bg-primary text-primary-foreground mb-5">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{lang === "en" ? s.titleEn : s.titleFr}</h3>
            <p className="text-muted-foreground leading-relaxed">{lang === "en" ? s.descEn : s.descFr}</p>
          </motion.article>
        ))}
      </div>
    </PageLayout>
  );
}
