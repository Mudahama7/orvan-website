import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnersSection from "@/components/PartnersSection";

export default function PageLayout({ children, title, subtitle, heroImage }: { children: ReactNode; title: string; subtitle: string; heroImage?: string }) {
  return (
    <main>
      <Navbar />
      <section className="relative pt-28 pb-16 overflow-hidden">
        {heroImage ? (
          <>
            <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
        )}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className={`text-4xl sm:text-5xl font-bold mb-4 ${heroImage ? "text-primary-foreground" : "text-foreground"}`}>{title}</h1>
          <p className={`text-lg max-w-2xl mx-auto ${heroImage ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{subtitle}</p>
        </div>
      </section>
      <div className="py-16">
        <div className="container mx-auto px-4">{children}</div>
      </div>
      <PartnersSection />
      <Footer />
    </main>
  );
}
