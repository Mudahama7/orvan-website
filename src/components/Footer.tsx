import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import orvanLogo from "@/assets/orvan-logo.png";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground" role="contentinfo">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img src={orvanLogo} alt="ORVAN" className="h-12 w-auto brightness-200" />
            <p className="text-sm opacity-70 leading-relaxed">{t("footer.tagline")}</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-90">{t("nav.services")}</h4>
            <ul className="space-y-2.5 text-sm opacity-70">
              <li><Link to="/services/printing" className="hover:opacity-100 transition-opacity">{t("nav.printing")}</Link></li>
              <li><Link to="/services/stationery" className="hover:opacity-100 transition-opacity">{t("nav.stationery")}</Link></li>
              <li><Link to="/services/nfi" className="hover:opacity-100 transition-opacity">{t("nav.nfi")}</Link></li>
              <li><Link to="/services/archiving" className="hover:opacity-100 transition-opacity">{t("nav.archiving")}</Link></li>
              <li><Link to="/services/webdev" className="hover:opacity-100 transition-opacity">{t("nav.webdev")}</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-90">{t("nav.about")}</h4>
            <ul className="space-y-2.5 text-sm opacity-70">
              <li><Link to="/about/history" className="hover:opacity-100 transition-opacity">{t("nav.history")}</Link></li>
              <li><Link to="/about/values" className="hover:opacity-100 transition-opacity">{t("nav.values")}</Link></li>
              <li><Link to="/achievements" className="hover:opacity-100 transition-opacity">{t("nav.achievements")}</Link></li>
              <li><Link to="/equipment" className="hover:opacity-100 transition-opacity">{t("nav.equipment")}</Link></li>
              <li><Link to="/faq" className="hover:opacity-100 transition-opacity">{t("nav.faq")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 opacity-90">{t("nav.contact")}</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>{t("contact.address")}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@orvan.org" className="hover:opacity-100 transition-opacity">info@orvan.org</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+243000000000" className="hover:opacity-100 transition-opacity">+243 000 000 000</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm opacity-50">
          © {year} ORVAN. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
