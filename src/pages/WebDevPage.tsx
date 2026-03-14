import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Code, Globe, Smartphone, Gauge } from "lucide-react";

const features = [
  { icon: Globe, titleEn: "Website Design", titleFr: "Conception de Sites Web", descEn: "Custom, responsive websites tailored to your organization's needs and brand identity.", descFr: "Sites web personnalisés et responsifs adaptés à votre organisation." },
  { icon: Code, titleEn: "Web Applications", titleFr: "Applications Web", descEn: "Full-stack web application development with modern frameworks and scalable architecture.", descFr: "Développement d'applications web full-stack avec des frameworks modernes." },
  { icon: Smartphone, titleEn: "Mobile-First Design", titleFr: "Design Mobile-First", descEn: "Mobile-optimized interfaces ensuring seamless experience across all devices.", descFr: "Interfaces optimisées pour mobile garantissant une expérience fluide sur tous les appareils." },
  { icon: Gauge, titleEn: "Performance & SEO", titleFr: "Performance & SEO", descEn: "Optimized for speed and search engine visibility to maximize your online presence.", descFr: "Optimisé pour la vitesse et la visibilité sur les moteurs de recherche." },
];

export default function WebDevPage() {
  const { lang, t } = useLanguage();
  return (
    <PageLayout title={t("nav.webdev")} subtitle={t("services.webdev.desc")}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
          >
            <div className="inline-flex p-3 rounded-lg bg-primary text-primary-foreground mb-5">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{lang === "en" ? f.titleEn : f.titleFr}</h3>
            <p className="text-muted-foreground leading-relaxed">{lang === "en" ? f.descEn : f.descFr}</p>
          </motion.article>
        ))}
      </div>
    </PageLayout>
  );
}
