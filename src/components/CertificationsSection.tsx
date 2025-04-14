
import { useEffect, useRef, useState } from "react";
import { Award, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export function CertificationsSection() {
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

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      date: "2023",
      logo: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c4f46dbd0ad37ef0ffc5ced39bf9e3a46.png",
    },
    {
      title: "Meta Frontend Developer",
      organization: "Meta",
      date: "2022",
      logo: "https://cdn.iconscout.com/icon/free/png-512/free-meta-1868672-1583084.png?f=webp&w=256",
    },
    {
      title: "Google Cloud Professional Developer",
      organization: "Google Cloud",
      date: "2022",
      logo: "https://cloud.google.com/images/certification/cloud-developer.png",
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      organization: "Microsoft",
      date: "2021",
      logo: "https://images.credly.com/size/340x340/images/63316b60-f62d-4e51-aacc-c23cb850089c/azure-developer-associate-600x600.png",
    },
    {
      title: "React Native Specialist",
      organization: "React Certification",
      date: "2021",
      logo: "https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg",
    },
    {
      title: "MongoDB Database Administrator",
      organization: "MongoDB University",
      date: "2020",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png",
    },
  ];

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-20"
    >
      <div className="container-section">
        <h2 className={cn(
          "section-title transition-all duration-700 transform",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          Certifications
        </h2>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title}
              className={cn(
                "bg-card p-6 rounded-lg border border-border shadow-sm transition-all duration-500 hover:shadow-md hover:border-primary/20 transform",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 flex items-center justify-center bg-card rounded-md overflow-hidden p-2">
                  <img 
                    src={cert.logo} 
                    alt={cert.organization} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-display font-semibold truncate">{cert.title}</h3>
                  <p className="text-muted-foreground">{cert.organization}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Calendar size={14} className="flex-shrink-0" />
                <span>Issued: {cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
