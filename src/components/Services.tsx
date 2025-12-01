import { Card, CardContent } from "@/components/ui/card";
import eventsIcon from "@/assets/events-icon.jpg";
import liabilityIcon from "@/assets/liability-icon.jpg";
import personalIcon from "@/assets/personal-icon.jpg";
import { CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Services = () => {
  const { ref, isVisible } = useScrollReveal();
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
    <section id="servicos" className="py-24 lg:py-32 bg-gradient-soft" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soluções completas em seguros para cada tipo de evento e necessidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden hover:shadow-elegant transition-all duration-700 border-0 bg-gradient-card group hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 lg:p-10">
                <div className="w-24 h-24 mb-8 rounded-2xl overflow-hidden shadow-card group-hover:scale-110 transition-transform duration-500">
                  <img src={service.icon} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                      <span className="text-base text-foreground/90">{detail}</span>
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
