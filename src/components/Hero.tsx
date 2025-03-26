
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 20px 20px, rgba(0,0,0,0.1) 2px, transparent 0)",
          backgroundSize: "40px 40px"
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-primary font-medium mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              Mechanical Engineering Student
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              Miguel Rodríguez
            </h1>
            <p className="text-lg text-foreground/80 mb-8 max-w-lg opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              Senior undergraduate mechanical engineering student from Mexico at NYU Abu Dhabi, passionate about sustainable design and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
              <a href="#projects" className="btn-primary">
                View My Projects
              </a>
              <a href="#contact" className="px-6 py-3 border border-primary/30 rounded-md text-foreground hover:bg-primary/5 transition-colors text-center">
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Miguel Rodríguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white text-sm font-medium px-4 py-2 rounded shadow-md">
                NYU Abu Dhabi
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-foreground/60 hover:text-primary transition-colors"
        aria-label="Scroll to About section"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
