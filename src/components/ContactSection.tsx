import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Download, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the email via a backend service
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/Daphine_CV.pdf';
    link.download = 'Daphine_Kamusiime_CV.pdf';
    link.click();
  };

  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss opportunities in veterinary medicine, research collaborations, 
            or how we can work together to improve animal health and welfare
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-card-gradient border-border shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <p className="text-muted-foreground">daphinekamusiime332@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent-bright" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Phone</p>
                    <p className="text-muted-foreground">+256 704 408 067</p>
                    <p className="text-muted-foreground">+256 780 666 408</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-light/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-light" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Location</p>
                    <p className="text-muted-foreground">Kampala, Uganda</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resume Download */}
            <Card className="bg-card-gradient border-border shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Resume & CV</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Download my complete curriculum vitae to learn more about my 
                  education, experience, and accomplishments.
                </p>
                <Button 
                  variant="contact" 
                  onClick={downloadResume}
                  className="w-full"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Download CV (PDF)
                </Button>
              </CardContent>
            </Card>

            {/* Professional Networks */}
            <Card className="bg-card-gradient border-border shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Professional Networks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Linkedin className="mr-2 w-4 h-4" />
                    Connect on LinkedIn
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="mr-2 w-4 h-4" />
                    ResearchGate Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Card className="bg-card-gradient border-border shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-card-foreground">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="transition-smooth focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-card-foreground">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="transition-smooth focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-card-foreground">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, opportunity, or how we can collaborate..."
                      rows={6}
                      required
                      className="transition-smooth focus:ring-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="contact" 
                    size="lg" 
                    className="w-full"
                  >
                    <Send className="mr-2 w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;