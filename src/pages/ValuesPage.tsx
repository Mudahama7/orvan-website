import PageLayout from "@/components/PageLayout";
import AboutSection from "@/components/AboutSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ValuesPage() {
  const { t } = useLanguage();
  return (
    <PageLayout title={t("nav.values")} subtitle={t("about.subtitle")}>
      <AboutSection />
    </PageLayout>
  );
}
