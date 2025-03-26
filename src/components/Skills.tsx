
import SectionTitle from "./SectionTitle";

const technicalSkills = [
  { name: "SolidWorks", level: 95 },
  { name: "MATLAB", level: 90 },
  { name: "AutoCAD", level: 85 },
  { name: "3D Printing", level: 85 },
  { name: "ANSYS", level: 80 },
  { name: "Python", level: 75 },
  { name: "CNC Machining", level: 70 },
  { name: "Arduino", level: 85 },
  { name: "Fusion 360", level: 80 },
  { name: "Finite Element Analysis", level: 75 },
];

const softSkills = [
  "Problem-solving",
  "Project Management",
  "Cross-cultural Communication",
  "Team Leadership",
  "Technical Writing",
  "Presentation Skills",
  "Research Methods",
  "Creative Thinking",
];

const areas = [
  {
    title: "Mechanical Design",
    description: "Experienced in designing mechanical systems with a focus on efficiency, sustainability, and manufacturability.",
  },
  {
    title: "Renewable Energy",
    description: "Passionate about developing clean energy solutions and improving existing renewable technologies.",
  },
  {
    title: "Robotics",
    description: "Skilled in designing robotic systems and integrating mechanical components with electronic controls.",
  },
  {
    title: "Sustainable Engineering",
    description: "Committed to creating engineering solutions that minimize environmental impact and promote resource efficiency.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section bg-gradient-to-b from-white to-secondary/20">
      <SectionTitle 
        subtitle="My Expertise" 
        title="Skills & Specializations" 
        align="center"
      />
      
      <div className="grid md:grid-cols-2 gap-16">
        {/* Technical Skills */}
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <h3 className="text-2xl font-display font-semibold mb-6 text-center md:text-left">Technical Skills</h3>
          
          <div className="space-y-6">
            {technicalSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-foreground/70">{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-bar-fill" 
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${0.1 * index}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Soft Skills & Areas */}
        <div>
          <div className="mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-display font-semibold mb-6 text-center md:text-left">Soft Skills</h3>
            
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-display font-semibold mb-6 text-center md:text-left">Areas of Interest</h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <div 
                  key={index} 
                  className="bg-white p-5 rounded-lg shadow-sm border border-primary/10"
                >
                  <h4 className="text-lg font-semibold mb-2">{area.title}</h4>
                  <p className="text-sm text-foreground/80">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
