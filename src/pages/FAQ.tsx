
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
  const faqSections = [
    {
      title: "Patentability Criteria",
      questions: [
        {
          question: "What are the fundamental requirements for an invention to be patentable?",
          answer: "An invention must satisfy three essential criteria:\n\n• **Novelty**: The invention must be new and not disclosed anywhere in the world before the filing date\n• **Inventive Step**: The invention must not be obvious to a person skilled in the relevant technical field\n• **Industrial Application**: The invention must be capable of being used in industry or have practical utility"
        }
      ]
    },
    {
      title: "Non-Patentable Inventions",
      questions: [
        {
          question: "What inventions cannot be patented under Sections 3 & 4?",
          answer: "**Section 3 - What Cannot Be Patented:**\n\n• **Mathematical Methods & Business Methods**: Pure mathematical formulas and business methods per se\n• **Computer Programs**: Software per se, though technical applications may be patentable\n• **Mental Acts**: Methods of performing mental acts, playing games, or doing business\n• **Scientific Principles**: Discoveries of natural phenomena or scientific principles\n• **Medical Methods**: Methods of treatment, diagnosis, or surgery for humans/animals\n• **Plants & Animals**: Traditional knowledge and naturally occurring substances\n\n**Section 4 - Additional Exclusions:**\n\n• **Atomic Energy**: Inventions related to atomic energy applications\n• **Defence Applications**: Inventions with potential military applications may face restrictions"
        }
      ]
    },
    {
      title: "When You Need Different Searches",
      questions: [
        {
          question: "When do you need a Patentability Search?",
          answer: "Patentability search is essential:\n\n• **Before Filing**: To assess prospects and avoid wasted filing costs\n• **During R&D**: To guide development toward patentable innovations\n• **For Investment Decisions**: To evaluate IP value for funding or partnerships\n• **Prior to Public Disclosure**: To determine if patent protection is viable\n• **For Portfolio Strategy**: To identify the strongest innovations for patent protection"
        },
        {
          question: "When do you need an FTO Search?",
          answer: "Freedom to Operate analysis is crucial:\n\n• **Before Product Launch**: To avoid infringement risks in target markets\n• **During Product Development**: To identify design constraints early in development\n• **For Market Entry**: When entering new geographical or technical markets\n• **Before Major Investment**: To assess IP risks before significant commercialization investment\n• **For Licensing Decisions**: To understand existing patent landscape for licensing opportunities"
        },
        {
          question: "When do you need Infringement Analysis?",
          answer: "Infringement search becomes necessary:\n\n• **Product Development Stage**: To ensure your innovation doesn't infringe existing patents\n• **Competitive Response**: When competitors launch similar products or make infringement claims\n• **Due Diligence**: Before mergers, acquisitions, or major business partnerships\n• **Ongoing Monitoring**: Regular surveillance to detect potential infringement issues\n• **Litigation Support**: When facing infringement allegations or considering enforcement action"
        },
        {
          question: "When do you need Landscape Analysis?",
          answer: "Patent landscape analysis provides value:\n\n• **Strategic Planning**: To identify white spaces and innovation opportunities\n• **R&D Direction**: To guide research investment toward promising areas\n• **Competitive Intelligence**: To understand competitor strategies and patent positions\n• **Technology Assessment**: To evaluate the maturity and development trends in your field\n• **Investment Decisions**: To assess market potential and competitive dynamics"
        },
        {
          question: "When do you need Invalidity & Validity Search?",
          answer: "These searches become important:\n\n• **Patent Opposition**: When facing post-grant opposition or pre-grant opposition\n• **Litigation Defense**: To defend against infringement claims by challenging patent validity\n• **Competitive Strategy**: To challenge competitor patents that block your market access\n• **Portfolio Strengthening**: To validate your own patents against potential challenges\n• **Licensing Negotiations**: To assess the strength of patents in licensing discussions"
        }
      ]
    },
    {
      title: "Patent Drafting & Filing",
      questions: [
        {
          question: "How important is Patent Drafting & Why Choose Us?",
          answer: "Quality patent drafting is crucial because:\n\n• **Claim Scope Determines Protection**: Well-drafted claims provide broader, stronger protection\n• **Technical Accuracy**: Precise technical description prevents claim interpretation issues\n• **Prosecution Success**: Strategic drafting improves examination success rates\n• **Commercial Value**: Properly drafted patents have higher licensing and enforcement value\n• **Global Compatibility**: Professional drafting facilitates international filing strategies\n\n**Why Choose Our Drafting Services:**\n\n• Domain-specific technical expertise across multiple industries\n• Strategic claim construction maximizing protection scope\n• Proven track record with 100+ successfully drafted patents\n• Collaborative approach ensuring complete invention capture\n• Jurisdiction-optimized drafting for Indian patent system"
        },
        {
          question: "How important is Date Management & Office Action Response?",
          answer: "Patent maintenance is critical because:\n\n• **Deadline Compliance**: Missing deadlines can result in patent abandonment or lapse\n• **Office Action Response**: Quality responses determine patent grant success\n• **Cost Management**: Proper planning prevents penalty fees and rushed responses\n• **Portfolio Value**: Well-maintained patents retain their commercial and strategic value\n• **Long-term Protection**: Consistent maintenance ensures continuous protection throughout patent term\n\n**Our Maintenance Services Include:**\n\n• Comprehensive deadline tracking and reminder systems\n• Expert office action analysis and strategic response preparation\n• Fee management and renewal scheduling\n• Regular portfolio health assessments\n• Proactive infringement monitoring for granted patents"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Frequently Asked Questions
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to Know
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive answers to common questions about patents, our services, and the patent process.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqSections.map((section, sectionIndex) => (
            <Card key={sectionIndex} className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {section.questions.map((faq, questionIndex) => (
                    <AccordionItem key={questionIndex} value={`${sectionIndex}-${questionIndex}`}>
                      <AccordionTrigger className="text-left text-lg font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-4">
                        <div className="prose prose-sm max-w-none">
                          {faq.answer.split('\n').map((line, lineIndex) => {
                            if (line.startsWith('• **') && line.includes('**:')) {
                              const [boldPart, ...restParts] = line.split('**:');
                              const title = boldPart.replace('• **', '');
                              const description = restParts.join('**:');
                              return (
                                <div key={lineIndex} className="mb-2">
                                  <strong>• {title}:</strong> {description}
                                </div>
                              );
                            } else if (line.startsWith('**') && line.endsWith('**')) {
                              const title = line.replace(/\*\*/g, '');
                              return (
                                <h4 key={lineIndex} className="font-semibold text-foreground mt-4 mb-2">
                                  {title}
                                </h4>
                              );
                            } else if (line.trim() === '') {
                              return <br key={lineIndex} />;
                            } else {
                              return (
                                <div key={lineIndex} className="mb-2">
                                  {line}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <CardContent className="p-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-6">
                Our patent experts are here to help. Contact us for personalized answers to your specific questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-sm text-muted-foreground">
                  📧 patellectipsolutions@gmail.com
                </div>
                <div className="text-sm text-muted-foreground">
                  📞 +91 86180 33312
                </div>
              </div>
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="text-blue-600"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zM4.943 13.447V6.169H2.542v7.278h2.401zM3.743 5.189c.837 0 1.356-.554 1.356-1.248-.015-.71-.52-1.248-1.342-1.248S2.4 3.23 2.4 3.94c0 .694.52 1.249 1.328 1.249h.015zm4.905 8.258V9.359c0-.218.016-.437.08-.594.176-.437.577-.89 1.25-.89.883 0 1.236.671 1.236 1.654v3.918h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.272 0-1.845.705-2.165 1.2h.031v-1.032H8.648c.03.668 0 7.281 0 7.281h2.4z"/>
                </svg>
                <a
                  href="https://www.linkedin.com/company/patellect-ip-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-600"
                >
                  Patellect Patent
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
