
import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function AboutSection() {
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

  const details = [
    { label: "Experience", value: "5+ years" },
    { label: "Projects", value: "50+" },
    { label: "Clients", value: "20+" },
    { label: "Location", value: "New York, USA" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-muted/30"
    >
      <div className="container-section">
        <h2 className={cn(
          "section-title transition-all duration-700 transform",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          <div className={cn(
            "lg:col-span-5 transition-all duration-700 delay-100 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                alt="John Doe" 
                className="object-cover w-full h-full relative z-10 mix-blend-overlay dark:mix-blend-normal opacity-90 dark:opacity-100" 
              />
              <div className="absolute inset-0 border-2 border-primary/30 rounded-lg transform translate-x-4 translate-y-4 z-0"></div>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-6">
            <div className={cn(
              "transition-all duration-700 delay-200 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
              <p className="text-lg mb-4">
                I'm a passionate Full Stack Developer with over 5 years of experience in creating web applications and digital solutions. My expertise spans across front-end technologies, back-end systems, and everything in between.
              </p>
              <p className="text-lg mb-4">
                I love tackling complex problems and turning them into simple, beautiful interface designs. My goal is to always build applications that are not only functional but also user-friendly and scalable.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me exploring hiking trails, reading tech blogs, or experimenting with new technologies. I'm always open to new opportunities and collaborations.
              </p>
            </div>

            <div className={cn(
              "grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 transition-all duration-700 delay-300 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
              {details.map((detail, index) => (
                <div key={index} className="text-center p-4 bg-card rounded-lg border border-border shadow-sm">
                  <p className="text-primary font-bold text-xl">{detail.value}</p>
                  <p className="text-muted-foreground">{detail.label}</p>
                </div>
              ))}
            </div>

            <div className={cn(
              "mt-8 space-y-3 transition-all duration-700 delay-400 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
              <h3 className="text-xl font-display font-semibold">What I Do:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Web Application Development",
                  "Responsive UI/UX Design",
                  "RESTful API Development",
                  "Database Design & Optimization",
                  "Cloud Deployment & DevOps",
                  "Performance Optimization"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
