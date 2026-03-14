import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";

const categories = { en: ["All", "Printing", "NFI Kits", "Stationery", "Archiving"], fr: ["Tous", "Imprimerie", "Kits NFI", "Fournitures", "Archivage"] };

const projects = [
  { catEn: "Printing", catFr: "Imprimerie", titleEn: "UNHCR Visibility Materials", titleFr: "Matériaux de Visibilité UNHCR", descEn: "Large-scale printing of banners, reports, and visibility materials for UNHCR operations.", descFr: "Impression à grande échelle de bannières, rapports et matériaux de visibilité pour le HCR." },
  { catEn: "NFI Kits", catFr: "Kits NFI", titleEn: "Emergency Response Kits — Medair", titleFr: "Kits d'Urgence — Medair", descEn: "Procurement and distribution of 5,000 NFI kits for displaced families.", descFr: "Approvisionnement et distribution de 5 000 kits NFI pour les familles déplacées." },
  { catEn: "Stationery", catFr: "Fournitures", titleEn: "Academic Supplies for FAO", titleFr: "Fournitures Scolaires pour la FAO", descEn: "Supply of academic kits and stationery for FAO-supported schools.", descFr: "Fourniture de kits scolaires et de papeterie pour les écoles soutenues par la FAO." },
  { catEn: "Printing", catFr: "Imprimerie", titleEn: "Cordaid Annual Report", titleFr: "Rapport Annuel Cordaid", descEn: "Design and offset printing of Cordaid's annual impact report.", descFr: "Conception et impression offset du rapport annuel de Cordaid." },
  { catEn: "Archiving", catFr: "Archivage", titleEn: "UNDP Document Digitization", titleFr: "Numérisation Documents PNUD", descEn: "Electronic archiving of 50,000+ documents for UNDP regional office.", descFr: "Archivage électronique de plus de 50 000 documents pour le bureau régional du PNUD." },
  { catEn: "NFI Kits", catFr: "Kits NFI", titleEn: "Solar Lamp Distribution — ADRA", titleFr: "Distribution Lampes Solaires — ADRA", descEn: "Procurement and distribution of solar lamps for off-grid communities.", descFr: "Approvisionnement et distribution de lampes solaires pour les communautés hors réseau." },
];

export default function AchievementsPage() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState("All");
  const cats = lang === "en" ? categories.en : categories.fr;

  const filtered = filter === "All" || filter === "Tous"
    ? projects
    : projects.filter(p => (lang === "en" ? p.catEn : p.catFr) === filter);

  return (
    <PageLayout title={t("achievements.title")} subtitle={t("achievements.subtitle")}>
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-primary/10"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filtered.map((p, i) => (
          <motion.article
            key={`${p.titleEn}-${filter}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                {lang === "en" ? p.catEn : p.catFr}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-foreground mb-2">{lang === "en" ? p.titleEn : p.titleFr}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{lang === "en" ? p.descEn : p.descFr}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </PageLayout>
  );
}
