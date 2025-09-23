
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, CheckCircle, Info } from "lucide-react";

const Documents = () => {
  const idfSections = [
    "Technical description of your invention",
    "Background and problem solved", 
    "Detailed explanation of innovative features",
    "Commercial applications and benefits",
    "Prior art awareness and differentiation",
    "Supporting documentation and drawings"
  ];

  const instructions = [
    "Complete all sections thoroughly with technical details",
    "Include any supporting documents, drawings, or prototypes",
    "Provide examples and embodiments where applicable", 
    "Submit the completed form before our invention disclosure discussion",
    "Contact us if you need assistance completing any section"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Documents
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Patent Documentation Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Essential forms and documents to streamline your patent application process and ensure comprehensive invention disclosure.
          </p>
        </div>

        {/* Main Document Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <CardHeader className="text-center pb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold">Invention Disclosure Form (IDF)</CardTitle>
              <CardDescription className="text-lg">
                A comprehensive form designed to systematically document your invention and provide us with all necessary information for patent evaluation.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Download Section */}
              <div className="text-center">
                <Button size="lg" className="flex items-center space-x-2 mx-auto">
                  <Download className="h-5 w-5" />
                  <span>Download IDF (Invention Disclosure Form)</span>
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  PDF format - Complete and submit before your consultation
                </p>
              </div>

              {/* What's Included */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                  This form will guide you through:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {idfSections.map((section, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-background rounded-lg border">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{section}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructions */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                  Instructions for Completion:
                </h3>
                <div className="space-y-4">
                  {instructions.map((instruction, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-sm text-muted-foreground">{instruction}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Confidentiality Notice */}
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      Confidentiality Guarantee
                    </h4>
                    <p className="text-sm text-blue-700 dark:text-blue-200">
                      The information you provide will be kept strictly confidential and will form the foundation 
                      for our patent analysis and drafting services. All communications are protected under 
                      attorney-client privilege and professional confidentiality agreements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="text-center pt-4">
                <h4 className="font-semibold text-foreground mb-4">Ready to Get Started?</h4>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="lg">
                    Schedule Consultation
                  </Button>
                  <Button variant="outline" size="lg">
                    Contact for Assistance
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Resources */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Patent Process Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm mb-4">
                  Comprehensive guide explaining our four-step patent process from initial consultation to grant.
                </CardDescription>
                <Button variant="outline" size="sm">
                  View Process
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Service Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm mb-4">
                  Detailed information about our patent services including search, drafting, and filing.
                </CardDescription>
                <Button variant="outline" size="sm">
                  View Services
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">FAQ Section</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm mb-4">
                  Answers to frequently asked questions about patents, patentability, and our processes.
                </CardDescription>
                <Button variant="outline" size="sm">
                  View FAQ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
