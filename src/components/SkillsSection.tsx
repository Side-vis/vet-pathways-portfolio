import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Microscope, 
  Stethoscope, 
  BookOpen, 
  Users, 
  Award,
  Brain,
  Heart,
  Shield
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Veterinary Skills",
      icon: Stethoscope,
      color: "text-primary",
      skills: [
        "Animal Health Assessment",
        "Disease Diagnosis & Treatment",
        "Surgical Procedures",
        "Vaccination Programs",
        "Animal Welfare Management",
        "Emergency Veterinary Care"
      ]
    },
    {
      title: "Research & Laboratory",
      icon: Microscope,
      color: "text-accent-bright",
      skills: [
        "DNA Extraction",
        "PCR Analysis",
        "Laboratory Sample Collection",
        "Molecular Survey Techniques",
        "Data Analysis & Interpretation",
        "Scientific Writing"
      ]
    },
    {
      title: "Management & Leadership",
      icon: Users,
      color: "text-primary-light",
      skills: [
        "Project Management",
        "Team Leadership",
        "Community Outreach",
        "Public Speaking",
        "Training & Education",
        "Stakeholder Engagement"
      ]
    },
    {
      title: "Specialized Knowledge",
      icon: Brain,
      color: "text-accent",
      skills: [
        "One Health Approach",
        "Zoonotic Disease Control",
        "Wildlife Veterinary Medicine",
        "Sustainable Agriculture",
        "Animal Nutrition",
        "Epidemiology"
      ]
    }
  ];

  const certifications = [
    "Project Management Skills - Project Management Institute, Uganda",
    "Executive Diploma in Project Management - Uniathena",
    "Essentials of Project Management - Monitoring and Control - Uniathena"
  ];

  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive veterinary knowledge combined with research experience 
            and leadership capabilities
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="bg-card-gradient border-border shadow-medium hover:shadow-strong transition-smooth group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground flex items-center gap-3 group-hover:text-primary transition-smooth">
                    <IconComponent className={`${category.color} w-6 h-6`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary" 
                        className="text-xs bg-secondary/80 text-secondary-foreground hover:bg-secondary transition-smooth"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Core Competencies */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card-gradient border-border shadow-medium text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl text-card-foreground">Animal Welfare</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Passionate advocate for animal welfare with hands-on experience 
                in rescue operations and community education programs.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card-gradient border-border shadow-medium text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <CardHeader>
              <BookOpen className="w-12 h-12 text-accent-bright mx-auto mb-4" />
              <CardTitle className="text-xl text-card-foreground">Research Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Strong research background with experience in molecular biology 
                techniques and field studies in wildlife conservation.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card-gradient border-border shadow-medium text-center animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <CardHeader>
              <Shield className="w-12 h-12 text-primary-light mx-auto mb-4" />
              <CardTitle className="text-xl text-card-foreground">Disease Prevention</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Expertise in vaccination programs, disease surveillance, 
                and public health initiatives for zoonotic disease control.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Card className="bg-card-gradient border-border shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground flex items-center gap-3">
                <Award className="text-accent-bright" />
                Professional Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-bright rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-card-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;