
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section">
      <SectionTitle 
        subtitle="Get in Touch" 
        title="Contact Me" 
        align="center"
      />
      
      <div className="grid md:grid-cols-5 gap-12 items-start">
        {/* Contact Info */}
        <div className="md:col-span-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-display font-semibold mb-6">Let's Connect</h3>
            <p className="text-foreground/80 mb-8">
              Feel free to reach out for project collaborations, research opportunities, or just to say hello. I'm always open to discussing innovative ideas and potential partnerships.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:miguel@example.com" className="text-foreground/70 hover:text-primary transition-colors">
                    miguel@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-foreground/70">
                    NYU Abu Dhabi, Saadiyat Island<br />
                    Abu Dhabi, UAE
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-foreground/70">
                    Available upon request
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="md:col-span-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your email"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Message subject"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center">
                  Send Message
                  <Send size={16} className="ml-2" />
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
