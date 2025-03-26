
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display text-xl font-medium">
              <span className="text-primary">R</span>omán
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a 
              href="mailto:roman@example.com" 
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-foreground/10 text-center text-sm text-foreground/60">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-primary" /> | &copy; {currentYear} Román Villarreal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
