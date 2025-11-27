import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Shield, Users, Lightbulb } from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: Clock,
      title: "Operacional",
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
      items: [
        "Experiência no ramo de entretenimento",
        "Consultoria para eventos de grande porte",
        "Parceria com grandes marcas",
        "Expertise comprovada no mercado"
      ]
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-gradient-primary text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por Que Escolher a Ayfa?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Diferenciais que fazem da Ayfa a melhor escolha em seguros para eventos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-3">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.items.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-white/90">
                        <span className="text-accent mr-2">✓</span>
                        <span>{detail}</span>
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
