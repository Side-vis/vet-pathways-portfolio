import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/Daphine_CV.pdf';
    link.download = 'Daphine_Kamusiime_CV.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Kamusiime <span className="text-accent-bright">Daphine</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-light">
          Aspiring Veterinary Doctor
        </p>
        
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about animal health, welfare, and advancing veterinary medicine through research and community service
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToAbout}
            className="text-lg px-8 py-6"
          >
            Explore My Journey
            <ArrowDown className="ml-2 animate-bounce" />
          </Button>
          
          <Button 
            variant="contact" 
            size="lg" 
            onClick={downloadResume}
            className="text-lg px-8 py-6"
          >
            <Download className="mr-2" />
            View Resume
          </Button>
        </div>
      </div>
      
      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-accent-bright/20 rounded-full animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-primary-light/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-16 w-12 h-12 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default HeroSection;