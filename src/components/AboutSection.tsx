import { GraduationCap, Heart, Microscope, Award, Target, BookOpen } from "lucide-react";
import pictureOne from "@/assets/Picture1.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A dedicated veterinarian from Makerere University with over three years of experience 
            in animal health, welfare, and research, driven by a commitment to enhancing animal health 
            and promoting sustainable agricultural practices.
          </p>
        </div>

        {/* Central Passion Circle */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-16">
          {/* Left Content */}
          <div className="flex-1 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="bg-card-gradient border border-border rounded-3xl p-8 shadow-medium">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="text-primary w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground">My Passion</h3>
                </div>
                <p className="text-card-foreground leading-relaxed mb-4">
                  My academic and professional journey is driven by a strong commitment to enhancing 
                  animal health, promoting responsible animal management practices, and contributing 
                  to veterinary research.
                </p>
                <p className="text-card-foreground leading-relaxed">
                  Through continued learning, research, and community service, I aspire to make 
                  significant contributions to veterinary medicine, animal welfare, sustainable 
                  agricultural practices, and One Health initiatives.
                </p>
              </div>
            </div>
          </div>

          {/* Profile Visual + Circular Infographic */}
          <div className="flex flex-col items-center gap-8 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-full max-w-sm bg-card-gradient border border-border rounded-3xl p-3 shadow-medium">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={pictureOne}
                  alt="Daphine during veterinary field and professional activities"
                  className="w-full h-72 object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-sm font-medium">Hands-on veterinary practice and leadership in action</p>
                </div>
              </div>
            </div>

            <div className="w-80 h-80 relative">
              {/* Central Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent-bright/20 border-4 border-primary/30 flex items-center justify-center">
                <div className="text-center">
                  <Target className="w-12 h-12 text-primary mx-auto mb-2" />
                  <h4 className="text-lg font-bold text-foreground">Veterinary</h4>
                  <h4 className="text-lg font-bold text-foreground">Excellence</h4>
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 bg-card-gradient border border-accent-bright rounded-full flex items-center justify-center shadow-medium animate-float">
                  <div className="text-center">
                    <GraduationCap className="w-6 h-6 text-accent-bright mx-auto" />
                    <span className="text-xs font-medium text-foreground mt-1 block">Education</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/4 -right-4">
                <div className="w-20 h-20 bg-card-gradient border border-primary rounded-full flex items-center justify-center shadow-medium animate-float" style={{ animationDelay: '2s' }}>
                  <div className="text-center">
                    <Microscope className="w-6 h-6 text-primary mx-auto" />
                    <span className="text-xs font-medium text-foreground mt-1 block">Research</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 bg-card-gradient border border-accent rounded-full flex items-center justify-center shadow-medium animate-float" style={{ animationDelay: '4s' }}>
                  <div className="text-center">
                    <Award className="w-6 h-6 text-accent mx-auto" />
                    <span className="text-xs font-medium text-foreground mt-1 block">Leadership</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/4 -left-4">
                <div className="w-20 h-20 bg-card-gradient border border-primary-light rounded-full flex items-center justify-center shadow-medium animate-float" style={{ animationDelay: '6s' }}>
                  <div className="text-center">
                    <BookOpen className="w-6 h-6 text-primary-light mx-auto" />
                    <span className="text-xs font-medium text-foreground mt-1 block">Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {/* Education */}
          <div className="relative">
            <div className="bg-card-gradient border border-border rounded-2xl p-6 shadow-medium text-center group hover:shadow-strong transition-smooth">
              <div className="w-16 h-16 bg-accent-bright/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="text-accent-bright w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold text-card-foreground mb-2">Education</h4>
              <div className="text-sm space-y-1">
                <p className="font-medium">Bachelor of Veterinary Medicine</p>
                <p className="text-muted-foreground">Makerere University (2021-2025)</p>
                <p className="text-accent-bright font-semibold">CGPA: 4.68</p>
              </div>
            </div>
          </div>

          {/* Research */}
          <div className="relative">
            <div className="bg-card-gradient border border-border rounded-2xl p-6 shadow-medium text-center group hover:shadow-strong transition-smooth">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Microscope className="text-primary w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold text-card-foreground mb-2">Research Focus</h4>
              <div className="text-sm space-y-1 text-card-foreground">
                <p>• African Swine Fever research</p>
                <p>• Mycobacterium in wildlife</p>
                <p>• Animal health studies</p>
              </div>
            </div>
          </div>

          {/* Leadership */}
          <div className="relative">
            <div className="bg-card-gradient border border-border rounded-2xl p-6 shadow-medium text-center group hover:shadow-strong transition-smooth">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="text-accent w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold text-card-foreground mb-2">Leadership</h4>
              <div className="text-sm space-y-1 text-card-foreground">
                <p>• BVM Animal Welfare Club</p>
                <p>• Financial Secretary, MVSA</p>
                <p>• Disciplinary Secretary</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;