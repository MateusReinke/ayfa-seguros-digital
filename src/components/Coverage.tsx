import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CalendarOff, 
  Users, 
  Lightbulb, 
  Music, 
  Building2, 
  Trophy 
} from "lucide-react";

const Coverage = () => {
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
    <section id="cobertura" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tipos de Cobertura
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proteção abrangente para todos os tipos de eventos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverageTypes.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 border-border bg-card group"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
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
