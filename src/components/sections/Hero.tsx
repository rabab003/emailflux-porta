import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/ui/AnimatedText";
import { ChevronRight, Mail, LineChart, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/10 rounded-full filter blur-[100px] animate-float animation-delay-200" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptLTIgMTBoMXYxaC0xdi0xem0tNi0xMGgxdjFoLTF2LTF6TTJ2MmgxdjFIMXYtMmgxem0wLTNoMXYySDJ2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in">
            <span className="bg-primary h-2 w-2 rounded-full mr-2"></span>
            <span className="text-sm font-medium">Next-gen Email Marketing Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <AnimatedText 
              text="Transform Your Email Marketing With AI-Powered Analytics" 
              gradient 
              className="tracking-tight"
            />
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl animate-fade-in animation-delay-400">
            <AnimatedText 
              text="Boost engagement, increase conversions, and grow your business with our intelligent email marketing platform." 
              delay={400}
            />
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-16 animate-fade-in animation-delay-600">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-6 text-white font-medium flex items-center gap-2 group">
              Get Started <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 px-8 py-6 font-medium">
              Schedule Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full mt-8 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="rounded-xl bg-black/30 border border-white/10 backdrop-blur-sm p-6 flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">99.8%</p>
                <p className="text-muted-foreground text-sm">Delivery Rate</p>
              </div>
            </div>
            
            <div className="rounded-xl bg-black/30 border border-white/10 backdrop-blur-sm p-6 flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <LineChart size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">42%</p>
                <p className="text-muted-foreground text-sm">Open Rate Increase</p>
              </div>
            </div>
            
            <div className="rounded-xl bg-black/30 border border-white/10 backdrop-blur-sm p-6 flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Zap size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">2.5x</p>
                <p className="text-muted-foreground text-sm">Conversion Boost</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
