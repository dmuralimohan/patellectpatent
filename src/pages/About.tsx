import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ConsultationForm } from "@/components/ConsultationForm";
import { 
  Users, 
  Award, 
  Target, 
  Shield,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "300+ Patentability Searches",
      description: "Completed across multiple technology domains with comprehensive analysis"
    },
    {
      icon: Shield,
      title: "100+ Patents Drafted",
      description: "Successfully filed and prosecuted with strategic claim construction"
    },
    {
      icon: Users,
      title: "Ongoing Client Support",
      description: "Comprehensive patent portfolio maintenance and strategic guidance"
    },
    {
      icon: Target,
      title: "Regular Infringement Monitoring",
      description: "Ensuring continued protection for our clients' intellectual property"
    }
  ];

  const industries = [
    "Automotive Innovations",
    "Pharmaceutical Developments", 
    "Textile Technologies",
    "Electronics Advancements",
    "Mechanical Engineering",
    "Software Applications",
    "Biotechnology",
    "Chemical Processes"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About Us
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Innovation Partners in Patent Excellence
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a passionate group of patent professionals dedicated to securing your inventions 
            in the most effective way possible.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <CardContent className="p-12 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our team thrives on the challenge of protecting innovative technologies across diverse industries, 
                  bringing together technical expertise and patent law knowledge to deliver exceptional results. 
                  We understand that each invention is unique, and we tailor our services to meet the specific 
                  needs of every client.
                </p>
                <p className="text-base text-muted-foreground">
                  With a multidisciplinary approach spanning multiple technology domains, we ensure comprehensive 
                  protection for your intellectual property while providing strategic guidance for long-term success.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Track Record */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Track Record</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {achievement.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industries Served */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
                <CardContent className="p-2">
                  <p className="text-sm font-medium text-foreground">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Get in Touch</CardTitle>
              <CardDescription>
                Ready to protect your innovations? Contact our team of patent experts today.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">patellectipsolutions@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">+91 86180 33312</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">
                    Karapakkam, Chennai-97<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="text-sm flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/company/patellect-ip-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Patellect IP Solutions LinkedIn"
                  className="flex items-center gap-5 text-black hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452H17.21V14.9c0-1.31-.025-2.996-1.825-2.996-1.827 0-2.106 1.426-2.106 2.899v5.648H9.008V9h3.089v1.561h.044c.429-.811 1.478-1.667 3.041-1.667 3.251 0 3.855 2.141 3.855 4.923v6.175zM5.337 7.433c-1.003 0-1.815-.814-1.815-1.815C3.522 4.615 4.334 3.8 5.336 3.8c1.001 0 1.815.815 1.815 1.818 0 1.001-.814 1.815-1.815 1.815zM6.767 20.452H3.908V9h2.859v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.726v20.545C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.726C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                  <span className="text-black mL10">LinkedIn</span>
                </a>
              </div>
              <ConsultationForm />
            </CardContent>
          </Card>

          {/* Company Values */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Our Values</CardTitle>
              <CardDescription>
                The principles that guide our patent services and client relationships.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Excellence</h4>
                  <p className="text-sm text-muted-foreground">
                    We strive for the highest quality in every patent service we provide, ensuring comprehensive protection for your innovations.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Collaboration</h4>
                  <p className="text-sm text-muted-foreground">
                    We work closely with inventors and companies, ensuring complete understanding and optimal patent strategy development.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Innovation</h4>
                  <p className="text-sm text-muted-foreground">
                    We embrace new technologies and methodologies to provide cutting-edge patent solutions across diverse industries.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Integrity</h4>
                  <p className="text-sm text-muted-foreground">
                    We maintain the highest ethical standards and transparency in all our client relationships and patent services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
