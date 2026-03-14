import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Shovel, Home, Flame, UtensilsCrossed, Droplets, Sun } from "lucide-react";
import heroImg from "@/assets/service-nfi.jpg";

const items = [
  { icon: Shovel, titleEn: "Shovels", titleFr: "Pelles", descEn: "Durable shovels for emergency shelter construction and site preparation.", descFr: "Pelles durables pour la construction d'abris d'urgence et la préparation de sites." },
  { icon: Home, titleEn: "Tarpaulins", titleFr: "Bâches", descEn: "Heavy-duty waterproof tarpaulins for temporary shelter solutions.", descFr: "Bâches imperméables résistantes pour les solutions d'abris temporaires." },
  { icon: Flame, titleEn: "Blankets", titleFr: "Couvertures", descEn: "Thermal blankets for cold weather emergency response.", descFr: "Couvertures thermiques pour les interventions d'urgence par temps froid." },
  { icon: UtensilsCrossed, titleEn: "Kitchen Sets", titleFr: "Kits Cuisine", descEn: "Complete cooking sets for displaced families and emergency camps.", descFr: "Ensembles de cuisine complets pour les familles déplacées et les camps d'urgence." },
  { icon: Droplets, titleEn: "Hygiene & Water Kits", titleFr: "Kits Hygiène & Eau", descEn: "Essential hygiene and water purification kits for crisis response.", descFr: "Kits essentiels d'hygiène et de purification d'eau pour les interventions de crise." },
  { icon: Sun, titleEn: "Solar Lamps", titleFr: "Lampes Solaires", descEn: "Portable solar-powered lamps for off-grid communities.", descFr: "Lampes solaires portables pour les communautés hors réseau." },
];

export default function NFIPage() {
  const { lang, t } = useLanguage();
  return (
    <PageLayout title={t("nav.nfi")} subtitle={t("services.nfi.desc")} heroImage={heroImg}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="inline-flex p-3 rounded-lg bg-secondary text-secondary-foreground mb-5">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{lang === "en" ? item.titleEn : item.titleFr}</h3>
            <p className="text-muted-foreground leading-relaxed">{lang === "en" ? item.descEn : item.descFr}</p>
          </motion.article>
        ))}
      </div>
    </PageLayout>
  );
}
