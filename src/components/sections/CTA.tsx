import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/ui/AnimatedText";
import { ChevronRight, Rocket } from "lucide-react";

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/20 rounded-full filter blur-[100px] animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-accent/10 rounded-full filter blur-[100px] animate-float animation-delay-400" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={cn(
          "max-w-4xl mx-auto rounded-3xl p-10 md:p-16 backdrop-blur-xl bg-black/40 border border-white/10 shadow-2xl transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-6">
              <Rocket size={14} className="text-primary mr-2" />
              <span className="text-sm font-medium">Get Started Today</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <AnimatedText 
                text="Ready to Transform Your Email Marketing?" 
                animated={isVisible}
                gradient
              />
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              <AnimatedText 
                text="Join thousands of businesses that trust EmailFlux to deliver exceptional email experiences." 
                animated={isVisible}
                delay={200}
              />
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-6 text-white font-medium flex items-center gap-2 group">
                Start Free Trial <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 px-8 py-6 font-medium">
                Schedule Demo
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            <div className="text-center">
              <p className="text-3xl font-bold text-gradient">3,500+</p>
              <p className="text-muted-foreground text-sm">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gradient">98%</p>
              <p className="text-muted-foreground text-sm">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gradient">150M+</p>
              <p className="text-muted-foreground text-sm">Emails Sent Monthly</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gradient">24/7</p>
              <p className="text-muted-foreground text-sm">Expert Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;