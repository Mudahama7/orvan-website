import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const partners = [
  "/patners_logo/fao.webp", "/patners_logo/cordaid.png", 
  "/patners_logo/medair.svg", "/patners_logo/adra.jpg", 
  "/patners_logo/hi.jpg", "/patners_logo/unhcr.png",
  "/patners_logo/unicef.png", "/patners_logo/who.webp", 
  "/patners_logo/undp.jpg", "/patners_logo/world_vision.png",
];

export default function PartnersSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 border-t border-border" aria-labelledby="partners-heading">
      <div className="container mx-auto px-4 text-center mb-10">
        <h2 id="partners-heading" className="text-2xl font-bold text-foreground mb-2">
          {t("partners.title")}
        </h2>
        <p className="text-muted-foreground">{t("partners.subtitle")}</p>
      </div>

      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
          style={{ width: "fit-content" }}
        >
          {/* On double la liste pour le défilement infini sans coupure */}
          {[...partners, ...partners].map((logoPath, i) => (
            <div
              key={`${logoPath}-${i}`}
              className="flex-shrink-0 flex items-center justify-center px-6 py-4 bg-white dark:bg-muted/30 rounded-lg border border-border min-w-[180px] h-[100px]"
            >
              <img 
                src={logoPath} 
                alt="Partner Logo" 
                className="max-w-full max-h-full object-contain pointer-events-none"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}