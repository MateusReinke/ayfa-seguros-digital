import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  CalendarOff, 
  Users, 
  Lightbulb, 
  Music, 
  Building2, 
  Trophy,
  PartyPopper,
  Heart
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Coverage = () => {
  const { ref, isVisible } = useScrollReveal();
  const coverageTypes = [
    {
      icon: Building2,
      title: "Feiras e Exposições",
      description: "Cobertura completa para stands, equipamentos e materiais em exposição",
      color: "bg-cyan"
    },
    {
      icon: Users,
      title: "Congressos e Convenções",
      description: "Eventos corporativos, congressos e convenções empresariais",
      color: "bg-purple"
    },
    {
      icon: Trophy,
      title: "Eventos Esportivos e Culturais",
      description: "Competições esportivas e eventos culturais de todos os portes",
      color: "bg-lime"
    },
    {
      icon: Music,
      title: "Shows e Musicais",
      description: "Proteção para apresentações artísticas e musicais",
      color: "bg-magenta"
    },
    {
      icon: Lightbulb,
      title: "Equipamentos",
      description: "Iluminação, som, filmagem e equipamentos diversos em exposição",
      color: "bg-gold"
    },
    {
      icon: CalendarOff,
      title: "Cancelamento e No Show",
      description: "Cobertura para cancelamento, adiamento ou não comparecimento de artistas",
      color: "bg-accent"
    },
    {
      icon: PartyPopper,
      title: "Festas e Formaturas",
      description: "Casamentos, formaturas, festas e eventos sociais diversos",
      color: "bg-teal"
    },
    {
      icon: Heart,
      title: "Peças Teatrais",
      description: "Proteção para apresentações teatrais e produções artísticas",
      color: "bg-primary"
    }
  ];

  return (
    <section id="cobertura" className="py-16 md:py-24 lg:py-32 bg-secondary relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 md:w-72 h-40 md:h-72 bg-purple rounded-full blur-3xl" style={{ opacity: 0.05 }} />
      <div className="absolute bottom-20 left-10 w-32 md:w-64 h-32 md:h-64 bg-cyan rounded-full blur-3xl" style={{ opacity: 0.05 }} />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-gradient">Tipos de Cobertura</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Coberturas completas para proteger cada aspecto do seu evento
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {coverageTypes.map((coverage, index) => {
            const Icon = coverage.icon;
            return (
              <Card 
                key={index} 
                className={`hover:shadow-elegant transition-all duration-700 border border-border bg-card group hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3 md:pb-4 p-4 md:p-6">
                  <div className={`w-12 md:w-16 h-12 md:h-16 rounded-xl md:rounded-2xl ${coverage.color} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-all duration-500`}>
                    <Icon className="w-6 md:w-8 h-6 md:h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg md:text-xl lg:text-2xl font-display font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">{coverage.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <CardDescription className="text-sm md:text-base leading-relaxed text-muted-foreground">{coverage.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Coverage;