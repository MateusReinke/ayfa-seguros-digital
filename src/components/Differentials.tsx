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
        "Retorno de orçamentos em até 6 horas",
        "Emissão de apólice em 24 horas",
        "Flexibilidade para pagamentos",
        "Apoio na pré-produção do evento"
      ]
    },
    {
      icon: Shield,
      title: "Gestão de Risco",
      color: "bg-purple",
      items: [
        "Análise técnica do evento",
        "Integração com equipe de produção",
        "Orientações sobre prevenção",
        "Sugestão de garantias"
      ]
    },
    {
      icon: Users,
      title: "Relacionamento",
      color: "bg-magenta",
      items: [
        "Gerente de relacionamento dedicado",
        "Workshops com equipe de produção",
        "Projetos especiais personalizados",
        "Atendimento às necessidades da agência"
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
    <section id="diferenciais" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Vibrant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple to-magenta" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--cyan)/0.3),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.3),transparent_40%)]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Por Que Escolher a Ayfa?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Mais de 15 anos de experiência oferecendo as melhores soluções em seguros para eventos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className={`bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-700 group hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl font-display font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {item.items.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-lime mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-white/95 text-base">{benefit}</span>
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
