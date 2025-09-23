import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";
import { useForm } from "@formspree/react";
import { useToast } from "@/hooks/use-toast";

export const ConsultationForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [state, handleSubmit] = useForm("xanpwajd");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    requirement: "",
  });

  const { toast } = useToast();

  useEffect(() => {
    if(state.succeeded) {
      toast({
        title: "Success",
        description: "Your request has been received. Our team will contact you soon",
        variant: "success",
      });

      setIsFormOpen(false);
      setFormData({ fullName: "", email: "", phone: "", requirement: "" });
      setIsSubmitting(false);
    } else if(state.errors) {
      toast({
        title: "Error",
        description: "Something went wrong, please refresh and try again",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  }, [state.succeeded, state.errors]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.requirement) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const formPayload = {
      Subject: "Free Consultation Request",
      "Full Name": formData.fullName,
      Email: formData.email,
      Phone: formData.phone,
      Requirement: formData.requirement,
      Body: `Dear Patellect IP Solutions Team,
          I would like to request a free consultation.
          Full Name: ${formData.fullName}
          Email: ${formData.email}
          Phone: ${formData.phone.toString()}
          Requirement:
            ${formData.requirement}

        Best regards,
        ${formData.fullName}`,
    };

    await handleSubmit(formPayload);
  };

  return (
    <>
      <Button
        size="lg"
        className="flex items-center space-x-2"
        onClick={() => setIsFormOpen(true)}
      >
        <span>Schedule Free Consultation</span>
      </Button>

      {isFormOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2"
                onClick={() => setIsFormOpen(false)}
                disabled={isSubmitting}
              >
                <X className="h-4 w-4" />
              </Button>
              <CardTitle>Free Consultation Request</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you soon
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email ID *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirement">Requirement *</Label>
                  <Textarea
                    id="requirement"
                    placeholder="Please describe your patent requirements, technology domain, or specific questions you have..."
                    className="min-h-[100px]"
                    value={formData.requirement}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, requirement: e.target.value }))
                    }
                    required
                  />
                </div>

                <div className="flex gap-2 pt-4">
                  <Button type="submit" className="flex-1" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsFormOpen(false)}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};
