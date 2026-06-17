import { Button } from "@/components/ui/button";
import { ArrowDown, Download, GraduationCap, PawPrint, Award, Heart } from "lucide-react";
import daphineProfile from "@/assets/daphine-profile.jpg";
import heroBackground from "@/assets/hero-background.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      role="banner"
      aria-label="Hero section"
    >
      {/* Blended hero photo background */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Veterinary field background"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/88 via-white/92 to-emerald-100/72" />
      
      {/* Light Green Geometric Accents */}
      <div className="absolute top-[-30%] right-[-20%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-emerald-200/30 to-emerald-300/10 blur-3xl" />
      <div className="absolute bottom-[-40%] left-[-20%] w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-emerald-200/20 to-teal-200/10 blur-3xl" />
      
      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cdefs%3E%3Cpattern id=%27grid%27 width=%2760%27 height=%2760%27 patternUnits=%27userSpaceOnUse%27%3E%3Cpath d=%27M 60 0 L 0 0 0 60%27 fill=%27none%27 stroke=%27rgba(16,185,129,0.06)%27 stroke-width=%271%27/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%27100%25%27 height=%27100%25%27 fill=%27url(%23grid)%27/%3E%3C/svg%3E\")",
        }}
      />

      {/* Floating Light Green Orbs */}
      <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-emerald-200/40 rounded-full animate-float blur-sm" />
      <div className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-emerald-300/30 rounded-full animate-float-delayed blur-sm" />
      <div className="absolute top-1/3 left-1/6 w-6 h-6 bg-teal-200/40 rounded-full animate-float-slower blur-sm" />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 backdrop-blur-sm border border-emerald-200 text-emerald-700 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Aspiring Veterinary Doctor
            </div>

            {/* Name with Gradient */}
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="text-slate-700">Kamusiime</span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                    Daphine
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-expand-width" />
                </span>
              </h1>
            </div>

            {/* Professional Title */}
            <div className="flex items-center gap-4 text-slate-600">
              <div className="flex items-center gap-2">
                <PawPrint className="w-5 h-5 text-emerald-500" />
                <span className="text-xl md:text-2xl font-light">Veterinary Doctor</span>
              </div>
              <div className="w-px h-8 bg-emerald-200" />
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-500" />
                <span className="text-lg font-light">BVM</span>
              </div>
            </div>

            {/* Description Card */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-emerald-100/50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-lg md:text-xl text-slate-700 max-w-2xl leading-relaxed">
                Dedicated to advancing <span className="text-emerald-600 font-medium">animal health</span> and 
                <span className="text-teal-600 font-medium"> welfare</span> through evidence-based medicine, 
                research, and compassionate community service.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {[
                { value: '500+', label: 'Animals Treated', icon: Heart },
                { value: '4+', label: 'Research Projects', icon: GraduationCap },
                { value: '100%', label: 'Patient Care', icon: Award },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100/60 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-slate-800">{stat.value}</div>
                      <div className="text-sm text-slate-500">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={scrollToAbout}
                className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 text-lg px-8 py-6 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 transition-all duration-300"
              >
                <span className="flex items-center">
                  Explore My Journey
                  <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={downloadResume}
                className="group border-2 border-emerald-300 hover:border-emerald-400 text-emerald-700 hover:text-emerald-800 bg-white/80 hover:bg-emerald-50 text-lg px-8 py-6 transition-all duration-300"
              >
                <Download className="mr-2 group-hover:translate-y-0.5 transition-transform duration-300" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="relative group">
              {/* Back halo for separation */}
              <div className="absolute inset-[-28px] rounded-full bg-gradient-to-r from-emerald-200/30 via-teal-200/35 to-emerald-300/25 blur-3xl" />

              {/* Soft breathing glow ring */}
              <div className="absolute inset-[-10px] rounded-full bg-gradient-to-r from-emerald-300/45 via-teal-300/45 to-emerald-400/45 blur-xl animate-pulse-slow" />

              {/* Main framed image */}
              <div className="relative w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full p-[4px] bg-gradient-to-br from-emerald-400 via-teal-300 to-emerald-500 shadow-[0_24px_60px_-22px_rgba(16,185,129,0.55)] transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/90 bg-white">
                  <img 
                    src={daphineProfile} 
                    alt="Daphine Kamusiime - Aspiring Veterinary Doctor"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    loading="eager"
                    width="420"
                    height="420"
                  />

                  {/* Inner light for depth */}
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_28%_24%,rgba(255,255,255,0.3),transparent_42%)] pointer-events-none" />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_-24px_36px_rgba(15,23,42,0.16)] pointer-events-none" />
                </div>

                {/* Floating Decorative Elements - repositioned for cleaner portrait visibility */}
                <div className="absolute -top-1 left-8 w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full animate-float shadow-lg shadow-emerald-400/35 flex items-center justify-center">
                  <PawPrint className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-2 right-10 w-10 h-10 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full animate-float-delayed shadow-lg shadow-teal-400/35 flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div className="absolute top-1/2 -left-3 w-9 h-9 bg-gradient-to-br from-emerald-300 to-teal-300 rounded-full animate-float-slower shadow-lg shadow-emerald-300/30 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-emerald-400/60 animate-float-slow">
        <span className="text-xs uppercase tracking-widest font-light">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-400/60 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;