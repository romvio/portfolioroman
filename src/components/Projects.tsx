
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const projectCategories = ["All", "Mechanical Design", "Renewable Energy", "Robotics"];

const projectsData = [
  {
    id: 1,
    title: "Solar-Powered Water Purification System",
    description: "Designed and built a small-scale water purification system powered entirely by solar energy for use in rural areas with limited infrastructure.",
    image: "https://images.unsplash.com/photo-1541185934-01b600ea069c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    technologies: ["CAD", "Solar Engineering", "Water Filtration"],
    category: "Renewable Energy",
  },
  {
    id: 2,
    title: "Autonomous Delivery Robot",
    description: "Developed a compact robot capable of navigating campus environments to deliver small packages autonomously using machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    technologies: ["Robotics", "Machine Learning", "Sensor Fusion"],
    category: "Robotics",
  },
  {
    id: 3,
    title: "Lightweight Electric Vehicle Chassis",
    description: "Engineered an optimized chassis design for an electric vehicle prototype, reducing weight while maintaining structural integrity and safety standards.",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    technologies: ["SolidWorks", "FEA", "Materials Science"],
    category: "Mechanical Design",
  },
  {
    id: 4,
    title: "Wind Turbine Blade Optimization",
    description: "Researched and implemented aerodynamic improvements to small-scale wind turbine blades, increasing energy capture efficiency by 18%.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    technologies: ["Fluid Dynamics", "3D Printing", "Testing"],
    category: "Renewable Energy",
  },
  {
    id: 5,
    title: "Prosthetic Hand Mechanism",
    description: "Designed an affordable and lightweight prosthetic hand with adaptive grip mechanisms for various everyday tasks and improved user comfort.",
    image: "https://images.unsplash.com/photo-1624811072711-3e3481f355f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1658&q=80",
    technologies: ["Biomechanics", "CAD", "Prototyping"],
    category: "Mechanical Design",
  },
  {
    id: 6,
    title: "Drone for Environmental Monitoring",
    description: "Created a specialized drone equipped with sensors to monitor air quality, temperature variations, and collect environmental data in hard-to-reach locations.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    technologies: ["Drone Design", "Sensor Integration", "Data Analysis"],
    category: "Robotics",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);
  
  return (
    <section id="projects" className="section bg-secondary/30">
      <SectionTitle 
        subtitle="My Work" 
        title="Featured Engineering Projects" 
        align="center"
      />
      
      <div className="flex flex-wrap justify-center gap-3 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
        {projectCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === category 
                ? "bg-primary text-primary-foreground" 
                : "bg-white text-foreground/70 hover:bg-secondary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${0.3 + (index * 0.1)}s`, animationFillMode: 'forwards' }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
