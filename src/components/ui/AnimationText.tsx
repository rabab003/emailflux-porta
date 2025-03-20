import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  animated?: boolean;
  once?: boolean;
  gradient?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  delay = 0,
  animated = true,
  once = false,
  gradient = false,
}) => {
  const [isVisible, setIsVisible] = useState(!animated);

  useEffect(() => {
    if (!animated) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [animated, delay, once]);

  const words = text.split(" ");

  return (
    <span className={cn("inline-block", className)}>
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="inline-block mr-2 last:mr-0">
          {animated ? (
            <span
              className={cn(
                "inline-block transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                gradient && isVisible && "text-gradient"
              )}
              style={{
                transitionDelay: `${delay + wordIndex * 80}ms`,
              }}
            >
              {word}
            </span>
          ) : (
            <span className={cn(gradient && "text-gradient")}>{word}</span>
          )}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;