
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Shield, 
  FileText, 
  AlertTriangle,
  BarChart3,
  PenTool,
  Send
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Patentability Search",
      description: "Evaluate your invention's patentability potential through comprehensive prior art analysis. We assess novelty, inventiveness, and utility to provide clear understanding of your patent prospects before filing.",
      features: ["Comprehensive prior art analysis", "Novelty assessment", "Inventiveness evaluation", "Utility analysis", "Clear patentability report"]
    },
    {
      icon: Shield,
      title: "Freedom to Operate (FTO) Search",
      description: "Essential for safe commercialization. We identify active patents that may pose infringement risks and analyze expired patents available for use, helping you navigate the competitive landscape confidently.",
      features: ["Active patent identification", "Infringement risk analysis", "Expired patent opportunities", "Competitive landscape mapping", "Safe commercialization guidance"]
    },
    {
      icon: AlertTriangle,
      title: "Patent Infringement Search",
      description: "Protect your market position through proactive analysis. We ensure your invention doesn't infringe existing patents and provide ongoing monitoring to avoid costly legal disputes.",
      features: ["Proactive infringement analysis", "Market position protection", "Ongoing patent monitoring", "Legal dispute prevention", "Competitive intelligence"]
    },
    {
      icon: FileText,
      title: "Invalidity/Validity Search",
      description: "Support for patent opposition or challenges. We conduct validity searches to strengthen your patents and invalidity searches to challenge competitor patents with comprehensive prior art evidence.",
      features: ["Patent opposition support", "Validity strengthening", "Invalidity challenges", "Prior art evidence", "Comprehensive analysis"]
    },
    {
      icon: BarChart3,
      title: "Patent Landscape Analysis",
      description: "Strategic insights into your technology domain. We provide comprehensive overviews of patent activity, identify innovation opportunities, and deliver competitive intelligence to guide your R&D decisions.",
      features: ["Technology domain insights", "Innovation opportunity identification", "Competitive intelligence", "R&D guidance", "Strategic patent mapping"]
    },
    {
      icon: PenTool,
      title: "Patent Drafting",
      description: "Expert drafting services maximizing protection scope. We create well-structured applications with precise technical language, broad claim scope, and strategic construction optimized for Indian patent law.",
      features: ["Strategic claim construction", "Technical precision", "Broad protection scope", "Indian law optimization", "Well-structured applications"]
    },
    {
      icon: Send,
      title: "Patent Filing & Prosecution",
      description: "Complete services from filing to grant. We handle strategic filing, expert office action responses, deadline management, and renewal tracking to ensure successful patent prosecution.",
      features: ["Strategic filing approach", "Office action responses", "Deadline management", "Renewal tracking", "Grant optimization"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Services
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Patent Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tailored to your specific needs, our services cover every aspect of patent protection 
            from initial search to final grant and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Categories */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Research & Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive patent research including patentability, FTO, infringement, and landscape analysis
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PenTool className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Drafting & Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Expert patent drafting with strategic claim construction and technical precision
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Filing & Prosecution</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Complete filing services with strategic prosecution and deadline management
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
