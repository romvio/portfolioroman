
import SectionTitle from "./SectionTitle";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    id: 1,
    institution: "New York University Abu Dhabi",
    degree: "Bachelor of Science in Mechanical Engineering",
    location: "Abu Dhabi, UAE",
    period: "2020 - Present",
    description: "Senior undergraduate specializing in sustainable engineering and robotics design. Participated in the Global Engineering Challenge and Dean's List recipient for academic excellence.",
  },
  {
    id: 2,
    institution: "Tecnológico de Monterrey",
    degree: "Exchange Program in Engineering",
    location: "Monterrey, Mexico",
    period: "Spring 2022",
    description: "Semester exchange focusing on advanced manufacturing technologies and Mexican engineering practices. Collaborated on industry-partnered projects with local manufacturing firms.",
  },
  {
    id: 3,
    institution: "Preparatoria Nacional",
    degree: "High School Diploma, Science Focus",
    location: "Mexico City, Mexico",
    period: "2016 - 2020",
    description: "Graduated with honors with focus on mathematics, physics, and engineering foundations. Winner of the National Young Engineers Competition and active member of the Robotics Club.",
  },
];

const Education = () => {
  return (
    <section id="education" className="section">
      <SectionTitle 
        subtitle="My Education" 
        title="Academic Background" 
      />
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-secondary md:left-1/2 md:-ml-0.5"></div>
        
        {/* Timeline Items */}
        {educationData.map((item, index) => (
          <div 
            key={item.id}
            className="relative mb-12 opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${0.3 + (index * 0.2)}s`, animationFillMode: 'forwards' }}
          >
            <div className={`flex flex-col md:flex-row gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Timeline Marker */}
              <div className="absolute left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md md:left-1/2 md:-ml-4">
                <GraduationCap size={18} className="text-primary-foreground" />
              </div>
              
              {/* Content */}
              <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 !== 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                  <h3 className="text-xl font-semibold mb-2">{item.institution}</h3>
                  <h4 className="text-lg font-medium text-primary mb-4">{item.degree}</h4>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center text-sm text-foreground/70">
                      <Calendar size={14} className="mr-1" />
                      {item.period}
                    </div>
                    <div className="flex items-center text-sm text-foreground/70">
                      <MapPin size={14} className="mr-1" />
                      {item.location}
                    </div>
                  </div>
                  
                  <p className="text-foreground/80 text-balance">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
