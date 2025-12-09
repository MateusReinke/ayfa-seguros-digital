import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import eventsIcon from "@/assets/events-icon.jpg";
import liabilityIcon from "@/assets/liability-icon.jpg";
import personalIcon from "@/assets/personal-icon.jpg";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";

const Services = () => {
  const { ref, isVisible } = useScrollReveal();
  const services = [
    {
      title: "Seguros Pessoais",
      description: "Proteção completa para você e sua família, garantindo tranquilidade em todos os momentos da vida.",
      icon: personalIcon,
      color: "bg-cyan",
      link: "/servicos/acidentes-pessoais",
      details: [
        "Seguro de Vida",
        "Acidentes Pessoais",
        "Seguro Viagem",
        "Seguro Residencial",
        "Planos de Saúde",
        "Previdência Privada"
      ]
    },
    {
      title: "Seguros Empresariais",
      description: "Soluções sob medida para proteger seu negócio, funcionários e patrimônio empresarial.",
      icon: liabilityIcon,
      color: "bg-purple",
      link: "/servicos/responsabilidade-civil",
      details: [
        "Seguro Empresarial",
        "Responsabilidade Civil",
        "Seguro de Frota",
        "Seguro de Carga",
        "Riscos de Engenharia",
        "Seguro Garantia",
        "D&O (Diretores)",
        "Cyber Risks"
      ]
    },
    {
      title: "Seguros de Eventos",
      description: "Segurança e tranquilidade para organizadores de eventos, do planejamento à desmontagem.",
      icon: eventsIcon,
      color: "bg-accent",
      link: "/servicos/eventos",
      details: [
        "Cancelamento de Evento",
        "Responsabilidade Civil",
        "Acidentes Pessoais",
        "Equipamentos",
        "No Show de Artistas",
        "Cobertura Climática"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-primary rounded-full blur-3xl" style={{ opacity: 0.05 }} />
      <div className="absolute bottom-0 left-0 w-40 md:w-80 h-40 md:h-80 bg-purple rounded-full blur-3xl" style={{ opacity: 0.05 }} />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-gradient">Nossos Serviços</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Soluções completas em seguros para pessoas, empresas e eventos. 
            Encontre a proteção ideal para cada necessidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden transition-all duration-700 border border-border bg-card group hover:-translate-y-2 hover:shadow-elegant ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 ${service.color}`} />
              
              <CardContent className="p-5 md:p-8 lg:p-10 flex flex-col h-full">
                <div className={`w-16 md:w-24 h-16 md:h-24 mb-5 md:mb-8 rounded-xl md:rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-500 ring-4 ring-offset-2 ring-offset-card ring-transparent group-hover:ring-primary/30`}>
                  <img src={service.icon} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-card-foreground mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base lg:text-lg leading-relaxed">{service.description}</p>
                <ul className="space-y-2 md:space-y-3 mb-6 flex-grow">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-4 md:w-5 h-4 md:h-5 text-accent mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base text-card-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full mt-auto group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                  <Link to={service.link}>
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;