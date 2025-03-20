
import { cn } from "@/lib/utils";
import { QuoteIcon } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  delay?: number;
  className?: string;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  delay = 0,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "p-6 rounded-2xl backdrop-blur-md bg-card/30 border border-white/10 shadow-xl animate-fade-in h-full flex flex-col",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-primary/60 mb-4">
        <QuoteIcon size={24} />
      </div>
      
      <p className="text-base italic mb-6 flex-grow">{quote}</p>
      
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">
          {role}, {company}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;