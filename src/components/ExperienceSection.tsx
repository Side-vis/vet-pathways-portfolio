import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Users } from "lucide-react";

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border-border shadow-medium hover:shadow-strong transition-smooth group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge 
                    className={`${getTypeColor(exp.type)} px-3 py-1`}
                  >
                    {exp.type}
                  </Badge>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                </div>
                
                <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-smooth">
                  {exp.title}
                </CardTitle>
                
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    <span className="text-sm">{exp.organization}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-sm text-card-foreground flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent-bright rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Contributions */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Card className="bg-card-gradient border-border shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground flex items-center gap-3">
                <Users className="text-primary" />
                Community Contributions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-card-foreground">Research Impact</h4>
                  <ul className="space-y-2 text-sm text-card-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent-bright rounded-full mt-2 flex-shrink-0" />
                      <span>Participated in research projects improving farmer livelihoods</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent-bright rounded-full mt-2 flex-shrink-0" />
                      <span>Contributed to disease prevention studies</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-card-foreground">Community Outreach</h4>
                  <ul className="space-y-2 text-sm text-card-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent-bright rounded-full mt-2 flex-shrink-0" />
                      <span>Rabies prevention awareness programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent-bright rounded-full mt-2 flex-shrink-0" />
                      <span>Livestock vaccination programs for smallholder farmers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;