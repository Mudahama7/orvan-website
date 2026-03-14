import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Printer, Truck, Monitor, Cog } from "lucide-react";
import heroImg from "@/assets/hero-printing.jpg";

const equipment = [
  { icon: Printer, titleEn: "Konica Minolta Digital Press", titleFr: "Presse Numérique Konica Minolta", descEn: "High-speed digital printing with exceptional color accuracy.", descFr: "Impression numérique haute vitesse avec une précision des couleurs exceptionnelle." },
  { icon: Cog, titleEn: "Heidelberg Offset Press", titleFr: "Presse Offset Heidelberg", descEn: "Industrial-grade offset printing for large volume production.", descFr: "Impression offset de qualité industrielle pour la production en grand volume." },
  { icon: Monitor, titleEn: "Large Format Printers", titleFr: "Imprimantes Grand Format", descEn: "Wide-format printing for banners, posters, and signage.", descFr: "Impression grand format pour bannières, affiches et signalétique." },
  { icon: Truck, titleEn: "Logistics Fleet", titleFr: "Flotte Logistique", descEn: "Dedicated vehicles for timely delivery and distribution of NFI kits.", descFr: "Véhicules dédiés pour la livraison et distribution ponctuelle des kits NFI." },
];

export default function EquipmentPage() {
  const { lang, t } = useLanguage();
  return (
    <PageLayout title={t("equipment.title")} subtitle={t("equipment.subtitle")} heroImage={heroImg}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {equipment.map((e, i) => (
          <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-muted to-primary/10 flex items-center justify-center">
              <e.icon className="h-16 w-16 text-primary/40" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">{lang === "en" ? e.titleEn : e.titleFr}</h3>
              <p className="text-muted-foreground leading-relaxed">{lang === "en" ? e.descEn : e.descFr}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </PageLayout>
  );
}
