import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Plus } from "lucide-react";
import { useState } from "react";

const PortfolioGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder portfolio items - in real implementation, these would come from a CMS or database
  const portfolioItems = [
    {
      id: 1,
      title: "Cattle Vaccination Program",
      description: "Participating in a livestock vaccination program for smallholder farmers in rural Uganda",
      category: "Field Work",
      image: "https://images.unsplash.com/photo-1560472354-a3ea96f36a6f?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Laboratory Research",
      description: "Conducting PCR analysis for African Swine Fever research at DIDRA laboratory",
      category: "Research",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Wildlife Conservation",
      description: "Sample collection in Murchison Falls National Park for Mycobacterium research",
      category: "Wildlife",
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Community Outreach",
      description: "Rabies vaccination and public awareness program with USPCA",
      category: "Community",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Veterinary Care",
      description: "Providing medical treatment and surgical care at Twiga Veterinary Clinic",
      category: "Clinical",
      image: "https://images.unsplash.com/photo-1559190394-df5a28aab5c5?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Animal Welfare",
      description: "Working with rescued animals at Uganda Society for Protection and Care of Animals",
      category: "Welfare",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop"
    }
  ];

  const categories = ["All", "Field Work", "Research", "Wildlife", "Community", "Clinical", "Welfare"];
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 bg-background">
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

        {/* Add More Photos Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Card className="bg-card-gradient border-border border-dashed hover:border-solid transition-smooth inline-block">
            <CardContent className="p-8">
              <Plus className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-card-foreground mb-2">Add More Photos</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Upload photos from your fieldwork, research, and veterinary activities
              </p>
              <Button variant="portfolio" size="sm">
                <Camera className="mr-2 w-4 h-4" />
                Upload Photos
              </Button>
            </CardContent>
          </Card>
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