import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import eventsIcon from "@/assets/events-icon.jpg";
import liabilityIcon from "@/assets/liability-icon.jpg";
import personalIcon from "@/assets/personal-icon.jpg";
import { CheckCircle2, ChevronDown, Shield, Users, FileCheck, Building, Briefcase, Calendar, Truck, HardHat, Scale, Monitor, Heart, Plane, Home, Stethoscope, PiggyBank } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";

const Services = () => {
  const { ref, isVisible } = useScrollReveal();
  const [openService, setOpenService] = useState<number | null>(null);

  const services = [
    {
      title: "Seguros Pessoais",
      description: "Proteção completa para você e sua família, garantindo tranquilidade em todos os momentos da vida.",
      icon: personalIcon,
      color: "bg-cyan",
      details: [
        "Seguro de Vida",
        "Acidentes Pessoais",
        "Seguro Viagem",
        "Seguro Residencial",
        "Planos de Saúde",
        "Previdência Privada"
      ],
      expandedContent: {
        description: "Oferecemos uma linha completa de seguros pessoais para proteger você e sua família em todas as situações da vida.",
        coverages: [
          { icon: Heart, title: "Seguro de Vida", desc: "Proteção financeira para sua família em caso de imprevistos" },
          { icon: Shield, title: "Acidentes Pessoais", desc: "Cobertura para acidentes em qualquer lugar do mundo" },
          { icon: Plane, title: "Seguro Viagem", desc: "Viaje com tranquilidade, cobertura médica e bagagem" },
          { icon: Home, title: "Seguro Residencial", desc: "Proteção completa para seu lar e seus bens" },
          { icon: Stethoscope, title: "Planos de Saúde", desc: "Acesso aos melhores hospitais e médicos" },
          { icon: PiggyBank, title: "Previdência Privada", desc: "Planeje seu futuro com segurança financeira" }
        ]
      }
    },
    {
      title: "Seguros Empresariais",
      description: "Soluções sob medida para proteger seu negócio, funcionários e patrimônio empresarial.",
      icon: liabilityIcon,
      color: "bg-purple",
      details: [
        "Seguro Empresarial",
        "Responsabilidade Civil",
        "Seguro de Frota",
        "Seguro de Carga",
        "Riscos de Engenharia",
        "Seguro Garantia",
        "D&O (Diretores)",
        "Cyber Risks"
      ],
      expandedContent: {
        description: "Proteja sua empresa com soluções completas que garantem a continuidade do seu negócio.",
        coverages: [
          { icon: Building, title: "Seguro Empresarial", desc: "Proteção patrimonial completa para sua empresa" },
          { icon: Scale, title: "Responsabilidade Civil", desc: "Cobertura para danos causados a terceiros" },
          { icon: Truck, title: "Seguro de Frota", desc: "Proteção para todos os veículos da empresa" },
          { icon: FileCheck, title: "Seguro de Carga", desc: "Garanta suas mercadorias durante o transporte" },
          { icon: HardHat, title: "Riscos de Engenharia", desc: "Cobertura para obras e instalações" },
          { icon: Briefcase, title: "D&O (Diretores)", desc: "Proteção para executivos e administradores" },
          { icon: Monitor, title: "Cyber Risks", desc: "Segurança contra ataques cibernéticos" },
          { icon: Shield, title: "Seguro Garantia", desc: "Garantia de cumprimento contratual" }
        ]
      }
    },
    {
      title: "Seguros de Eventos",
      description: "Segurança e tranquilidade para organizadores de eventos, do planejamento à desmontagem.",
      icon: eventsIcon,
      color: "bg-accent",
      details: [
        "Cancelamento de Evento",
        "Responsabilidade Civil",
        "Acidentes Pessoais",
        "Equipamentos",
        "No Show de Artistas",
        "Cobertura Climática"
      ],
      expandedContent: {
        description: "Somos especialistas em seguros para eventos, oferecendo cobertura completa desde a montagem até a desmontagem.",
        coverages: [
          { icon: Calendar, title: "Cancelamento de Evento", desc: "Proteção contra cancelamento por motivos cobertos" },
          { icon: Scale, title: "Responsabilidade Civil", desc: "Cobertura para danos ao público e terceiros" },
          { icon: Users, title: "Acidentes Pessoais", desc: "Proteção para equipe técnica e participantes" },
          { icon: Monitor, title: "Equipamentos", desc: "Cobertura para equipamentos de som, luz e estrutura" },
          { icon: Shield, title: "No Show de Artistas", desc: "Proteção contra não comparecimento de artistas" },
          { icon: FileCheck, title: "Cobertura Climática", desc: "Proteção contra intempéries e fenômenos naturais" }
        ]
      }
    }
  ];

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index);
  };

  return (
    <section id="servicos" className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-primary rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-0 left-0 w-40 md:w-80 h-40 md:h-80 bg-purple rounded-full blur-3xl opacity-5" />
      
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

        {/* Cards em grid horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`overflow-hidden transition-all duration-700 border border-border bg-card ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${openService === index ? 'ring-2 ring-primary' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 ${service.color}`} />
              
              <CardContent className="p-5 md:p-6">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 md:w-20 h-16 md:h-20 rounded-xl overflow-hidden ring-4 ring-offset-2 ring-offset-card ring-primary/20 mb-4`}>
                    <img src={service.icon} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  
                  <h3 className="font-display text-lg md:text-xl font-bold text-card-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                  
                  <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                    {service.details.slice(0, 4).map((detail, idx) => (
                      <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-secondary text-secondary-foreground">
                        <CheckCircle2 className="w-3 h-3 mr-1 text-accent" />
                        {detail}
                      </span>
                    ))}
                    {service.details.length > 4 && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-secondary text-secondary-foreground">
                        +{service.details.length - 4} mais
                      </span>
                    )}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => toggleService(index)}
                  >
                    Ver Coberturas
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${openService === index ? 'rotate-180' : ''}`} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Conteúdo expandido abaixo dos cards */}
        {openService !== null && (
          <div className="mt-8 animate-fade-in">
            <Card className="overflow-hidden border border-primary bg-card">
              <div className={`h-1.5 ${services[openService].color}`} />
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl overflow-hidden ring-2 ring-primary/20`}>
                    <img src={services[openService].icon} alt={services[openService].title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-card-foreground">
                      {services[openService].title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {services[openService].expandedContent.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {services[openService].expandedContent.coverages.map((coverage, idx) => (
                    <div 
                      key={idx} 
                      className="p-4 rounded-xl bg-secondary border border-border hover:border-primary/50 transition-all duration-300 group/item"
                    >
                      <div className={`w-10 h-10 rounded-lg ${services[openService].color} flex items-center justify-center mb-3`}>
                        <coverage.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <h4 className="font-semibold text-card-foreground mb-1 group-hover/item:text-primary transition-colors">
                        {coverage.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {coverage.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Button 
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Solicitar Cotação
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
