import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import servicePrinting from "@/assets/service-printing.jpg";
import serviceStationery from "@/assets/service-stationery.jpg";
import serviceNfi from "@/assets/service-nfi.jpg";
import serviceArchiving from "@/assets/service-archiving.jpg";
import serviceWebdev from "@/assets/service-webdev.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    { image: servicePrinting, title: t("nav.printing"), desc: t("services.printing.desc"), to: "/services/printing" },
    { image: serviceStationery, title: t("nav.stationery"), desc: t("services.stationery.desc"), to: "/services/stationery" },
    { image: serviceNfi, title: t("nav.nfi"), desc: t("services.nfi.desc"), to: "/services/nfi" },
    { image: serviceArchiving, title: t("nav.archiving"), desc: t("services.archiving.desc"), to: "/services/archiving" },
    { image: serviceWebdev, title: t("nav.webdev"), desc: t("services.webdev.desc"), to: "/services/webdev" },
  ];

  return (
    <section className="py-24" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
          <motion.h2 variants={fadeUp} custom={0} id="services-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t("services.title")}
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("services.subtitle")}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
              variants={fadeUp}
            >
              <Link
                to={s.to}
                className="group block bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    {t("hero.cta")} <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
