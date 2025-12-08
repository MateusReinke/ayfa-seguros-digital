import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Shield, Users, Lightbulb, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Differentials = () => {
  const { ref, isVisible } = useScrollReveal();
  const differentials = [
    {
      icon: Clock,
      title: "Operacional",
      color: "bg-cyan",
      items: [
        "Apoio na pré-produção do evento",
        "Ferramenta para estimativa de custos",
        "Retorno de orçamentos em até 6 horas",
        "Emissão de apólice em 24 horas",
        "Flexibilidade para pagamentos a faturar"
      ]
    },
    {
      icon: Shield,
      title: "Gestão de Risco",
      color: "bg-purple",
      items: [
        "Análise técnica do evento",
        "Sugestão de garantias e importância segurada",
        "Integração com equipe de produção",
        "Orientações sobre prevenção e seguros"
      ]
    },
    {
      icon: Users,
      title: "Relacionamento",
      color: "bg-magenta",
      items: [
        "Gerente de relacionamento dedicado",
        "Atendimento às necessidades da agência",
        "Workshops com equipe de produção",
        "Desenvolvimento de projetos especiais"
      ]
    },
    {
      icon: Lightbulb,
      title: "Know How",
      color: "bg-gold",
      items: [
        "Experiência no ramo de entretenimento",
        "Consultoria para eventos de grande porte",
        "Parceria com grandes marcas",
        "Expertise comprovada no mercado"
      ]
    }
  ];

  return (
    <section id="diferenciais" className="py-16 md:py-24 lg:py-32 bg-primary relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 md:w-72 h-40 md:h-72 bg-cyan rounded-full blur-3xl" style={{ opacity: 0.1 }} />
      <div className="absolute bottom-20 left-10 w-32 md:w-64 h-32 md:h-64 bg-accent rounded-full blur-3xl" style={{ opacity: 0.1 }} />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 md:mb-6">
            Por Que Escolher a Ayfa?
          </h2>
          <p className="text-base md:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed px-2">
            Mais de 15 anos de experiência oferecendo as melhores soluções em seguros para eventos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className={`bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/15 hover:border-primary-foreground/30 transition-all duration-700 group hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-3 md:pb-4 p-4 md:p-6">
                  <div className={`w-12 md:w-16 h-12 md:h-16 rounded-xl md:rounded-2xl ${item.color} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-all duration-500`}>
                    <Icon className="w-6 md:w-8 h-6 md:h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-primary-foreground text-lg md:text-xl lg:text-2xl font-display font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <ul className="space-y-2 md:space-y-3">
                    {item.items.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-4 md:w-5 h-4 md:h-5 text-lime mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-primary-foreground/90 text-sm md:text-base">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentials;