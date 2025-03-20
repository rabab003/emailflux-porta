import { useEffect, useRef, useState } from "react";
import { Mail, MessageSquare, BarChart, Users, BrainCircuit, Target, Clock, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import FeatureCard from "@/components/ui/FeatureCard";
import AnimatedText from "@/components/ui/AnimatedText";

const Features = () => {
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

  const features = [
    {
      icon: BrainCircuit,
      title: "AI-Powered Personalization",
      description: "Automatically tailor content to each recipient based on their behavior and preferences.",
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Gain deep insights into campaign performance with real-time data visualization.",
    },
    {
      icon: Mail,
      title: "Smart Templates",
      description: "Create stunning emails with drag-and-drop templates optimized for engagement.",
    },
    {
      icon: Target,
      title: "Audience Segmentation",
      description: "Target the right customers with precision using AI-driven segmentation tools.",
    },
    {
      icon: Clock,
      title: "Automated Workflows",
      description: "Set up trigger-based email sequences that nurture leads through the funnel.",
    },
    {
      icon: MessageSquare,
      title: "A/B Testing",
      description: "Optimize performance by testing different elements of your emails.",
    },
    {
      icon: Users,
      title: "Audience Growth Tools",
      description: "Build your email list with customizable signup forms and landing pages.",
    },
    {
      icon: Settings,
      title: "Integration Ecosystem",
      description: "Connect seamlessly with your CRM, e-commerce, and other marketing tools.",
    },
  ];

  return (
    <section id="features" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-40 right-20 w-60 h-60 bg-primary/10 rounded-full filter blur-[100px] animate-float" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-accent/5 rounded-full filter blur-[100px] animate-float animation-delay-400" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-gradient">Powerful Features</span>
          </div>
          
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            <AnimatedText 
              text="Everything You Need To Succeed" 
              animated={isVisible}
              gradient
            />
          </h2>
          
          <p className={cn(
            "text-xl text-muted-foreground transition-all duration-700 delay-100",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            <AnimatedText 
              text="Our comprehensive suite of tools helps you create, send, and optimize email campaigns that drive results." 
              animated={isVisible}
              delay={200}
            />
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
