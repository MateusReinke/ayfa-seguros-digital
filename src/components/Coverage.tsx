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
      description: "Cobertura completa para stands, equipamentos e materiais em exposição"
    },
    {
      icon: Users,
      title: "Eventos Corporativos",
      description: "Congressos, convenções e eventos empresariais"
    },
    {
      icon: Trophy,
      title: "Eventos Esportivos",
      description: "Competições e eventos culturais de todos os portes"
    },
    {
      icon: Music,
      title: "Shows e Musicais",
      description: "Proteção para apresentações artísticas e musicais"
    },
    {
      icon: Lightbulb,
      title: "Equipamentos",
      description: "Iluminação, som, filmagem e equipamentos diversos"
    },
    {
      icon: CalendarOff,
      title: "Cancelamento e Interrupção",
      description: "Cobertura para cancelamento, adiamento ou no-show"
    }
  ];

  return (
    <section id="cobertura" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Tipos de Cobertura
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
                className={`hover:shadow-elegant transition-all duration-700 border-0 bg-gradient-card group hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500 shadow-card">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-display font-bold group-hover:text-primary transition-colors duration-300">{coverage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-foreground/70">{coverage.description}</CardDescription>
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
