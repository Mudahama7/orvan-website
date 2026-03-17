import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Shield, Eye, Scale, FileText } from "lucide-react";

const sections = [
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    titleEn: "Ethical Commitment",
    titleFr: "Engagement Éthique",
    contentEn: "ORVAN operates with the highest standards of integrity. We strictly adhere to local and international regulations, ensuring transparency in all our procurement and printing processes.",
    contentFr: "ORVAN opère selon les normes d'intégrité les plus élevées. Nous adhérons strictement aux réglementations locales et internationales, garantissant la transparence de tous nos processus."
  },
  {
    icon: <Eye className="w-6 h-6 text-primary" />,
    titleEn: "Privacy Policy",
    titleFr: "Confidentialité",
    contentEn: "We protect the data of our partners and clients. Any information shared for digital archiving or printing services is handled with strict confidentiality protocols.",
    contentFr: "Nous protégeons les données de nos partenaires. Toute information partagée pour l'archivage numérique ou l'impression est traitée selon des protocoles de confidentialité stricts."
  },
  {
    icon: <Scale className="w-6 h-6 text-primary" />,
    titleEn: "Compliance",
    titleFr: "Conformité",
    contentEn: "Our logistics and NFI kit distribution services follow international humanitarian standards, ensuring fair and equitable distribution to communities in need.",
    contentFr: "Nos services de logistique et de distribution de kits NFI suivent les normes humanitaires internationales, assurant une distribution juste et équitable."
  },
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    titleEn: "Terms of Service",
    titleFr: "Conditions de Service",
    contentEn: "Every project is governed by clear contractual terms, ensuring deadlines, quality benchmarks, and mutual responsibilities are respected.",
    contentFr: "Chaque projet est régi par des clauses contractuelles claires, garantissant le respect des délais, de la qualité et des responsabilités mutuelles."
  }
];

export default function PolicyPage() {
  const { lang, t } = useLanguage();

  return (
    <PageLayout 
      title={lang === "en" ? "Our Policies" : "Nos Politiques"} 
      subtitle={lang === "en" ? "Integrity and transparency at the core of ORVAN" : "L'intégrité et la transparence au cœur d'ORVAN"}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                {section.icon}
              </div>
              <h3 className="font-bold text-xl mb-4 text-foreground">
                {lang === "en" ? section.titleEn : section.titleFr}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {lang === "en" ? section.contentEn : section.contentFr}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Note de bas de page */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10 text-center"
        >
          <p className="text-sm text-muted-foreground italic">
            {lang === "en" 
              ? "For any specific legal inquiries, please contact our legal department at contact@orvan.com" 
              : "Pour toute demande juridique spécifique, veuillez contacter notre département légal à contact@orvan.com"}
          </p>
        </motion.div>
      </div>
    </PageLayout>
  );
}