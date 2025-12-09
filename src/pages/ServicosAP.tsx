import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  MapPin,
  Bus,
  Clock,
  Heart,
  AlertCircle,
  Stethoscope,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicosAP = () => {
  const { ref: refHero, isVisible: isHeroVisible } = useScrollReveal();
  const { ref: refTipos, isVisible: isTiposVisible } = useScrollReveal();
  const { ref: refCoberturas, isVisible: isCoberturasVisible } = useScrollReveal();

  const tiposAP = [
    {
      icon: MapPin,
      title: "AP no Local do Evento",
      description: "Indicado para o público presente no evento. Cobertura durante toda a permanência no local.",
      destaque: "Público Geral"
    },
    {
      icon: Bus,
      title: "AP com Adicional de Traslado",
      description: "Indicado para eventos em que o organizador se responsabilize pelo translado de convidados.",
      destaque: "Transporte Incluso"
    },
    {
      icon: Clock,
      title: "AP 24 Horas",
      description: "Indicado para Staff, principalmente em eventos em outras cidades. Cobertura integral.",
      destaque: "Staff e Equipe"
    }
  ];

  const coberturas = [
    {
      icon: AlertCircle,
      title: "Morte Acidental",
      description: "Indenização para beneficiários em caso de morte por acidente."
    },
    {
      icon: Heart,
      title: "Invalidez por Acidente",
      description: "Cobertura para invalidez permanente total ou parcial."
    },
    {
      icon: Stethoscope,
      title: "Despesas Médico-Hospitalares",
      description: "Reembolso de despesas médicas e hospitalares decorrentes de acidentes."
    }
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
              Acidentes Pessoais
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto mb-8">
              Destina-se ao público espectador e à equipe empregada na produção do evento. Proteção completa para casos de morte acidental, invalidez por acidente e despesas médico-hospitalares.
            </p>
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <Link to="/#contato">
                Solicitar Cotação <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tipos de AP */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div 
            ref={refTipos}
            className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isTiposVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-gradient">Tipos de Cobertura</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Escolha a modalidade ideal para seu evento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiposAP.map((tipo, index) => (
              <Card 
                key={index}
                className={`border border-border bg-card hover:shadow-lg transition-all duration-500 hover:-translate-y-1 relative overflow-hidden ${isTiposVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  {tipo.destaque}
                </div>
                <CardContent className="p-6 pt-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <tipo.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{tipo.title}</h3>
                  <p className="text-muted-foreground">{tipo.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coberturas */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6">
          <div 
            ref={refCoberturas}
            className={`text-center mb-12 transition-all duration-1000 ${isCoberturasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-warm">O que está coberto?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {coberturas.map((cobertura, index) => (
              <Card 
                key={index}
                className={`border border-border bg-card text-center transition-all duration-500 ${isCoberturasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <cobertura.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{cobertura.title}</h3>
                  <p className="text-muted-foreground text-sm">{cobertura.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Público Alvo */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border border-border bg-card">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    Para quem é indicado?
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>Público espectador</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>Equipe de produção</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>Staff do evento</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>Convidados VIP</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>Palestrantes e artistas</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>Prestadores de serviço</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Proteja seu público e equipe
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Garanta a segurança de todos os envolvidos no seu evento
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

export default ServicosAP;
