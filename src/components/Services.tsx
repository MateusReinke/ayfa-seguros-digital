import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import eventsIcon from "@/assets/events-icon.jpg";
import liabilityIcon from "@/assets/liability-icon.jpg";
import personalIcon from "@/assets/personal-icon.jpg";

const Services = () => {
  const services = [
    {
      title: "Seguros de Eventos",
      description: "Garantia de segurança e tranquilidade para o organizador do evento e seu cliente.",
      icon: eventsIcon,
      details: [
        "Transporte de Equipamento",
        "Instalação e Montagem",
        "No Show",
        "Evento Público",
        "Staff",
        "Desmontagem do Evento"
      ]
    },
    {
      title: "Responsabilidade Civil",
      description: "Cobertura para danos materiais e corporais causados a terceiros durante o evento.",
      icon: liabilityIcon,
      details: [
        "RC Equipamentos",
        "RC Empregador",
        "RC Restaurantes",
        "RC Artistas",
        "RC Instalação e Montagem",
        "RC Danos Morais"
      ]
    },
    {
      title: "Seguros de Pessoas",
      description: "Proteção para o público espectador e equipe empregada na produção do evento.",
      icon: personalIcon,
      details: [
        "AP no local do Evento",
        "AP com adicional de traslado",
        "AP 24 Horas para Staff",
        "Morte Acidental",
        "Invalidez por Acidente",
        "Despesas Médicas Hospitalares"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em seguros para garantir o sucesso do seu evento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <CardHeader>
                <div className="w-20 h-20 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-foreground">{detail}</span>
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

export default Services;
