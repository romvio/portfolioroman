
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section id="about" className="section">
      <SectionTitle 
        subtitle="About Me" 
        title="My Journey from Mexico to NYU Abu Dhabi" 
      />
      
      <div className="grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="About Miguel Rodriguez" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-lg"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/20 rounded-lg"></div>
          </div>
        </div>
        
        <div className="md:col-span-7">
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-semibold mb-4 font-display">My Background</h3>
            <p className="text-foreground/80 mb-6 text-balance">
              Born and raised in Mexico City, I developed a passion for engineering from an early age. Growing up surrounded by a rich culture that values creativity and resourcefulness, I was drawn to mechanical engineering for its blend of technical precision and innovative problem-solving.
            </p>
          </div>
          
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-semibold mb-4 font-display">Global Perspective</h3>
            <p className="text-foreground/80 mb-6 text-balance">
              My journey to NYU Abu Dhabi has been transformative, offering me a unique global perspective on engineering challenges and solutions. The international environment at NYUAD has enhanced my collaborative skills and cultural awareness, preparing me to work on diverse engineering teams across borders.
            </p>
          </div>
          
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-semibold mb-4 font-display">Engineering Philosophy</h3>
            <p className="text-foreground/80 mb-6 text-balance">
              I believe in engineering that serves humanity and protects our planet. My academic focus combines mechanical engineering fundamentals with sustainable design principles. I aim to create solutions that are technically robust, environmentally responsible, and socially beneficial.
            </p>
            
            <a href="#projects" className="btn-primary inline-block mt-2">See My Work</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
