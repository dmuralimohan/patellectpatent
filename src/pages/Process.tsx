
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MessageSquare, 
  FileText, 
  Award,
  ArrowRight
} from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Introduction Call",
      description: "We begin every engagement with a comprehensive discussion to understand your technology and business objectives.",
      details: [
        "Understand your technology and business objectives",
        "Introduce our team and expertise relevant to your domain",
        "Assess your specific patent requirements and timeline",
        "Establish clear expectations and communication protocols"
      ]
    },
    {
      number: "02",
      icon: MessageSquare,
      title: "Invention Disclosure Discussion",
      description: "Deep dive into your innovation through detailed technical discussions to capture all patentable aspects.",
      details: [
        "Comprehensive review of your invention's technical aspects",
        "Identification of all patentable features and embodiments",
        "Analysis of commercial applications and market potential",
        "Strategic discussion on filing approach and claim strategy",
        "Documentation of invention details for optimal patent protection"
      ]
    },
    {
      number: "03",
      icon: FileText,
      title: "Patent Drafting & Filing",
      description: "Collaborative patent preparation with continuous inventor involvement throughout the process.",
      details: [
        "Professional patent drafting incorporating all technical nuances",
        "Strategic claim construction for maximum protection scope",
        "Technical drawings and specifications preparation",
        "Filing strategy optimization for Indian patent system",
        "Regular updates and inventor feedback integration"
      ]
    },
    {
      number: "04",
      icon: Award,
      title: "Grant Achievement & Maintenance",
      description: "Supporting you through to patent grant and providing ongoing portfolio maintenance.",
      details: [
        "Expert prosecution of patent applications through examination",
        "Strategic response to patent office objections and requirements",
        "Grant optimization and finalization procedures",
        "Comprehensive deadline tracking and renewal management",
        "Ongoing patent portfolio maintenance and strategic advice"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Process
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Systematic Approach to Patent Success
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our proven four-step process ensures comprehensive patent protection while maintaining 
            transparency and collaboration throughout your patent journey.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-16 bg-border hidden lg:block"></div>
              )}
              
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Step Number & Icon */}
                  <div className="lg:col-span-3 bg-gradient-to-br from-primary/5 to-primary/10 p-8 flex flex-col items-center justify-center text-center">
                    <div className="text-4xl font-bold text-primary mb-4">
                      {step.number}
                    </div>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>

                  {/* Step Content */}
                  <div className="lg:col-span-9 p-8">
                    <CardDescription className="text-base text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </CardDescription>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Key Activities:</h4>
                      <ul className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-3">
                            <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Process Benefits */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Our Process Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Collaborative Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Continuous inventor involvement ensures complete capture of all technical innovations and commercial potential.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Strategic Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every step is designed to maximize patent strength and protection scope while optimizing for Indian patent system requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Long-term Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our relationship continues beyond patent grant with ongoing maintenance, monitoring, and strategic portfolio advice.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
