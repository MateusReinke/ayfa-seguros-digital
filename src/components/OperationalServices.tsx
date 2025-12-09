import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  FileText, 
  CreditCard,
  Search,
  Users,
  Shield,
  Headphones,
  GraduationCap,
  Briefcase,
  Building2
} from "lucide-react";

const OperationalServices = () => {
  const { ref, isVisible } = useScrollReveal();

  const categories = [
    {
      title: "Operacional",
      icon: Briefcase,
      color: "bg-primary/10 text-primary",
      items: [
        { icon: Clock, text: "Apoio na pré-produção do evento" },
        { icon: FileText, text: "Retorno de orçamentos em até 6 horas" },
        { icon: FileText, text: "Emissão de apólice/certificado em 24h" },
        { icon: CreditCard, text: "Flexibilidade para pagamentos a faturar" }
      ]
    },
    {
      title: "Gestão de Risco",
      icon: Shield,
      color: "bg-accent/10 text-accent",
      items: [
        { icon: Search, text: "Ferramenta para estimativa de custos de seguro" },
        { icon: FileText, text: "Análise técnica com sugestão de garantias" },
        { icon: Users, text: "Integração com equipe de produção" },
        { icon: Shield, text: "Orientações sobre prevenção e seguros" }
      ]
    },
    {
      title: "Relacionamento",
      icon: Headphones,
      color: "bg-cyan/10 text-cyan",
      items: [
        { icon: Headphones, text: "Gerente de relacionamento dedicado" },
        { icon: GraduationCap, text: "Workshops com equipe de produção" },
        { icon: Briefcase, text: "Know How e experiência no ramo" },
        { icon: Building2, text: "Consultoria para eventos de grande porte" }
      ]
    }
  ];

  return (
    <section id="servicos-operacionais" className="py-16 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div 
          ref={ref}
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Nossos Serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Atendimento completo e especializado para sua tranquilidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, catIndex) => (
            <Card 
              key={catIndex}
              className={`border border-border bg-card overflow-hidden transition-all duration-700 hover:shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              <div className={`p-4 ${category.color.replace('text-', 'bg-').split(' ')[0]}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center bg-background`}>
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-foreground">{category.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <item.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationalServices;
