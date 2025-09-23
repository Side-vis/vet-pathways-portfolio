import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Users, FlaskConical, Heart, Stethoscope, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Research Assistant",
      organization: "African Swine Fever Project, DIDRA",
      location: "Kampala, Uganda",
      period: "2022",
      type: "Research",
      description: [
        "Assisted in laboratory sample collection for African Swine Fever research",
        "Sensitized pig farmers on ASF control measures",
        "Performed DNA extraction and PCR analysis on ASF samples"
      ]
    },
    {
      title: "Principal Investigator",
      organization: "Mycobacterium Research Project",
      location: "Murchison Falls National Park",
      period: "In Progress",
      type: "Research",
      description: [
        "Molecular survey of Mycobacterium avium subspecies paratuberculosis",
        "Fecal sample collection and laboratory analysis",
        "Research findings dissemination to Uganda Wildlife Authority"
      ]
    },
    {
      title: "Volunteer Veterinarian",
      organization: "Uganda Society for Protection and Care of Animals",
      location: "Uganda",
      period: "2023 - Present",
      type: "Volunteer",
      description: [
        "Provide veterinary care to rescued animals",
        "Conduct public awareness on proper animal care",
        "Participate in mass rabies vaccination programs",
        "Conduct community spaying and neutering clinics"
      ]
    },
    {
      title: "Volunteer Veterinarian",
      organization: "Twiga Veterinary Clinic",
      location: "Entebbe, Uganda",
      period: "2022 - Present",
      type: "Volunteer",
      description: [
        "Provided veterinary care to cats and dogs",
        "Performed surgeries and medical treatments",
        "Offered grooming services"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Research":
        return "bg-accent-bright text-accent-foreground";
      case "Volunteer":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Research, volunteer work, and hands-on experience in veterinary medicine 
            and animal welfare advocacy
          </p>
        </div>

        {/* Experience Flow Diagram */}
        <div className="relative mb-16">
          {/* Central Timeline */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent-bright to-primary-light opacity-30"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-8 animate-fade-in-up ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Experience Content */}
                <div className="flex-1 max-w-lg">
                  <div className="bg-card-gradient border border-border rounded-2xl p-6 shadow-medium hover:shadow-strong transition-smooth group">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <Badge className={`${getTypeColor(exp.type)} px-3 py-1`}>
                        {exp.type}
                      </Badge>
                      <div className="text-right text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-smooth mb-2">
                      {exp.title}
                    </h3>
                    
                    <div className="space-y-2 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        <span className="text-sm">{exp.organization}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-sm text-card-foreground flex items-start gap-2">
                          <div className="w-2 h-2 bg-accent-bright rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Central Icon */}
                <div className="hidden md:flex w-16 h-16 bg-card-gradient border-2 border-primary rounded-full items-center justify-center shadow-medium z-10">
                  {exp.type === "Research" ? (
                    <FlaskConical className="w-8 h-8 text-primary" />
                  ) : (
                    <Heart className="w-8 h-8 text-primary" />
                  )}
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 max-w-lg hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Circles */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          {/* Research Impact Circle */}
          <div className="relative">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-accent-bright/20 to-primary/20 border-4 border-accent-bright/40 flex items-center justify-center group hover:scale-105 transition-transform">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-accent-bright mx-auto mb-2" />
                <h4 className="text-lg font-bold text-foreground mb-2">Research Impact</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Farmer livelihood improvement</p>
                  <p>Disease prevention studies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Community Outreach Circle */}
          <div className="relative">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-primary-light/20 border-4 border-primary/40 flex items-center justify-center group hover:scale-105 transition-transform">
              <div className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-2" />
                <h4 className="text-lg font-bold text-foreground mb-2">Community Outreach</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Rabies prevention programs</p>
                  <p>Livestock vaccination</p>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Excellence Circle */}
          <div className="relative">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-light/20 to-accent/20 border-4 border-primary-light/40 flex items-center justify-center group hover:scale-105 transition-transform">
              <div className="text-center">
                <Stethoscope className="w-12 h-12 text-primary-light mx-auto mb-2" />
                <h4 className="text-lg font-bold text-foreground mb-2">Clinical Excellence</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Animal rescue operations</p>
                  <p>Veterinary care provision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;