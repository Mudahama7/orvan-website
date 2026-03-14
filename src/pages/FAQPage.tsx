import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { qEn: "What services does ORVAN provide?", qFr: "Quels services ORVAN fournit-il ?", aEn: "ORVAN provides printing (digital, offset, aluminum), stationery supplies, NFI humanitarian kits, data archiving (physical & electronic), and web development services.", aFr: "ORVAN fournit des services d'impression (numérique, offset, aluminium), des fournitures de bureau, des kits humanitaires NFI, de l'archivage de données et du développement web." },
  { qEn: "Where is ORVAN located?", qFr: "Où se trouve ORVAN ?", aEn: "ORVAN is headquartered in Goma, North Kivu, Democratic Republic of Congo, serving clients across the DRC and the Great Lakes region.", aFr: "ORVAN a son siège à Goma, Nord-Kivu, République Démocratique du Congo." },
  { qEn: "Can ORVAN handle large-scale printing orders?", qFr: "ORVAN peut-il gérer des commandes d'impression à grande échelle ?", aEn: "Yes, with our Heidelberg offset press and digital presses, we can handle large volume orders with fast turnaround while maintaining high quality.", aFr: "Oui, avec notre presse offset Heidelberg et nos presses numériques, nous pouvons gérer des commandes en grand volume avec un délai rapide." },
  { qEn: "What types of NFI kits do you supply?", qFr: "Quels types de kits NFI fournissez-vous ?", aEn: "We supply shovels, tarpaulins, blankets, kitchen sets, hygiene kits, water purification kits, and solar lamps for humanitarian operations.", aFr: "Nous fournissons des pelles, bâches, couvertures, kits cuisine, kits hygiène, kits de purification d'eau et lampes solaires." },
  { qEn: "Do you work with international organizations?", qFr: "Travaillez-vous avec des organisations internationales ?", aEn: "Yes, we are trusted partners of FAO, Cordaid, Medair, ADRA, Handicap International, UNHCR, UNICEF, and many more.", aFr: "Oui, nous sommes des partenaires de confiance de la FAO, Cordaid, Medair, ADRA, Handicap International, HCR, UNICEF et bien d'autres." },
  { qEn: "How can I request a quote?", qFr: "Comment puis-je demander un devis ?", aEn: "You can reach us via our contact form, email at info@orvan.org, or by visiting our office in Goma.", aFr: "Vous pouvez nous contacter via notre formulaire, par email à info@orvan.org, ou en visitant notre bureau à Goma." },
];

export default function FAQPage() {
  const { lang, t } = useLanguage();
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState<number | null>(null);

  const filtered = faqs.filter(f => {
    const q = lang === "en" ? f.qEn : f.qFr;
    return q.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <PageLayout title={t("faq.title")} subtitle={t("faq.subtitle")}>
      <div className="max-w-3xl mx-auto">
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-10"
            placeholder={lang === "en" ? "Search questions..." : "Rechercher des questions..."}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="space-y-3">
          {filtered.map((f, i) => (
            <div key={i} className="border border-border rounded-xl overflow-hidden bg-card">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-medium text-foreground hover:bg-muted/50 transition-colors"
                aria-expanded={open === i}
              >
                <span>{lang === "en" ? f.qEn : f.qFr}</span>
                <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
                      {lang === "en" ? f.aEn : f.aFr}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
