
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ConsultationForm } from "@/components/ConsultationForm";
import { 
  Search, 
  Shield, 
  FileText,
  Award,
  BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Search,
      title: "Specialized Expertise",
      description: "Deep technical expertise across multiple domains including automotive, pharmaceutical, textile, and electronics"
    },
    {
      icon: Shield,
      title: "Comprehensive Services",
      description: "Complete patent services from initial search to final grant and maintenance"
    },
    {
      icon: FileText,
      title: "India-Focused Strategy",
      description: "Strategic filing approaches optimized for Indian patent system with global perspective"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "300+ patentability searches and 100+ patent drafts successfully completed"
    }
  ];

  const stats = [
    { number: "300+", label: "Patentability Searches" },
    { number: "100+", label: "Patents Drafted" },
    { number: "5+", label: "Industries Served" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            <div className="space-y-8 text-center">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit mx-auto">
                  Trusted Patent Professionals
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Securing Your <span className="text-primary">Innovations</span> with Expert Patent Solutions
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  Your trusted partner in patent technology services. We combine deep technical expertise 
                  with extensive patent law knowledge to deliver exceptional services in patent analysis, 
                  drafting, and filing throughout India.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ConsultationForm />
                <Button variant="outline" size="lg" asChild className="flex items-center space-x-2">
                  <Link to="/process">
                    <BookOpen className="h-5 w-5" />
                    <span>Learn Our Process</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We understand that your innovations deserve the strongest possible protection. 
              Our proven expertise ensures comprehensive patent solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive patent solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Patentability Search",
                description: "Comprehensive prior art analysis to evaluate your invention's patentability potential"
              },
              {
                title: "Patent Drafting",
                description: "Expert drafting services maximizing protection scope with strategic claim construction"
              },
              {
                title: "Patent Filing & Prosecution",
                description: "Complete services from filing to grant with expert office action responses"
              },
              {
                title: "Freedom to Operate",
                description: "Essential analysis for safe commercialization and competitive landscape navigation"
              },
              {
                title: "Patent Landscape Analysis",
                description: "Strategic insights into technology domains and competitive intelligence"
              },
              {
                title: "Infringement Analysis",
                description: "Protect your market position through proactive infringement analysis"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Protect Your Innovation?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Connect with our experts to discuss your patent needs and explore how we can help secure your intellectual property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/process">Learn More About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="fixed bottom-5 right-5 z-50">
        <a
          href="https://wa.me/918618033312?text=Hello%20Patellect%20IP%20Solutions,%20I%20am%20interested%20in%20your%20patent%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.87 11.87 0 0012.07 0C5.46 0 .07 5.39.07 12c0 2.11.55 4.17 1.59 6.01L0 24l6.14-1.63a11.9 11.9 0 005.93 1.54h.01c6.61 0 12-5.39 12-12 0-3.19-1.24-6.2-3.49-8.43zM12.08 21.5h-.01c-1.89 0-3.74-.51-5.35-1.48l-.38-.23-3.64.97.97-3.55-.25-.37a9.5 9.5 0 01-1.47-5.21c0-5.27 4.29-9.56 9.56-9.56 2.55 0 4.95.99 6.75 2.79a9.51 9.51 0 012.81 6.77c0 5.27-4.29 9.56-9.56 9.56zm5.27-7.16c-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.66.15-.19.29-.76.95-.93 1.14-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.91-2.18-.24-.58-.49-.5-.66-.51h-.57c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.02 2.81 1.16 3 .15.19 2.01 3.07 4.87 4.3.68.29 1.21.46 1.63.59.68.22 1.3.19 1.79.12.55-.08 1.73-.71 1.97-1.39.24-.68.24-1.26.17-1.39-.07-.12-.26-.19-.55-.34z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Home;
