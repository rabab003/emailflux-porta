import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import PricingCard from "@/components/ui/PricingCard";
import AnimatedText from "@/components/ui/AnimatedText";

const Pricing = () => {
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

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started with email marketing.",
      price: "$29",
      features: [
        { text: "Up to 5,000 subscribers", available: true },
        { text: "Basic email templates", available: true },
        { text: "Standard analytics", available: true },
        { text: "Email support", available: true },
        { text: "A/B testing", available: false },
        { text: "Advanced segmentation", available: false },
        { text: "Custom integrations", available: false },
        { text: "Dedicated account manager", available: false },
      ],
      popular: false,
    },
    {
      name: "Pro",
      description: "Ideal for growing businesses looking to scale their email marketing.",
      price: "$79",
      features: [
        { text: "Up to 25,000 subscribers", available: true },
        { text: "Advanced email templates", available: true },
        { text: "Detailed analytics", available: true },
        { text: "Priority email & chat support", available: true },
        { text: "A/B testing", available: true },
        { text: "Advanced segmentation", available: true },
        { text: "Limited custom integrations", available: true },
        { text: "Dedicated account manager", available: false },
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations with advanced email marketing needs.",
      price: "$199",
      features: [
        { text: "Unlimited subscribers", available: true },
        { text: "Premium email templates", available: true },
        { text: "Advanced analytics & AI insights", available: true },
        { text: "24/7 phone & priority support", available: true },
        { text: "Advanced A/B & multivariate testing", available: true },
        { text: "AI-powered segmentation", available: true },
        { text: "Custom integrations & API access", available: true },
        { text: "Dedicated account manager", available: true },
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-1/3 w-64 h-64 bg-primary/5 rounded-full filter blur-[100px] animate-float" />
        <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-accent/10 rounded-full filter blur-[100px] animate-float animation-delay-200" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-gradient">Simple Pricing</span>
          </div>
          
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            <AnimatedText 
              text="Choose the Perfect Plan for Your Business" 
              animated={isVisible}
              gradient
            />
          </h2>
          
          <p className={cn(
            "text-xl text-muted-foreground transition-all duration-700 delay-100",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            <AnimatedText 
              text="No hidden fees or complicated pricing structures. Just straightforward plans that grow with your needs." 
              animated={isVisible}
              delay={200}
            />
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              description={plan.description}
              price={plan.price}
              features={plan.features}
              popular={plan.popular}
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Need a custom plan? <a href="#" className="text-primary hover:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;