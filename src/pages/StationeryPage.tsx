import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { BookOpen, PenTool, FileText, Backpack, Ruler } from "lucide-react";
import heroImg from "@/assets/service-stationery.jpg";

const products = [
  { icon: Ruler, titleEn: "Ergonomic Desk Organizers", titleFr: "Organiseurs de Bureau Ergonomiques", descEn: "High-quality desk organizers designed for professional environments.", descFr: "Organiseurs de bureau de haute qualité conçus pour les environnements professionnels." },
  { icon: BookOpen, titleEn: "Professional Notebooks", titleFr: "Cahiers Professionnels", descEn: "Premium bound notebooks for meetings, notes, and professional use.", descFr: "Cahiers reliés premium pour réunions, notes et usage professionnel." },
  { icon: PenTool, titleEn: "Eco-Friendly Pens", titleFr: "Stylos Écologiques", descEn: "Sustainable writing instruments made from recycled materials.", descFr: "Instruments d'écriture durables fabriqués à partir de matériaux recyclés." },
  { icon: FileText, titleEn: "Premium Paper Reams", titleFr: "Rames de Papier Premium", descEn: "High-grade paper for printing and documentation needs.", descFr: "Papier de haute qualité pour l'impression et la documentation." },
  { icon: Backpack, titleEn: "Academic Kits", titleFr: "Kits Scolaires", descEn: "Complete geometry sets, backpacks, and school supply kits.", descFr: "Kits complets de géométrie, sacs à dos et fournitures scolaires." },
];

export default function StationeryPage() {
  const { lang, t } = useLanguage();
  return (
    <PageLayout title={t("nav.stationery")} subtitle={t("services.stationery.desc")} heroImage={heroImg}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((p, i) => (
          <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="inline-flex p-3 rounded-lg bg-golden text-accent-foreground mb-5">
              <p.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{lang === "en" ? p.titleEn : p.titleFr}</h3>
            <p className="text-muted-foreground leading-relaxed">{lang === "en" ? p.descEn : p.descFr}</p>
          </motion.article>
        ))}
      </div>
    </PageLayout>
  );
}
