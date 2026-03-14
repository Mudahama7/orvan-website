import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const partners = [
  "FAO", "Cordaid", "Medair", "ADRA", "Handicap International",
  "UNHCR", "UNICEF", "WHO", "UNDP", "World Vision",
];

export default function PartnersSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 border-t border-border" aria-labelledby="partners-heading">
      <div className="container mx-auto px-4 text-center mb-10">
        <h2 id="partners-heading" className="text-2xl font-bold text-foreground mb-2">{t("partners.title")}</h2>
        <p className="text-muted-foreground">{t("partners.subtitle")}</p>
      </div>

      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ width: "fit-content" }}
        >
          {[...partners, ...partners].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 px-6 py-4 bg-muted rounded-lg border border-border grayscale hover:grayscale-0 transition-all duration-300 cursor-default min-w-[150px] text-center"
            >
              <span className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">{name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
