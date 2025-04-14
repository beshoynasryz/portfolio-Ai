
import { ArrowDown, GitHub, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.opacity = "0";
      setTimeout(() => {
        if (sectionRef.current) {
          sectionRef.current.style.opacity = "1";
          sectionRef.current.style.transition = "opacity 0.8s ease-in-out";
        }
      }, 300);
    }
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="container-section grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-2">
            <p className="text-primary font-mono text-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Hello, my name is
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
              John Doe
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
              I build things for the web.
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-xl animate-fade-in" style={{ animationDelay: "0.8s" }}>
            I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on creating accessible, human-centered products.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "1s" }}>
            <Button asChild size="lg" className="rounded-full">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="#projects">View My Work</a>
            </Button>
          </div>

          <div className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: "1.2s" }}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <GitHub size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl opacity-30"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-full h-full rounded-full border-2 border-primary/30 flex items-center justify-center text-4xl font-display font-bold">
                JS
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-primary">
          <ArrowDown size={24} />
          <span className="sr-only">Scroll Down</span>
        </a>
      </div>
    </section>
  );
}
