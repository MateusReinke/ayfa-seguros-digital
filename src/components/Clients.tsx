import { Card, CardContent } from "@/components/ui/card";

const Clients = () => {
  const majorEvents = [
    "Lollapalooza Brasil",
    "Rock In Rio",
    "Reveillon na Paulista",
    "Comic Con Experience",
    "Oktoberfest São Paulo",
    "Festival de Inverno",
    "Salão do Automóvel",
    "São Paulo Fashion Week",
    "Carnaval Salvador",
    "Heineken UEFA Champions League",
    "Fifa Fan Fest",
    "Taste of São Paulo"
  ];

  const clients = [
    "Agências de Marketing Promocional",
    "Organizadores de Eventos",
    "Promotores",
    "Centros de Convenções",
    "Patrocinadores",
    "Produtoras de Eventos",
    "Empresas de Publicidade",
    "Promotores de Shows"
  ];

  return (
    <section id="clientes" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Projetos de Destaque
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Presente nos maiores eventos do Brasil
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-24">
          {majorEvents.map((event, index) => (
            <Card 
              key={index} 
              className="hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-card group"
            >
              <CardContent className="p-6 text-center">
                <p className="font-semibold text-foreground text-base group-hover:text-primary transition-colors duration-300">{event}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Quem São Nossos Clientes?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-6 bg-gradient-card rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 group hover:-translate-y-1"
            >
              <span className="text-accent text-3xl font-bold">•</span>
              <span className="text-foreground font-medium text-lg group-hover:text-primary transition-colors duration-300">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
