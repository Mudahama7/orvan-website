import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import orvanLogo from "@/assets/orvan-logo.png";

interface DropdownItem {
  label: string;
  to: string;
}

interface NavItem {
  label: string;
  to?: string;
  dropdown?: DropdownItem[];
}

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: t("nav.home"), to: "/" },
    {
      label: t("nav.about"),
      dropdown: [
        { label: t("nav.history"), to: "/about/history" },
        { label: t("nav.values"), to: "/about/values" },
      ],
    },
    {
      label: t("nav.services"),
      dropdown: [
        { label: t("nav.printing"), to: "/services/printing" },
        { label: t("nav.stationery"), to: "/services/stationery" },
        { label: t("nav.nfi"), to: "/services/nfi" },
        { label: t("nav.archiving"), to: "/services/archiving" },
        { label: t("nav.webdev"), to: "/services/webdev" },
      ],
    },
    { label: t("nav.achievements"), to: "/achievements" },
    { label: t("nav.equipment"), to: "/equipment" },
    { label: t("nav.faq"), to: "/faq" },
    { label: t("nav.policy"), to: "/policy" },
    { label: t("nav.contact"), to: "/contact" },
  ];

  const isActive = (path?: string) => path && location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" aria-label="ORVAN Home">
          <img src={orvanLogo} alt="ORVAN Logo" className="h-10 lg:h-14 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.to ? (
                <Link
                  to={item.to}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.to) ? "text-primary bg-primary/10" : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  className="px-4 py-2 text-sm font-medium rounded-md transition-colors text-foreground/80 hover:text-primary hover:bg-primary/5 flex items-center gap-1"
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </button>
              )}

              {item.dropdown && openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-card rounded-lg shadow-xl border border-border py-2 animate-fade-in">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.to}
                      to={sub.to}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        isActive(sub.to) ? "text-primary bg-primary/10 font-medium" : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Language Toggle + Mobile */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
            {lang === "fr" ? "EN" : "FR"}
          </button>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.to ? (
                  <Link
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-md text-sm font-medium ${
                      isActive(item.to) ? "text-primary bg-primary/10" : "text-foreground/80 hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium text-foreground/80 hover:bg-muted"
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                    {openDropdown === item.label && item.dropdown && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-primary rounded-md"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
