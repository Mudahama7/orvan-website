import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Archive, HardDrive } from "lucide-react";
import heroImg from "@/assets/service-archiving.jpg";

export default function ArchivingPage() {
  const { lang, t } = useLanguage();
  const sections = [
    { icon: Archive, titleEn: "Physical Archiving", titleFr: "Archivage Physique", descEn: "Secure physical document storage, cataloging, and retrieval systems for large organizations. We handle the entire lifecycle of your paper documents with indexed shelving and climate-controlled storage.", descFr: "Stockage sécurisé de documents physiques, catalogage et systèmes de récupération pour les grandes organisations. Nous gérons le cycle de vie complet de vos documents papier." },
    { icon: HardDrive, titleEn: "Electronic Archiving", titleFr: "Archivage Électronique", descEn: "Digital document management systems with OCR scanning, cloud backup, and searchable databases. Transform your paper archives into secure, easily accessible digital assets.", descFr: "Systèmes de gestion documentaire numérique avec numérisation OCR, sauvegarde cloud et bases de données consultables. Transformez vos archives papier en actifs numériques sécurisés." },
  ];

  return (
    <PageLayout title={t("nav.archiving")} subtitle={t("services.archiving.desc")} heroImage={heroImg}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {sections.map((s, i) => (
          <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="inline-flex p-3 rounded-lg bg-foreground text-primary-foreground mb-5">
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
