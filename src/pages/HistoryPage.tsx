import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const timeline = [
  { yearEn: "Foundation", yearFr: "Fondation", descEn: "ORVAN was founded in Goma, DRC, with a mission to provide quality printing and stationery services to the local community and humanitarian organizations.", descFr: "ORVAN a été fondé à Goma, RDC, avec la mission de fournir des services d'impression et de papeterie de qualité à la communauté locale et aux organisations humanitaires." },
  { yearEn: "First Major Contract", yearFr: "Premier Grand Contrat", descEn: "Secured our first major contract with an international NGO, providing essential printed materials for humanitarian operations in eastern DRC.", descFr: "Obtention de notre premier grand contrat avec une ONG internationale pour les opérations humanitaires dans l'est de la RDC." },
  { yearEn: "Expansion", yearFr: "Expansion", descEn: "Expanded operations to include NFI kit procurement and distribution, becoming a key logistics partner for humanitarian agencies.", descFr: "Expansion des opérations pour inclure l'approvisionnement et la distribution de kits NFI." },
  { yearEn: "Digital Transformation", yearFr: "Transformation Numérique", descEn: "Invested in state-of-the-art digital printing equipment and launched data archiving services for enterprise clients.", descFr: "Investissement dans des équipements d'impression numérique de pointe et lancement des services d'archivage de données." },
  { yearEn: "Today", yearFr: "Aujourd'hui", descEn: "ORVAN is a trusted partner for dozens of international organizations, delivering comprehensive printing, stationery, and humanitarian logistics solutions.", descFr: "ORVAN est un partenaire de confiance pour des dizaines d'organisations internationales." },
];

export default function HistoryPage() {
  const { lang, t } = useLanguage();
  return (
    <PageLayout title={t("nav.history")} subtitle={t("about.subtitle")}>
      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            <div className="hidden md:block w-1/2" />
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 mt-1.5 z-10" />
            <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-primary text-lg mb-2">{lang === "en" ? item.yearEn : item.yearFr}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{lang === "en" ? item.descEn : item.descFr}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
