import { motion } from "framer-motion";
import { Heart, Award, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import aboutTeam from "@/assets/about-team.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function AboutSection() {
  const { t } = useLanguage();

  const values = [
    { icon: Heart, title: t("values.commitment"), desc: t("values.commitment.desc"), color: "text-secondary" },
    { icon: Award, title: t("values.quality"), desc: t("values.quality.desc"), color: "text-primary" },
    { icon: Users, title: t("values.impact"), desc: t("values.impact.desc"), color: "text-golden" },
  ];

  return (
    <section className="py-24 bg-warm" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <motion.h2 variants={fadeUp} custom={0} id="about-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t("about.title")}
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg leading-relaxed">
              {t("about.subtitle")}
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img src={aboutTeam} alt="ORVAN team collaborating" className="w-full h-80 object-cover" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <motion.article
              key={v.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
              variants={fadeUp}
              className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-lg bg-muted mb-5 ${v.color}`}>
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
