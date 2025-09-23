import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Heart, Microscope, Award } from "lucide-react";

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Statement */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-card-gradient border-border shadow-medium h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground flex items-center gap-3">
                  <Heart className="text-primary" />
                  My Passion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-card-foreground">
                <p className="leading-relaxed">
                  My academic and professional journey is driven by a strong commitment to enhancing 
                  animal health, promoting responsible animal management practices, and contributing 
                  to veterinary research.
                </p>
                <p className="leading-relaxed">
                  Through continued learning, research, and community service, I aspire to make 
                  significant contributions to veterinary medicine, animal welfare, sustainable 
                  agricultural practices, and One Health initiatives.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Education & Achievements */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Card className="bg-card-gradient border-border shadow-medium transition-smooth hover:shadow-strong">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground flex items-center gap-3">
                  <GraduationCap className="text-accent-bright" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="text-card-foreground">
                <div className="space-y-2">
                  <h4 className="font-semibold">Bachelor of Veterinary Medicine</h4>
                  <p className="text-muted-foreground">Makerere University (2021-2025)</p>
                  <p className="text-sm font-medium text-accent-bright">CGPA: 4.67</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient border-border shadow-medium transition-smooth hover:shadow-strong">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground flex items-center gap-3">
                  <Microscope className="text-primary" />
                  Research Focus
                </CardTitle>
              </CardHeader>
              <CardContent className="text-card-foreground">
                <ul className="space-y-2 text-sm">
                  <li>• African Swine Fever research</li>
                  <li>• Mycobacterium avium subspecies paratuberculosis in wildlife</li>
                  <li>• Animal health and welfare studies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient border-border shadow-medium transition-smooth hover:shadow-strong">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground flex items-center gap-3">
                  <Award className="text-accent-bright" />
                  Leadership
                </CardTitle>
              </CardHeader>
              <CardContent className="text-card-foreground">
                <ul className="space-y-2 text-sm">
                  <li>• BVM Animal Welfare Club Ambassador</li>
                  <li>• Financial Secretary, MVSA</li>
                  <li>• Disciplinary Secretary, Mary Stuart Hall</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;