import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Users, 
  Utensils,
  Mic2,
  Settings,
  AlertTriangle,
  Scale,
  Siren,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicosRC = () => {
  const { ref: refHero, isVisible: isHeroVisible } = useScrollReveal();
  const { ref: refCoberturas, isVisible: isCoberturasVisible } = useScrollReveal();

  const coberturas = [
    {
      icon: Shield,
      title: "RC Eventos",
      description: "Cobertura para danos materiais e corporais causados a terceiros durante o evento desde sua concepção até a desmontagem."
    },
    {
      icon: Settings,
      title: "RC Equipamentos",
      description: "Oferece indenização para perdas e danos para equipamentos causados durante o evento ou em exposição."
    },
    {
      icon: Users,
      title: "RC Empregador",
      description: "Danos corporais sofridos por empregados, quando a serviço do segurado ou durante o percurso de ida e volta ao trabalho."
    },
    {
      icon: Utensils,
      title: "RC Restaurantes",
      description: "Cobre danos decorrentes do fornecimento de comestíveis e bebidas para consumo durante o evento. Ex: Intoxicação Alimentar."
    },
    {
      icon: Mic2,
      title: "RC Artistas",
      description: "Cobre os dados sofridos pelo artista durante a participação do evento, excluído os lucros cessantes e perdas financeiras."
    },
    {
      icon: Settings,
      title: "RC Instalação e Montagem",
      description: "Responsabilidade Civil para qualquer acidente durante a montagem e desmontagem."
    },
    {
      icon: AlertTriangle,
      title: "RC Erro de Montagem",
      description: "Cobre os danos causados a terceiros, materiais e/ou corporais, em função de erro de projeto."
    },
    {
      icon: Scale,
      title: "RC Cruzada",
      description: "Danos causados pelas empresas prestadoras de serviços e/ou participantes do evento, aos quais serão considerados entre si."
    },
    {
      icon: Scale,
      title: "RC Danos Morais",
      description: "Todo dano que traz como consequência ofensa à honra, ao afeto, à liberdade, à profissão, ao respeito, à saúde, ao nome e ao prejuízo econômico."
    },
    {
      icon: Siren,
      title: "RC Tumultos",
      description: "Esta cobertura abrange as hipóteses de tumultos ocorridos no evento por culpa do segurado."
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
              Responsabilidade Civil
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto mb-8">
              Proteção completa contra danos materiais e corporais causados a terceiros. Coberturas específicas para cada tipo de situação e necessidade do seu evento ou empresa.
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
            ref={refCoberturas}
            className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isCoberturasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-gradient">Coberturas de RC</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluções completas de Responsabilidade Civil para proteger seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coberturas.map((cobertura, index) => (
              <Card 
                key={index}
                className={`border border-border bg-card hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${isCoberturasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <cobertura.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{cobertura.title}</h3>
                  <p className="text-muted-foreground text-sm">{cobertura.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cancelamento */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border border-border bg-card overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                      Cancelamento, Adiamento ou Interrupção
                    </h3>
                    <p className="text-muted-foreground">
                      Oferece de forma abrangente, indenização para despesas causadas por eventual cancelamento, adiamento ou interrupção do evento, incluindo as geradas pela ausência dos artistas e/ou palestrantes.
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 mt-8">
                  <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span>Cancelamento total</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span>Adiamento</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span>Interrupção parcial</span>
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
            Proteja sua empresa
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Fale com nossos especialistas para uma análise personalizada
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

export default ServicosRC;
