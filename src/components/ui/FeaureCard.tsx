
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
  className,
}: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative p-6 rounded-2xl backdrop-blur-md bg-card/30 border border-white/10 shadow-xl transition-all duration-700 ease-out overflow-hidden group hover:translate-y-[-5px]",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10",
        className
      )}
    >
      <div className="relative z-10">
        <div className="mb-4 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center text-primary">
          <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default FeatureCard;