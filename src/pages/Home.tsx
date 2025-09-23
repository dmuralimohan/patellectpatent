
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ConsultationForm } from "@/components/ConsultationForm";
import { 
  Search, 
  Shield, 
  FileText, 
  Users, 
  Award, 
  CheckCircle,
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
    </div>
  );
};

export default Home;
