import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 tracking-tighter ">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {features.map((feature, index) => (
              <Card key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    {feature.icon}
                    <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                    <p className="text-muted-foreground mt-2">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">

            <div className="flex flex-col items-center justify-center space-y-2">
            <h3 className="text-4xl font-bold">50+</h3>
            <p className="text-muted-foreground">Industries Covered</p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2">
            <h3 className="text-4xl font-bold">1000+</h3>
            <p className="text-muted-foreground">Interview Questions</p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2">
            <h3 className="text-4xl font-bold">95%</h3>
            <p className="text-muted-foreground">Success Rate</p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2">
            <h3 className="text-4xl font-bold">24/7</h3>
            <p className="text-muted-foreground">AI Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-4 tracking-tighter ">How it works</h2>
          <p className="text-muted-foreground text-center">Four simple steps to accelerate your career growth</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {howItWorks.map((item, index) => {
            return (
              <div key={index}
              className="flex flex-col items-center justify-center space-y-2 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                <p className="text-muted-foreground mt-2">{item.description}</p>
              </div>
            );
          })}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-12 md:py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-4 tracking-tighter ">What our users say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonial.map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                <Image
                  width={64}
                  height={64}
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="rounded-full object-cover border-2 border-primary/20"
                />
                <div className="space-y-1">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                </div>
                <blockquote className="mt-4 text-muted-foreground italic">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-4 tracking-tighter ">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-center">Answers to common questions about our platform</p>
          </div>
          <div className="max-w-6xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, index) => {
              return (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
          </div>
        </div>
      </section>


      {/* Conversion Section */}
      <section className="w-full">
        <div className="mx-auto py-24 gradient rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
            Ready to Accelerate Your Career?</h2>
          <p className="mx-auto text-primary-foreground/80 max-w-[600px] md:text-xl">
            Join CareerIQ today and take your career to the next level.
          </p>
          <Link href="/dashboard" passHref>
          <Button
            size="lg"
            variant="secondary"
            className="h-11 mt-5 animate-bounce"
          >
            Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          </Link>


          </div>
        </div>
      </section>
      
    </div>
  );
}