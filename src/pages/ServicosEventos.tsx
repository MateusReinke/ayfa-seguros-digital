import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Truck, 
  Settings, 
  Music, 
  Users, 
  Wrench,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Building,
  PartyPopper,
  Mic2,
  Theater
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicosEventos = () => {
  const { ref: refHero, isVisible: isHeroVisible } = useScrollReveal();
  const { ref: refCobertura, isVisible: isCoberturaVisible } = useScrollReveal();
  const { ref: refTipos, isVisible: isTiposVisible } = useScrollReveal();
  const { ref: refClientes, isVisible: isClientesVisible } = useScrollReveal();

  const coberturas = [
    {
      icon: Truck,
      title: "Transporte de Equipamento",
      description: "Cobertura para danos durante o transporte de equipamentos para o evento."
    },
    {
      icon: Settings,
      title: "Instalação e Montagem",
      description: "Proteção durante toda a fase de montagem e instalação do evento."
    },
    {
      icon: Music,
      title: "No Show",
      description: "Cobertura para não comparecimento de artistas e palestrantes."
    },
    {
      icon: Users,
      title: "Evento Público",
      description: "Proteção completa durante a realização do evento para o público."
    },
    {
      icon: Shield,
      title: "Staff",
      description: "Cobertura para toda a equipe envolvida na produção e execução."
    },
    {
      icon: Wrench,
      title: "Desmontagem do Evento",
      description: "Proteção durante a fase de desmontagem e retirada de estruturas."
    }
  ];

  const tiposEventos = [
    { icon: Building, title: "Feiras e Exposições" },
    { icon: Calendar, title: "Eventos Corporativos" },
    { icon: PartyPopper, title: "Congressos e Convenções" },
    { icon: Mic2, title: "Shows e Musicais" },
    { icon: Theater, title: "Peças Teatrais" },
    { icon: Users, title: "Formaturas e Casamentos" }
  ];

  const equipamentos = [
    "Iluminação",
    "Som",
    "Filmagem",
    "Equipamentos diversos em exposição"
  ];

  const clientes = [
    "Agências de eventos",
    "Marketing Promocional e Publicidade",
    "Organizadores",
    "Promotores",
    "Centro de convenções e Exposições",
    "Patrocinadores",
    "Stands em feiras/exposição"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container px-4 md:px-6 relative z-10">
          <div 
            ref={refHero}
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Seguros de Eventos
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto mb-8">
              O seguro para eventos tem a finalidade de garantir segurança e tranquilidade para o organizador do evento e seu cliente. Destinado ao segmento de entretenimento, esse produto garante a reposição de prejuízos e eventuais imprevistos ocorridos antes, durante e após o evento.
            </p>
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <Link to="/#contato">
                Solicitar Cotação <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Coberturas */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div 
            ref={refCobertura}
            className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isCoberturaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-gradient">Coberturas Disponíveis</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proteção completa em todas as fases do seu evento
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coberturas.map((cobertura, index) => (
              <Card 
                key={index}
                className={`border border-border bg-card hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${isCoberturaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <cobertura.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{cobertura.title}</h3>
                  <p className="text-muted-foreground text-sm">{cobertura.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Eventos */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6">
          <div 
            ref={refTipos}
            className={`text-center mb-12 transition-all duration-1000 ${isTiposVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-warm">Tipos de Eventos</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {tiposEventos.map((tipo, index) => (
              <div 
                key={index}
                className={`flex flex-col items-center text-center p-4 rounded-xl bg-card border border-border transition-all duration-500 ${isTiposVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <tipo.icon className="h-8 w-8 text-accent mb-2" />
                <span className="text-sm font-medium text-foreground">{tipo.title}</span>
              </div>
            ))}
          </div>

          {/* Equipamentos */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-border bg-card">
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  Equipamentos Cobertos
                </h3>
                <ul className="space-y-2">
                  {equipamentos.map((equip, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      {equip}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card">
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-accent" />
                  Cancelamento/Adiamento/Interrupção
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Não comparecimento do artista
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Condições Climáticas adversas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    No Show
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div 
            ref={refClientes}
            className={`text-center mb-12 transition-all duration-1000 ${isClientesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Quem são os clientes?
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {clientes.map((cliente, index) => (
              <span 
                key={index}
                className={`px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm transition-all duration-500 ${isClientesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {cliente}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Proteja seu próximo evento
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para uma cotação personalizada
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link to="/#contato">
              Fale Conosco <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicosEventos;
