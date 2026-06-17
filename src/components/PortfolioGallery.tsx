import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import { useState } from "react";
import sampleCollectionImage from "@/assets/Samplecollection2.jpeg";
import labworkImage from "@/assets/Labwork.jpeg";
import labworkTwoImage from "@/assets/Labwork2.jpeg";
import swineImage from "@/assets/Swine.jpeg";
import wildlifeImage from "@/assets/wildlife2.jpeg";
import rabiesImage from "@/assets/Rabies1.jpeg";
import surgeryImage from "@/assets/Surgery2.jpeg";
import animalTreatingImage from "@/assets/AnimalTreating.jpeg";
import outreachImage from "@/assets/Outreach.jpeg";
import outreachTwoImage from "@/assets/Outreach2.jpeg";
import publicSpeakingImage from "@/assets/PublicSpeaking.jpeg";
import communityImage from "@/assets/Community.jpeg";
import poultryImage from "@/assets/Poultry.jpeg";
import examinationImage from "@/assets/Examination.jpeg";
import eventsImage from "@/assets/Events1.jpeg";
import norbrookAchievementImage from "@/assets/NorbrookAchievement.jpeg";
import sdgImage from "@/assets/SDG.jpeg";

const PortfolioGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioItems = [
    {
      id: 1,
      title: "African Swine Fever Field Work",
      description: "Field sample collection and farmer sensitization for ASF surveillance and control.",
      category: "Field Work",
      image: swineImage
    },
    {
      id: 2,
      title: "Laboratory PCR Workflow",
      description: "Hands-on molecular work including extraction and PCR processing for veterinary research.",
      category: "Research",
      image: labworkImage
    },
    {
      id: 3,
      title: "Wildlife Conservation Survey",
      description: "Fieldwork in wildlife settings supporting mycobacterial disease surveillance studies.",
      category: "Wildlife",
      image: wildlifeImage
    },
    {
      id: 4,
      title: "Rabies Vaccination Campaign",
      description: "Community-level rabies prevention, awareness, and vaccination support.",
      category: "Community",
      image: rabiesImage
    },
    {
      id: 5,
      title: "Clinical Surgery Practice",
      description: "Assisting and performing procedures as part of practical veterinary clinical care.",
      category: "Clinical",
      image: surgeryImage
    },
    {
      id: 6,
      title: "Animal Treatment and Recovery",
      description: "Direct care and treatment support for companion and rescued animals.",
      category: "Welfare",
      image: animalTreatingImage
    },
    {
      id: 7,
      title: "Sample Collection in Practice",
      description: "Structured sample collection in field and clinic settings for diagnostics.",
      category: "Field Work",
      image: sampleCollectionImage
    },
    {
      id: 8,
      title: "Advanced Lab Procedures",
      description: "Additional lab sessions focused on sample handling and testing quality.",
      category: "Research",
      image: labworkTwoImage
    },
    {
      id: 9,
      title: "Community Veterinary Outreach",
      description: "Working with communities to improve animal care and preventive practices.",
      category: "Community",
      image: outreachImage
    },
    {
      id: 10,
      title: "Outreach in Action",
      description: "Extended field engagement with farmers and pet owners on animal health.",
      category: "Community",
      image: outreachTwoImage
    },
    {
      id: 11,
      title: "Public Speaking and Advocacy",
      description: "Delivering awareness talks and educational sessions on veterinary themes.",
      category: "Leadership",
      image: publicSpeakingImage
    },
    {
      id: 12,
      title: "Community Engagement",
      description: "Building local partnerships for better livestock and companion animal welfare.",
      category: "Community",
      image: communityImage
    },
    {
      id: 13,
      title: "Poultry Health Monitoring",
      description: "Applied poultry care and observation in practical production environments.",
      category: "Field Work",
      image: poultryImage
    },
    {
      id: 14,
      title: "Clinical Examination Skills",
      description: "Comprehensive physical assessment and diagnostics in veterinary consultations.",
      category: "Clinical",
      image: examinationImage
    },
    {
      id: 15,
      title: "Professional Events Participation",
      description: "Contributing to veterinary events and knowledge-sharing forums.",
      category: "Leadership",
      image: eventsImage
    },
    {
      id: 16,
      title: "Professional Achievement",
      description: "Milestone recognition for dedication, growth, and veterinary excellence.",
      category: "Leadership",
      image: norbrookAchievementImage
    },
    {
      id: 17,
      title: "Sustainable Development Advocacy",
      description: "Connecting veterinary practice with sustainability and community development goals.",
      category: "Leadership",
      image: sdgImage
    }
  ];

  const categories = ["All", "Field Work", "Research", "Wildlife", "Community", "Clinical", "Welfare", "Leadership"];
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Portfolio & Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A visual journey through my veterinary work, research projects, 
            and community involvement in animal health and welfare
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "secondary"}
              onClick={() => setActiveFilter(category)}
              className="transition-smooth"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id}
              className="bg-card-gradient border-border shadow-medium hover:shadow-strong transition-smooth group cursor-pointer animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                  <Camera className="text-white w-8 h-8" />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-accent-bright text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-smooth">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-sm text-muted-foreground">
            Portfolio powered by real documentation from field work, research, outreach, and clinical practice.
          </p>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img 
                src={selectedImage} 
                alt="Portfolio item"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-4 right-4"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGallery;