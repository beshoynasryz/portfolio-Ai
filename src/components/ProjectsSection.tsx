
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart functionality, payment integration, and user authentication.",
      image: "https://images.unsplash.com/photo-1661956602868-6ae368943878",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects, and team collaboration with real-time updates.",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db",
      techStack: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive analytics dashboard for tracking and visualizing social media performance across multiple platforms.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      techStack: ["React", "D3.js", "Express", "PostgreSQL", "JWT"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "Weather Forecast App",
      description: "A weather application that provides real-time forecasts, historical data, and interactive maps for locations worldwide.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b",
      techStack: ["React Native", "Node.js", "OpenWeatherMap API", "Geolocation"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-muted/30"
    >
      <div className="container-section">
        <h2 className={cn(
          "section-title transition-all duration-700 transform",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          My Projects
        </h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={cn(
                "project-card overflow-hidden transition-all duration-700 transform",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
