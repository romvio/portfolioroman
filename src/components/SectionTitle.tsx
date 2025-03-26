
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionTitle = ({ subtitle, title, align = "left", className }: SectionTitleProps) => {
  return (
    <div 
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
    >
      {subtitle && (
        <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          {subtitle}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-semibold opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
        {title}
      </h2>
      <div className="w-20 h-1 bg-primary mt-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards', marginLeft: align === "center" ? "auto" : align === "right" ? "auto" : "0", marginRight: align === "center" ? "auto" : "0" }}></div>
    </div>
  );
};

export default SectionTitle;
