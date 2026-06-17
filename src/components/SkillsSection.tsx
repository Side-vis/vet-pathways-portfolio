import { Badge } from "@/components/ui/badge";
import { 
  Microscope, 
  Stethoscope, 
  BookOpen, 
  Users, 
  Award,
  Brain,
  Heart,
  Shield,
  Zap,
  CheckCircle2,
  Sparkles
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
    <section id="skills" className="py-20 bg-section-gradient scroll-mt-24">
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

        {/* Skills Summary + Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="bg-card-gradient border border-border rounded-3xl p-8 shadow-medium h-full">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Expertise Snapshot</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Blending hands-on clinical experience, molecular diagnostics, and community-centered veterinary outreach.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-card-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>4 focused skill domains</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-card-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>24 practical competency areas</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-card-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Strong research-to-field translation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="bg-card-gradient border border-border rounded-2xl p-6 shadow-medium hover:shadow-strong transition-smooth animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <IconComponent className={`${category.color} w-6 h-6`} />
                    </div>
                    <h4 className="text-lg font-semibold text-card-foreground">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Competencies */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Core Competencies</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative group">
              <div className="bg-card-gradient border border-border rounded-2xl p-6 text-center shadow-medium hover:shadow-strong transition-smooth hover:scale-105">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-card-foreground mb-3">Animal Welfare</h4>
                <p className="text-sm text-muted-foreground">
                  Passionate advocate for animal welfare with hands-on experience 
                  in rescue operations and community education programs.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-card-gradient border border-border rounded-2xl p-6 text-center shadow-medium hover:shadow-strong transition-smooth hover:scale-105">
                <div className="w-16 h-16 bg-accent-bright/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-bright/20 transition-colors">
                  <BookOpen className="w-8 h-8 text-accent-bright" />
                </div>
                <h4 className="text-xl font-bold text-card-foreground mb-3">Research Excellence</h4>
                <p className="text-sm text-muted-foreground">
                  Strong research background with experience in molecular biology 
                  techniques and field studies in wildlife conservation.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-card-gradient border border-border rounded-2xl p-6 text-center shadow-medium hover:shadow-strong transition-smooth hover:scale-105">
                <div className="w-16 h-16 bg-primary-light/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-light/20 transition-colors">
                  <Shield className="w-8 h-8 text-primary-light" />
                </div>
                <h4 className="text-xl font-bold text-card-foreground mb-3">Disease Prevention</h4>
                <p className="text-sm text-muted-foreground">
                  Expertise in vaccination programs, disease surveillance, 
                  and public health initiatives for zoonotic disease control.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-card-gradient border border-border rounded-full px-6 py-3 shadow-medium">
              <Award className="text-accent-bright w-6 h-6" />
              <h3 className="text-xl font-bold text-card-foreground">Professional Certifications</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-card-gradient border border-border rounded-xl p-4 shadow-medium hover:shadow-strong transition-smooth group text-center"
              >
                <div className="w-12 h-12 bg-accent-bright/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-accent-bright/20 transition-colors">
                  <Zap className="w-6 h-6 text-accent-bright" />
                </div>
                <p className="text-sm text-card-foreground font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;