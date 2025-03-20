
import { useState } from "react";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface PricingFeature {
  text: string;
  available: boolean;
}

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  features: PricingFeature[];
  popular?: boolean;
  className?: string;
  delay?: number;
}

const PricingCard = ({
  name,
  description,
  price,
  features,
  popular = false,
  className,
  delay = 0,
}: PricingCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={cn(
        "relative p-6 rounded-2xl backdrop-blur-md border transition-all duration-500 ease-out animate-fade-in",
        popular 
          ? "bg-gradient-to-b from-black to-primary/10 border-primary/30 shadow-[0_0_25px_-5px] shadow-primary/10" 
          : "bg-card/40 border-white/10",
        isHovered ? "translate-y-[-10px]" : "",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm h-12">{description}</p>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-muted-foreground ml-1">/month</span>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className={cn(
              "mr-2 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full text-xs",
              feature.available 
                ? "bg-primary/10 text-primary" 
                : "bg-muted text-muted-foreground"
            )}>
              {feature.available ? <CheckIcon size={12} /> : ""}
            </span>
            <span className={cn(
              "text-sm",
              !feature.available && "text-muted-foreground"
            )}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <Button 
        className={cn(
          "w-full transition-all duration-300",
          popular 
            ? "bg-primary hover:bg-primary/90" 
            : "bg-secondary hover:bg-secondary/80"
        )}
      >
        Get Started
      </Button>
    </div>
  );
};

export default PricingCard;