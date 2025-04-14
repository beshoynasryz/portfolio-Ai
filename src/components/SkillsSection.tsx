
import { useEffect, useRef, useState } from "react";
import { Code, Database, Server, Wrench } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export function SkillsSection() {
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

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Next.js", level: 75 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 85 },
        { name: "Python", level: 70 },
        { name: "Django", level: 65 },
        { name: "GraphQL", level: 75 },
        { name: "REST API", level: 90 },
      ],
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "Redis", level: 65 },
        { name: "Firebase", level: 70 },
      ],
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 80 },
        { name: "Jest", level: 75 },
        { name: "Figma", level: 65 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20"
    >
      <div className="container-section">
        <h2 className={cn(
          "section-title transition-all duration-700 transform",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          My Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={cn(
                "bg-card p-6 rounded-lg border border-border shadow-sm transition-all duration-700 transform",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
              style={{ transitionDelay: `${categoryIndex * 100 + 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-primary/10 rounded-md mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-display font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className={cn(
                      "space-y-2 transition-all duration-700 transform",
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    )}
                    style={{ transitionDelay: `${skillIndex * 100 + categoryIndex * 100 + 400}ms` }}
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={isVisible ? skill.level : 0} 
                      className="h-2" 
                      style={{ transition: "all 1s ease-out" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
