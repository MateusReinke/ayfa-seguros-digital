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
    <section className="py-20 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projetos de Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Presente nos maiores eventos do Brasil
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {majorEvents.map((event, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <CardContent className="p-6 text-center">
                <p className="font-semibold text-foreground">{event}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Quem São Nossos Clientes?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-all"
            >
              <span className="text-accent text-2xl">•</span>
              <span className="text-foreground font-medium">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
