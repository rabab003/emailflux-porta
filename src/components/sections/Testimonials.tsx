import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import TestimonialCard from "@/components/ui/TestimonialCard";
import AnimatedText from "@/components/ui/AnimatedText";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

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

  const testimonials = [
    {
      quote: "EmailFlux revolutionized our marketing strategy. We've seen a 40% increase in open rates and a 25% boost in conversions since switching.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechGrowth Inc.",
    },
    {
      quote: "The AI-powered segmentation is a game-changer. We're now sending highly targeted campaigns that resonate with our audience on a personal level.",
      author: "Michael Chen",
      role: "E-commerce Manager",
      company: "Retail Innovations",
    },
    {
      quote: "I used to spend hours creating email campaigns. With EmailFlux, I can create, schedule, and analyze campaigns in half the time.",
      author: "Jessica Rodriguez",
      role: "Digital Marketing Specialist",
      company: "Creative Solutions",
    },
    {
      quote: "The analytics dashboard provides insights we never had before. Now we know exactly what works and what doesn't with our email campaigns.",
      author: "David Wilson",
      role: "Growth Lead",
      company: "SaaS Masters",
    },
    {
      quote: "EmailFlux's customer support team is exceptional. They helped us migrate from our old platform seamlessly and provided valuable strategy advice.",
      author: "Emma Thompson",
      role: "Operations Manager",
      company: "Global Ventures",
    },
    {
      quote: "As a small business owner, I needed an email platform that was powerful yet easy to use. EmailFlux delivers on both fronts.",
      author: "Robert Garcia",
      role: "Founder & CEO",
      company: "Artisan Crafts Co.",
    },
  ];

  const nextSlide = () => {
    if (!slidesRef.current) return;
    
    if (activeSlide < Math.ceil(testimonials.length / 3) - 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(0);
    }
  };

  const prevSlide = () => {
    if (!slidesRef.current) return;
    
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(Math.ceil(testimonials.length / 3) - 1);
    }
  };

  const totalSlides = Math.ceil(testimonials.length / 3);
  
  return (
    <section id="testimonials" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-primary/10 rounded-full filter blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full filter blur-[100px] animate-float animation-delay-600" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-gradient">Customer Success</span>
          </div>
          
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            <AnimatedText 
              text="What Our Customers Are Saying" 
              animated={isVisible}
              gradient
            />
          </h2>
          
          <p className={cn(
            "text-xl text-muted-foreground transition-all duration-700 delay-100",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            <AnimatedText 
              text="Join thousands of businesses that trust EmailFlux to power their email marketing campaigns." 
              animated={isVisible}
              delay={200}
            />
          </p>
        </div>
        
        <div className="relative">
          <div 
            ref={slidesRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials
                      .slice(slideIndex * 3, slideIndex * 3 + 3)
                      .map((testimonial, index) => (
                        <TestimonialCard
                          key={slideIndex * 3 + index}
                          quote={testimonial.quote}
                          author={testimonial.author}
                          role={testimonial.role}
                          company={testimonial.company}
                          delay={(index % 3) * 100}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {totalSlides > 1 && (
            <div className="flex justify-center items-center mt-10 gap-4">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-white/20 bg-black/30 backdrop-blur-sm hover:bg-white/10"
              >
                <ChevronLeft size={18} />
              </Button>
              
              <div className="flex gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all duration-300",
                      activeSlide === index 
                        ? "bg-primary" 
                        : "bg-white/20 hover:bg-white/40"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-white/20 bg-black/30 backdrop-blur-sm hover:bg-white/10"
              >
                <ChevronRight size={18} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
