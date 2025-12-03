import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  CalendarOff, 
  Users, 
  Lightbulb, 
  Music, 
  Building2, 
  Trophy 
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Coverage = () => {
  const { ref, isVisible } = useScrollReveal();
  const coverageTypes = [
    {
      icon: Building2,
      title: "Feiras e Exposições",
      description: "Cobertura completa para stands, equipamentos e materiais em exposição",
      color: "bg-cyan",
      textColor: "text-cyan"
    },
    {
      icon: Users,
      title: "Eventos Corporativos",
      description: "Congressos, convenções e eventos empresariais",
      color: "bg-purple",
      textColor: "text-purple"
    },
    {
      icon: Trophy,
      title: "Eventos Esportivos",
      description: "Competições e eventos culturais de todos os portes",
      color: "bg-lime",
      textColor: "text-lime"
    },
    {
      icon: Music,
      title: "Shows e Musicais",
      description: "Proteção para apresentações artísticas e musicais",
      color: "bg-magenta",
      textColor: "text-magenta"
    },
    {
      icon: Lightbulb,
      title: "Equipamentos",
      description: "Iluminação, som, filmagem e equipamentos diversos",
      color: "bg-gold",
      textColor: "text-gold"
    },
    {
      icon: CalendarOff,
      title: "Cancelamento e Interrupção",
      description: "Cobertura para cancelamento, adiamento ou no-show",
      color: "bg-accent",
      textColor: "text-accent"
    }
  ];

  return (
    <section id="cobertura" className="py-24 lg:py-32 bg-muted/50 relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Tipos de Cobertura</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Coberturas completas para proteger cada aspecto do seu evento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coverageTypes.map((coverage, index) => {
            const Icon = coverage.icon;
            return (
              <Card 
                key={index} 
                className={`hover:shadow-elegant transition-all duration-700 border border-border/50 bg-card group hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl ${coverage.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className={`text-2xl font-display font-bold group-hover:${coverage.textColor} transition-colors duration-300`}>{coverage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">{coverage.description}</CardDescription>
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
