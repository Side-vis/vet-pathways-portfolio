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
  Target,
  Zap
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

        {/* Circular Skills Infographic */}
        <div className="relative max-w-6xl mx-auto mb-20">
          <div className="relative w-full h-96 md:h-[500px] animate-scale-in">
            {/* Central Core */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/30 to-accent-bright/30 border-4 border-primary flex items-center justify-center shadow-strong">
                <div className="text-center">
                  <Target className="w-8 h-8 md:w-10 md:h-10 text-primary mx-auto mb-1" />
                  <h4 className="text-sm md:text-base font-bold text-foreground">Veterinary</h4>
                  <h4 className="text-sm md:text-base font-bold text-foreground">Expertise</h4>
                </div>
              </div>
            </div>

            {/* Skill Category Circles - Positioned around the center */}
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              const angle = (index * 90) - 45; // Spread 4 categories around circle
              const radius = 180; // Distance from center
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;
              
              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fade-in-up group"
                  style={{ 
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    animationDelay: `${index * 0.2}s` 
                  }}
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-card-gradient border-2 border-border shadow-medium hover:shadow-strong transition-smooth hover:scale-110 flex items-center justify-center cursor-pointer">
                    <div className="text-center">
                      <IconComponent className={`${category.color} w-6 h-6 md:w-8 md:h-8 mx-auto mb-1`} />
                      <span className="text-xs md:text-sm font-medium text-foreground">{category.title.split(' ')[0]}</span>
                    </div>
                  </div>

                  {/* Skills popup on hover */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-card-gradient border border-border rounded-lg p-3 shadow-medium opacity-0 group-hover:opacity-100 transition-opacity z-20 w-48 hidden md:block">
                    <h5 className="font-semibold text-card-foreground mb-2 text-center">{category.title}</h5>
                    <div className="flex flex-wrap gap-1">
                      {category.skills.slice(0, 4).map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary" 
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {category.skills.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{category.skills.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {skillCategories.map((_, index) => {
                const angle = (index * 90) - 45;
                const radius = 90;
                const x1 = 50 + (Math.cos(angle * Math.PI / 180) * radius * 0.5);
                const y1 = 50 + (Math.sin(angle * Math.PI / 180) * radius * 0.5);
                const x2 = 50 + (Math.cos(angle * Math.PI / 180) * radius * 1.8);
                const y2 = 50 + (Math.sin(angle * Math.PI / 180) * radius * 1.8);
                
                return (
                  <line 
                    key={index}
                    x1={`${x1}%`} 
                    y1={`${y1}%`} 
                    x2={`${x2}%`} 
                    y2={`${y2}%`} 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="2" 
                    opacity="0.3"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                );
              })}
            </svg>
          </div>
        </div>

        {/* Mobile Skills Grid */}
        <div className="grid grid-cols-1 md:hidden gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="bg-card-gradient border border-border rounded-2xl p-6 shadow-medium animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className={`${category.color} w-6 h-6`} />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary" 
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Competencies Hexagon Layout */}
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

        {/* Certifications Flow */}
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