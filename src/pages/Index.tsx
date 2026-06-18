import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioGallery from "@/components/PortfolioGallery";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <PortfolioGallery />
      <ContactSection />
      <footer className="border-t border-border/60 bg-background/90 py-6">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground flex flex-col items-center justify-center gap-2">
          Built with ❤️
           <span>All rights reserved. &copy; {new Date().getFullYear()} </span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
